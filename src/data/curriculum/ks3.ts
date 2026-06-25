import type { SubjectDef } from "./ks2";

export const KS3_CURRICULUM: SubjectDef[] = [
  {
    name: "Biology",
    slug: "biology",
    description: "Cells, organisms, ecosystems, and health.",
    icon: "🧬",
    color: "#22c55e",
    keyStage: "KS3",
    topics: [
      {
        name: "Cells",
        slug: "cells",
        description: "Cell structure, specialised cells, and microscopy.",
        subtopics: [
          { name: "Animal and Plant Cells", slug: "animal-plant-cells", description: "Organelles and their functions." },
          { name: "Specialised Cells", slug: "specialised-cells", description: "Adaptation of cells to function." },
          { name: "Microscopy", slug: "microscopy", description: "Using microscopes and magnification." },
          { name: "Cell Division", slug: "cell-division", description: "Mitosis and growth." },
        ],
      },
      {
        name: "Organisation",
        slug: "organisation",
        description: "Tissues, organs, organ systems.",
        subtopics: [
          { name: "Levels of Organisation", slug: "levels-organisation", description: "Cells to organ systems." },
          { name: "Digestive System", slug: "digestive-system", description: "Enzymes and absorption." },
          { name: "Circulatory System", slug: "circulatory-system", description: "Heart, blood, vessels." },
          { name: "Gas Exchange", slug: "gas-exchange", description: "Lungs and breathing." },
        ],
      },
      {
        name: "Nutrition and Digestion",
        slug: "nutrition-digestion",
        description: "Balanced diet, enzymes, and digestion.",
        subtopics: [
          { name: "Nutrients", slug: "nutrients", description: "Carbohydrates, proteins, lipids, vitamins." },
          { name: "Digestive Enzymes", slug: "digestive-enzymes", description: "Breaking down food molecules." },
          { name: "BMI and Health", slug: "bmi-health", description: "Diet, exercise, and wellbeing." },
        ],
      },
      {
        name: "Respiration",
        slug: "respiration",
        description: "Aerobic and anaerobic respiration.",
        subtopics: [
          { name: "Aerobic Respiration", slug: "aerobic-respiration", description: "Glucose and oxygen producing energy." },
          { name: "Anaerobic Respiration", slug: "anaerobic-respiration", description: "Respiration without oxygen." },
          { name: "Exercise and Recovery", slug: "exercise-recovery", description: "Oxygen debt and fitness." },
        ],
      },
      {
        name: "Reproduction",
        slug: "reproduction",
        description: "Sexual and asexual reproduction in plants and animals.",
        subtopics: [
          { name: "Human Reproduction", slug: "human-reproduction", description: "Reproductive systems and development." },
          { name: "Plant Reproduction", slug: "plant-reproduction", description: "Pollination, fertilisation, dispersal." },
          { name: "Menstrual Cycle", slug: "menstrual-cycle", description: "Hormones and the menstrual cycle." },
        ],
      },
      {
        name: "Genetics",
        slug: "genetics",
        description: "Chromosomes, genes, and inheritance.",
        subtopics: [
          { name: "DNA and Genes", slug: "dna-genes", description: "The genetic code." },
          { name: "Inheritance", slug: "inheritance", description: "Dominant and recessive alleles." },
          { name: "Variation", slug: "variation", description: "Genetic and environmental variation." },
        ],
      },
      {
        name: "Ecosystems",
        slug: "ecosystems",
        description: "Food webs, cycles, and human impact.",
        subtopics: [
          { name: "Food Webs", slug: "food-webs", description: "Interconnected food chains." },
          { name: "Carbon and Water Cycles", slug: "carbon-water-cycles", description: "Nutrient cycling in ecosystems." },
          { name: "Human Impact", slug: "human-impact", description: "Deforestation, pollution, conservation." },
        ],
      },
      {
        name: "Health and Disease",
        slug: "health-disease",
        description: "Pathogens, immunity, and disease prevention.",
        subtopics: [
          { name: "Pathogens", slug: "pathogens", description: "Bacteria, viruses, fungi, protists." },
          { name: "Immune System", slug: "immune-system", description: "White blood cells and antibodies." },
          { name: "Vaccination", slug: "vaccination", description: "How vaccines protect us." },
          { name: "Lifestyle and Disease", slug: "lifestyle-disease", description: "Smoking, diet, and exercise." },
        ],
      },
    ],
  },
  {
    name: "Chemistry",
    slug: "chemistry",
    description: "Particles, reactions, and the periodic table.",
    icon: "⚗️",
    color: "#3b82f6",
    keyStage: "KS3",
    topics: [
      {
        name: "Particles",
        slug: "particles",
        description: "Particle model of solids, liquids, and gases.",
        subtopics: [
          { name: "Particle Model", slug: "particle-model", description: "Arrangement and movement of particles." },
          { name: "Changes of State", slug: "changes-of-state", description: "Heating and cooling curves." },
          { name: "Diffusion", slug: "diffusion", description: "Movement of particles from high to low concentration." },
        ],
      },
      {
        name: "Elements, Compounds and Mixtures",
        slug: "elements-compounds-mixtures",
        description: "Pure substances and separation techniques.",
        subtopics: [
          { name: "Elements and Compounds", slug: "elements-compounds", description: "Atoms, molecules, and formulae." },
          { name: "Mixtures", slug: "mixtures", description: "Solutions, suspensions, and colloids." },
          { name: "Separation Techniques", slug: "separation-techniques", description: "Filtration, distillation, chromatography." },
        ],
      },
      {
        name: "Atomic Structure",
        slug: "atomic-structure",
        description: "Atoms, elements, and the periodic table.",
        subtopics: [
          { name: "Structure of the Atom", slug: "structure-atom", description: "Protons, neutrons, electrons." },
          { name: "Electronic Structure", slug: "electronic-structure", description: "Electron shells and configuration." },
          { name: "Isotopes", slug: "isotopes", description: "Atoms with different numbers of neutrons." },
        ],
      },
      {
        name: "The Periodic Table",
        slug: "periodic-table",
        description: "Groups, periods, and trends.",
        subtopics: [
          { name: "Groups and Periods", slug: "groups-periods", description: "Organisation of elements." },
          { name: "Group 1 Metals", slug: "group-1-metals", description: "Alkali metals and their reactions." },
          { name: "Group 7 Halogens", slug: "group-7-halogens", description: "Halogens and their properties." },
          { name: "Noble Gases", slug: "noble-gases", description: "Unreactive Group 0 elements." },
        ],
      },
      {
        name: "Chemical Reactions",
        slug: "chemical-reactions",
        description: "Word equations, energy changes, and rates.",
        subtopics: [
          { name: "Word Equations", slug: "word-equations", description: "Describing chemical reactions." },
          { name: "Combustion", slug: "combustion", description: "Burning fuels and oxidation." },
          { name: "Thermal Decomposition", slug: "thermal-decomposition", description: "Breaking down with heat." },
          { name: "Oxidation and Reduction", slug: "oxidation-reduction", description: "OIL RIG and redox reactions." },
        ],
      },
      {
        name: "Acids and Alkalis",
        slug: "acids-alkalis",
        description: "pH scale, neutralisation, and indicators.",
        subtopics: [
          { name: "The pH Scale", slug: "ph-scale", description: "Acids, alkalis, and neutral substances." },
          { name: "Neutralisation", slug: "neutralisation", description: "Acid + alkali reactions." },
          { name: "Indicators", slug: "indicators", description: "Litmus, universal indicator, phenolphthalein." },
        ],
      },
      {
        name: "Metals",
        slug: "metals",
        description: "Properties, reactivity, and extraction.",
        subtopics: [
          { name: "Properties of Metals", slug: "properties-metals", description: "Conductivity, malleability, lustre." },
          { name: "Reactivity Series", slug: "reactivity-series", description: "Comparing metal reactivity." },
          { name: "Metal Extraction", slug: "metal-extraction", description: "Mining and reduction." },
        ],
      },
      {
        name: "Energy Changes",
        slug: "energy-changes",
        description: "Exothermic and endothermic reactions.",
        subtopics: [
          { name: "Exothermic Reactions", slug: "exothermic", description: "Reactions that release energy." },
          { name: "Endothermic Reactions", slug: "endothermic", description: "Reactions that absorb energy." },
          { name: "Energy in Everyday Life", slug: "energy-everyday", description: "Hand warmers and cold packs." },
        ],
      },
      {
        name: "Earth Resources",
        slug: "earth-resources",
        description: "Rocks, fuels, and sustainability.",
        subtopics: [
          { name: "The Rock Cycle", slug: "rock-cycle", description: "Formation and transformation of rocks." },
          { name: "Fossil Fuels", slug: "fossil-fuels", description: "Coal, oil, and natural gas." },
          { name: "Sustainability", slug: "sustainability", description: "Renewable resources and recycling." },
        ],
      },
    ],
  },
  {
    name: "Physics",
    slug: "physics",
    description: "Forces, energy, waves, and space.",
    icon: "⚛️",
    color: "#8b5cf6",
    keyStage: "KS3",
    topics: [
      {
        name: "Forces",
        slug: "forces",
        description: "Contact and non-contact forces, resultant forces.",
        subtopics: [
          { name: "Types of Forces", slug: "types-forces", description: "Gravity, friction, air resistance, magnetism." },
          { name: "Resultant Forces", slug: "resultant-forces", description: "Balanced and unbalanced forces." },
          { name: "Force Diagrams", slug: "force-diagrams", description: "Drawing and interpreting force arrows." },
        ],
      },
      {
        name: "Motion",
        slug: "motion",
        description: "Speed, distance-time graphs, acceleration.",
        subtopics: [
          { name: "Speed and Distance", slug: "speed-distance", description: "Calculating speed." },
          { name: "Distance-Time Graphs", slug: "distance-time-graphs", description: "Interpreting motion graphs." },
          { name: "Acceleration", slug: "acceleration", description: "Changing velocity." },
        ],
      },
      {
        name: "Pressure",
        slug: "pressure",
        description: "Pressure in fluids and on surfaces.",
        subtopics: [
          { name: "Pressure in Solids", slug: "pressure-solids", description: "Force over area." },
          { name: "Pressure in Liquids", slug: "pressure-liquids", description: "Hydrostatic pressure." },
          { name: "Atmospheric Pressure", slug: "atmospheric-pressure", description: "Air pressure and its effects." },
        ],
      },
      {
        name: "Energy",
        slug: "energy",
        description: "Energy stores, transfers, and conservation.",
        subtopics: [
          { name: "Energy Stores", slug: "energy-stores", description: "Kinetic, gravitational, elastic, thermal." },
          { name: "Energy Transfers", slug: "energy-transfers", description: "Mechanical, electrical, heating." },
          { name: "Conservation of Energy", slug: "conservation-energy", description: "Energy cannot be created or destroyed." },
          { name: "Efficiency", slug: "efficiency", description: "Useful energy output vs input." },
        ],
      },
      {
        name: "Electricity",
        slug: "electricity",
        description: "Current, voltage, resistance, and circuits.",
        subtopics: [
          { name: "Current and Voltage", slug: "current-voltage", description: "Charge flow and potential difference." },
          { name: "Resistance", slug: "resistance", description: "Opposition to current flow." },
          { name: "Series and Parallel", slug: "series-parallel", description: "Circuit arrangements." },
          { name: "Ohm's Law", slug: "ohms-law", description: "V = IR relationship." },
        ],
      },
      {
        name: "Magnetism",
        slug: "magnetism",
        description: "Magnetic fields, electromagnets, and motors.",
        subtopics: [
          { name: "Magnetic Fields", slug: "magnetic-fields", description: "Field lines and patterns." },
          { name: "Electromagnets", slug: "electromagnets", description: "Current-carrying coils." },
          { name: "The Motor Effect", slug: "motor-effect", description: "Force on current in magnetic field." },
        ],
      },
      {
        name: "Waves",
        slug: "waves",
        description: "Properties of waves and the electromagnetic spectrum.",
        subtopics: [
          { name: "Wave Properties", slug: "wave-properties", description: "Amplitude, wavelength, frequency." },
          { name: "Transverse and Longitudinal", slug: "transverse-longitudinal", description: "Types of waves." },
          { name: "Electromagnetic Spectrum", slug: "em-spectrum", description: "Radio to gamma rays." },
        ],
      },
      {
        name: "Light",
        slug: "light",
        description: "Reflection, refraction, and lenses.",
        subtopics: [
          { name: "Reflection", slug: "reflection", description: "Law of reflection." },
          { name: "Refraction", slug: "refraction", description: "Light bending at boundaries." },
          { name: "Lenses", slug: "lenses", description: "Converging and diverging lenses." },
          { name: "Colour", slug: "colour", description: "Absorption and reflection of light." },
        ],
      },
      {
        name: "Sound",
        slug: "sound",
        description: "Sound waves, hearing, and ultrasound.",
        subtopics: [
          { name: "Sound Waves", slug: "sound-waves", description: "Longitudinal vibrations." },
          { name: "Hearing", slug: "hearing", description: "Structure and function of the ear." },
          { name: "Ultrasound", slug: "ultrasound", description: "Uses of high-frequency sound." },
        ],
      },
      {
        name: "Space",
        slug: "space",
        description: "The Solar System, stars, and the universe.",
        subtopics: [
          { name: "The Solar System", slug: "solar-system", description: "Planets, moons, and orbits." },
          { name: "Stars and Galaxies", slug: "stars-galaxies", description: "Life cycle of stars." },
          { name: "Gravity in Space", slug: "gravity-space", description: "Orbital motion and weightlessness." },
        ],
      },
    ],
  },
];
