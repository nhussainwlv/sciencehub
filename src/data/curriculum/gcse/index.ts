import { GCSE_BIOLOGY } from "./biology";
import { GCSE_CHEMISTRY } from "./chemistry";
import { GCSE_PHYSICS } from "./physics";
import type { GcseBoardSpec, GcseExamBoardId, GcseSubjectId, GcseTopic } from "./types";

export * from "./types";
export { GCSE_BIOLOGY, GCSE_CHEMISTRY, GCSE_PHYSICS };

export const GCSE_SUBJECTS: { id: GcseSubjectId; label: string; icon: string; color: string }[] = [
  { id: "biology", label: "Biology", icon: "🧬", color: "#22c55e" },
  { id: "chemistry", label: "Chemistry", icon: "⚗️", color: "#3b82f6" },
  { id: "physics", label: "Physics", icon: "⚛️", color: "#8b5cf6" },
];

const SUBJECT_BOARDS: Record<GcseSubjectId, GcseBoardSpec[]> = {
  biology: GCSE_BIOLOGY,
  chemistry: GCSE_CHEMISTRY,
  physics: GCSE_PHYSICS,
};

export function getBoardsForSubject(subject: GcseSubjectId): GcseBoardSpec[] {
  return SUBJECT_BOARDS[subject] ?? [];
}

export function getBoard(subject: GcseSubjectId, boardId: GcseExamBoardId): GcseBoardSpec | undefined {
  return getBoardsForSubject(subject).find((b) => b.id === boardId);
}

export function getTopic(
  subject: GcseSubjectId,
  boardId: GcseExamBoardId,
  topicSlug: string
): { board: GcseBoardSpec; topic: GcseTopic } | undefined {
  const board = getBoard(subject, boardId);
  const topic = board?.topics.find((t) => t.slug === topicSlug);
  if (!board || !topic) return undefined;
  return { board, topic };
}

export { enrichTopic } from "./content";
export { getPastPapers, getPastPapersForBoard, getPastPapersForSubject, GCSE_PAST_PAPERS } from "./past-papers";
export type { GcsePastPaperSet, PastPaperResource } from "./past-papers";

export function getSubjectLabel(subject: GcseSubjectId): string {
  return GCSE_SUBJECTS.find((s) => s.id === subject)?.label ?? subject;
}
