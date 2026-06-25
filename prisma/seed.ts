import { PrismaClient, type ContentType } from "@prisma/client";
import bcrypt from "bcryptjs";
import { ALL_CURRICULUM } from "../src/data/curriculum";
import { generateQuestionsForTopic } from "../src/lib/quiz-generator";

const prisma = new PrismaClient();

const CONTENT_TYPES: ContentType[] = [
  "LESSON", "DIAGRAM", "ANIMATION", "VIDEO", "WORKED_EXAMPLE",
  "SIMULATION", "FLASHCARD", "REVISION_NOTE", "PRACTICAL",
  "MISCONCEPTION", "EXAM_TECHNIQUE",
];

async function main() {
  console.log("🌱 Seeding Science Hub database...");

  const passwordHash = await bcrypt.hash("password123", 12);

  const student = await prisma.user.upsert({
    where: { email: "student@sciencehub.uk" },
    update: {},
    create: {
      email: "student@sciencehub.uk",
      passwordHash,
      name: "Alex Morgan",
      role: "STUDENT",
      keyStage: "KS4",
      yearGroup: 10,
      examBoard: "AQA",
      pathway: "TRIPLE",
      gcseTier: "HIGHER",
      xp: 4850,
      level: 12,
      streak: 7,
      studentProfile: { create: {} },
    },
  });

  const teacher = await prisma.user.upsert({
    where: { email: "teacher@sciencehub.uk" },
    update: {},
    create: {
      email: "teacher@sciencehub.uk",
      passwordHash,
      name: "Dr. Sarah Chen",
      role: "TEACHER",
      xp: 0,
      level: 1,
      teacherProfile: { create: { school: "Oakwood Academy", department: "Science" } },
    },
  });

  const parent = await prisma.user.upsert({
    where: { email: "parent@sciencehub.uk" },
    update: {},
    create: {
      email: "parent@sciencehub.uk",
      passwordHash,
      name: "Mrs. Morgan",
      role: "PARENT",
      parentProfile: { create: {} },
    },
  });

  await prisma.parentStudent.upsert({
    where: { parentId_studentId: { parentId: parent.id, studentId: student.id } },
    update: {},
    create: { parentId: parent.id, studentId: student.id },
  });

  const scienceClass = await prisma.class.upsert({
    where: { code: "SCI10A" },
    update: {},
    create: {
      name: "Year 10 Science A",
      code: "SCI10A",
      teacherId: teacher.id,
      keyStage: "KS4",
      yearGroup: 10,
      members: { create: { userId: student.id } },
    },
  });

  console.log("✅ Users and class created");

  let topicCount = 0;
  let questionCount = 0;

  for (const [keyStage, subjects] of Object.entries(ALL_CURRICULUM)) {
    for (const subjectDef of subjects) {
      const subject = await prisma.subject.upsert({
        where: { slug: subjectDef.slug },
        update: {},
        create: {
          name: subjectDef.name,
          slug: subjectDef.slug,
          keyStage: keyStage as "KS2" | "KS3" | "KS4",
          description: subjectDef.description,
          icon: subjectDef.icon,
          color: subjectDef.color,
          orderIndex: subjects.indexOf(subjectDef),
        },
      });

      for (const topicDef of subjectDef.topics) {
        const topic = await prisma.topic.upsert({
          where: { subjectId_slug: { subjectId: subject.id, slug: topicDef.slug } },
          update: {},
          create: {
            subjectId: subject.id,
            name: topicDef.name,
            slug: topicDef.slug,
            description: topicDef.description,
            keyStage: keyStage as "KS2" | "KS3" | "KS4",
            orderIndex: subjectDef.topics.indexOf(topicDef),
            examBoards: topicDef.examBoards ?? [],
          },
        });
        topicCount++;

        for (const subtopicDef of topicDef.subtopics) {
          const subtopic = await prisma.subtopic.upsert({
            where: { topicId_slug: { topicId: topic.id, slug: subtopicDef.slug } },
            update: {},
            create: {
              topicId: topic.id,
              name: subtopicDef.name,
              slug: subtopicDef.slug,
              description: subtopicDef.description,
              orderIndex: topicDef.subtopics.indexOf(subtopicDef),
            },
          });

          for (const [i, contentType] of CONTENT_TYPES.entries()) {
            await prisma.content.create({
              data: {
                subtopicId: subtopic.id,
                type: contentType,
                title: `${subtopicDef.name} — ${contentType.replace(/_/g, " ")}`,
                body: generateContentBody(contentType, subtopicDef.name, topicDef.name, keyStage),
                orderIndex: i,
                examBoard: keyStage === "KS4" ? "AQA" : undefined,
              },
            });
          }
        }

        const questions = generateQuestionsForTopic(topicDef.name, topicDef.subtopics[0]?.name ?? topicDef.name, 40);
        for (const q of questions) {
          await prisma.question.create({
            data: {
              topicId: topic.id,
              type: q.type,
              difficulty: q.difficulty,
              questionText: q.questionText,
              options: q.options ? JSON.parse(JSON.stringify(q.options)) : undefined,
              correctAnswer: JSON.parse(JSON.stringify(q.correctAnswer)),
              explanation: q.explanation,
              marks: q.marks,
              examBoard: q.examBoard,
              gcseTier: q.gcseTier,
              tags: q.tags,
            },
          });
          questionCount++;
        }
      }
    }
  }

  console.log(`✅ ${topicCount} topics, ${questionCount} questions seeded`);

  const achievements = [
    { name: "First Steps", description: "Complete your first lesson", icon: "👣", xpReward: 25, criteria: { type: "lessons", count: 1 } },
    { name: "Quiz Master", description: "Score 100% on any quiz", icon: "🎯", xpReward: 100, criteria: { type: "perfect_quiz" } },
    { name: "7-Day Streak", description: "Study for 7 days in a row", icon: "🔥", xpReward: 150, criteria: { type: "streak", days: 7 } },
    { name: "Biology Expert", description: "Achieve 90% mastery in Biology", icon: "🧬", xpReward: 200, criteria: { type: "mastery", subject: "biology", percent: 90 } },
    { name: "GCSE Ready", description: "Complete all KS4 topics", icon: "🎓", xpReward: 500, criteria: { type: "complete_ks4" } },
  ];

  for (const a of achievements) {
    await prisma.achievement.upsert({
      where: { id: a.name.toLowerCase().replace(/\s+/g, "-") },
      update: {},
      create: { id: a.name.toLowerCase().replace(/\s+/g, "-"), ...a, criteria: a.criteria },
    });
  }

  await prisma.dailyChallenge.upsert({
    where: { date: new Date(new Date().toISOString().split("T")[0]) },
    update: {},
    create: {
      title: "Complete 3 Medium difficulty quizzes",
      description: "Test your knowledge with medium difficulty questions",
      xpReward: 100,
      criteria: { type: "quizzes", difficulty: "MEDIUM", count: 3 },
      date: new Date(new Date().toISOString().split("T")[0]),
    },
  });

  await prisma.leaderboardEntry.upsert({
    where: { userId: student.id },
    update: { xp: 4850, level: 12, streak: 7 },
    create: { userId: student.id, userName: student.name, xp: 4850, level: 12, streak: 7 },
  });

  console.log("✅ Achievements, challenges, and leaderboard seeded");
  console.log("\n🎉 Seed complete!");
  console.log("\nDemo accounts:");
  console.log("  Student: student@sciencehub.uk / password123");
  console.log("  Teacher: teacher@sciencehub.uk / password123");
  console.log("  Parent:  parent@sciencehub.uk / password123");
}

