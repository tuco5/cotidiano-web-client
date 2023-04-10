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
  const {method, body, query} = req;
  if (method === 'PATCH') {
    try {
      await connectMongo();
      await Estate.updateOne({_id: query.id}, body);

      res.status(204).json({message: `estate ${query.id} modified successfully`});
    } catch (err) {
      console.error(err);
    }
  }

  if (method === 'GET') {
    try {
      await connectMongo();
      const estate = await Estate.findById(query.id);

      res.status(200).json({message: `Success`, data: estate});
    } catch (err) {
      console.error(err);
    }
  }
}
