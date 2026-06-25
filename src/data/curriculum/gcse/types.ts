export type GcseExamBoardId = "aqa" | "edexcel" | "edexcel-igcse" | "ocr-a" | "ocr-b";

export interface GcseKeyConcept {
  term: string;
  definition: string;
}

export interface GcseDiagramDef {
  id: string;
  title: string;
  caption: string;
}

export interface GcseExternalLink {
  title: string;
  url: string;
  source: string;
}

export interface GcseTopicMathsQuestion {
  questionText: string;
  formula: string;
  options: string[];
  correctAnswer: string;
  solution: string;
  difficulty: "EASY" | "MEDIUM" | "HARD";
}

export interface GcseTopic {
  number: number;
  name: string;
  slug: string;
  description: string;
  keyConcepts: GcseKeyConcept[];
  explanation: string;
  examTips?: string[];
  overview?: string;
  sections?: { heading: string; body: string }[];
  equations?: { label: string; formula: string; unit?: string }[];
  diagrams?: GcseDiagramDef[];
  funFacts?: string[];
  hints?: string[];
  memoryTips?: string[];
  externalLinks?: GcseExternalLink[];
  mathsQuestions?: GcseTopicMathsQuestion[];
  higherConcepts?: GcseKeyConcept[];
  higherSections?: { heading: string; body: string }[];
  higherExamTips?: string[];
}

export interface GcseBoardSpec {
  id: GcseExamBoardId;
  label: string;
  shortLabel: string;
  topics: GcseTopic[];
}

export type GcseSubjectId = "biology" | "chemistry" | "physics";

export const GCSE_EXAM_BOARDS: { id: GcseExamBoardId; label: string }[] = [
  { id: "aqa", label: "AQA" },
  { id: "edexcel", label: "Edexcel" },
  { id: "edexcel-igcse", label: "Edexcel IGCSE" },
  { id: "ocr-a", label: "OCR A" },
  { id: "ocr-b", label: "OCR B" },
];

function slugify(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function buildTopic(
  number: number,
  name: string,
  subject: string,
  extraConcepts?: GcseKeyConcept[]
): GcseTopic {
  const baseConcepts: GcseKeyConcept[] = [
    {
      term: name,
      definition: `The study of ${name.toLowerCase()} forms a core part of GCSE ${subject}. It covers the fundamental principles, processes, and applications that students must understand for their examinations.`,
    },
    {
      term: "Scientific vocabulary",
      definition: `Key terms in ${name} must be used precisely in exam answers. Command words such as describe, explain, compare, and evaluate each require a specific type of response.`,
    },
    {
      term: "Practical skills",
      definition: `Required practicals related to ${name} test your ability to plan investigations, record data accurately, analyse results, and evaluate methods.`,
    },
  ];

  return {
    number,
    name,
    slug: slugify(name),
    description: `GCSE ${subject} — Topic ${number}: ${name}`,
    keyConcepts: extraConcepts ? [...baseConcepts, ...extraConcepts] : baseConcepts,
    explanation: `## Understanding ${name}\n\n${name} is Topic ${number} in your GCSE ${subject} specification. This topic builds on knowledge from earlier key stages and prepares you for exam-style questions at both Foundation and Higher tier.\n\n### What you need to know\n\nStart by learning the **key definitions** below. Examiners award marks for correct use of scientific terminology. Once you understand the core concepts, practise applying them to unfamiliar contexts — this is how GCSE questions test your knowledge.\n\n### How to revise this topic\n\n1. Read through each key concept and test yourself on the definitions.\n2. Draw labelled diagrams from memory where applicable.\n3. Work through the practice questions below — aim for at least 80% before moving on.\n4. Review any incorrect answers and re-read the relevant concept.`,
    examTips: [
      "Use the correct scientific terms — vague answers lose marks.",
      "For 6-mark questions, structure your answer with clear paragraphs.",
      "Show all working in calculation questions.",
      "Read the question carefully — note the command word and number of marks.",
    ],
  };
}

export { buildTopic, slugify };
