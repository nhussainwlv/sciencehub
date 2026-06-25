import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import {
  createBattle,
  getBattlesForUser,
  getBattleByCode,
  publicBattleView,
  joinBattle,
} from "@/lib/quiz-battle-store";

export async function GET() {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const battles = await getBattlesForUser(session.user.id);
  return NextResponse.json({
    battles: battles.map((b) => publicBattleView(b, session.user!.id)),
  });
}

export async function POST(request: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const topicName = (body.topicName as string)?.trim();
  const questionCount = Math.min(30, Math.max(10, Number(body.questionCount) || 20));
  const invitedUserIds = (body.invitedUserIds as string[]) ?? [];

  if (!topicName) {
    return NextResponse.json({ error: "Topic name required" }, { status: 400 });
  }

  const battle = await createBattle({
    hostId: session.user.id,
    hostName: session.user.name ?? "Student",
    topicName,
    questionCount,
    invitedUserIds,
  });

  return NextResponse.json({ battle: publicBattleView(battle, session.user.id) });
}

/** Join by code via POST { code } */
export async function PUT(request: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const code = (body.code as string)?.trim();
  if (!code) {
    return NextResponse.json({ error: "Game code required" }, { status: 400 });
  }

  const battle = await getBattleByCode(code);
  if (!battle) {
    return NextResponse.json({ error: "Game not found or already finished" }, { status: 404 });
  }

  try {
    const updated = await joinBattle(battle.id, session.user.id, session.user.name ?? "Student");
    return NextResponse.json({ battle: publicBattleView(updated, session.user.id) });
  } catch (e) {
    const msg = e instanceof Error ? e.message : "";
    if (msg === "FULL") return NextResponse.json({ error: "Game is full (max 8 players)" }, { status: 400 });
    if (msg === "ALREADY_STARTED") return NextResponse.json({ error: "Game already started" }, { status: 400 });
    throw e;
  }
}
