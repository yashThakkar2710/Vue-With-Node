import mongoose from "mongoose";

// Define the schema for the resume upload
const resumeSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, lowercase: true, trim: true },
  phone: { type: String, required: true, match: /^[0-9]{10}$/, trim: true },
  salary: { type: Number, required: true, min: 0 },
  portfolio: { type: String, trim: true, default: "" }, // Optional URL field for portfolio
  location: { type: String, trim: true, default: "" }, // Optional field for job location
  description: { type: String, trim: true, default: "" }, // Optional description
  resume: { type: String, required: true }, // Path or URL to the uploaded resume file
  uploadedAt: { type: Date, default: Date.now }, // Timestamp for when the resume was uploaded
});

// Create a model from the schema
const Resume = mongoose.model("Resume", resumeSchema);

export { Resume };
