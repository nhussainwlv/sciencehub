# Science Hub — How the App Works

Science Hub is a UK science learning platform for **KS2, KS3, and GCSE** (Years 3–11). It helps students learn topics, practise quizzes, revise with an AI tutor, compete with friends, and access official past papers.

---

## Table of contents

1. [Overview](#overview)
2. [Who it is for](#who-it-is-for)
3. [Main features](#main-features)
4. [How to run the app](#how-to-run-the-app)
5. [App structure (pages)](#app-structure-pages)
6. [How learning content works](#how-learning-content-works)
7. [How quizzes work](#how-quizzes-work)
8. [How the AI tutor works](#how-the-ai-tutor-works)
9. [How quiz battles work](#how-quiz-battles-work)
10. [Authentication & accounts](#authentication--accounts)
11. [Past papers & exams](#past-papers--exams)
12. [Technical architecture](#technical-architecture)
13. [Environment variables](#environment-variables)
14. [Project folder structure](#project-folder-structure)

---

## Overview

```
┌─────────────┐     ┌──────────────────┐     ┌─────────────────┐
│   Student   │────▶│   Science Hub    │────▶│  Curriculum DB  │
│   Browser   │     │   (Next.js app)  │     │  + content files│
└─────────────┘     └────────┬─────────┘     └─────────────────┘
                             │
              ┌──────────────┼──────────────┐
              ▼              ▼              ▼
         AI Tutor       Quiz Engine    Quiz Battles
        (OpenAI or      (generated      (friends +
         local KB)       questions)      live scores)
```

Students browse the UK National Curriculum, open a topic, read detailed notes (foundation + higher tier), take quizzes, ask the AI tutor questions, and challenge friends in multiplayer quiz battles.

---

## Who it is for

| Role | What they can do |
|------|------------------|
| **Student** | Learn topics, take quizzes, use AI tutor, quiz battles, view leaderboard |
| **Teacher** | Class management UI (dashboard scaffold) |
| **Parent** | Child progress UI (dashboard scaffold) |

Most features work without logging in. **Quiz Battles** and **friends** require a signed-in account.

---

## Main features

### Curriculum (KS2, KS3, KS4)
- **75 topics** across all key stages
- Each topic has **subtopics**, **foundation concepts**, and **higher/extension concepts**
- Lesson pages with definitions, diagrams, maths worked examples, exam tips, and external links

### GCSE by exam board
- **Biology, Chemistry, Physics** for **AQA, Edexcel, Edexcel IGCSE, OCR A, OCR B**
- Topic-by-topic learning aligned to exam specifications
- **Past papers & mark schemes** linked on every board page (official + PMT, Save My Exams, BBC Bitesize)

### Quizzes
- **30 questions per GCSE topic** (24 concept + 6 maths-style with worked solutions)
- Multiple choice, true/false, and calculation questions
- Instant feedback (green = correct, red = incorrect)

### AI Tutor
- Chat interface at `/tutor`
- Explains science concepts in GCSE-level detail
- Works **without an API key** using built-in curriculum knowledge
- With `OPENAI_API_KEY` set, uses OpenAI for richer, more flexible answers

### Quiz Battles
- Add friends by email
- Host creates a game → share **6-character code**
- 2–8 players answer the **same 20 questions**
- **Live scoreboard** — highest score wins

### Gamification
- XP, levels, and streaks on user profiles
- Leaderboard page (global rankings)

---

## How to run the app

### Quick start (no database)

```bash
cd ScienceHub
npm install
npm run dev
```

Open **http://localhost:3000**

Registration and login still work via a **local file fallback** (`.data/local-users.json`) if PostgreSQL is not running.

### Full setup (with database)

```bash
npm install
cp .env.example .env
# Edit .env — set DATABASE_URL and NEXTAUTH_SECRET

docker compose up -d          # starts PostgreSQL
npm run db:setup              # push schema + seed demo data
npm run dev
```

### Production build

```bash
npm run build
npm start
```

---

## App structure (pages)

| URL | Purpose |
|-----|---------|
| `/` | Landing page |
| `/login`, `/register` | Sign in / create account |
| `/dashboard` | Student home — greeting, progress, quick links |
| `/curriculum` | Browse KS2, KS3, KS4 subjects |
| `/curriculum/[keyStage]/[subject]` | Topic list for a subject |
| `/curriculum/.../[topic]/lesson` | Full lesson (concepts, higher tier, diagrams) |
| `/curriculum/.../[topic]/quiz` | Timed quiz (40 questions) |
| `/gcse` | GCSE subject picker |
| `/gcse/[subject]/[board]` | Topics + **past papers panel** |
| `/gcse/[subject]/[board]/[topic]` | Learn tab + 30-question quiz |
| `/tutor` | AI science tutor chat |
| `/exams` | Past papers & mark schemes by board/subject |
| `/quiz-battle` | Create/join multiplayer quiz games |
| `/quiz-battle/[id]` | Game lobby, play, live results |
| `/leaderboard` | XP rankings |
| `/settings` | User preferences |

---

## How learning content works

Content is stored in TypeScript data files under `src/data/curriculum/`.

### Key stages

| Key stage | File | Content |
|-----------|------|---------|
| KS2 | `content/ks2-content.ts` | 27 topics — core + extension (Years 5–6) |
| KS3 | `content/ks3-content.ts` | 27 topics — foundation + GCSE bridge |
| KS4 (curriculum route) | Bridges to GCSE content | 25 topics |
| GCSE (rich) | `gcse/content/*.ts` | 22+ topics with diagrams, maths, higher tier |

### Enrichment pipeline

When you open a lesson or GCSE topic, the app runs **`enrichTopic()`**:

1. Loads base topic metadata (name, slug, subtopics)
2. Merges **key concepts**, **sections**, **diagrams**, **equations**
3. Adds **fun facts**, **hints**, **memory tips**, **external links**
4. Attaches **6 maths questions** with worked solutions
5. Adds **higher-tier concepts** (grades 7–9) from `higher-tier-content.ts`

### Higher tier

GCSE topics show two levels:
- **Foundation** — core concepts for all students
- **Higher tier** — advanced concepts, in-depth sections, and exam tips for grades 7–9

---

## How quizzes work

```
Topic page  →  quiz-generator.ts  →  TopicQuiz component
                    │
                    ├─ Concept questions (from key definitions)
                    ├─ True/false questions
                    └─ Maths questions (formulas + worked solutions)
```

1. Questions are **generated in the browser** from the topic's key concepts
2. Each question has a difficulty (EASY, MEDIUM, HARD)
3. Student selects an answer → instant correct/incorrect feedback
4. At the end: score, percentage, and XP estimate

**Note:** Quiz scores are currently stored in the session only. The database schema supports `QuizAttempt` records for future persistence.

---

## How the AI tutor works

```
User message  →  POST /api/tutor  →  ai-tutor.ts
                                         │
                         ┌───────────────┴───────────────┐
                         ▼                               ▼
                  OPENAI_API_KEY set?              local-tutor.ts
                         │                               │
                    OpenAI GPT                    Curriculum search +
                    (flexible answers)              built-in explanations
```

### Without API key
- Searches all GCSE curriculum content
- Returns structured explanations with definitions, sections, and exam tips
- Includes higher-tier detail when you ask for it

### With API key
- Uses OpenAI for natural, conversational tutoring
- Falls back to local knowledge if the API fails

### Example prompts
- "Explain gravity"
- "What is photosynthesis?"
- "Create a revision plan for chemistry"
- "Higher tier forces revision"

---

## How quiz battles work

```
Host creates game  →  Lobby (share code)  →  Host starts
       │                                        │
       └─ Friends join via code ────────────────┘
                         │
              Same 20 questions for everyone
                         │
              Server scores answers fairly
                         │
              Live leaderboard → Winner announced
```

### Steps
1. **Sign in** and go to `/quiz-battle`
2. **Add friends** using their registered email
3. **Create battle** — pick a topic (e.g. Cell Biology, Forces)
4. Share the **6-character code** (e.g. `XK4M2P`)
5. Friends **join** with the code
6. Host clicks **Start** (needs at least 2 players)
7. Everyone answers the same questions
8. **Live scores** update as players finish
9. **Winner** shown when all players complete

### Storage
Battle and friend data is saved in `.data/quiz-battles.json` and `.data/friendships.json` (works without PostgreSQL).

### API routes
- `GET/POST /api/friends` — list/add friends
- `GET/POST /api/quiz-battle` — list/create/join by code
- `GET/POST /api/quiz-battle/[id]` — join, start, submit scores

---

## Authentication & accounts

- **NextAuth.js** with email + password (credentials provider)
- Passwords hashed with **bcrypt**
- Primary store: **PostgreSQL** (`User` table via Prisma)
- **Fallback:** if the database is unavailable, users are stored in `.data/local-users.json`

### Register
`POST /api/auth/register` creates a student, teacher, or parent account.

### Session
JWT-based session includes: name, email, role, key stage, exam board, XP, level.

---

## Past papers & exams

Every GCSE board + subject combination links to:

| Source | What you get |
|--------|--------------|
| **AQA** | Official assessment resources + past paper finder |
| **Pearson Edexcel** | Qualification hub + past paper search |
| **OCR** | Assessment pages with papers and mark schemes |
| **Physics & Maths Tutor** | Papers + mark schemes by year |
| **Save My Exams** | Organised past papers |
| **BBC Bitesize** | Exam practice (AQA) |

Find them on:
- `/gcse/[subject]/[board]` — full panel at top
- `/gcse/.../[topic]` — quick link banner
- `/exams` — filter by board and subject

---

## Technical architecture

| Layer | Technology |
|-------|------------|
| Framework | **Next.js 16** (App Router) |
| Language | **TypeScript** |
| Styling | **Tailwind CSS 4** |
| Database | **PostgreSQL** + **Prisma 5** |
| Auth | **NextAuth v5** |
| AI | **OpenAI** (optional) + local curriculum engine |
| UI | Radix UI, Lucide icons, glass-card dark theme |

### API routes

| Route | Method | Purpose |
|-------|--------|---------|
| `/api/auth/[...nextauth]` | * | Login/session |
| `/api/auth/register` | POST | Create account |
| `/api/tutor` | POST | AI tutor chat |
| `/api/quiz` | GET | Fetch/generate questions |
| `/api/friends` | GET/POST/DELETE | Friends list |
| `/api/quiz-battle` | GET/POST/PUT | Battles |
| `/api/quiz-battle/[id]` | GET/POST | Game actions |
| `/api/leaderboard` | GET | XP rankings |
| `/api/curriculum` | GET | Curriculum metadata |

---

## Environment variables

Copy `.env.example` to `.env`:

| Variable | Required | Purpose |
|----------|----------|---------|
| `DATABASE_URL` | For full DB features | PostgreSQL connection string |
| `NEXTAUTH_SECRET` | Yes (production) | Session encryption key |
| `NEXTAUTH_URL` | Yes (production) | App URL (e.g. `http://localhost:3000`) |
| `OPENAI_API_KEY` | Optional | Enables full AI tutor via OpenAI |

Generate a secret:
```bash
openssl rand -base64 32
```

---

## Project folder structure

```
ScienceHub/
├── docs/                          # Documentation (this file)
├── prisma/
│   ├── schema.prisma              # Database models
│   └── seed.ts                    # Demo data
├── public/                        # Static assets, PWA manifest
├── src/
│   ├── app/                       # Pages & API routes (Next.js App Router)
│   │   ├── api/                   # Backend endpoints
│   │   ├── curriculum/            # KS2/KS3/KS4 curriculum pages
│   │   ├── gcse/                  # GCSE board/topic pages
│   │   ├── tutor/                 # AI tutor chat
│   │   ├── quiz-battle/           # Multiplayer quizzes
│   │   └── ...
│   ├── components/
│   │   ├── gcse/                  # TopicLearn, TopicQuiz, PastPapersPanel
│   │   ├── quiz-battle/           # Battle lobby & gameplay
│   │   ├── diagrams/              # SVG topic diagrams
│   │   └── layout/                # Navbar, footer
│   ├── data/curriculum/
│   │   ├── ks2.ts, ks3.ts, ks4.ts # Topic trees
│   │   ├── content/               # KS2/KS3 lesson content
│   │   └── gcse/
│   │       ├── content/           # Rich GCSE topic content
│   │       ├── past-papers.ts     # Past paper links
│   │       └── higher-tier-content.ts
│   └── lib/
│       ├── auth.ts                # NextAuth config
│       ├── ai-tutor.ts            # AI routing
│       ├── local-tutor.ts         # Offline tutor engine
│       ├── quiz-generator.ts      # Question generation
│       └── quiz-battle-store.ts   # Multiplayer game state
├── .data/                         # Local fallback storage (gitignored)
│   ├── local-users.json
│   ├── quiz-battles.json
│   └── friendships.json
├── docker-compose.yml             # PostgreSQL for local dev
└── package.json
```

---

## Typical student journey

1. **Register** at `/register` as a student
2. **Dashboard** shows greeting and XP
3. Pick **GCSE Biology → AQA → Cell Biology**
4. **Learn** — read concepts, higher tier, diagrams, maths examples
5. **Quiz** — 30 questions, aim for 80%+
6. Open **past papers** link for real exam practice
7. **AI Tutor** — ask "explain osmosis in detail"
8. **Quiz Battle** — challenge a friend on the same topic
9. Check **leaderboard** for XP ranking

---

## Built by

**@Adrian** — [Instagram](https://www.instagram.com/adrianjamesash/)

---

*Last updated: June 2025*
