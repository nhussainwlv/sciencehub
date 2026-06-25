import type { ExamBoard } from "@prisma/client";
import type { SubjectDef } from "./ks2";

const BIOLOGY_TOPICS = [
  {
    name: "Cell Biology",
    slug: "cell-biology",
    description: "Cell structure, division, transport, and microscopy.",
    subtopics: [
      { name: "Eukaryotes and Prokaryotes", slug: "eukaryotes-prokaryotes", description: "Animal, plant, and bacterial cells." },
      { name: "Microscopy", slug: "microscopy", description: "Magnification and resolution." },
      { name: "Cell Specialisation", slug: "cell-specialisation", description: "Specialised cells and differentiation." },
      { name: "Cell Division", slug: "cell-division", description: "Mitosis and the cell cycle." },
      { name: "Transport in Cells", slug: "transport-cells", description: "Diffusion, osmosis, active transport." },
    ],
  },
  {
    name: "Organisation",
    slug: "organisation",
    description: "Digestive system, heart, blood, and plant organisation.",
    subtopics: [
      { name: "Digestive System", slug: "digestive-system", description: "Enzymes, bile, and absorption." },
      { name: "The Heart and Blood", slug: "heart-blood", description: "Circulatory system and blood components." },
      { name: "Coronary Heart Disease", slug: "coronary-heart-disease", description: "Causes, treatment, and prevention." },
      { name: "Plant Organisation", slug: "plant-organisation", description: "Roots, stems, leaves, transpiration." },
    ],
  },
  {
    name: "Infection and Response",
    slug: "infection-response",
    description: "Pathogens, disease, immunity, and drugs.",
    subtopics: [
      { name: "Communicable Diseases", slug: "communicable-diseases", description: "Viruses, bacteria, fungi, protists." },
      { name: "Human Defence Systems", slug: "defence-systems", description: "Skin, white blood cells, antibodies." },
      { name: "Vaccination", slug: "vaccination", description: "Herd immunity and vaccine development." },
      { name: "Antibiotics and Painkillers", slug: "antibiotics-painkillers", description: "Drug development and antibiotic resistance." },
      { name: "Monoclonal Antibodies", slug: "monoclonal-antibodies", description: "Production and uses." },
    ],
  },
  {
    name: "Bioenergetics",
    slug: "bioenergetics",
    description: "Photosynthesis and respiration.",
    subtopics: [
      { name: "Photosynthesis", slug: "photosynthesis", description: "The photosynthesis equation and limiting factors." },
      { name: "Respiration", slug: "respiration", description: "Aerobic and anaerobic respiration." },
      { name: "Metabolism", slug: "metabolism", description: "Sum of all reactions in a cell." },
    ],
  },
  {
    name: "Homeostasis and Response",
    slug: "homeostasis-response",
    description: "Nervous system, hormones, and control.",
    subtopics: [
      { name: "Homeostasis", slug: "homeostasis", description: "Maintaining internal conditions." },
      { name: "The Nervous System", slug: "nervous-system", description: "Reflexes, synapses, receptors." },
      { name: "Hormones", slug: "hormones", description: "Endocrine system and control." },
      { name: "Diabetes", slug: "diabetes", description: "Type 1 and Type 2 diabetes." },
    ],
  },
  {
    name: "Inheritance, Variation and Evolution",
    slug: "inheritance-evolution",
    description: "DNA, genetics, evolution, and classification.",
    subtopics: [
      { name: "DNA and the Genome", slug: "dna-genome", description: "Structure of DNA and genes." },
      { name: "Genetic Inheritance", slug: "genetic-inheritance", description: "Punnett squares and family trees." },
      { name: "Variation and Evolution", slug: "variation-evolution", description: "Natural selection and speciation." },
      { name: "Classification", slug: "classification", description: "The three-domain system." },
    ],
  },
  {
    name: "Ecology",
    slug: "ecology",
    description: "Ecosystems, cycles, biodiversity, and human impact.",
    subtopics: [
      { name: "Ecosystems", slug: "ecosystems", description: "Abiotic and biotic factors." },
      { name: "Cycles and Feeding Relationships", slug: "cycles-feeding", description: "Carbon, water, nitrogen cycles." },
      { name: "Biodiversity", slug: "biodiversity", description: "Sampling techniques and conservation." },
      { name: "Human Impact on the Environment", slug: "human-impact", description: "Deforestation, global warming, pollution." },
    ],
  },
];

