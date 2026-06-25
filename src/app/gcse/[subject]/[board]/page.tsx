import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { ExamBoardTabs } from "@/components/gcse/exam-board-tabs";
import { PastPapersPanel } from "@/components/gcse/past-papers-panel";
import {
  getBoard,
  getSubjectLabel,
  GCSE_EXAM_BOARDS,
  type GcseSubjectId,
  type GcseExamBoardId,
} from "@/data/curriculum/gcse";

interface PageProps {
  params: Promise<{ subject: string; board: string }>;
}

export default async function GcseSubjectBoardPage({ params }: PageProps) {
  const { subject, board: boardId } = await params;
  const subjectId = subject as GcseSubjectId;
  const board = getBoard(subjectId, boardId as GcseExamBoardId);

  if (!board) notFound();

  const subjectLabel = getSubjectLabel(subjectId);

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      <Link
        href="/gcse"
        className="mb-6 inline-flex items-center gap-1 text-sm text-[var(--muted)] hover:text-[var(--foreground)]"
      >
        <ChevronLeft className="h-4 w-4" /> Back to GCSE
      </Link>

      <h1 className="mb-6 text-2xl font-bold sm:text-3xl">
        GCSE {subjectLabel} Qs by Topic
      </h1>

      <ExamBoardTabs
        subject={subjectId}
        activeBoard={board.id}
        boards={GCSE_EXAM_BOARDS}
      />

      <div className="mt-6 mb-8">
        <PastPapersPanel
          boardId={board.id}
          subjectId={subjectId}
          boardLabel={board.label}
          subjectLabel={subjectLabel}
        />
      </div>

      <div className="overflow-hidden rounded-2xl border border-[var(--border)] glass-card">
        <div className="border-b border-[var(--border)] px-6 py-4">
          <h2 className="text-center text-lg font-semibold">Topics</h2>
        </div>
        <div className="px-6 py-8">
          <ol className="mx-auto max-w-md space-y-3">
            {board.topics.map((topic) => (
              <li key={topic.slug}>
                <Link
                  href={`/gcse/${subjectId}/${board.id}/${topic.slug}`}
                  className="block text-center text-base text-[var(--foreground)] transition-colors hover:underline"
                >
                  Topic {topic.number} — {topic.name}
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <p className="mt-4 text-center text-sm text-[var(--muted)]">
        {board.topics.length} topics · {board.label} specification
      </p>
    </div>
  );
}
