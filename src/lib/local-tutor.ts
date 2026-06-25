import { ALL_CONTENT } from "@/data/curriculum/gcse/content";
import { getKs2Content } from "@/data/curriculum/content/ks2-content";
import { getKs3Content } from "@/data/curriculum/content/ks3-content";
import { getHigherTierContent } from "@/data/curriculum/gcse/content/higher-tier-content";
import { TOPIC_EXTRAS } from "@/data/curriculum/gcse/content/topic-extras";
import { getMathsQuestionsForTopic } from "@/data/curriculum/gcse/content/maths-questions";
import type { GcseTopicContent } from "@/data/curriculum/gcse/content/types";
import type { TutorContext } from "./ai-tutor";

interface SearchHit {
  score: number;
  slug: string;
  topicName: string;
  subject: string;
  content: GcseTopicContent;
}

const SLUG_LABELS: Record<string, { name: string; subject: string }> = {
  "cell-biology": { name: "Cell Biology", subject: "Biology" },
  organisation: { name: "Organisation", subject: "Biology" },
  "infection-and-response": { name: "Infection and Response", subject: "Biology" },
  bioenergetics: { name: "Bioenergetics", subject: "Biology" },
  "homeostasis-and-response": { name: "Homeostasis and Response", subject: "Biology" },
  "inheritance-variation-and-evolution": { name: "Inheritance, Variation and Evolution", subject: "Biology" },
  ecology: { name: "Ecology", subject: "Biology" },
  "atomic-structure-and-the-periodic-table": { name: "Atomic Structure and the Periodic Table", subject: "Chemistry" },
  "bonding-structure-and-properties-of-matter": { name: "Bonding and Structure", subject: "Chemistry" },
  "quantitative-chemistry": { name: "Quantitative Chemistry", subject: "Chemistry" },
  "chemical-changes": { name: "Chemical Changes", subject: "Chemistry" },
  "energy-changes": { name: "Energy Changes", subject: "Chemistry" },
  "organic-chemistry": { name: "Organic Chemistry", subject: "Chemistry" },
  "chemistry-of-the-atmosphere": { name: "Chemistry of the Atmosphere", subject: "Chemistry" },
  energy: { name: "Energy", subject: "Physics" },
  electricity: { name: "Electricity", subject: "Physics" },
  forces: { name: "Forces", subject: "Physics" },
  waves: { name: "Waves", subject: "Physics" },
  "particle-model-of-matter": { name: "Particle Model of Matter", subject: "Physics" },
  "atomic-structure": { name: "Atomic Structure", subject: "Physics" },
  "magnetism-and-electromagnetism": { name: "Magnetism and Electromagnetism", subject: "Physics" },
  "space-physics": { name: "Space Physics", subject: "Physics" },
};

/** Maps common student queries to relevant curriculum slugs */
const QUERY_TOPIC_MAP: Record<string, string[]> = {
  gravity: ["forces", "space-physics", "energy"],
  gravitational: ["forces", "space-physics"],
  weight: ["forces"],
  mass: ["forces"],
  force: ["forces"],
  motion: ["forces"],
  acceleration: ["forces"],
  momentum: ["forces"],
  newton: ["forces"],
  friction: ["forces"],
  photosynthesis: ["bioenergetics", "cell-biology", "ecology"],
  respiration: ["bioenergetics", "organisation"],
  cell: ["cell-biology"],
  mitosis: ["cell-biology"],
  osmosis: ["cell-biology"],
  diffusion: ["cell-biology"],
  enzyme: ["organisation"],
  digestion: ["organisation"],
  heart: ["organisation"],
  dna: ["inheritance-variation-and-evolution"],
  gene: ["inheritance-variation-and-evolution"],
  evolution: ["inheritance-variation-and-evolution"],
  vaccine: ["infection-and-response"],
  antibiotic: ["infection-and-response"],
  ecosystem: ["ecology"],
  food: ["ecology", "organisation"],
  atom: ["atomic-structure-and-the-periodic-table", "atomic-structure"],
  periodic: ["atomic-structure-and-the-periodic-table"],
  element: ["atomic-structure-and-the-periodic-table"],
  ionic: ["bonding-structure-and-properties-of-matter"],
  covalent: ["bonding-structure-and-properties-of-matter"],
  bonding: ["bonding-structure-and-properties-of-matter"],
  mole: ["quantitative-chemistry"],
  acid: ["chemical-changes"],
  electrolysis: ["chemical-changes"],
  exothermic: ["energy-changes"],
  rate: ["energy-changes"],
  alkane: ["organic-chemistry"],
  crude: ["organic-chemistry"],
  atmosphere: ["chemistry-of-the-atmosphere"],
  climate: ["chemistry-of-the-atmosphere"],
  current: ["electricity"],
  voltage: ["electricity"],
  resistance: ["electricity"],
  circuit: ["electricity"],
  ohm: ["electricity"],
  wave: ["waves"],
  frequency: ["waves"],
  wavelength: ["waves"],
  electromagnetic: ["waves"],
  light: ["waves"],
  sound: ["waves"],
  density: ["particle-model-of-matter"],
  heat: ["particle-model-of-matter", "energy"],
  temperature: ["particle-model-of-matter", "homeostasis-and-response"],
  radioactivity: ["atomic-structure"],
  half: ["atomic-structure"],
  isotope: ["atomic-structure", "atomic-structure-and-the-periodic-table"],
  magnet: ["magnetism-and-electromagnetism"],
  transformer: ["magnetism-and-electromagnetism"],
  solar: ["space-physics"],
  universe: ["space-physics"],
  star: ["space-physics"],
  hormone: ["homeostasis-and-response"],
  nervous: ["homeostasis-and-response"],
  homeostasis: ["homeostasis-and-response"],
};

