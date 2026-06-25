import type { GcseKeyConcept } from "../types";

export interface GcseExternalLink {
  title: string;
  url: string;
  source: string;
}

export interface TopicExtras {
  funFacts: string[];
  hints: string[];
  memoryTips: string[];
  externalLinks: GcseExternalLink[];
  extraConcepts?: GcseKeyConcept[];
}

const BBC = "BBC Bitesize";
const AQA = "AQA";
const SME = "Save My Exams";

export const TOPIC_EXTRAS: Record<string, TopicExtras> = {
  "cell-biology": {
    funFacts: [
      "The human body contains around 37 trillion cells — yet you started as just one fertilised egg cell.",
      "Bacterial cells are roughly 1,000 times smaller than most animal cells.",
      "Osmosis is why crisps go soggy in humid air and why slugs shrivel when salted.",
    ],
    hints: [
      "Compare animal, plant and bacterial cells in a table — examiners love a clear comparison.",
      "For osmosis questions, always mention water molecules and partially permeable membranes.",
      "Magnification questions: write the formula before substituting numbers.",
    ],
    memoryTips: [
      "DO ACT — Diffusion = passive, Osmosis = water only, Active transport = needs ATP energy.",
      "Plant-only extras: Cell Wall, Chloroplast, Permanent Vacuole — remember 'Plants Wear Cool Pants'.",
      "Mitosis Makes More — two identical diploid cells for growth and repair.",
    ],
    externalLinks: [
      { title: "Cell structure — BBC Bitesize", url: "https://www.bbc.co.uk/bitesize/guides/z7c7tyc/revision/1", source: BBC },
      { title: "Diffusion, osmosis & active transport", url: "https://www.bbc.co.uk/bitesize/guides/zc7k2nb/revision/1", source: BBC },
      { title: "AQA Cell Biology specification", url: "https://www.aqa.org.uk/subjects/biology/gcse/biology-8461/specification/subject-content/cell-biology", source: AQA },
    ],
    extraConcepts: [
      { term: "Ribosome", definition: "Site of protein synthesis in the cytoplasm — where amino acids are assembled into proteins." },
      { term: "Permanent vacuole", definition: "Fluid-filled sac in plant cells containing cell sap — helps maintain turgor pressure." },
      { term: "Meristem", definition: "Plant tissue containing undifferentiated cells that can divide and differentiate throughout the plant's life." },
    ],
  },

  organisation: {
    funFacts: [
      "Your small intestine has a surface area of about 200 m² — roughly the size of a tennis court, thanks to villi.",
      "The human heart beats about 100,000 times per day, pumping roughly 7,500 litres of blood.",
      "Enzymes are used in biological washing powders to break down food stains at lower temperatures.",
    ],
    hints: [
      "Enzyme graphs: optimum temperature is a peak — too hot denatures the active site.",
      "Compare arteries, veins and capillaries using structure linked to function.",
      "Transpiration increases with light, heat, wind and low humidity.",
    ],
    memoryTips: [
      "Bile emulsifies fats — think 'Bile Breaks Big fat Blobs'.",
      "Arteries Away (from heart), Veins back — capillaries Connect for exchange.",
      "Amylase → starch; Protease → protein; Lipase → lipids.",
    ],
    externalLinks: [
      { title: "Digestive system — BBC Bitesize", url: "https://www.bbc.co.uk/bitesize/guides/znm4xnb/revision/1", source: BBC },
      { title: "Circulatory system — BBC Bitesize", url: "https://www.bbc.co.uk/bitesize/guides/z3s6msg/revision/1", source: BBC },
      { title: "AQA Organisation specification", url: "https://www.aqa.org.uk/subjects/biology/gcse/biology-8461/specification/subject-content/organisation", source: AQA },
    ],
    extraConcepts: [
      { term: "Peristalsis", definition: "Wave-like muscle contractions that push food through the digestive tract." },
      { term: "Haemoglobin", definition: "Red pigment in red blood cells that binds to oxygen in the lungs and releases it in tissues." },
      { term: "Stomata", definition: "Tiny pores on leaf surfaces that open and close to control gas exchange and transpiration." },
    ],
  },

  "infection-and-response": {
    funFacts: [
      "Your body fights millions of potential pathogens every day — most never make you ill.",
      "Penicillin, the first antibiotic, was discovered by accident when mould killed bacteria on a petri dish in 1928.",
      "Vaccines have prevented an estimated 154 million deaths worldwide since 1974.",
    ],
    hints: [
      "Never say antibiotics kill viruses — this is one of the most commonly tested mistakes.",
      "Vaccination answers should mention memory cells and secondary immune response.",
      "Drug development: preclinical → clinical trials → double-blind with placebo.",
    ],
    memoryTips: [
      "AB antibiotics kill Bacteria only — not viruses.",
      "Vaccines = dead/weakened pathogen → antibodies + memory cells → faster response next time.",
      "Herd immunity: enough vaccinated people stop disease spreading.",
    ],
    externalLinks: [
      { title: "Monoclonal antibodies — BBC Bitesize", url: "https://www.bbc.co.uk/bitesize/guides/z8c6msg/revision/1", source: BBC },
      { title: "Vaccination — BBC Bitesize", url: "https://www.bbc.co.uk/bitesize/guides/z2mxsbk/revision/1", source: BBC },
      { title: "AQA Infection and response", url: "https://www.aqa.org.uk/subjects/biology/gcse/biology-8461/specification/subject-content/infection-and-response", source: AQA },
    ],
    extraConcepts: [
      { term: "Vaccine", definition: "Contains inactive pathogens or antigens that stimulate antibody production without causing disease." },
      { term: "Memory cell", definition: "Long-lived white blood cell that remembers a pathogen and enables a faster immune response on re-infection." },
      { term: "Vector", definition: "Organism that carries a pathogen between hosts, e.g. mosquitoes carrying malaria." },
    ],
  },

  bioenergetics: {
    funFacts: [
      "A single tree can produce enough oxygen in a year for two people to breathe.",
      "Yeast anaerobic respiration produces ethanol — the same alcohol used in beer and bread-making.",
      "Athletes can owe up to 15 litres of 'oxygen debt' after intense sprinting.",
    ],
    hints: [
      "Photosynthesis needs light, chlorophyll, CO₂ and water — limiting factor questions use graphs.",
      "Write both word and symbol equations for photosynthesis and respiration.",
      "Compare aerobic vs anaerobic: location, products, ATP yield.",
    ],
    memoryTips: [
      "Photo synthesis: light makes food (glucose + O₂). Respiration breaks food for energy.",
      "Aerobic = mitochondria, full breakdown. Anaerobic = cytoplasm, partial breakdown.",
      "Limiting factors: whichever is in shortest supply limits the rate (Liebig's barrel).",
    ],
    externalLinks: [
      { title: "Photosynthesis — BBC Bitesize", url: "https://www.bbc.co.uk/bitesize/guides/zpwmxnb/revision/1", source: BBC },
      { title: "Respiration — BBC Bitesize", url: "https://www.bbc.co.uk/bitesize/guides/z2yyd2p/revision/1", source: BBC },
      { title: "AQA Bioenergetics specification", url: "https://www.aqa.org.uk/subjects/biology/gcse/biology-8461/specification/subject-content/bioenergetics", source: AQA },
    ],
    extraConcepts: [
      { term: "Starch", definition: "Insoluble carbohydrate stored in plants — made from glucose for long-term energy storage." },
      { term: "Fermentation", definition: "Anaerobic respiration in yeast producing ethanol and carbon dioxide." },
      { term: "Inverse square law (light)", definition: "Doubling distance from a light source quarters the light intensity available for photosynthesis." },
    ],
  },

  "homeostasis-and-response": {
    funFacts: [
      "Your body maintains core temperature within about 1°C of 37°C even in extreme environments.",
      "Adrenaline can increase heart rate from 70 to over 180 bpm in seconds during the fight-or-flight response.",
      "Diabetics were once treated with insulin extracted from pig and cow pancreases before human insulin was made by genetic engineering.",
    ],
    hints: [
      "Reflex arc: receptor → sensory neurone → relay neurone → motor neurone → effector.",
      "Negative feedback: change detected → corrective response → return to normal.",
      "Compare nervous (fast, electrical) vs hormonal (slow, chemical) control.",
    ],
    memoryTips: [
      "Reflexes skip the brain initially — faster protection from harm.",
      "Insulin lowers blood glucose; glucagon raises it — they work as a pair.",
      "Type 1 = no insulin produced; Type 2 = cells don't respond to insulin properly.",
    ],
    externalLinks: [
      { title: "Homeostasis — BBC Bitesize", url: "https://www.bbc.co.uk/bitesize/guides/z2ydxfr/revision/1", source: BBC },
      { title: "The nervous system — BBC Bitesize", url: "https://www.bbc.co.uk/bitesize/guides/zqfcxfr/revision/1", source: BBC },
      { title: "AQA Homeostasis specification", url: "https://www.aqa.org.uk/subjects/biology/gcse/biology-8461/specification/subject-content/homeostasis-and-response", source: AQA },
    ],
    extraConcepts: [
      { term: "Effector", definition: "Muscle or gland that carries out a response to a stimulus." },
      { term: "Receptor", definition: "Cell or group of cells that detect a stimulus, e.g. heat receptors in skin." },
      { term: "Glucagon", definition: "Hormone from the pancreas that raises blood glucose by converting glycogen to glucose." },
    ],
  },

  "inheritance-variation-and-evolution": {
    funFacts: [
      "Humans share about 98.8% of their DNA with chimpanzees — and about 50% with bananas.",
      "If you unraveled all the DNA in your body, it would stretch to the Sun and back over 600 times.",
      "Antibiotic-resistant bacteria are a live example of natural selection happening today.",
    ],
    hints: [
      "Punnett squares: show parental genotypes, gametes, and offspring ratios.",
      "Evolution needs variation, competition, selection and inheritance over many generations.",
      "Distinguish natural selection, selective breeding and genetic engineering clearly.",
    ],
    memoryTips: [
      "DNA bases pair A-T and C-G — 'Apples in the Tree, Cars in the Garage'.",
      "Dominant = capital letter, expressed with one copy. Recessive = needs two copies.",
      "Variation = differences; Evolution = change in allele frequency over time.",
    ],
    externalLinks: [
      { title: "DNA and inheritance — BBC Bitesize", url: "https://www.bbc.co.uk/bitesize/guides/z8fycdm/revision/1", source: BBC },
      { title: "Evolution — BBC Bitesize", url: "https://www.bbc.co.uk/bitesize/guides/zqt6fg8/revision/1", source: BBC },
      { title: "AQA Inheritance specification", url: "https://www.aqa.org.uk/subjects/biology/gcse/biology-8461/specification/subject-content/inheritance-variation-and-evolution", source: AQA },
    ],
    extraConcepts: [
      { term: "Gamete", definition: "Sex cell (sperm or egg) with half the normal number of chromosomes — haploid." },
      { term: "Fossil", definition: "Remains or traces of organisms from the past — evidence for evolution and extinction." },
      { term: "Mutation", definition: "Random change in DNA base sequence — source of new alleles and genetic variation." },
    ],
  },

  ecology: {
    funFacts: [
      "Only about 10% of energy transfers to the next trophic level — the rest is lost as heat and movement.",
      "Bees pollinate roughly one-third of the food we eat.",
      "Tropical rainforests cover 6% of Earth's surface but contain over half of all species.",
    ],
    hints: [
      "Food webs are more realistic than food chains — organisms usually eat multiple things.",
      "Carbon cycle: link photosynthesis, respiration, combustion and decomposition.",
      "Sampling: random quadrats, large sample size, calculate mean.",
    ],
    memoryTips: [
      "10% rule: energy drops by 90% each level — why food chains are short.",
      "Producer → Primary consumer → Secondary consumer → Decomposer (recycles nutrients).",
      "Biodiversity = variety of species — more species = more stable ecosystem.",
    ],
    externalLinks: [
      { title: "Ecosystems — BBC Bitesize", url: "https://www.bbc.co.uk/bitesize/guides/z2wycdm/revision/1", source: BBC },
      { title: "Carbon cycle — BBC Bitesize", url: "https://www.bbc.co.uk/bitesize/guides/z2g7xfr/revision/1", source: BBC },
      { title: "AQA Ecology specification", url: "https://www.aqa.org.uk/subjects/biology/gcse/biology-8461/specification/subject-content/ecology", source: AQA },
    ],
    extraConcepts: [
      { term: "Trophic level", definition: "Position in a food chain — producer at level 1, primary consumer at level 2, etc." },
      { term: "Abiotic factor", definition: "Non-living condition affecting organisms, e.g. temperature, light intensity, pH." },
      { term: "Biotic factor", definition: "Living factor affecting organisms, e.g. predators, competition, disease." },
    ],
  },

  "atomic-structure-and-the-periodic-table": {
    funFacts: [
      "If an atom were the size of a football stadium, the nucleus would be a pea on the centre spot.",
      "Mendeleev left gaps in his periodic table — and correctly predicted undiscovered elements.",
      "Carbon-14 dating can determine the age of organic materials up to about 50,000 years old.",
    ],
    hints: [
      "Protons = atomic number. Neutrons = mass number − atomic number.",
      "Group number = outer electrons. Period number = electron shells.",
      "Isotopes: same protons, different neutrons — same chemical properties.",
    ],
    memoryTips: [
      "PEN — Protons define Element, Electrons Negative, Neutrons Neutral.",
      "Group 1 = alkali metals (reactivity increases down). Group 7 = halogens (reactivity decreases down).",
      "Shell filling: 2, 8, 8 — like filling rows in a cinema.",
    ],
    externalLinks: [
      { title: "Atomic structure — BBC Bitesize", url: "https://www.bbc.co.uk/bitesize/guides/z3rkk2p/revision/1", source: BBC },
      { title: "The periodic table — BBC Bitesize", url: "https://www.bbc.co.uk/bitesize/guides/z9jgr82/revision/1", source: BBC },
      { title: "AQA Atomic structure specification", url: "https://www.aqa.org.uk/subjects/chemistry/gcse/chemistry-8462/specification/subject-content/atomic-structure-and-the-periodic-table", source: AQA },
    ],
    extraConcepts: [
      { term: "Electron configuration", definition: "Arrangement of electrons in shells — determines chemical properties and bonding." },
      { term: "Relative formula mass (Mr)", definition: "Sum of relative atomic masses of all atoms in a formula unit of a compound." },
      { term: "Transition metal", definition: "Elements in the central block of the periodic table — often form coloured compounds and catalysts." },
    ],
  },

  "bonding-structure-and-properties-of-matter": {
    funFacts: [
      "Diamond is the hardest natural substance — each carbon atom forms four strong covalent bonds.",
      "Graphite is soft and conducts electricity because it has delocalised electrons between layers.",
      "Ionic compounds often have high melting points because strong electrostatic forces need lots of energy to break.",
    ],
    hints: [
      "Ionic: metal + non-metal, electrons transferred. Covalent: non-metals share electrons.",
      "Link bonding type to melting point, conductivity and solubility.",
      "Giant covalent (diamond, graphite) vs simple molecules (H₂O, CO₂).",
    ],
    memoryTips: [
      "IONIC — I Own Negative Ions from metals. Covalent = CO-valent sharing.",
      "Diamond = 4 bonds, hard, no conduct. Graphite = layers slide, conducts.",
      "Metallic bonding: 'sea of delocalised electrons' explains conductivity and malleability.",
    ],
    externalLinks: [
      { title: "Chemical bonds — BBC Bitesize", url: "https://www.bbc.co.uk/bitesize/guides/z2ns4qt/revision/1", source: BBC },
      { title: "Structure and bonding — Save My Exams", url: "https://www.savemyexams.com/gcse/chemistry/aqa/18/revision-notes/2-bonding-structure-and-the-properties-of-matter/", source: SME },
      { title: "AQA Bonding specification", url: "https://www.aqa.org.uk/subjects/chemistry/gcse/chemistry-8462/specification/subject-content/bonding-structure-and-the-properties-of-matter", source: AQA },
    ],
    extraConcepts: [
      { term: "Delocalised electron", definition: "Electron not bound to a single atom — free to move, enabling electrical conductivity in metals and graphite." },
      { term: "Intermolecular force", definition: "Weak force between simple covalent molecules — determines boiling point (stronger = higher bp)." },
      { term: "Allotrope", definition: "Different structural form of the same element in the same state, e.g. diamond and graphite are allotropes of carbon." },
    ],
  },

  "quantitative-chemistry": {
    funFacts: [
      "One mole of any substance contains exactly 6.02 × 10²³ particles — Avogadro's constant.",
      "If you counted one atom per second, it would take about 19 trillion years to count one mole.",
      "Percentage yield is always ≤ 100% in real reactions due to side reactions and incomplete reactions.",
    ],
    hints: [
      "Always balance equations before mole calculations.",
      "Convert cm³ to dm³ by dividing by 1000 for gas volume at RTP.",
      "Show working — method marks are available even with a wrong final answer.",
    ],
    memoryTips: [
      "Mole triangle: cover what you want — n = m/Mr, m = n × Mr.",
      "RTP: 1 mole of gas = 24 dm³ (or 24,000 cm³).",
      "% yield = (actual ÷ theoretical) × 100.",
    ],
    externalLinks: [
      { title: "Calculations — BBC Bitesize", url: "https://www.bbc.co.uk/bitesize/guides/z2pgr82/revision/1", source: BBC },
      { title: "Quantitative chemistry — Save My Exams", url: "https://www.savemyexams.com/gcse/chemistry/aqa/18/revision-notes/3-quantitative-chemistry/", source: SME },
      { title: "AQA Quantitative chemistry", url: "https://www.aqa.org.uk/subjects/chemistry/gcse/chemistry-8462/specification/subject-content/quantitative-chemistry", source: AQA },
    ],
    extraConcepts: [
      { term: "Concentration", definition: "Amount of solute per unit volume of solution — mol/dm³ or g/dm³." },
      { term: "Titration", definition: "Technique to find the concentration of a solution by reacting it with a solution of known concentration." },
      { term: "Atom economy", definition: "Percentage of reactant atoms that end up in useful products — higher is greener." },
    ],
  },

  "chemical-changes": {
    funFacts: [
      "The reactivity series was originally discovered by reacting metals with water and acids — potassium reacts violently.",
      "Electrolysis of brine produces chlorine (disinfectant), hydrogen (fuel) and sodium hydroxide (cleaning).",
      "A pH of 3 is ten times more acidic than pH 4 — the scale is logarithmic.",
    ],
    hints: [
      "OIL RIG: Oxidation Is Loss (of electrons), Reduction Is Gain.",
      "More reactive metal displaces less reactive metal from its compound.",
      "At cathode: positive ions gain electrons. At anode: negative ions lose electrons.",
    ],
    memoryTips: [
      "Reactivity series mnemonic: Please Stop Calling Me A Cute Zebra I Like Her Cute Silver Gold.",
      "Acid + metal → salt + hydrogen. Acid + base → salt + water.",
      "Electrolysis: Cations to Cathode (negative electrode), Anions to Anode.",
    ],
    externalLinks: [
      { title: "Reactivity series — BBC Bitesize", url: "https://www.bbc.co.uk/bitesize/guides/zqj2xnb/revision/1", source: BBC },
      { title: "Electrolysis — BBC Bitesize", url: "https://www.bbc.co.uk/bitesize/guides/z2gk4qt/revision/1", source: BBC },
      { title: "AQA Chemical changes", url: "https://www.aqa.org.uk/subjects/chemistry/gcse/chemistry-8462/specification/subject-content/chemical-changes", source: AQA },
    ],
    extraConcepts: [
      { term: "Salt", definition: "Ionic compound formed when the H⁺ of an acid is replaced by a metal ion." },
      { term: "Electrolyte", definition: "Molten or dissolved ionic compound that conducts electricity and is decomposed by electrolysis." },
      { term: "Half equation", definition: "Shows oxidation or reduction at one electrode, e.g. Cu²⁺ + 2e⁻ → Cu." },
    ],
  },

  "energy-changes": {
    funFacts: [
      "Hand warmers use exothermic crystallisation of supersaturated sodium ethanoate solution.",
      "Photosynthesis is an endothermic reaction — it absorbs light energy to store chemical energy.",
      "A catalyst lowers activation energy but is not used up — same mass before and after.",
    ],
    hints: [
      "Exothermic: products lower than reactants on energy profile. Endothermic: products higher.",
      "Collision theory: particles need sufficient energy (≥ activation energy) and correct orientation.",
      "Le Chatelier (Higher): system opposes changes in temperature, pressure or concentration.",
    ],
    memoryTips: [
      "EXothermic = EXits heat to surroundings. ENDothermic = ENergy goes IN from surroundings.",
      "Faster rate: higher temp, higher concentration, catalyst, greater surface area.",
      "Activation energy = the 'hill' on the energy profile diagram.",
    ],
    externalLinks: [
      { title: "Exothermic & endothermic — BBC Bitesize", url: "https://www.bbc.co.uk/bitesize/guides/z2ydxfr/revision/2", source: BBC },
      { title: "Rates of reaction — BBC Bitesize", url: "https://www.bbc.co.uk/bitesize/guides/z2wmxnb/revision/1", source: BBC },
      { title: "AQA Energy changes", url: "https://www.aqa.org.uk/subjects/chemistry/gcse/chemistry-8462/specification/subject-content/energy-changes", source: AQA },
    ],
    extraConcepts: [
      { term: "Activation energy", definition: "Minimum energy particles must have for a successful collision and reaction to occur." },
      { term: "Reversible reaction", definition: "Reaction that can proceed in both directions — shown with ⇌ symbol." },
      { term: "Rate of reaction", definition: "Change in amount of reactant or product per unit time." },
    ],
  },

  "organic-chemistry": {
    funFacts: [
      "Crude oil was formed from ancient marine organisms buried under heat and pressure over millions of years.",
      "Polyethene (plastic bags) is made from thousands of ethene monomers joined together.",
      "Complete combustion always produces CO₂ and H₂O — incomplete combustion produces toxic CO.",
    ],
    hints: [
      "Alkanes CₙH₂ₙ₊₂ saturated (single bonds). Alkenes CₙH₂ₙ unsaturated (C=C double bond).",
      "Bromine water turns colourless with alkenes (addition reaction) but stays orange with alkanes.",
      "Cracking: large alkane → small alkane + alkene (alkene used for plastics).",
    ],
    memoryTips: [
      "METHane, ETHane, PROPane, BUTane — Monkeys Eat Peanut Butter.",
      "Alkene = C=C = double bond = unsaturated = decolourises bromine water.",
      "Polymer name: poly(ethene), poly(propene) — put 'poly' before monomer name in brackets.",
    ],
    externalLinks: [
      { title: "Crude oil — BBC Bitesize", url: "https://www.bbc.co.uk/bitesize/guides/z8d2xnb/revision/1", source: BBC },
      { title: "Alkanes & alkenes — BBC Bitesize", url: "https://www.bbc.co.uk/bitesize/guides/zsg7pbk/revision/1", source: BBC },
      { title: "AQA Organic chemistry", url: "https://www.aqa.org.uk/subjects/chemistry/gcse/chemistry-8462/specification/subject-content/organic-chemistry", source: AQA },
    ],
    extraConcepts: [
      { term: "Functional group", definition: "Specific group of atoms responsible for chemical properties, e.g. C=C in alkenes, -OH in alcohols." },
      { term: "Addition reaction", definition: "Atoms added across a C=C double bond, e.g. ethene + bromine → dibromoethane." },
      { term: "Homologous series", definition: "Family of compounds with same general formula and similar chemical properties." },
    ],
  },

  "chemistry-of-the-atmosphere": {
    funFacts: [
      "Earth's early atmosphere was mostly CO₂ and water vapour — photosynthesis gradually added oxygen.",
      "CO₂ levels have risen from ~280 ppm before industrial revolution to over 420 ppm today.",
      "The ozone layer absorbs harmful UV radiation — CFCs caused the hole discovered in 1985.",
    ],
    hints: [
      "Describe how early atmosphere changed: volcanic gases → photosynthesis → oxygen rise.",
      "Greenhouse effect: short-wave in, long-wave IR trapped by greenhouse gases.",
      "Incomplete combustion produces CO (toxic) not just CO₂.",
    ],
    memoryTips: [
      "Atmosphere now: ~78% N₂, ~21% O₂, ~0.04% CO₂ — 'Noble Oxygen Nitrogen' roughly.",
      "Greenhouse gases: CO₂, methane, water vapour — trap IR radiation.",
      "Catalytic converter: CO + NO → CO₂ + N₂ (reduces harmful emissions).",
    ],
    externalLinks: [
      { title: "Earth's atmosphere — BBC Bitesize", url: "https://www.bbc.co.uk/bitesize/guides/z8dtvcw/revision/1", source: BBC },
      { title: "Climate change — BBC Bitesize", url: "https://www.bbc.co.uk/bitesize/guides/z2gk4qt/revision/4", source: BBC },
      { title: "AQA Chemistry of the atmosphere", url: "https://www.aqa.org.uk/subjects/chemistry/gcse/chemistry-8462/specification/subject-content/chemistry-of-the-atmosphere", source: AQA },
    ],
    extraConcepts: [
      { term: "Global dimming", definition: "Reduction in sunlight reaching Earth's surface due to particulate pollution in the atmosphere." },
      { term: "Carbon neutral", definition: "No net release of CO₂ into the atmosphere — emissions balanced by removal or offsetting." },
      { term: "Acid rain", definition: "Rain with pH below 5.6 caused by dissolved SO₂ and NOₓ from burning fossil fuels." },
    ],
  },

  energy: {
    funFacts: [
      "A single lightning bolt releases enough energy to toast 100,000 slices of bread.",
      "Kinetic energy depends on velocity squared — doubling speed quadruples kinetic energy.",
      "No machine is 100% efficient — some energy is always wasted as heat to the surroundings.",
    ],
    hints: [
      "Always state energy store and transfer pathway in energy questions.",
      "Efficiency = useful output ÷ total input (as decimal or × 100 for %).",
      "Sankey diagram: width of arrow = amount of energy.",
    ],
    memoryTips: [
      "Ek = ½mv² — velocity is squared, so speed matters more than mass.",
      "Ep = mgh — g = 10 N/kg on Earth unless told otherwise.",
      "Energy stores: Kinetic, Gravitational, Elastic, Thermal, Chemical, Magnetic, Electrostatic, Nuclear.",
    ],
    externalLinks: [
      { title: "Energy stores & transfers — BBC Bitesize", url: "https://www.bbc.co.uk/bitesize/guides/z2y9y4j/revision/1", source: BBC },
      { title: "Efficiency — BBC Bitesize", url: "https://www.bbc.co.uk/bitesize/guides/z2y9y4j/revision/3", source: BBC },
      { title: "AQA Energy specification", url: "https://www.aqa.org.uk/subjects/physics/gcse/physics-8463/specification/subject-content/energy", source: AQA },
    ],
    extraConcepts: [
      { term: "Conservation of energy", definition: "Energy cannot be created or destroyed — only transferred between stores or dissipated to surroundings." },
      { term: "Dissipation", definition: "Energy spreading out and becoming less useful, usually as heat to the surroundings." },
      { term: "Renewable energy", definition: "Energy from sources that replenish naturally: solar, wind, hydro, tidal, geothermal, biomass." },
    ],
  },

  electricity: {
    funFacts: [
      "Lightning is a massive electrical discharge — a single bolt can carry 30,000 amps.",
      "The National Grid transmits at 400,000 V to reduce current and minimise energy wasted as heat.",
      "Your phone charger uses a step-down transformer to convert mains 230 V to about 5 V.",
    ],
    hints: [
      "Series: same current, voltages add. Parallel: same voltage, currents add.",
      "V = IR — rearrange for I = V/R or R = V/I.",
      "Power P = IV, Energy E = Pt, charge Q = It.",
    ],
    memoryTips: [
      "V = I × R — 'Virgil = I × Read' or triangle cover method.",
      "Series resistors add: Rtotal = R₁ + R₂. Parallel: 1/Rtotal = 1/R₁ + 1/R₂.",
      "Step-up transformer at power station, step-down at homes — reduces transmission losses.",
    ],
    externalLinks: [
      { title: "Electric circuits — BBC Bitesize", url: "https://www.bbc.co.uk/bitesize/guides/zq99pwx/revision/1", source: BBC },
      { title: "Mains electricity — BBC Bitesize", url: "https://www.bbc.co.uk/bitesize/guides/z8x7msg/revision/1", source: BBC },
      { title: "AQA Electricity specification", url: "https://www.aqa.org.uk/subjects/physics/gcse/physics-8463/specification/subject-content/electricity", source: AQA },
    ],
    extraConcepts: [
      { term: "Direct current (DC)", definition: "Current flowing in one direction only, e.g. from a battery." },
      { term: "Alternating current (AC)", definition: "Current that reverses direction — mains electricity in the UK is 230 V AC at 50 Hz." },
      { term: "Fuse", definition: "Safety device containing a wire that melts and breaks the circuit if current is too high." },
    ],
  },

  forces: {
    funFacts: [
      "A flea can accelerate 100 times faster than a space shuttle because F = ma — small mass means huge acceleration.",
      "At terminal velocity, the falling object stops accelerating — air resistance equals weight.",
      "Seatbelts increase collision time, reducing the force on passengers (same momentum change, longer time).",
    ],
    hints: [
      "Distance-time graph slope = speed. Velocity-time graph slope = acceleration, area = distance.",
      "Stopping distance = thinking distance + braking distance. Speed doubles → braking distance × 4.",
      "Free body diagrams: arrows to scale showing all forces on an object.",
    ],
    memoryTips: [
      "F = ma — Force = mass × acceleration. Units: N = kg·m/s².",
      "W = mg — Weight is a force, not mass. g = 10 N/kg.",
      "Newton's 1st: stay still or constant speed unless resultant force. 3rd: equal and opposite pairs on DIFFERENT objects.",
    ],
    externalLinks: [
      { title: "Forces & motion — BBC Bitesize", url: "https://www.bbc.co.uk/bitesize/guides/z2wy6sg/revision/1", source: BBC },
      { title: "Stopping distances — BBC Bitesize", url: "https://www.bbc.co.uk/bitesize/guides/z2cqs82/revision/3", source: BBC },
      { title: "AQA Forces specification", url: "https://www.aqa.org.uk/subjects/physics/gcse/physics-8463/specification/subject-content/forces", source: AQA },
    ],
    extraConcepts: [
      { term: "Terminal velocity", definition: "Maximum velocity reached when air resistance equals weight — resultant force is zero." },
      { term: "Elastic deformation", definition: "Object returns to original shape when force is removed — obeys Hooke's law up to limit of proportionality." },
      { term: "Inelastic deformation", definition: "Object does not fully return to original shape after force is removed." },
    ],
  },

  waves: {
    funFacts: [
      "All electromagnetic waves travel at 300,000 km/s in a vacuum — radio waves and gamma rays at the same speed.",
      "Dogs hear up to about 45,000 Hz — ultrasound is above 20,000 Hz, the upper limit of human hearing.",
      "Red light has a longer wavelength than blue — which is why the sky appears blue (Rayleigh scattering).",
    ],
    hints: [
      "v = fλ — wave speed = frequency × wavelength. Units: m/s, Hz, m.",
      "Transverse: oscillations perpendicular to direction (light, EM). Longitudinal: parallel (sound).",
      "EM spectrum order: Radio, Microwave, Infrared, Visible, UV, X-ray, Gamma.",
    ],
    memoryTips: [
      "v = fλ — 'Very Fast Lambda' or wave triangle cover method.",
      "EM spectrum: 'Rabbits Mate In Very Unusual eXpensive Gardens'.",
      "Reflection: angle of incidence = angle of reflection (measured from normal).",
    ],
    externalLinks: [
      { title: "Waves — BBC Bitesize", url: "https://www.bbc.co.uk/bitesize/guides/zs6fg82/revision/1", source: BBC },
      { title: "Electromagnetic spectrum — BBC Bitesize", url: "https://www.bbc.co.uk/bitesize/guides/z2f3k7h/revision/1", source: BBC },
      { title: "AQA Waves specification", url: "https://www.aqa.org.uk/subjects/physics/gcse/physics-8463/specification/subject-content/waves", source: AQA },
    ],
    extraConcepts: [
      { term: "Rarefaction", definition: "Region in a longitudinal wave where particles are spread apart — low pressure in sound waves." },
      { term: "Compression", definition: "Region in a longitudinal wave where particles are pushed together — high pressure in sound waves." },
      { term: "Refraction", definition: "Change in wave speed and direction when crossing a boundary between different media." },
    ],
  },

  "particle-model-of-matter": {
    funFacts: [
      "Water is one of the few substances that expands when it freezes — ice is less dense than liquid water.",
      "The smell of cooking spreads by diffusion — gas particles move randomly from high to low concentration.",
      "At absolute zero (−273°C), particles would have minimum possible kinetic energy.",
    ],
    hints: [
      "ρ = m/V — show units. Convert cm³ to m³ by dividing by 1,000,000.",
      "ΔE = mcΔθ for temperature change. E = mL for change of state.",
      "During state change, temperature stays constant — energy breaks bonds.",
    ],
    memoryTips: [
      "Solid → liquid → gas: particles gain energy and move further apart.",
      "Specific heat capacity: water = 4200 J/kg°C — unusually high.",
      "Gas pressure: faster particles + more collisions = higher pressure.",
    ],
    externalLinks: [
      { title: "Particle model — BBC Bitesize", url: "https://www.bbc.co.uk/bitesize/guides/zcncjty/revision/1", source: BBC },
      { title: "Density — BBC Bitesize", url: "https://www.bbc.co.uk/bitesize/guides/z2y9y4j/revision/5", source: BBC },
      { title: "AQA Particle model specification", url: "https://www.aqa.org.uk/subjects/physics/gcse/physics-8463/specification/subject-content/particle-model-of-matter", source: AQA },
    ],
    extraConcepts: [
      { term: "Internal energy", definition: "Total kinetic and potential energy of all particles in a substance." },
      { term: "Specific latent heat of fusion", definition: "Energy to change 1 kg from solid to liquid with no temperature change." },
      { term: "Brownian motion", definition: "Random movement of visible particles caused by collisions with invisible smaller particles — evidence for particle theory." },
    ],
  },

  "atomic-structure": {
    funFacts: [
      "Background radiation is around us all the time — from rocks, cosmic rays, and even bananas (potassium-40).",
      "Smoke detectors contain a tiny amount of americium-241, an alpha emitter.",
      "Carbon-14 dating showed the Turin Shroud linen was medieval, not from biblical times.",
    ],
    hints: [
      "Alpha: stopped by paper, highly ionising. Beta: stopped by aluminium. Gamma: needs thick lead.",
      "Half-life: time for half the nuclei to decay — activity halves each half-life.",
      "Nuclear equations: balance mass number and atomic number on both sides.",
    ],
    memoryTips: [
      "Alpha = 2 protons + 2 neutrons (helium nucleus). Beta = electron from nucleus.",
      "Ionising power: alpha > beta > gamma. Penetration: gamma > beta > alpha.",
      "Half-life graph: exponential decay — read half-life from time for activity to halve.",
    ],
    externalLinks: [
      { title: "Radioactivity — BBC Bitesize", url: "https://www.bbc.co.uk/bitesize/guides/z2b9y4j/revision/1", source: BBC },
      { title: "Atomic structure — BBC Bitesize", url: "https://www.bbc.co.uk/bitesize/guides/zs6fg82/revision/4", source: BBC },
      { title: "AQA Atomic structure specification", url: "https://www.aqa.org.uk/subjects/physics/gcse/physics-8463/specification/subject-content/atomic-structure", source: AQA },
    ],
    extraConcepts: [
      { term: "Isotope", definition: "Atom of the same element with a different number of neutrons — same atomic number, different mass number." },
      { term: "Contamination", definition: "Radioactive material on an object. Irradiation: object exposed to radiation — does not become radioactive." },
      { term: "Activity", definition: "Rate of radioactive decay measured in becquerels (Bq) — 1 decay per second." },
    ],
  },

  "magnetism-and-electromagnetism": {
    funFacts: [
      "Earth itself is a giant magnet — a compass needle aligns with Earth's magnetic field.",
      "MRI scanners use powerful electromagnets and radio waves to image inside the body.",
      "The motor effect is how every electric motor works — from tiny phone vibrators to train engines.",
    ],
    hints: [
      "Fleming's left-hand rule: First finger = Field, seCond = Current, thuMb = Motion/force.",
      "Transformer equation: Vp/Vs = Np/Ns — only works with AC.",
      "Generator effect: moving conductor in magnetic field induces potential difference.",
    ],
    memoryTips: [
      "Motor effect: current in magnetic field → force. Fleming's LEFT hand for motors.",
      "Generator effect: movement in field → induced voltage. Fleming's RIGHT hand for generators.",
      "Step-up: more turns on secondary, higher voltage. Step-down: fewer turns on secondary.",
    ],
    externalLinks: [
      { title: "Electromagnetism — BBC Bitesize", url: "https://www.bbc.co.uk/bitesize/guides/z2gk4qt/revision/5", source: BBC },
      { title: "The motor effect — BBC Bitesize", url: "https://www.bbc.co.uk/bitesize/guides/zqsw2nb/revision/1", source: BBC },
      { title: "AQA Magnetism specification", url: "https://www.aqa.org.uk/subjects/physics/gcse/physics-8463/specification/subject-content/magnetism-and-electromagnetism", source: AQA },
    ],
    extraConcepts: [
      { term: "Magnetic field line", definition: "Line showing direction of force on a north pole — from N to S outside a magnet." },
      { term: "Solenoid", definition: "Coil of wire that produces a magnetic field when current flows — behaves like a bar magnet." },
      { term: "Induced potential difference", definition: "Voltage generated when a conductor moves through a magnetic field or field changes through a coil." },
    ],
  },

  "space-physics": {
    funFacts: [
      "Light from the Sun takes about 8 minutes to reach Earth — we see the Sun as it was 8 minutes ago.",
      "Neutron stars are so dense a teaspoon would weigh about a billion tonnes.",
      "Red-shift of distant galaxies was discovered by Hubble — evidence the Universe is expanding.",
    ],
    hints: [
      "Life cycle: nebula → protostar → main sequence → red giant → white dwarf (small stars).",
      "Massive stars: supernova → neutron star or black hole.",
      "Red-shift: wavelengths stretched as galaxies move away — further = faster = Universe expanding.",
    ],
    memoryTips: [
      "Our Sun: main sequence star fusing hydrogen to helium in its core.",
      "Inner planets rocky (Mercury to Mars), outer planets gas giants (Jupiter to Neptune).",
      "Fusion powers stars: hydrogen nuclei join → helium + energy. Fission splits heavy nuclei.",
    ],
    externalLinks: [
      { title: "The Solar System — BBC Bitesize", url: "https://www.bbc.co.uk/bitesize/guides/z2gk4qt/revision/6", source: BBC },
      { title: "Stars & the Universe — BBC Bitesize", url: "https://www.bbc.co.uk/bitesize/guides/z2b9y4j/revision/4", source: BBC },
      { title: "AQA Space physics specification", url: "https://www.aqa.org.uk/subjects/physics/gcse/physics-8463/specification/subject-content/space-physics", source: AQA },
    ],
    extraConcepts: [
      { term: "Artificial satellite", definition: "Human-made object orbiting Earth — low orbit for imaging, geostationary for communications." },
      { term: "Big Bang theory", definition: "Theory that the Universe began from a hot, dense point and has been expanding ever since." },
      { term: "Light year", definition: "Distance light travels in one year — about 9.5 trillion km; unit of distance not time." },
    ],
  },
};

