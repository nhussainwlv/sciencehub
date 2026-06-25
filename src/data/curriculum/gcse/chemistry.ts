import { buildTopic, type GcseBoardSpec } from "./types";

export const GCSE_CHEMISTRY: GcseBoardSpec[] = [
  {
    id: "aqa",
    label: "AQA",
    shortLabel: "AQA",
    topics: [
      buildTopic(1, "Atomic Structure and the Periodic Table", "Chemistry", [
        { term: "Atom", definition: "The smallest unit of an element, made of protons, neutrons, and electrons." },
        { term: "Atomic number", definition: "The number of protons in an atom's nucleus — defines the element." },
        { term: "Mass number", definition: "The total number of protons and neutrons in an atom's nucleus." },
      ]),
      buildTopic(2, "Bonding, Structure and Properties of Matter", "Chemistry", [
        { term: "Ionic bond", definition: "Electrostatic attraction between oppositely charged ions formed by electron transfer." },
        { term: "Covalent bond", definition: "A shared pair of electrons between two atoms." },
      ]),
      buildTopic(3, "Quantitative Chemistry", "Chemistry", [
        { term: "Relative formula mass (Mr)", definition: "The sum of relative atomic masses of all atoms in a formula." },
        { term: "The mole", definition: "The amount of substance containing 6.02 × 10²³ particles (Avogadro's constant)." },
      ]),
      buildTopic(4, "Chemical Changes", "Chemistry"),
      buildTopic(5, "Energy Changes", "Chemistry", [
        { term: "Exothermic reaction", definition: "A reaction that transfers thermal energy to the surroundings — temperature increases." },
        { term: "Endothermic reaction", definition: "A reaction that takes in thermal energy from the surroundings — temperature decreases." },
      ]),
      buildTopic(6, "The Rate and Extent of Chemical Change", "Chemistry"),
      buildTopic(7, "Organic Chemistry", "Chemistry", [
        { term: "Hydrocarbon", definition: "A compound containing only hydrogen and carbon atoms." },
        { term: "Alkane", definition: "A saturated hydrocarbon with single C-C bonds (general formula CₙH₂ₙ₊₂)." },
      ]),
      buildTopic(8, "Chemical Analysis", "Chemistry"),
      buildTopic(9, "Chemistry of the Atmosphere", "Chemistry"),
      buildTopic(10, "Using Resources", "Chemistry"),
    ],
  },
  {
    id: "edexcel",
    label: "Edexcel",
    shortLabel: "Edexcel",
    topics: [
      buildTopic(1, "Key Concepts in Chemistry", "Chemistry"),
      buildTopic(2, "States of Matter and Mixtures", "Chemistry"),
      buildTopic(3, "Chemical Changes", "Chemistry"),
      buildTopic(4, "Extracting Metals and Equilibria", "Chemistry"),
      buildTopic(5, "Separate Chemistry I", "Chemistry"),
      buildTopic(6, "Groups in the Periodic Table", "Chemistry"),
      buildTopic(7, "Rates of Reaction and Energy Changes", "Chemistry"),
      buildTopic(8, "Fuels and Earth Science", "Chemistry"),
      buildTopic(9, "Separate Chemistry II", "Chemistry"),
    ],
  },
  {
    id: "edexcel-igcse",
    label: "Edexcel IGCSE",
    shortLabel: "Edexcel IGCSE",
    topics: [
      buildTopic(1, "Principles of Chemistry", "Chemistry"),
      buildTopic(2, "Inorganic Chemistry", "Chemistry"),
      buildTopic(3, "Physical Chemistry", "Chemistry"),
      buildTopic(4, "Organic Chemistry", "Chemistry"),
    ],
  },
  {
    id: "ocr-a",
    label: "OCR A (Gateway)",
    shortLabel: "OCR A",
    topics: [
      buildTopic(1, "Particles", "Chemistry"),
      buildTopic(2, "Elements, Compounds and Mixtures", "Chemistry"),
      buildTopic(3, "Chemical Reactions", "Chemistry"),
      buildTopic(4, "Predicting and Identifying Substances", "Chemistry"),
      buildTopic(5, "Monitoring and Controlling Chemical Reactions", "Chemistry"),
      buildTopic(6, "Global Challenges", "Chemistry"),
    ],
  },
  {
    id: "ocr-b",
    label: "OCR B (21st Century)",
    shortLabel: "OCR B",
    topics: [
      buildTopic(1, "Air and Water", "Chemistry"),
      buildTopic(2, "Chemical Patterns", "Chemistry"),
      buildTopic(3, "Chemicals of the Natural Environment", "Chemistry"),
      buildTopic(4, "Material Choices", "Chemistry"),
      buildTopic(5, "Chemical Analysis", "Chemistry"),
      buildTopic(6, "Making Useful Chemicals", "Chemistry"),
    ],
  },
];
