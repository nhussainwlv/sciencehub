"use client";

import { Users, TrendingUp, Calendar, Award } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const child = {
  name: "Alex Morgan",
  yearGroup: 10,
  keyStage: "KS4",
  examBoard: "AQA",
  streak: 7,
  overallMastery: 72,
  predictedGrade: "7-8",
  lastActive: "Today at 4:32 PM",
  studyMinutes: 145,
  topics: [
    { name: "Cell Biology", mastery: 85 },
    { name: "Atomic Structure", mastery: 62 },
    { name: "Forces", mastery: 45 },
    { name: "Photosynthesis", mastery: 91 },
  ],
};

export default function ParentPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold sm:text-3xl">Parent Dashboard</h1>
        <p className="mt-1 text-slate-600 dark:text-slate-400">Monitor your child&apos;s science learning progress</p>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" /> {child.name}
            </CardTitle>
            <Badge>Year {child.yearGroup} · {child.keyStage}</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-4">
            <div>
              <p className="text-sm text-slate-500">Overall Mastery</p>
              <p className="text-2xl font-bold">{child.overallMastery}%</p>
            </div>
            <div>
              <p className="text-sm text-slate-500">Predicted Grade</p>
              <p className="text-2xl font-bold">Grade {child.predictedGrade}</p>
            </div>
            <div>
              <p className="text-sm text-slate-500">Study Streak</p>
              <p className="text-2xl font-bold">{child.streak} days</p>
            </div>
            <div>
              <p className="text-sm text-slate-500">Study Time (Week)</p>
              <p className="text-2xl font-bold">{child.studyMinutes} min</p>
            </div>
          </div>
          <p className="mt-4 text-sm text-slate-500">
            <Calendar className="mr-1 inline h-4 w-4" />
            Last active: {child.lastActive}
          </p>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary-500" />
            Topic Progress
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {child.topics.map((topic) => (
            <div key={topic.name}>
              <div className="mb-1 flex justify-between text-sm">
                <span className="font-medium">{topic.name}</span>
                <span>{topic.mastery}%</span>
              </div>
              <Progress
                value={topic.mastery}
                color={topic.mastery >= 70 ? "bg-green-500" : topic.mastery >= 50 ? "bg-amber-500" : "bg-red-500"}
              />
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="h-5 w-5 text-amber-500" />
            Recent Achievements
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            {["🔥 7-Day Streak", "🎯 Quiz Master", "⭐ Perfect Score"].map((a) => (
              <Badge key={a} variant="success" className="px-3 py-1.5 text-sm">
                {a}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
