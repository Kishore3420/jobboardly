import { getAllJobs, createJob, getJobById } from "../controller/job.controller.js";
import express from "express";
const router = express.Router();

router.get("/jobs", getAllJobs);

router.post("/addjob", createJob);

router.get("/job/:id", getJobById);


export default router;