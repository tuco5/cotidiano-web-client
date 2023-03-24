import type {NextApiRequest, NextApiResponse} from 'next';
import {connectMongo, disconnectMongo} from '@/lib/connect-mongo';
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
    console.log('CONNECTING TO MONGO');
    await connectMongo();
    console.log('CONNECTED TO MONGO');

    /** CREATE **/
    if (req.method === 'POST') {
      let user = await User.findOne({email: req.body?.email});
      console.log(user);
      if (!user) {
        user = await User.create(req.body);
        console.log(user);
      }
      disconnectMongo();
      res.status(201).json({message: 'success', data: [user]});
    }

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
