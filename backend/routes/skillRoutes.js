import express from "express";
import { extractSkillsFromText } from "../utils/extractSkills.js";
import { asyncHandler, AppError } from "../middlewares/errorHandler.js";

const skillRoutes = express.Router();

/**
 * POST /api/skills/extract
 * Extract skills from CV text using keyword matching
 * Body: { cvText: string }
 * Returns: { extractedSkills: [array], count: number }
 */
skillRoutes.post(
  "/extract",
  asyncHandler(async (req, res) => {
    const { cvText } = req.body;

    // Validate input
    if (!cvText || cvText.trim().length === 0) {
      throw new AppError("cvText is required and cannot be empty", 400);
    }

    if (typeof cvText !== "string") {
      throw new AppError("cvText must be a string", 400);
    }

    if (cvText.length > 10000) {
      throw new AppError("cvText cannot exceed 10000 characters", 400);
    }

    // Extract skills
    const extractedSkills = extractSkillsFromText(cvText);

    res.status(200).json({
      success: true,
      data: {
        extractedSkills,
        count: extractedSkills.length,
        message: `Successfully extracted ${extractedSkills.length} skill(s) from the provided text`,
      },
    });
  })
);

/**
 * GET /api/skills/list
 * Get the complete list of available skills by category
 */
skillRoutes.get(
  "/list",
  asyncHandler(async (req, res) => {
    const { SKILL_KEYWORDS } = await import("../data/skillsList.js");

    const categorizedSkills = Object.entries(SKILL_KEYWORDS).reduce(
      (acc, [category, variants]) => {
        acc[category.replace(/_/g, " ")] = variants;
        return acc;
      },
      {}
    );

    res.status(200).json({
      success: true,
      data: {
        skills: categorizedSkills,
        totalCategories: Object.keys(SKILL_KEYWORDS).length,
        totalKeywords: Object.values(SKILL_KEYWORDS).flat().length,
      },
    });
  })
);

export default skillRoutes;
