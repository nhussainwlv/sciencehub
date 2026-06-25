import { KS2_CURRICULUM } from "./ks2";
import { KS3_CURRICULUM } from "./ks3";
import { KS4_CURRICULUM } from "./ks4";
import type { SubjectDef } from "./ks2";
import type { KeyStage } from "@prisma/client";

export * from "./ks2";
export * from "./ks3";
export * from "./ks4";

export const ALL_CURRICULUM: Record<KeyStage, SubjectDef[]> = {
  KS2: KS2_CURRICULUM,
  KS3: KS3_CURRICULUM,
  KS4: KS4_CURRICULUM,
};

export function getCurriculumForKeyStage(keyStage: KeyStage): SubjectDef[] {
  return ALL_CURRICULUM[keyStage] ?? [];
}

export function getAllTopics(keyStage?: KeyStage) {
  const subjects = keyStage ? getCurriculumForKeyStage(keyStage) : [
    ...KS2_CURRICULUM,
    ...KS3_CURRICULUM,
    ...KS4_CURRICULUM,
  ];
  return subjects.flatMap((s) =>
    s.topics.map((t) => ({
      ...t,
      subjectName: s.name,
      subjectSlug: s.slug,
      keyStage: s.keyStage,
    }))
  );
}

export function findTopic(keyStage: KeyStage, subjectSlug: string, topicSlug: string) {
  const subject = ALL_CURRICULUM[keyStage]?.find((s) => s.slug === subjectSlug);
  const topic = subject?.topics.find((t) => t.slug === topicSlug);
  return { subject, topic };
}

export function getTopicCount(): number {
  return getAllTopics().length;
}

export function getSubtopicCount(): number {
  return getAllTopics().reduce((acc, t) => acc + t.subtopics.length, 0);
}

export { enrichCurriculumTopic, toGcseLearnShape } from "./content";
export type { EnrichedCurriculumTopic, CurriculumTopicContent } from "./content/types";
