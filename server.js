import { log } from "console";
import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
import morgan from "morgan";
import { nanoid } from "nanoid";

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

let jobs = [
  { id: nanoid(), company: "google", position: "frontend" },
  { id: nanoid(), company: "backend", position: "backend" },
];

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.post("/", (req, res) => {
  res.json({ msg: "data recieved", data: req.body });
});

// get all jobs
app.get("/api/v1/jobs", (req, res) => {
  res.status(200).json({ jobs });
});

// create jobs
app.post("/api/v1/jobs", (req, res) => {
  const { company, position } = req.body;
  const id = nanoid(10);

  if (!company || !position) {
    return res
      .status(400)
      .json({ msg: "please enter details of org and position" });
  }

  const job = { id, company, position };

  jobs.push(job);
  res.status(200).json({ job });
});

app.listen(5100, () => {
  console.log("app is listening on port 5100");
});
