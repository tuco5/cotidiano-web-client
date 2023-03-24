import type {NextApiRequest, NextApiResponse} from 'next';
import {connectMongo, disconnectMongo} from '@/lib/connect-mongo';
import {User, IUser} from '@/models/User';

type Data = {
  message: string;
  data?: IUser;
};

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const {id} = req.query;

  try {
    console.log('CONNECTING TO MONGO');
    await connectMongo();
    console.log('CONNECTED TO MONGO');

    const user = await User.findOne({id});

    if (!user) {
      res.status(404).json({message: 'Not Found'});
    }

    disconnectMongo();
    res.status(200).json({message: 'success', data: user!});
  } catch (err) {
    console.error(err);
  }
}
