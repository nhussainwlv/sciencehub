import type { GcseKeyConcept } from "../types";
import type { GcseTopicContent, HigherTierContent } from "./types";

const HIGHER_TIER_BY_SLUG: Record<string, HigherTierContent> = {
  // ─── BIOLOGY ───────────────────────────────────────────────────────────────

  "cell-biology": {
    higherConcepts: [
      { term: "Surface area to volume ratio (SA:V)", definition: "As a cell grows, volume increases faster than surface area, so SA:V decreases. Small cells have a higher SA:V, allowing faster diffusion of substances in and out — this limits maximum cell size." },
      { term: "Therapeutic cloning", definition: "An embryo is produced with the same genes as the patient. Stem cells from the embryo are harvested and grown into replacement tissues (e.g. skin, nerve cells) that the immune system will not reject." },
      { term: "Meristem tissue", definition: "Undifferentiated plant cells found at growing tips (shoot and root apical meristems). Meristem cells can divide and differentiate throughout the plant's life, unlike most animal cells." },
      { term: "Turgor pressure", definition: "Pressure exerted by the cell contents against the cell wall when the vacuole is full of water. Turgor keeps plant cells rigid; loss of turgor causes wilting." },
      { term: "Flaccid and plasmolysed", definition: "A plant cell becomes flaccid when it loses water and the membrane pulls away from the cell wall (plasmolysis). Occurs when the external solution is more concentrated than the cell cytoplasm." },
      { term: "Binary fission", definition: "Asexual reproduction in bacteria: DNA replicates, the cell elongates, and the cell splits into two genetically identical daughter cells. Much faster than eukaryotic mitosis." },
      { term: "Electron microscope resolution", definition: "Electron microscopes use beams of electrons and have much higher resolution (~0.1 nm) than light microscopes (~200 nm), allowing observation of ribosomes, membranes, and viruses." },
      { term: "Cultured stem cells", definition: "Stem cells grown in vitro (in the lab) under controlled conditions. Used in research and developing therapies — must be monitored for uncontrolled division (cancer risk)." },
    ],
    higherSections: [
      {
        heading: "Quantitative microscopy",
        body: "Magnification = image size ÷ actual size. Units must match (both in mm or both in µm). 1 mm = 1000 µm. If an image is 50 mm and the actual object is 0.05 mm: magnification = 50 ÷ 0.05 = ×1000. Resolution limits the detail you can see — two points closer than the resolution limit appear as one.",
      },
      {
        heading: "Osmosis in plant cells — detailed",
        body: "In a dilute solution: water enters by osmosis → cell swells → vacuole expands → membrane pushes against cell wall → cell is turgid. In a concentrated solution: water leaves → vacuole shrinks → membrane pulls away from wall → plasmolysis. In an isotonic solution: no net water movement → cell is flaccid.",
      },
      {
        heading: "Stem cells — ethics and applications",
        body: "Embryonic stem cells are pluripotent (can become any cell type) but raise ethical concerns about embryo destruction. Adult stem cells are multipotent (limited cell types) and less controversial. Therapeutic cloning aims to produce patient-matched tissues. Risks include immune rejection (reduced with therapeutic cloning) and uncontrolled cell division.",
      },
    ],
    higherExamTips: [
      "For SA:V questions, explain WHY small cells are more efficient — link ratio to diffusion rate.",
      "Distinguish clearly between mitosis (eukaryotes, growth/repair) and binary fission (bacteria, reproduction).",
      "In osmosis extended answers, describe water movement in terms of water potential and concentration gradients.",
      "Stem cell 6-markers: include medical uses, advantages, disadvantages, and ethical arguments.",
    ],
  },

  organisation: {
    higherConcepts: [
      { term: "Lock-and-key and induced fit", definition: "Lock-and-key: substrate fits exactly into the enzyme's active site. Induced fit (Higher): the active site changes shape slightly when the substrate binds, improving the fit — explains how enzymes catalyse reactions." },
      { term: "Denaturation", definition: "When high temperature or extreme pH breaks the bonds holding an enzyme's 3D shape, the active site changes permanently and the enzyme no longer functions. Denaturation is irreversible." },
      { term: "Rate of enzyme reaction", definition: "Affected by temperature, pH, substrate concentration, and enzyme concentration. At optimum conditions the rate is maximum; beyond optimum temperature, enzymes denature and rate falls sharply." },
      { term: "Coronary heart disease (CHD)", definition: "Fatty deposits (atheroma) build up in coronary arteries, narrowing them and reducing blood flow to heart muscle. Can cause angina or heart attack (myocardial infarction)." },
      { term: "Stent and statin", definition: "Stent: metal mesh tube inserted to keep a narrowed artery open. Statin: drug that reduces blood cholesterol, slowing atheroma formation. Both treat CHD." },
      { term: "Artificial heart and valve", definition: "Mechanical replacements for damaged heart tissue. Artificial hearts are temporary bridges to transplant. Valves replace damaged natural valves. Risk of blood clots and infection." },
      { term: "Transpiration stream", definition: "Continuous column of water from roots through xylem to leaves, driven by evaporation from stomata (transpiration pull) and cohesion-tension between water molecules." },
      { term: "Assimilation in villi", definition: "Absorbed nutrients (glucose, amino acids) pass from the blood in capillaries through the epithelium into the body. Microvilli increase surface area; single-cell-thick walls minimise diffusion distance." },
    ],
    higherSections: [
      {
        heading: "Enzyme kinetics — temperature and pH graphs",
        body: "Graph of rate vs temperature rises to an optimum (e.g. 37°C for human enzymes), then falls steeply as enzymes denature. pH graph is similar with an optimum pH (e.g. pH 2 for pepsin in the stomach, pH 7 for intestinal enzymes). Explain shape using collision theory AND active site shape.",
      },
      {
        heading: "The heart — pressure and circulation",
        body: "Right side pumps deoxygenated blood to lungs (low pressure). Left side pumps oxygenated blood to body (high pressure) — left ventricle has thicker muscular wall. Cardiac cycle: atria contract → ventricles contract → valves prevent backflow. SA node initiates heartbeat.",
      },
      {
        heading: "Plant transport — cohesion-tension",
        body: "Water evaporates from mesophyll cells into air spaces and diffuses out of stomata. This creates tension pulling water up xylem. Water molecules cohere (hydrogen bonds) forming a continuous column. Root pressure contributes minimally. Phloem translocation moves sucrose by active loading and mass flow (source to sink).",
      },
    ],
    higherExamTips: [
      "Enzyme graphs: always mention denaturation when explaining the drop past optimum temperature.",
      "Compare arteries, veins, and capillaries in a table — wall thickness, valves, pressure, function.",
      "For transpiration: link stomata opening, wind, temperature, and humidity to rate changes.",
      "CHD treatment questions: evaluate lifestyle, stents, statins, and surgery with pros/cons.",
    ],
  },

  "infection-and-response": {
    higherConcepts: [
      { term: "Monoclonal antibodies", definition: "Identical antibodies produced from a single clone of hybridoma cells (B cell fused with tumour cell). Bind to one specific antigen. Used in pregnancy tests, cancer treatment, and targeting drugs." },
      { term: "Hybridoma cell", definition: "Fusion of a B lymphocyte (produces specific antibody) with a cancer cell (divides indefinitely). Combines specificity with unlimited division for monoclonal antibody production." },
      { term: "Vaccination — herd immunity", definition: "Vaccinating a large proportion of the population reduces pathogen spread, protecting unvaccinated individuals (e.g. those who cannot be vaccinated). Requires high vaccination rates." },
      { term: "Antibiotic resistance mechanism", definition: "Random mutations in bacteria may confer resistance (e.g. enzyme destroys antibiotic, altered target site). Natural selection favours resistant bacteria when antibiotics are used — overuse accelerates resistance." },
      { term: "Discovery of penicillin", definition: "Fleming (1928): noticed bacteria killed near Penicillium mould. Florey and Chain developed mass production. First antibiotic — revolutionised medicine but led to resistance with overuse." },
      { term: "Plant defences — chemical and mechanical", definition: "Mechanical: thorns, waxy cuticle, tough bark. Chemical: antibacterial compounds, poisons (e.g. nicotine in tobacco). Physical barriers prevent entry; chemical defences kill or deter pathogens." },
      { term: "Salicylic acid and cell wall thickening", definition: "Plants produce salicylic acid in response to infection, triggering defence genes. Deposits of cellulose and lignin thicken cell walls to slow pathogen spread." },
    ],
    higherSections: [
      {
        heading: "Monoclonal antibody production",
        body: "1) Inject mouse with antigen → stimulates B cells. 2) Extract B cells and fuse with tumour cells → hybridomas. 3) Screen for hybridoma producing correct antibody. 4) Clone selected hybridoma. 5) Mass produce antibody in fermenters. Used to target cancer cells: antibody delivers drug or triggers immune response.",
      },
      {
        heading: "Antibiotic resistance — evolution in action",
        body: "Bacteria reproduce rapidly with short generation time. Random DNA mutations create variation. Antibiotics kill non-resistant bacteria (selection pressure). Resistant bacteria survive and reproduce → population becomes mostly resistant. MRSA is methicillin-resistant Staphylococcus aureus. Prevention: complete courses, avoid overprescription, use in agriculture only when necessary.",
      },
      {
        heading: "Vaccination — primary and booster",
        body: "Vaccine contains dead/inactive pathogen or antigen. White blood cells produce antibodies and memory cells. Primary response is slow; secondary (booster) response is faster and stronger — more antibodies produced quickly. Booster vaccines maintain immunity over time.",
      },
    ],
    higherExamTips: [
      "Monoclonal antibody questions: describe production steps in order and state a specific use.",
      "Antibiotic resistance: link to natural selection and explain why completing the course matters.",
      "Distinguish antiseptic (skin/surfaces) from antibiotic (inside body) — antibiotics don't work on viruses.",
      "Plant defence questions: give both mechanical AND chemical examples with named structures.",
    ],
  },

  bioenergetics: {
    higherConcepts: [
      { term: "Limiting factors — photosynthesis", definition: "Light intensity, CO₂ concentration, and temperature can limit the rate. At low light, increasing light increases rate. At saturating light, another factor (e.g. CO₂) becomes limiting. Graph shows plateau when a factor is limiting." },
      { term: "Inverse square law — light intensity", definition: "Light intensity is inversely proportional to the square of the distance from the source: I ∝ 1/d². Doubling distance quarters the intensity — affects photosynthesis rate in experiments." },
      { term: "Anaerobic respiration in plants and yeast", definition: "Plants/yeast: glucose → ethanol + CO₂ + small amount of ATP. Muscle cells: glucose → lactic acid + small amount of ATP. Anaerobic releases far less ATP than aerobic." },
      { term: "Oxygen debt", definition: "After vigorous exercise, body continues elevated breathing to oxidise accumulated lactic acid in the liver back to CO₂ and water. Explains why breathing rate stays high after exercise stops." },
      { term: "Thylakoid and stroma", definition: "Thylakoids (grana): site of light-dependent reactions — chlorophyll absorbs light, water split, O₂ released, ATP and NADPH made. Stroma: site of light-independent reactions (Calvin cycle) — CO₂ fixed into glucose using ATP and NADPH." },
      { term: "Commercial uses of fermentation", definition: "Yeast anaerobic respiration produces ethanol (biofuel, alcoholic drinks) and CO₂ (bread rises). Bacteria ferment milk into yoghurt and cheese. Controlled fermentation in bioreactors." },
      { term: "Metabolism", definition: "The sum of all chemical reactions in an organism. Includes anabolic reactions (building molecules, e.g. photosynthesis) and catabolic reactions (breaking down molecules, e.g. respiration)." },
    ],
    higherSections: [
      {
        heading: "Photosynthesis — two-stage process",
        body: "Light-dependent (thylakoid membranes): light energy splits water (photolysis) → O₂ released, H⁺ used. ATP synthesised, NADP reduced to NADPH. Light-independent (Calvin cycle, stroma): CO₂ + RuBP → GP → TP → glucose, using ATP and NADPH. Rate limited by light, CO₂, temperature.",
      },
      {
        heading: "Respiration — aerobic vs anaerobic comparison",
        body: "Aerobic: glucose + O₂ → CO₂ + H₂O + ~38 ATP (via glycolysis, link reaction, Krebs cycle, oxidative phosphorylation — GCSE level: occurs in cytoplasm and mitochondria). Anaerobic: incomplete breakdown, only glycolysis ATP (~2 ATP). Lactic acid or ethanol + CO₂ as waste products.",
      },
      {
        heading: "Investigating photosynthesis experimentally",
        body: "Pondweed in water with NaHCO₃ (CO₂ source). Count bubbles or measure gas volume at different light intensities/distances. Control variables: temperature, CO₂ concentration, same plant. Plot rate vs light intensity — initial linear rise then plateau when CO₂ or temperature limits.",
      },
    ],
    higherExamTips: [
      "Limiting factor graphs: identify which factor is limiting in each section of the curve.",
      "Compare aerobic and anaerobic in a table — products, ATP yield, locations, when used.",
      "Oxygen debt: explain lactic acid removal AND why breathing rate remains elevated.",
      "For fermentation: state the word equation and a commercial application.",
    ],
  },

  "homeostasis-and-response": {
    higherConcepts: [
      { term: "Negative feedback loop", definition: "A change from the set point triggers a response that reverses the change. E.g. high blood glucose → insulin released → glucose absorbed into cells → blood glucose falls. Essential for homeostasis." },
      { term: "Type 1 vs Type 2 diabetes", definition: "Type 1: pancreas produces little/no insulin; treated with insulin injections; often genetic/onset young. Type 2: body cells resistant to insulin; linked to obesity/inactivity; managed by diet, exercise, medication." },
      { term: "ADH and water reabsorption", definition: "Antidiuretic hormone released by pituitary when blood is too concentrated. ADH increases permeability of kidney tubules → more water reabsorbed → smaller volume of concentrated urine." },
      { term: "Reflex arc — neurones", definition: "Stimulus → receptor → sensory neurone → relay neurone (CNS) → motor neurone → effector (muscle/gland) → response. Synapses use neurotransmitters across the gap. Reflex is automatic and fast." },
      { term: "Accommodation", definition: "Ciliary muscles and suspensory ligaments change lens shape. Near object: ciliary muscles contract, lens thicker, more refraction. Far object: ciliary muscles relax, lens thinner." },
      { term: "Colour blindness and cataracts", definition: "Colour blindness: inherited, often X-linked — missing cone cell pigments. Cataracts: cloudy lens reduces light entry — treated by lens replacement surgery." },
      { term: "Plant hormones — auxin", definition: "Auxin (IAA) produced in shoot tips. Unequal distribution causes phototropism (growth towards light) and gravitropism (roots grow down, shoots up). Used in rooting powder and weedkillers." },
      { term: "Gibberellins and ethene", definition: "Gibberellins: stimulate stem growth, seed germination, fruit growth. Ethene: gas that triggers fruit ripening — used commercially to ripen bananas during transport." },
    ],
    higherSections: [
      {
        heading: "Blood glucose control — detailed",
        body: "Normal: ~90 mg/d100ml. After eating: glucose rises → pancreas releases insulin → liver/muscles store glucose as glycogen; cells take up glucose. Fasting: glucose falls → glucagon released → liver breaks down glycogen → glucose released into blood. Diabetics cannot regulate this effectively.",
      },
      {
        heading: "The eye — focusing and defects",
        body: "Light refracted by cornea and lens onto retina. Rods (dim light, B&W) and cones (bright light, colour) in retina. Myopia (short-sight): distant image focuses in front of retina — concave lens corrects. Hyperopia (long-sight): near image focuses behind retina — convex lens corrects.",
      },
      {
        heading: "Plant responses — auxin mechanism",
        body: "Auxin accumulates on shaded side of shoot → unequal growth → shoot bends towards light. In roots, auxin inhibits growth on lower side → root bends downward (positive gravitropism). Commercial: selective weedkillers (auxin overload kills broadleaf weeds), fruit development.",
      },
    ],
    higherExamTips: [
      "Diabetes comparison: cause, treatment, lifestyle factors — often a 6-mark compare question.",
      "Draw and label a reflex arc with all neurone types and direction of impulse.",
      "ADH: link blood concentration → pituitary → kidney → urine volume in sequence.",
      "Eye defect questions: state where image forms, which lens corrects, and why.",
    ],
  },

  "inheritance-variation-and-evolution": {
    higherConcepts: [
      { term: "DNA structure — double helix", definition: "Two antiparallel strands of nucleotides twisted into a double helix. Each nucleotide: phosphate + deoxyribose sugar + base (A, T, C, G). A pairs with T, C pairs with G — complementary base pairing held by hydrogen bonds." },
      { term: "Protein synthesis", definition: "Transcription: DNA → mRNA in nucleus (gene copied). Translation: mRNA read by ribosome, tRNA brings amino acids, polypeptide chain forms. Sequence of bases (triplets/codons) determines amino acid sequence." },
      { term: "Codon and anticodon", definition: "Codon: three bases on mRNA coding for one amino acid. Anticodon: three complementary bases on tRNA that pairs with the codon. Start codon AUG begins translation." },
      { term: "Homozygous and heterozygous", definition: "Homozygous: two identical alleles (AA or aa). Heterozygous: two different alleles (Aa). Genotype is the alleles present; phenotype is the expressed characteristic." },
      { term: "Punnett square — monohybrid cross", definition: "Shows possible offspring genotypes from two parents. E.g. Aa × Aa → 1 AA : 2 Aa : 1 aa (1:2:1 ratio). Phenotype ratio 3:1 if A is dominant." },
      { term: "Sex-linked inheritance", definition: "Alleles on X chromosome. Males (XY) express X-linked recessive conditions more often (only one X). E.g. colour blindness, haemophilia — passed through carrier females." },
      { term: "Polygenic inheritance", definition: "Characteristic controlled by multiple genes (e.g. height, skin colour). Shows continuous variation — bell-shaped distribution in a population." },
      { term: "Speciation", definition: "Formation of a new species. Geographic isolation → populations cannot interbreed → different selection pressures → genetic divergence → reproductive isolation → new species." },
    ],
    higherSections: [
      {
        heading: "From gene to protein",
        body: "Gene (section of DNA) → transcription → mRNA leaves nucleus → attaches to ribosome → tRNA molecules bring specific amino acids → peptide bonds form → protein folds into functional shape. Mutation in DNA can change amino acid sequence → altered protein function.",
      },
      {
        heading: "Genetic crosses — worked examples",
        body: "Cross heterozygous parents (Bb × Bb): gametes B and b from each. Offspring: BB, Bb, Bb, bb → 25% homozygous dominant, 50% heterozygous, 25% homozygous recessive. For sex-linked: XᴺXᶜ × XᴺY (carrier mother, normal father) → 50% chance son is colour blind.",
      },
      {
        heading: "Evolution and natural selection",
        body: "Variation exists in population (mutation, meiosis). Selection pressure (e.g. antibiotic, predator, climate). Individuals with advantageous alleles survive and reproduce more. Allele frequency changes over generations. Darwin's finches: beak variation adapted to different food sources on Galapagos Islands.",
      },
    ],
    higherExamTips: [
      "Genetic crosses: show gametes, Punnett square, genotype AND phenotype ratios.",
      "Sex-linked: always state male/female genotypes with X and Y chromosomes.",
      "Protein synthesis: transcription AND translation in correct order with locations.",
      "Evolution 6-markers: variation → selection pressure → survival → reproduction → allele frequency change.",
    ],
  },

  ecology: {
    higherConcepts: [
      { term: "Quadrat and transect sampling", definition: "Quadrat: square frame placed randomly to estimate population density or species frequency. Transect: tape measure along a gradient; quadrats or belt transect record species change with distance (e.g. sand dune succession)." },
      { term: "Capture-recapture (Lincoln Index)", definition: "Population = (N₁ × N₂) / M₂. N₁ = first capture marked and released. N₂ = second capture total. M₂ = marked individuals in second sample. Assumes random mixing and no births/deaths/immigration." },
      { term: "Trophic levels and energy transfer", definition: "Producer → primary consumer → secondary consumer → tertiary consumer. Only ~10% energy transfers to next level (90% lost as heat, movement, waste, respiration). Limits food chain length." },
      { term: "Biomass pyramid", definition: "Shows total mass of organisms at each trophic level. Usually pyramid-shaped (producers most biomass). Can be inverted for short-lived producers (e.g. phytoplankton eaten faster than they grow)." },
      { term: "Carbon cycle — key processes", definition: "CO₂ removed: photosynthesis. CO₂ returned: respiration, combustion, decomposition. Fossil fuel burning releases stored carbon → increases atmospheric CO₂ → enhanced greenhouse effect." },
      { term: "Eutrophication", definition: "Excess fertiliser (nitrates/phosphates) in water → algal bloom → blocks light → plants die → decomposers multiply → oxygen depleted → fish die. Sequence must be explained in order." },
      { term: "Biodiversity", definition: "Variety of species and genetic diversity in an ecosystem. High biodiversity increases ecosystem stability and resilience. Threatened by habitat destruction, pollution, climate change, invasive species." },
      { term: "Sustainable fishing and forestry", definition: "Fish: quotas, net mesh size, breeding season bans. Forestry: replanting, selective felling, maintaining age structure. Aim: meet current needs without depleting future resources." },
    ],
    higherSections: [
      {
        heading: "Calculating population size",
        body: "Quadrat method: count organisms in quadrat, calculate mean per m², multiply by total area. Capture-recapture: mark 50 (N₁), release, recapture 40 (N₂), 10 marked (M₂) → population = (50 × 40) / 10 = 200. State assumptions and limitations.",
      },
      {
        heading: "Energy in ecosystems",
        body: "Sun → producers (photosynthesis, ~1% solar energy captured) → consumers. At each transfer ~90% energy lost (not all eaten, not all digested, respiration). Pyramids of energy always decrease upward. Efficiency = (energy at higher level / energy at lower level) × 100%.",
      },
      {
        heading: "Human impact and conservation",
        body: "Deforestation: habitat loss, CO₂ increase, soil erosion. Global warming: melting ice, sea level rise, species migration/extinction. Conservation: protected areas, seed banks, captive breeding, education, legislation (CITES). Evaluate cost vs benefit of different strategies.",
      },
    ],
    higherExamTips: [
      "Capture-recapture: show calculation AND state at least one assumption.",
      "Eutrophication: describe the full chain of events in correct sequence.",
      "Energy transfer: use the 10% rule and explain WHY energy is lost at each level.",
      "Sampling: explain random placement of quadrats and why it reduces bias.",
    ],
  },

  // ─── CHEMISTRY ─────────────────────────────────────────────────────────────

  "atomic-structure-and-the-periodic-table": {
    higherConcepts: [
      { term: "Electron configuration (beyond Ar)", definition: "Electrons fill shells: 2, 8, 8. E.g. calcium (20): 2,8,8,2. Outer electrons determine chemical properties. Transition metals fill inner shells first — variable oxidation states." },
      { term: "Relative formula mass (Mr)", definition: "Sum of relative atomic masses of all atoms in a formula. E.g. MgO: 24 + 16 = 40. Used in mole calculations." },
      { term: "Development of periodic table", definition: "Mendeleev: ordered by atomic mass, left gaps, predicted properties of undiscovered elements (gallium, scandium). Modern table: atomic number order, groups have similar properties due to same outer electrons." },
      { term: "Transition metals", definition: "Block between Groups 2 and 3. Form coloured compounds, act as catalysts (iron in Haber process, nickel in hydrogenation), variable oxidation states, less reactive than Group 1." },
      { term: "Noble gas configuration", definition: "Full outer shell (2 or 8 electrons) — stable, unreactive. Atoms gain/lose/share electrons to achieve noble gas configuration." },
      { term: "Mass spectrometry", definition: "Technique to measure relative atomic mass. Ionises atoms, accelerates them, deflects by magnetic field — heavier ions deflected less. Also gives relative abundance of isotopes." },
    ],
    higherSections: [
      {
        heading: "Calculating relative atomic mass from isotopes",
        body: "Ar = Σ(isotope mass × abundance) / 100. E.g. chlorine: ³⁵Cl (75%) and ³⁷Cl (25%): Ar = (35×75 + 37×25) / 100 = 35.5. Show working — examiners award method marks.",
      },
      {
        heading: "Group trends — detailed",
        body: "Group 1: reactivity increases down group (outer electron further from nucleus, easier to lose). Group 7: reactivity decreases down group (harder to gain electron). Group 0: boiling point increases down group (more electrons, stronger intermolecular forces).",
      },
      {
        heading: "History of atomic models",
        body: "Each model refined by new evidence. Rutherford's alpha scattering: most atom is empty space, dense positive nucleus. Bohr explained line spectra with electron shells. Modern: electron cloud/orbital model — probability of finding electrons.",
      },
    ],
    higherExamTips: [
      "Isotope calculations: show (mass₁ × %₁ + mass₂ × %₂) / 100 clearly.",
      "Explain group trends in terms of outer electrons and nuclear attraction.",
      "Distinguish relative atomic mass (weighted mean) from mass number (single isotope).",
      "Transition metal questions: name a catalyst and the process it catalyses.",
    ],
  },

  "bonding-structure-and-properties-of-matter": {
    higherConcepts: [
      { term: "Ionic bonding — electron transfer", definition: "Metal atoms lose outer electrons → positive ions. Non-metal atoms gain electrons → negative ions. Electrostatic attraction between oppositely charged ions. Giant ionic lattice." },
      { term: "Covalent bonding — dot-and-cross", definition: "Non-metals share electron pairs to achieve full outer shells. Single, double, or triple bonds. Can draw dot-and-cross diagrams for H₂, Cl₂, H₂O, CH₄, NH₃, CO₂." },
      { term: "Metallic bonding", definition: "Positive metal ions in a sea of delocalised electrons. Strong electrostatic attraction. Delocalised electrons explain electrical conductivity and thermal conductivity." },
      { term: "Giant covalent structures", definition: "Diamond: each C bonded to 4 others — hardest natural substance, no conductivity. Graphite: layers of hexagonal rings, weak interlayer forces — lubricant, conductor (delocalised electrons between layers)." },
      { term: "Graphene and fullerenes", definition: "Graphene: single layer of graphite — strongest material, conducts electricity. Fullerenes (e.g. C₆₀ buckminsterfullerene): hollow carbon cages. Nanotubes: cylindrical fullerenes — incredibly strong, used in composites." },
      { term: "Alloys", definition: "Mixture of metals (or metal + non-metal) with different-sized atoms disrupting the lattice — harder and stronger than pure metal. E.g. steel (iron + carbon), brass (copper + zinc)." },
      { term: "Intermolecular forces", definition: "Weak forces between simple covalent molecules. Determine melting/boiling points. Stronger intermolecular forces → higher melting point. Not the same as covalent bonds within molecules." },
      { term: "Polymers", definition: "Long chains of repeating monomer units. Addition polymerisation: alkene monomers join (C=C breaks, forms chain). E.g. poly(ethene) from ethene. Thermosoftening vs thermosetting polymers." },
    ],
    higherSections: [
      {
        heading: "Properties linked to structure",
        body: "Ionic: high mp, brittle, conduct when molten/dissolved (ions mobile), soluble in water. Simple covalent: low mp, gases/liquids at RT, no conductivity (no charged particles). Giant covalent: very high mp, hard, insoluble. Metallic: high mp, malleable, conduct heat/electricity.",
      },
      {
        heading: "Drawing dot-and-cross diagrams",
        body: "Show only outer electrons. Ionic: transfer then draw ions with brackets and charges. Covalent: shared pairs between atoms. Practice: NaCl (ionic), MgO (ionic), H₂O (covalent, 2 bond pairs), N₂ (triple bond), CO₂ (2 double bonds).",
      },
      {
        heading: "Nanoparticles",
        body: "1–100 nm in size. Very high surface area to volume ratio → more reactive. Uses: sunscreens (TiO₂ blocks UV), medicine (drug delivery), catalysts, stronger composites. Risk: unknown health effects of nanoparticle inhalation.",
      },
    ],
    higherExamTips: [
      "Always link property to structure and bonding type — examiners want this connection.",
      "Dot-and-cross: show outer electrons only; ionic compounds need brackets and charges.",
      "Compare diamond and graphite: bonding same (covalent C), structure different, properties different.",
      "Alloy questions: explain WHY they are harder (different atom sizes disrupt layers).",
    ],
  },

  "quantitative-chemistry": {
    higherConcepts: [
      { term: "The mole (mol)", definition: "Amount of substance containing 6.02 × 10²³ particles (Avogadro's constant). One mole of any substance has a mass in grams equal to its Mr or Ar." },
      { term: "Moles = mass ÷ Mr", definition: "n = m / Mr. E.g. 8 g of O₂ (Mr = 32): n = 8/32 = 0.25 mol. Rearrange: m = n × Mr." },
      { term: "Concentration (mol/dm³)", definition: "c = n / V (volume in dm³). E.g. 0.5 mol in 250 cm³ = 0.5 / 0.25 = 2 mol/dm³. 1000 cm³ = 1 dm³." },
      { term: "Balanced equation mole ratios", definition: "Coefficients give mole ratio. 2H₂ + O₂ → 2H₂O: 2 mol H₂ reacts with 1 mol O₂ producing 2 mol H₂O. Use ratios for reacting mass calculations." },
      { term: "Limiting reactant", definition: "The reactant used up first, limiting the amount of product. Calculate moles of each reactant; use ratio to find which runs out first." },
      { term: "Percentage yield", definition: "Actual yield ÷ theoretical yield × 100%. Less than 100% due to incomplete reaction, product lost in separation, side reactions." },
      { term: "Atom economy", definition: "Mr of desired product ÷ total Mr of all products × 100%. Higher atom economy = less waste. Addition polymerisation has 100% atom economy." },
      { term: "Titration", definition: "Method to find concentration: known concentration acid/alkali reacts with unknown. Use indicator, read burette volume, calculate moles, then concentration." },
    ],
    higherSections: [
      {
        heading: "Reacting mass calculation — step by step",
        body: "1) Write balanced equation. 2) Calculate moles of known substance (n = m/Mr). 3) Use mole ratio for unknown. 4) Calculate mass (m = n × Mr). E.g. How much MgO from 6 g Mg? Mg + O → MgO (balance: 2Mg + O₂ → 2MgO). 6 g Mg = 6/24 = 0.25 mol → 0.25 mol MgO = 0.25 × 40 = 10 g.",
      },
      {
        heading: "Titration calculation",
        body: "1) Mean titre from concordant results (within 0.10 cm³). 2) Moles of known: n = c × V (V in dm³). 3) Mole ratio from equation. 4) Moles of unknown. 5) c = n / V. Always convert cm³ to dm³ by dividing by 1000.",
      },
      {
        heading: "Gas volume at RTP",
        body: "One mole of any gas occupies 24 dm³ at room temperature and pressure (RTP). n = V / 24 or V = n × 24. E.g. 0.5 mol CO₂ = 12 dm³ at RTP.",
      },
    ],
    higherExamTips: [
      "Show ALL working: moles, ratio, final answer with units.",
      "Titration: use mean titre only; convert cm³ to dm³.",
      "Limiting reactant: calculate moles of BOTH reactants before deciding.",
      "Percentage yield and atom economy: state the formula before substituting numbers.",
    ],
  },

  "chemical-changes": {
    higherConcepts: [
      { term: "Reactivity series — displacement", definition: "More reactive metal displaces less reactive metal from its compound. E.g. Zn + CuSO₄ → ZnSO₄ + Cu (zinc more reactive). Used to extract metals and compare reactivity." },
      { term: "Extraction of metals", definition: "Less reactive (Cu, Ag): heat with carbon (reduction). More reactive (Na, Al): electrolysis of molten compound. Iron: blast furnace with coke (C) as reducing agent." },
      { term: "Electrolysis — half equations", definition: "Cathode (reduction): Cu²⁺ + 2e⁻ → Cu. Anode (oxidation): 2Cl⁻ → Cl₂ + 2e⁻. Electrons are reactants/products. Sum must balance charge." },
      { term: "Electrolysis of aqueous solutions", definition: "At cathode: least reactive metal ion or H⁺ (if less reactive than H). At anode: halide ion or OH⁻ (from water) → O₂. Products depend on reactivity and concentration." },
      { term: "Acids and bases — ionic theory", definition: "Acid: source of H⁺ ions in water. Alkali: source of OH⁻ ions. Neutralisation: H⁺ + OH⁻ → H₂O. Strong acid fully ionises; weak acid partially ionises." },
      { term: "pH and hydrogen ion concentration", definition: "pH = -log[H⁺]. pH 0–6 acidic, 7 neutral, 8–14 alkaline. Each pH unit is a tenfold change in [H⁺]. pH 3 is 10× more acidic than pH 4." },
      { term: "Strong vs weak acids", definition: "Strong (HCl, H₂SO₄, HNO₃): fully ionised in water, low pH at same concentration. Weak (CH₃COOH): partially ionised, higher pH at same concentration. Same concentration → strong acid has more H⁺ ions." },
      { term: "Electrochemical cell", definition: "Two different metals in electrolyte connected by wires — voltage produced by difference in reactivity (electron transfer). Basis of batteries." },
    ],
    higherSections: [
      {
        heading: "Electrolysis — predicting products",
        body: "Molten compound: metal at cathode, non-metal at anode. Aqueous with inert electrodes: cathode gets least reactive metal OR H₂ from water; anode gets halogen OR O₂ from water. Reactive metals (Na, K) stay in solution — H₂ produced at cathode instead.",
      },
      {
        heading: "Half equations — writing rules",
        body: "Cathode: reduction (gain electrons) — metals or 2H⁺ + 2e⁻ → H₂. Anode: oxidation (lose electrons) — halides or 4OH⁻ → O₂ + 2H₂O + 4e⁻. Balance atoms then charge. In exams, state electrode name and whether oxidation or reduction occurs.",
      },
      {
        heading: "Acid reactions — three types",
        body: "Acid + metal → salt + H₂. Acid + base → salt + H₂O. Acid + carbonate → salt + H₂O + CO₂. All produce H⁺ reacting. E.g. 2HCl + CaCO₃ → CaCl₂ + H₂O + CO₂.",
      },
    ],
    higherExamTips: [
      "Half equations: balance charge with electrons; state electrode and process.",
      "Reactivity series: know mnemonic and apply to displacement and extraction.",
      "Strong vs weak acid: same concentration, different pH — explain ionisation.",
      "Electrolysis of brine: products H₂ (cathode), Cl₂ (anode), NaOH (solution).",
    ],
  },

  "energy-changes": {
    higherConcepts: [
      { term: "Exothermic and endothermic", definition: "Exothermic: energy released to surroundings (temperature rises) — combustion, neutralisation, respiration. Endothermic: energy absorbed (temperature falls) — thermal decomposition, photosynthesis." },
      { term: "Energy level diagram", definition: "Reactants and products shown on y-axis (energy). Exothermic: products lower than reactants (ΔH negative). Endothermic: products higher (ΔH positive). Activation energy (Ea) is the hump — minimum energy for reaction." },
      { term: "Activation energy", definition: "Minimum energy particles need to collide successfully and react. Catalyst lowers Ea by providing alternative reaction pathway — more particles have enough energy to react at a given temperature." },
      { term: "Bond energy calculations", definition: "Energy in = bonds broken (endothermic). Energy out = bonds formed (exothermic). ΔH = energy to break bonds − energy released forming bonds. Negative ΔH = exothermic." },
      { term: "Le Chatelier's principle", definition: "If a system at equilibrium is disturbed, the position shifts to oppose the change. Increase temperature → shifts endothermic direction. Increase pressure → shifts to fewer gas molecules. Increase concentration → shifts away from added substance." },
      { term: "Reversible reactions and equilibrium", definition: "Forward and reverse reactions occur simultaneously. At equilibrium: rates equal, concentrations constant (closed system). E.g. N₂ + 3H₂ ⇌ 2NH₃ (Haber process)." },
      { term: "Haber process conditions", definition: "450°C, 200 atm, iron catalyst. Compromise: lower temperature favours yield but slow; higher pressure favours products but expensive. Catalyst speeds up reaction without shifting equilibrium." },
      { term: "Cells and batteries", definition: "Chemical energy → electrical energy via redox reactions. Non-rechargeable: reactants used up. Rechargeable (Li-ion): reverse reaction restores reactants when charging." },
    ],
    higherSections: [
      {
        heading: "Bond energy calculation — worked example",
        body: "H₂ + Cl₂ → 2HCl. Bonds broken: H–H (436) + Cl–Cl (242) = 678 kJ/mol. Bonds formed: 2 × H–Cl (2 × 431) = 862 kJ/mol. ΔH = 678 − 862 = −184 kJ/mol (exothermic). Negative means energy released overall.",
      },
      {
        heading: "Le Chatelier — applying to Haber process",
        body: "N₂ + 3H₂ ⇌ 2NH₃ (exothermic forward). Higher T: equilibrium shifts left (endothermic direction) → less NH₃. Higher P: shifts right (4 mol → 2 mol) → more NH₃. Remove NH₃ as formed: shifts right. Industrial conditions balance yield, rate, and cost.",
      },
      {
        heading: "Reaction profiles and catalysts",
        body: "Catalyst lowers activation energy — shown as lower 'hump' on energy diagram. Does NOT change ΔH or equilibrium position. Increases rate of both forward and reverse equally. More successful collisions per second at same temperature.",
      },
    ],
    higherExamTips: [
      "Energy diagrams: label reactants, products, activation energy, and ΔH.",
      "Bond energy: bonds broken MINUS bonds formed; negative = exothermic.",
      "Le Chatelier: state the shift AND explain why using 'opposes the change'.",
      "Haber process: explain why 450°C is a compromise between yield and rate.",
    ],
  },

  "organic-chemistry": {
    higherConcepts: [
      { term: "Homologous series", definition: "Family of compounds with same functional group and general formula. Adjacent members differ by CH₂. Show similar chemical properties and gradual physical property trends (e.g. boiling point increases)." },
      { term: "Functional groups", definition: "Alkane (C–C): unreactive. Alkene (C=C): addition reactions. Alcohol (–OH): burns, oxidised. Carboxylic acid (–COOH): acidic, reacts with carbonates. Ester (–COO–): fruity smell." },
      { term: "Addition reactions of alkenes", definition: "C=C double bond opens; atoms add across it. Ethene + Br₂ → dibromoethane (bromine water decolourises — test for unsaturation). Ethene + H₂ → ethane (with Ni catalyst). Ethene + steam → ethanol (catalyst)." },
      { term: "Fermentation", definition: "Glucose → ethanol + CO₂ (yeast, anaerobic, ~37°C). Used for alcoholic drinks and bioethanol fuel. Fractional distillation separates ethanol (bp 78°C) from water." },
      { term: "Cracking", definition: "Breaking long alkane chains into shorter alkanes and alkenes. Heat + catalyst (aluminium oxide). Alkenes are more useful (make polymers, ethanol). E.g. decane → octane + ethene." },
      { term: "Polymerisation", definition: "Addition: many alkene monomers → polymer (C=C breaks, long chain forms). E.g. nCH₂=CH₂ → –(CH₂–CH₂)ₙ–. Condensation: monomers join, small molecule (H₂O) eliminated — nylon, polyester." },
      { term: "Esterification", definition: "Alcohol + carboxylic acid → ester + water (acid catalyst, reversible). Esters have fruity smells — used in flavourings and perfumes." },
      { term: "DNA as a polymer", definition: "DNA is a polymer of nucleotides. Each nucleotide: phosphate group + deoxyribose sugar + nitrogenous base. Double helix held by hydrogen bonds between complementary bases." },
    ],
    higherSections: [
      {
        heading: "Naming and drawing organic compounds",
        body: "Alkanes: methane, ethane, propane, butane (CnH₂ₙ₊₂). Alkenes: ethene, propene (CnH₂ₙ). Draw structural formulae showing all bonds. Functional group determines reactions: alkenes decolourise bromine water; carboxylic acids fizz with carbonates.",
      },
      {
        heading: "From crude oil to useful products",
        body: "Fractional distillation separates crude oil by boiling point. Naphtha → cracking → alkenes → polymerisation (plastics) or hydration → ethanol. Bitumen for roads, fuel gases for heating, kerosene for aircraft.",
      },
      {
        heading: "Addition polymerisation — repeating unit",
        body: "Identify monomer (alkene). Draw repeating unit by opening C=C and continuing chain: –[CH₂–CH(R)]–. E.g. propene → poly(propene) –[CH₂–CH(CH₃)]–. Displayed formula shows all atoms and bonds.",
      },
    ],
    higherExamTips: [
      "Bromine water test: alkene decolourises, alkane does not — state observation.",
      "Draw structural formulae with all C–H and C–C bonds shown.",
      "Polymer questions: draw repeating unit from monomer and vice versa.",
      "Fermentation conditions: yeast, anaerobic, optimum ~30–37°C, glucose substrate.",
    ],
  },

  "chemistry-of-the-atmosphere": {
    higherConcepts: [
      { term: "Early atmosphere evolution", definition: "Volcanic outgassing: CO₂, water vapour, nitrogen, methane, ammonia. No oxygen. Oceans formed as water vapour condensed. CO₂ dissolved in oceans and used in photosynthesis." },
      { term: "Oxygen increase — photosynthesis", definition: "Algae and plants photosynthesised, releasing O₂. Oxygen allowed ozone layer formation and aerobic respiration. Carbon cycle balanced CO₂ and O₂ levels over millions of years." },
      { term: "Greenhouse effect mechanism", definition: "CO₂, methane, water vapour absorb infrared radiation emitted by Earth and re-emit it, trapping thermal energy. Natural greenhouse effect keeps Earth warm enough for life. Enhanced effect from burning fossil fuels." },
      { term: "Global climate change evidence", definition: "Rising global temperatures, melting ice caps, rising sea levels, more extreme weather, changing migration patterns. Correlation between CO₂ levels and temperature from ice core data." },
      { term: "Carbon footprint", definition: "Total greenhouse gas emissions caused by an individual, organisation, or product. Reduced by: renewable energy, public transport, insulation, reducing meat consumption, carbon capture." },
      { term: "Atmospheric pollutants", definition: "CO: toxic, binds to haemoglobin. SO₂: acid rain, respiratory problems. NOₓ: acid rain, photochemical smog. Particulates: respiratory disease, global dimming." },
      { term: "Catalytic converter", definition: "Vehicle exhaust system: converts CO → CO₂, NO → N₂, unburnt hydrocarbons → CO₂ + H₂O. Uses platinum/palladium catalyst. Reduces harmful emissions but produces CO₂." },
      { term: "Alternative fuels", definition: "Hydrogen: burns to water only, but production energy-intensive. Biofuels: renewable but may compete with food crops. Electric vehicles: zero tailpipe emissions, but electricity source matters." },
    ],
    higherSections: [
      {
        heading: "Evolution of Earth's atmosphere",
        body: "Phase 1: volcanic gases (CO₂, H₂O, N₂). Phase 2: oceans form, CO₂ dissolves. Phase 3: photosynthesis → O₂ rises, CO₂ falls. Phase 4: ozone layer forms, protecting from UV. Phase 5: modern atmosphere ~78% N₂, 21% O₂, 0.04% CO₂.",
      },
      {
        heading: "Combustion and pollution",
        body: "Complete combustion: fuel + O₂ → CO₂ + H₂O. Incomplete: also CO and particulates (soot). Sulfur in fuel → SO₂ → acid rain (H₂SO₄). High temperature engines: N₂ + O₂ → NOₓ. All mitigated by cleaner fuels, catalytic converters, flue gas desulfurisation.",
      },
      {
        heading: "Evaluating climate change responses",
        body: "Individual: reduce energy use, recycle, sustainable transport. National: renewable energy investment, carbon taxes, legislation. International: Paris Agreement targets. Evaluate: cost, feasibility, impact, timescale. Carbon capture stores CO₂ underground.",
      },
    ],
    higherExamTips: [
      "Atmosphere evolution: put stages in chronological order with reasons for each change.",
      "Greenhouse effect: explain absorption and re-emission of IR radiation.",
      "Pollutant questions: state source, effect, and one method of reduction.",
      "Evaluate questions: give advantages AND disadvantages of solutions.",
    ],
  },

  "chemical-analysis": {
    higherConcepts: [
      { term: "Rf calculation", definition: "Rf = distance travelled by spot ÷ distance travelled by solvent front. Same conditions give same Rf — used to identify unknowns. Rf never exceeds 1." },
      { term: "Flame emission spectroscopy", definition: "Instrumental method: heats sample, measures wavelengths of light emitted. More sensitive than flame tests; identifies multiple ions simultaneously." },
      { term: "Halide test (silver nitrate)", definition: "Acidify with dilute nitric acid, add AgNO₃. Cl⁻ white precipitate, Br⁻ cream, I⁻ yellow. Precipitate colour darkens down group." },
      { term: "Sulfate and carbonate tests", definition: "Sulfate: add BaCl₂ → white precipitate (insoluble in acid). Carbonate: add acid → CO₂ gas (limewater turns cloudy)." },
      { term: "Melting point purity", definition: "Pure substance melts at sharp temperature. Impurities lower melting point and broaden range — used to assess purity." },
    ],
    higherSections: [
      {
        heading: "Chromatography — interpreting results",
        body: "If two spots travel same distance (same Rf), likely same substance. Different solvents may separate overlapping spots. Locating agent may be needed for colourless substances (e.g. ninhydrin for amino acids).",
      },
      {
        heading: "Combined ion identification",
        body: "Use multiple tests: flame test narrows metal ion, NaOH precipitate confirms Fe²⁺/Fe³⁺/Cu²⁺/Ca²⁺. Halide test after acidification. Always state full observation: colour, precipitate, gas formed.",
      },
    ],
    higherExamTips: [
      "Rf: measure from baseline to centre of spot and to solvent front.",
      "Instrumental methods: state advantage (speed, accuracy, sensitivity) over chemical tests.",
      "Ion tests: write balanced ionic equations for precipitate formation.",
    ],
  },

  "using-resources": {
    higherConcepts: [
      { term: "Haber process sustainability", definition: "Produces ammonia for fertilisers — feeds billions but uses fossil fuels, high energy, CO₂ emissions. Greener alternatives researched (electrochemical synthesis)." },
      { term: "Corrosion prevention — sacrificial protection", definition: "Zinc or magnesium attached to iron — more reactive metal corrodes instead (galvanising, sacrificial anodes on ships)." },
      { term: "Reverse osmosis", definition: "Seawater forced through semi-permeable membrane — water passes, salt retained. High pressure needed; used in desalination plants." },
      { term: "Biodegradable vs compostable", definition: "Biodegradable breaks down naturally; compostable needs specific conditions. Neither solves all plastic pollution — reduction and reuse still important." },
      { term: "Quarrying and land use", definition: "Extracting metal ores and limestone damages habitats. Restoration and recycling reduce need for new extraction." },
    ],
    higherSections: [
      {
        heading: "Evaluating LCA — worked comparison",
        body: "Plastic bag vs paper bag: plastic uses less energy to make but persists in environment. Paper uses more energy/water but biodegrades. Cotton tote must be reused 100+ times to offset manufacturing impact. LCA depends on assumptions.",
      },
      {
        heading: "Wastewater — aerobic and anaerobic stages",
        body: "Aerobic: bacteria in presence of oxygen break down organic waste. Anaerobic: digest sludge, produce methane (can be used as fuel). Treated water returned to rivers; sludge used as fertiliser or landfill.",
      },
    ],
    higherExamTips: [
      "LCA 6-markers: all four stages, specific impacts, justified recommendation.",
      "Potable water: explain why chlorination is essential even after filtration.",
      "Evaluate recycling: energy saved AND collection/transport costs.",
    ],
  },

  // ─── PHYSICS ───────────────────────────────────────────────────────────────

  energy: {
    higherConcepts: [
      { term: "Specific heat capacity (c)", definition: "Energy needed to raise 1 kg of a substance by 1°C (J/kg°C). E = mcΔT. Water has high c (4200 J/kg°C) — oceans moderate climate. Depends on material." },
      { term: "Specific latent heat (L)", definition: "Energy to change 1 kg of substance state without temperature change. Fusion (melting): E = mL. Vaporisation: E = mL. Different values for fusion and vaporisation of same substance." },
      { term: "Heating and cooling curves", definition: "Flat sections during state change (latent heat absorbed/released, temperature constant). Sloped sections: temperature change (specific heat capacity). Plateau at melting/boiling point." },
      { term: "Thermal conductivity", definition: "Rate at which thermal energy transfers through a material. Metals: high (free electrons carry energy). Insulators: low (trapped air in fibres). Reducing conduction: cavity walls, loft insulation, double glazing." },
      { term: "Efficiency — wasted energy", definition: "Energy dissipated to surroundings (usually as heat). Cannot be destroyed but spreads out — less useful. Improve efficiency: lubrication, insulation, streamline design." },
      { term: "Power and energy transfer", definition: "P = E/t (watts = joules per second). Also P = IV (electrical). Higher power = faster energy transfer. kWh is energy unit for bills: 1 kWh = 3,600,000 J." },
      { term: "National Grid", definition: "Network distributing electricity. Step up voltage at power station (reduces current, less energy lost as heat in cables). Step down at substations for safe home use." },
      { term: "Renewable vs non-renewable comparison", definition: "Renewables: sustainable, low CO₂, but intermittent and location-dependent. Non-renewables: reliable, high energy density, but finite and polluting. Energy density affects storage and transport." },
    ],
    higherSections: [
      {
        heading: "E = mcΔT calculations",
        body: "How much energy to heat 2 kg water from 20°C to 80°C? E = mcΔT = 2 × 4200 × 60 = 504,000 J = 504 kJ. Always identify m, c, ΔT. Convert units: g → kg, kJ ↔ J.",
      },
      {
        heading: "Latent heat calculations",
        body: "How much energy to melt 500 g ice at 0°C? E = mL = 0.5 × 334,000 = 167,000 J (Lf for ice = 334,000 J/kg). Temperature stays at 0°C during melting. Then additional energy needed to heat water.",
      },
      {
        heading: "Sankey diagrams — quantitative",
        body: "Arrow width proportional to energy. Input = useful output + wasted output. Efficiency = useful / total × 100%. Draw to scale in exams when asked. Identify where energy is wasted (friction, heat to surroundings, sound).",
      },
    ],
    higherExamTips: [
      "SHC: always use mass in kg and show E = mcΔT with substitution.",
      "Latent heat: temperature does NOT change during state change — say this explicitly.",
      "Efficiency cannot exceed 100% — if you get >100%, check your calculation.",
      "kWh calculations: power (kW) × time (hours) = energy (kWh).",
    ],
  },

  electricity: {
    higherConcepts: [
      { term: "Charge (Q) and current (I)", definition: "Q = It. Charge in coulombs (C), current in amps (A), time in seconds. Electron flow: conventional current is positive to negative; electrons flow opposite direction." },
      { term: "Potential difference (V)", definition: "Energy transferred per unit charge: V = E/Q. Volt is joule per coulomb. PD across component = energy transferred to/from each coulomb passing through." },
      { term: "Resistance and Ohm's law", definition: "V = IR. Resistance in ohms (Ω). Constant for ohmic conductor at constant temperature. Filament lamp: resistance increases with temperature (not ohmic)." },
      { term: "Series and parallel circuits", definition: "Series: same current, PD adds up, resistance adds (Rₜ = R₁ + R₂). Parallel: same PD, current adds, 1/Rₜ = 1/R₁ + 1/R₂. Household circuits are parallel." },
      { term: "IV characteristics", definition: "Filament lamp: curve (resistance increases with T). Diode: conducts one direction only. LDR: resistance decreases with light. Thermistor (NTC): resistance decreases with temperature." },
      { term: "Electrical power", definition: "P = IV = I²R = V²/R. Energy: E = Pt = IVt. Fuse rating must be just above normal operating current." },
      { term: "Mains electricity safety", definition: "Live (brown, 230 V), neutral (blue, 0 V), earth (green/yellow). Earth wire: if live touches casing, large current flows to ground → fuse melts. RCCB detects current imbalance." },
      { term: "Static electricity", definition: "Friction transfers electrons → objects become charged. Like charges repel, unlike attract. Uses: photocopiers, spray painting. Dangers: sparks near flammable vapours." },
    ],
    higherSections: [
      {
        heading: "Circuit calculations — combined",
        body: "Series: Rₜ = R₁ + R₂. I = V/Rₜ. V across each = IR. Parallel: 1/Rₜ = 1/R₁ + 1/R₂. V same across each branch. I = V/R for each. Total I = I₁ + I₂. Practice mixed circuits: simplify step by step.",
      },
      {
        heading: "Energy and cost calculations",
        body: "E = Pt. 3 kW heater for 2 hours: E = 3 × 2 = 6 kWh. Cost = kWh × price per unit. Convert: 1 kWh = 3,600,000 J. Show units throughout.",
      },
      {
        heading: "Components in context",
        body: "LDR in street lights: dark → high resistance → low current in one branch → relay switches on lamp. Thermistor in fire alarm: heat → low resistance → current increases → alarm triggers. Diode in rectification: AC → DC.",
      },
    ],
    higherExamTips: [
      "Rearrange V = IR for the quantity asked — show formula first.",
      "Parallel resistance: use 1/Rₜ = 1/R₁ + 1/R₂, don't just add.",
      "Fuse: choose rating just above normal current, explain why too high is dangerous.",
      "Static electricity: explain electron transfer, not 'protons moving'.",
    ],
  },

  forces: {
    higherConcepts: [
      { term: "Resultant force", definition: "Single force with same effect as all forces combined. Same direction: add. Opposite: subtract. Perpendicular: use Pythagoras. Resultant ≠ 0 → acceleration (Newton's 2nd law)." },
      { term: "Newton's three laws", definition: "1st: balanced forces → constant velocity (or rest). 2nd: F = ma. 3rd: every action has equal and opposite reaction (on DIFFERENT objects)." },
      { term: "Momentum (p = mv)", definition: "p = mv (kg m/s). Vector quantity. Conservation: in closed system, total momentum before = total after. Force = rate of change of momentum: F = Δp/t." },
      { term: "Momentum conservation — collisions", definition: "m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂. Elastic: KE conserved. Inelastic: KE not conserved (deforms, heats). Explosions: objects move apart, total momentum = 0 if stationary before." },
      { term: "Stopping distance", definition: "Thinking distance + braking distance. Thinking: speed × reaction time (affected by drugs, alcohol, tiredness). Braking: speed², mass, road conditions, brakes, tyres." },
      { term: "Moments", definition: "Moment = force × perpendicular distance (Nm). Clockwise and anticlockwise moments. Equilibrium: total clockwise = total anticlockwise. Principle of moments." },
      { term: "Centre of mass and stability", definition: "Point where mass appears concentrated. Lower centre of mass and wider base → more stable. Tilt until centre of mass passes pivot → topples." },
      { term: "Pressure in fluids", definition: "p = F/A (Pa = N/m²). Pressure in liquid: p = hρg (depth × density × g). Same depth = same pressure. Hydraulic systems multiply force using pressure transmission." },
    ],
    higherSections: [
      {
        heading: "F = ma calculations",
        body: "A 1500 kg car accelerates at 2 m/s². F = ma = 1500 × 2 = 3000 N. If friction is 500 N, engine force needed = 3000 + 500 = 3500 N. Always identify all forces; resultant causes acceleration.",
      },
      {
        heading: "Momentum conservation — worked example",
        body: "Ball A (0.5 kg, 4 m/s) hits stationary ball B (0.5 kg). After collision A stops. m₁u₁ = m₁v₁ + m₂v₂ → 0.5×4 = 0 + 0.5×v₂ → v₂ = 4 m/s. B moves at 4 m/s. Total momentum before = after.",
      },
      {
        heading: "Moments — lever problems",
        body: "Seesaw: 30 N at 2 m left of pivot. Balance with ? N at 3 m right. Clockwise = anticlockwise: 30 × 2 = F × 3 → F = 20 N. Perpendicular distance only — if force at angle, use component perpendicular to pivot.",
      },
    ],
    higherExamTips: [
      "Newton's 3rd law: forces are on DIFFERENT objects — common mistake to cancel them.",
      "Momentum: always define positive direction; include signs for velocity.",
      "Stopping distance graph: explain each factor affecting thinking vs braking separately.",
      "Moments: force must be perpendicular to distance — use correct angle.",
    ],
  },

  waves: {
    higherConcepts: [
      { term: "Wave equation", definition: "v = fλ. Wave speed (m/s) = frequency (Hz) × wavelength (m). Applies to all waves. f = 1/T where T is period." },
      { term: "Transverse and longitudinal", definition: "Transverse: oscillations perpendicular to direction (light, water, EM). Longitudinal: oscillations parallel (sound — compressions and rarefactions)." },
      { term: "Electromagnetic spectrum — order", definition: "Radio → microwave → infrared → visible → ultraviolet → X-ray → gamma. All travel at 3×10⁸ m/s in vacuum. Frequency increases, wavelength decreases across spectrum." },
      { term: "Uses and dangers of EM waves", definition: "Radio: communications. Microwave: cooking, satellites. IR: heaters, remote controls. UV: sterilisation (damages skin/DNA). X-ray: medical imaging (ionising). Gamma: cancer treatment, sterilisation (highly ionising)." },
      { term: "Reflection and refraction", definition: "Reflection: angle of incidence = angle of reflection. Refraction: wave speed change at boundary → wavelength changes, direction bends. Towards normal entering denser medium." },
      { term: "Snell's law", definition: "n = sin i / sin r. Refractive index relates angle of incidence (i) and refraction (r). n = c/v (speed of light in vacuum / speed in medium)." },
      { term: "Total internal reflection (TIR)", definition: "When light travels from denser to less dense medium beyond critical angle, all light reflects internally. Used in optical fibres and prisms." },
      { term: "Seismic waves", definition: "P-waves: longitudinal, faster, travel through solids and liquids. S-waves: transverse, slower, solids only. Evidence for Earth's liquid outer core (S-waves cannot pass through)." },
    ],
    higherSections: [
      {
        heading: "Wave calculations",
        body: "Radio wave f = 100 MHz = 100 × 10⁶ Hz. λ = v/f = 3×10⁸ / 10⁸ = 3 m. Sound in air: v ≈ 340 m/s. If f = 170 Hz, λ = 340/170 = 2 m. Always convert MHz to Hz.",
      },
      {
        heading: "Refraction — ray diagrams",
        body: "Light enters glass block: bends towards normal (slower in glass). Emerges: bends away from normal, parallel to original direction if rectangular block. Critical angle: sin c = 1/n. If i > c → total internal reflection.",
      },
      {
        heading: "EM spectrum applications",
        body: "Match wavelength/frequency to use. Microwaves absorbed by water molecules → cooking. IR detected by thermal receptors → night vision. UV causes fluorescence. X-rays pass through soft tissue, absorbed by bone → images. Gamma kills bacteria → sterilise medical equipment.",
      },
    ],
    higherExamTips: [
      "v = fλ: write formula, substitute, rearrange — 3 marks typical.",
      "EM spectrum: know order AND one use and one hazard for each type.",
      "TIR: state conditions (denser to less dense, i > critical angle).",
      "Seismic waves: explain how P and S wave behaviour reveals Earth's structure.",
    ],
  },

  "particle-model-of-matter": {
    higherConcepts: [
      { term: "Density (ρ = m/V)", definition: "ρ = m/V (kg/m³). Density of water = 1000 kg/m³. Objects float if density less than fluid. Measure mass and volume; volume by displacement for irregular objects." },
      { term: "Pressure in gases", definition: "Caused by particles colliding with walls. Faster particles or more particles → more collisions → higher pressure. pV = constant at constant temperature (Boyle's law qualitative)." },
      { term: "Temperature and kinetic energy", definition: "Temperature is average kinetic energy of particles. Higher T → faster particles → more frequent and harder collisions → higher pressure (if volume fixed)." },
      { term: "Changes of state — particle model", definition: "Melting/boiling: energy breaks bonds, particles move freely. Condensing/freezing: bonds form, releases energy. During change of state, temperature constant — energy changes potential energy, not kinetic." },
      { term: "Gas pressure and volume", definition: "At constant temperature: increasing volume → particles hit walls less often → pressure decreases. Halve volume → double pressure (Boyle's law: p₁V₁ = p₂V₂)." },
      { term: "Absolute zero", definition: "−273°C (0 K). Particles have minimum kinetic energy. Cannot be reached in practice. Kelvin scale: T(K) = T(°C) + 273." },
      { term: "Internal energy", definition: "Total kinetic and potential energy of all particles. Heating increases kinetic energy (T rises) or potential energy (state change). E = mcΔT or E = mL." },
      { term: "Brownian motion", definition: "Random jerky movement of smoke particles in air — evidence for particle model. Smoke particles hit by fast-moving invisible air molecules." },
    ],
    higherSections: [
      {
        heading: "Density calculations",
        body: "A block 0.2 m × 0.1 m × 0.05 m, mass 1.5 kg. V = 0.001 m³. ρ = 1.5/0.001 = 1500 kg/m³. Sinks in water (ρ > 1000). Irregular object: measure volume by water displacement in measuring cylinder.",
      },
      {
        heading: "Gas pressure — particle explanation",
        body: "Particles in constant random motion. Collide with container walls. Each collision exerts tiny force. Billions of collisions = measurable pressure. Heat gas (fixed V): faster particles → more collisions per second AND harder hits → pressure rises.",
      },
      {
        heading: "pV = constant calculations",
        body: "Gas at 100 kPa, volume 2 dm³. Compressed to 0.5 dm³ at constant T. p₂ = p₁V₁/V₂ = 100 × 2 / 0.5 = 400 kPa. Pressure quadrupled when volume quartered.",
      },
    ],
    higherExamTips: [
      "Density: convert cm³ to m³ (÷ 1,000,000) before calculating.",
      "Explain gas pressure using particle collisions — not just 'particles push harder'.",
      "State changes: energy goes to breaking/forming bonds (potential energy), not speed.",
      "Kelvin conversions: add 273 to Celsius for gas law calculations.",
    ],
  },

  "atomic-structure": {
    higherConcepts: [
      { term: "Nuclear model of the atom", definition: "Tiny, dense, positively charged nucleus containing protons and neutrons. Electrons orbit at distances much larger than nucleus diameter. Most of atom is empty space." },
      { term: "Isotopes and radiation", definition: "Unstable isotopes emit radiation to become more stable. Alpha (α): 2 protons + 2 neutrons, stopped by paper, highly ionising. Beta (β⁻): electron from nucleus, stopped by aluminium. Gamma (γ): EM wave, stopped by thick lead, weakly ionising." },
      { term: "Nuclear equations", definition: "Mass and atomic numbers balance both sides. Alpha decay: ²³⁸U → ²³⁴Th + ⁴He. Beta decay: neutron → proton + electron (electron emitted as β⁻). Gamma: no mass/charge change." },
      { term: "Half-life", definition: "Time for activity (or count rate) to halve. After n half-lives: remaining = initial × (½)ⁿ. Random process — cannot predict single decay, only average for large sample." },
      { term: "Uses of radioactivity", definition: "Medical: gamma for sterilising equipment, tracers (short half-life), PET scans. Industrial: gamma radiography (weld inspection), smoke detectors (americium-241). Carbon-14 dating (archaeology)." },
      { term: "Dangers and safety", definition: "Ionising radiation damages DNA → mutations/cancer. Minimise time of exposure, maximise distance, use shielding. Background radiation from rocks, cosmic rays, medical sources." },
      { term: "Nuclear fission", definition: "Heavy nucleus (U-235) splits when absorbs neutron → two smaller nuclei + 2-3 neutrons + energy. Chain reaction if neutrons hit more U-235. Controlled in reactors (control rods absorb neutrons)." },
      { term: "Nuclear fusion", definition: "Light nuclei fuse at very high temperature/pressure → heavier nucleus + energy. Sun's energy source: hydrogen → helium. No long-lived radioactive waste but not yet commercially viable on Earth." },
    ],
    higherSections: [
      {
        heading: "Half-life calculations",
        body: "Sample starts at 800 counts/min, half-life 4 hours. After 12 hours (3 half-lives): 800 → 400 → 200 → 100 counts/min. Or: 800 × (½)³ = 100. Graph: exponential decay curve, half-life read from time for count rate to halve.",
      },
      {
        heading: "Writing nuclear equations",
        body: "²¹⁴Po → ²¹⁰Pb + ⁴He (alpha). Check: 214 = 210 + 4, 84 = 82 + 2. ¹⁴C → ¹⁴N + ⁰₋₁e (beta). Neutron in C becomes proton in N, electron emitted. Practice balancing mass and atomic numbers.",
      },
      {
        heading: "Fission vs fusion comparison",
        body: "Fission: heavy nucleus splits, chain reaction, used in nuclear power, produces radioactive waste. Fusion: light nuclei join, needs extreme conditions, powers stars, potentially clean energy but technically challenging. Both release energy (E = mc² — mass defect).",
      },
    ],
    higherExamTips: [
      "Half-life: show halving steps OR use (½)ⁿ — both acceptable.",
      "Nuclear equations: check both mass number AND atomic number balance.",
      "Compare α, β, γ: penetrating power, ionising power, what stops them.",
      "Fission: explain role of control rods and moderator in nuclear reactor.",
    ],
  },

  "magnetism-and-electromagnetism": {
    higherConcepts: [
      { term: "Magnetic field lines", definition: "Show direction a free north pole would move. From north to south outside magnet. Closer lines = stronger field. Field around wire: concentric circles (right-hand grip rule)." },
      { term: "Electromagnet", definition: "Coil of wire around iron core. Current creates magnetic field. Stronger with more turns, more current, iron core. Uses: scrap yard cranes, relays, doorbells." },
      { term: "Motor effect (F = BIL)", definition: "Current-carrying wire in magnetic field experiences force. F = BIL (force = flux density × current × length). Direction: Fleming's left-hand rule (thumb = force, first finger = field, second finger = current)." },
      { term: "Generator effect", definition: "Induced PD when conductor moves through magnetic field or field through coil changes. Basis of AC generators and microphones. Fleming's right-hand rule for induced current direction." },
      { term: "Transformer equation", definition: "Vp/Vs = Np/Ns (voltage ratio = turns ratio). Step-up: more secondary turns, higher voltage. Step-down: fewer secondary turns. Only works with AC (changing field needed)." },
      { term: "Transformer power and efficiency", definition: "Ideal transformer: VpIp = VsIs (power in = power out). Real transformers ~90% efficient — eddy currents and heat losses. Step up voltage → reduce current → less energy lost as heat in cables." },
      { term: "Loudspeaker and microphone", definition: "Loudspeaker: varying current in coil → force in magnetic field → cone vibrates → sound. Microphone: sound → cone vibrates → coil moves in field → induced current (generator effect)." },
      { term: "AC vs DC", definition: "DC: current one direction (batteries). AC: current reverses (mains 50 Hz UK). AC needed for transformers. Oscilloscope shows AC as sine wave, DC as flat line." },
    ],
    higherSections: [
      {
        heading: "Motor effect — calculations",
        body: "Wire 0.5 m long, 2 A current, in 0.3 T field. F = BIL = 0.3 × 2 × 0.5 = 0.3 N. Force maximum when wire perpendicular to field; zero when parallel. Electric motor: split-ring commutator reverses current every half turn → continuous rotation.",
      },
      {
        heading: "Transformers — worked example",
        body: "Transformer: 100 primary turns, 500 secondary turns. Input 12 V. Vp/Vs = Np/Ns → 12/Vs = 100/500 → Vs = 60 V. If input power 24 W and 100% efficient: output power = 24 W. Is = P/Vs = 24/60 = 0.4 A.",
      },
      {
        heading: "Electromagnetic induction applications",
        body: "AC generator: coil rotates in magnetic field → induced alternating PD. Dynamos on bicycles. Induction hobs: changing field induces current in pan base → heating. MRI scanners use strong magnetic fields. Earth has magnetic field — compass aligns with it.",
      },
    ],
    higherExamTips: [
      "F = BIL: all three quantities must be perpendicular for maximum force.",
      "Fleming's rules: LEFT hand = motor (force), RIGHT hand = generator (induced current).",
      "Transformer: show turns ratio calculation; explain why National Grid steps up voltage.",
      "Draw field lines: north to south, never cross, closer = stronger.",
    ],
  },

  "space-physics": {
    higherConcepts: [
      { term: "Solar system structure", definition: "Sun (star), 8 planets (Mercury to Neptune), dwarf planets (Pluto), moons, asteroids, comets. Rocky planets inner (Mercury–Mars), gas giants outer (Jupiter–Neptune). Orbits governed by gravity." },
      { term: "Life cycle of stars", definition: "Nebula → protostar → main sequence star → red giant/supergiant → white dwarf (small stars) OR supernova → neutron star/black hole (large stars). Fusion provides energy throughout main sequence." },
      { term: "Fusion in stars", definition: "Hydrogen nuclei fuse to form helium at extreme temperature and pressure in core. Releases enormous energy (E = mc²). Outward fusion pressure balances inward gravity — stable main sequence." },
      { term: "Red-shift and the expanding universe", definition: "Light from distant galaxies shifted towards red end of spectrum — galaxies moving away. Greater red-shift = faster recession = further away (Hubble's law). Evidence for Big Bang." },
      { term: "Big Bang theory", definition: "Universe began ~13.8 billion years ago from extremely hot, dense point. Has been expanding and cooling since. CMB (cosmic microwave background) is remnant radiation — key evidence." },
      { term: "Orbital motion", definition: "Gravity provides centripetal force for circular orbits. Geostationary: 24 hour orbit above equator (communications satellites). Low Earth orbit: ~90 min period (ISS, observation)." },
      { term: "Asteroids and comets", definition: "Asteroids: rocky, mostly between Mars and Jupiter. Comets: icy, elliptical orbits, tail forms near Sun (solar wind pushes ions, radiation pushes dust). Both pose impact risks." },
      { term: "Gravitational field strength in space", definition: "g decreases with distance from massive body. ISS experiences ~90% Earth's g but appears weightless — in continuous free fall (orbit). g on Moon ≈ 1.6 N/kg." },
    ],
    higherSections: [
      {
        heading: "Life cycle of a star like the Sun",
        body: "1) Nebula collapses under gravity. 2) Protostar: heats up. 3) Main sequence: H → He fusion, stable for ~10 billion years. 4) Red giant: H exhausted, core contracts, outer layers expand. 5) Planetary nebula ejected. 6) White dwarf: hot, dense core, fades over billions of years.",
      },
      {
        heading: "Red-shift evidence for expansion",
        body: "Spectrum of distant galaxy shows absorption lines shifted towards red compared to laboratory spectrum. Amount of shift (red-shift) proportional to distance. All galaxies moving away from us — not centre of universe, but space itself expanding. Hubble: v ∝ d (recession velocity proportional to distance).",
      },
      {
        heading: "Satellites and orbits",
        body: "Satellite needs sufficient horizontal velocity so it continuously falls towards Earth but misses (orbit). Geostationary: 35,786 km altitude, stays above same point. Low orbit: 200–2000 km, faster, better resolution for imaging. Orbital speed depends on altitude.",
      },
    ],
    higherExamTips: [
      "Star life cycle: put stages in order; know different ending for massive vs Sun-sized stars.",
      "Red-shift: explain what it is AND what it tells us about the universe.",
      "Fusion in stars: H → He, energy from mass defect, balances gravity.",
      "Distinguish geostationary and low Earth orbit — period, altitude, uses.",
    ],
  },
};

const EMPTY_HIGHER: HigherTierContent = {
  higherConcepts: [],
  higherSections: [],
  higherExamTips: [],
};

export function getHigherTierContent(
  slug: string,
  content?: GcseTopicContent
): HigherTierContent {
  const fromContent: HigherTierContent = {
    higherConcepts: content?.higherConcepts ?? [],
    higherSections: content?.higherSections ?? [],
    higherExamTips: content?.higherExamTips ?? [],
  };

  const fromMap = HIGHER_TIER_BY_SLUG[slug] ?? EMPTY_HIGHER;

  return {
    higherConcepts: [...fromContent.higherConcepts, ...fromMap.higherConcepts],
    higherSections: [...fromContent.higherSections, ...fromMap.higherSections],
    higherExamTips: [...fromContent.higherExamTips, ...fromMap.higherExamTips],
  };
}
