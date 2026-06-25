/** Maps KS4 curriculum slugs to canonical GCSE content slugs */
export const KS4_TO_GCSE_SLUG: Record<string, string> = {
  // Biology
  "cell-biology": "cell-biology",
  organisation: "organisation",
  "infection-response": "infection-and-response",
  bioenergetics: "bioenergetics",
  "homeostasis-response": "homeostasis-and-response",
  "inheritance-evolution": "inheritance-variation-and-evolution",
  ecology: "ecology",
  // Chemistry
  "atomic-structure": "atomic-structure-and-the-periodic-table",
  "bonding-structure": "bonding-structure-and-properties-of-matter",
  "quantitative-chemistry": "quantitative-chemistry",
  "chemical-changes": "chemical-changes",
  "energy-changes": "energy-changes",
  "rates-reaction": "the-rate-and-extent-of-chemical-change",
  "organic-chemistry": "organic-chemistry",
  "chemical-analysis": "chemical-analysis",
  atmosphere: "chemistry-of-the-atmosphere",
  "using-resources": "using-resources",
  // Physics
  energy: "energy",
  electricity: "electricity",
  "particle-model": "particle-model-of-matter",
  "atomic-structure-physics": "atomic-structure",
  forces: "forces",
  waves: "waves",
  "magnetism-electromagnetism": "magnetism-and-electromagnetism",
  "space-physics": "space-physics",
};

export function getKs4GcseSlug(ks4Slug: string): string | undefined {
  return KS4_TO_GCSE_SLUG[ks4Slug];
}
