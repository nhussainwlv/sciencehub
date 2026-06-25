import { buildTopic, type GcseBoardSpec } from "./types";

export const GCSE_PHYSICS: GcseBoardSpec[] = [
  {
    id: "aqa",
    label: "AQA",
    shortLabel: "AQA",
    topics: [
      buildTopic(1, "Energy", "Physics", [
        { term: "Energy store", definition: "A way of storing energy — kinetic, gravitational, elastic, thermal, chemical, magnetic, electrostatic, nuclear." },
        { term: "Efficiency", definition: "Useful energy output ÷ total energy input × 100%." },
      ]),
      buildTopic(2, "Electricity", "Physics", [
        { term: "Current", definition: "The rate of flow of charge, measured in amperes (A)." },
        { term: "Potential difference", definition: "The energy transferred per unit charge, measured in volts (V)." },
        { term: "Resistance", definition: "Opposition to current flow, measured in ohms (Ω). V = IR." },
      ]),
      buildTopic(3, "Particle Model of Matter", "Physics", [
        { term: "Density", definition: "Mass per unit volume: ρ = m/V, measured in kg/m³." },
        { term: "Specific heat capacity", definition: "The energy needed to raise 1 kg of a substance by 1°C." },
      ]),
      buildTopic(4, "Atomic Structure", "Physics", [
        { term: "Isotope", definition: "Atoms of the same element with different numbers of neutrons." },
        { term: "Half-life", definition: "The time taken for half the radioactive nuclei in a sample to decay." },
      ]),
      buildTopic(5, "Forces", "Physics", [
        { term: "Resultant force", definition: "The single force that has the same effect as all forces acting on an object." },
        { term: "Newton's Second Law", definition: "F = ma — force equals mass times acceleration." },
      ]),
      buildTopic(6, "Waves", "Physics", [
        { term: "Frequency", definition: "The number of waves passing a point per second, measured in hertz (Hz)." },
        { term: "Wavelength", definition: "The distance between two consecutive identical points on a wave." },
      ]),
      buildTopic(7, "Magnetism and Electromagnetism", "Physics"),
      buildTopic(8, "Space Physics", "Physics"),
    ],
  },
  {
    id: "edexcel",
    label: "Edexcel",
    shortLabel: "Edexcel",
    topics: [
      buildTopic(1, "Key Concepts of Physics", "Physics"),
      buildTopic(2, "Motion and Forces", "Physics"),
      buildTopic(3, "Conservation of Energy", "Physics"),
      buildTopic(4, "Waves", "Physics"),
      buildTopic(5, "Light and the Electromagnetic Spectrum", "Physics"),
      buildTopic(6, "Radioactivity", "Physics"),
      buildTopic(7, "Astronomy", "Physics"),
      buildTopic(8, "Energy — Forces Doing Work", "Physics"),
      buildTopic(9, "Forces and their Effects", "Physics"),
      buildTopic(10, "Electricity and Circuits", "Physics"),
      buildTopic(11, "Static Electricity", "Physics"),
      buildTopic(12, "Magnetism and the Motor Effect", "Physics"),
      buildTopic(13, "Electromagnetic Induction", "Physics"),
      buildTopic(14, "Particle Model", "Physics"),
      buildTopic(15, "Forces and Matter", "Physics"),
    ],
  },
  {
    id: "edexcel-igcse",
    label: "Edexcel IGCSE",
    shortLabel: "Edexcel IGCSE",
    topics: [
      buildTopic(1, "Forces and Motion", "Physics"),
      buildTopic(2, "Electricity", "Physics"),
      buildTopic(3, "Waves", "Physics"),
      buildTopic(4, "Energy Resources and Transfers", "Physics"),
      buildTopic(5, "Solids, Liquids and Gases", "Physics"),
      buildTopic(6, "Magnetism and Electromagnetism", "Physics"),
      buildTopic(7, "Radioactivity and Particles", "Physics"),
      buildTopic(8, "Astrophysics", "Physics"),
    ],
  },
  {
    id: "ocr-a",
    label: "OCR A (Gateway)",
    shortLabel: "OCR A",
    topics: [
      buildTopic(1, "Matter", "Physics"),
      buildTopic(2, "Forces and Motion", "Physics"),
      buildTopic(3, "Electricity and Magnetism", "Physics"),
      buildTopic(4, "Waves and Radioactivity", "Physics"),
      buildTopic(5, "Energy", "Physics"),
      buildTopic(6, "Global Challenges", "Physics"),
    ],
  },
  {
    id: "ocr-b",
    label: "OCR B (21st Century)",
    shortLabel: "OCR B",
    topics: [
      buildTopic(1, "Radiation and Waves", "Physics"),
      buildTopic(2, "Sustainable Energy", "Physics"),
      buildTopic(3, "Electric Circuits", "Physics"),
      buildTopic(4, "Explaining Motion", "Physics"),
      buildTopic(5, "Radioactive Materials", "Physics"),
    ],
  },
];
