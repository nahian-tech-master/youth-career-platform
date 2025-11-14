import { openaiClient } from "./openaiClient.js";

export async function extractSkillsAI(cvText) {
  const prompt = `
You are an expert career skill extraction engine.

Extract ONLY the following from the CV text:
- core skills
- tools & technologies
- roles/domains (Frontend Developer, Data Analyst, etc.)

Return STRICT JSON in the format:
{
  "skills": [...],
  "tools": [...],
  "roles": [...],
  "explanation": "short explanation of how you extracted"
}

Here is the CV text:
""" 
${cvText}
"""
`;

  const response = await openaiClient.post("/chat/completions", {
    model: "gpt-4o-mini", 
    messages: [{ role: "user", content: prompt }],
    temperature: 0.0,
  });

  const aiText = response.data.choices[0].message.content;

  try {
    const jsonStart = aiText.indexOf("{");
    const jsonEnd = aiText.lastIndexOf("}") + 1;
    const cleanJSON = aiText.substring(jsonStart, jsonEnd);

    return JSON.parse(cleanJSON);
  } catch (err) {
    return {
      skills: [],
      tools: [],
      roles: [],
      explanation: "Failed to parse JSON, model returned unexpected output.",
    };
  }
}