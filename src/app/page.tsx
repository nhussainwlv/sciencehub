import Link from "next/link";
import {
  Atom, BookOpen, Brain, Trophy, GraduationCap, ArrowRight,
  Zap, Target, FlaskConical, Sparkles,
} from "lucide-react";
import { LandingNav } from "@/components/landing/landing-nav";

const features = [
  {
    icon: BookOpen,
    title: "Learn First",
    description: "Definitions, explanations, and key concepts before every quiz — the right order to revise.",
  },
  {
    icon: GraduationCap,
    title: "GCSE by Board",
    description: "AQA, Edexcel, Edexcel IGCSE, OCR A & B — every topic from your exact specification.",
  },
  {
    icon: Brain,
    title: "AI Tutor",
    description: "Step-by-step help, revision plans, and answers tailored to your key stage.",
  },
  {
    icon: Target,
    title: "Instant Feedback",
    description: "Green for correct, red for wrong — with explanations on every answer.",
  },
  {
    icon: Trophy,
    title: "Track Progress",
    description: "XP, streaks, mastery percentages, and predicted GCSE grades.",
  },
  {
    icon: FlaskConical,
    title: "Full Curriculum",
    description: "KS2, KS3, and KS4 science — every topic from the UK National Curriculum.",
  },
];

const stats = [
  { value: "90+", label: "Topics" },
  { value: "3,600+", label: "Questions" },
  { value: "5", label: "Exam boards" },
  { value: "3", label: "Key stages" },
];

export default function HomePage() {
  return (
    <div className="app-shell relative overflow-x-hidden">
      <LandingNav />

      <div className="relative">
        {/* Hero */}
        <section className="relative mx-auto max-w-5xl px-4 pb-24 pt-20 text-center sm:pt-32">
          <div className="pointer-events-none absolute left-1/2 top-0 h-px w-3/4 max-w-2xl -translate-x-1/2 bg-gradient-to-r from-transparent via-[var(--border-strong)] to-transparent" aria-hidden="true" />

          <div className="mb-6 inline-flex items-center gap-2 stat-pill">
            <Sparkles className="h-3.5 w-3.5" />
            UK Science · KS2 to GCSE
          </div>

          <h1 className="hero-title">
            <span className="hero-gradient-text">Science Hub</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[var(--muted)] sm:text-xl">
            Master every topic. Ace every exam.
            <br className="hidden sm:block" />
            The smartest way to learn UK science.
          </p>

          <p className="mx-auto mt-4 max-w-xl text-sm text-[var(--muted-foreground)]">
            Curriculum-aligned paths, exam-board-specific GCSE content, AI tutoring,
            and progress that follows you everywhere.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/register" className="btn-primary px-8 py-3.5 text-base shadow-lg shadow-black/10 dark:shadow-white/5">
              Get started free
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/gcse" className="btn-outline px-8 py-3.5 text-base">
              Browse GCSE topics
            </Link>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map(({ value, label }) => (
              <div key={label} className="glass-card px-4 py-5">
                <p className="text-2xl font-bold text-[var(--foreground)]">{value}</p>
                <p className="mt-1 text-xs text-[var(--muted)]">{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section id="features" className="mx-auto max-w-5xl px-4 py-20">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Everything you need
            </h2>
            <p className="mt-3 text-[var(--muted)]">
              One platform. Every topic. Every exam board.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({ icon: Icon, title, description }) => (
              <div key={title} className="glass-card group p-6 transition-all hover:-translate-y-1">
                <div className="feature-icon-wrap mb-4 transition-colors group-hover:border-[var(--foreground)]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-[var(--foreground)]">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section id="how-it-works" className="section-panel py-20">
          <div className="mx-auto max-w-5xl px-4">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight">How it works</h2>
              <p className="mt-3 text-sm text-[var(--muted)]">Three steps from sign-up to exam-ready</p>
            </div>
            <div className="grid gap-8 sm:grid-cols-3">
              {[
                { step: "01", title: "Sign up free", desc: "Pick your key stage and exam board in seconds." },
                { step: "02", title: "Learn the topic", desc: "Read definitions and explanations before quizzing." },
                { step: "03", title: "Test yourself", desc: "Answer questions — green if right, red if wrong." },
              ].map(({ step, title, desc }) => (
                <div key={step} className="glass-card p-6 text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border-strong)] bg-[var(--surface)] text-sm font-bold">
                    {step}
                  </div>
                  <h3 className="font-semibold">{title}</h3>
                  <p className="mt-2 text-sm text-[var(--muted)]">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-3xl px-4 py-24 text-center">
          <div className="glass-card glow-ring p-10 sm:p-12">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--border-strong)] bg-[var(--surface)]">
              <Atom className="h-7 w-7 text-[var(--foreground)]" />
            </div>
            <h2 className="mt-6 text-2xl font-bold sm:text-3xl">Ready to start?</h2>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Free for students. No card required.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link href="/register" className="btn-primary px-8 py-3">
                Create free account
              </Link>
              <Link href="/login" className="btn-outline px-8 py-3">
                Sign in
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
