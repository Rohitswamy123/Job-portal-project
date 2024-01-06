import { Router } from "express";
const router = Router();

import {
  getAllJobs,
  createJob,
  updateJob,
  deleteJob,
  getJob,
} from "../controllers/jobController.js";

// router.get('/',getAllJobs);
// router.post('/',createJob);

router.route("/").get(getAllJobs).post(createJob); //chained approach
router.route("/:id").get(getJob).patch(updateJob).delete(deleteJob);

export default router;
