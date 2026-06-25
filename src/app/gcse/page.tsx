import Link from "next/link";
import { GraduationCap, ChevronRight } from "lucide-react";
import { GCSE_SUBJECTS, GCSE_EXAM_BOARDS } from "@/data/curriculum/gcse";

export default function GcsePage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
      <div className="mb-8">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600">
            <GraduationCap className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold sm:text-3xl">GCSE Science</h1>
            <p className="text-slate-600 dark:text-slate-400">Years 10–11 · AQA, Edexcel, OCR</p>
          </div>
        </div>
      </div>

      <p className="mb-8 text-slate-600 dark:text-slate-400">
        Choose a subject and exam board to access topic-by-topic questions aligned to your specification.
        Each topic includes key definitions, explanations, and interactive practice questions.
      </p>

      <div className="mb-8 flex flex-wrap gap-2">
        {GCSE_EXAM_BOARDS.map((board) => (
          <span
            key={board.id}
            className="rounded-lg border border-slate-200 px-3 py-1.5 text-sm font-medium text-slate-600 dark:border-slate-600 dark:text-slate-400"
          >
            {board.label}
          </span>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {GCSE_SUBJECTS.map((subject) => (
          <Link key={subject.id} href={`/gcse/${subject.id}/aqa`}>
            <div className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:border-indigo-300 hover:shadow-md dark:border-slate-700 dark:bg-slate-900 dark:hover:border-indigo-700">
              <span className="text-4xl">{subject.icon}</span>
              <h2 className="mt-4 text-xl font-bold group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                GCSE {subject.label}
              </h2>
              <p className="mt-2 text-sm text-slate-500">Qs by Topic</p>
              <div className="mt-4 flex items-center gap-1 text-sm font-medium text-indigo-600">
                View topics <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
