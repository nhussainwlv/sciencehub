"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import {
  Flame, Trophy, Target, TrendingUp, BookOpen, Brain,
  ChevronRight, Star, Zap, Calendar,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getGreeting, formatPercent, displayFirstName } from "@/lib/utils";

const mockData = {
  xpToNext: 5200,
  streak: 7,
  predictedGrade: "7-8",
  overallMastery: 72,
  topicsCompleted: 28,
  totalTopics: 45,
  recentTopics: [
    { name: "Cell Biology", mastery: 85, subject: "Biology", color: "#22c55e" },
    { name: "Atomic Structure", mastery: 62, subject: "Chemistry", color: "#3b82f6" },
    { name: "Forces", mastery: 45, subject: "Physics", color: "#8b5cf6" },
    { name: "Photosynthesis", mastery: 91, subject: "Biology", color: "#22c55e" },
  ],
  achievements: [
    { name: "7-Day Streak", icon: "🔥", earned: true },
    { name: "Quiz Master", icon: "🎯", earned: true },
    { name: "Biology Expert", icon: "🧬", earned: false },
    { name: "Perfect Score", icon: "⭐", earned: true },
  ],
  dailyChallenge: {
    title: "Complete 3 Medium quizzes",
    progress: 2,
    target: 3,
    xpReward: 100,
  },
};

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const name = displayFirstName(session?.user?.name, session?.user?.email);
  const level = session?.user?.level ?? 1;
  const xp = session?.user?.xp ?? 0;
  const { xpToNext, streak, predictedGrade, overallMastery } = mockData;
  const xpProgress = ((xp % 1000) / 1000) * 100;

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold sm:text-3xl">
          {status === "loading" ? "Loading..." : `${getGreeting()}, ${name}!`} 👋
        </h1>
        <p className="mt-1 text-slate-600 dark:text-slate-400">
          Keep up the great work — you&apos;re on a {streak}-day streak!
        </p>
      </div>

      {/* Stats Row */}
      <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 dark:bg-amber-900">
              <Zap className="h-5 w-5 text-amber-600" />
            </div>
            <div>
              <p className="text-sm text-slate-500">Level {level}</p>
              <p className="text-xl font-bold">{xp.toLocaleString()} XP</p>
            </div>
          </div>
          <Progress value={xpProgress} className="mt-3" />
          <p className="mt-1 text-xs text-slate-400">{xpToNext - xp} XP to Level {level + 1}</p>
        </Card>

        <Card>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 dark:bg-orange-900">
              <Flame className="h-5 w-5 text-orange-600" />
            </div>
            <div>
              <p className="text-sm text-slate-500">Streak</p>
              <p className="text-xl font-bold">{streak} days</p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-100 dark:bg-green-900">
              <Target className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-slate-500">Overall Mastery</p>
              <p className="text-xl font-bold">{formatPercent(overallMastery)}</p>
            </div>
          </div>
          <Progress value={overallMastery} className="mt-3" color="bg-green-500" />
        </Card>

        <Card>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100 dark:bg-purple-900">
              <TrendingUp className="h-5 w-5 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-slate-500">Predicted Grade</p>
              <p className="text-xl font-bold">Grade {predictedGrade}</p>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Main Content */}
        <div className="space-y-6 lg:col-span-2">
          {/* Daily Challenge */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary-500" />
                  Daily Challenge
                </CardTitle>
                <Badge variant="warning">+{mockData.dailyChallenge.xpReward} XP</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-3 text-sm">{mockData.dailyChallenge.title}</p>
              <Progress
                value={mockData.dailyChallenge.progress}
                max={mockData.dailyChallenge.target}
                showLabel
              />
            </CardContent>
          </Card>

          {/* Topic Mastery */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Topic Mastery</CardTitle>
                <Link href="/curriculum">
                  <Button variant="ghost" size="sm">
                    View All <ChevronRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {mockData.recentTopics.map((topic) => (
                <div key={topic.name}>
                  <div className="mb-1 flex items-center justify-between text-sm">
                    <span className="font-medium">{topic.name}</span>
                    <span className="text-slate-500">{topic.mastery}%</span>
                  </div>
                  <Progress value={topic.mastery} color="bg-primary-500" />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/curriculum">
              <Card hover className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 dark:bg-primary-900">
                  <BookOpen className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <p className="font-semibold">Continue Learning</p>
                  <p className="text-sm text-slate-500">{mockData.topicsCompleted}/{mockData.totalTopics} topics</p>
                </div>
              </Card>
            </Link>
            <Link href="/tutor">
              <Card hover className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-100 dark:bg-accent-900">
                  <Brain className="h-6 w-6 text-accent-600" />
                </div>
                <div>
                  <p className="font-semibold">AI Tutor</p>
                  <p className="text-sm text-slate-500">Get personalised help</p>
                </div>
              </Card>
            </Link>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-amber-500" />
                Achievements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                {mockData.achievements.map((a) => (
                  <div
                    key={a.name}
                    className={`rounded-xl p-3 text-center ${a.earned ? "bg-amber-50 dark:bg-amber-950" : "bg-slate-50 opacity-50 dark:bg-slate-800"}`}
                  >
                    <span className="text-2xl">{a.icon}</span>
                    <p className="mt-1 text-xs font-medium">{a.name}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5 text-primary-500" />
                Recommended
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="rounded-lg bg-red-50 p-3 dark:bg-red-950">
                <p className="text-sm font-medium text-red-700 dark:text-red-300">Weak Area: Forces</p>
                <p className="text-xs text-red-600 dark:text-red-400">45% mastery — practise now</p>
                <Link href="/curriculum/KS3/physics/forces">
                  <Button size="sm" className="mt-2" variant="danger">Revise Forces</Button>
                </Link>
              </div>
              <div className="rounded-lg bg-blue-50 p-3 dark:bg-blue-950">
                <p className="text-sm font-medium text-blue-700 dark:text-blue-300">Exam Practice</p>
                <p className="text-xs text-blue-600 dark:text-blue-400">AQA Biology Paper 1</p>
                <Link href="/exams">
                  <Button size="sm" className="mt-2" variant="secondary">Start Exam</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
