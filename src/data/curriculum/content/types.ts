export interface CurriculumKeyConcept {
  term: string;
  definition: string;
}

export interface CurriculumTopicContent {
  slug: string;
  overview: string;
  keyConcepts: CurriculumKeyConcept[];
  sections: { heading: string; body: string }[];
  examTips: string[];
  higherConcepts: CurriculumKeyConcept[];
  higherSections: { heading: string; body: string }[];
  higherExamTips: string[];
  aliases?: string[];
}

export interface EnrichedCurriculumTopic {
  name: string;
  slug: string;
  description: string;
  overview: string;
  keyConcepts: CurriculumKeyConcept[];
  sections: { heading: string; body: string }[];
  examTips: string[];
  higherConcepts: CurriculumKeyConcept[];
  higherSections: { heading: string; body: string }[];
  higherExamTips: string[];
}

export function createCurriculumContent(c: CurriculumTopicContent): CurriculumTopicContent {
  return c;
}
