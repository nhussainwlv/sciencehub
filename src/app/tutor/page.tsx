"use client";

import { useState, useRef, useEffect } from "react";
import { useSession } from "next-auth/react";
import { Send, Brain, Sparkles, BookOpen, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TutorMessageContent } from "@/components/tutor/message-content";
import { getGreeting, displayFirstName } from "@/lib/utils";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const suggestedQuestions = [
  "Explain gravity",
  "What is photosynthesis?",
  "How does osmosis work?",
  "Explain electricity and Ohm's law",
  "What is the difference between mass and weight?",
  "Create a revision plan for my weak topics",
];

export default function TutorPage() {
  const { data: session } = useSession();
  const firstName = displayFirstName(session?.user?.name, session?.user?.email);

  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;
    const greeting = `${getGreeting()}, ${firstName}! I'm your Science Hub AI Tutor. Ask me to explain any GCSE science topic — I'll give you definitions, equations, examples, and exam tips.`;
    setMessages([{ role: "assistant", content: greeting }]);
  }, [firstName]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function sendMessage(text: string) {
    if (!text.trim() || loading) return;

    const userMessage: Message = { role: "user", content: text };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/tutor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: updatedMessages.map((m) => ({ role: m.role, content: m.content })),
          context: {
            keyStage: session?.user?.keyStage ?? "KS4",
            examBoard: session?.user?.examBoard ?? "AQA",
            gcseTier: "HIGHER",
            studentName: session?.user?.name,
            weakAreas: ["Forces", "Atomic Structure"],
            masteryPercent: session?.user?.xp ? Math.min(100, Math.floor(session.user.xp / 50)) : 0,
          },
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error);

      setMessages((prev) => [...prev, { role: "assistant", content: data.response }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Sorry, something went wrong. Please try again." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      <div className="mb-6">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--border-strong)] bg-[var(--surface)]">
            <Brain className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">AI Science Tutor</h1>
            <p className="text-sm text-[var(--muted)]">
              Explains GCSE topics with definitions, equations &amp; exam tips
            </p>
          </div>
        </div>
      </div>

      <div className="mb-4 flex flex-wrap gap-2">
        {suggestedQuestions.map((q) => (
          <button
            key={q}
            onClick={() => sendMessage(q)}
            className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-xs transition-colors hover:border-[var(--foreground)]"
          >
            <Sparkles className="mr-1 inline h-3 w-3" />
            {q}
          </button>
        ))}
      </div>

      <div className="glass-card mb-4 flex h-[520px] flex-col overflow-hidden">
        <div className="flex-1 overflow-y-auto p-4">
          <div className="space-y-4">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                    msg.role === "user"
                      ? "bg-[var(--foreground)] text-[var(--background)]"
                      : "border border-[var(--border)] bg-[var(--surface)]"
                  }`}
                >
                  {msg.role === "user" ? (
                    <p className="text-sm">{msg.content}</p>
                  ) : (
                    <TutorMessageContent content={msg.content} />
                  )}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm">
                  <span className="animate-pulse text-[var(--muted)]">Thinking...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>

        <div className="border-t border-[var(--border)] p-4">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              sendMessage(input);
            }}
            className="flex gap-2"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything — e.g. Explain gravity, What is osmosis?"
              className="flex-1 rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-2.5 text-sm focus:border-[var(--foreground)] focus:outline-none focus:ring-1 focus:ring-[var(--foreground)]"
              disabled={loading}
            />
            <Button type="submit" disabled={loading || !input.trim()}>
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <div className="glass-card p-4">
          <p className="flex items-center gap-2 text-sm font-semibold">
            <Target className="h-4 w-4" /> Weak Areas
          </p>
          <p className="mt-2 text-sm text-[var(--muted)]">Forces (45%), Atomic Structure (62%)</p>
        </div>
        <div className="glass-card p-4">
          <p className="flex items-center gap-2 text-sm font-semibold">
            <BookOpen className="h-4 w-4" /> Try asking
          </p>
          <p className="mt-2 text-sm text-[var(--muted)]">&quot;Explain gravity&quot; or &quot;What is DNA?&quot;</p>
        </div>
        <div className="glass-card p-4">
          <p className="flex items-center gap-2 text-sm font-semibold">
            <Sparkles className="h-4 w-4" /> Coverage
          </p>
          <Badge variant="outline" className="mt-2">All GCSE topics</Badge>
          <p className="mt-1 text-xs text-[var(--muted)]">Biology, Chemistry, Physics</p>
        </div>
      </div>
    </div>
  );
}
