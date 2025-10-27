import "next-auth";
import { DefaultSession, DefaultUer } from "next-auth";
declare module "next-auth/jwt" {
  interface JWT {
    id?: string;
  }
}

declare module "next-auth" {
  interface Session {
    idToken?: string;
    user: {
      id_token?: string;
    } & DefaultSession["user"];
  }
  interface User extends DefaultUer {
    id_token?: string;
  }
}
