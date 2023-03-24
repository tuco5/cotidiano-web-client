import type {NextApiRequest, NextApiResponse} from 'next';
import {connectMongo, disconnectMongo} from '@/lib/mongoose';
import {User, IUser} from '@/models/User';

type Data = {
  message: string;
  data: IUser[];
};

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  try {
    await connectMongo();

    /** GET **/
    if (req.method === 'GET') {
      const users = await User.find({});
      disconnectMongo();
      res.status(200).json({message: 'success', data: users});
    }
  } catch (err) {
    console.error(err);
  }
}
