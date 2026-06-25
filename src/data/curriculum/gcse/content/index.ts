import { BIOLOGY_CONTENT } from "./biology";
import { CHEMISTRY_CONTENT } from "./chemistry";
import { PHYSICS_CONTENT } from "./physics";
import { getTopicExtras } from "./topic-extras";
import type { GcseTopicContent } from "./types";
import type { GcseSubjectId, GcseTopic } from "../types";
import { getMathsQuestionsForTopic } from "./maths-questions";
import { getHigherTierContent } from "./higher-tier-content";

const ALL_CONTENT: GcseTopicContent[] = [
  ...BIOLOGY_CONTENT,
  ...CHEMISTRY_CONTENT,
  ...PHYSICS_CONTENT,
];

const CONTENT_BY_SLUG = new Map<string, GcseTopicContent>();

for (const content of ALL_CONTENT) {
  CONTENT_BY_SLUG.set(content.slug, content);
  for (const alias of content.aliases ?? []) {
    CONTENT_BY_SLUG.set(alias, content);
  }
}

export function getTopicContent(slug: string): GcseTopicContent | undefined {
  return CONTENT_BY_SLUG.get(slug);
}

export function enrichTopic(topic: GcseTopic, subjectId?: GcseSubjectId): GcseTopic {
  const content = getTopicContent(topic.slug);
  const contentSlug = content?.slug ?? topic.slug;
  const subjectLabel =
    subjectId === "biology" ? "Biology" : subjectId === "chemistry" ? "Chemistry" : subjectId === "physics" ? "Physics" : "Science";
  const extras = getTopicExtras(contentSlug, topic.name, subjectLabel);

  const keyConcepts = content
    ? [...content.keyConcepts, ...(extras.extraConcepts ?? [])]
    : [...topic.keyConcepts, ...(extras.extraConcepts ?? [])];

  const mathsQuestions = getMathsQuestionsForTopic(contentSlug, topic.name);
  const higher = getHigherTierContent(contentSlug, content);

  if (!content) {
    return {
      ...topic,
      keyConcepts,
      funFacts: extras.funFacts,
      hints: extras.hints,
      memoryTips: extras.memoryTips,
      externalLinks: extras.externalLinks,
      mathsQuestions,
      higherConcepts: higher.higherConcepts,
      higherSections: higher.higherSections,
      higherExamTips: higher.higherExamTips,
    };
  }

  return {
    ...topic,
    description: content.overview,
    keyConcepts,
    explanation: buildExplanation(content),
    examTips: content.examTips,
    sections: content.sections,
    equations: content.equations,
    diagrams: content.diagrams,
    overview: content.overview,
    funFacts: extras.funFacts,
    hints: extras.hints,
    memoryTips: extras.memoryTips,
    externalLinks: extras.externalLinks,
    mathsQuestions,
    higherConcepts: higher.higherConcepts,
    higherSections: higher.higherSections,
    higherExamTips: higher.higherExamTips,
  };
}

function buildExplanation(content: GcseTopicContent): string {
  const parts = [`## Overview\n\n${content.overview}`];
  for (const section of content.sections) {
    parts.push(`## ${section.heading}\n\n${section.body}`);
  }
  if (content.equations?.length) {
    parts.push(`## Key Equations\n\n${content.equations.map((e) => `**${e.label}:** ${e.formula}${e.unit ? ` (${e.unit})` : ""}`).join("\n\n")}`);
  }
  parts.push(`## How to Revise\n\n1. Study each key definition until you can recall it from memory.\n2. Study the diagrams and practise labelling them.\n3. Read each section and make summary notes.\n4. Complete the 30 practice questions below.`);
  return parts.join("\n\n");
}

export { ALL_CONTENT };
