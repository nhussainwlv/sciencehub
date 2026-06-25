"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Atom } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      setError("Invalid email or password.");
      setLoading(false);
      return;
    }

    router.push("/dashboard");
    router.refresh();
  }

  const inputClass =
    "w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:border-[var(--foreground)] focus:outline-none focus:ring-1 focus:ring-[var(--foreground)]";

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
            <h1 className="text-2xl font-bold">Sign in</h1>
            <p className="mt-2 text-sm text-[var(--muted)]">Welcome back. Use your email and password.</p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@school.com"
                required
                autoComplete="email"
                className={inputClass}
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
                autoComplete="current-password"
                className={inputClass}
              />

              {error && (
                <p className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-2.5 text-sm text-red-500">
                  {error}
                </p>
              )}

              <button type="submit" disabled={loading} className="btn-primary w-full py-3 disabled:opacity-50">
                {loading ? "Signing in..." : "Sign in"}
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-[var(--muted)]">
              No account?{" "}
              <Link href="/register" className="font-medium text-[var(--foreground)] underline underline-offset-2">
                Create one free
              </Link>
            </p>

            <div className="mt-6 rounded-xl bg-[var(--surface)] p-4 text-xs text-[var(--muted)]">
              <p className="font-medium text-[var(--foreground)]">Demo</p>
              <p className="mt-1">student@sciencehub.uk / password123</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
