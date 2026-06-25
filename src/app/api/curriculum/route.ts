import { NextResponse } from "next/server";
import { ALL_CURRICULUM, getTopicCount, getSubtopicCount } from "@/data/curriculum";

export async function GET() {
  return NextResponse.json({
    curriculum: ALL_CURRICULUM,
    stats: {
      topics: getTopicCount(),
      subtopics: getSubtopicCount(),
      questions: getTopicCount() * 40,
    },
  });
}
