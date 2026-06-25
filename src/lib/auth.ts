import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { prisma } from "./prisma";
import { findLocalUserByEmail, isDatabaseUnavailable } from "./local-auth-store";
import type { UserRole } from "@prisma/client";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      email: string;
      name: string;
      role: UserRole;
      keyStage?: string;
      examBoard?: string;
      xp: number;
      level: number;
    };
  }
  interface User {
    role: UserRole;
    keyStage?: string;
    examBoard?: string;
    xp: number;
    level: number;
  }
}

declare module "@auth/core/jwt" {
  interface JWT {
    id: string;
    role: UserRole;
    keyStage?: string;
    examBoard?: string;
    xp: number;
    level: number;
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        const email = (credentials.email as string).toLowerCase();

        try {
          const user = await prisma.user.findUnique({ where: { email } });

          if (user) {
            const valid = await bcrypt.compare(credentials.password as string, user.passwordHash);
            if (!valid) return null;

            return {
              id: user.id,
              email: user.email,
              name: user.name,
              role: user.role,
              keyStage: user.keyStage ?? undefined,
              examBoard: user.examBoard,
              xp: user.xp,
              level: user.level,
            };
          }
        } catch (error) {
          if (!isDatabaseUnavailable(error)) throw error;
        }

        const localUser = await findLocalUserByEmail(email);
        if (!localUser) return null;

        const valid = await bcrypt.compare(credentials.password as string, localUser.passwordHash);
        if (!valid) return null;

        return {
          id: localUser.id,
          email: localUser.email,
          name: localUser.name,
          role: localUser.role,
          keyStage: localUser.keyStage,
          examBoard: localUser.examBoard,
          xp: localUser.xp,
          level: localUser.level,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id!;
        token.role = user.role;
        token.keyStage = user.keyStage;
        token.examBoard = user.examBoard;
        token.xp = user.xp;
        token.level = user.level;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      session.user.role = token.role;
      session.user.keyStage = token.keyStage;
      session.user.examBoard = token.examBoard;
      session.user.xp = token.xp;
      session.user.level = token.level;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
  session: { strategy: "jwt" },
});
