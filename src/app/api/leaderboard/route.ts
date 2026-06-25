import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const entries = await prisma.leaderboardEntry.findMany({
    orderBy: { xp: "desc" },
    take: 50,
  });

  if (entries.length === 0) {
    return NextResponse.json({
      leaderboard: [
        { rank: 1, userName: "Emma W.", xp: 12450, level: 18, streak: 21 },
        { rank: 2, userName: "James T.", xp: 11200, level: 16, streak: 14 },
        { rank: 3, userName: "Sophie L.", xp: 10800, level: 16, streak: 12 },
      ],
    });
  }

  return NextResponse.json({
    leaderboard: entries.map((e, i) => ({
      rank: i + 1,
      userName: e.userName,
      xp: e.xp,
      level: e.level,
      streak: e.streak,
    })),
  });
}
