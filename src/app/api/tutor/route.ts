import { NextResponse } from "next/server";
import { getTutorResponse, generateRevisionPlan } from "@/lib/ai-tutor";
import type { TutorMessage, TutorContext } from "@/lib/ai-tutor";

export async function POST(request: Request) {
  try {
    const { messages, context, action } = await request.json() as {
      messages: TutorMessage[];
      context?: TutorContext;
      action?: string;
    };

    if (action === "revision-plan" && context?.weakAreas) {
      const plan = await generateRevisionPlan(
        context.weakAreas,
        context.keyStage ?? "KS4",
        7
      );
      return NextResponse.json({ response: plan });
    }

    const response = await getTutorResponse(messages, context);
    return NextResponse.json({ response });
  } catch (error) {
    console.error("Tutor API error:", error);
    return NextResponse.json({ error: "Failed to get tutor response" }, { status: 500 });
  }
}
