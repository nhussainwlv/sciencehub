"use client";

import Link from "next/link";
import { Atom } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export function LandingNav() {
  return (
    <header className="nav-glass sticky top-0 z-50">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--border-strong)] bg-[var(--surface)]">
            <Atom className="h-5 w-5 text-[var(--foreground)]" />
          </div>
          <span className="text-lg font-bold tracking-tight">Science Hub</span>
        </Link>

        <nav className="hidden items-center gap-8 sm:flex">
          <a href="#features" className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]">
            Features
          </a>
          <a href="#how-it-works" className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]">
            How it works
          </a>
          <Link href="/gcse" className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]">
            GCSE
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link href="/login" className="btn-outline hidden px-4 py-2 text-sm sm:inline-flex">
            Sign in
          </Link>
          <Link href="/register" className="btn-primary px-4 py-2 text-sm">
            Get started
          </Link>
        </div>
      </div>
    </header>
  );
}
