import mongoose from "mongoose";

const JobSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    title: { type: String, required: true },
    company: { type: String, required: true },
    location: { type: String, required: true },
    description: { type: String, required: true },
    ai_match_score: { type: Number, required: true },
    salary: { type: String, required: true },
    type: { type: String, required: true },
    posted: { type: String, required: true },
    skills: { type: [String], required: true },
    applications: { type: Number, default: 0 },
}, { timestamps: true });

export const Job = mongoose.model("Job", JobSchema);


