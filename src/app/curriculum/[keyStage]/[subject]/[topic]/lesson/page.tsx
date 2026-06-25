import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronLeft, FileQuestion, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TopicLearn } from "@/components/gcse/topic-learn";
import { findTopic } from "@/data/curriculum";
import { enrichCurriculumTopic, toGcseLearnShape } from "@/data/curriculum/content";
import type { KeyStage } from "@prisma/client";

interface PageProps {
  params: Promise<{ keyStage: string; subject: string; topic: string }>;
}

const TIER_LABEL: Record<KeyStage, { foundation: string; higher: string }> = {
  KS2: { foundation: "Core (Years 3–4)", higher: "Extension (Years 5–6)" },
  KS3: { foundation: "Foundation", higher: "Higher / GCSE Bridge" },
  KS4: { foundation: "Foundation Tier", higher: "Higher Tier (Grades 7–9)" },
};

export default async function LessonPage({ params }: PageProps) {
  const { keyStage, subject: subjectSlug, topic: topicSlug } = await params;
  const ks = keyStage.toUpperCase() as KeyStage;
  const { subject, topic } = findTopic(ks, subjectSlug, topicSlug);

  if (!subject || !topic) notFound();

  const enriched = enrichCurriculumTopic(ks, subjectSlug, topic);
  const learnTopic = toGcseLearnShape(enriched);
  const tiers = TIER_LABEL[ks];

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      <Link
        href={`/curriculum/${ks}/${subjectSlug}`}
        className="mb-6 inline-flex items-center gap-1 text-sm text-[var(--muted)] hover:text-[var(--foreground)]"
      >
        <ChevronLeft className="h-4 w-4" /> Back to {subject.name}
      </Link>

      <div className="mb-8">
        <div className="flex flex-wrap items-center gap-2">
          <Badge>{ks}</Badge>
          <Badge variant="outline">{subject.name}</Badge>
        </div>
        <h1 className="mt-3 text-2xl font-bold sm:text-3xl">{topic.name}</h1>
        <p className="mt-2 text-[var(--muted)]">{enriched.overview}</p>
        <p className="mt-3 text-xs text-[var(--muted)]">
          {tiers.foundation} + {tiers.higher} content aligned to UK National Curriculum
        </p>
      </div>

      <div className="mb-8 flex flex-wrap gap-3">
        <Link href={`/curriculum/${ks}/${subjectSlug}/${topicSlug}/quiz`}>
          <Button>
            <FileQuestion className="h-4 w-4" /> Take Quiz
          </Button>
        </Link>
        <Link href="/tutor">
          <Button variant="secondary">
            <BookOpen className="h-4 w-4" /> Ask AI Tutor
          </Button>
        </Link>
        {ks === "KS4" && (
          <Link href={`/gcse/${subjectSlug.replace("gcse-", "")}/aqa`}>
            <Button variant="outline">GCSE Exam Board View</Button>
          </Link>
        )}
      </div>

      {topic.subtopics.length > 0 && (
        <section className="glass-card mb-8 p-6">
          <h2 className="mb-3 text-sm font-bold uppercase tracking-wide text-[var(--muted)]">
            Subtopics in this unit
          </h2>
          <div className="flex flex-wrap gap-2">
            {topic.subtopics.map((st) => (
              <Badge key={st.slug} variant="outline">
                {st.name}
              </Badge>
            ))}
          </div>
        </section>
      )}

      <TopicLearn topic={learnTopic} subjectLabel={subject.name} />
    </div>
  );
}
