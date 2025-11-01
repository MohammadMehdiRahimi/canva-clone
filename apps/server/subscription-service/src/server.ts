import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import helmet from "helmet";

const env = {
  PORT: process.env.PORT || 5002,
  MONGO_URL: process.env.MONGO_URL,
};
console.clear();
if (!env.MONGO_URL) throw new Error("mongo url not found");
console.log(env.MONGO_URL);
const app = express();
app.use(helmet());
app.use(cors({ origin: ["http://localhost:3000"], credentials: true }));
app.use(express.json());

async function start() {
  try {
    await mongoose.connect(env.MONGO_URL as string);
    console.log("connect to db");
    const server = app.listen(env.PORT, () =>
      console.log(`subscription service  run at http://localhost:${env.PORT}`)
    );
    server.on("error", (err) => {
      console.log("http server error : " + err);
    });
  } catch (error) {
    console.error("✗ Bootstrap error:", error);
    process.exit(1);
  }
}
start();
