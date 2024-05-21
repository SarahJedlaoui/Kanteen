import NextAuth, { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      email: string;
      name: string;
      link: string; // Add the link property
    } & DefaultSession['user'];
  }

  interface User {
    id: string;
    email: string;
    name: string;
    link: string; // Add the link property
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string;
    email: string;
    name: string;
    link: string; // Add the link property
  }
}
