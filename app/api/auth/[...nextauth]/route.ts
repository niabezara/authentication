import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import { SessionStrategy } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider, {
  CredentialsConfig,
} from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

type options = {
  providers: CredentialsConfig<{}>[];
  session: {
    strategy: SessionStrategy;
  };
  secret: string;
  pages: {
    signIn: string;
  };
};

export const authOptions: options = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials: any) {
        const { email, password } = credentials;
        try {
          await connectMongoDB();
          const user = await User.findOne({ email });
          if (!user) {
            return null;
          }
          const passwordsMatch = await bcrypt.compare(password, user.password);
          if (!passwordsMatch) {
            return null;
          }
          return user;
        } catch (error) {
          console.log("error", error);
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET || " ",
  pages: {
    signIn: "/",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
