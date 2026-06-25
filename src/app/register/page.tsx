"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Atom } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "STUDENT",
    keyStage: "KS4",
    examBoard: "AQA",
    gcseTier: "HIGHER",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    if (!res.ok) {
      setError(data.error ?? "Registration failed");
      setLoading(false);
      return;
    }

    router.push("/login");
  }

  const inputClass =
    "w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--foreground)] focus:border-[var(--foreground)] focus:outline-none focus:ring-1 focus:ring-[var(--foreground)]";

  return (
    <div className="app-shell flex min-h-screen flex-col">
      <div className="flex justify-end p-4">
        <ThemeToggle showLabel />
      </div>

      <div className="flex flex-1 items-center justify-center px-4 pb-12">
        <main className="w-full max-w-md">
          <div className="mb-8 text-center">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border-strong)] bg-[var(--surface)]">
                <Atom className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold">Science Hub</span>
            </Link>
          </div>

          <div className="glass-card p-8">
            <h1 className="text-2xl font-bold">Create account</h1>
            <p className="mt-2 text-sm text-[var(--muted)]">Free for students. Start in minutes.</p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <input className={inputClass} placeholder="Full name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
              <input className={inputClass} type="email" placeholder="you@school.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
              <input className={inputClass} type="password" placeholder="Password (min 8 characters)" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} minLength={8} required />

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-[var(--muted)]">I am a</label>
                  <select className={inputClass} value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })}>
                    <option value="STUDENT">Student</option>
                    <option value="TEACHER">Teacher</option>
                    <option value="PARENT">Parent</option>
                  </select>
                </div>
                {form.role === "STUDENT" && (
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-[var(--muted)]">Key Stage</label>
                    <select className={inputClass} value={form.keyStage} onChange={(e) => setForm({ ...form, keyStage: e.target.value })}>
                      <option value="KS2">KS2</option>
                      <option value="KS3">KS3</option>
                      <option value="KS4">KS4 GCSE</option>
                    </select>
                  </div>
                )}
              </div>

              {error && (
                <p className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-2.5 text-sm text-red-500">{error}</p>
              )}

              <button type="submit" disabled={loading} className="btn-primary w-full py-3 disabled:opacity-50">
                {loading ? "Creating..." : "Create account"}
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-[var(--muted)]">
              Have an account?{" "}
              <Link href="/login" className="font-medium text-[var(--foreground)] underline underline-offset-2">
                Sign in
              </Link>
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
