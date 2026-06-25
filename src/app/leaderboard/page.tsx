import { Trophy, Flame, Medal, Crown } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const leaderboard = [
  { rank: 1, name: "Emma W.", xp: 12450, level: 18, streak: 21, avatar: "👑" },
  { rank: 2, name: "James T.", xp: 11200, level: 16, streak: 14, avatar: "🥈" },
  { rank: 3, name: "Sophie L.", xp: 10800, level: 16, streak: 12, avatar: "🥉" },
  { rank: 4, name: "Alex M.", xp: 9850, level: 15, streak: 7, avatar: "🔬" },
  { rank: 5, name: "Oliver K.", xp: 9200, level: 14, streak: 9, avatar: "⚗️" },
  { rank: 6, name: "Mia R.", xp: 8900, level: 14, streak: 5, avatar: "🧬" },
  { rank: 7, name: "Noah B.", xp: 8500, level: 13, streak: 11, avatar: "⚛️" },
  { rank: 8, name: "Isla P.", xp: 8100, level: 13, streak: 3, avatar: "🌿" },
  { rank: 9, name: "Harry D.", xp: 7800, level: 12, streak: 8, avatar: "🔭" },
  { rank: 10, name: "Ava C.", xp: 7500, level: 12, streak: 6, avatar: "🧪" },
];

export default function LeaderboardPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      <div className="mb-8 text-center">
        <Trophy className="mx-auto h-12 w-12 text-amber-500" />
        <h1 className="mt-4 text-2xl font-bold sm:text-3xl">Leaderboard</h1>
        <p className="mt-2 text-slate-600 dark:text-slate-400">
          Top students this week — keep learning to climb the ranks!
        </p>
      </div>

      <div className="mb-6 grid grid-cols-3 gap-4">
        {leaderboard.slice(0, 3).map((entry) => (
          <Card
            key={entry.rank}
            className={`text-center ${entry.rank === 1 ? "border-amber-300 bg-amber-50 dark:border-amber-700 dark:bg-amber-950" : ""}`}
          >
            <CardContent className="pt-6">
              <span className="text-3xl">{entry.avatar}</span>
              <p className="mt-2 font-bold">{entry.name}</p>
              <p className="text-sm text-slate-500">{entry.xp.toLocaleString()} XP</p>
              {entry.rank === 1 && <Crown className="mx-auto mt-2 h-5 w-5 text-amber-500" />}
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Medal className="h-5 w-5 text-primary-500" />
            Full Rankings
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {leaderboard.map((entry) => (
            <div
              key={entry.rank}
              className={`flex items-center gap-4 rounded-xl p-3 ${
                entry.name === "Alex M." ? "bg-primary-50 dark:bg-primary-950" : "hover:bg-slate-50 dark:hover:bg-slate-800"
              }`}
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-sm font-bold dark:bg-slate-800">
                {entry.rank}
              </span>
              <span className="text-xl">{entry.avatar}</span>
              <div className="flex-1">
                <p className="font-medium">
                  {entry.name}
                  {entry.name === "Alex M." && (
                    <Badge className="ml-2" variant="default">You</Badge>
                  )}
                </p>
                <p className="text-xs text-slate-500">Level {entry.level}</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-primary-600">{entry.xp.toLocaleString()} XP</p>
                <p className="flex items-center gap-1 text-xs text-orange-500">
                  <Flame className="h-3 w-3" /> {entry.streak} day streak
                </p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
