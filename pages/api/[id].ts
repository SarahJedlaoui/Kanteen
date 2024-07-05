// pages/api/media/[id].ts
import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '../../lib/mongodb';
import { ObjectId, GridFSBucket } from 'mongodb';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const client = await clientPromise;
    const db = client.db();
    const bucket = new GridFSBucket(db, { bucketName: 'media' });
    const fileId = new ObjectId(req.query.id as string);

    const downloadStream = bucket.openDownloadStream(fileId);

    downloadStream.on('file', (file) => {
      res.setHeader('Content-Type', file.contentType);
    });

    downloadStream.on('data', (chunk) => {
      res.write(chunk);
    });

    downloadStream.on('end', () => {
      res.end();
    });

    downloadStream.on('error', (err) => {
      console.error('Error in download stream:', err);
      res.status(500).json({ error: 'Failed to retrieve file' });
    });
  } catch (error) {
    console.error('Error in GET file handler:', error);
    res.status(500).json({ error: 'Failed to retrieve file' });
  }
};

export default handler;
