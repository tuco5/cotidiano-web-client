import type {NextApiRequest, NextApiResponse} from 'next';
import {getServerSession} from 'next-auth/next';
import {authOptions} from '@/pages/api/auth/[...nextauth]';
import connectMongo from '@/lib/mongoose';
import {User, UserDoc} from '@/models/User';

type Data = {
  message: string;
  data?: UserDoc[];
};

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    res.status(401).json({message: 'You must be logged in.'});
  }

  if (session?.user.role !== 'admin') {
    res.status(403).json({message: 'Access denied'});
  }

  try {
    await connectMongo();

    const users = await User.find({});
    res.status(200).json({message: 'success', data: users});
  } catch (err) {
    console.error(err);
  }
}
