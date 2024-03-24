import NextAuth, { Session } from "next-auth";
import GithubProvider from "next-auth/providers/github";

interface CustomSession extends Session {
  user: {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
    sub?: string | null | undefined; // Add 'sub' property
  };
}

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      if (session && session.user && token.sub) {
        (session as CustomSession).user.sub = token.sub;
      }
      return session;
    },
  },
});

export { handler as GET, handler as POST };
