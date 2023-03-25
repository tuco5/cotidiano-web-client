import type {NextApiRequest, NextApiResponse} from 'next';
import {getServerSession} from 'next-auth/next';
import {authOptions} from '@/pages/api/auth/[...nextauth]';
import {connectMongo} from '@/lib/mongoose';
import {User, UserDoc} from '@/models/User';

type Data = {
  message: string;
  data?: UserDoc;
};

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const session = await getServerSession(req, res, authOptions);
  const {query, method} = req;

  if (!session) {
    res.status(401).json({message: 'You must be logged in.'});
  }

  if (session?.user.id !== query.id && session?.user.role !== 'admin') {
    res.status(403).json({message: 'Access denied'});
  }

  try {
    await connectMongo();

    switch (method) {
      case 'GET':
        await getUser(query.id, res);
        return;

      default:
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
  } catch (err) {
    console.error(err);
  }
}

/* READ | GET */
async function getUser(id: string | string[] | undefined, res: NextApiResponse) {
  const user = await User.findById(id);

  if (!user) {
    res.status(404).json({message: 'Not Found'});
  }

  res.status(200).json({message: 'success', data: user!});
}