const CHEMISTRY_TOPICS = [
  {
    name: "Atomic Structure and the Periodic Table",
    slug: "atomic-structure",
    description: "Atoms, isotopes, electronic structure, and periodic trends.",
    subtopics: [
      { name: "Atoms and Elements", slug: "atoms-elements", description: "Protons, neutrons, electrons, atomic number." },
      { name: "Electronic Structure", slug: "electronic-structure", description: "Shells, groups, and periods." },
      { name: "Isotopes", slug: "isotopes", description: "Relative atomic mass calculations." },
      { name: "Development of the Periodic Table", slug: "periodic-table-development", description: "Mendeleev and modern periodic table." },
    ],
  },
  {
    name: "Bonding, Structure and Properties",
    slug: "bonding-structure",
    description: "Ionic, covalent, and metallic bonding.",
    subtopics: [
      { name: "Ionic Bonding", slug: "ionic-bonding", description: "Transfer of electrons and ionic lattices." },
      { name: "Covalent Bonding", slug: "covalent-bonding", description: "Sharing electrons and simple molecules." },
      { name: "Metallic Bonding", slug: "metallic-bonding", description: "Delocalised electrons and properties." },
      { name: "States of Matter", slug: "states-matter", description: "Properties of ionic and covalent compounds." },
    ],
  },
  {
    name: "Quantitative Chemistry",
    slug: "quantitative-chemistry",
    description: "Relative formula mass, moles, and calculations.",
    subtopics: [
      { name: "Relative Formula Mass", slug: "relative-formula-mass", description: "Calculating Mr from periodic table." },
      { name: "The Mole", slug: "the-mole", description: "Avogadro's number and mole calculations." },
      { name: "Conservation of Mass", slug: "conservation-mass", description: "Balanced equations and reacting masses." },
      { name: "Concentration", slug: "concentration", description: "Moles per dm³ calculations." },
    ],
  },
  {
    name: "Chemical Changes",
    slug: "chemical-changes",
    description: "Reactivity, electrolysis, and acids.",
    subtopics: [
      { name: "Reactivity of Metals", slug: "reactivity-metals", description: "Displacement reactions and extraction." },
      { name: "Acids and Neutralisation", slug: "acids-neutralisation", description: "pH, titrations, and salts." },
      { name: "Electrolysis", slug: "electrolysis", description: "Electrolysis of molten and aqueous solutions." },
    ],
  },
  {
    name: "Energy Changes",
    slug: "energy-changes",
    description: "Exothermic, endothermic, and bond energies.",
    subtopics: [
      { name: "Exothermic and Endothermic", slug: "exo-endo", description: "Energy level diagrams." },
      { name: "Bond Energies", slug: "bond-energies", description: "Calculating energy changes." },
      { name: "Cells and Fuel Cells", slug: "cells-fuel-cells", description: "Batteries and hydrogen fuel cells." },
    ],
  },
  {
    name: "Rate and Extent of Chemical Change",
    slug: "rates-reaction",
    description: "Rates of reaction and equilibrium.",
    subtopics: [
      { name: "Rate of Reaction", slug: "rate-reaction", description: "Factors affecting rate." },
      { name: "Reversible Reactions", slug: "reversible-reactions", description: "Dynamic equilibrium." },
      { name: "Le Chatelier's Principle", slug: "le-chatelier", description: "Effect of conditions on equilibrium." },
    ],
  },
  {
    name: "Organic Chemistry",
    slug: "organic-chemistry",
    description: "Crude oil, hydrocarbons, and polymers.",
    subtopics: [
      { name: "Crude Oil and Fractional Distillation", slug: "crude-oil", description: "Hydrocarbons and uses of fractions." },
      { name: "Alkanes and Alkenes", slug: "alkanes-alkenes", description: "Saturated and unsaturated hydrocarbons." },
      { name: "Polymers", slug: "polymers", description: "Addition and condensation polymerisation." },
    ],
  },
  {
    name: "Chemical Analysis",
    slug: "chemical-analysis",
    description: "Purity, chromatography, and ion tests.",
    subtopics: [
      { name: "Purity and Formulations", slug: "purity-formulations", description: "Pure substances vs mixtures." },
      { name: "Chromatography", slug: "chromatography", description: "Rf values and separation." },
      { name: "Test for Ions", slug: "test-ions", description: "Flame tests and precipitate tests." },
    ],
  },
  {
    name: "Chemistry of the Atmosphere",
    slug: "atmosphere",
    description: "Earth's atmosphere, greenhouse gases, and pollution.",
    subtopics: [
      { name: "Evolution of the Atmosphere", slug: "atmosphere-evolution", description: "How Earth's atmosphere formed." },
      { name: "Greenhouse Gases", slug: "greenhouse-gases", description: "Climate change and carbon footprint." },
      { name: "Air Pollution", slug: "air-pollution", description: "Carbon monoxide, sulfur dioxide, particulates." },
    ],
  },
  {
    name: "Using Resources",
    slug: "using-resources",
    description: "Sustainability, water treatment, and life cycle assessment.",
    subtopics: [
      { name: "Sustainable Development", slug: "sustainable-development", description: "Finite resources and recycling." },
      { name: "Water Treatment", slug: "water-treatment", description: "Potable water and wastewater." },
      { name: "Life Cycle Assessment", slug: "life-cycle-assessment", description: "Environmental impact of products." },
    ],
  },
];

