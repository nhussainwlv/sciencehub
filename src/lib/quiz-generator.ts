import type { Difficulty, ExamBoard, GcseTier, QuestionType } from "@prisma/client";
import type { GcseKeyConcept } from "@/data/curriculum/gcse/types";
import type { TopicMathsQuestion } from "@/data/curriculum/gcse/content/maths-questions";

export interface GeneratedQuestion {
  type: QuestionType;
  difficulty: Difficulty;
  questionText: string;
  options?: string[];
  correctAnswer: string | string[] | boolean | number | Record<string, string>;
  explanation: string;
  solution?: string;
  formula?: string;
  marks: number;
  examBoard?: ExamBoard;
  gcseTier?: GcseTier;
  tags: string[];
  isMaths?: boolean;
}

function shuffle<T>(items: T[]): T[] {
  const array = [...items];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function usableConcepts(concepts: GcseKeyConcept[], topicName: string): GcseKeyConcept[] {
  const filtered = concepts.filter(
    (c) =>
      c.term !== topicName &&
      !["Scientific vocabulary", "Practical skills"].includes(c.term) &&
      c.definition.length > 15
  );
  return filtered.length >= 4 ? filtered : concepts;
}

function distractorsFromPool(concept: GcseKeyConcept, pool: GcseKeyConcept[], field: "term" | "definition", count: number): string[] {
  return shuffle(pool.filter((c) => c.term !== concept.term))
    .slice(0, count)
    .map((c) => c[field]);
}

const DIFFICULTIES: Difficulty[] = ["EASY", "EASY", "MEDIUM", "MEDIUM", "HARD"];

function generateConceptQuestions(
  concepts: GcseKeyConcept[],
  topicName: string,
  count: number,
  options?: { examBoard?: ExamBoard; gcseTier?: GcseTier }
): GeneratedQuestion[] {
  const pool = usableConcepts(concepts, topicName);
  const questions: GeneratedQuestion[] = [];

  for (let i = 0; i < count; i++) {
    const concept = pool[i % pool.length];
    const difficulty = DIFFICULTIES[i % DIFFICULTIES.length];
    const variant = i % 3;

    if (variant === 0) {
      questions.push({
        type: "MULTIPLE_CHOICE",
        difficulty,
        questionText: `What is the correct definition of "${concept.term}"?`,
        options: shuffle([concept.definition, ...distractorsFromPool(concept, pool, "definition", 3)]),
        correctAnswer: concept.definition,
        explanation: `${concept.term}: ${concept.definition}`,
        marks: 1,
        examBoard: options?.examBoard,
        gcseTier: options?.gcseTier,
        tags: [topicName, concept.term],
      });
    } else if (variant === 1) {
      questions.push({
        type: "MULTIPLE_CHOICE",
        difficulty,
        questionText: `Which term matches this definition?\n"${concept.definition}"`,
        options: shuffle([concept.term, ...distractorsFromPool(concept, pool, "term", 3)]),
        correctAnswer: concept.term,
        explanation: `This is the definition of ${concept.term}.`,
        marks: 1,
        examBoard: options?.examBoard,
        gcseTier: options?.gcseTier,
        tags: [topicName, concept.term],
      });
    } else {
      const isTrue = i % 2 === 0;
      questions.push({
        type: "TRUE_FALSE",
        difficulty,
        questionText: isTrue
          ? `True or False: ${concept.definition}`
          : `True or False: ${concept.term} is not related to ${topicName}.`,
        correctAnswer: isTrue,
        explanation: isTrue
          ? `True. ${concept.definition}`
          : `False. ${concept.term} is an important part of ${topicName}: ${concept.definition}`,
        marks: 1,
        examBoard: options?.examBoard,
        gcseTier: options?.gcseTier,
        tags: [topicName, concept.term],
      });
    }
  }

  return questions;
}

function mathsToGenerated(q: TopicMathsQuestion, topicName: string): GeneratedQuestion {
  return {
    type: "CALCULATION",
    difficulty: q.difficulty,
    questionText: `📐 ${q.questionText}`,
    options: shuffle(q.options),
    correctAnswer: q.correctAnswer,
    explanation: `Answer: ${q.correctAnswer}`,
    solution: q.solution,
    formula: q.formula,
    marks: q.difficulty === "HARD" ? 3 : 2,
    tags: [topicName, "calculation", "maths"],
    isMaths: true,
  };
}

function interleaveQuestions(conceptQs: GeneratedQuestion[], mathsQs: GeneratedQuestion[]): GeneratedQuestion[] {
  if (mathsQs.length === 0) return conceptQs;

  const merged: GeneratedQuestion[] = [];
  const interval = Math.max(3, Math.floor(conceptQs.length / mathsQs.length));
  let mi = 0;

  for (let i = 0; i < conceptQs.length; i++) {
    merged.push(conceptQs[i]);
    if ((i + 1) % interval === 0 && mi < mathsQs.length) {
      merged.push(mathsQs[mi++]);
    }
  }
  while (mi < mathsQs.length) merged.push(mathsQs[mi++]);

  return merged;
}

export function generateQuestionsFromConcepts(
  concepts: GcseKeyConcept[],
  topicName: string,
  count = 30,
  options?: {
    examBoard?: ExamBoard;
    gcseTier?: GcseTier;
    mathsQuestions?: TopicMathsQuestion[];
  }
): GeneratedQuestion[] {
  const mathsCount = options?.mathsQuestions?.length ?? 6;
  const conceptCount = count - mathsCount;

  const conceptQs = generateConceptQuestions(concepts, topicName, conceptCount, options);
  const mathsQs = (options?.mathsQuestions ?? []).map((q) => mathsToGenerated(q, topicName));

  if (mathsQs.length === 0) {
    return conceptQs;
  }

  return interleaveQuestions(conceptQs, mathsQs);
}

export function generateQuestionsForTopic(
  topicName: string,
  subtopicName: string,
  count = 30,
  options?: { examBoard?: ExamBoard; gcseTier?: GcseTier }
): GeneratedQuestion[] {
  const placeholder: GcseKeyConcept[] = [
    {
      term: subtopicName || topicName,
      definition: `A key idea in ${topicName} that students must understand for GCSE exams.`,
    },
  ];
  return generateQuestionsFromConcepts(placeholder, topicName, count, options);
}

export function getQuestionBankStats() {
  return {
    totalTopics: 90,
    questionsPerTopic: 36,
    totalQuestions: 3240,
    byDifficulty: { EASY: 12, MEDIUM: 12, HARD: 6 },
    byType: { MULTIPLE_CHOICE: 18, TRUE_FALSE: 6, CALCULATION: 6 },
  };
}
