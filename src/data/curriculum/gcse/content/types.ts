import type { GcseKeyConcept } from "../types";

export interface GcseDiagramDef {
  id: string;
  title: string;
  caption: string;
}

export interface GcseTopicContent {
  slug: string;
  overview: string;
  keyConcepts: GcseKeyConcept[];
  sections: { heading: string; body: string }[];
  equations?: { label: string; formula: string; unit?: string }[];
  diagrams: GcseDiagramDef[];
  examTips: string[];
  /** Higher-tier-only concepts (GCSE grades 7–9) */
  higherConcepts?: GcseKeyConcept[];
  /** Deeper explanations for Higher tier students */
  higherSections?: { heading: string; body: string }[];
  higherExamTips?: string[];
  /** Other slugs that share this content */
  aliases?: string[];
}

export interface HigherTierContent {
  higherConcepts: GcseKeyConcept[];
  higherSections: { heading: string; body: string }[];
  higherExamTips: string[];
}

export function createContent(c: GcseTopicContent): GcseTopicContent {
  return c;
}
