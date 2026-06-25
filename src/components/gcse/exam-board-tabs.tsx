"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import type { GcseExamBoardId } from "@/data/curriculum/gcse";

interface ExamBoardTabsProps {
  subject: string;
  activeBoard: GcseExamBoardId;
  boards: { id: GcseExamBoardId; label: string }[];
}

export function ExamBoardTabs({ subject, activeBoard, boards }: ExamBoardTabsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {boards.map((board) => {
        const href = `/gcse/${subject}/${board.id}`;
        const isActive = activeBoard === board.id;
        return (
          <Link
            key={board.id}
            href={href}
            className={cn(
              "rounded-lg border px-4 py-2 text-sm font-medium transition-all",
              isActive
                ? "border-[var(--foreground)] bg-[var(--foreground)] text-[var(--accent-fg)]"
                : "border-[var(--border)] bg-[var(--surface)] text-[var(--muted)] hover:border-[var(--border-strong)] hover:text-[var(--foreground)]"
            )}
          >
            {board.label}
          </Link>
        );
      })}
    </div>
  );
}
