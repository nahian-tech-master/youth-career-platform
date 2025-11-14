import express from "express";
import { extractSkillsAI } from "../utils/extractAI.js";

const router = express.Router();

router.post("/extract-ai", async (req, res) => {
  try {
    const { cvText } = req.body;

    if (!cvText)
      return res.status(400).json({ message: "CV text required" });

    const result = await extractSkillsAI(cvText);

    res.json({
      success: true,
      ...result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "AI extraction failed",
      error: error.message,
    });
  }
});

export default router;