import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function formatPercent(value: number): string {
  return `${Math.round(value)}%`;
}

export function calculateLevel(xp: number): number {
  return Math.floor(Math.sqrt(xp / 100)) + 1;
}

export function xpForNextLevel(level: number): number {
  return level * level * 100;
}

export function predictGcseGrade(
  masteryPercent: number,
  tier: "FOUNDATION" | "HIGHER"
): string {
  if (tier === "FOUNDATION") {
    if (masteryPercent >= 90) return "5";
    if (masteryPercent >= 80) return "4-5";
    if (masteryPercent >= 70) return "4";
    if (masteryPercent >= 60) return "3-4";
    if (masteryPercent >= 50) return "3";
    if (masteryPercent >= 40) return "2-3";
    return "1-2";
  }
  if (masteryPercent >= 95) return "9";
  if (masteryPercent >= 88) return "8-9";
  if (masteryPercent >= 80) return "8";
  if (masteryPercent >= 72) return "7-8";
  if (masteryPercent >= 65) return "7";
  if (masteryPercent >= 55) return "6-7";
  if (masteryPercent >= 45) return "6";
  if (masteryPercent >= 35) return "5-6";
  return "4-5";
}

export function getGreeting(): string {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 17) return "Good afternoon";
  return "Good evening";
}

export function displayFirstName(fullName?: string | null, email?: string | null): string {
  if (fullName?.trim()) return fullName.trim().split(/\s+/)[0];
  if (email?.trim()) return email.split("@")[0];
  return "Student";
}
