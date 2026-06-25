import { randomUUID } from "crypto";
import { promises as fs } from "fs";
import path from "path";
import type { GeneratedQuestion } from "./quiz-generator";

export type BattleStatus = "LOBBY" | "ACTIVE" | "FINISHED";

export interface BattlePlayer {
  userId: string;
  userName: string;
  score: number | null;
  totalQuestions: number;
  finished: boolean;
  joinedAt: string;
  finishedAt: string | null;
}

export interface QuizBattle {
  id: string;
  code: string;
  hostId: string;
  hostName: string;
  topicName: string;
  questionCount: number;
  status: BattleStatus;
  questions: GeneratedQuestion[];
  players: BattlePlayer[];
  invitedUserIds: string[];
  createdAt: string;
  startedAt: string | null;
}

interface Friendship {
  userId: string;
  friendId: string;
  createdAt: string;
}

const DATA_DIR = path.join(process.cwd(), ".data");
const BATTLES_FILE = path.join(DATA_DIR, "quiz-battles.json");
const FRIENDS_FILE = path.join(DATA_DIR, "friendships.json");

function generateCode(): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let code = "";
  for (let i = 0; i < 6; i++) code += chars[Math.floor(Math.random() * chars.length)];
  return code;
}

async function readBattles(): Promise<QuizBattle[]> {
  await fs.mkdir(DATA_DIR, { recursive: true });
  try {
    return JSON.parse(await fs.readFile(BATTLES_FILE, "utf8")) as QuizBattle[];
  } catch {
    return [];
  }
}

async function writeBattles(battles: QuizBattle[]): Promise<void> {
  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.writeFile(BATTLES_FILE, JSON.stringify(battles, null, 2), "utf8");
}

async function readFriendships(): Promise<Friendship[]> {
  await fs.mkdir(DATA_DIR, { recursive: true });
  try {
    return JSON.parse(await fs.readFile(FRIENDS_FILE, "utf8")) as Friendship[];
  } catch {
    return [];
  }
}

async function writeFriendships(friends: Friendship[]): Promise<void> {
  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.writeFile(FRIENDS_FILE, JSON.stringify(friends, null, 2), "utf8");
}

export async function getFriends(userId: string): Promise<string[]> {
  const all = await readFriendships();
  const ids = new Set<string>();
  for (const f of all) {
    if (f.userId === userId) ids.add(f.friendId);
    if (f.friendId === userId) ids.add(f.userId);
  }
  return Array.from(ids);
}

export async function addFriend(userId: string, friendId: string): Promise<void> {
  if (userId === friendId) throw new Error("SELF");
  const all = await readFriendships();
  const exists = all.some(
    (f) => (f.userId === userId && f.friendId === friendId) || (f.userId === friendId && f.friendId === userId)
  );
  if (exists) throw new Error("ALREADY_FRIENDS");
  all.push({ userId, friendId, createdAt: new Date().toISOString() });
  await writeFriendships(all);
}

export async function removeFriend(userId: string, friendId: string): Promise<void> {
  const all = await readFriendships();
  await writeFriendships(
    all.filter((f) => !((f.userId === userId && f.friendId === friendId) || (f.userId === friendId && f.friendId === userId)))
  );
}

export async function createBattle(data: {
  hostId: string;
  hostName: string;
  topicName: string;
  questionCount: number;
  invitedUserIds?: string[];
}): Promise<QuizBattle> {
  const battles = await readBattles();
  let code = generateCode();
  while (battles.some((b) => b.code === code && b.status !== "FINISHED")) {
    code = generateCode();
  }

  const battle: QuizBattle = {
    id: randomUUID(),
    code,
    hostId: data.hostId,
    hostName: data.hostName,
    topicName: data.topicName,
    questionCount: data.questionCount,
    status: "LOBBY",
    questions: [],
    players: [
      {
        userId: data.hostId,
        userName: data.hostName,
        score: null,
        totalQuestions: data.questionCount,
        finished: false,
        joinedAt: new Date().toISOString(),
        finishedAt: null,
      },
    ],
    invitedUserIds: data.invitedUserIds ?? [],
    createdAt: new Date().toISOString(),
    startedAt: null,
  };

  battles.push(battle);
  await writeBattles(battles);
  return battle;
}

export async function getBattleById(id: string): Promise<QuizBattle | null> {
  const battles = await readBattles();
  return battles.find((b) => b.id === id) ?? null;
}

