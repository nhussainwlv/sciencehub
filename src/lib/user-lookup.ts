import { prisma } from "./prisma";
import {
  findLocalUserByEmail,
  findLocalUserById,
  listLocalUsers,
  isDatabaseUnavailable,
  type LocalUser,
} from "./local-auth-store";

export interface AppUser {
  id: string;
  email: string;
  name: string;
  xp: number;
  level: number;
}

function fromLocal(u: LocalUser): AppUser {
  return { id: u.id, email: u.email, name: u.name, xp: u.xp, level: u.level };
}

export async function findUserByEmail(email: string): Promise<AppUser | null> {
  try {
    const user = await prisma.user.findUnique({ where: { email: email.toLowerCase() } });
    if (user) return { id: user.id, email: user.email, name: user.name, xp: user.xp, level: user.level };
  } catch (error) {
    if (!isDatabaseUnavailable(error)) throw error;
  }
  const local = await findLocalUserByEmail(email);
  return local ? fromLocal(local) : null;
}

export async function findUserById(id: string): Promise<AppUser | null> {
  try {
    const user = await prisma.user.findUnique({ where: { id } });
    if (user) return { id: user.id, email: user.email, name: user.name, xp: user.xp, level: user.level };
  } catch (error) {
    if (!isDatabaseUnavailable(error)) throw error;
  }
  const local = await findLocalUserById(id);
  return local ? fromLocal(local) : null;
}

export async function searchStudents(query: string, excludeUserId?: string): Promise<AppUser[]> {
  const q = query.toLowerCase().trim();
  const results = new Map<string, AppUser>();

  try {
    const users = await prisma.user.findMany({
      where: {
        role: "STUDENT",
        OR: q
          ? [{ email: { contains: q, mode: "insensitive" } }, { name: { contains: q, mode: "insensitive" } }]
          : undefined,
      },
      take: 20,
      select: { id: true, email: true, name: true, xp: true, level: true },
    });
    for (const u of users) {
      if (u.id !== excludeUserId) results.set(u.id, u);
    }
  } catch (error) {
    if (!isDatabaseUnavailable(error)) throw error;
  }

  const locals = await listLocalUsers();
  for (const u of locals) {
    if (u.role !== "STUDENT" && u.role !== "TEACHER") continue;
    if (u.id === excludeUserId) continue;
    if (!q || u.email.includes(q) || u.name.toLowerCase().includes(q)) {
      results.set(u.id, fromLocal(u));
    }
  }

  return Array.from(results.values()).slice(0, 20);
}