const PHYSICS_TOPICS = [
  {
    name: "Energy",
    slug: "energy",
    description: "Energy stores, transfers, efficiency, and resources.",
    subtopics: [
      { name: "Energy Stores and Transfers", slug: "energy-stores-transfers", description: "Kinetic, gravitational, elastic, thermal." },
      { name: "Conservation of Energy", slug: "conservation-energy", description: "Energy cannot be created or destroyed." },
      { name: "Efficiency", slug: "efficiency", description: "Calculating efficiency of devices." },
      { name: "Energy Resources", slug: "energy-resources", description: "Renewable and non-renewable sources." },
    ],
  },
  {
    name: "Electricity",
    slug: "electricity",
    description: "Circuits, resistance, power, and the national grid.",
    subtopics: [
      { name: "Current, Potential Difference, Resistance", slug: "current-pd-resistance", description: "V = IR and circuit calculations." },
      { name: "Series and Parallel Circuits", slug: "series-parallel", description: "Current and voltage rules." },
      { name: "Electrical Power and Energy", slug: "power-energy", description: "P = IV and E = Pt." },
      { name: "The National Grid", slug: "national-grid", description: "Step-up and step-down transformers." },
    ],
  },
  {
    name: "Particle Model of Matter",
    slug: "particle-model",
    description: "Density, states of matter, and internal energy.",
    subtopics: [
      { name: "Density", slug: "density", description: "ρ = m/V calculations." },
      { name: "Changes of State", slug: "changes-state", description: "Specific heat capacity and latent heat." },
      { name: "Gas Pressure", slug: "gas-pressure", description: "Particle model of gases." },
    ],
  },
  {
    name: "Atomic Structure",
    slug: "atomic-structure-physics",
    description: "Radioactivity, nuclear equations, and hazards.",
    subtopics: [
      { name: "Structure of the Atom", slug: "structure-atom", description: "Nucleus, electrons, isotopes." },
      { name: "Types of Radiation", slug: "types-radiation", description: "Alpha, beta, gamma properties." },
      { name: "Nuclear Equations", slug: "nuclear-equations", description: "Decay and half-life." },
      { name: "Uses and Hazards", slug: "uses-hazards", description: "Medical uses and safety precautions." },
    ],
  },
  {
    name: "Forces",
    slug: "forces",
    description: "Scalars, vectors, motion, and Newton's laws.",
    subtopics: [
      { name: "Scalars and Vectors", slug: "scalars-vectors", description: "Distance, displacement, speed, velocity." },
      { name: "Newton's Laws", slug: "newtons-laws", description: "F = ma and action-reaction pairs." },
      { name: "Stopping Distances", slug: "stopping-distances", description: "Thinking and braking distance." },
      { name: "Moments", slug: "moments", description: "Levers and gears." },
    ],
  },
  {
    name: "Waves",
    slug: "waves",
    description: "Wave properties, EM spectrum, and optics.",
    subtopics: [
      { name: "Wave Properties", slug: "wave-properties", description: "Frequency, wavelength, amplitude, period." },
      { name: "Electromagnetic Spectrum", slug: "em-spectrum", description: "Uses and dangers of EM radiation." },
      { name: "Reflection and Refraction", slug: "reflection-refraction", description: "Light and sound waves." },
      { name: "Lenses", slug: "lenses", description: "Ray diagrams and magnification." },
    ],
  },
  {
    name: "Magnetism and Electromagnetism",
    slug: "magnetism-electromagnetism",
    description: "Magnetic fields, motors, generators, and transformers.",
    subtopics: [
      { name: "Permanent and Induced Magnetism", slug: "magnetism", description: "Magnetic fields and forces." },
      { name: "The Motor Effect", slug: "motor-effect", description: "F = BIL and electric motors." },
      { name: "Electromagnetic Induction", slug: "electromagnetic-induction", description: "Generators and the dynamo effect." },
      { name: "Transformers", slug: "transformers", description: "Step-up and step-down transformers." },
    ],
  },
  {
    name: "Space Physics",
    slug: "space-physics",
    description: "Solar System, life cycle of stars, and orbits.",
    subtopics: [
      { name: "The Solar System", slug: "solar-system", description: "Planets, moons, artificial satellites." },
      { name: "Life Cycle of Stars", slug: "life-cycle-stars", description: "Nebula to black hole." },
      { name: "Orbital Motion", slug: "orbital-motion", description: "Gravity and orbital speed." },
      { name: "Red Shift", slug: "red-shift", description: "Evidence for the Big Bang." },
    ],
  },
];

