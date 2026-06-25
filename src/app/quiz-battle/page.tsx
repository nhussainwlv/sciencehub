import { Swords } from "lucide-react";
import { QuizBattleHub } from "@/components/quiz-battle/quiz-battle-hub";

export default function QuizBattlePage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6">
      <div className="mb-8">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)]">
            <Swords className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-2xl font-bold sm:text-3xl">Quiz Battles</h1>
            <p className="text-sm text-[var(--muted)]">
              Challenge friends — same questions, highest score wins.
            </p>
          </div>
        </div>
      </div>
      <QuizBattleHub />
    </div>
  );
}
