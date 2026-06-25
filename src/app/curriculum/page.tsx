import Link from "next/link";
import { BookOpen, ChevronRight, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ALL_CURRICULUM, getTopicCount, getSubtopicCount } from "@/data/curriculum";
import type { KeyStage } from "@prisma/client";

const keyStageInfo: Record<KeyStage, { label: string; years: string; description: string }> = {
  KS2: {
    label: "Key Stage 2",
    years: "Years 3–6",
    description: "Primary science — core and extension concepts for every topic.",
  },
  KS3: {
    label: "Key Stage 3",
    years: "Years 7–9",
    description: "Biology, Chemistry, and Physics with foundation and higher content.",
  },
  KS4: {
    label: "Key Stage 4 (GCSE)",
    years: "Years 10–11",
    description: "Foundation and Higher tier GCSE content for AQA, Edexcel, and OCR.",
  },
};

export default function CurriculumPage() {
  const topicCount = getTopicCount();
  const subtopicCount = getSubtopicCount();

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <div className="mb-10">
        <h1 className="text-2xl font-bold sm:text-3xl">Science Curriculum</h1>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[var(--muted)]">
          Complete UK National Curriculum — {topicCount} topics, {subtopicCount} subtopics.
          Every lesson includes detailed foundation concepts and higher-level extension content.
        </p>
        <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-xs text-violet-300">
          <Award className="h-3.5 w-3.5" />
          Foundation + Higher content on all topics
        </div>
      </div>

      <div className="space-y-12">
        {(Object.keys(ALL_CURRICULUM) as KeyStage[]).map((ks) => {
          const info = keyStageInfo[ks];
          const subjects = ALL_CURRICULUM[ks];

          return (
            <section key={ks}>
              <div className="mb-6">
                <div className="flex flex-wrap items-center gap-3">
                  <h2 className="text-xl font-bold">{info.label}</h2>
                  <Badge variant="outline">{info.years}</Badge>
                </div>
                <p className="mt-1 text-sm text-[var(--muted)]">{info.description}</p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {subjects.map((subject) => (
                  <Link
                    key={subject.slug}
                    href={`/curriculum/${ks}/${subject.slug}`}
                    className="glass-card group block p-6 transition-colors hover:border-[var(--foreground)]"
                  >
                    <div className="flex items-start justify-between">
                      <span className="text-3xl">{subject.icon}</span>
                      <Badge variant="outline">{subject.topics.length} topics</Badge>
                    </div>
                    <h3 className="mt-4 font-bold group-hover:text-[var(--foreground)]">{subject.name}</h3>
                    <p className="mt-1 text-sm text-[var(--muted)] line-clamp-2">{subject.description}</p>
                    <div className="mt-4 flex items-center justify-between text-sm text-[var(--muted)]">
                      <span className="flex items-center gap-1">
                        <BookOpen className="h-4 w-4" />
                        {subject.topics.reduce((a, t) => a + t.subtopics.length, 0)} subtopics
                      </span>
                      <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
