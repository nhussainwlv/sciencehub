"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ChevronLeft, CheckCircle, XCircle, Clock, Trophy } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { generateQuestionsFromConcepts } from "@/lib/quiz-generator";
import type { GeneratedQuestion } from "@/lib/quiz-generator";
import { findTopic, enrichCurriculumTopic } from "@/data/curriculum";
import type { KeyStage } from "@prisma/client";

export default function QuizPage() {
  const params = useParams();
  const keyStage = (params.keyStage as string).toUpperCase() as KeyStage;
  const subjectSlug = params.subject as string;
  const topicSlug = params.topic as string;
  const topicName = topicSlug?.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()) ?? "Science";

  const [questions, setQuestions] = useState<GeneratedQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState(1200);
  const [answers, setAnswers] = useState<boolean[]>([]);

  useEffect(() => {
    const { topic } = findTopic(keyStage, subjectSlug, topicSlug);
    if (topic) {
      const enriched = enrichCurriculumTopic(keyStage, subjectSlug, topic);
      setQuestions(generateQuestionsFromConcepts(enriched.keyConcepts, enriched.name, 40));
      return;
    }
    setQuestions(generateQuestionsFromConcepts(
      [{ term: topicName, definition: `Core ideas in ${topicName} for ${keyStage} science.` }],
      topicName,
      40
    ));
  }, [keyStage, subjectSlug, topicSlug, topicName]);

  useEffect(() => {
    if (finished || questions.length === 0) return;
    const timer = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          setFinished(true);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [finished, questions.length]);

  const current = questions[currentIndex];
  if (!current) {
    return <div className="flex min-h-[50vh] items-center justify-center">Loading quiz...</div>;
  }

  function checkAnswer(answer: string) {
    const correct =
      String(current.correctAnswer) === answer ||
      (typeof current.correctAnswer === "boolean" && answer === String(current.correctAnswer));

    setSelectedAnswer(answer);
    setShowResult(true);
    setAnswers((prev) => [...prev, correct]);
    if (correct) setScore((s) => s + 1);
  }

  function nextQuestion() {
    if (currentIndex + 1 >= questions.length) {
      setFinished(true);
      return;
    }
    setCurrentIndex((i) => i + 1);
    setSelectedAnswer(null);
    setShowResult(false);
  }

  const formatTime = (s: number) => `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, "0")}`;

  if (finished) {
    const percent = Math.round((score / questions.length) * 100);
    return (
      <div className="mx-auto max-w-2xl px-4 py-12 text-center">
        <Trophy className="mx-auto h-16 w-16 text-amber-500" />
        <h1 className="mt-4 text-3xl font-bold">Quiz Complete!</h1>
        <p className="mt-2 text-slate-600">{topicName}</p>
        <div className="mt-8 grid grid-cols-3 gap-4">
          <Card>
            <p className="text-3xl font-bold text-primary-600">{score}/{questions.length}</p>
            <p className="text-sm text-slate-500">Correct</p>
          </Card>
          <Card>
            <p className="text-3xl font-bold text-green-600">{percent}%</p>
            <p className="text-sm text-slate-500">Score</p>
          </Card>
          <Card>
            <p className="text-3xl font-bold text-amber-600">+{score * 10} XP</p>
            <p className="text-sm text-slate-500">Earned</p>
          </Card>
        </div>
        <div className="mt-8 flex justify-center gap-4">
          <Button onClick={() => window.location.reload()}>Retry Quiz</Button>
          <Link href="/dashboard">
            <Button variant="secondary">Back to Dashboard</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <div className="mb-6 flex items-center justify-between">
        <Link href="/curriculum" className="flex items-center gap-1 text-sm text-slate-500 hover:text-primary-600">
          <ChevronLeft className="h-4 w-4" /> Exit Quiz
        </Link>
        <div className="flex items-center gap-4">
          <Badge variant="outline" className="flex items-center gap-1">
            <Clock className="h-3 w-3" /> {formatTime(timeLeft)}
          </Badge>
          <Badge>{current.difficulty}</Badge>
        </div>
      </div>

      <Progress value={currentIndex + 1} max={questions.length} showLabel className="mb-6" />

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <Badge variant="outline">{current.type.replace(/_/g, " ")}</Badge>
            <span className="text-sm text-slate-500">Question {currentIndex + 1} of {questions.length}</span>
          </div>
          <CardTitle className="mt-4 text-lg leading-relaxed">{current.questionText}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {current.type === "MULTIPLE_CHOICE" && current.options?.map((option) => (
            <button
              key={option}
              onClick={() => !showResult && checkAnswer(option)}
              disabled={showResult}
              className={`w-full rounded-xl border p-4 text-left text-sm transition-colors ${
                showResult
                  ? option === String(current.correctAnswer)
                    ? "border-green-500 bg-green-50 dark:bg-green-950"
                    : selectedAnswer === option
                    ? "border-red-500 bg-red-50 dark:bg-red-950"
                    : "border-slate-200 dark:border-slate-700"
                  : "border-slate-200 hover:border-primary-300 hover:bg-primary-50 dark:border-slate-700 dark:hover:bg-primary-950"
              }`}
            >
              <div className="flex items-center justify-between">
                {option}
                {showResult && option === String(current.correctAnswer) && (
                  <CheckCircle className="h-5 w-5 text-green-500" />
                )}
                {showResult && selectedAnswer === option && option !== String(current.correctAnswer) && (
                  <XCircle className="h-5 w-5 text-red-500" />
                )}
              </div>
            </button>
          ))}

          {current.type === "TRUE_FALSE" && ["true", "false"].map((val) => (
            <button
              key={val}
              onClick={() => !showResult && checkAnswer(val)}
              disabled={showResult}
              className={`w-full rounded-xl border p-4 text-sm font-medium capitalize ${
                showResult && val === String(current.correctAnswer)
                  ? "border-green-500 bg-green-50"
                  : "border-slate-200 hover:bg-primary-50 dark:border-slate-700"
              }`}
            >
              {val}
            </button>
          ))}

          {showResult && current.explanation && (
            <div className="mt-4 rounded-xl bg-blue-50 p-4 text-sm dark:bg-blue-950">
              <p className="font-medium text-blue-700 dark:text-blue-300">Explanation</p>
              <p className="mt-1 text-blue-600 dark:text-blue-400">{current.explanation}</p>
            </div>
          )}

          {showResult && (
            <Button onClick={nextQuestion} className="mt-4 w-full">
              {currentIndex + 1 >= questions.length ? "Finish Quiz" : "Next Question"}
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
