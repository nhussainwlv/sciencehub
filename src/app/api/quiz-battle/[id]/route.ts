import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { generateQuestionsForTopic } from "@/lib/quiz-generator";
import {
  getBattleById,
  publicBattleView,
  joinBattle,
  startBattle,
  submitBattleScore,
} from "@/lib/quiz-battle-store";
import type { GeneratedQuestion } from "@/lib/quiz-generator";

function scoreAnswers(questions: GeneratedQuestion[], answers: string[]): number {
  let score = 0;
  for (let i = 0; i < questions.length; i++) {
    const q = questions[i];
    const ans = answers[i];
    if (!ans) continue;
    const correct =
      q.type === "TRUE_FALSE"
        ? (ans === "true") === q.correctAnswer
        : ans === String(q.correctAnswer);
    if (correct) score++;
  }
  return score;
}

interface RouteParams {
  params: Promise<{ id: string }>;
}

export async function GET(_request: Request, { params }: RouteParams) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const battle = await getBattleById(id);
  if (!battle) {
    return NextResponse.json({ error: "Game not found" }, { status: 404 });
  }

  return NextResponse.json({ battle: publicBattleView(battle, session.user.id) });
}

export async function POST(request: Request, { params }: RouteParams) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const body = await request.json();
  const action = body.action as string;

  if (action === "join") {
    try {
      const battle = await joinBattle(id, session.user.id, session.user.name ?? "Student");
      return NextResponse.json({ battle: publicBattleView(battle, session.user.id) });
    } catch (e) {
      const msg = e instanceof Error ? e.message : "";
      if (msg === "NOT_FOUND") return NextResponse.json({ error: "Game not found" }, { status: 404 });
      if (msg === "FULL") return NextResponse.json({ error: "Game is full" }, { status: 400 });
      if (msg === "ALREADY_STARTED") return NextResponse.json({ error: "Game already started" }, { status: 400 });
      throw e;
    }
  }

  if (action === "start") {
    const battle = await getBattleById(id);
    if (!battle) return NextResponse.json({ error: "Game not found" }, { status: 404 });

    const questions = generateQuestionsForTopic(battle.topicName, battle.topicName, battle.questionCount);
    try {
      const updated = await startBattle(id, session.user.id, questions);
      return NextResponse.json({ battle: publicBattleView(updated, session.user.id) });
    } catch (e) {
      const msg = e instanceof Error ? e.message : "";
      if (msg === "NOT_HOST") return NextResponse.json({ error: "Only the host can start" }, { status: 403 });
      if (msg === "NEED_PLAYERS") return NextResponse.json({ error: "Need at least 2 players" }, { status: 400 });
      if (msg === "ALREADY_STARTED") return NextResponse.json({ error: "Already started" }, { status: 400 });
      throw e;
    }
  }

  if (action === "submit") {
    const battle = await getBattleById(id);
    if (!battle) return NextResponse.json({ error: "Game not found" }, { status: 404 });

    const answers = body.answers as string[] | undefined;
    const score =
      answers && battle.questions.length > 0
        ? scoreAnswers(battle.questions, answers)
        : Math.max(0, Number(body.score) || 0);

    try {
      const updated = await submitBattleScore(id, session.user.id, score);
      return NextResponse.json({ battle: publicBattleView(updated, session.user.id), score });
    } catch (e) {
      const msg = e instanceof Error ? e.message : "";
      if (msg === "NOT_ACTIVE") return NextResponse.json({ error: "Game is not active" }, { status: 400 });
      if (msg === "NOT_PLAYER") return NextResponse.json({ error: "You are not in this game" }, { status: 403 });
      throw e;
    }
  }

  return NextResponse.json({ error: "Unknown action" }, { status: 400 });
}
