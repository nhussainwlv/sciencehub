import type { KeyStage, ExamBoard } from "@prisma/client";

export interface SubtopicDef {
  name: string;
  slug: string;
  description: string;
}

export interface TopicDef {
  name: string;
  slug: string;
  description: string;
  subtopics: SubtopicDef[];
  examBoards?: ExamBoard[];
}

export interface SubjectDef {
  name: string;
  slug: string;
  description: string;
  icon: string;
  color: string;
  keyStage: KeyStage;
  topics: TopicDef[];
}

export const KS2_CURRICULUM: SubjectDef[] = [
  {
    name: "Working Scientifically",
    slug: "working-scientifically",
    description: "Develop scientific skills including questioning, observing, measuring, recording, and evaluating.",
    icon: "🔬",
    color: "#6366f1",
    keyStage: "KS2",
    topics: [
      {
        name: "Scientific Enquiry",
        slug: "scientific-enquiry",
        description: "Planning investigations, fair tests, and drawing conclusions.",
        subtopics: [
          { name: "Asking Questions", slug: "asking-questions", description: "Formulating testable scientific questions." },
          { name: "Planning Fair Tests", slug: "planning-fair-tests", description: "Identifying variables and controls." },
          { name: "Observing and Measuring", slug: "observing-measuring", description: "Using equipment accurately to collect data." },
          { name: "Recording Results", slug: "recording-results", description: "Tables, graphs, and data presentation." },
          { name: "Drawing Conclusions", slug: "drawing-conclusions", description: "Interpreting data and evaluating methods." },
        ],
      },
    ],
  },
  {
    name: "Living Things and Habitats",
    slug: "living-things-habitats",
    description: "Classification, life cycles, and habitats of living organisms.",
    icon: "🌿",
    color: "#22c55e",
    keyStage: "KS2",
    topics: [
      {
        name: "Classification",
        slug: "classification",
        description: "Grouping living things using classification keys.",
        subtopics: [
          { name: "Living vs Non-living", slug: "living-non-living", description: "Characteristics of living things." },
          { name: "Classification Keys", slug: "classification-keys", description: "Using keys to identify organisms." },
          { name: "Micro-organisms", slug: "micro-organisms", description: "Bacteria, viruses, and fungi." },
        ],
      },
      {
        name: "Habitats and Adaptation",
        slug: "habitats-adaptation",
        description: "How organisms are suited to their environment.",
        subtopics: [
          { name: "Local Habitats", slug: "local-habitats", description: "Woodland, pond, and garden ecosystems." },
          { name: "Food Chains", slug: "food-chains", description: "Producers, consumers, and predators." },
          { name: "Adaptations", slug: "adaptations", description: "Structural and behavioural adaptations." },
          { name: "Environmental Changes", slug: "environmental-changes", description: "Impact of change on habitats." },
        ],
      },
    ],
  },
  {
    name: "Animals Including Humans",
    slug: "animals-including-humans",
    description: "Nutrition, skeletons, muscles, and the digestive system.",
    icon: "🫀",
    color: "#ef4444",
    keyStage: "KS2",
    topics: [
      {
        name: "Nutrition",
        slug: "nutrition",
        description: "Balanced diets and food groups.",
        subtopics: [
          { name: "Food Groups", slug: "food-groups", description: "Carbohydrates, proteins, fats, vitamins." },
          { name: "Balanced Diet", slug: "balanced-diet", description: "Nutritional needs of humans." },
          { name: "Teeth", slug: "teeth", description: "Types of teeth and dental health." },
        ],
      },
      {
        name: "Skeleton and Muscles",
        slug: "skeleton-muscles",
        description: "Support, protection, and movement.",
        subtopics: [
          { name: "The Skeleton", slug: "the-skeleton", description: "Bones and their functions." },
          { name: "Muscles", slug: "muscles", description: "How muscles enable movement." },
          { name: "Joints", slug: "joints", description: "Types of joints and movement." },
        ],
      },
      {
        name: "Digestive System",
        slug: "digestive-system",
        description: "The journey of food through the body.",
        subtopics: [
          { name: "Digestive Organs", slug: "digestive-organs", description: "Mouth to intestines." },
          { name: "Enzymes and Absorption", slug: "enzymes-absorption", description: "Breaking down food and nutrient uptake." },
        ],
      },
      {
        name: "Circulatory System",
        slug: "circulatory-system",
        description: "Heart, blood vessels, and blood.",
        subtopics: [
          { name: "The Heart", slug: "the-heart", description: "Structure and function of the heart." },
          { name: "Blood Vessels", slug: "blood-vessels", description: "Arteries, veins, and capillaries." },
          { name: "Blood Components", slug: "blood-components", description: "Red cells, white cells, plasma, platelets." },
        ],
      },
    ],
  },
  {
    name: "Plants",
    slug: "plants",
    description: "Plant structure, reproduction, and life cycles.",
    icon: "🌱",
    color: "#84cc16",
    keyStage: "KS2",
    topics: [
      {
        name: "Plant Structure",
        slug: "plant-structure",
        description: "Roots, stems, leaves, and flowers.",
        subtopics: [
          { name: "Parts of a Plant", slug: "parts-of-plant", description: "Functions of each plant part." },
          { name: "Photosynthesis", slug: "photosynthesis", description: "How plants make food using light." },
          { name: "Water Transport", slug: "water-transport", description: "How water moves through plants." },
        ],
      },
      {
        name: "Plant Reproduction",
        slug: "plant-reproduction",
        description: "Life cycles of flowering plants.",
        subtopics: [
          { name: "Flower Structure", slug: "flower-structure", description: "Pollination and fertilisation." },
          { name: "Seed Dispersal", slug: "seed-dispersal", description: "Methods of seed dispersal." },
          { name: "Plant Life Cycles", slug: "plant-life-cycles", description: "Germination to flowering." },
        ],
      },
    ],
  },
  {
    name: "Rocks",
    slug: "rocks",
    description: "Types of rocks, fossils, and the rock cycle.",
    icon: "🪨",
    color: "#a16207",
    keyStage: "KS2",
    topics: [
      {
        name: "Types of Rocks",
        slug: "types-of-rocks",
        description: "Igneous, sedimentary, and metamorphic rocks.",
        subtopics: [
          { name: "Igneous Rocks", slug: "igneous-rocks", description: "Formed from cooled magma." },
          { name: "Sedimentary Rocks", slug: "sedimentary-rocks", description: "Layers of compressed sediment." },
          { name: "Metamorphic Rocks", slug: "metamorphic-rocks", description: "Changed by heat and pressure." },
        ],
      },
      {
        name: "Fossils and Soil",
        slug: "fossils-soil",
        description: "Fossil formation and soil composition.",
        subtopics: [
          { name: "Fossil Formation", slug: "fossil-formation", description: "How fossils are created." },
          { name: "Soil Composition", slug: "soil-composition", description: "Layers and components of soil." },
        ],
      },
    ],
  },
  {
    name: "Light",
    slug: "light",
    description: "How light travels, reflects, and forms shadows.",
    icon: "💡",
    color: "#f59e0b",
    keyStage: "KS2",
    topics: [
      {
        name: "Light and Shadows",
        slug: "light-shadows",
        description: "Sources of light and shadow formation.",
        subtopics: [
          { name: "Light Sources", slug: "light-sources", description: "Natural and artificial light." },
          { name: "Shadows", slug: "shadows", description: "How shadows form and change." },
          { name: "Reflection", slug: "reflection", description: "Light bouncing off surfaces." },
        ],
      },
      {
        name: "Light and Vision",
        slug: "light-vision",
        description: "How we see objects.",
        subtopics: [
          { name: "How We See", slug: "how-we-see", description: "Light entering the eye." },
          { name: "Mirrors", slug: "mirrors", description: "Reflection in plane mirrors." },
        ],
      },
    ],
  },
  {
    name: "Forces and Magnets",
    slug: "forces-magnets",
    description: "Forces, friction, gravity, and magnetism.",
    icon: "🧲",
    color: "#8b5cf6",
    keyStage: "KS2",
    topics: [
      {
        name: "Forces",
        slug: "forces",
        description: "Pushes, pulls, and their effects.",
        subtopics: [
          { name: "Types of Forces", slug: "types-of-forces", description: "Contact and non-contact forces." },
          { name: "Friction", slug: "friction", description: "Resistance to motion." },
          { name: "Gravity", slug: "gravity", description: "Weight and gravitational force." },
        ],
      },
      {
        name: "Magnets",
        slug: "magnets",
        description: "Magnetic materials and poles.",
        subtopics: [
          { name: "Magnetic Materials", slug: "magnetic-materials", description: "Which materials are magnetic." },
          { name: "Magnetic Poles", slug: "magnetic-poles", description: "Attraction and repulsion." },
          { name: "Magnetic Fields", slug: "magnetic-fields", description: "Patterns of magnetic force." },
        ],
      },
    ],
  },
  {
    name: "States of Matter",
    slug: "states-of-matter",
    description: "Solids, liquids, gases, and changes of state.",
    icon: "🧊",
    color: "#06b6d4",
    keyStage: "KS2",
    topics: [
      {
        name: "States of Matter",
        slug: "states",
        description: "Properties of solids, liquids, and gases.",
        subtopics: [
          { name: "Solids", slug: "solids", description: "Fixed shape and volume." },
          { name: "Liquids", slug: "liquids", description: "Fixed volume, no fixed shape." },
          { name: "Gases", slug: "gases", description: "No fixed shape or volume." },
        ],
      },
      {
        name: "Changes of State",
        slug: "changes-of-state",
        description: "Melting, freezing, evaporation, and condensation.",
        subtopics: [
          { name: "Melting and Freezing", slug: "melting-freezing", description: "Solid-liquid transitions." },
          { name: "Evaporation and Condensation", slug: "evaporation-condensation", description: "Liquid-gas transitions." },
          { name: "The Water Cycle", slug: "water-cycle", description: "Continuous movement of water." },
        ],
      },
    ],
  },
  {
    name: "Sound",
    slug: "sound",
    description: "How sound is made, travels, and is heard.",
    icon: "🔊",
    color: "#ec4899",
    keyStage: "KS2",
    topics: [
      {
        name: "Making Sound",
        slug: "making-sound",
        description: "Vibrations and sound sources.",
        subtopics: [
          { name: "Vibrations", slug: "vibrations", description: "How vibrations create sound." },
          { name: "Pitch", slug: "pitch", description: "High and low sounds." },
          { name: "Volume", slug: "volume", description: "Loud and quiet sounds." },
        ],
      },
      {
        name: "Sound Travel",
        slug: "sound-travel",
        description: "How sound moves through materials.",
        subtopics: [
          { name: "Through Solids, Liquids, Gases", slug: "sound-mediums", description: "Speed of sound in different materials." },
          { name: "The Ear", slug: "the-ear", description: "How we hear sound." },
        ],
      },
    ],
  },
  {
    name: "Electricity",
    slug: "electricity",
    description: "Simple circuits, conductors, and insulators.",
    icon: "⚡",
    color: "#eab308",
    keyStage: "KS2",
    topics: [
      {
        name: "Simple Circuits",
        slug: "simple-circuits",
        description: "Building and drawing circuit diagrams.",
        subtopics: [
          { name: "Circuit Components", slug: "circuit-components", description: "Cells, bulbs, switches, wires." },
          { name: "Series Circuits", slug: "series-circuits", description: "One path for current." },
          { name: "Circuit Symbols", slug: "circuit-symbols", description: "Standard circuit diagram symbols." },
        ],
      },
      {
        name: "Conductors and Insulators",
        slug: "conductors-insulators",
        description: "Materials that allow or block electricity.",
        subtopics: [
          { name: "Conductors", slug: "conductors", description: "Metals and electrical conduction." },
          { name: "Insulators", slug: "insulators", description: "Plastic, rubber, and safety." },
        ],
      },
    ],
  },
  {
    name: "Earth and Space",
    slug: "earth-space",
    description: "The Solar System, Earth, Moon, and day/night.",
    icon: "🌍",
    color: "#3b82f6",
    keyStage: "KS2",
    topics: [
      {
        name: "The Solar System",
        slug: "solar-system",
        description: "Planets, Sun, and Moon.",
        subtopics: [
          { name: "The Sun", slug: "the-sun", description: "Our star and its importance." },
          { name: "Planets", slug: "planets", description: "The eight planets and their orbits." },
          { name: "The Moon", slug: "the-moon", description: "Phases and lunar cycle." },
        ],
      },
      {
        name: "Earth's Movement",
        slug: "earth-movement",
        description: "Rotation, revolution, day and night, seasons.",
        subtopics: [
          { name: "Day and Night", slug: "day-night", description: "Earth's rotation." },
          { name: "Seasons", slug: "seasons", description: "Earth's tilt and orbit." },
        ],
      },
    ],
  },
  {
    name: "Evolution and Inheritance",
    slug: "evolution-inheritance",
    description: "Variation, adaptation, and evolution over time.",
    icon: "🦕",
    color: "#14b8a6",
    keyStage: "KS2",
    topics: [
      {
        name: "Inheritance",
        slug: "inheritance",
        description: "Characteristics passed from parents.",
        subtopics: [
          { name: "Variation", slug: "variation", description: "Differences within species." },
          { name: "Inherited Characteristics", slug: "inherited-characteristics", description: "Traits from parents." },
        ],
      },
      {
        name: "Evolution",
        slug: "evolution",
        description: "How species change over time.",
        subtopics: [
          { name: "Fossil Evidence", slug: "fossil-evidence", description: "What fossils tell us about the past." },
          { name: "Adaptation Over Time", slug: "adaptation-over-time", description: "Survival of the fittest." },
        ],
      },
    ],
  },
  {
    name: "Properties and Changes of Materials",
    slug: "properties-materials",
    description: "Material properties, dissolving, and irreversible changes.",
    icon: "🧪",
    color: "#f97316",
    keyStage: "KS2",
    topics: [
      {
        name: "Material Properties",
        slug: "material-properties",
        description: "Hardness, flexibility, transparency, conductivity.",
        subtopics: [
          { name: "Physical Properties", slug: "physical-properties", description: "Observable material properties." },
          { name: "Comparing Materials", slug: "comparing-materials", description: "Choosing materials for purpose." },
        ],
      },
      {
        name: "Changes to Materials",
        slug: "changes-materials",
        description: "Reversible and irreversible changes.",
        subtopics: [
          { name: "Dissolving", slug: "dissolving", description: "Soluble and insoluble substances." },
          { name: "Reversible Changes", slug: "reversible-changes", description: "Melting, freezing, dissolving." },
          { name: "Irreversible Changes", slug: "irreversible-changes", description: "Burning, rusting, cooking." },
        ],
      },
    ],
  },
];
