"use client";

import { useState, useMemo } from "react";
import { CheckCircle, XCircle, ChevronRight, RotateCcw, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { generateQuestionsFromConcepts } from "@/lib/quiz-generator";
import type { TopicMathsQuestion } from "@/data/curriculum/gcse/content/maths-questions";
import type { GcseKeyConcept } from "@/data/curriculum/gcse/types";
import { cn } from "@/lib/utils";

interface TopicQuizProps {
  topicName: string;
  keyConcepts: GcseKeyConcept[];
  mathsQuestions?: TopicMathsQuestion[];
  questionCount?: number;
}

export function TopicQuiz({ topicName, keyConcepts, mathsQuestions, questionCount = 30 }: TopicQuizProps) {
  const [seed, setSeed] = useState(0);

  const questions = useMemo(
    () => generateQuestionsFromConcepts(keyConcepts, topicName, questionCount, { mathsQuestions }),
    [keyConcepts, topicName, questionCount, mathsQuestions, seed]
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const current = questions[currentIndex];
  const correctAnswer = String(current?.correctAnswer ?? "");

  function handleSelect(option: string) {
    if (answered) return;
    setSelected(option);
    setAnswered(true);
    const isCorrect =
      current?.type === "TRUE_FALSE"
        ? (option === "true") === current.correctAnswer
        : option === correctAnswer;
    if (isCorrect) setScore((s) => s + 1);
  }

  function handleNext() {
    if (currentIndex + 1 >= questions.length) {
      setFinished(true);
      return;
    }
    setCurrentIndex((i) => i + 1);
    setSelected(null);
    setAnswered(false);
  }

  function handleRestart() {
    setCurrentIndex(0);
    setSelected(null);
    setAnswered(false);
    setScore(0);
    setFinished(false);
    setSeed((s) => s + 1);
  }

  if (finished) {
    const percent = Math.round((score / questions.length) * 100);
    return (
      <div className="glass-card p-8 text-center">
        <Trophy className="mx-auto h-14 w-14 text-amber-500" />
        <h3 className="mt-4 text-2xl font-bold">Quiz Complete!</h3>
        <p className="mt-2 text-[var(--muted)]">{topicName}</p>
        <div className="mx-auto mt-6 grid max-w-sm grid-cols-3 gap-4">
          <div className="rounded-xl bg-[var(--surface)] p-4">
            <p className="text-2xl font-bold">{score}/{questions.length}</p>
            <p className="text-xs text-[var(--muted)]">Correct</p>
          </div>
          <div className="rounded-xl bg-[var(--surface)] p-4">
            <p className={cn("text-2xl font-bold", percent >= 70 ? "text-green-600" : percent >= 50 ? "text-amber-600" : "text-red-600")}>
              {percent}%
            </p>
            <p className="text-xs text-[var(--muted)]">Score</p>
          </div>
          <div className="rounded-xl bg-[var(--surface)] p-4">
            <p className="text-2xl font-bold text-amber-600">+{score * 10}</p>
            <p className="text-xs text-[var(--muted)]">XP</p>
          </div>
        </div>
        <Button onClick={handleRestart} className="mt-6 gap-2">
          <RotateCcw className="h-4 w-4" /> Try Again
        </Button>
      </div>
    );
  }

  if (!current) return null;

  const options =
    current.type === "TRUE_FALSE"
      ? ["true", "false"]
      : current.options ?? [];

  return (
    <div className="glass-card overflow-hidden">
      <div className="border-b border-[var(--border)] px-6 py-4">
        <div className="mb-3 flex items-center justify-between">
          <div className="flex gap-2">
            <Badge variant="outline">{current.difficulty}</Badge>
            <Badge variant="outline">
              {current.isMaths ? "CALCULATION" : current.type.replace(/_/g, " ")}
            </Badge>
          </div>
          <span className="text-sm text-[var(--muted)]">
            Question {currentIndex + 1} of {questions.length}
          </span>
        </div>
        <Progress value={currentIndex + 1} max={questions.length} className="mb-4" />
        <p className="whitespace-pre-line text-base font-medium leading-relaxed">
          {current.questionText}
        </p>
        {current.formula && (
          <p className="mt-2 text-sm text-[var(--muted)]">
            Formula: <code className="rounded bg-[var(--surface)] px-2 py-0.5 font-semibold">{current.formula}</code>
          </p>
        )}
      </div>

      <div className="space-y-3 p-6">
        {options.map((option) => {
          const isSelected = selected === option;
          const isCorrect =
            current.type === "TRUE_FALSE"
              ? (option === "true") === current.correctAnswer
              : option === correctAnswer;
          const showCorrect = answered && isCorrect;
          const showWrong = answered && isSelected && !isCorrect;

          return (
            <button
              key={option}
              onClick={() => handleSelect(option)}
              disabled={answered}
              className={cn(
                "flex w-full items-center justify-between rounded-xl border-2 px-4 py-3.5 text-left text-sm font-medium transition-all",
                !answered && "border-[var(--border)] hover:border-[var(--foreground)] hover:bg-[var(--surface)]",
                showCorrect && "border-green-500 bg-green-50 text-green-800 dark:bg-green-950 dark:text-green-200",
                showWrong && "border-red-500 bg-red-50 text-red-800 dark:bg-red-950 dark:text-red-200",
                answered && !showCorrect && !showWrong && "border-[var(--border)] opacity-60"
              )}
            >
              <span className="capitalize">{option}</span>
              {showCorrect && <CheckCircle className="h-5 w-5 shrink-0 text-green-600" />}
              {showWrong && <XCircle className="h-5 w-5 shrink-0 text-red-600" />}
            </button>
          );
        })}

        {answered && (
          <div className="mt-4 space-y-3">
            {((current.type === "TRUE_FALSE" && (selected === "true") !== current.correctAnswer) ||
              (current.type !== "TRUE_FALSE" && selected !== correctAnswer)) && (
              <div className="rounded-xl border border-green-500/30 bg-green-500/10 p-4">
                <p className="text-sm font-semibold text-green-700 dark:text-green-300">
                  Correct answer:{" "}
                  <span className="capitalize">
                    {current.type === "TRUE_FALSE" ? String(current.correctAnswer) : correctAnswer}
                  </span>
                </p>
              </div>
            )}
            {current.solution && (
              <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-4">
                <p className="text-sm font-semibold text-amber-800 dark:text-amber-200">Worked Solution</p>
                <pre className="mt-2 whitespace-pre-wrap font-mono text-xs leading-relaxed text-amber-900 dark:text-amber-100">
                  {current.solution}
                </pre>
              </div>
            )}
            {current.explanation && !current.isMaths && (
              <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4">
                <p className="text-sm font-semibold">Explanation</p>
                <p className="mt-1 text-sm text-[var(--muted)]">{current.explanation}</p>
              </div>
            )}
            <Button onClick={handleNext} className="w-full gap-2">
              {currentIndex + 1 >= questions.length ? "See Results" : "Next Question"}
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
