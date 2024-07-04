// pages/api/media.ts
import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '../../../lib/mongodb';
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
    console.log('Request method:', req.method);  // Log request method

    if (req.method === 'POST') {
        await runMiddleware(req, res, uploadMiddleware);

        const { name, feedback, rating } = req.body;

        try {
            const client = await clientPromise;
            console.log('Connected to MongoDB');  // Log successful DB connection
            const db = client.db();
            const bucket = new GridFSBucket(db, {
                bucketName: 'media',
            });

            const uploadPromises = req.files.map((file: any) => {
                return new Promise((resolve, reject) => {
                    const uploadStream = bucket.openUploadStream(file.originalname, {
                        contentType: file.mimetype,
                        metadata: { name, feedback, rating, buffer: file.buffer.toString('base64') },
                    });
                    uploadStream.end(file.buffer, (err, file) => {
                        if (err) {
                            console.error('Error uploading file:', err);  // Log upload error
                            return reject(err);
                          }
                          resolve(file);
                        });
                });
            });

            const uploadedFiles = await Promise.all(uploadPromises);

            // Store a reference to the feedback with all the file ids
            const feedbackEntry = {
                name,
                feedback,
                rating,
                files: uploadedFiles.map(file => ({
                    filename: file.filename,
                    contentType: file.contentType,
                    buffer: file.metadata.buffer,
                })),
            };

            await db.collection('feedback').insertOne(feedbackEntry);
            console.log('Feedback uploaded successfully');  // Log successful upload

            res.status(200).json({ message: 'Feedback uploaded successfully' });
        } catch (error) {
            console.error('Error in POST handler:', error);  // Log general error
            res.status(500).json({ error: 'Failed to upload feedback' });
        }
    } else if (req.method === 'GET') {
        console.log('Request method:', req.method);  // Log request method
        try {
            const client = await clientPromise;
            console.log('Connecteddd to MongoDB');  // Log successful DB connection
            const db = client.db();

            const feedbackEntries = await db.collection('feedback').find().toArray();
            console.log('Fetched feedback entries');  // Log successful fetch
            res.status(200).json({ feedbackEntries });
        } catch (error) {
            console.error('Error in GET handler:', error);  // Log general error
            res.status(500).json({ error: 'Failed to retrieve feedback' });
        }
    } else {
        res.setHeader('Allow', ['POST', 'GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
};

export const config = {
    api: {
        bodyParser: false,
    },
};

export default handler;

