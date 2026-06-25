import { buildTopic, type GcseBoardSpec } from "./types";

export const GCSE_BIOLOGY: GcseBoardSpec[] = [
  {
    id: "aqa",
    label: "AQA",
    shortLabel: "AQA",
    topics: [
      buildTopic(1, "Cell Biology", "Biology", [
        { term: "Eukaryotic cell", definition: "A complex cell with a nucleus and membrane-bound organelles, found in animals, plants, fungi, and protists." },
        { term: "Prokaryotic cell", definition: "A simple cell with no nucleus — DNA is in a single loop. Bacteria are prokaryotes." },
        { term: "Diffusion", definition: "The net movement of particles from an area of high concentration to low concentration." },
        { term: "Osmosis", definition: "The diffusion of water molecules through a partially permeable membrane from dilute to concentrated solution." },
        { term: "Active transport", definition: "Movement of substances against a concentration gradient using energy from respiration." },
      ]),
      buildTopic(2, "Organisation", "Biology", [
        { term: "Enzyme", definition: "A biological catalyst — a protein that speeds up chemical reactions without being used up." },
        { term: "Villi", definition: "Finger-like projections in the small intestine that increase surface area for absorption." },
        { term: "Transpiration", definition: "The loss of water vapour from plant leaves through stomata." },
      ]),
      buildTopic(3, "Infection and Response", "Biology", [
        { term: "Pathogen", definition: "A microorganism that causes disease — bacteria, viruses, fungi, or protists." },
        { term: "Antibody", definition: "A protein produced by white blood cells that binds to antigens on pathogens." },
        { term: "Vaccination", definition: "Introducing dead or weakened pathogens to stimulate antibody production without causing disease." },
      ]),
      buildTopic(4, "Bioenergetics", "Biology", [
        { term: "Photosynthesis", definition: "The process by which plants use light energy to convert carbon dioxide and water into glucose and oxygen." },
        { term: "Aerobic respiration", definition: "Glucose + oxygen → carbon dioxide + water (+ energy). Occurs in mitochondria." },
        { term: "Anaerobic respiration", definition: "Glucose → lactic acid (+ energy) in animals, or ethanol + CO₂ in yeast. Less efficient than aerobic." },
      ]),
      buildTopic(5, "Homeostasis and Response", "Biology", [
        { term: "Homeostasis", definition: "The regulation of internal conditions to maintain optimum conditions for cells." },
        { term: "Hormone", definition: "A chemical messenger produced by endocrine glands, transported in blood to target organs." },
        { term: "Reflex arc", definition: "The pathway of a reflex: receptor → sensory neurone → relay neurone → motor neurone → effector." },
      ]),
      buildTopic(6, "Inheritance, Variation and Evolution", "Biology", [
        { term: "DNA", definition: "A polymer made of nucleotides containing a sugar, phosphate group, and base (A, T, C, G)." },
        { term: "Allele", definition: "A version of a gene. Dominant alleles are expressed even if only one copy is present." },
        { term: "Natural selection", definition: "The process where organisms with advantageous characteristics are more likely to survive and reproduce." },
      ]),
      buildTopic(7, "Ecology", "Biology", [
        { term: "Ecosystem", definition: "All the organisms living in a habitat and the non-living (abiotic) conditions." },
        { term: "Biodiversity", definition: "The variety of different species in an ecosystem." },
        { term: "Carbon cycle", definition: "The movement of carbon through the atmosphere, organisms, oceans, and rocks." },
      ]),
    ],
  },
  {
    id: "edexcel",
    label: "Edexcel",
    shortLabel: "Edexcel",
    topics: [
      buildTopic(1, "Key Concepts in Biology", "Biology"),
      buildTopic(2, "Cells and Control", "Biology", [
        { term: "Mitosis", definition: "Cell division that produces two genetically identical diploid cells for growth and repair." },
        { term: "Stem cell", definition: "An undifferentiated cell that can divide to produce more stem cells or differentiate into specialised cells." },
      ]),
      buildTopic(3, "Genetics", "Biology", [
        { term: "Genotype", definition: "The combination of alleles an organism possesses." },
        { term: "Phenotype", definition: "The observable characteristics of an organism." },
      ]),
      buildTopic(4, "Natural Selection and Genetic Modification", "Biology"),
      buildTopic(5, "Health, Disease and the Development of Medicines", "Biology"),
      buildTopic(6, "Plant Structures and their Functions", "Biology"),
      buildTopic(7, "Animal Coordination, Control and Homeostasis", "Biology"),
      buildTopic(8, "Exchange and Transport in Animals", "Biology"),
      buildTopic(9, "Ecosystems and Material Cycles", "Biology"),
    ],
  },
  {
    id: "edexcel-igcse",
    label: "Edexcel IGCSE",
    shortLabel: "Edexcel IGCSE",
    topics: [
      buildTopic(1, "The Nature and Variety of Living Organisms", "Biology"),
      buildTopic(2, "Structures and Function in Living Organisms", "Biology"),
      buildTopic(3, "Reproduction and Inheritance", "Biology"),
      buildTopic(4, "Ecology and the Environment", "Biology"),
      buildTopic(5, "Use of Biological Resources", "Biology"),
    ],
  },
  {
    id: "ocr-a",
    label: "OCR A (Gateway)",
    shortLabel: "OCR A",
    topics: [
      buildTopic(1, "Cell Level Systems", "Biology"),
      buildTopic(2, "Scaling Up", "Biology"),
      buildTopic(3, "Organism Level Systems", "Biology"),
      buildTopic(4, "Community Level Systems", "Biology"),
      buildTopic(5, "Genes, Inheritance and Selection", "Biology"),
      buildTopic(6, "Global Challenges", "Biology"),
    ],
  },
  {
    id: "ocr-b",
    label: "OCR B (21st Century)",
    shortLabel: "OCR B",
    topics: [
      buildTopic(1, "You and Your Genes", "Biology"),
      buildTopic(2, "Keeping Healthy", "Biology"),
      buildTopic(3, "Living Together — Food and Ecosystems", "Biology"),
      buildTopic(4, "Using Food and Controlling Growth", "Biology"),
      buildTopic(5, "The Human Body — Staying Alive", "Biology"),
      buildTopic(6, "Life on Earth — Past, Present and Future", "Biology"),
    ],
  },
];
