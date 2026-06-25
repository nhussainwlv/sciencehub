"use client";

import { useState, useEffect, useCallback } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Users, Copy, Check, Loader2, Trophy, Medal, Crown,
  Play, ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import type { GeneratedQuestion } from "@/lib/quiz-generator";

interface BattlePlayer {
  userId: string;
  userName: string;
  score: number | null;
  totalQuestions: number;
  finished: boolean;
}

interface BattleState {
  id: string;
  code: string;
  hostId: string;
  hostName: string;
  topicName: string;
  status: "LOBBY" | "ACTIVE" | "FINISHED";
  players: BattlePlayer[];
  questions: GeneratedQuestion[];
  isHost: boolean;
}

export function BattleRoom({ battleId }: { battleId: string }) {
  const { data: session } = useSession();
  const router = useRouter();
  const [battle, setBattle] = useState<BattleState | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [actionLoading, setActionLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [answered, setAnswered] = useState(false);
  const [answers, setAnswers] = useState<string[]>([]);
  const [quizDone, setQuizDone] = useState(false);

  const myId = session?.user?.id;
  const me = battle?.players.find((p) => p.userId === myId);
  const isFinished = battle?.status === "FINISHED";
  const inLobby = battle?.status === "LOBBY";
  const isActive = battle?.status === "ACTIVE";

  const fetchBattle = useCallback(async () => {
    const res = await fetch(`/api/quiz-battle/${battleId}`);
    if (!res.ok) {
      setError("Game not found");
      setLoading(false);
      return;
    }
    const data = await res.json();
    setBattle(data.battle);
    setLoading(false);

    if (data.battle.status === "ACTIVE" && me?.finished) {
      setQuizDone(true);
    }
  }, [battleId, me?.finished]);

  useEffect(() => {
    fetchBattle();
    const interval = setInterval(fetchBattle, 2500);
    return () => clearInterval(interval);
  }, [fetchBattle]);

  async function postAction(action: string, extra?: Record<string, unknown>) {
    setActionLoading(true);
    setError("");
    try {
      const res = await fetch(`/api/quiz-battle/${battleId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action, ...extra }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Action failed");
      setBattle(data.battle);
      return data;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed");
    } finally {
      setActionLoading(false);
    }
  }

  async function handleJoin() {
    await postAction("join");
  }

  async function handleStart() {
    await postAction("start");
  }

  async function handleSubmit(finalAnswers: string[], _finalScore: number) {
    const data = await postAction("submit", { answers: finalAnswers });
    if (data?.score !== undefined) {
      // score shown via battle state refresh
    }
    setQuizDone(true);
  }

  function copyCode() {
    if (!battle) return;
    navigator.clipboard.writeText(battle.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <Loader2 className="h-8 w-8 animate-spin text-[var(--muted)]" />
      </div>
    );
  }

  if (!battle || error === "Game not found") {
    return (
      <div className="glass-card p-8 text-center">
        <p className="text-[var(--muted)]">Game not found.</p>
        <Link href="/quiz-battle">
          <Button className="mt-4">Back to Quiz Battles</Button>
        </Link>
      </div>
    );
  }

  const notJoined = myId && !battle.players.some((p) => p.userId === myId);

  if (notJoined && inLobby) {
    return (
      <div className="space-y-6">
        <div className="glass-card p-8 text-center">
          <h2 className="text-xl font-bold">{battle.topicName}</h2>
          <p className="mt-2 text-sm text-[var(--muted)]">Hosted by {battle.hostName}</p>
          <p className="mt-4 font-mono text-3xl font-bold tracking-widest">{battle.code}</p>
          <Button className="mt-6" onClick={handleJoin} disabled={actionLoading}>
            Join Game
          </Button>
        </div>
      </div>
    );
  }

  if (inLobby) {
    return (
      <div className="space-y-6">
        {error && (
          <div className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">{error}</div>
        )}

        <div className="glass-card p-6 text-center">
          <Badge className="mb-3">Waiting for players</Badge>
          <h2 className="text-2xl font-bold">{battle.topicName}</h2>
          <p className="mt-1 text-sm text-[var(--muted)]">20 questions · highest score wins</p>

          <div className="mx-auto mt-6 flex max-w-xs items-center justify-center gap-2">
            <span className="font-mono text-4xl font-bold tracking-[0.3em]">{battle.code}</span>
            <Button variant="ghost" size="icon" onClick={copyCode}>
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            </Button>
          </div>
          <p className="mt-2 text-xs text-[var(--muted)]">Share this code with friends to join</p>
        </div>

        <div className="glass-card p-6">
          <h3 className="mb-4 flex items-center gap-2 font-bold">
            <Users className="h-5 w-5" />
            Players ({battle.players.length}/8)
          </h3>
          <div className="space-y-2">
            {battle.players.map((p) => (
              <div
                key={p.userId}
                className="flex items-center justify-between rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3"
              >
                <span className="font-medium">
                  {p.userName}
                  {p.userId === battle.hostId && (
                    <Badge variant="outline" className="ml-2 text-xs">Host</Badge>
                  )}
                </span>
                {p.userId === myId && <Badge>You</Badge>}
              </div>
            ))}
          </div>
        </div>

        {battle.isHost ? (
          <Button
            className="w-full gap-2"
            size="lg"
            onClick={handleStart}
            disabled={actionLoading || battle.players.length < 2}
          >
            <Play className="h-5 w-5" />
            {battle.players.length < 2 ? "Need at least 2 players" : "Start Quiz Battle"}
          </Button>
        ) : (
          <p className="text-center text-sm text-[var(--muted)]">
            Waiting for {battle.hostName} to start the game...
          </p>
        )}
      </div>
    );
  }

  if (isActive && !quizDone && !me?.finished && battle.questions.length > 0) {
    const current = battle.questions[currentIndex];
    const options = current?.type === "TRUE_FALSE" ? ["true", "false"] : current?.options ?? [];

    function handleSelect(option: string) {
      if (answered || !current) return;
      setSelected(option);
      setAnswered(true);
      const newAnswers = [...answers];
      newAnswers[currentIndex] = option;
      setAnswers(newAnswers);

      if (currentIndex + 1 >= battle!.questions.length) {
        setTimeout(() => {
          handleSubmit(newAnswers, 0);
        }, 400);
      }
    }

    function handleNext() {
      if (currentIndex + 1 >= battle!.questions.length) {
        handleSubmit(answers, 0);
        return;
      }
      setCurrentIndex((i) => i + 1);
      setSelected(null);
      setAnswered(false);
    }

    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between text-sm text-[var(--muted)]">
          <span>{battle.topicName} — Quiz Battle</span>
          <span>{battle.players.filter((p) => p.finished).length}/{battle.players.length} finished</span>
        </div>

        <div className="glass-card overflow-hidden">
          <div className="border-b border-[var(--border)] px-6 py-4">
            <div className="mb-3 flex items-center justify-between">
              <Badge variant="outline">{current?.difficulty}</Badge>
              <span className="text-sm text-[var(--muted)]">
                Question {currentIndex + 1} of {battle.questions.length}
              </span>
            </div>
            <Progress value={currentIndex + 1} max={battle.questions.length} className="mb-4" />
            <p className="text-base font-medium leading-relaxed">{current?.questionText}</p>
          </div>

          <div className="space-y-3 p-6">
            {options.map((option) => {
              const isSelected = selected === option;

              return (
                <button
                  key={option}
                  onClick={() => handleSelect(option)}
                  disabled={answered}
                  className={cn(
                    "flex w-full items-center justify-between rounded-xl border-2 px-4 py-3.5 text-left text-sm font-medium transition-all",
                    !answered && "border-[var(--border)] hover:border-[var(--foreground)]",
                    isSelected && answered && "border-[var(--foreground)] bg-[var(--surface)]"
                  )}
                >
                  <span className="capitalize">{option}</span>
                </button>
              );
            })}

            {answered && currentIndex + 1 < battle.questions.length && (
              <Button onClick={handleNext} className="mt-4 w-full gap-2">
                Next <ChevronRight className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>

        <LiveLeaderboard players={battle.players} myId={myId} />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <ResultsPodium battle={battle} myId={myId} />

      {!isFinished && (
        <div className="glass-card p-6 text-center">
          <Loader2 className="mx-auto h-8 w-8 animate-spin text-[var(--muted)]" />
          <p className="mt-3 text-sm text-[var(--muted)]">
            You finished! Waiting for other players...
          </p>
          <LiveLeaderboard players={battle.players} myId={myId} />
        </div>
      )}

      <div className="flex gap-3">
        <Link href="/quiz-battle" className="flex-1">
          <Button variant="outline" className="w-full">New Battle</Button>
        </Link>
        {!isFinished && (
          <Button variant="secondary" className="flex-1" onClick={fetchBattle}>
            Refresh
          </Button>
        )}
      </div>
    </div>
  );
}

function LiveLeaderboard({ players, myId }: { players: BattlePlayer[]; myId?: string }) {
  const sorted = [...players].sort((a, b) => {
    if (a.score === null && b.score === null) return 0;
    if (a.score === null) return 1;
    if (b.score === null) return -1;
    return b.score - a.score;
  });

  return (
    <div className="glass-card p-4">
      <h3 className="mb-3 flex items-center gap-2 text-sm font-bold">
        <Trophy className="h-4 w-4" />
        Live Scores
      </h3>
      <div className="space-y-2">
        {sorted.map((p, i) => (
          <div
            key={p.userId}
            className={cn(
              "flex items-center justify-between rounded-lg px-3 py-2 text-sm",
              p.userId === myId ? "bg-[var(--surface)]" : ""
            )}
          >
            <span className="flex items-center gap-2">
              <span className="w-5 text-[var(--muted)]">#{i + 1}</span>
              {p.userName}
              {p.userId === myId && <Badge className="text-xs">You</Badge>}
            </span>
            <span className="font-bold">
              {p.finished ? `${p.score}/${p.totalQuestions}` : "Playing..."}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ResultsPodium({ battle, myId }: { battle: BattleState; myId?: string }) {
  const sorted = [...battle.players].sort((a, b) => (b.score ?? 0) - (a.score ?? 0));
  const winner = sorted[0];
  const isWinner = winner?.userId === myId;

  if (battle.status !== "FINISHED" && !sorted.every((p) => p.finished)) {
    return null;
  }

  return (
    <div className="glass-card p-8 text-center">
      {battle.status === "FINISHED" && (
        <>
          <Crown className="mx-auto h-14 w-14 text-amber-400" />
          <h2 className="mt-4 text-2xl font-bold">
            {isWinner ? "You won!" : `${winner?.userName} wins!`}
          </h2>
          <p className="mt-1 text-sm text-[var(--muted)]">{battle.topicName}</p>
        </>
      )}

      <div className="mx-auto mt-8 max-w-md space-y-3">
        {sorted.map((p, i) => (
          <div
            key={p.userId}
            className={cn(
              "flex items-center justify-between rounded-xl border px-4 py-3",
              i === 0 && battle.status === "FINISHED"
                ? "border-amber-500/50 bg-amber-500/10"
                : "border-[var(--border)] bg-[var(--surface)]"
            )}
          >
            <span className="flex items-center gap-3">
              {i === 0 && battle.status === "FINISHED" ? (
                <Trophy className="h-5 w-5 text-amber-400" />
              ) : i === 1 ? (
                <Medal className="h-5 w-5 text-slate-400" />
              ) : (
                <span className="w-5 text-center text-sm text-[var(--muted)]">{i + 1}</span>
              )}
              <span className="font-medium">{p.userName}</span>
              {p.userId === myId && <Badge>You</Badge>}
            </span>
            <div className="text-right">
              <p className="text-lg font-bold">{p.score}/{p.totalQuestions}</p>
              <p className="text-xs text-[var(--muted)]">
                {Math.round(((p.score ?? 0) / p.totalQuestions) * 100)}%
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
