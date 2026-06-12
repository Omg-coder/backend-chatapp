const { GoogleGenAI } = require('@google/genai');
const { config } = require("dotenv");

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function generateCaption(base64ImageFile) {
  const contents = [
    {
      inlineData: {
        mimeType: "image/jpeg",
        data: base64ImageFile,
      },
    },
    { text: "Caption this image." },
  ];

  const response = await ai.models.generateContent({
    model: "gemini-3.1-flash-lite",
    contents: contents,
    config : {
        systemInstructions : `
        caption img in short`
    }
  })
  return response.text
}

module.exports = {generateCaption}