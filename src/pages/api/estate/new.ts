import type {NextApiRequest, NextApiResponse} from 'next';
import connectMongo from '@/lib/mongoose';
import {EstateI, Estate} from '@/models/Estate';

type Data = {
  message: string;
  data?: EstateI;
};

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const {method, body} = req;
  if (method === 'POST') {
    const estate = new Estate(body);

    try {
      await connectMongo();
      await estate.save();

      res.status(201).json({message: 'new estate create successfully', data: estate});
    } catch (err) {
      console.error(err);
    }
  }
}
