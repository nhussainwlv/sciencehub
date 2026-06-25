import {
  BookOpen, Lightbulb, GraduationCap, Image, FlaskConical,
  Sparkles, Brain, ExternalLink, Link2, Calculator, Award,
} from "lucide-react";
import type { GcseTopic } from "@/data/curriculum/gcse";
import { TopicDiagram } from "@/components/diagrams/topic-diagrams";

interface TopicLearnProps {
  topic: GcseTopic;
  subjectLabel: string;
}

export function TopicLearn({ topic, subjectLabel }: TopicLearnProps) {
  return (
    <div className="space-y-8">
      {topic.overview && (
        <section className="glass-card border-t-4 border-[var(--foreground)] p-6">
          <p className="text-sm leading-relaxed text-[var(--muted)]">{topic.overview}</p>
        </section>
      )}

      {/* Fun facts */}
      {topic.funFacts && topic.funFacts.length > 0 && (
        <section className="glass-card p-6">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-bold">
            <Sparkles className="h-5 w-5" />
            Fun Facts
          </h2>
          <ul className="space-y-3">
            {topic.funFacts.map((fact, i) => (
              <li key={i} className="flex items-start gap-3 rounded-xl bg-[var(--surface)] px-4 py-3 text-sm text-[var(--muted)]">
                <span className="text-base">💡</span>
                {fact}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Hints & memory tips */}
      {((topic.hints && topic.hints.length > 0) || (topic.memoryTips && topic.memoryTips.length > 0)) && (
        <section className="grid gap-4 sm:grid-cols-2">
          {topic.hints && topic.hints.length > 0 && (
            <div className="glass-card p-6">
              <h2 className="mb-3 flex items-center gap-2 text-base font-bold">
                <Lightbulb className="h-5 w-5" />
                Hints
              </h2>
              <ul className="space-y-2">
                {topic.hints.map((hint, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[var(--muted)]">
                    <span className="font-bold text-[var(--foreground)]">→</span>
                    {hint}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {topic.memoryTips && topic.memoryTips.length > 0 && (
            <div className="glass-card p-6">
              <h2 className="mb-3 flex items-center gap-2 text-base font-bold">
                <Brain className="h-5 w-5" />
                Easier Ways to Remember
              </h2>
              <ul className="space-y-2">
                {topic.memoryTips.map((tip, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[var(--muted)]">
                    <span className="font-bold text-[var(--foreground)]">★</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>
      )}

      {/* External links */}
      {topic.externalLinks && topic.externalLinks.length > 0 && (
        <section className="glass-card p-6">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-bold">
            <Link2 className="h-5 w-5" />
            Learn More Online
          </h2>
          <p className="mb-4 text-sm text-[var(--muted)]">
            Trusted resources to deepen your understanding of {topic.name}.
          </p>
          <div className="space-y-2">
            {topic.externalLinks.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-3 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm transition-colors hover:border-[var(--foreground)]"
              >
                <div>
                  <p className="font-medium text-[var(--foreground)]">{link.title}</p>
                  <p className="text-xs text-[var(--muted)]">{link.source}</p>
                </div>
                <ExternalLink className="h-4 w-4 shrink-0 text-[var(--muted)]" />
              </a>
            ))}
          </div>
        </section>
      )}

      {/* Maths practice with solutions */}
      {topic.mathsQuestions && topic.mathsQuestions.length > 0 && (
        <section className="glass-card p-6">
          <h2 className="mb-2 flex items-center gap-2 text-lg font-bold">
            <Calculator className="h-5 w-5" />
            Maths &amp; Calculations
          </h2>
          <p className="mb-4 text-sm text-[var(--muted)]">
            GCSE science exams often include calculation questions. Study these worked examples before the quiz.
          </p>
          <div className="space-y-4">
            {topic.mathsQuestions.map((q, i) => (
              <div key={i} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4">
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-[var(--background)] px-2 py-0.5 text-xs font-medium">
                    Q{i + 1}
                  </span>
                  <span className="text-xs text-[var(--muted)]">{q.difficulty}</span>
                </div>
                <p className="text-sm font-medium">{q.questionText}</p>
                <p className="mt-2 text-xs text-[var(--muted)]">
                  Formula: <code className="font-semibold text-[var(--foreground)]">{q.formula}</code>
                </p>
                <div className="mt-3 rounded-lg border border-amber-500/20 bg-amber-500/5 p-3">
                  <p className="text-xs font-semibold text-amber-800 dark:text-amber-200">Worked solution</p>
                  <pre className="mt-1 whitespace-pre-wrap font-mono text-xs leading-relaxed text-[var(--muted)]">
                    {q.solution}
                  </pre>
                  <p className="mt-2 text-sm font-semibold text-[var(--foreground)]">
                    Answer: {q.correctAnswer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Key Concepts */}
      <section className="glass-card overflow-hidden">
        <div className="border-b border-[var(--border)] px-6 py-4">
          <h2 className="flex items-center gap-2 text-lg font-bold">
            <BookOpen className="h-5 w-5" />
            Key Concepts &amp; Definitions
            <span className="ml-auto text-sm font-normal text-[var(--muted)]">
              {topic.keyConcepts.length} terms
            </span>
          </h2>
          <p className="mt-1 text-sm text-[var(--muted)]">
            Core GCSE content for Foundation and Higher tier (AQA, Edexcel, OCR).
          </p>
        </div>
        <div className="divide-y divide-[var(--border)]">
          {topic.keyConcepts.map((concept, i) => (
            <div key={i} className="px-6 py-4 transition-colors hover:bg-[var(--surface)]">
              <dt className="font-semibold text-[var(--foreground)]">{concept.term}</dt>
              <dd className="mt-1.5 text-sm leading-relaxed text-[var(--muted)]">
                {concept.definition}
              </dd>
            </div>
          ))}
        </div>
      </section>

      {/* Higher Tier — grades 7–9 */}
      {topic.higherConcepts && topic.higherConcepts.length > 0 && (
        <section className="glass-card overflow-hidden border-t-4 border-violet-500/60">
          <div className="border-b border-[var(--border)] bg-violet-500/5 px-6 py-4">
            <h2 className="flex flex-wrap items-center gap-2 text-lg font-bold">
              <Award className="h-5 w-5 text-violet-400" />
              Higher Tier — Grades 7–9
              <span className="rounded-full bg-violet-500/15 px-2.5 py-0.5 text-xs font-semibold text-violet-300">
                Higher GCSE only
              </span>
              <span className="ml-auto text-sm font-normal text-[var(--muted)]">
                {topic.higherConcepts.length} advanced terms
              </span>
            </h2>
            <p className="mt-1 text-sm text-[var(--muted)]">
              Detailed concepts for Higher tier students — deeper explanations, calculations, and exam-level detail.
            </p>
          </div>
          <div className="divide-y divide-[var(--border)]">
            {topic.higherConcepts.map((concept, i) => (
              <div key={i} className="px-6 py-4 transition-colors hover:bg-violet-500/5">
                <dt className="font-semibold text-[var(--foreground)]">{concept.term}</dt>
                <dd className="mt-1.5 text-sm leading-relaxed text-[var(--muted)]">
                  {concept.definition}
                </dd>
              </div>
            ))}
          </div>
        </section>
      )}

      {topic.higherSections && topic.higherSections.length > 0 && (
        <section className="space-y-4">
          <h2 className="flex items-center gap-2 text-lg font-bold">
            <Award className="h-5 w-5 text-violet-400" />
            Higher Tier — In Depth
          </h2>
          {topic.higherSections.map((section, i) => (
            <div key={i} className="glass-card border-l-4 border-violet-500/50 p-6">
              <h3 className="mb-2 font-semibold text-violet-200">{section.heading}</h3>
              <p className="text-sm leading-relaxed text-[var(--muted)]">{section.body}</p>
            </div>
          ))}
        </section>
      )}

      {topic.diagrams && topic.diagrams.length > 0 && (
        <section className="space-y-6">
          <h2 className="flex items-center gap-2 text-lg font-bold">
            <Image className="h-5 w-5" />
            Diagrams
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {topic.diagrams.map((diagram) => (
              <div key={diagram.id} className="glass-card overflow-hidden p-4">
                <h3 className="mb-3 text-sm font-semibold">{diagram.title}</h3>
                <div className="rounded-xl bg-[var(--surface)] p-4 text-[var(--foreground)]">
                  <TopicDiagram id={diagram.id} />
                </div>
                <p className="mt-3 text-xs text-[var(--muted)]">{diagram.caption}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {topic.equations && topic.equations.length > 0 && (
        <section className="glass-card p-6">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-bold">
            <FlaskConical className="h-5 w-5" />
            Key Equations
          </h2>
          <div className="space-y-3">
            {topic.equations.map((eq, i) => (
              <div key={i} className="flex flex-wrap items-baseline gap-3 rounded-xl bg-[var(--surface)] px-4 py-3">
                <span className="text-sm font-medium text-[var(--muted)]">{eq.label}</span>
                <code className="text-base font-semibold text-[var(--foreground)]">{eq.formula}</code>
                {eq.unit && <span className="text-xs text-[var(--muted)]">({eq.unit})</span>}
              </div>
            ))}
          </div>
        </section>
      )}

      {topic.sections && topic.sections.length > 0 && (
        <section className="space-y-4">
          <h2 className="flex items-center gap-2 text-lg font-bold">
            <Lightbulb className="h-5 w-5" />
            Detailed Explanation
          </h2>
          {topic.sections.map((section, i) => (
            <div key={i} className="glass-card p-6">
              <h3 className="mb-2 font-semibold">{section.heading}</h3>
              <p className="text-sm leading-relaxed text-[var(--muted)]">{section.body}</p>
            </div>
          ))}
        </section>
      )}

      {(!topic.sections || topic.sections.length === 0) && (
        <section className="glass-card p-6">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-bold">
            <Lightbulb className="h-5 w-5" />
            Explanation
          </h2>
          <div className="prose prose-sm max-w-none text-[var(--muted)]">
            {topic.explanation.split("\n").map((line, i) => {
              if (line.startsWith("## ")) {
                return <h3 key={i} className="mt-4 text-base font-semibold text-[var(--foreground)]">{line.replace("## ", "")}</h3>;
              }
              if (line.startsWith("### ")) {
                return <h4 key={i} className="mt-3 text-sm font-semibold">{line.replace("### ", "")}</h4>;
              }
              if (line.match(/^\d+\./)) {
                return <p key={i} className="ml-4 text-sm">{line}</p>;
              }
              if (line.trim() === "") return <br key={i} />;
              return <p key={i} className="text-sm">{line}</p>;
            })}
          </div>
        </section>
      )}

      {topic.examTips && topic.examTips.length > 0 && (
        <section className="glass-card border border-[var(--border-strong)] p-6">
          <h2 className="mb-3 flex items-center gap-2 text-lg font-bold">
            <GraduationCap className="h-5 w-5" />
            Exam Tips — {subjectLabel}
          </h2>
          <ul className="space-y-2">
            {topic.examTips.map((tip, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-[var(--muted)]">
                <span className="mt-0.5 font-bold text-[var(--foreground)]">•</span>
                {tip}
              </li>
            ))}
          </ul>
        </section>
      )}

      {topic.higherExamTips && topic.higherExamTips.length > 0 && (
        <section className="glass-card border border-violet-500/30 bg-violet-500/5 p-6">
          <h2 className="mb-3 flex items-center gap-2 text-lg font-bold">
            <Award className="h-5 w-5 text-violet-400" />
            Higher Tier Exam Tips — {subjectLabel}
          </h2>
          <ul className="space-y-2">
            {topic.higherExamTips.map((tip, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-[var(--muted)]">
                <span className="mt-0.5 font-bold text-violet-400">★</span>
                {tip}
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
