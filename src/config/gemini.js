import { GoogleGenAI } from "@google/genai";

const MODEL = "gemini-2.5-flash";
const API_KEY = import.meta.env.VITE_GEMINI_API;

const genAI = new GoogleGenAI({ apiKey: API_KEY });

export async function runChat(prompt) {
  const response = await genAI.models.generateContent({
    model: MODEL,
    contents: prompt,
  });

  return response.text;
}

export default runChat;