function withExamBoards(topics: typeof BIOLOGY_TOPICS, boards: ExamBoard[]) {
  return topics.map((t) => ({ ...t, examBoards: boards }));
}

export const KS4_CURRICULUM: SubjectDef[] = [
  {
    name: "GCSE Biology",
    slug: "gcse-biology",
    description: "Complete GCSE Biology curriculum aligned to AQA, Edexcel, and OCR.",
    icon: "🧬",
    color: "#22c55e",
    keyStage: "KS4",
    topics: withExamBoards(BIOLOGY_TOPICS, ["AQA", "EDEXCEL", "OCR"]),
  },
  {
    name: "GCSE Chemistry",
    slug: "gcse-chemistry",
    description: "Complete GCSE Chemistry curriculum aligned to AQA, Edexcel, and OCR.",
    icon: "⚗️",
    color: "#3b82f6",
    keyStage: "KS4",
    topics: withExamBoards(CHEMISTRY_TOPICS, ["AQA", "EDEXCEL", "OCR"]),
  },
  {
    name: "GCSE Physics",
    slug: "gcse-physics",
    description: "Complete GCSE Physics curriculum aligned to AQA, Edexcel, and OCR.",
    icon: "⚛️",
    color: "#8b5cf6",
    keyStage: "KS4",
    topics: withExamBoards(PHYSICS_TOPICS, ["AQA", "EDEXCEL", "OCR"]),
  },
];

export const EXAM_BOARD_SPECS: Record<ExamBoard, { name: string; biology: string; chemistry: string; physics: string }> = {
  AQA: {
    name: "AQA",
    biology: "8461",
    chemistry: "8462",
    physics: "8463",
  },
  EDEXCEL: {
    name: "Edexcel",
    biology: "1BI0",
    chemistry: "1CH0",
    physics: "1PH0",
  },
  OCR: {
    name: "OCR Gateway",
    biology: "J247",
    chemistry: "J248",
    physics: "J249",
  },
  NONE: {
    name: "National Curriculum",
    biology: "",
    chemistry: "",
    physics: "",
  },
};

export const GCSE_GRADE_BOUNDARIES = {
  FOUNDATION: { "5": 77, "4": 62, "3": 47, "2": 32, "1": 17 },
  HIGHER: { "9": 78, "8": 68, "7": 58, "6": 48, "5": 38, "4": 28 },
};
