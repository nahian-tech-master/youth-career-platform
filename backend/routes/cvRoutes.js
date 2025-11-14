import express from "express";
import PDFDocument from "pdfkit";
import User from "../models/userModel.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/generate", authMiddleware, async (req, res) => {
  const user = await User.findById(req.user.id);

  if (!user) return res.status(404).send("User not found");

  const doc = new PDFDocument();
  
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", "inline; filename=cv.pdf");

  doc.pipe(res);

  // --- Header ---
  doc.fontSize(22).text(`${user.firstName} ${user.lastName}`);
  doc.fontSize(12).text(`${user.email}`);
  doc.moveDown();

  // --- Summary ---
  if (user.bio) {
    doc.fontSize(16).text("Summary", { underline: true });
    doc.fontSize(12).text(user.bio);
    doc.moveDown();
  }

  // --- Skills ---
  doc.fontSize(16).text("Skills", { underline: true });
  doc.fontSize(12).text(user.skills.join(", "));
  doc.moveDown();

  // --- Experience ---
  if (user.experiences?.length > 0) {
    doc.fontSize(16).text("Experience", { underline: true });
    user.experiences.forEach((exp) => {
      doc.fontSize(14).text(exp.title);
      doc.fontSize(12).text(`${exp.company} (${exp.startDate} - ${exp.endDate || "Present"})`);
      doc.text(exp.description);
      doc.moveDown();
    });
  }

  // --- Education ---
  doc.fontSize(16).text("Education", { underline: true });
  doc.fontSize(12).text(`${user.educationLevel} in ${user.department}`);
  doc.text(`Graduation Year: ${user.graduationYear}`);

  doc.end();
});

export default router;