const BUILTIN_EXPLANATIONS: Record<string, string> = {
  gravity: `## What is gravity?

**Gravity** is a non-contact force of attraction between any two objects that have mass. On Earth, gravity pulls objects towards the centre of the planet.

### Key points for GCSE

- **Weight** is the force of gravity on an object: **W = mg** (weight in newtons, mass in kg, g = 10 N/kg on Earth)
- **Mass** is the amount of matter in an object (kg) — it does not change with location
- **Weight** changes with gravitational field strength (you weigh less on the Moon because g is smaller)
- Gravity causes objects to fall with **acceleration** g ≈ 10 m/s² (ignoring air resistance)
- In space, gravity keeps planets in orbit around the Sun — it provides the **centripetal force**

### Real-world examples

- An apple falling from a tree
- You staying on the ground instead of floating away
- The Moon orbiting Earth
- Tides caused by the Moon's gravitational pull on oceans

### Common exam mistakes

- Confusing **mass** (kg) with **weight** (N)
- Forgetting to state g = 10 N/kg in calculations
- Saying "no gravity in space" — astronauts are in free-fall orbit, gravity is still acting

### Memory tip

**W = mg** — "Weight = Mass × Gravity"

### Try next

Revise **Forces** on Science Hub and practise F = ma and stopping distance calculations.`,

  photosynthesis: `## What is photosynthesis?

**Photosynthesis** is the process plants use to make glucose using light energy. It happens in **chloroplasts** which contain chlorophyll.

### Word equation

carbon dioxide + water → glucose + oxygen (in the presence of light and chlorophyll)

### Symbol equation

6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂

### Limiting factors

The rate is limited by whichever factor is in shortest supply:
- **Light intensity** — more light = faster rate (up to a point)
- **Carbon dioxide concentration**
- **Temperature** — enzymes work faster until ~45°C when they denature

### Why it matters

- Produces oxygen for animals to respire
- Removes CO₂ from the atmosphere
- Glucose is used for respiration, stored as starch, or built into cellulose

### Exam tip

Always mention **chlorophyll** and **chloroplasts** in your answer.`,

  osmosis: `## What is osmosis?

**Osmosis** is the diffusion of **water molecules** from a dilute solution to a more concentrated solution through a **partially permeable membrane**.

### Key differences

| Process | What moves | Energy needed? |
|---------|-----------|----------------|
| Diffusion | Any particles (gas/solute) | No |
| Osmosis | Water only | No |
| Active transport | Ions, glucose | Yes (from respiration) |

### Real examples

- Root hair cells absorbing water from soil
- Water entering/red leaving cells causing them to swell or shrink
- The potato cylinder practical — mass change in sugar solutions

### Exam tip

Explain osmosis in terms of **water molecules** moving, not just "water moves".`,

  electricity: `## Electricity — GCSE essentials

### Core equations

- **V = I × R** (Ohm's law) — voltage = current × resistance
- **P = I × V** — power in watts
- **Q = I × t** — charge in coulombs
- **E = P × t** — energy transferred

### Series circuits

- Same current everywhere
- Voltages add up: Vtotal = V₁ + V₂
- Resistances add: Rtotal = R₁ + R₂

### Parallel circuits

- Same voltage across each branch
- Currents add: Itotal = I₁ + I₂
- 1/Rtotal = 1/R₁ + 1/R₂

### Units

- Current (I) → amperes (A)
- Voltage (V) → volts (V)
- Resistance (R) → ohms (Ω)
- Power (P) → watts (W)`,

  atom: `## Atomic structure

Atoms contain:
- **Protons** — positive charge, in the nucleus, define the element (atomic number)
- **Neutrons** — no charge, in the nucleus
- **Electrons** — negative charge, in shells around the nucleus

### Key rules

- Atomic number = number of protons
- Mass number = protons + neutrons
- Neutrons = mass number − atomic number
- In a neutral atom: electrons = protons

### Isotopes

Same element, different number of neutrons — same chemical properties, different mass.

### History

Dalton → Thomson (plum pudding) → Rutherford (nuclear model) → Bohr (electron shells)`,
};

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 2);
}

