import { FileText, ExternalLink, BookOpen, ClipboardCheck } from "lucide-react";
import type { GcseExamBoardId, GcseSubjectId } from "@/data/curriculum/gcse";
import { getPastPapers } from "@/data/curriculum/gcse/past-papers";

const TYPE_ICON: Record<string, typeof FileText> = {
  all: ClipboardCheck,
  papers: FileText,
  "mark-schemes": ClipboardCheck,
  specification: BookOpen,
  practice: BookOpen,
};

interface PastPapersPanelProps {
  boardId: GcseExamBoardId;
  subjectId: GcseSubjectId;
  boardLabel: string;
  subjectLabel: string;
  compact?: boolean;
}

export function PastPapersPanel({
  boardId,
  subjectId,
  boardLabel,
  subjectLabel,
  compact = false,
}: PastPapersPanelProps) {
  const data = getPastPapers(boardId, subjectId);
  if (!data) return null;

  const official = data.resources.filter((r) =>
    ["AQA", "Pearson Edexcel", "OCR"].includes(r.source)
  );
  const extra = data.resources.filter(
    (r) => !["AQA", "Pearson Edexcel", "OCR"].includes(r.source)
  );

  return (
    <section className="glass-card overflow-hidden border-t-4 border-amber-500/60">
      <div className="border-b border-[var(--border)] bg-amber-500/5 px-6 py-4">
        <h2 className="flex flex-wrap items-center gap-2 text-lg font-bold">
          <FileText className="h-5 w-5 text-amber-400" />
          Past Papers &amp; Mark Schemes
          <span className="rounded-full bg-amber-500/15 px-2.5 py-0.5 text-xs font-semibold text-amber-300">
            {data.specCode}
          </span>
        </h2>
        <p className="mt-1 text-sm text-[var(--muted)]">
          {data.specTitle} · {boardLabel} GCSE {subjectLabel}
        </p>
        {!compact && (
          <p className="mt-2 text-xs text-[var(--muted)]">{data.paperInfo}</p>
        )}
      </div>

      <div className="divide-y divide-[var(--border)]">
        <div className="px-6 py-4">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">
            Official exam board
          </p>
          <div className="space-y-2">
            {official.map((link) => {
              const Icon = TYPE_ICON[link.type] ?? FileText;
              return (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-3 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm transition-colors hover:border-amber-500/50"
                >
                  <div className="flex items-start gap-3">
                    <Icon className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
                    <div>
                      <p className="font-medium text-[var(--foreground)]">{link.title}</p>
                      <p className="text-xs text-[var(--muted)]">{link.source}</p>
                    </div>
                  </div>
                  <ExternalLink className="h-4 w-4 shrink-0 text-[var(--muted)]" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="px-6 py-4">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">
            More practice resources
          </p>
          <div className="space-y-2">
            {extra.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-3 rounded-xl border border-[var(--border)] px-4 py-3 text-sm transition-colors hover:bg-[var(--surface)]"
              >
                <div>
                  <p className="font-medium">{link.title}</p>
                  <p className="text-xs text-[var(--muted)]">{link.source}</p>
                </div>
                <ExternalLink className="h-4 w-4 shrink-0 text-[var(--muted)]" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
