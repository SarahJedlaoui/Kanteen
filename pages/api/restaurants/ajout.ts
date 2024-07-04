import { NextApiRequest, NextApiResponse } from 'next';
import AWS from 'aws-sdk';

AWS.config.update({
  region: process.env.AWS_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const dynamoDb = new AWS.DynamoDB.DocumentClient();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, about, customerLove, opportunities, videoParagraph, email } = req.body;

  if (!name || !about || !customerLove || !opportunities || !videoParagraph || !email) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const params = {
    TableName: 'restaurants',
    Item: {
      email,
      name,
      about,
      customerLove,
      opportunities,
      videoParagraph,
      date: new Date().toISOString(),
      status: 'pending',
    },
  };

  try {
    await dynamoDb.put(params).promise();
    res.status(200).json({ message: 'Restaurant added successfully' });
  } catch (error) {
    console.error('Add restaurant error:', error.message);
    console.error('Stack trace:', error.stack);
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};

export default handler;
