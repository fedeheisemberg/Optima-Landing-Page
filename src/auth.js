import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { authConfig } from "./auth.config";
import { loginUser } from "./mongo/user/services";

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        let response = await loginUser(credentials);
        if (!response?.data) return null;
        return response.data;
      },
    }),
  ],
  callbacks: {
    async redirect({ baseUrl }) {
      return `${baseUrl}/admin`;
    },
    async jwt({ token, user }) {
      if (user) {
        token.user = {
          userID: user._id,
        };
      }
      return token;
    },
    async session({ session, token }) {
      session.user = token.user;
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
});
