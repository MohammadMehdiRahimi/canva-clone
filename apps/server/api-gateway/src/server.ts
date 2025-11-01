import "dotenv/config";
import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import proxy from "express-http-proxy";
import AuthMiddleware from "./middleware/auth.middleware.js";

const env = {
  PORT: process.env.PORT || 5000,
  MONGO_URL: process.env.MONGO_URL,
  UPLOAD: process.env.UPLOAD,
  DESIGN: process.env.DESIGN,
  SUBSCRIPTION: process.env.SUBSCRIPTION,
};

console.clear();
if (!env.MONGO_URL) throw new Error("mongo url not found");

const app = express();
app.use(helmet());
app.use(cors({ origin: ["*"], credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const proxyOptions = {
  proxyReqPathResolver: (req: Request) => {
    console.log("request url is : ");
    console.log(req.url);
    return req.url.replace(/\/api\/v1\//, "/");
  },
  proxyErrorHandler: (err: any, res: Response) => {
    return res.status(500).json({
      message: "Internal server error!",
      error: err.message,
    });
  },
};
// services
app.use(
  "/api/v1/design",
  AuthMiddleware,
  proxy(env.DESIGN!, { ...proxyOptions })
);
app.use(
  "/api/v1/media",
  AuthMiddleware,
  proxy(env.UPLOAD!, { ...proxyOptions, parseReqBody: false })
);
app.use(
  "/api/v1/subscription",
  AuthMiddleware,
  proxy(env.SUBSCRIPTION!, { ...proxyOptions })
);

async function start() {
  try {
    const server = app.listen(env.PORT, () => {
      console.log(`api gateway run at http://localhost:${env.PORT}`);
      console.log(`api Designs run at ${env.DESIGN}`);
      console.log(`api subscription run at ${env.SUBSCRIPTION}`);
      console.log(`api upload run at  ${env.UPLOAD}`);
    });
    server.on("error", (err) => {
      console.log("http server error : " + err);
    });
  } catch (error) {
    console.error("http server error : " + error);
    process.exit(1);
  }
}
start();
