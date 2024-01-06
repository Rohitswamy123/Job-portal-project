import mongoose from "mongoose";

const JobSchema = new mongoose.Schema(
  {
    company: String,
    position: String,
    jobStatus: {
      type: String,
      enum: ["Interview", "Declined", "Pending"],
      default: "Pending",
    },

    jobType: {
      type: String,
      enum: ["Full-time", "Part-time", "Internship"],
      default: "Full-time",
    },

    jobLocation: {
      type: String,
      default: "My-city",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Job", JobSchema);
