import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic';
export const runtime = 'edge';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { message, history = [] } = body;
    const userInput = message;

    // Hard Escalation Warning Traps
    const lowerInput = userInput.toLowerCase();
    if (lowerInput.includes("emergency") || lowerInput.includes("heart pain") || lowerInput.includes("bleeding")) {
      return NextResponse.json({ 
        text: "EMERGENCY DETECTED: Please call 102 or use the WhatsApp button below immediately." 
      });
    }

    const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY;
    if (!apiKey) throw new Error('API Key Missing');
    const genAI = new GoogleGenerativeAI(apiKey);
    
    // Stable endpoint initialization
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" }, { apiVersion: "v1" });

    // Filter and sanitize incoming history to strictly alternate
    const sanitizedHistory = history.map((item: any) => ({
      role: item.role === "assistant" ? "model" : item.role,
      parts: Array.isArray(item.parts) ? item.parts : [{ text: item.content || item.parts[0]?.text || "" }]
    }));

    // Persona Setup
    const persona = "You are the Aura Clinic Assistant. Be professional, empathetic, and concise. Your mission is to gather: Patient Name, Age, and Primary Concern. The AI must politely ask for the missing Name/Age/Concern if not provided. Once the three data points are gathered, the AI must output exactly the following summary block at the end of the message:\n\n---\n👨‍⚕️ **PHYSICIAN BRIEF**\n**Patient:** [Name] ([Age])\n**Concern:** [Brief Summary]\n---\n\nCurrent User Input: ";

    // Context Prepend Pattern to bypass 'v1' strict role schema
    const contents = [
      ...sanitizedHistory,
      { role: "user", parts: [{ text: persona + userInput }] }
    ];

    const result = await model.generateContent({ contents });
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ text });
  } catch (error: any) {
    console.error("Chat API Error:", error.message, error);
    return NextResponse.json(
      { error: "Aura Clinic is currently updating. Please use the WhatsApp button for immediate assistance." },
      { status: 500 }
    );
  }
}
