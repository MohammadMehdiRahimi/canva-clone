import "dotenv/config";
import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import proxy from "express-http-proxy";

const env = {
  PORT: process.env.PORT || 5000,
  MONGO_URL: process.env.MONGO_URL,
  UPLOAD: process.env.UPLOAD,
  DESIGNS: process.env.DESIGNS,
  SUBSCRIPTION: process.env.SUBSCRIPTION,
};
console.clear();

if (!env.MONGO_URL) throw new Error("mongo url not found");
const app = express();
app.use(helmet());
app.use(cors({ origin: ["*"], credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", proxy("http://localhost:5001"));
const proxyOptions = {
  proxyReqPathResolver: (req: Request) => {
    return req.url.replace(/^\v1/, "/api");
  },
  proxyErrorHandler: (err: any, res: Response, next: NextFunction) => {
    return res.status(500).json({
      message: "Internal server error!",
      error: err.message,
    });
  },
};
app.use(
  "/v1/designs",
  proxy(env.DESIGNS!, { ...proxyOptions, parseReqBody: false })
);
app.use(
  "/v1/media",
  proxy(env.UPLOAD!, { ...proxyOptions, parseReqBody: false })
);
app.use("/v1/subscription", proxy(env.SUBSCRIPTION!, { ...proxyOptions }));

async function start() {
  try {
    const server = app.listen(env.PORT, () => {
      console.log(`api gateway run at http://localhost:${env.PORT}`);
      console.log(`api Designs run at http://localhost:${env.DESIGNS}`);
      console.log(
        `api subscription run at http://localhost:${env.SUBSCRIPTION}`
      );
      console.log(`api upload run at http://localhost:${env.UPLOAD}`);
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
