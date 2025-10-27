import NextAuth from "next-auth";

import Google from "next-auth/providers/google";

const clientId = process.env.GOOGLE_ID;
const clientSecret = process.env.GOOGLE_SECRET;

export const { auth, handlers, signIn, signOut } = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    Google({
      clientId,
      clientSecret,
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user?.id_token) {
        token.idToken = user.id_token;
      }
      return token;
    },
    async session({ session, token }) {
      if (token.id && session.user) {
        session.idToken = token.id as string;
      }
      return session;
    },
  },
});
