import OpenAI from "openai";
import { getLocalTutorResponse } from "./local-tutor";

const openai = process.env.OPENAI_API_KEY?.trim()
  ? new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
  : null;

export interface TutorMessage {
  role: "user" | "assistant" | "system";
  content: string;
}

export interface TutorContext {
  keyStage?: string;
  topic?: string;
  subtopic?: string;
  examBoard?: string;
  gcseTier?: string;
  weakAreas?: string[];
  masteryPercent?: number;
  studentName?: string;
}

const SYSTEM_PROMPT = `You are Science Hub AI Tutor, an expert UK science teacher for Key Stage 2, KS3, and GCSE (AQA, Edexcel, OCR).

When explaining concepts:
- Start with a clear definition
- Use correct UK GCSE terminology and units
- Include relevant equations with units (e.g. W = mg, V = IR, Ek = ½mv²)
- Give real-world examples students can remember
- Add 1-2 exam tips and common mistakes to avoid
- Use markdown: ## headings, **bold** for key terms, bullet lists
- Keep responses thorough but focused (300-500 words unless asked for more)
- Be encouraging and supportive

For GCSE students mention command words when relevant (describe, explain, evaluate, compare).
Never just give generic study advice — always teach the actual science.
Guide students on exam questions rather than giving direct answers to active assessments.`;

export async function getTutorResponse(
  messages: TutorMessage[],
  context?: TutorContext
): Promise<string> {
  const lastUserMessage = [...messages].reverse().find((m) => m.role === "user")?.content ?? "";

  const contextInfo = context
    ? `\n\nStudent context:
- Name: ${context.studentName ?? "Student"}
- Key Stage: ${context.keyStage ?? "KS4"}
- Current topic: ${context.topic ?? "General"}
- Exam board: ${context.examBoard ?? "AQA"}
- GCSE Tier: ${context.gcseTier ?? "HIGHER"}
- Weak areas: ${context.weakAreas?.join(", ") ?? "None identified"}
- Topic mastery: ${context.masteryPercent ?? 0}%`
    : "";

  if (!openai) {
    return getLocalTutorResponse(lastUserMessage, context);
  }

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: SYSTEM_PROMPT + contextInfo },
        ...messages.filter((m) => m.role !== "system"),
      ],
      max_tokens: 1200,
      temperature: 0.7,
    });

    const content = response.choices[0]?.message?.content;
    if (content?.trim()) return content;

    return getLocalTutorResponse(lastUserMessage, context);
  } catch (error) {
    console.error("OpenAI tutor error:", error);
    return getLocalTutorResponse(lastUserMessage, context);
  }
}

export async function generateRevisionPlan(
  weakTopics: string[],
  keyStage: string,
  daysAvailable: number
): Promise<string> {
  if (!openai) {
    return getLocalTutorResponse("create a revision plan for my weak topics", {
      keyStage,
      weakAreas: weakTopics,
    });
  }

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        {
          role: "user",
          content: `Create a detailed ${daysAvailable}-day revision plan for a ${keyStage} science student who needs to improve in: ${weakTopics.join(", ")}. Include daily activities, time allocations, and exam technique tips. Use markdown formatting.`,
        },
      ],
      max_tokens: 1500,
    });

    return response.choices[0]?.message?.content ?? getLocalTutorResponse("revision plan", { weakAreas: weakTopics, keyStage });
  } catch {
    return getLocalTutorResponse("revision plan", { weakAreas: weakTopics, keyStage });
  }
}
