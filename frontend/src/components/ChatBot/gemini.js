import { GoogleGenerativeAI } from "@google/generative-ai";

export async function fetchGeminiResponse(userMessage) {
  const genAI = new GoogleGenerativeAI(process.env.REACT_APP_API_KEY); // Initialize the client

  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash", // Ensure the model name is correct
    });

    const result = await model.generateContent(userMessage);
    return result.response.text();
  } catch (error) {
    console.error("Error Details:", error);

    // Log error response if available
    if (error.response) {
      console.error("Response Status:", error.response.status);
      console.error("Response Data:", error.response.data);
    }

    throw new Error("Failed to fetch response from Gemini");
  }
}
