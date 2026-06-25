"use client";

import { Moon, Sun } from "lucide-react";
import { useSettings } from "@/components/providers/settings-provider";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export function ThemeToggle({ className, showLabel }: ThemeToggleProps) {
  const { darkMode, setDarkMode } = useSettings();

  return (
    <button
      type="button"
      onClick={() => setDarkMode(!darkMode)}
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-sm font-medium text-[var(--muted)] transition-all hover:border-[var(--foreground)] hover:text-[var(--foreground)]",
        className
      )}
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      {showLabel && <span>{darkMode ? "Light" : "Dark"}</span>}
    </button>
  );
}
