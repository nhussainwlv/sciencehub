import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft, BookOpen, FileQuestion, FileText } from "lucide-react";
import { TopicLearn } from "@/components/gcse/topic-learn";
import { TopicQuiz } from "@/components/gcse/topic-quiz";
import { getPastPapers } from "@/data/curriculum/gcse/past-papers";
import {
  getBoard,
  getSubjectLabel,
  getTopic,
  enrichTopic,
  type GcseSubjectId,
  type GcseExamBoardId,
} from "@/data/curriculum/gcse";

interface PageProps {
  params: Promise<{ subject: string; board: string; topic: string }>;
}

export default async function GcseTopicPage({ params }: PageProps) {
  const { subject, board, topic: topicSlug } = await params;
  const subjectId = subject as GcseSubjectId;
  const result = getTopic(subjectId, board as GcseExamBoardId, topicSlug);

  if (!result) notFound();

  const { board: boardSpec, topic: rawTopic } = result;
  const topic = enrichTopic(rawTopic, subjectId);
  const subjectLabel = getSubjectLabel(subjectId);
  const pastPapers = getPastPapers(boardSpec.id, subjectId);
  const officialPastPaperUrl = pastPapers?.resources.find((r) => r.type === "all")?.url;

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      <Link
        href={`/gcse/${subjectId}/${board}`}
        className="mb-6 inline-flex items-center gap-1 text-sm text-[var(--muted)] hover:text-[var(--foreground)]"
      >
        <ChevronLeft className="h-4 w-4" /> Back to {boardSpec.label} {subjectLabel}
      </Link>

      <div className="mb-8">
        <p className="text-sm font-medium text-[var(--muted)]">
          {boardSpec.label} · GCSE {subjectLabel}
        </p>
        <h1 className="mt-1 text-2xl font-bold sm:text-3xl">
          Topic {topic.number} — {topic.name}
        </h1>
        <p className="mt-2 text-[var(--muted)]">{topic.description}</p>
      </div>

      <div className="mb-8 flex flex-wrap gap-4">
        <div className="flex items-center gap-2 rounded-full border border-[var(--border-strong)] bg-[var(--surface)] px-4 py-2 text-sm font-medium">
          <BookOpen className="h-4 w-4" />
          Step 1: Learn
        </div>
        <div className="flex items-center gap-2 rounded-full border border-[var(--border)] px-4 py-2 text-sm font-medium text-[var(--muted)]">
          <FileQuestion className="h-4 w-4" />
          Step 2: Quiz
        </div>
      </div>

      {officialPastPaperUrl && (
        <a
          href={officialPastPaperUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mb-8 flex items-center justify-between gap-3 rounded-xl border border-amber-500/30 bg-amber-500/5 px-4 py-3 text-sm transition-colors hover:border-amber-500/60"
        >
          <span className="flex items-center gap-2 font-medium">
            <FileText className="h-4 w-4 text-amber-400" />
            {boardSpec.label} GCSE {subjectLabel} past papers &amp; mark schemes ({pastPapers?.specCode})
          </span>
          <span className="text-xs text-[var(--muted)]">Official →</span>
        </a>
      )}

      <TopicLearn topic={topic} subjectLabel={subjectLabel} />

      <div className="mt-12">
        <div className="mb-6 flex items-center gap-2">
          <FileQuestion className="h-5 w-5" />
          <h2 className="text-xl font-bold">Practice Questions</h2>
        </div>
        <p className="mb-6 text-sm text-[var(--muted)]">
          30 questions including 6 maths-style calculations with worked solutions. Correct answers turn{" "}
          <span className="font-semibold text-green-600">green</span>, incorrect turn{" "}
          <span className="font-semibold text-red-600">red</span>.
        </p>
        <TopicQuiz
          topicName={topic.name}
          keyConcepts={topic.keyConcepts}
          mathsQuestions={topic.mathsQuestions}
          questionCount={30}
        />
      </div>
    </div>
  );
}
