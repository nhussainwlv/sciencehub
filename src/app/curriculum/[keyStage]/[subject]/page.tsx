import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronLeft, Play, FileQuestion, BookOpen, Award, Layers } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ALL_CURRICULUM } from "@/data/curriculum";
import { enrichCurriculumTopic } from "@/data/curriculum/content";
import type { KeyStage } from "@prisma/client";

interface PageProps {
  params: Promise<{ keyStage: string; subject: string }>;
}

const TIER_LABEL: Record<KeyStage, { foundation: string; higher: string }> = {
  KS2: { foundation: "Core concepts", higher: "Extension" },
  KS3: { foundation: "Foundation", higher: "Higher" },
  KS4: { foundation: "Foundation tier", higher: "Higher tier" },
};

export default async function SubjectPage({ params }: PageProps) {
  const { keyStage, subject: subjectSlug } = await params;
  const ks = keyStage.toUpperCase() as KeyStage;

  if (!ALL_CURRICULUM[ks]) notFound();

  const subject = ALL_CURRICULUM[ks].find((s) => s.slug === subjectSlug);
  if (!subject) notFound();

  const tiers = TIER_LABEL[ks];
  const lessonBase = `/curriculum/${ks}/${subject.slug}`;

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      <Link
        href="/curriculum"
        className="mb-6 inline-flex items-center gap-1 text-sm text-[var(--muted)] hover:text-[var(--foreground)]"
      >
        <ChevronLeft className="h-4 w-4" /> Back to Curriculum
      </Link>

      <div className="mb-8 flex items-start gap-4">
        <span className="text-5xl">{subject.icon}</span>
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h1 className="text-2xl font-bold sm:text-3xl">{subject.name}</h1>
            <Badge variant="outline">{ks}</Badge>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{subject.description}</p>
          <p className="mt-2 text-xs text-[var(--muted)]">
            {subject.topics.length} topics · {tiers.foundation} + {tiers.higher} content on every lesson
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {subject.topics.map((topic, index) => {
          const enriched = enrichCurriculumTopic(ks, subjectSlug, topic);
          const lessonHref = `${lessonBase}/${topic.slug}/lesson`;

          return (
            <article key={topic.slug} className="glass-card overflow-hidden">
              <div className="border-b border-[var(--border)] px-6 py-5">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface)] text-sm font-bold">
                      {index + 1}
                    </span>
                    <div>
                      <h2 className="text-lg font-bold">{topic.name}</h2>
                      <p className="mt-1 text-sm text-[var(--muted)]">{topic.description}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1 rounded-full border border-[var(--border)] px-2.5 py-0.5 text-xs text-[var(--muted)]">
                      <Layers className="h-3 w-3" />
                      {enriched.keyConcepts.length} {tiers.foundation.toLowerCase()}
                    </span>
                    {enriched.higherConcepts.length > 0 && (
                      <span className="inline-flex items-center gap-1 rounded-full border border-violet-500/30 bg-violet-500/10 px-2.5 py-0.5 text-xs text-violet-300">
                        <Award className="h-3 w-3" />
                        {enriched.higherConcepts.length} {tiers.higher.toLowerCase()}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="px-6 py-5">
                {topic.subtopics.length > 0 && (
                  <div className="mb-4">
                    <p className="mb-2 text-xs font-medium uppercase tracking-wide text-[var(--muted)]">
                      {topic.subtopics.length} subtopics covered in lesson
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {topic.subtopics.map((st) => (
                        <span
                          key={st.slug}
                          className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-2.5 py-0.5 text-xs text-[var(--muted)]"
                          title={st.description}
                        >
                          {st.name}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex flex-wrap gap-2">
                  <Link href={lessonHref}>
                    <Button size="sm">
                      <Play className="h-4 w-4" /> Start Lesson
                    </Button>
                  </Link>
                  <Link href={`${lessonBase}/${topic.slug}/quiz`}>
                    <Button size="sm" variant="secondary">
                      <FileQuestion className="h-4 w-4" /> Take Quiz
                    </Button>
                  </Link>
                  <Link href={lessonHref}>
                    <Button size="sm" variant="outline">
                      <BookOpen className="h-4 w-4" /> Revision Notes
                    </Button>
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
