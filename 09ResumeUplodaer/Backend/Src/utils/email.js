// emailService.js
import nodemailer from "nodemailer";

const sendEmail = async (recipientEmail, subject, message) => {
  // Create a transporter object using Gmail SMTP service
  const transporter = nodemailer.createTransport({
    service: "gmail", // or use another service like SendGrid, Mailgun, etc.
    auth: {
      user: process.env.EMAIL_USER, // Your Gmail username
      pass: process.env.EMAIL_PASS, // Your Gmail app password (not your Google password)
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER, // sender address
    to: recipientEmail, // recipient address
    subject: subject, // Subject line
    text: message, // plain text body
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
  } catch (error) {
    console.error("Error sending email: ", error);
  }
};

export { sendEmail };
