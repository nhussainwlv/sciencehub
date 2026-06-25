# Science Hub

**Science Hub** is a production-ready, AI-powered UK science learning platform covering the complete National Curriculum from KS2 (Years 3–6), KS3 (Years 7–9), and KS4 GCSE (Years 10–11).

## Features

- **Complete UK Curriculum** — All KS2, KS3, and GCSE science topics with subtopics
- **Exam Board Support** — AQA, Edexcel, and OCR with Combined/Triple Science and Foundation/Higher tiers
- **40 Quiz Questions Per Topic** — 7 question types across 3 difficulty levels
- **AI Science Tutor** — Personalised explanations, revision plans, and weak area identification
- **Adaptive Learning** — Difficulty adjusts based on performance and mastery
- **Gamification** — XP, levels, streaks, badges, leaderboards, daily challenges
- **Exam Practice** — Timed papers with mark schemes and grade boundaries
- **Multi-Role Accounts** — Student, teacher, parent, and admin dashboards
- **Accessibility** — Dark mode, dyslexia-friendly font, text-to-speech, multilingual support
- **PWA Support** — Installable progressive web app with offline capability
- **Analytics** — Mastery tracking, predicted GCSE grades, performance insights

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Next.js 15, React, TypeScript, Tailwind CSS |
| Backend | Next.js API Routes, Server Actions |
| Database | PostgreSQL with Prisma ORM |
| Auth | NextAuth.js (credentials) |
| AI | OpenAI GPT-4o-mini |
| Charts | Recharts |
| UI | Radix UI, Framer Motion, Lucide Icons |
| PWA | next-pwa |

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL 14+
- OpenAI API key (optional, for AI tutor)

### Installation

```bash
# Clone and install
cd ScienceHub
npm install

# Configure environment
cp .env.example .env
# Edit .env with your DATABASE_URL, NEXTAUTH_SECRET, and OPENAI_API_KEY

# Set up database
npx prisma generate
npx prisma db push
npm run db:seed

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Demo Accounts

| Role | Email | Password |
|------|-------|----------|
| Student | student@sciencehub.uk | password123 |
| Teacher | teacher@sciencehub.uk | password123 |
| Parent | parent@sciencehub.uk | password123 |

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes (auth, tutor, quiz, curriculum)
│   ├── curriculum/        # Curriculum browsing and lessons
│   ├── dashboard/         # Student dashboard
│   ├── exams/             # Exam practice
│   ├── tutor/             # AI tutor chat
│   ├── teacher/           # Teacher dashboard
│   └── ...
├── components/            # React components
│   ├── ui/               # Reusable UI primitives
│   ├── layout/           # Navbar, sidebar
│   └── providers/        # Context providers
├── data/curriculum/       # Curriculum definitions (KS2, KS3, KS4)
└── lib/                   # Utilities, auth, AI, quiz engine
prisma/
├── schema.prisma          # Database schema
└── seed.ts               # Seed script
```

## Database Schema

The Prisma schema includes models for:
- Users (Student, Teacher, Parent, Admin roles)
- Curriculum (Subjects, Topics, Subtopics, Content)
- Questions and Quizzes (7 types, 3 difficulty levels)
- Progress tracking (LessonProgress, TopicMastery)
- Gamification (Achievements, DailyChallenges, Leaderboard)
- Classes and Assignments (Teacher features)
- Exam Papers and Attempts
- AI Conversations

## Deployment

### Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

Set environment variables in the Vercel dashboard:
- `DATABASE_URL` — PostgreSQL connection string (use Neon, Supabase, or Railway)
- `NEXTAUTH_SECRET` — Generate with `openssl rand -base64 32`
- `NEXTAUTH_URL` — Your production URL
- `OPENAI_API_KEY` — For AI tutor features

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npx prisma generate
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

### Database Hosting

- **Neon** (recommended): Free PostgreSQL with serverless scaling
- **Supabase**: PostgreSQL with built-in auth and storage
- **Railway**: Simple PostgreSQL hosting

## Curriculum Coverage

### KS2 (Years 3–6)
Working Scientifically, Living Things and Habitats, Animals Including Humans, Plants, Rocks, Light, Forces and Magnets, States of Matter, Sound, Electricity, Earth and Space, Evolution and Inheritance, Properties and Changes of Materials

### KS3 (Years 7–9)
Biology: Cells, Organisation, Nutrition, Digestion, Respiration, Reproduction, Genetics, Ecosystems, Health, Disease
Chemistry: Particles, Elements, Compounds, Mixtures, Atomic Structure, Periodic Table, Reactions, Acids and Alkalis, Metals, Energy Changes, Earth Resources
Physics: Forces, Motion, Pressure, Energy, Electricity, Magnetism, Waves, Light, Sound, Space

### KS4 GCSE (Years 10–11)
Full AQA, Edexcel, and OCR specifications for Biology, Chemistry, and Physics with Combined/Triple Science pathways and Foundation/Higher tiers.

## License

MIT
