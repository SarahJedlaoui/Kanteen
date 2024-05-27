import { NextApiRequest, NextApiResponse } from 'next';
import { IncomingForm } from 'formidable';
import fs from 'fs';
import path from 'path';
import clientPromise from '../../../lib/mongodb';

export const config = {
  api: {
    bodyParser: false,
  },
};

const uploadDir = path.join(process.cwd(), 'public', 'uploads');

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const form = new IncomingForm({ uploadDir, keepExtensions: true });

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error('Error parsing form data:', err);
      return res.status(500).json({ message: 'Error parsing form data' });
    }

    const { image } = files;
    if (!image) {
      console.error('Image file is missing in the form data');
      return res.status(400).json({ message: 'Image file is required' });
    }

    const imagePath = Array.isArray(image) ? image[0].filepath : image.filepath;
    const client = await clientPromise;
    const db = client.db();

    try {
      const email = fields.email as string;
      if (!email) {
        console.error('Email is missing in form data');
        return res.status(400).json({ message: 'Email is required' });
      }

      const imageUrl = `/uploads/${path.basename(imagePath)}`;

      const result = await db.collection('users').updateOne(
        { email },
        { $set: { image: imageUrl } }
      );

      if (result.modifiedCount === 0) {
        console.error('No user found with the provided email');
        return res.status(404).json({ message: 'User not found' });
      }

      res.status(200).json({ imageUrl });
    } catch (error) {
      console.error('Error updating user image:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
};

export default handler;
