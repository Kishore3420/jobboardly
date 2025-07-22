import logger from "../utils/logger.js";
import { Job } from "../models/job.model.js";

export const getAllJobs = async (req, res) => {
    try {
        const jobs = await Job.find();
        logger.info("Fetched all jobs successfully");
        res.status(200).json(jobs);
    } catch (error) {
        logger.error("Error fetching jobs", { stack: error.stack });
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export const createJob = async (req, res) => {
    try {
        const jobData = req.body;

        if (jobData == null || Object.keys(jobData).length === 0) {
            logger.warn("Job data is empty");       
            return res.status(400).json({ message: "Job data cannot be empty" });
        }
        if (!jobData.title || !jobData.description) {   
            logger.warn("Job title or description is missing");
            return res.status(400).json({ message: "Job title and description are required" });
        }

         const newJob = new Job(jobData);
        await newJob.save();
        logger.info("Job created successfully", { jobId: newJob.id });
        res.status(201).json(newJob);
    } catch (error) {
        logger.error("Error creating job", { stack: error.stack });
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export const getJobById = async (req, res) => { 
    const { id } = req.params;
    try {
        if (!id) {
            logger.warn("Job ID is missing");
            return res.status(400).json({ message: "Job ID is required" });
        }
        const job = await Job.findOne({ id: id });
        if (!job) {
            logger.warn(`Job not found with id: ${id}`);
            return res.status(404).json({ message: "Job not found" });
        }
        logger.info(`Fetched job with id: ${id}`);
        res.status(200).json(job);
    } catch (error) {
        logger.error("Error fetching job by ID", { stack: error.stack });
        res.status(500).json({ message: "Internal Server Error" });
    }
}