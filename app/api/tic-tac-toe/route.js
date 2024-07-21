import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export async function POST(req) {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API);
    const generationConfig = {
        stopSequences: ["red"],
        maxOutputTokens: 100,
        temperature: 0.9,
        topP: 0.1,
        topK: 16,
    };

    try {
        const { board } = await req.json();

        if (!board || !board.length) {
            return NextResponse.json({ error: "Invalid board data" }, { status: 400 });
        }

        const prompt = [
            'You are an expert tic tac toe player.',
            'You play as O. Focus on winning, play extremely well.',
            'For the JSON content I provide as input, please just give me JSON output containing the row and the col (no explanation) of your next move so you can definitely win in this tic tac toe game.',
            JSON.stringify(board)
        ].join(' ');

        const model = genAI.getGenerativeModel({ model: "gemini-pro", generationConfig });
        const result = await model.generateContent(prompt);
        const response = result.response.text();

        const aiMove = JSON.parse(response);

        console.log(aiMove);

        return NextResponse.json(aiMove);
    } catch (error) {
        console.error("Error during AI move generation:", error);
        return NextResponse.json({ error: "Failed to generate AI move" }, { status: 500 });
    }
}
