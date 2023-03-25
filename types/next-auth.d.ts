import NextAuth from 'next-auth';
import {JWT} from 'next-auth/jwt';

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      /** The user's additional info. */
      id: string;
      role: string;
      picture?: string;
    };
  }
  interface User {
    id: string;
    name: string;
    email: string;
    picture?: string;
    role: 'user' | 'admin';
  }
}