export async function getBattleByCode(code: string): Promise<QuizBattle | null> {
  const battles = await readBattles();
  return battles.find((b) => b.code.toUpperCase() === code.toUpperCase() && b.status !== "FINISHED") ?? null;
}

export async function getBattlesForUser(userId: string): Promise<QuizBattle[]> {
  const battles = await readBattles();
  return battles
    .filter(
      (b) =>
        b.hostId === userId ||
        b.players.some((p) => p.userId === userId) ||
        b.invitedUserIds.includes(userId)
    )
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
    .slice(0, 20);
}

export async function joinBattle(battleId: string, userId: string, userName: string): Promise<QuizBattle> {
  const battles = await readBattles();
  const battle = battles.find((b) => b.id === battleId);
  if (!battle) throw new Error("NOT_FOUND");
  if (battle.status !== "LOBBY") throw new Error("ALREADY_STARTED");
  if (battle.players.length >= 8) throw new Error("FULL");

  if (!battle.players.some((p) => p.userId === userId)) {
    battle.players.push({
      userId: userId,
      userName,
      score: null,
      totalQuestions: battle.questionCount,
      finished: false,
      joinedAt: new Date().toISOString(),
      finishedAt: null,
    });
  }

  await writeBattles(battles);
  return battle;
}

export async function startBattle(
  battleId: string,
  hostId: string,
  questions: GeneratedQuestion[]
): Promise<QuizBattle> {
  const battles = await readBattles();
  const battle = battles.find((b) => b.id === battleId);
  if (!battle) throw new Error("NOT_FOUND");
  if (battle.hostId !== hostId) throw new Error("NOT_HOST");
  if (battle.status !== "LOBBY") throw new Error("ALREADY_STARTED");
  if (battle.players.length < 2) throw new Error("NEED_PLAYERS");

  battle.status = "ACTIVE";
  battle.questions = questions;
  battle.startedAt = new Date().toISOString();
  for (const p of battle.players) {
    p.totalQuestions = questions.length;
  }

  await writeBattles(battles);
  return battle;
}

export async function submitBattleScore(
  battleId: string,
  userId: string,
  score: number
): Promise<QuizBattle> {
  const battles = await readBattles();
  const battle = battles.find((b) => b.id === battleId);
  if (!battle) throw new Error("NOT_FOUND");
  if (battle.status !== "ACTIVE") throw new Error("NOT_ACTIVE");

  const player = battle.players.find((p) => p.userId === userId);
  if (!player) throw new Error("NOT_PLAYER");

  player.score = score;
  player.finished = true;
  player.finishedAt = new Date().toISOString();

  if (battle.players.every((p) => p.finished)) {
    battle.status = "FINISHED";
  }

  await writeBattles(battles);
  return battle;
}

export function sanitizeQuestionsForClient(questions: GeneratedQuestion[]): GeneratedQuestion[] {
  return questions.map((q) => ({
    ...q,
    correctAnswer: "",
    solution: undefined,
    explanation: "",
  }));
}

export function publicBattleView(battle: QuizBattle, viewerId: string) {
  const isFinished = battle.status === "FINISHED";
  const viewerFinished = battle.players.find((p) => p.userId === viewerId)?.finished ?? false;
  const showFullQuestions = isFinished || viewerFinished;

  return {
    id: battle.id,
    code: battle.code,
    hostId: battle.hostId,
    hostName: battle.hostName,
    topicName: battle.topicName,
    questionCount: battle.questionCount,
    status: battle.status,
    players: battle.players
      .map((p) => ({
        userId: p.userId,
        userName: p.userName,
        score: p.score,
        totalQuestions: p.totalQuestions,
        finished: p.finished,
        joinedAt: p.joinedAt,
        finishedAt: p.finishedAt,
      }))
      .sort((a, b) => {
        if (a.score === null && b.score === null) return 0;
        if (a.score === null) return 1;
        if (b.score === null) return -1;
        return b.score - a.score;
      }),
    invitedUserIds: battle.invitedUserIds,
    createdAt: battle.createdAt,
    startedAt: battle.startedAt,
    questions:
      battle.status === "ACTIVE" && !showFullQuestions
        ? sanitizeQuestionsForClient(battle.questions)
        : battle.status === "ACTIVE" || battle.status === "FINISHED"
          ? battle.questions
          : [],
    isHost: battle.hostId === viewerId,
  };
}
