import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import clientPromise from '../../../lib/mongodb';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  

  const { name, about, customerLove, opportunities, videoParagraph, videos, email } = req.body;

  if (!name || !about || !customerLove || !opportunities || !videoParagraph || !videos|| !email) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const client = await clientPromise;
    const db = client.db();

    await db.collection('restaurants').insertOne({
      email,
      name,
      about,
      customerLove,
      opportunities,
      videoParagraph,
      videos,
    });

    res.status(201).json({ message: 'Restaurant information added successfully' });
  } catch (error) {
    console.error('Add restaurant error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export default handler;
