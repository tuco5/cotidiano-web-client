import NextAuth, {NextAuthOptions} from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import {MongoDBAdapter} from '@next-auth/mongodb-adapter';
import clientPromise from '@/lib/mongodb';

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_AUTH_CLIENT_ID,
      clientSecret: process.env.GOOGLE_AUTH_CLIENT_SECRET,
      profile(profile) {
        return {id: profile.sub, role: 'user', ...profile};
      },
    }),
  ],

  pages: {
    signIn: '/auth/signin',
  },

  adapter: MongoDBAdapter(clientPromise, {databaseName: process.env.DB_NAME}),

  session: {
    strategy: 'database',
    maxAge: 7 * 24 * 60 * 60,
    updateAge: 24 * 60 * 60,
  },

  callbacks: {
    async session({session, token, user}) {
      // Send properties to the client, like an access_token from a provider.
      session.user.id = user.id;
      session.user.role = user.role;
      session.user.picture = user.picture;

      return session;
    },
  },

  debug: true,
};

export default NextAuth(authOptions);
