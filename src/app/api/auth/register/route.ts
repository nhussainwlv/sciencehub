import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import {
  createLocalUser,
  findLocalUserByEmail,
  isDatabaseUnavailable,
} from "@/lib/local-auth-store";
import type { UserRole, KeyStage, ExamBoard, GcseTier } from "@prisma/client";

function registrationErrorMessage(error: unknown): { message: string; status: number } {
  if (error instanceof Prisma.PrismaClientInitializationError || isDatabaseUnavailable(error)) {
    return {
      message: "Database is not set up. Run: npm run db:setup",
      status: 503,
    };
  }

  if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2002") {
    return { message: "Email already registered", status: 409 };
  }

  if (error instanceof Error && error.message === "EMAIL_EXISTS") {
    return { message: "Email already registered", status: 409 };
  }

  return { message: "Registration failed. Please try again.", status: 500 };
}

async function registerWithDatabase(data: {
  name: string;
  email: string;
  passwordHash: string;
  role: UserRole;
  keyStage?: KeyStage;
  examBoard: ExamBoard;
  gcseTier?: GcseTier;
}) {
  const user = await prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      passwordHash: data.passwordHash,
      role: data.role,
      keyStage: data.role === "STUDENT" ? data.keyStage : undefined,
      examBoard: data.role === "STUDENT" ? data.examBoard : "NONE",
      gcseTier: data.role === "STUDENT" ? data.gcseTier : undefined,
    },
  });

  if (user.role === "STUDENT") {
    await prisma.studentProfile.create({ data: { userId: user.id } });
  } else if (user.role === "TEACHER") {
    await prisma.teacherProfile.create({ data: { userId: user.id } });
  } else if (user.role === "PARENT") {
    await prisma.parentProfile.create({ data: { userId: user.id } });
  }

  await prisma.leaderboardEntry.create({
    data: { userId: user.id, userName: user.name },
  });

  return user;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, password, role, keyStage, examBoard, gcseTier } = body;

    if (!name?.trim() || !email?.trim() || !password) {
      return NextResponse.json({ error: "Name, email and password are required" }, { status: 400 });
    }

    if (password.length < 8) {
      return NextResponse.json({ error: "Password must be at least 8 characters" }, { status: 400 });
    }

    const normalizedEmail = email.trim().toLowerCase();
    const passwordHash = await bcrypt.hash(password, 12);
    const userRole = (role as UserRole) ?? "STUDENT";
    const payload = {
      name: name.trim(),
      email: normalizedEmail,
      passwordHash,
      role: userRole,
      keyStage: userRole === "STUDENT" ? (keyStage as KeyStage | undefined) : undefined,
      examBoard: (userRole === "STUDENT" ? (examBoard as ExamBoard) : "NONE") ?? "NONE",
      gcseTier: userRole === "STUDENT" ? (gcseTier as GcseTier | undefined) : undefined,
    };

    try {
      const user = await registerWithDatabase(payload);
      return NextResponse.json({ id: user.id, email: user.email }, { status: 201 });
    } catch (dbError) {
      if (!isDatabaseUnavailable(dbError)) {
        throw dbError;
      }

      const existing = await findLocalUserByEmail(normalizedEmail);
      if (existing) {
        return NextResponse.json({ error: "Email already registered" }, { status: 409 });
      }

      const user = await createLocalUser(payload);
      return NextResponse.json({ id: user.id, email: user.email }, { status: 201 });
    }
  } catch (error) {
    console.error("Registration error:", error);
    const { message, status } = registrationErrorMessage(error);
    return NextResponse.json({ error: message }, { status });
  }
}
