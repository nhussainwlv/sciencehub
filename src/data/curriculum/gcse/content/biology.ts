import { createContent } from "./types";

export const BIOLOGY_CONTENT = [
  createContent({
    slug: "cell-biology",
    aliases: ["cells-and-control", "cell-level-systems", "structures-and-function-in-living-organisms", "key-concepts-in-biology", "the-nature-and-variety-of-living-organisms"],
    overview:
      "Cells are the basic unit of all life. GCSE Cell Biology covers eukaryotic and prokaryotic cells, microscopy, cell division (mitosis), stem cells, and transport across membranes (diffusion, osmosis, active transport). Content aligns with AQA 8461 Topic 4.1 and equivalent Edexcel/OCR specifications.",
    keyConcepts: [
      { term: "Cell", definition: "The basic structural and functional unit of all living organisms." },
      { term: "Eukaryotic cell", definition: "A cell with a nucleus and membrane-bound organelles, found in animals, plants, fungi and protists." },
      { term: "Prokaryotic cell", definition: "A bacterial cell with no nucleus — genetic material is a single loop of DNA, often with plasmids in the cytoplasm." },
      { term: "Nucleus", definition: "Organelle containing chromosomes made of DNA; controls cell activities and contains genes." },
      { term: "Mitochondria", definition: "Organelle where aerobic respiration occurs, releasing energy (ATP) for the cell." },
      { term: "Chloroplast", definition: "Organelle in plant cells where photosynthesis occurs; contains chlorophyll." },
      { term: "Cell membrane", definition: "Partially permeable barrier controlling which substances enter and leave the cell." },
      { term: "Cell wall", definition: "Rigid outer layer of plant cells made of cellulose, providing support and strength." },
      { term: "Diffusion", definition: "Net movement of particles from an area of higher concentration to lower concentration — passive, no energy required." },
      { term: "Osmosis", definition: "Diffusion of water through a partially permeable membrane from a dilute to a more concentrated solution." },
      { term: "Active transport", definition: "Movement of substances against a concentration gradient using energy from respiration." },
      { term: "Mitosis", definition: "Cell division producing two genetically identical diploid daughter cells for growth and repair." },
      { term: "Stem cell", definition: "Undifferentiated cell that can divide to produce more stem cells or differentiate into specialised cells." },
      { term: "Cell differentiation", definition: "Process by which a cell becomes specialised for its function, with specific genes switched on or off." },
      { term: "Magnification", definition: "How much larger an image appears compared to the real object: magnification = image size ÷ actual size." },
      { term: "Resolution", definition: "The ability to distinguish between two separate points — higher resolution gives clearer detail." },
      { term: "Concentration gradient", definition: "The difference in concentration of a substance between two regions." },
      { term: "Plasmid", definition: "Small loop of extra DNA in bacterial cytoplasm, often used in genetic engineering." },
    ],
    sections: [
      {
        heading: "Animal and plant cells",
        body: "Animal cells contain: nucleus, cytoplasm, cell membrane, mitochondria, and ribosomes. Plant cells also have a cell wall, permanent vacuole, and chloroplasts. Each organelle has a specific function — for example mitochondria release energy through respiration, while chloroplasts absorb light for photosynthesis.",
      },
      {
        heading: "Specialisation and differentiation",
        body: "Cells differentiate to become specialised — e.g. nerve cells have long extensions to carry impulses, root hair cells have a large surface area for absorption, and sperm cells have a tail for movement. In animals, most differentiation occurs early; plant meristem cells can differentiate throughout life.",
      },
      {
        heading: "The cell cycle and mitosis",
        body: "Before division, the cell grows and copies its DNA. In mitosis, chromosomes are pulled apart so each daughter cell receives identical genetic information. Mitosis is used for growth, repair, and asexual reproduction.",
      },
      {
        heading: "Transport in cells",
        body: "Small molecules cross membranes by diffusion (down a concentration gradient). Water moves by osmosis. Cells can absorb ions from very dilute solutions by active transport — e.g. root hair cells absorbing mineral ions from soil. Surface area to volume ratio affects how quickly substances can enter a cell.",
      },
    ],
    diagrams: [
      { id: "animal-cell", title: "Animal Cell", caption: "Label: nucleus, cytoplasm, cell membrane, mitochondria, ribosomes." },
      { id: "plant-cell", title: "Plant Cell", caption: "Additional structures: cell wall, chloroplast, permanent vacuole." },
      { id: "prokaryotic-cell", title: "Bacterial Cell", caption: "No nucleus — DNA loop and plasmids in cytoplasm; cell wall present." },
      { id: "diffusion-osmosis", title: "Diffusion & Osmosis", caption: "Particles move from high to low concentration; water moves through partially permeable membrane." },
    ],
    examTips: [
      "State differences between animal, plant and bacterial cells clearly.",
      "For microscopy calculations, show working: magnification = image size ÷ actual size.",
      "Explain osmosis in terms of water molecules, not just 'water moves'.",
      "Stem cell questions often ask about medical uses and ethical issues.",
    ],
  }),

  createContent({
    slug: "organisation",
    aliases: ["scaling-up", "plant-structures-and-their-functions", "exchange-and-transport-in-animals"],
    overview:
      "Organisation covers how cells form tissues, organs and systems. Key systems include digestion (enzymes), the circulatory system (heart, blood vessels, blood), and plant transport (xylem, phloem, transpiration).",
    keyConcepts: [
      { term: "Tissue", definition: "A group of similar cells performing a specific function, e.g. muscle tissue." },
      { term: "Organ", definition: "A structure made of different tissues working together, e.g. the stomach or leaf." },
      { term: "Organ system", definition: "A group of organs working together, e.g. the digestive system." },
      { term: "Enzyme", definition: "A biological catalyst — a protein that speeds up chemical reactions without being used up." },
      { term: "Active site", definition: "The region on an enzyme where the substrate binds — lock-and-key model." },
      { term: "Amylase", definition: "Enzyme that breaks starch into sugars; produced in salivary glands and pancreas." },
      { term: "Protease", definition: "Enzyme that breaks proteins into amino acids; produced in stomach and pancreas." },
      { term: "Lipase", definition: "Enzyme that breaks lipids into fatty acids and glycerol; produced in pancreas." },
      { term: "Bile", definition: "Alkaline substance from the liver that neutralises stomach acid and emulsifies fats." },
      { term: "Villi", definition: "Finger-like projections in the small intestine with a large surface area for absorption." },
      { term: "Artery", definition: "Blood vessel carrying blood away from the heart at high pressure; thick muscular walls." },
      { term: "Vein", definition: "Blood vessel returning blood to the heart at low pressure; has valves." },
      { term: "Capillary", definition: "Tiny blood vessel one cell thick — site of exchange of substances." },
      { term: "Double circulatory system", definition: "Blood passes through the heart twice per circuit — pulmonary and systemic circulation." },
      { term: "Transpiration", definition: "Loss of water vapour from plant leaves through stomata, creating a transpiration stream." },
      { term: "Xylem", definition: "Plant tissue that transports water and mineral ions from roots to leaves." },
      { term: "Phloem", definition: "Plant tissue that transports dissolved sugars (translocation) from source to sink." },
    ],
    sections: [
      {
        heading: "The digestive system",
        body: "Food is broken down mechanically (teeth, churning) and chemically (enzymes). Starch → maltose (amylase), proteins → amino acids (protease), fats → fatty acids + glycerol (lipase). Products are absorbed through villi into the blood.",
      },
      {
        heading: "The circulatory system",
        body: "The heart pumps blood through arteries to body tissues, exchange occurs in capillaries, and veins return blood to the heart. The right side pumps to lungs; the left side pumps to the body. Red blood cells carry oxygen; white blood cells fight infection; platelets clot blood; plasma transports substances.",
      },
      {
        heading: "Plant organisation",
        body: "Leaves are adapted for photosynthesis (palisade mesophyll, stomata, air spaces). Roots have root hair cells for absorption. Xylem carries water up; phloem carries sugars. Transpiration rate is affected by light, temperature, humidity, and wind.",
      },
    ],
    diagrams: [
      { id: "digestive-system", title: "Digestive System", caption: "Mouth → oesophagus → stomach → small intestine → large intestine." },
      { id: "heart", title: "The Heart", caption: "Four chambers: right/left atria and ventricles; valves prevent backflow." },
      { id: "villi", title: "Villi", caption: "Large surface area, thin walls, good blood supply for absorption." },
      { id: "plant-transport", title: "Plant Transport", caption: "Xylem (water up) and phloem (sugars up and down)." },
    ],
    examTips: [
      "Enzyme questions: mention active site, substrate, and denaturation at high temperature.",
      "Compare arteries, veins and capillaries in a table.",
      "Explain how villi are adapted — surface area, blood supply, thin walls.",
    ],
  }),

  createContent({
    slug: "infection-and-response",
    aliases: ["health-disease-and-the-development-of-medicines", "keeping-healthy"],
    overview:
      "Covers pathogens, how diseases spread, the human immune system, vaccination, antibiotics, and drug development. Includes bacteria, viruses, fungi, and protists as causes of disease.",
    keyConcepts: [
      { term: "Pathogen", definition: "A microorganism that causes disease — bacterium, virus, fungus or protist." },
      { term: "Communicable disease", definition: "A disease that can spread between individuals, e.g. flu, measles, salmonella." },
      { term: "Non-communicable disease", definition: "Cannot be transmitted between people, e.g. cancer, coronary heart disease." },
      { term: "White blood cell", definition: "Defends the body — can ingest pathogens, produce antibodies, or produce antitoxins." },
      { term: "Antibody", definition: "Protein produced by white blood cells that binds to antigens on pathogens, causing destruction." },
      { term: "Antigen", definition: "Molecule on the surface of a pathogen that triggers an immune response." },
      { term: "Vaccination", definition: "Introducing dead/inactive pathogens or antigens to stimulate antibody production without causing disease." },
      { term: "Herd immunity", definition: "When enough people are vaccinated that the disease cannot spread easily through the population." },
      { term: "Antibiotic", definition: "Drug that kills bacteria or stops them reproducing; ineffective against viruses." },
      { term: "Antibiotic resistance", definition: "When bacteria evolve to survive antibiotics — caused by overuse and incomplete courses." },
      { term: "Painkiller", definition: "Drug that relieves symptoms but does not kill pathogens, e.g. paracetamol." },
      { term: "Monoclonal antibody", definition: "Identical antibodies produced from a single clone of cells; used in pregnancy tests and cancer treatment." },
    ],
    sections: [
      {
        heading: "How pathogens spread",
        body: "Direct contact, water, food, air (droplets), and vectors (e.g. mosquitoes). Preventing spread: hygiene, sterilisation, vaccination, and isolating infected individuals.",
      },
      {
        heading: "The immune system",
        body: "Skin and mucus are first-line defences. White blood cells ingest microbes, produce antibodies (specific to antigens), and antitoxins (neutralise toxins). Memory cells give long-term immunity after infection or vaccination.",
      },
      {
        heading: "Developing new drugs",
        body: "Preclinical testing on cells/tissues, then clinical trials on volunteers. Double-blind trials with placebo control groups ensure results are reliable. Drugs must be tested for efficacy and safety.",
      },
    ],
    diagrams: [
      { id: "pathogen-types", title: "Types of Pathogen", caption: "Bacteria, viruses, fungi, protists — different sizes and structures." },
      { id: "immune-response", title: "Immune Response", caption: "Pathogen → white blood cell → antibody production → memory cells." },
    ],
    examTips: [
      "Never say antibiotics kill viruses — examiners specifically test this.",
      "Vaccination questions: mention memory cells and herd immunity.",
      "Describe the stages of drug testing in order.",
    ],
  }),

  createContent({
    slug: "bioenergetics",
    aliases: ["using-food-and-controlling-growth"],
    overview:
      "Photosynthesis and respiration — how organisms obtain and use energy. Includes the photosynthesis equation, limiting factors, aerobic and anaerobic respiration, and metabolism.",
    keyConcepts: [
      { term: "Photosynthesis", definition: "Process in chloroplasts: carbon dioxide + water → glucose + oxygen (using light energy)." },
      { term: "Chlorophyll", definition: "Green pigment in chloroplasts that absorbs light energy for photosynthesis." },
      { term: "Limiting factor", definition: "Factor in short supply that limits the rate of photosynthesis — light, CO₂, or temperature." },
      { term: "Aerobic respiration", definition: "Glucose + oxygen → carbon dioxide + water (+ ATP energy). Occurs in mitochondria." },
      { term: "Anaerobic respiration", definition: "Without oxygen: in animals glucose → lactic acid; in yeast glucose → ethanol + CO₂." },
      { term: "Lactic acid", definition: "Product of anaerobic respiration in animals; causes muscle fatigue; broken down when oxygen returns." },
      { term: "Oxygen debt", definition: "Extra oxygen needed after exercise to break down accumulated lactic acid." },
      { term: "Metabolism", definition: "The sum of all chemical reactions in a cell or organism." },
      { term: "ATP", definition: "Molecule that transfers energy in cells for processes like active transport and muscle contraction." },
    ],
    sections: [
      {
        heading: "Photosynthesis",
        body: "Plants use light energy to convert CO₂ and water into glucose. Oxygen is released as a by-product. Rate increases with more light, more CO₂, and warmer temperatures (up to ~45°C). Used in agriculture: greenhouses with extra light and CO₂.",
      },
      {
        heading: "Respiration",
        body: "All living cells respire to release energy from glucose. Aerobic respiration is more efficient than anaerobic. During vigorous exercise, anaerobic respiration supplements aerobic when oxygen supply is insufficient.",
      },
      {
        heading: "Uses of glucose",
        body: "Glucose from photosynthesis is used for respiration, converted to starch for storage, used to make cellulose for cell walls, proteins for growth, and lipids for storage.",
      },
    ],
    diagrams: [
      { id: "photosynthesis", title: "Photosynthesis", caption: "CO₂ + H₂O → C₆H₁₂O₆ + O₂ in chloroplasts with light." },
      { id: "respiration", title: "Respiration", caption: "Aerobic: full breakdown in mitochondria. Anaerobic: partial breakdown in cytoplasm." },
    ],
    examTips: [
      "Write word equations AND symbol equations for photosynthesis and respiration.",
      "Limiting factor graphs: identify which factor limits at different points.",
      "Compare aerobic vs anaerobic — energy yield and products.",
    ],
  }),

  createContent({
    slug: "homeostasis-and-response",
    aliases: ["animal-coordination-control-and-homeostasis", "the-human-body-staying-alive", "organism-level-systems"],
    overview:
      "Homeostasis maintains internal conditions. Covers the nervous system (reflexes), hormones (endocrine system), blood glucose control, and the menstrual cycle.",
    keyConcepts: [
      { term: "Homeostasis", definition: "Maintaining constant internal conditions, e.g. body temperature, water balance, blood glucose." },
      { term: "Negative feedback", definition: "A change triggers a response that reverses the change — restores optimum level." },
      { term: "Receptor", definition: "Detects a stimulus, e.g. temperature receptors in skin." },
      { term: "Effector", definition: "Produces a response — muscle or gland." },
      { term: "Reflex arc", definition: "Receptor → sensory neurone → relay neurone → motor neurone → effector (spinal cord, not brain)." },
      { term: "Synapse", definition: "Gap between neurones where neurotransmitters diffuse across." },
      { term: "Hormone", definition: "Chemical messenger produced by endocrine glands, transported in blood to target organs." },
      { term: "Insulin", definition: "Hormone from pancreas that lowers blood glucose by causing cells to take up glucose." },
      { term: "Glucagon", definition: "Hormone from pancreas that raises blood glucose by breaking down glycogen in liver." },
      { term: "Type 1 diabetes", definition: "Pancreas produces little/no insulin; treated with insulin injections." },
      { term: "Type 2 diabetes", definition: "Body cells don't respond to insulin; linked to obesity and diet; managed by diet and exercise." },
    ],
    sections: [
      {
        heading: "The nervous system",
        body: "The CNS (brain and spinal cord) coordinates responses. Reflexes are fast, automatic responses via reflex arcs — protecting the body from harm. Reaction time can be measured with the ruler-drop test.",
      },
      {
        heading: "Hormones vs nerves",
        body: "Nerves: electrical impulses, fast, short-lived, specific effectors. Hormones: chemical in blood, slower, longer-lasting, multiple targets. Adrenaline prepares body for 'fight or flight'.",
      },
      {
        heading: "Controlling blood glucose",
        body: "Pancreas monitors blood glucose. High → insulin released → glucose stored as glycogen. Low → glucagon released → glycogen converted to glucose. Type 1 and Type 2 diabetes result from failure of this control.",
      },
    ],
    diagrams: [
      { id: "reflex-arc", title: "Reflex Arc", caption: "Stimulus → receptor → sensory neurone → CNS → motor neurone → effector → response." },
      { id: "blood-glucose", title: "Blood Glucose Control", caption: "Negative feedback loop with insulin and glucagon." },
    ],
    examTips: [
      "Reflex arc questions: always include the spinal cord as the relay.",
      "Compare nerves and hormones in a table.",
      "Explain negative feedback with a specific example (blood glucose or temperature).",
    ],
  }),

  createContent({
    slug: "inheritance-variation-and-evolution",
    aliases: ["genetics", "natural-selection-and-genetic-modification", "reproduction-and-inheritance", "genes-inheritance-and-selection", "you-and-your-genes"],
    overview:
      "DNA, genes, chromosomes, inheritance (dominant/recessive alleles), variation, evolution by natural selection, selective breeding, and genetic engineering.",
    keyConcepts: [
      { term: "DNA", definition: "Polymer of nucleotides with a double helix structure; contains genetic instructions." },
      { term: "Gene", definition: "A section of DNA coding for a specific protein (or functional RNA)." },
      { term: "Chromosome", definition: "Long coiled molecule of DNA; humans have 23 pairs in body cells." },
      { term: "Allele", definition: "A version of a gene; can be dominant or recessive." },
      { term: "Dominant allele", definition: "Expressed even if only one copy is present (shown with capital letter)." },
      { term: "Recessive allele", definition: "Only expressed if two copies are present (shown with lowercase letter)." },
      { term: "Genotype", definition: "The alleles an organism possesses, e.g. Bb." },
      { term: "Phenotype", definition: "The observable characteristics of an organism." },
      { term: "Homozygous", definition: "Two identical alleles, e.g. BB or bb." },
      { term: "Heterozygous", definition: "Two different alleles, e.g. Bb." },
      { term: "Natural selection", definition: "Individuals with advantageous characteristics survive and reproduce; alleles increase in frequency over generations." },
      { term: "Evolution", definition: "Change in the inherited characteristics of a population over time." },
      { term: "Selective breeding", definition: "Humans breed plants/animals with desired characteristics over many generations." },
      { term: "Genetic engineering", definition: "Modifying an organism's genome by inserting genes from another organism." },
    ],
    sections: [
      {
        heading: "Inheritance",
        body: "Use Punnett squares to predict offspring ratios. Sex determination: XX = female, XY = male. Family pedigrees can track inherited disorders like cystic fibrosis (recessive).",
      },
      {
        heading: "Variation",
        body: "Continuous variation (e.g. height) shows a range with no distinct categories. Discontinuous variation (e.g. blood group) falls into distinct categories. Caused by genetic and environmental factors.",
      },
      {
        heading: "Evolution",
        body: "Darwin's theory: variation exists → competition for resources → survival of the fittest → advantageous alleles passed on. Fossils and antibiotic resistance in bacteria provide evidence.",
      },
    ],
    diagrams: [
      { id: "dna-structure", title: "DNA Structure", caption: "Double helix, complementary base pairs: A-T, C-G." },
      { id: "punnett-square", title: "Punnett Square", caption: "Predicts genotype and phenotype ratios of offspring." },
    ],
    examTips: [
      "Punnett squares: show parental genotypes, gametes, and offspring ratios.",
      "Distinguish natural selection from selective breeding and genetic engineering.",
      "Use the term 'allele frequency' in evolution answers.",
    ],
  }),

  createContent({
    slug: "ecology",
    aliases: ["ecosystems-and-material-cycles", "ecology-and-the-environment", "community-level-systems", "living-together-food-and-ecosystems", "life-on-earth-past-present-and-future", "use-of-biological-resources"],
    overview:
      "Ecosystems, food webs, material cycles (carbon, water), biodiversity, human impact, and conservation. How organisms interact with each other and their environment.",
    keyConcepts: [
      { term: "Ecosystem", definition: "All organisms living in a habitat and the non-living (abiotic) conditions." },
      { term: "Population", definition: "All organisms of one species in a habitat." },
      { term: "Community", definition: "All populations of different species in a habitat." },
      { term: "Producer", definition: "Organism that makes its own food by photosynthesis — start of food chains." },
      { term: "Primary consumer", definition: "Herbivore that eats producers." },
      { term: "Secondary consumer", definition: "Carnivore that eats primary consumers." },
      { term: "Decomposer", definition: "Breaks down dead material, returning nutrients to the soil." },
      { term: "Food web", definition: "Interconnected food chains showing feeding relationships in an ecosystem." },
      { term: "Biodiversity", definition: "Variety of species in an ecosystem — high biodiversity means a stable ecosystem." },
      { term: "Carbon cycle", definition: "Movement of carbon through atmosphere (CO₂), plants, animals, decomposers, and fossil fuels." },
      { term: "Deforestation", definition: "Clearing forests — reduces biodiversity, increases CO₂ in atmosphere." },
      { term: "Quadrat", definition: "Square frame used to sample plant distribution; random placement for valid results." },
    ],
    sections: [
      {
        heading: "Food chains and webs",
        body: "Energy flows from producers to consumers. Only ~10% of energy transfers to the next trophic level — rest lost as heat, movement, and waste. Pyramids of biomass show decreasing mass at higher levels.",
      },
      {
        heading: "Material cycles",
        body: "Carbon cycles through photosynthesis (removes CO₂), respiration and combustion (releases CO₂). Water cycles through evaporation, condensation, precipitation. Decomposers recycle nutrients.",
      },
      {
        heading: "Human impact",
        body: "Pollution, deforestation, and global warming threaten biodiversity. Conservation methods: breeding programmes, seed banks, protected areas, and reducing carbon footprint.",
      },
    ],
    diagrams: [
      { id: "food-chain", title: "Food Chain", caption: "Producer → primary consumer → secondary consumer → decomposer." },
      { id: "carbon-cycle", title: "Carbon Cycle", caption: "CO₂ ↔ plants (photosynthesis) ↔ animals ↔ decomposers ↔ fossil fuels." },
    ],
    examTips: [
      "Explain why food chains rarely exceed 5 trophic levels (energy loss).",
      "Sampling: explain random quadrat placement and why sample size matters.",
      "Link human activities to climate change through the carbon cycle.",
    ],
  }),
];
