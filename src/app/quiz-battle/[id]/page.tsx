import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { BattleRoom } from "@/components/quiz-battle/battle-room";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function BattlePage({ params }: PageProps) {
  const { id } = await params;

  return (
    <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6">
      <Link
        href="/quiz-battle"
        className="mb-6 inline-flex items-center gap-1 text-sm text-[var(--muted)] hover:text-[var(--foreground)]"
      >
        <ChevronLeft className="h-4 w-4" /> Back to Quiz Battles
      </Link>
      <BattleRoom battleId={id} />
    </div>
  );
}
