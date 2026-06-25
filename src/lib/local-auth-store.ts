import { randomUUID } from "crypto";
import { promises as fs } from "fs";
import path from "path";
import type { ExamBoard, GcseTier, KeyStage, UserRole } from "@prisma/client";

export interface LocalUser {
  id: string;
  email: string;
  name: string;
  passwordHash: string;
  role: UserRole;
  keyStage?: KeyStage;
  examBoard: ExamBoard;
  gcseTier?: GcseTier;
  xp: number;
  level: number;
  createdAt: string;
}

const DATA_DIR = path.join(process.cwd(), ".data");
const USERS_FILE = path.join(DATA_DIR, "local-users.json");

async function ensureStore(): Promise<LocalUser[]> {
  await fs.mkdir(DATA_DIR, { recursive: true });
  try {
    const raw = await fs.readFile(USERS_FILE, "utf8");
    return JSON.parse(raw) as LocalUser[];
  } catch {
    return [];
  }
}

async function writeStore(users: LocalUser[]): Promise<void> {
  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.writeFile(USERS_FILE, JSON.stringify(users, null, 2), "utf8");
}

export function isDatabaseUnavailable(error: unknown): boolean {
  if (error && typeof error === "object") {
    const code = "code" in error ? (error as { code?: string }).code : undefined;
    if (code === "P1001" || code === "P1010" || code === "P1000") return true;

    const message = "message" in error ? String((error as { message?: string }).message) : "";
    if (
      message.includes("Can't reach database server") ||
      message.includes("Connection refused") ||
      message.includes("ECONNREFUSED")
    ) {
      return true;
    }
  }
  return false;
}

export async function findLocalUserByEmail(email: string): Promise<LocalUser | undefined> {
  const users = await ensureStore();
  return users.find((u) => u.email === email.toLowerCase());
}

export async function findLocalUserById(id: string): Promise<LocalUser | undefined> {
  const users = await ensureStore();
  return users.find((u) => u.id === id);
}

export async function listLocalUsers(): Promise<LocalUser[]> {
  return ensureStore();
}

export async function createLocalUser(data: {
  name: string;
  email: string;
  passwordHash: string;
  role: UserRole;
  keyStage?: KeyStage;
  examBoard?: ExamBoard;
  gcseTier?: GcseTier;
}): Promise<LocalUser> {
  const users = await ensureStore();
  const email = data.email.toLowerCase();

  if (users.some((u) => u.email === email)) {
    throw new Error("EMAIL_EXISTS");
  }

  const user: LocalUser = {
    id: randomUUID(),
    email,
    name: data.name,
    passwordHash: data.passwordHash,
    role: data.role,
    keyStage: data.keyStage,
    examBoard: data.examBoard ?? "NONE",
    gcseTier: data.gcseTier,
    xp: 0,
    level: 1,
    createdAt: new Date().toISOString(),
  };

  users.push(user);
  await writeStore(users);
  return user;
}
