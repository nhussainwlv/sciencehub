"use client";

import { useState } from "react";
import Link from "next/link";
import { FileText, ExternalLink, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { GCSE_EXAM_BOARDS, GCSE_SUBJECTS } from "@/data/curriculum/gcse";
import { getPastPapers } from "@/data/curriculum/gcse/past-papers";
import { GCSE_GRADE_BOUNDARIES } from "@/data/curriculum/ks4";
import type { GcseExamBoardId, GcseSubjectId } from "@/data/curriculum/gcse";

export default function ExamsPage() {
  const [selectedBoard, setSelectedBoard] = useState<GcseExamBoardId>("aqa");
  const [selectedSubject, setSelectedSubject] = useState<GcseSubjectId>("biology");

  const pastPapers = getPastPapers(selectedBoard, selectedSubject);

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold sm:text-3xl">Exam Practice</h1>
        <p className="mt-2 text-sm text-[var(--muted)]">
          Official past papers and mark schemes for every GCSE science subject and exam board.
        </p>
      </div>

      <div className="mb-6 flex flex-wrap gap-3">
        <select
          className="rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm"
          value={selectedBoard}
          onChange={(e) => setSelectedBoard(e.target.value as GcseExamBoardId)}
        >
          {GCSE_EXAM_BOARDS.map((b) => (
            <option key={b.id} value={b.id}>{b.label}</option>
          ))}
        </select>
        <select
          className="rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm"
          value={selectedSubject}
          onChange={(e) => setSelectedSubject(e.target.value as GcseSubjectId)}
        >
          {GCSE_SUBJECTS.map((s) => (
            <option key={s.id} value={s.id}>{s.label}</option>
          ))}
        </select>
      </div>

      {pastPapers ? (
        <div className="space-y-6">
          <div className="glass-card p-6">
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <Badge>{pastPapers.specCode}</Badge>
              <Badge variant="outline">{pastPapers.specTitle}</Badge>
            </div>
            <p className="text-sm text-[var(--muted)]">{pastPapers.paperInfo}</p>

            <div className="mt-6 space-y-2">
              {pastPapers.resources.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-3 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm transition-colors hover:border-amber-500/50"
                >
                  <div className="flex items-start gap-3">
                    <FileText className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
                    <div>
                      <p className="font-medium">{link.title}</p>
                      <p className="text-xs text-[var(--muted)]">{link.source}</p>
                    </div>
                  </div>
                  <ExternalLink className="h-4 w-4 shrink-0 text-[var(--muted)]" />
                </a>
              ))}
            </div>
          </div>

          <Link
            href={`/gcse/${selectedSubject}/${selectedBoard}`}
            className="block text-center text-sm font-medium text-[var(--foreground)] hover:underline"
          >
            View {GCSE_SUBJECTS.find((s) => s.id === selectedSubject)?.label} topics for this board →
          </Link>
        </div>
      ) : (
        <p className="text-[var(--muted)]">No past paper resources found for this combination.</p>
      )}

      <div className="glass-card mt-8 p-6">
        <h2 className="mb-4 flex items-center gap-2 font-bold">
          <Award className="h-5 w-5" />
          Grade Boundaries (AQA Higher Tier)
        </h2>
        <div className="flex flex-wrap gap-3">
          {Object.entries(GCSE_GRADE_BOUNDARIES.HIGHER).map(([grade, marks]) => (
            <div key={grade} className="rounded-xl bg-[var(--surface)] px-4 py-2 text-center">
              <p className="text-lg font-bold">Grade {grade}</p>
              <p className="text-sm text-[var(--muted)]">{marks}%+</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
