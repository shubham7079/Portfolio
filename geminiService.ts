
import { GoogleGenAI } from "@google/genai";
import { RESUME_SUMMARY } from "./constants";

export const getResumeResponse = async (userQuery: string) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userQuery,
      config: {
        systemInstruction: `
          You are the official AI representative of Shubham Singh, a world-class Junior Full Stack Developer.
          Context about Shubham: ${RESUME_SUMMARY}.
          
          Guidelines:
          - Be premium, confident, and results-oriented.
          - Highlight his 2026 readiness (AI tools expertise, MERN mastery).
          - If asked about contact info: shubham7079@gmail.com.
          - If asked about location: Faridabad/Delhi NCR/Dehradun/Remote.
          - Mention his analytical mindset from Chess/Badminton if relevant.
          - Keep responses under 3 sentences for punchiness.
        `,
        temperature: 0.8,
      }
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm momentarily recalibrating. Please connect with Shubham directly at shubham7079@gmail.com for an immediate response.";
  }
};
