"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getAllTopics } from "@/data/curriculum";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const allTopics = getAllTopics();

  const results = query.length < 2
    ? []
    : allTopics.filter(
        (t) =>
          t.name.toLowerCase().includes(query.toLowerCase()) ||
          t.subjectName.toLowerCase().includes(query.toLowerCase()) ||
          t.subtopics.some((s) => s.name.toLowerCase().includes(query.toLowerCase()))
      );

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      <h1 className="mb-6 text-2xl font-bold">Search</h1>
      <div className="relative mb-8">
        <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search topics, subtopics, lessons..."
          className="w-full rounded-2xl border border-slate-300 py-3 pl-12 pr-4 text-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 dark:border-slate-600 dark:bg-slate-800"
          autoFocus
        />
      </div>

      {query.length >= 2 && (
        <p className="mb-4 text-sm text-slate-500">{results.length} results for &ldquo;{query}&rdquo;</p>
      )}

      <div className="space-y-3">
        {results.map((topic) => (
          <Link
            key={`${topic.keyStage}-${topic.subjectSlug}-${topic.slug}`}
            href={`/curriculum/${topic.keyStage}/${topic.subjectSlug}`}
          >
            <Card hover>
              <CardContent className="flex items-center justify-between py-4">
                <div>
                  <p className="font-medium">{topic.name}</p>
                  <p className="text-sm text-slate-500">{topic.subjectName}</p>
                </div>
                <div className="flex gap-2">
                  <Badge variant="outline">{topic.keyStage}</Badge>
                  <Badge>{topic.subtopics.length} subtopics</Badge>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
