import type { Difficulty } from "@prisma/client";

export interface AdaptiveProfile {
  userId: string;
  topicMasteries: Record<string, number>;
  recentScores: number[];
  preferredDifficulty: Difficulty;
  weakTopics: string[];
  strongTopics: string[];
}

export function calculateMastery(correct: number, total: number): number {
  if (total === 0) return 0;
  return Math.round((correct / total) * 100);
}

export function updateMastery(current: number, newScore: number, weight = 0.3): number {
  return Math.round(current * (1 - weight) + newScore * weight);
}

export function identifyWeakAreas(
  masteries: Record<string, number>,
  threshold = 60
): string[] {
  return Object.entries(masteries)
    .filter(([, score]) => score < threshold)
    .sort(([, a], [, b]) => a - b)
    .map(([topic]) => topic);
}

export function recommendDifficulty(masteryPercent: number): Difficulty {
  if (masteryPercent < 40) return "EASY";
  if (masteryPercent < 75) return "MEDIUM";
  return "HARD";
}

export function generateRevisionPlan(
  weakTopics: string[],
  daysUntilExam: number
): { day: number; topics: string[]; duration: number }[] {
  const plan: { day: number; topics: string[]; duration: number }[] = [];
  const topicsPerDay = Math.ceil(weakTopics.length / Math.max(daysUntilExam, 1));

  for (let day = 1; day <= daysUntilExam; day++) {
    const start = (day - 1) * topicsPerDay;
    const dayTopics = weakTopics.slice(start, start + topicsPerDay);
    if (dayTopics.length > 0) {
      plan.push({
        day,
        topics: dayTopics,
        duration: dayTopics.length * 30,
      });
    }
  }

  return plan;
}

export function calculateXpReward(
  correct: number,
  total: number,
  difficulty: Difficulty,
  streak: number
): number {
  const base = correct * 10;
  const difficultyMultiplier = { EASY: 1, MEDIUM: 1.5, HARD: 2 }[difficulty];
  const accuracyBonus = total > 0 && correct / total >= 0.8 ? 50 : 0;
  const streakBonus = Math.min(streak * 5, 50);
  return Math.round(base * difficultyMultiplier + accuracyBonus + streakBonus);
}

export function getNextRecommendedTopic(
  profile: AdaptiveProfile,
  allTopics: string[]
): string | null {
  const unstudied = allTopics.filter((t) => !(t in profile.topicMasteries));
  if (unstudied.length > 0) return unstudied[0];

  const weak = identifyWeakAreas(profile.topicMasteries);
  if (weak.length > 0) return weak[0];

  return allTopics[Math.floor(Math.random() * allTopics.length)] ?? null;
}
