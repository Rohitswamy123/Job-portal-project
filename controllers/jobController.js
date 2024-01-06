import Job from "../models/JobModel.js";
import { nanoid } from "nanoid";

let jobs = [
  { id: nanoid(), compnay: "google", position: "devops" },
  { id: nanoid(), compnay: "facebook", position: "sre" },
];

// get all jobs
export const getAllJobs = async (req, res) => {
  const jobs = await Job.find({});
  res.status(200).json({ jobs });
};

// create jobs
export const createJob = async (req, res) => {
  const job = await Job.create(req.body);
  res.status(201).json({ job });
};

// get single job

export const getJob = async (req, res) => {
  const { id } = req.params;
  const job = await Job.findById(id);
  console.log(job);
  if (!job) {
    return res.status(404).json({ msg: `no job with id ${id}` });
  }

  res.status(200).json({ job });
};

// edit job
export const updateJob = async (req, res) => {
  const { company, position } = req.body;

  if (!company || !position) {
    return res
      .status(401)
      .json({ msg: "please enter details of org and position" });
  }

  const { id } = req.params;
  const job = jobs.find((job) => job.id === id);
  console.log(`${job}`);
  if (!job) {
    return res.status(404).json({ msg: `no job with id ${id}` });
  }
  job.company = company;
  job.position = position;

  res
    .status(200)
    .json({ job: `org is ${job.company}`, position: `${job.position}` });
};

//delete job
export const deleteJob = async (req, res) => {
  const { id } = req.params;
  const removedJob = await Job.findByIdAndDelete(id);
  console.log(removedJob);
  if (!removedJob) {
    return res.status(404).json({ msg: `no job with id ${id}` });
  }

  res.status(200).json({
    msg: removedJob,
  });
};
