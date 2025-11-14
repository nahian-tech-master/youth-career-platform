import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

export const openaiClient = axios.create({
  baseURL: "https://openrouter.ai/api/v1/chat/completions",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
  },
});