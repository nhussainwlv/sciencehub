import type { GcseExamBoardId, GcseSubjectId } from "./types";

export interface PastPaperResource {
  title: string;
  url: string;
  type: "papers" | "mark-schemes" | "all" | "specification" | "examiner-reports" | "practice";
  source: string;
}

export interface GcsePastPaperSet {
  boardId: GcseExamBoardId;
  subjectId: GcseSubjectId;
  specCode: string;
  specTitle: string;
  paperInfo: string;
  resources: PastPaperResource[];
}

const AQA_FINDER = "https://www.aqa.org.uk/past-papers-and-mark-schemes-finder";

const PMT_BASE: Record<GcseSubjectId, string> = {
  biology: "https://www.physicsandmathstutor.com/past-papers/gcse-biology",
  chemistry: "https://www.physicsandmathstutor.com/past-papers/gcse-chemistry",
  physics: "https://www.physicsandmathstutor.com/past-papers/gcse-physics",
};

const BBC_BITESIZE: Record<GcseSubjectId, string> = {
  biology: "https://www.bbc.co.uk/bitesize/examspecs/zpgcbk7",
  chemistry: "https://www.bbc.co.uk/bitesize/examspecs/z8xtmnb",
  physics: "https://www.bbc.co.uk/bitesize/examspecs/zsc9rdm",
};