function generateContentBody(
  type: ContentType,
  subtopic: string,
  topic: string,
  keyStage: string
): string {
  const templates: Record<ContentType, string> = {
    LESSON: `# ${subtopic}\n\n## Learning Objectives\n- Understand the key concepts of ${subtopic}\n- Apply knowledge to solve problems\n- Explain ${subtopic} using scientific vocabulary\n\n## Introduction\n${subtopic} is a fundamental topic in ${topic} at ${keyStage}. In this lesson, you will explore the core principles and develop your understanding through examples and activities.\n\n## Key Concepts\n1. **Definition**: ${subtopic} refers to the scientific principles governing this area of ${topic}.\n2. **Importance**: Understanding ${subtopic} is essential for progressing in science.\n3. **Applications**: This knowledge applies to real-world situations including everyday phenomena and industrial processes.\n\n## Summary\nIn this lesson, you learned about ${subtopic} and its role within ${topic}. Review the key terminology and attempt the practice questions to consolidate your learning.`,
    DIAGRAM: `Interactive diagram for ${subtopic} showing the key structures and relationships within ${topic}. Labels include all essential components students need to identify in examinations.`,
    ANIMATION: `Animated explanation of ${subtopic} demonstrating the processes and changes that occur. Watch how the components interact and change over time.`,
    VIDEO: `Video lesson covering ${subtopic} with expert explanation, demonstrations, and exam tips. Duration: 8-12 minutes.`,
    WORKED_EXAMPLE: `## Worked Example: ${subtopic}\n\n**Question**: Explain the process of ${subtopic}.\n\n**Solution**:\nStep 1: Identify the key components involved in ${subtopic}.\nStep 2: Describe the process using scientific terminology.\nStep 3: Apply the relevant equation or principle.\nStep 4: State the conclusion with appropriate units.\n\n**Answer**: [Complete model answer with marking points]`,
    SIMULATION: `Interactive simulation for ${subtopic}. Adjust variables and observe the effects on the system. Includes guided tasks and free exploration mode.`,
    FLASHCARD: JSON.stringify([
      { front: `What is ${subtopic}?`, back: `A key concept in ${topic} that students must understand for ${keyStage}.` },
      { front: `Why is ${subtopic} important?`, back: `It forms the foundation for understanding more advanced topics in ${topic}.` },
      { front: `Key term 1`, back: `Definition related to ${subtopic}` },
      { front: `Key term 2`, back: `Definition related to ${subtopic}` },
    ]),
    REVISION_NOTE: `## ${subtopic} — Revision Notes\n\n### Must Know\n- Core definition and explanation\n- Key diagrams to draw\n- Essential equations\n\n### Common Exam Questions\n- Describe... (4 marks)\n- Explain... (6 marks)\n- Compare... (4 marks)\n\n### Top Tips\n- Use scientific vocabulary\n- Include units in calculations\n- Draw labelled diagrams`,
    PRACTICAL: `## Practical: Investigating ${subtopic}\n\n**Aim**: To investigate aspects of ${subtopic}.\n\n**Equipment**: List of required apparatus.\n\n**Method**:\n1. Set up the equipment as shown in the diagram.\n2. Record your observations.\n3. Repeat and calculate mean values.\n\n**Safety**: Wear safety goggles and follow standard laboratory procedures.\n\n**Results**: Record in an appropriate table.\n\n**Conclusion**: Relate findings to the theory of ${subtopic}.`,
    MISCONCEPTION: `## Common Misconception: ${subtopic}\n\n**What students often think**: A simplified or incorrect understanding of ${subtopic}.\n\n**The truth**: The scientifically accurate explanation.\n\n**Why it matters**: This misconception can cost marks in exams and lead to deeper misunderstandings.`,
    EXAM_TECHNIQUE: `## Exam Technique: ${subtopic}\n\n**Command Words**:\n- *Describe*: State what happens (no explanation needed)\n- *Explain*: Give reasons using scientific knowledge\n- *Evaluate*: Consider evidence for and against\n\n**Mark Allocation**: Typical questions on ${subtopic} are worth 2-6 marks.\n\n**Model Answer Structure**: Point 1 → Point 2 → Link to ${topic} context`,
  };
  return templates[type];
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
