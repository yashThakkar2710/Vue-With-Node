import { Router } from "express";
import { upload } from "../middleware/multer.middleware.js"; // Multer middleware for handling file uploads
import { uploadOnCloudinary } from "../utils/cloudinary.js"; // Cloudinary upload function
import { Resume } from "../models/Resume.model.js"; // Import Resume Mongoose model
import { sendEmail } from "../utils/email.js";

const router = Router();

// Route to handle resume upload
router
  .route("/upload-resume")
  .post(upload.single("resume"), async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ error: "No file uploaded" });
      }

      // Upload the file from local storage to Cloudinary
      const cloudinaryResponse = await uploadOnCloudinary(req.file.path);

      if (!cloudinaryResponse) {
        return res.status(500).json({ error: "Error uploading to Cloudinary" });
      }

      // Save resume details to MongoDB
      const newResume = new Resume({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        salary: req.body.salary,
        portfolio: req.body.portfolio || "",
        location: req.body.location || "",
        description: req.body.description || "",
        resume: cloudinaryResponse.secure_url, // URL from Cloudinary
      });

      // Save the new resume record in the database
      await newResume.save();

      const subject = "Resume Uploaded Successfully";
      const message = `Hello ${req.body.name},\n\nYour resume has been successfully uploaded. We will review it soon.\n\nThank you!`;

      // Send email to the user
      await sendEmail(req.body.email, subject, message);

      // Return success response with the Cloudinary file URL
      return res.status(200).json({
        message: "Resume uploaded successfully!",
        fileUrl: cloudinaryResponse.secure_url, // URL of the uploaded file
      });
    } catch (err) {
      console.error("Error in upload-resume route: ", err);
      return res
        .status(500)
        .json({ error: "Something went wrong during the upload." });
    }
  });

export default router;
