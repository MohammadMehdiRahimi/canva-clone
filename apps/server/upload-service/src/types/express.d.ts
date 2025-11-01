import { User } from "./user.type.ts";

declare module "express" {
  interface Request {
    user?: User;
  }
}
