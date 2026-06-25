import type { KeyStage } from "@prisma/client";
import type { TopicDef } from "../ks2";
import type { EnrichedCurriculumTopic, CurriculumTopicContent } from "./types";
import { getKs2Content } from "./ks2-content";
import { getKs3Content } from "./ks3-content";
import { getTopicContent } from "../gcse/content";
import { getHigherTierContent } from "../gcse/content/higher-tier-content";
import { getTopicExtras } from "../gcse/content/topic-extras";
import { getKs4GcseSlug } from "./ks4-bridge";

const KS4_GCSE_SUBJECT: Record<string, "biology" | "chemistry" | "physics"> = {
  "gcse-biology": "biology",
  "gcse-chemistry": "chemistry",
  "gcse-physics": "physics",
};

function lookupContent(keyStage: KeyStage, slug: string): CurriculumTopicContent | undefined {
  if (keyStage === "KS2") return getKs2Content(slug);
  if (keyStage === "KS3") return getKs3Content(slug);
  return undefined;
}

function fromGcseContent(
  gcseSlug: string,
  topic: TopicDef,
  subjectLabel: string
): EnrichedCurriculumTopic | null {
  const content = getTopicContent(gcseSlug);
  if (!content) return null;

  const extras = getTopicExtras(content.slug, topic.name, subjectLabel);
  const higher = getHigherTierContent(content.slug, content);

  return {
    name: topic.name,
    slug: topic.slug,
    description: content.overview,
    overview: content.overview,
    keyConcepts: [...content.keyConcepts, ...(extras.extraConcepts ?? [])],
    sections: content.sections,
    examTips: content.examTips,
    higherConcepts: higher.higherConcepts,
    higherSections: higher.higherSections,
    higherExamTips: higher.higherExamTips,
  };
}

function fromCurriculumContent(
  topic: TopicDef,
  content: CurriculumTopicContent
): EnrichedCurriculumTopic {
  return {
    name: topic.name,
    slug: topic.slug,
    description: content.overview,
    overview: content.overview,
    keyConcepts: content.keyConcepts,
    sections: content.sections,
    examTips: content.examTips,
    higherConcepts: content.higherConcepts,
    higherSections: content.higherSections,
    higherExamTips: content.higherExamTips,
  };
}

function fallbackContent(topic: TopicDef, keyStage: KeyStage): EnrichedCurriculumTopic {
  const foundationFromSubtopics = topic.subtopics.map((st) => ({
    term: st.name,
    definition: st.description,
  }));

  return {
    name: topic.name,
    slug: topic.slug,
    description: topic.description,
    overview: topic.description,
    keyConcepts:
      foundationFromSubtopics.length >= 3
        ? foundationFromSubtopics
        : [
            { term: topic.name, definition: topic.description },
            {
              term: "Scientific vocabulary",
              definition: `Use precise scientific terms when explaining ${topic.name.toLowerCase()}.`,
            },
            {
              term: "Working scientifically",
              definition: "Ask questions, plan investigations, record results, and draw evidence-based conclusions.",
            },
          ],
    sections: [
      {
        heading: `Understanding ${topic.name}`,
        body: `${topic.name} is a core topic in ${keyStage}. ${topic.description} Study the key concepts below, then practise applying your knowledge.`,
      },
    ],
    examTips: [
      "Use correct scientific vocabulary in your answers.",
      "Give examples to support your explanations.",
      "Read questions carefully and answer all parts.",
    ],
    higherConcepts: [],
    higherSections: [],
    higherExamTips: [],
  };
}

export function enrichCurriculumTopic(
  keyStage: KeyStage,
  subjectSlug: string,
  topic: TopicDef
): EnrichedCurriculumTopic {
  if (keyStage === "KS4") {
    const gcseSlug = getKs4GcseSlug(topic.slug);
    const subjectId = KS4_GCSE_SUBJECT[subjectSlug];
    const subjectLabel =
      subjectId === "biology" ? "Biology" : subjectId === "chemistry" ? "Chemistry" : subjectId === "physics" ? "Physics" : "Science";

    if (gcseSlug) {
      const fromGcse = fromGcseContent(gcseSlug, topic, subjectLabel);
      if (fromGcse) return fromGcse;
    }
  }

  const content = lookupContent(keyStage, topic.slug);
  if (content) return fromCurriculumContent(topic, content);

  return fallbackContent(topic, keyStage);
}

export function toGcseLearnShape(enriched: EnrichedCurriculumTopic) {
  return {
    number: 0,
    name: enriched.name,
    slug: enriched.slug,
    description: enriched.overview,
    keyConcepts: enriched.keyConcepts,
    explanation: enriched.overview,
    overview: enriched.overview,
    sections: enriched.sections,
    examTips: enriched.examTips,
    higherConcepts: enriched.higherConcepts,
    higherSections: enriched.higherSections,
    higherExamTips: enriched.higherExamTips,
  };
}