function searchCurriculum(query: string): SearchHit[] {
  const tokens = tokenize(query);
  const slugScores = new Map<string, number>();

  for (const token of tokens) {
    if (QUERY_TOPIC_MAP[token]) {
      for (const slug of QUERY_TOPIC_MAP[token]) {
        slugScores.set(slug, (slugScores.get(slug) ?? 0) + 10);
      }
    }
  }

  for (const content of ALL_CONTENT) {
    let score = slugScores.get(content.slug) ?? 0;
    const higher = getHigherTierContent(content.slug, content);
    const searchable = [
      content.slug,
      content.overview,
      ...content.keyConcepts.map((c) => `${c.term} ${c.definition}`),
      ...content.sections.map((s) => `${s.heading} ${s.body}`),
      ...higher.higherConcepts.map((c) => `${c.term} ${c.definition}`),
      ...higher.higherSections.map((s) => `${s.heading} ${s.body}`),
    ].join(" ").toLowerCase();

    for (const token of tokens) {
      if (searchable.includes(token)) score += 2;
    }

    if (score > 0) {
      slugScores.set(content.slug, score);
    }
  }

  const hits: SearchHit[] = [];
  for (const content of ALL_CONTENT) {
    const score = slugScores.get(content.slug);
    if (!score) continue;
    const meta = SLUG_LABELS[content.slug] ?? { name: content.slug, subject: "Science" };
    hits.push({ score, slug: content.slug, topicName: meta.name, subject: meta.subject, content });
  }

  return hits.sort((a, b) => b.score - a.score);
}

function formatTopicExplanation(hit: SearchHit, query: string): string {
  const { content, topicName, subject, slug } = hit;
  const extras = TOPIC_EXTRAS[slug];
  const higher = getHigherTierContent(slug, content);
  const parts: string[] = [];
  const wantsHigher = /\bhigher\b|\bgrade\s*[789]\b|\badvanced\b|\bdetailed\b/i.test(query);

  parts.push(`## ${topicName} (${subject})`);
  parts.push(`\n${content.overview}\n`);

  const relevantConcepts = content.keyConcepts.filter((c) => {
    const text = `${c.term} ${c.definition}`.toLowerCase();
    return tokenize(query).some((t) => text.includes(t)) || tokenize(topicName).some((t) => text.includes(t));
  });

  const concepts = relevantConcepts.length >= 2 ? relevantConcepts : content.keyConcepts.slice(0, 6);

  parts.push(`### Key definitions\n`);
  for (const c of concepts) {
    parts.push(`**${c.term}** — ${c.definition}`);
  }

  if (higher.higherConcepts.length > 0) {
    const relevantHigher = higher.higherConcepts.filter((c) => {
      const text = `${c.term} ${c.definition}`.toLowerCase();
      return tokenize(query).some((t) => text.includes(t));
    });
    const higherConcepts = wantsHigher
      ? (relevantHigher.length >= 2 ? relevantHigher : higher.higherConcepts.slice(0, 5))
      : relevantHigher.slice(0, 3);

    if (higherConcepts.length > 0) {
      parts.push(`\n### Higher tier (grades 7–9)\n`);
      for (const c of higherConcepts) {
        parts.push(`**${c.term}** — ${c.definition}`);
      }
    }
  }

  if (content.sections.length > 0) {
    parts.push(`\n### Explanation\n`);
    for (const section of content.sections.slice(0, 2)) {
      parts.push(`**${section.heading}**\n${section.body}\n`);
    }
  }

  if (wantsHigher && higher.higherSections.length > 0) {
    parts.push(`\n### In depth\n`);
    for (const section of higher.higherSections.slice(0, 2)) {
      parts.push(`**${section.heading}**\n${section.body}\n`);
    }
  }

  if (content.equations?.length) {
    parts.push(`\n### Key equations\n`);
    for (const eq of content.equations) {
      parts.push(`- **${eq.label}:** ${eq.formula}${eq.unit ? ` (${eq.unit})` : ""}`);
    }
  }

  if (extras?.memoryTips?.length) {
    parts.push(`\n### Memory tips\n`);
    for (const tip of extras.memoryTips.slice(0, 2)) {
      parts.push(`- ${tip}`);
    }
  }

  if (extras?.funFacts?.length) {
    parts.push(`\n### Did you know?\n`);
    parts.push(extras.funFacts[0]);
  }

  const maths = getMathsQuestionsForTopic(slug, topicName);
  if (maths.length > 0 && tokenize(query).some((t) => ["calculate", "equation", "formula", "math", "maths", "work"].includes(t) || content.equations?.length)) {
    const m = maths[0];
    parts.push(`\n### Example calculation\n`);
    parts.push(`**${m.questionText}**\n`);
    parts.push(`Formula: ${m.formula}\n`);
    parts.push(`\`\`\`\n${m.solution}\n\`\`\``);
    parts.push(`Answer: **${m.correctAnswer}**`);
  }

  if (extras?.externalLinks?.length) {
    parts.push(`\n### Learn more\n`);
    parts.push(`- [${extras.externalLinks[0].title}](${extras.externalLinks[0].url})`);
  }

  if (content.examTips?.length) {
    parts.push(`\n### Exam tip\n`);
    parts.push(content.examTips[0]);
  }

  if (wantsHigher && higher.higherExamTips?.length) {
    parts.push(`\n### Higher tier exam tip\n`);
    parts.push(higher.higherExamTips[0]);
  }

  parts.push(`\n---\n*Revise this topic on Science Hub: GCSE → ${subject} → ${topicName}*`);

  return parts.join("\n");
}

