import type {NextApiRequest, NextApiResponse} from 'next';
import {connectMongo} from '@/lib/mongoose';
import {authOptions} from '@/pages/api/auth/[...nextauth]';
import {getServerSession} from 'next-auth/next';
import {Estate, EstateDoc} from '@/models/Estate';

type Data = {
  message: string;
  data?: EstateDoc[];
};

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== 'POST') return {};

  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    res.status(401).json({message: 'You must be logged in.'});
  }

  if (session?.user.role !== 'admin') {
    res.status(403).json({message: 'Access denied'});
  }

  try {
    await connectMongo();

    const users = await Estate.find({});
    res.status(200).json({message: 'success', data: users});
  } catch (err) {
    console.error(err);
  }
}
