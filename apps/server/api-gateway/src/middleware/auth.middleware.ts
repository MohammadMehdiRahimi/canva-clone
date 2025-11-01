import { NextFunction, Request, Response } from "express";
import { OAuth2Client, LoginTicket } from "google-auth-library";

const clientId = process.env.GOOGLE_CLIENT_ID;
if (!clientId) {
  throw new Error("GOOGLE_CLIENT_ID is not defined in environment variables.");
}

const client = new OAuth2Client(clientId);

async function AuthMiddleware(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers["authorization"];
  const idToken = authHeader && authHeader.split(" ")[1]; // Bearer TOKEN

  if (!idToken) {
    res.setHeader("Content-Type", "application/problem+json");

    return res.status(401).json({
      type: "https://example.com/probs/unauthorized",
      title: "Unauthorized",
      status: 401,
      detail:
        "No authorization token was provided in the 'Authorization' header.",
      instance: req.originalUrl,
    });
  }

  try {
    const ticket: LoginTicket = await client.verifyIdToken({
      idToken,
      audience: clientId,
    });

    const payload = ticket.getPayload();

    if (!payload)
      throw new Error("Invalid token payload received from Google.");

    req.user = {
      userID: payload.sub,
      email: payload.email,
      name: payload.name,
    };

    next();
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown verification error.";
    console.error(`Token verification failed: ${errorMessage}`);
    res.setHeader("Content-Type", "application/problem+json");
    return res.status(401).json({
      title: "Invalid Token",
      status: 401,
      detail: `Token verification failed. ${errorMessage}`,
      instance: req.originalUrl,
    });
  }
}

export default AuthMiddleware;