function detectBuiltinKey(query: string): string | null {
  const lower = query.toLowerCase();
  for (const key of Object.keys(BUILTIN_EXPLANATIONS)) {
    if (lower.includes(key)) return key;
  }
  return null;
}

function handleRevisionPlan(context?: TutorContext): string {
  const weak = context?.weakAreas ?? ["Cell Biology", "Forces", "Atomic Structure"];
  const days = 7;
  const lines = [`## Your ${days}-Day GCSE Science Revision Plan\n`];

  for (let i = 0; i < days; i++) {
    const topic = weak[i % weak.length];
    lines.push(`### Day ${i + 1}: ${topic}`);
    lines.push(`1. Read key definitions on Science Hub (15 min)`);
    lines.push(`2. Study maths/calculation examples (10 min)`);
    lines.push(`3. Complete the 30-question topic quiz (20 min)`);
    lines.push(`4. Review wrong answers and re-read explanations (15 min)\n`);
  }

  lines.push(`**Tip:** Aim for 80%+ on quizzes before moving to the next topic.`);
  return lines.join("\n");
}

function handleGreeting(query: string): string | null {
  const lower = query.toLowerCase().trim();
  if (/^(hi|hello|hey|good morning|good afternoon|good evening)\b/.test(lower)) {
    return `Hello! I'm your Science Hub AI Tutor. I can explain any GCSE science topic in detail — try asking me about:

- **Physics:** gravity, forces, electricity, waves, energy
- **Biology:** cells, photosynthesis, genetics, ecology
- **Chemistry:** atoms, bonding, moles, acids, rates of reaction

Just ask a question like *"Explain gravity"* or *"What is osmosis?"* and I'll give you a full explanation with definitions, equations, and exam tips.`;
  }
  return null;
}

export function getLocalTutorResponse(query: string, context?: TutorContext): string {
  const trimmed = query.trim();
  if (!trimmed) return "Please ask me a science question and I'll explain it for you.";

  const greeting = handleGreeting(trimmed);
  if (greeting) return greeting;

  if (/revision plan|revise|study plan|weak area/i.test(trimmed)) {
    return handleRevisionPlan(context);
  }

  const builtinKey = detectBuiltinKey(trimmed);
  if (builtinKey && BUILTIN_EXPLANATIONS[builtinKey]) {
    const hits = searchCurriculum(trimmed);
    let response = BUILTIN_EXPLANATIONS[builtinKey];
    if (hits.length > 0 && hits[0].score >= 5) {
      response += `\n\n---\n\n### Related curriculum: ${hits[0].topicName}\n`;
      response += hits[0].content.keyConcepts
        .slice(0, 3)
        .map((c) => `**${c.term}** — ${c.definition}`)
        .join("\n\n");
    }
    return response;
  }

  const hits = searchCurriculum(trimmed);

  if (hits.length > 0) {
    return formatTopicExplanation(hits[0], trimmed);
  }

  const ks = context?.keyStage ?? "KS4";
  return `I'd be happy to help with "${trimmed}"!

I couldn't find an exact match in my curriculum database, but here's how to approach any ${ks} science question:

1. **Identify the topic** — Is this biology, chemistry, or physics?
2. **State the definition** — Use precise scientific terminology
3. **Explain the process** — Step by step, cause and effect
4. **Give an example** — Real-world application
5. **Practise** — Use the topic quizzes on Science Hub

Try rephrasing with a specific term, for example:
- "Explain photosynthesis"
- "What is the difference between mass and weight?"
- "How does osmosis work?"
- "Describe ionic bonding"

Browse **GCSE topics** on Science Hub for full definitions, diagrams, maths questions, and 30 practice quizzes per topic.`;
}