export const GCSE_PAST_PAPERS: GcsePastPaperSet[] = [
  // ─── AQA ───────────────────────────────────────────────────────────────────
  {
    boardId: "aqa",
    subjectId: "biology",
    specCode: "8461",
    specTitle: "AQA GCSE Biology",
    paperInfo: "Paper 1 (topics 1–4) · Paper 2 (topics 5–7) · Foundation & Higher · 1h 45m each",
    resources: [
      { title: "Past papers & mark schemes (official)", url: "https://www.aqa.org.uk/subjects/biology/gcse/biology-8461/assessment-resources", type: "all", source: "AQA" },
      { title: "Past paper finder", url: AQA_FINDER, type: "papers", source: "AQA" },
      { title: "Specification (PDF)", url: "https://www.aqa.org.uk/subjects/biology/gcse/biology-8461/specification", type: "specification", source: "AQA" },
      { title: "PMT — all Biology papers & MS", url: `${PMT_BASE.biology}/aqa-paper-1/`, type: "all", source: "Physics & Maths Tutor" },
      { title: "BBC Bitesize — exam practice", url: BBC_BITESIZE.biology, type: "practice", source: "BBC Bitesize" },
      { title: "Save My Exams — AQA Biology", url: "https://www.savemyexams.com/gcse/biology/aqa/past-papers/", type: "all", source: "Save My Exams" },
    ],
  },
  {
    boardId: "aqa",
    subjectId: "chemistry",
    specCode: "8462",
    specTitle: "AQA GCSE Chemistry",
    paperInfo: "Paper 1 (atomic structure, bonding, quant, chemical changes) · Paper 2 (organic, atmosphere, resources) · 1h 45m each",
    resources: [
      { title: "Past papers & mark schemes (official)", url: "https://www.aqa.org.uk/subjects/chemistry/gcse/chemistry-8462/assessment-resources", type: "all", source: "AQA" },
      { title: "Past paper finder", url: AQA_FINDER, type: "papers", source: "AQA" },
      { title: "Specification (PDF)", url: "https://www.aqa.org.uk/subjects/chemistry/gcse/chemistry-8462/specification", type: "specification", source: "AQA" },
      { title: "PMT — all Chemistry papers & MS", url: `${PMT_BASE.chemistry}/aqa-paper-1/`, type: "all", source: "Physics & Maths Tutor" },
      { title: "BBC Bitesize — exam practice", url: BBC_BITESIZE.chemistry, type: "practice", source: "BBC Bitesize" },
      { title: "Save My Exams — AQA Chemistry", url: "https://www.savemyexams.com/gcse/chemistry/aqa/past-papers/", type: "all", source: "Save My Exams" },
    ],
  },
  {
    boardId: "aqa",
    subjectId: "physics",
    specCode: "8463",
    specTitle: "AQA GCSE Physics",
    paperInfo: "Paper 1 (energy, electricity, particle model, atomic) · Paper 2 (forces, waves, magnetism, space) · 1h 45m each",
    resources: [
      { title: "Past papers & mark schemes (official)", url: "https://www.aqa.org.uk/subjects/physics/gcse/physics-8463/assessment-resources", type: "all", source: "AQA" },
      { title: "Past paper finder", url: AQA_FINDER, type: "papers", source: "AQA" },
      { title: "Specification (PDF)", url: "https://www.aqa.org.uk/subjects/physics/gcse/physics-8463/specification", type: "specification", source: "AQA" },
      { title: "PMT — all Physics papers & MS", url: `${PMT_BASE.physics}/aqa-paper-1/`, type: "all", source: "Physics & Maths Tutor" },
      { title: "BBC Bitesize — exam practice", url: BBC_BITESIZE.physics, type: "practice", source: "BBC Bitesize" },
      { title: "Save My Exams — AQA Physics", url: "https://www.savemyexams.com/gcse/physics/aqa/past-papers/", type: "all", source: "Save My Exams" },
    ],
  },

  // ─── Edexcel ───────────────────────────────────────────────────────────────
  {
    boardId: "edexcel",
    subjectId: "biology",
    specCode: "1BI0",
    specTitle: "Edexcel GCSE Biology",
    paperInfo: "Paper 1 (B1–B3) · Paper 2 (B4–B7) · Foundation & Higher · 1h 45m each",
    resources: [
      { title: "Qualification hub & documents", url: "https://qualifications.pearson.com/en/qualifications/edexcel-gcses/biology-2016.html", type: "all", source: "Pearson Edexcel" },
      { title: "Past papers search (official)", url: "https://qualifications.pearson.com/en/support/support-topics/exams/past-papers.html?Qualification-Family=GCSE&Qualification-Subject=Biology+%282016%29", type: "all", source: "Pearson Edexcel" },
      { title: "Specification (PDF)", url: "https://qualifications.pearson.com/content/dam/pdf/GCSE/biology/2016/specification-and-sample-assessments/gcse-2016-l1-l2-biology-spec.pdf", type: "specification", source: "Pearson Edexcel" },
      { title: "PMT — Edexcel Biology papers & MS", url: `${PMT_BASE.biology}/edexcel-paper-1/`, type: "all", source: "Physics & Maths Tutor" },
      { title: "Save My Exams — Edexcel Biology", url: "https://www.savemyexams.com/gcse/biology/edexcel/past-papers/", type: "all", source: "Save My Exams" },
    ],
  },
  {
    boardId: "edexcel",
    subjectId: "chemistry",
    specCode: "1CH0",
    specTitle: "Edexcel GCSE Chemistry",
    paperInfo: "Paper 1 (C1–C3) · Paper 2 (C4–C7) · Foundation & Higher · 1h 45m each",
    resources: [
      { title: "Qualification hub & documents", url: "https://qualifications.pearson.com/en/qualifications/edexcel-gcses/chemistry-2016.html", type: "all", source: "Pearson Edexcel" },
      { title: "Past papers search (official)", url: "https://qualifications.pearson.com/en/support/support-topics/exams/past-papers.html?Qualification-Family=GCSE&Qualification-Subject=Chemistry+%282016%29", type: "all", source: "Pearson Edexcel" },
      { title: "Specification (PDF)", url: "https://qualifications.pearson.com/content/dam/pdf/GCSE/chemistry/2016/specification-and-sample-assessments/gcse-2016-l1-l2-chemistry-spec.pdf", type: "specification", source: "Pearson Edexcel" },
      { title: "PMT — Edexcel Chemistry papers & MS", url: `${PMT_BASE.chemistry}/edexcel-paper-1/`, type: "all", source: "Physics & Maths Tutor" },
      { title: "Save My Exams — Edexcel Chemistry", url: "https://www.savemyexams.com/gcse/chemistry/edexcel/past-papers/", type: "all", source: "Save My Exams" },
    ],
  },
  {
    boardId: "edexcel",
    subjectId: "physics",
    specCode: "1PH0",
    specTitle: "Edexcel GCSE Physics",
    paperInfo: "Paper 1 (P1–P3) · Paper 2 (P4–P7) · Foundation & Higher · 1h 45m each",
    resources: [
      { title: "Qualification hub & documents", url: "https://qualifications.pearson.com/en/qualifications/edexcel-gcses/physics-2016.html", type: "all", source: "Pearson Edexcel" },
      { title: "Past papers search (official)", url: "https://qualifications.pearson.com/en/support/support-topics/exams/past-papers.html?Qualification-Family=GCSE&Qualification-Subject=Physics+%282016%29", type: "all", source: "Pearson Edexcel" },
      { title: "Specification (PDF)", url: "https://qualifications.pearson.com/content/dam/pdf/GCSE/physics/2016/specification-and-sample-assessments/gcse-2016-l1-l2-physics-spec.pdf", type: "specification", source: "Pearson Edexcel" },
      { title: "PMT — Edexcel Physics papers & MS", url: `${PMT_BASE.physics}/edexcel-paper-1/`, type: "all", source: "Physics & Maths Tutor" },
      { title: "Save My Exams — Edexcel Physics", url: "https://www.savemyexams.com/gcse/physics/edexcel/past-papers/", type: "all", source: "Save My Exams" },
    ],
  },

  // ─── Edexcel IGCSE ─────────────────────────────────────────────────────────
  {
    boardId: "edexcel-igcse",
    subjectId: "biology",
    specCode: "4BI1",
    specTitle: "Edexcel International GCSE Biology",
    paperInfo: "Paper 1 (core) · Paper 2 (extended) · 2h + 1h 15m",
    resources: [
      { title: "Qualification hub & documents", url: "https://qualifications.pearson.com/en/qualifications/edexcel-international-gcses/international-gcse-biology-2017.html", type: "all", source: "Pearson Edexcel" },
      { title: "Past papers search (official)", url: "https://qualifications.pearson.com/en/support/support-topics/exams/past-papers.html?Qualification-Family=International+GCSE&Qualification-Subject=Biology", type: "all", source: "Pearson Edexcel" },
      { title: "Specification (PDF)", url: "https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/Biology/2017/specification-and-sample-assessments/international-gcse-biology-2017-specification.pdf", type: "specification", source: "Pearson Edexcel" },
      { title: "PMT — IGCSE Biology papers & MS", url: "https://www.physicsandmathstutor.com/past-papers/igcse-biology/", type: "all", source: "Physics & Maths Tutor" },
      { title: "Save My Exams — IGCSE Biology", url: "https://www.savemyexams.com/igcse/biology/edexcel/past-papers/", type: "all", source: "Save My Exams" },
    ],
  },
  {
    boardId: "edexcel-igcse",
    subjectId: "chemistry",
    specCode: "4CH1",
    specTitle: "Edexcel International GCSE Chemistry",
    paperInfo: "Paper 1 (core) · Paper 2 (extended) · 2h + 1h 15m",
    resources: [
      { title: "Qualification hub & documents", url: "https://qualifications.pearson.com/en/qualifications/edexcel-international-gcses/international-gcse-chemistry-2017.html", type: "all", source: "Pearson Edexcel" },
      { title: "Past papers search (official)", url: "https://qualifications.pearson.com/en/support/support-topics/exams/past-papers.html?Qualification-Family=International+GCSE&Qualification-Subject=Chemistry", type: "all", source: "Pearson Edexcel" },
      { title: "Specification (PDF)", url: "https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/Chemistry/2017/specification-and-sample-assessments/international-gcse-chemistry-2017-specification.pdf", type: "specification", source: "Pearson Edexcel" },
      { title: "PMT — IGCSE Chemistry papers & MS", url: "https://www.physicsandmathstutor.com/past-papers/igcse-chemistry/", type: "all", source: "Physics & Maths Tutor" },
      { title: "Save My Exams — IGCSE Chemistry", url: "https://www.savemyexams.com/igcse/chemistry/edexcel/past-papers/", type: "all", source: "Save My Exams" },
    ],
  },
  {
    boardId: "edexcel-igcse",
    subjectId: "physics",
    specCode: "4PH1",
    specTitle: "Edexcel International GCSE Physics",
    paperInfo: "Paper 1 (core) · Paper 2 (extended) · 2h + 1h 15m",
    resources: [
      { title: "Qualification hub & documents", url: "https://qualifications.pearson.com/en/qualifications/edexcel-international-gcses/international-gcse-physics-2017.html", type: "all", source: "Pearson Edexcel" },
      { title: "Past papers search (official)", url: "https://qualifications.pearson.com/en/support/support-topics/exams/past-papers.html?Qualification-Family=International+GCSE&Qualification-Subject=Physics", type: "all", source: "Pearson Edexcel" },
      { title: "Specification (PDF)", url: "https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/Physics/2017/specification-and-sample-assessments/international-gcse-physics-2017-specification.pdf", type: "specification", source: "Pearson Edexcel" },
      { title: "PMT — IGCSE Physics papers & MS", url: "https://www.physicsandmathstutor.com/past-papers/igcse-physics/", type: "all", source: "Physics & Maths Tutor" },
      { title: "Save My Exams — IGCSE Physics", url: "https://www.savemyexams.com/igcse/physics/edexcel/past-papers/", type: "all", source: "Save My Exams" },
    ],
  },

  // ─── OCR A (Gateway) ───────────────────────────────────────────────────────
  {
    boardId: "ocr-a",
    subjectId: "biology",
    specCode: "J247",
    specTitle: "OCR Gateway Biology A",
    paperInfo: "Paper 1 (breadth) · Paper 2 (depth) · Foundation & Higher · 1h 45m each",
    resources: [
      { title: "Past papers & mark schemes (official)", url: "https://www.ocr.org.uk/qualifications/gcse/gateway-science-suite-biology-a-j247-from-2016/assessment/", type: "all", source: "OCR" },
      { title: "Specification (PDF)", url: "https://www.ocr.org.uk/Images/234594-specification-accredited-gcse-gateway-science-suite-biology-a-j247.pdf", type: "specification", source: "OCR" },
      { title: "PMT — OCR Gateway Biology", url: `${PMT_BASE.biology}/ocr-gateway-paper-1/`, type: "all", source: "Physics & Maths Tutor" },
      { title: "Save My Exams — OCR Biology A", url: "https://www.savemyexams.com/gcse/biology/ocr-a/past-papers/", type: "all", source: "Save My Exams" },
      { title: "Teach Cambridge (teachers)", url: "https://teach.ocr.org.uk/", type: "all", source: "OCR" },
    ],
  },
  {
    boardId: "ocr-a",
    subjectId: "chemistry",
    specCode: "J248",
    specTitle: "OCR Gateway Chemistry A",
    paperInfo: "Paper 1 (breadth) · Paper 2 (depth) · Foundation & Higher · 1h 45m each",
    resources: [
      { title: "Past papers & mark schemes (official)", url: "https://www.ocr.org.uk/qualifications/gcse/gateway-science-suite-chemistry-a-j248-from-2016/assessment/", type: "all", source: "OCR" },
      { title: "Specification (PDF)", url: "https://www.ocr.org.uk/Images/234595-specification-accredited-gcse-gateway-science-suite-chemistry-a-j248.pdf", type: "specification", source: "OCR" },
      { title: "PMT — OCR Gateway Chemistry", url: `${PMT_BASE.chemistry}/ocr-gateway-paper-1/`, type: "all", source: "Physics & Maths Tutor" },
      { title: "Save My Exams — OCR Chemistry A", url: "https://www.savemyexams.com/gcse/chemistry/ocr-a/past-papers/", type: "all", source: "Save My Exams" },
      { title: "Teach Cambridge (teachers)", url: "https://teach.ocr.org.uk/", type: "all", source: "OCR" },
    ],
  },
  {
    boardId: "ocr-a",
    subjectId: "physics",
    specCode: "J249",
    specTitle: "OCR Gateway Physics A",
    paperInfo: "Paper 1 (breadth) · Paper 2 (depth) · Foundation & Higher · 1h 45m each",
    resources: [
      { title: "Past papers & mark schemes (official)", url: "https://www.ocr.org.uk/qualifications/gcse/gateway-science-suite-physics-a-j249-from-2016/assessment/", type: "all", source: "OCR" },
      { title: "Specification (PDF)", url: "https://www.ocr.org.uk/Images/234596-specification-accredited-gcse-gateway-science-suite-physics-a-j249.pdf", type: "specification", source: "OCR" },
      { title: "PMT — OCR Gateway Physics", url: `${PMT_BASE.physics}/ocr-gateway-paper-1/`, type: "all", source: "Physics & Maths Tutor" },
      { title: "Save My Exams — OCR Physics A", url: "https://www.savemyexams.com/gcse/physics/ocr-a/past-papers/", type: "all", source: "Save My Exams" },
      { title: "Teach Cambridge (teachers)", url: "https://teach.ocr.org.uk/", type: "all", source: "OCR" },
    ],
  },

  // ─── OCR B (Twenty First Century) ──────────────────────────────────────────
  {
    boardId: "ocr-b",
    subjectId: "biology",
    specCode: "J257",
    specTitle: "OCR Twenty First Century Biology B",
    paperInfo: "Paper 1 (breadth) · Paper 2 (depth) · Foundation & Higher · 1h 45m each",
    resources: [
      { title: "Past papers & mark schemes (official)", url: "https://www.ocr.org.uk/qualifications/gcse/twenty-first-century-science-suite-biology-b-j257-from-2016/assessment/", type: "all", source: "OCR" },
      { title: "Specification (PDF)", url: "https://www.ocr.org.uk/Images/234600-specification-accredited-gcse-twenty-first-century-science-suite-biology-b-j257.pdf", type: "specification", source: "OCR" },
      { title: "PMT — OCR 21st Century Biology", url: `${PMT_BASE.biology}/ocr-21st-century-paper-1/`, type: "all", source: "Physics & Maths Tutor" },
      { title: "Save My Exams — OCR Biology B", url: "https://www.savemyexams.com/gcse/biology/ocr-b/past-papers/", type: "all", source: "Save My Exams" },
      { title: "Teach Cambridge (teachers)", url: "https://teach.ocr.org.uk/", type: "all", source: "OCR" },
    ],
  },
  {
    boardId: "ocr-b",
    subjectId: "chemistry",
    specCode: "J258",
    specTitle: "OCR Twenty First Century Chemistry B",
    paperInfo: "Paper 1 (breadth) · Paper 2 (depth) · Foundation & Higher · 1h 45m each",
    resources: [
      { title: "Past papers & mark schemes (official)", url: "https://www.ocr.org.uk/qualifications/gcse/twenty-first-century-science-suite-chemistry-b-j258-from-2016/assessment/", type: "all", source: "OCR" },
      { title: "Specification (PDF)", url: "https://www.ocr.org.uk/Images/234601-specification-accredited-gcse-twenty-first-century-science-suite-chemistry-b-j258.pdf", type: "specification", source: "OCR" },
      { title: "PMT — OCR 21st Century Chemistry", url: `${PMT_BASE.chemistry}/ocr-21st-century-paper-1/`, type: "all", source: "Physics & Maths Tutor" },
      { title: "Save My Exams — OCR Chemistry B", url: "https://www.savemyexams.com/gcse/chemistry/ocr-b/past-papers/", type: "all", source: "Save My Exams" },
      { title: "Teach Cambridge (teachers)", url: "https://teach.ocr.org.uk/", type: "all", source: "OCR" },
    ],
  },
  {
    boardId: "ocr-b",
    subjectId: "physics",
    specCode: "J259",
    specTitle: "OCR Twenty First Century Physics B",
    paperInfo: "Paper 1 (breadth) · Paper 2 (depth) · Foundation & Higher · 1h 45m each",
    resources: [
      { title: "Past papers & mark schemes (official)", url: "https://www.ocr.org.uk/qualifications/gcse/twenty-first-century-science-suite-physics-b-j259-from-2016/assessment/", type: "all", source: "OCR" },
      { title: "Specification (PDF)", url: "https://www.ocr.org.uk/Images/234602-specification-accredited-gcse-twenty-first-century-science-suite-physics-b-j259.pdf", type: "specification", source: "OCR" },
      { title: "PMT — OCR 21st Century Physics", url: `${PMT_BASE.physics}/ocr-21st-century-paper-1/`, type: "all", source: "Physics & Maths Tutor" },
      { title: "Save My Exams — OCR Physics B", url: "https://www.savemyexams.com/gcse/physics/ocr-b/past-papers/", type: "all", source: "Save My Exams" },
      { title: "Teach Cambridge (teachers)", url: "https://teach.ocr.org.uk/", type: "all", source: "OCR" },
    ],
  },
];

export function getPastPapers(boardId: GcseExamBoardId, subjectId: GcseSubjectId): GcsePastPaperSet | undefined {
  return GCSE_PAST_PAPERS.find((p) => p.boardId === boardId && p.subjectId === subjectId);
}

export function getPastPapersForBoard(boardId: GcseExamBoardId): GcsePastPaperSet[] {
  return GCSE_PAST_PAPERS.filter((p) => p.boardId === boardId);
}

export function getPastPapersForSubject(subjectId: GcseSubjectId): GcsePastPaperSet[] {
  return GCSE_PAST_PAPERS.filter((p) => p.subjectId === subjectId);
}
