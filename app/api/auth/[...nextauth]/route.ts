import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        if (!credentials) return null;

        // Mock user — manager has special role
        return {
          id: credentials.email!,
          name: credentials.email!,
          email: credentials.email!,
          role: credentials.email === "manager@instalily.com" ? "manager" : "rep",
        };
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },

  secret: process.env.NEXTAUTH_SECRET || "development-secret",
});

export { handler as GET, handler as POST };
