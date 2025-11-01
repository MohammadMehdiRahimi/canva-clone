import { NextFunction, Request, Response } from "express";

export const AuthMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = req.user;
  if (!user?.userID)
    return res.status(401).json({
      title: "Unauthorized",
      status: 401,
      detail:
        "Authentication is required to access this resource. No valid user session was found.",
      instance: req.originalUrl,
    });
  next();
};
