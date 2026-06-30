"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import {
  Atom, LayoutDashboard, BookOpen, Brain, Trophy, FileText,
  Users, Settings, LogOut, Menu, X, Search, GraduationCap, Swords,
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

const studentNav = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/gcse", label: "GCSE", icon: GraduationCap },
  { href: "/curriculum", label: "Curriculum", icon: BookOpen },
  { href: "/quiz-battle", label: "Quiz Battles", icon: Swords },
  { href: "/tutor", label: "AI Tutor", icon: Brain },
  { href: "/exams", label: "Exams", icon: FileText },
  { href: "/leaderboard", label: "Leaderboard", icon: Trophy },
];

const teacherNav = [
  { href: "/teacher", label: "Classes", icon: Users },
  { href: "/teacher/assignments", label: "Assignments", icon: FileText },
  { href: "/teacher/reports", label: "Reports", icon: LayoutDashboard },
];

export function Navbar() {
  const pathname = usePathname();
  const { data: session, status } = useSession();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isAuthPage = pathname === "/login" || pathname === "/register" || pathname === "/";
  if (isAuthPage) return null;

  const isAuthenticated = status === "authenticated" && !!session?.user;
  const isLoading = status === "loading";

  const nav = session?.user?.role === "TEACHER" ? teacherNav : studentNav;

  return (
    <header className="nav-glass sticky top-0 z-50">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--border-strong)] bg-[var(--surface)]">
            <Atom className="h-5 w-5" />
          </div>
          <span className="text-lg font-bold tracking-tight">Science Hub</span>
        </Link>

        {isAuthenticated && (
          <nav className="hidden items-center gap-1 md:flex">
            {nav.map(({ href, label, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  "flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  pathname.startsWith(href)
                    ? "bg-[var(--surface)] text-[var(--foreground)]"
                    : "text-[var(--muted)] hover:bg-[var(--surface)] hover:text-[var(--foreground)]"
                )}
              >
                <Icon className="h-4 w-4" />
                {label}
              </Link>
            ))}
          </nav>
        )}

        <div className="flex items-center gap-2">
          <ThemeToggle className="hidden sm:inline-flex" />
          {isLoading ? (
            <div className="h-9 w-24 animate-pulse rounded-lg bg-[var(--surface)]" aria-hidden />
          ) : isAuthenticated ? (
            <>
              <Link href="/search" className="rounded-lg p-2 text-[var(--muted)] hover:bg-[var(--surface)] hover:text-[var(--foreground)]">
                <Search className="h-5 w-5" />
              </Link>
              <Link href="/settings" className="hidden rounded-lg p-2 text-[var(--muted)] hover:bg-[var(--surface)] sm:block">
                <Settings className="h-5 w-5" />
              </Link>
              <div className="hidden items-center gap-3 sm:flex">
                <div className="text-right">
                  <p className="text-sm font-medium">{session.user.name}</p>
                  <p className="text-xs text-[var(--muted)]">Level {session.user.level} · {session.user.xp} XP</p>
                </div>
                <Button variant="ghost" size="icon" onClick={() => signOut({ callbackUrl: "/" })}>
                  <LogOut className="h-4 w-4" />
                </Button>
              </div>
              <button
                className="rounded-lg p-2 md:hidden"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </>
          ) : (
            <div className="flex gap-2">
              <Link href="/login" className="btn-outline px-4 py-2 text-sm">Sign in</Link>
              <Link href="/register" className="btn-primary px-4 py-2 text-sm">Get started</Link>
            </div>
          )}
        </div>
      </div>

      {mobileOpen && isAuthenticated && session && (
        <nav className="border-t border-[var(--border)] px-4 py-3 md:hidden">
          {nav.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMobileOpen(false)}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium",
                pathname.startsWith(href)
                  ? "bg-[var(--surface)] text-[var(--foreground)]"
                  : "text-[var(--muted)]"
              )}
            >
              <Icon className="h-4 w-4" />
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
