import "express-async-errors";
import { log } from "console";
import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import jobRouter from "./routes/jobRouter.js";
import { exitCode } from "process";

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.post("/", (req, res) => {
  res.json({ msg: "data recieved", data: req.body });
});

app.use("/api/v1/jobs", jobRouter);

// app.get("/api/v1/jobs",);

// app.post("/api/v1/jobs",);

// app.get("/api/v1/jobs/:id",);

// app.patch("/api/v1/jobs/:id",);

// app.delete("/api/v1/jobs/:id",);

app.use("*", (req, res) => {
  res.status(404).json({ msg: "request not found" });
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(101).json({ msg: "error middleware hit" });
});

try {
  console.log(process.env.MONGO_URL);
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(5100, () => {
    console.log("app is listening on port 5100");
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