export function getTopicExtras(slug: string, topicName: string, subjectLabel: string): TopicExtras {
  if (TOPIC_EXTRAS[slug]) return TOPIC_EXTRAS[slug];

  const query = encodeURIComponent(`${topicName} GCSE ${subjectLabel}`);
  return {
    funFacts: [
      `${topicName} is a core GCSE ${subjectLabel} topic that appears regularly in exam papers.`,
      `Understanding ${topicName} builds the foundation for harder questions at Higher tier.`,
    ],
    hints: [
      "Learn the key definitions first — examiners award marks for correct scientific terminology.",
      "Practise explaining processes step by step using the correct terms.",
      "Draw labelled diagrams where possible — visual memory helps recall under exam pressure.",
    ],
    memoryTips: [
      "Use flashcards: term on one side, definition on the other. Test yourself daily.",
      "Link new terms to something you already know — mnemonics stick in memory.",
      "Teach the topic to someone else — if you can explain it, you understand it.",
    ],
    externalLinks: [
      {
        title: `Search BBC Bitesize — ${topicName}`,
        url: `https://www.bbc.co.uk/bitesize/search?q=${query}`,
        source: BBC,
      },
      {
        title: "AQA GCSE Science specifications",
        url: "https://www.aqa.org.uk/subjects/science/gcse",
        source: AQA,
      },
      {
        title: `Save My Exams — ${subjectLabel}`,
        url: `https://www.savemyexams.com/gcse/${subjectLabel.toLowerCase()}/`,
        source: SME,
      },
    ],
  };
}
