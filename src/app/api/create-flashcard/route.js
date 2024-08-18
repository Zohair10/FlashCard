import { GoogleGenerativeAI } from "@google/generative-ai";

// Load environment variables
require('dotenv').config();

export async function POST(req) {
  try {
    const { title } = await req.json();

    // Initialize the Gemini API client with your API key
    const genAI = new GoogleGenerativeAI(process.env.API_KEY);

    // Initialize the Gemini model
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Generate the flashcard content
    const result = await model.generateContent(`Give 1 line for the topic: ${title}`);
    const response = await result.response;
    const flashcardContent = await response.text();

    return new Response(
      JSON.stringify({ title, content: flashcardContent }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error generating flashcard content:", error.message);
    return new Response(
      JSON.stringify({ error: "Failed to create flashcard" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
