import { FLAT_SKILLS, SKILL_KEYWORDS } from "../data/skillsList.js";

/**
 * Extract skills from text using keyword matching
 * @param {string} text - The text to extract skills from (e.g., CV content)
 * @returns {string[]} - Array of extracted skill keywords
 */
export const extractSkillsFromText = (text) => {
  if (!text || typeof text !== "string") {
    return [];
  }

  // Convert text to lowercase for matching
  const lowerText = text.toLowerCase();
  
  const extractedSkills = new Set();

  // Iterate through all flat skills and check if they appear in text
  FLAT_SKILLS.forEach((skill) => {
    const regex = new RegExp(`\\b${skill}\\b`, "i");

    if (regex.test(lowerText)) {
      // Find the canonical skill name (key from SKILL_KEYWORDS)
      const canonicalSkill = Object.entries(SKILL_KEYWORDS).find(([_, variants]) =>
        variants.includes(skill.toLowerCase())
      )?.[0];

      if (canonicalSkill) {
        extractedSkills.add(
          canonicalSkill.charAt(0).toUpperCase() + canonicalSkill.slice(1)
        );
      }
    }
  });

  return Array.from(extractedSkills).sort();
};
