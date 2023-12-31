import Job from "../models/JobModel.js";
import { StatusCodes, getStatusCode } from "http-status-codes";

// get all jobs
export const getAllJobs = async (req, res) => {
  const jobs = await Job.find({});
  res.status(StatusCodes.OK).json({ jobs });
};

// create jobs
export const createJob = async (req, res) => {
  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
};

// get single job

export const getJob = async (req, res) => {
  const { id } = req.params;
  const job = await Job.findById(id);
  console.log(job);
  if (!job) {
    return res.status(404).json({ msg: `no job with id ${id}` });
  }

  res.status(StatusCodes.OK).json({ job });
};

// edit job
export const updateJob = async (req, res) => {
  const { id } = req.params;
  const updatedJob = await Job.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  if (!updatedJob) {
    return res.status(404).json({ msg: `no job with id ${id}` });
  }

  res.status(StatusCodes.OK).json({ msg: "job is modified", job: updatedJob });
};

//delete job
export const deleteJob = async (req, res) => {
  const { id } = req.params;
  const removedJob = await Job.findByIdAndDelete(id);
  console.log(removedJob);
  if (!removedJob) {
    return res.status(404).json({ msg: `no job with id ${id}` });
  }

  res.status(StatusCodes.OK).json({
    msg: removedJob,
  });
};
