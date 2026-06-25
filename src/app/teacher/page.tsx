"use client";

import { Users, FileText, BarChart3, Plus, ClipboardList } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const classes = [
  {
    name: "Year 10 Science A",
    code: "SCI10A",
    students: 28,
    avgMastery: 68,
    assignments: 3,
  },
  {
    name: "Year 11 Biology",
    code: "BIO11B",
    students: 22,
    avgMastery: 74,
    assignments: 2,
  },
];

const students = [
  { name: "Alex Morgan", mastery: 72, lastActive: "Today", grade: "7-8" },
  { name: "Emma Wilson", mastery: 85, lastActive: "Today", grade: "8-9" },
  { name: "James Taylor", mastery: 58, lastActive: "Yesterday", grade: "5-6" },
  { name: "Sophie Lewis", mastery: 91, lastActive: "Today", grade: "9" },
];

export default function TeacherPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold sm:text-3xl">Teacher Dashboard</h1>
          <p className="mt-1 text-slate-600 dark:text-slate-400">Manage classes, assignments, and student progress</p>
        </div>
        <Button>
          <Plus className="h-4 w-4" /> Create Class
        </Button>
      </div>

      <div className="mb-8 grid gap-4 sm:grid-cols-3">
        <Card>
          <CardContent className="flex items-center gap-3 pt-6">
            <Users className="h-8 w-8 text-primary-500" />
            <div>
              <p className="text-2xl font-bold">50</p>
              <p className="text-sm text-slate-500">Total Students</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center gap-3 pt-6">
            <ClipboardList className="h-8 w-8 text-green-500" />
            <div>
              <p className="text-2xl font-bold">5</p>
              <p className="text-sm text-slate-500">Active Assignments</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center gap-3 pt-6">
            <BarChart3 className="h-8 w-8 text-purple-500" />
            <div>
              <p className="text-2xl font-bold">71%</p>
              <p className="text-sm text-slate-500">Class Avg Mastery</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">My Classes</h2>
          {classes.map((cls) => (
            <Card key={cls.code} hover>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>{cls.name}</CardTitle>
                  <Badge variant="outline">{cls.code}</Badge>
                </div>
                <CardDescription>{cls.students} students · {cls.assignments} active assignments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-3">
                  <div className="mb-1 flex justify-between text-sm">
                    <span>Average Mastery</span>
                    <span>{cls.avgMastery}%</span>
                  </div>
                  <Progress value={cls.avgMastery} />
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="secondary">View Students</Button>
                  <Button size="sm" variant="outline">
                    <FileText className="h-4 w-4" /> Assign Homework
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div>
          <h2 className="mb-4 text-lg font-semibold">Student Progress — Year 10 Science A</h2>
          <Card>
            <CardContent className="divide-y divide-slate-200 pt-4 dark:divide-slate-700">
              {students.map((s) => (
                <div key={s.name} className="flex items-center justify-between py-3">
                  <div>
                    <p className="font-medium">{s.name}</p>
                    <p className="text-xs text-slate-500">Last active: {s.lastActive}</p>
                  </div>
                  <div className="text-right">
                    <Badge variant={s.mastery >= 70 ? "success" : s.mastery >= 50 ? "warning" : "danger"}>
                      {s.mastery}% mastery
                    </Badge>
                    <p className="mt-1 text-xs text-slate-500">Predicted: Grade {s.grade}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
