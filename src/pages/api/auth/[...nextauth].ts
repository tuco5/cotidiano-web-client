import NextAuth, {AuthOptions} from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import {MongoDBAdapter} from '@next-auth/mongodb-adapter';
import clientPromise from '@/lib/mongodb';

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_AUTH_CLIENT_ID,
      clientSecret: process.env.GOOGLE_AUTH_CLIENT_SECRET,
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
  session: {
    strategy: 'database',
    maxAge: 24 * 60 * 60,
    updateAge: 4 * 60 * 60,
  },
  callbacks: {
    async session({session, token, user}) {
      console.log(user);
      // Send properties to the client, like an access_token from a provider.
      session.user.id = user.id;
      return session;
    },
  },
});
