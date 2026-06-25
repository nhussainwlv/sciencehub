import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { generateQuestionsForTopic } from "@/lib/quiz-generator";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const topicId = searchParams.get("topicId");
  const topicName = searchParams.get("topicName") ?? "Science";
  const subtopicName = searchParams.get("subtopicName") ?? topicName;
  const difficulty = searchParams.get("difficulty");
  const count = parseInt(searchParams.get("count") ?? "40");

  if (topicId) {
    const questions = await prisma.question.findMany({
      where: {
        topicId,
        ...(difficulty ? { difficulty: difficulty as "EASY" | "MEDIUM" | "HARD" } : {}),
      },
      take: count,
    });
    return NextResponse.json({ questions, total: questions.length });
  }

  const questions = generateQuestionsForTopic(topicName, subtopicName, count);
  const filtered = difficulty
    ? questions.filter((q) => q.difficulty === difficulty)
    : questions;

  return NextResponse.json({ questions: filtered, total: filtered.length });
}
