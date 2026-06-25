"use client";

import { useState, useEffect, useCallback } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import {
  Users, UserPlus, Swords, Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

interface Friend {
  id: string;
  name: string;
  email: string;
  xp: number;
  level: number;
}

interface BattleSummary {
  id: string;
  code: string;
  topicName: string;
  status: string;
  hostName: string;
  players: { userName: string; score: number | null; finished: boolean }[];
}

const TOPIC_PRESETS = [
  "Cell Biology",
  "Forces",
  "Energy",
  "Electricity",
  "Photosynthesis",
  "Atomic Structure",
  "Chemical Reactions",
  "Waves",
  "Ecology",
  "Homeostasis",
];

export function QuizBattleHub() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [friends, setFriends] = useState<Friend[]>([]);
  const [battles, setBattles] = useState<BattleSummary[]>([]);
  const [email, setEmail] = useState("");
  const [joinCode, setJoinCode] = useState("");
  const [topic, setTopic] = useState(TOPIC_PRESETS[0]);
  const [customTopic, setCustomTopic] = useState("");
  const [selectedFriends, setSelectedFriends] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState(false);
  const [error, setError] = useState("");

  const loadData = useCallback(async () => {
    try {
      const [friendsRes, battlesRes] = await Promise.all([
        fetch("/api/friends"),
        fetch("/api/quiz-battle"),
      ]);
      if (friendsRes.ok) {
        const data = await friendsRes.json();
        setFriends(data.friends ?? []);
      }
      if (battlesRes.ok) {
        const data = await battlesRes.json();
        setBattles(
          (data.battles ?? []).filter((b: BattleSummary) => b.status !== "FINISHED")
        );
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (status === "authenticated") loadData();
  }, [status, loadData]);

  if (status === "unauthenticated") {
    return (
      <div className="glass-card p-8 text-center">
        <Swords className="mx-auto h-12 w-12 text-[var(--muted)]" />
        <h2 className="mt-4 text-xl font-bold">Sign in to play Quiz Battles</h2>
        <p className="mt-2 text-sm text-[var(--muted)]">
          Add friends and compete to see who scores the most.
        </p>
        <Button className="mt-6" onClick={() => router.push("/login")}>
          Sign in
        </Button>
      </div>
    );
  }

  async function handleAddFriend(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setActionLoading(true);
    try {
      const res = await fetch("/api/friends", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Failed to add friend");
      setEmail("");
      await loadData();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed");
    } finally {
      setActionLoading(false);
    }
  }

  async function handleCreateBattle() {
    setError("");
    setActionLoading(true);
    const topicName = customTopic.trim() || topic;
    try {
      const res = await fetch("/api/quiz-battle", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          topicName,
          questionCount: 20,
          invitedUserIds: selectedFriends,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Failed to create game");
      router.push(`/quiz-battle/${data.battle.id}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed");
      setActionLoading(false);
    }
  }

  async function handleJoinByCode() {
    setError("");
    setActionLoading(true);
    try {
      const res = await fetch("/api/quiz-battle", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: joinCode.trim() }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Failed to join");
      router.push(`/quiz-battle/${data.battle.id}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed");
      setActionLoading(false);
    }
  }

  function toggleFriend(id: string) {
    setSelectedFriends((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  }

  if (status === "loading" || loading) {
    return (
      <div className="flex justify-center py-20">
        <Loader2 className="h-8 w-8 animate-spin text-[var(--muted)]" />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {error && (
        <div className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
          {error}
        </div>
      )}

      {/* Friends */}
      <section className="glass-card p-6">
        <h2 className="mb-4 flex items-center gap-2 text-lg font-bold">
          <Users className="h-5 w-5" />
          Your Friends
        </h2>
        <form onSubmit={handleAddFriend} className="mb-4 flex gap-2">
          <Input
            type="email"
            placeholder="Add friend by email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1"
          />
          <Button type="submit" disabled={actionLoading || !email}>
            <UserPlus className="h-4 w-4" />
            Add
          </Button>
        </form>
        {friends.length === 0 ? (
          <p className="text-sm text-[var(--muted)]">
            Add classmates by their registered email to invite them to quiz battles.
          </p>
        ) : (
          <div className="space-y-2">
            {friends.map((f) => (
              <div
                key={f.id}
                className="flex items-center justify-between rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3"
              >
                <div>
                  <p className="font-medium">{f.name}</p>
                  <p className="text-xs text-[var(--muted)]">Level {f.level} · {f.xp} XP</p>
                </div>
                <Badge variant="outline">{f.email}</Badge>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Create battle */}
      <section className="glass-card p-6">
        <h2 className="mb-4 flex items-center gap-2 text-lg font-bold">
          <Swords className="h-5 w-5" />
          Start a Quiz Battle
        </h2>
        <p className="mb-4 text-sm text-[var(--muted)]">
          Create a game, invite friends, and compete on the same 20 questions. Highest score wins!
        </p>

        <div className="mb-4">
          <p className="mb-2 text-xs font-medium uppercase tracking-wide text-[var(--muted)]">Topic</p>
          <div className="flex flex-wrap gap-2">
            {TOPIC_PRESETS.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => { setTopic(t); setCustomTopic(""); }}
                className={`rounded-full border px-3 py-1 text-xs font-medium transition-colors ${
                  topic === t && !customTopic
                    ? "border-[var(--foreground)] bg-[var(--surface)]"
                    : "border-[var(--border)] text-[var(--muted)] hover:border-[var(--foreground)]"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
          <Input
            className="mt-3"
            placeholder="Or type a custom topic..."
            value={customTopic}
            onChange={(e) => setCustomTopic(e.target.value)}
          />
        </div>

        {friends.length > 0 && (
          <div className="mb-4">
            <p className="mb-2 text-xs font-medium uppercase tracking-wide text-[var(--muted)]">
              Invite friends (optional)
            </p>
            <div className="flex flex-wrap gap-2">
              {friends.map((f) => (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => toggleFriend(f.id)}
                  className={`rounded-full border px-3 py-1 text-xs font-medium ${
                    selectedFriends.includes(f.id)
                      ? "border-violet-500 bg-violet-500/20 text-violet-200"
                      : "border-[var(--border)] text-[var(--muted)]"
                  }`}
                >
                  {f.name}
                </button>
              ))}
            </div>
          </div>
        )}

        <Button onClick={handleCreateBattle} disabled={actionLoading} className="gap-2">
          <Swords className="h-4 w-4" />
          Create Quiz Battle
        </Button>
      </section>

      {/* Join by code */}
      <section className="glass-card p-6">
        <h2 className="mb-4 text-lg font-bold">Join with Code</h2>
        <div className="flex gap-2">
          <Input
            placeholder="Enter 6-character code"
            value={joinCode}
            onChange={(e) => setJoinCode(e.target.value.toUpperCase())}
            maxLength={6}
            className="font-mono tracking-widest"
          />
          <Button onClick={handleJoinByCode} disabled={actionLoading || joinCode.length < 6}>
            Join
          </Button>
        </div>
      </section>

      {/* Active games */}
      {battles.length > 0 && (
        <section className="glass-card p-6">
          <h2 className="mb-4 text-lg font-bold">Your Active Games</h2>
          <div className="space-y-2">
            {battles.map((b) => (
              <button
                key={b.id}
                type="button"
                onClick={() => router.push(`/quiz-battle/${b.id}`)}
                className="flex w-full items-center justify-between rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-left transition-colors hover:border-[var(--foreground)]"
              >
                <div>
                  <p className="font-medium">{b.topicName}</p>
                  <p className="text-xs text-[var(--muted)]">
                    Host: {b.hostName} · {b.players.length} players · {b.status}
                  </p>
                </div>
                <Badge variant="outline" className="font-mono">{b.code}</Badge>
              </button>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
