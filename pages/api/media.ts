import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '../../lib/mongodb';
import multer from 'multer';
import { GridFSBucket } from 'mongodb';

const upload = multer({
  storage: multer.memoryStorage(),
});

const uploadMiddleware = upload.array('media');

const runMiddleware = (req: NextApiRequest, res: NextApiResponse, fn: any) => {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
};

const handler = async (req: NextApiRequest & { files: any }, res: NextApiResponse) => {
  if (req.method === 'POST') {
    await runMiddleware(req, res, uploadMiddleware);

    const { name, feedback, rating } = req.body;

    try {
      const client = await clientPromise;
      const db = client.db();
      const bucket = new GridFSBucket(db, {
        bucketName: 'media',
      });

      const uploadPromises = req.files.map((file: any) => {
        return new Promise((resolve, reject) => {
          const uploadStream = bucket.openUploadStream(file.originalname, {
            contentType: file.mimetype,
            metadata: { name, feedback, rating },
          });
          uploadStream.end(file.buffer, (err, file) => {
            if (err) {
              console.error('Error uploading file:', err);
              return reject(err);
            }
            resolve(file);
          });
        });
      });

      const uploadedFiles = await Promise.all(uploadPromises);

      const feedbackEntry = {
        name,
        feedback,
        rating,
        files: uploadedFiles.map(file => ({
          id: file._id,
          filename: file.filename,
          contentType: file.contentType,
        })),
      };

      await db.collection('feedback').insertOne(feedbackEntry);
      res.status(200).json({ message: 'Feedback uploaded successfully' });
    } catch (error) {
      console.error('Error in POST handler:', error);
      res.status(500).json({ error: 'Failed to upload feedback' });
    }
  } else if (req.method === 'GET') {
    try {
      const client = await clientPromise;
      const db = client.db();

      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 10;
      const skip = (page - 1) * limit;

      const feedbackEntries = await db.collection('feedback')
        .find({}, { projection: { name: 1, feedback: 1, rating: 1, files: 1 } })
        .skip(skip)
        .limit(limit)
        .toArray();

      res.status(200).json({ feedbackEntries, page, limit });
    } catch (error) {
      console.error('Error in GET handler:', error.message);
      console.error('Stack Trace:', error.stack);
      res.status(500).json({ error: 'Failed to retrieve feedback' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
