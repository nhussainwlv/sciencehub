import { createCurriculumContent, type CurriculumTopicContent } from "./types";

export const KS3_TOPIC_CONTENT: CurriculumTopicContent[] = [
  createCurriculumContent({
    slug: "cells",
    overview:
      "At KS3, pupils explore the cell as the fundamental unit of life, comparing animal and plant cells and identifying key organelles and their functions. They learn how cells are adapted for specific roles, use microscopes to observe microscopic structures, and understand that growth involves cell division. This topic underpins the National Curriculum requirement to understand the scale and structure of living organisms.",
    keyConcepts: [
      { term: "Cell", definition: "The smallest unit of a living organism that can carry out life processes independently; all living things are made of one or more cells." },
      { term: "Nucleus", definition: "The control centre of the cell containing genetic material (DNA) in chromosomes; it directs cell activities such as growth and protein production." },
      { term: "Cytoplasm", definition: "The jelly-like substance inside the cell membrane where most chemical reactions occur, including respiration." },
      { term: "Cell membrane", definition: "A partially permeable barrier that controls which substances enter and leave the cell." },
      { term: "Mitochondria", definition: "Organelles where aerobic respiration takes place, releasing energy for the cell's activities." },
      { term: "Chloroplast", definition: "Green organelles found only in plant cells (and some algae) where photosynthesis occurs; they contain chlorophyll." },
      { term: "Cell wall", definition: "A rigid outer layer made of cellulose in plant cells that gives structural support and helps maintain cell shape." },
      { term: "Specialised cell", definition: "A cell adapted in shape or structure to perform a particular function, such as a nerve cell, red blood cell, or root hair cell." },
    ],
    sections: [
      {
        heading: "Animal and plant cells",
        body: "Animal cells contain a nucleus, cytoplasm, cell membrane, mitochondria, and ribosomes. Plant cells have all of these plus a cell wall, a permanent vacuole (containing cell sap), and chloroplasts. The nucleus controls the cell; mitochondria release energy through respiration; chloroplasts absorb light for photosynthesis. Ribosomes are the site of protein synthesis.",
      },
      {
        heading: "Specialised cells and microscopy",
        body: "Cells become specialised through differentiation — for example, sperm cells have tails for swimming, root hair cells have long extensions to increase surface area for absorption, and palisade mesophyll cells contain many chloroplasts for photosynthesis. Light microscopes use lenses to magnify specimens; magnification = image size ÷ actual size. Specimens must be thin and transparent for light to pass through.",
      },
      {
        heading: "Cell division and growth",
        body: "Multicellular organisms grow when cells divide by mitosis, producing two genetically identical daughter cells. Before division, the cell copies its DNA so each new cell receives a full set of chromosomes. Mitosis is used for growth, repair of damaged tissues, and in some organisms for asexual reproduction.",
      },
    ],
    examTips: [
      "Always state which structures are found in animal cells only, plant cells only, or both — examiners look for precise comparisons.",
      "When describing specialised cells, link structure to function (e.g. root hair cell → large surface area → faster absorption).",
      "Show working for magnification calculations and include units (mm, µm) consistently.",
    ],
    higherConcepts: [
      { term: "Eukaryotic cell", definition: "A cell with a nucleus and membrane-bound organelles, found in animals, plants, fungi, and protists." },
      { term: "Prokaryotic cell", definition: "A bacterial cell with no nucleus; DNA is a single loop in the cytoplasm, often with small rings called plasmids." },
      { term: "Diffusion", definition: "The net movement of particles from an area of higher concentration to lower concentration, requiring no energy." },
      { term: "Osmosis", definition: "The diffusion of water molecules through a partially permeable membrane from a dilute to a more concentrated solution." },
      { term: "Stem cell", definition: "An undifferentiated cell capable of dividing to produce more stem cells or differentiating into specialised cell types." },
    ],
    higherSections: [
      {
        heading: "Transport across membranes",
        body: "Small molecules such as oxygen and glucose enter cells by diffusion down a concentration gradient. Water moves by osmosis — if a cell lacks a cell wall and loses too much water, it shrinks; plant cells with cell walls become turgid when water enters. Active transport moves substances against a concentration gradient using energy from respiration, as seen when root hair cells absorb mineral ions from dilute soil.",
      },
      {
        heading: "Scale and resolution",
        body: "Most cells are 0.01–0.1 mm across and cannot be seen with the naked eye. Electron microscopes have much higher resolution than light microscopes, revealing organelles like mitochondria and ribosomes in detail. Surface area to volume ratio affects how quickly substances can diffuse into a cell — smaller cells have a relatively larger surface area for their volume.",
      },
    ],
    higherExamTips: [
      "Distinguish clearly between diffusion, osmosis, and active transport — state whether energy is needed and the direction of movement.",
      "For prokaryotic vs eukaryotic questions, mention the absence of a nucleus and membrane-bound organelles in bacteria.",
      "Link stem cell questions to medical applications (tissue repair) and ethical considerations.",
    ],
  }),

  createCurriculumContent({
    slug: "organisation",
    overview:
      "KS3 organisation builds from cells to tissues, organs, and organ systems in animals and plants. Pupils study how the digestive, circulatory, and gas exchange systems work together to supply cells with nutrients and oxygen while removing waste. The topic reflects the National Curriculum emphasis on understanding how structures at different scales are adapted for function.",
    keyConcepts: [
      { term: "Tissue", definition: "A group of similar cells working together to perform a specific function, such as muscle tissue or epithelial tissue." },
      { term: "Organ", definition: "A structure made of different tissues working together, such as the heart, stomach, or leaf." },
      { term: "Organ system", definition: "A group of organs that cooperate to carry out a major body function, such as the digestive or circulatory system." },
      { term: "Enzyme", definition: "A biological catalyst — a protein that speeds up chemical reactions in the body without being used up." },
      { term: "Villi", definition: "Tiny finger-like projections lining the small intestine that increase surface area for efficient absorption of digested food." },
      { term: "Artery", definition: "A blood vessel carrying blood away from the heart at high pressure; it has thick, muscular, elastic walls." },
      { term: "Vein", definition: "A blood vessel returning blood to the heart at lower pressure; it has thinner walls and valves to prevent backflow." },
      { term: "Alveoli", definition: "Microscopic air sacs in the lungs where gas exchange occurs — oxygen diffuses into blood and carbon dioxide diffuses out." },
    ],
    sections: [
      {
        heading: "Levels of organisation",
        body: "Cells → tissues → organs → organ systems → organism. In animals, examples include muscle cells forming muscle tissue, the stomach as an organ of the digestive system, and the heart as part of the circulatory system. In plants, mesophyll cells form tissue in leaves, and roots, stems, and leaves are organs working together.",
      },
      {
        heading: "The digestive and circulatory systems",
        body: "The digestive system breaks down food mechanically (teeth, churning) and chemically (enzymes). Starch is broken down by amylase, proteins by protease, and fats by lipase. Absorbed nutrients enter the blood via villi. The heart pumps blood through arteries to capillaries (where exchange occurs) and back through veins. Red blood cells carry oxygen; plasma transports dissolved substances.",
      },
      {
        heading: "Gas exchange in humans",
        body: "The lungs contain millions of alveoli with thin walls, a large surface area, and a rich blood supply — all adaptations for efficient gas exchange. When you breathe in, the rib cage moves up and out and the diaphragm flattens, increasing lung volume and drawing air in. Breathing rate increases during exercise to supply more oxygen to respiring muscles.",
      },
    ],
    examTips: [
      "Use the correct order: cell → tissue → organ → organ system — do not skip levels.",
      "Link villi adaptations to absorption: large surface area, thin walls, good blood supply.",
      "When describing gas exchange, mention diffusion of oxygen into blood and carbon dioxide out.",
    ],
    higherConcepts: [
      { term: "Double circulatory system", definition: "Blood passes through the heart twice per complete circuit — once to the lungs (pulmonary) and once to the body (systemic)." },
      { term: "Xylem", definition: "Plant tissue that transports water and mineral ions from roots to leaves in the transpiration stream." },
      { term: "Phloem", definition: "Plant tissue that transports dissolved sugars (assimilates) from sources such as leaves to sinks such as roots and fruits." },
      { term: "Transpiration", definition: "The loss of water vapour from plant leaves through stomata, creating a pull that draws water up the xylem." },
      { term: "Active site", definition: "The region on an enzyme where the substrate binds; enzymes are specific because the active site fits only certain substrates." },
    ],
    higherSections: [
      {
        heading: "Plant transport systems",
        body: "Xylem vessels are hollow, dead cells forming continuous tubes for water transport. Transpiration rate increases in bright light, higher temperature, low humidity, and windy conditions. Phloem uses translocation to move sugars — this requires energy and can occur in any direction depending on where sugars are needed.",
      },
      {
        heading: "Enzyme action and digestion",
        body: "Enzymes work best at specific temperatures and pH values; high temperatures can denature enzymes by changing the shape of the active site. Bile from the liver emulsifies fats (increasing surface area) and neutralises acidic chyme entering the small intestine from the stomach, allowing intestinal enzymes to work effectively.",
      },
    ],
    higherExamTips: [
      "Compare arteries, veins, and capillaries in a table — wall thickness, direction of flow, and presence of valves.",
      "Explain how three alveolus adaptations (thin wall, large surface area, blood supply) improve gas exchange.",
      "For transpiration questions, link each factor (light, temperature, humidity, wind) to its effect on evaporation rate.",
    ],
  }),

  createCurriculumContent({
    slug: "nutrition-digestion",
    overview:
      "Pupils learn what constitutes a balanced diet and why each nutrient group is essential for health, growth, and repair. They investigate how the digestive system breaks down large food molecules into small, absorbable units using enzymes, and consider how diet and exercise affect wellbeing. This aligns with KS3 requirements to understand nutrition, digestion, and the consequences of diet-related health issues.",
    keyConcepts: [
      { term: "Balanced diet", definition: "A diet containing the correct proportions of carbohydrates, proteins, lipids, vitamins, minerals, fibre, and water to maintain health." },
      { term: "Carbohydrate", definition: "A nutrient used primarily for energy; includes sugars (simple) and starch (complex), broken down to glucose during digestion." },
      { term: "Protein", definition: "A nutrient needed for growth and repair of tissues; broken down into amino acids during digestion." },
      { term: "Lipid", definition: "A nutrient used for energy storage, insulation, and cell membranes; broken down into fatty acids and glycerol." },
      { term: "Vitamin and mineral", definition: "Micronutrients required in small amounts for specific functions — e.g. vitamin C for immune health, iron for haemoglobin, calcium for bones." },
      { term: "Digestive enzyme", definition: "A biological catalyst that breaks large, insoluble food molecules into smaller, soluble molecules that can be absorbed." },
      { term: "Absorption", definition: "The process by which digested food molecules pass through the wall of the small intestine into the blood." },
      { term: "BMI (Body Mass Index)", definition: "A measure calculated from mass and height (kg/m²) used as an indicator of whether a person is underweight, healthy weight, overweight, or obese." },
    ],
    sections: [
      {
        heading: "Nutrients and a balanced diet",
        body: "Carbohydrates provide energy; proteins build and repair body tissues; lipids store energy and form cell membranes. Fibre (from plants) aids digestion and prevents constipation. Water is essential for transport and chemical reactions. Deficiency diseases include scurvy (lack of vitamin C) and rickets (lack of vitamin D/calcium). Excess intake of sugary and fatty foods can lead to obesity and type 2 diabetes.",
      },
      {
        heading: "The digestive process",
        body: "Digestion begins in the mouth (mechanical breakdown by teeth, chemical breakdown of starch by salivary amylase). In the stomach, protease begins protein digestion in acidic conditions. In the small intestine, bile emulsifies fats and pancreatic enzymes complete digestion. Villi absorb the resulting glucose, amino acids, fatty acids, and glycerol into the bloodstream.",
      },
      {
        heading: "Diet, exercise, and health",
        body: "Regular exercise strengthens the heart, burns excess energy, and helps maintain a healthy BMI. A sedentary lifestyle combined with a high-calorie diet increases the risk of obesity, cardiovascular disease, and diabetes. Eating plenty of fruit, vegetables, and whole grains while limiting processed foods supports long-term health.",
      },
    ],
    examTips: [
      "Name the products of digestion: starch → glucose, protein → amino acids, lipids → fatty acids + glycerol.",
      "State which enzyme acts on which substrate and where it is produced (mouth, stomach, small intestine/pancreas).",
      "Link nutrient deficiencies to specific conditions — e.g. iron deficiency → anaemia.",
    ],
    higherConcepts: [
      { term: "Emulsification", definition: "The break-up of large fat droplets into smaller droplets by bile, increasing surface area for lipase action." },
      { term: "Peristalsis", definition: "Wave-like muscular contractions that move food through the digestive tract." },
      { term: "Lock-and-key model", definition: "The idea that an enzyme's active site has a shape complementary to its substrate, ensuring specificity." },
      { term: "Malnutrition", definition: "A condition resulting from an unbalanced diet — either insufficient nutrients or excess of harmful substances." },
      { term: "Type 2 diabetes", definition: "A condition where the body becomes resistant to insulin, often linked to obesity and poor diet; blood glucose remains too high." },
    ],
    higherSections: [
      {
        heading: "Enzyme specificity and conditions",
        body: "Amylase, protease, and lipase each catalyse one type of reaction. Enzymes denature above their optimum temperature because the active site changes shape. Stomach protease (pepsin) works best in acidic pH (~2), while intestinal enzymes work best in slightly alkaline conditions — bile neutralises stomach acid to allow this.",
      },
      {
        heading: "Energy balance and metabolic health",
        body: "If energy intake exceeds energy expenditure over time, excess is stored as fat, leading to weight gain. Metabolic syndrome links obesity, high blood pressure, and insulin resistance. Public health campaigns promote reducing sugar, salt, and saturated fat intake. Food labels help consumers make informed dietary choices.",
      },
    ],
    higherExamTips: [
      "Explain why bile is not an enzyme but is still essential for fat digestion.",
      "Describe the journey of a starch molecule from bread to glucose in the blood, naming each stage and enzyme.",
      "Discuss limitations of BMI as a health indicator (does not distinguish muscle from fat, varies with age).",
    ],
  }),

  createCurriculumContent({
    slug: "respiration",
    overview:
      "Respiration at KS3 is taught as the process by which cells release energy from glucose for life processes — not breathing, which is gas exchange. Pupils compare aerobic and anaerobic respiration, write word equations, and link respiration to exercise, oxygen debt, and recovery. This topic supports the National Curriculum requirement to understand how organisms obtain and use energy.",
    keyConcepts: [
      { term: "Respiration", definition: "A chemical process in cells where glucose is broken down to release energy for cellular activities; it occurs in mitochondria." },
      { term: "Aerobic respiration", definition: "Respiration using oxygen, producing carbon dioxide, water, and a large amount of energy; it is the main form in most cells." },
      { term: "Anaerobic respiration", definition: "Respiration without oxygen, producing less energy; in animals it produces lactic acid, in yeast it produces ethanol and carbon dioxide." },
      { term: "Glucose", definition: "A simple sugar (C₆H₁₂O₆) that is the primary fuel for respiration; it comes from digested carbohydrates." },
      { term: "Lactic acid", definition: "A product of anaerobic respiration in animal muscle cells during vigorous exercise when oxygen supply is insufficient." },
      { term: "Oxygen debt", definition: "The amount of extra oxygen needed after exercise to break down accumulated lactic acid and restore normal conditions." },
      { term: "Mitochondria", definition: "Organelles in cells where aerobic respiration occurs; energy is released and transferred to ATP for cellular use." },
      { term: "Fermentation", definition: "Anaerobic respiration in microorganisms such as yeast, producing ethanol and carbon dioxide — used in brewing and bread-making." },
    ],
    sections: [
      {
        heading: "Aerobic respiration",
        body: "Aerobic respiration takes place continuously in all living cells. Word equation: glucose + oxygen → carbon dioxide + water (+ energy). The energy released is used for muscle contraction, active transport, cell division, and maintaining body temperature. Carbon dioxide is a waste product transported in blood to the lungs for exhalation.",
      },
      {
        heading: "Anaerobic respiration and exercise",
        body: "During intense exercise, muscles may not receive enough oxygen for aerobic respiration alone. Anaerobic respiration in muscles: glucose → lactic acid (+ energy). This releases less energy and causes lactic acid to accumulate, leading to muscle fatigue. After exercise, deep breathing supplies extra oxygen to break down lactic acid — the oxygen debt.",
      },
      {
        heading: "Respiration in yeast",
        body: "Yeast cells can respire anaerobically: glucose → ethanol + carbon dioxide (+ energy). This fermentation process is used to produce bread (CO₂ makes dough rise) and alcoholic drinks. It is important to distinguish respiration (energy release in cells) from breathing (taking air into the lungs).",
      },
    ],
    examTips: [
      "Never confuse respiration with breathing — respiration is a chemical process in cells; breathing is gas exchange.",
      "Write word equations accurately: aerobic uses oxygen and produces CO₂ and water; anaerobic in muscles produces lactic acid.",
      "Link exercise to both increased breathing rate (more oxygen) and increased heart rate (faster delivery).",
    ],
    higherConcepts: [
      { term: "ATP", definition: "Adenosine triphosphate — the molecule that stores and transfers energy within cells; respiration transfers energy to ATP." },
      { term: "Exothermic reaction", definition: "A chemical reaction that releases energy to the surroundings; respiration is exothermic." },
      { term: "Heart rate", definition: "The number of heartbeats per minute; increases during exercise to deliver oxygen and glucose to muscles faster." },
      { term: "Glucose storage", definition: "Excess glucose is stored as glycogen in the liver and muscles, then converted back to glucose when needed for respiration." },
      { term: "Carbon dioxide transport", definition: "CO₂ from respiration dissolves in blood plasma, binds to haemoglobin, or is carried as hydrogencarbonate ions to the lungs." },
    ],
    higherSections: [
      {
        heading: "Comparing aerobic and anaerobic respiration",
        body: "Aerobic respiration releases approximately 19× more energy per glucose molecule than anaerobic respiration in muscles. Aerobic requires oxygen and occurs in mitochondria; anaerobic occurs in the cytoplasm when oxygen is limited. Both start with glucose, but products differ: aerobic produces CO₂ and H₂O; anaerobic in animals produces lactic acid; in yeast produces ethanol and CO₂.",
      },
      {
        heading: "Respiration and organism activity",
        body: "Active organisms (flying birds, running mammals) have high respiration rates because their cells need more energy. Cold-blooded animals respire more slowly in cold conditions. Plants respire continuously in all living cells, using glucose produced by photosynthesis. Measuring carbon dioxide production or temperature change can demonstrate respiration in living organisms.",
      },
    ],
    higherExamTips: [
      "State that energy is released during respiration — it is not 'created' or 'made from oxygen'.",
      "Explain oxygen debt in terms of lactic acid breakdown, not just 'paying back oxygen'.",
      "Compare the energy yield and products of aerobic vs anaerobic respiration in a table.",
    ],
  }),

  createCurriculumContent({
    slug: "reproduction",
    overview:
      "KS3 reproduction covers sexual and asexual reproduction in plants and animals, including human reproductive systems, fertilisation, and development. Pupils learn about the menstrual cycle, puberty, and plant reproduction through pollination, fertilisation, and seed dispersal. The topic meets National Curriculum requirements for understanding life cycles and reproductive strategies.",
    keyConcepts: [
      { term: "Sexual reproduction", definition: "Reproduction involving the fusion of male and female gametes (sex cells), producing offspring with genetic variation from two parents." },
      { term: "Asexual reproduction", definition: "Reproduction involving only one parent, producing genetically identical offspring (clones), e.g. strawberry runners or binary fission in bacteria." },
      { term: "Gamete", definition: "A specialised sex cell — sperm (male) or ovum/egg (female) in humans — containing half the normal number of chromosomes." },
      { term: "Fertilisation", definition: "The fusion of a male gamete and a female gamete to form a zygote with a full set of chromosomes." },
      { term: "Zygote", definition: "The cell formed when two gametes fuse; it divides by mitosis to develop into an embryo." },
      { term: "Pollination", definition: "The transfer of pollen from an anther to a stigma in flowering plants; can occur by wind or insects." },
      { term: "Menstrual cycle", definition: "A monthly cycle in females (roughly 28 days) involving the release of an egg and preparation of the uterus lining for pregnancy." },
      { term: "Puberty", definition: "The period when the reproductive system matures and secondary sexual characteristics develop, triggered by hormones." },
    ],
    sections: [
      {
        heading: "Human reproduction",
        body: "The male reproductive system produces sperm in the testes; the female system produces eggs in the ovaries. During sexual intercourse, sperm swim through the uterus to the oviduct where fertilisation may occur. The zygote implants in the uterus wall and develops into an embryo, then a fetus. The placenta provides oxygen and nutrients and removes waste; the umbilical cord connects fetus to placenta.",
      },
      {
        heading: "The menstrual cycle and puberty",
        body: "Each month an egg is released from an ovary (ovulation). The uterus lining thickens to receive a fertilised egg; if fertilisation does not occur, the lining breaks down (menstruation). Hormones (oestrogen and progesterone) control the cycle. Puberty brings physical changes including growth, development of reproductive organs, and secondary sexual characteristics.",
      },
      {
        heading: "Plant reproduction",
        body: "Flowering plants reproduce sexually: pollen (male gamete) is transferred to the stigma (pollination), a pollen tube grows to the ovule, and fertilisation occurs. Seeds and fruits develop from fertilised ovules. Seeds are dispersed by wind, water, animals, or explosion to colonise new areas. Plants can also reproduce asexually via runners, bulbs, or cuttings.",
      },
    ],
    examTips: [
      "Distinguish pollination (transfer of pollen) from fertilisation (fusion of gametes) — they are different steps.",
      "Know the functions of testes, ovaries, uterus, and placenta in human reproduction.",
      "For asexual reproduction, state that offspring are genetically identical to the parent.",
    ],
    higherConcepts: [
      { term: "Ovulation", definition: "The release of a mature egg from an ovary, typically around day 14 of the menstrual cycle." },
      { term: "Embryo and fetus", definition: "An embryo is the early stage of development (first 8 weeks); after this it is called a fetus until birth." },
      { term: "Cross-pollination", definition: "Transfer of pollen between different plants, increasing genetic variation in offspring." },
      { term: "Seed dispersal", definition: "Mechanisms (wind, water, animals, explosive pods) that spread seeds away from the parent plant to reduce competition." },
      { term: "Hormone", definition: "A chemical messenger transported in the blood that controls body processes; oestrogen and progesterone regulate the menstrual cycle." },
    ],
    higherSections: [
      {
        heading: "Advantages of sexual and asexual reproduction",
        body: "Sexual reproduction produces variation, helping populations adapt to changing environments and reducing vulnerability to disease. Asexual reproduction is faster, requires no mate, and preserves successful characteristics — but offspring are clones with no genetic variation. Many plants use both strategies: sexual reproduction for variation, asexual for rapid colonisation.",
      },
      {
        heading: "Flower structure and insect pollination",
        body: "Insect-pollinated flowers have brightly coloured petals, scent, and nectar to attract insects. Sticky or spiky pollen grains attach to insects and are carried to other flowers. Wind-pollinated flowers have small, dull petals, hang outside the plant, and produce large quantities of lightweight pollen. Each strategy reflects adaptation to the pollinating agent.",
      },
    ],
    higherExamTips: [
      "Compare sexual and asexual reproduction in terms of variation, speed, and number of parents.",
      "Describe the path of sperm from testes to egg, naming structures in order.",
      "Explain how a fruit or seed is adapted for its dispersal method (e.g. wing for wind, hooks for animal fur).",
    ],
  }),

  createCurriculumContent({
    slug: "genetics",
    overview:
      "At KS3, pupils are introduced to chromosomes, genes, and DNA as the basis of inheritance, and learn how characteristics are passed from parents to offspring. They explore genetic and environmental variation and use simple genetic diagrams to predict offspring characteristics. This topic lays foundations for GCSE genetics and meets National Curriculum requirements on heredity.",
    keyConcepts: [
      { term: "DNA", definition: "Deoxyribonucleic acid — a molecule in the nucleus that carries the genetic code as a sequence of bases, arranged in a double helix." },
      { term: "Gene", definition: "A section of DNA that codes for a specific protein or characteristic; genes are the units of inheritance." },
      { term: "Chromosome", definition: "A long coiled thread of DNA found in the nucleus; humans have 46 chromosomes (23 pairs) in most body cells." },
      { term: "Allele", definition: "A version of a gene; for example, the gene for eye colour may have alleles for blue or brown." },
      { term: "Dominant allele", definition: "An allele that is expressed in the phenotype even if only one copy is present; represented by a capital letter." },
      { term: "Recessive allele", definition: "An allele that is only expressed when two copies are present; represented by a lowercase letter." },
      { term: "Genotype", definition: "The alleles an organism possesses for a particular characteristic, e.g. Bb or bb." },
      { term: "Phenotype", definition: "The observable characteristics of an organism, e.g. brown eyes, determined by genotype and environment." },
    ],
    sections: [
      {
        heading: "DNA, genes, and chromosomes",
        body: "DNA is found in the nucleus of every cell, packaged into chromosomes. Each gene is a length of DNA coding for a specific protein. Humans inherit one set of 23 chromosomes from each parent, giving 46 in total. Gametes contain 23 chromosomes so that fertilisation restores the full number.",
      },
      {
        heading: "Inheritance and alleles",
        body: "Characteristics are controlled by genes. Each person has two alleles for each gene — one from each parent. A dominant allele masks a recessive one. For example, if brown eyes (B) are dominant over blue (b), genotypes BB and Bb give brown eyes; only bb gives blue eyes. Punnett squares can predict the probability of offspring genotypes.",
      },
      {
        heading: "Variation",
        body: "Genetic variation comes from different alleles, mutation, and the mixing of alleles during sexual reproduction. Environmental variation is caused by factors such as diet, climate, and lifestyle — e.g. identical twins may differ in weight. Most characteristics are influenced by both genes and environment.",
      },
    ],
    examTips: [
      "Use correct notation: capital letter for dominant, lowercase for recessive; always show both alleles in a genotype.",
      "Distinguish genotype (genetic makeup) from phenotype (observable appearance).",
      "State that variation can be genetic, environmental, or both — give a specific example for each.",
    ],
    higherConcepts: [
      { term: "Homozygous", definition: "Having two identical alleles for a gene, e.g. BB or bb." },
      { term: "Heterozygous", definition: "Having two different alleles for a gene, e.g. Bb (a carrier of the recessive allele)." },
      { term: "Mutation", definition: "A random change in the DNA sequence that may produce a new allele; most are harmful or neutral, but some are beneficial." },
      { term: "Punnett square", definition: "A diagram used to predict the genotypes and phenotypes of offspring from a genetic cross." },
      { term: "Inherited disorder", definition: "A condition caused by faulty alleles passed from parents, e.g. cystic fibrosis (recessive) or Huntington's disease (dominant)." },
    ],
    higherSections: [
      {
        heading: "Predicting inheritance patterns",
        body: "A monohybrid cross involves one gene. Crossing two heterozygotes (Bb × Bb) gives a 3:1 phenotypic ratio (dominant:recessive) and 1:2:1 genotypic ratio (BB:Bb:bb). Carriers (heterozygotes) have the recessive allele but do not show the recessive phenotype. Family pedigree diagrams can trace inheritance of conditions through generations.",
      },
      {
        heading: "From genes to proteins",
        body: "Each gene codes for a specific sequence of amino acids that fold into a protein. Proteins determine characteristics — e.g. melanin affects skin and hair colour; haemoglobin is a protein in red blood cells. If a mutation changes the DNA sequence, the protein may not function correctly, leading to a genetic disorder.",
      },
    ],
    higherExamTips: [
      "Work through Punnett squares systematically — list gametes, combine, then count ratios.",
      "Explain why a recessive disorder can skip generations (carriers are heterozygous and unaffected).",
      "Link DNA → gene → protein → characteristic in extended answers.",
    ],
  }),

  createCurriculumContent({
    slug: "ecosystems",
    overview:
      "KS3 ecosystems introduces pupils to interdependence in communities, food chains and webs, and nutrient cycles including the carbon and water cycles. They consider how human activities affect ecosystems through deforestation, pollution, and climate change, and evaluate conservation strategies. This aligns with the National Curriculum focus on relationships in ecosystems and human impact on the environment.",
    keyConcepts: [
      { term: "Ecosystem", definition: "A community of living organisms (biotic factors) interacting with their non-living environment (abiotic factors) in a particular area." },
      { term: "Food chain", definition: "A linear sequence showing how energy passes from one organism to the next, e.g. grass → rabbit → fox." },
      { term: "Food web", definition: "A network of interconnected food chains showing the complex feeding relationships in an ecosystem." },
      { term: "Producer", definition: "An organism that makes its own food by photosynthesis (plants, algae); it is the start of most food chains." },
      { term: "Consumer", definition: "An organism that obtains energy by eating other organisms — primary (herbivore), secondary, or tertiary (carnivore/omnivore)." },
      { term: "Decomposer", definition: "An organism such as bacteria or fungi that breaks down dead material, returning nutrients to the soil." },
      { term: "Carbon cycle", definition: "The circulation of carbon through the atmosphere (CO₂), living organisms, oceans, and rocks via photosynthesis, respiration, combustion, and decomposition." },
      { term: "Biodiversity", definition: "The variety of different species and habitats in an area; high biodiversity makes ecosystems more stable and resilient." },
    ],
    sections: [
      {
        heading: "Food chains and food webs",
        body: "Energy flows from the Sun to producers, then to consumers. At each trophic level, energy is lost as heat, movement, and waste, so food chains rarely exceed four or five levels. Food webs show that most organisms eat and are eaten by multiple species. Removing one species can affect many others — e.g. removing wolves may cause a deer population boom and overgrazing.",
      },
      {
        heading: "The carbon and water cycles",
        body: "Plants remove CO₂ from the air by photosynthesis; animals and plants return CO₂ through respiration. Decomposers release CO₂ as they break down dead matter. Burning fossil fuels adds extra CO₂ to the atmosphere. Water evaporates from oceans and lakes, condenses to form clouds, falls as precipitation, and returns via rivers to the sea. Plants absorb water and release it through transpiration.",
      },
      {
        heading: "Human impact and conservation",
        body: "Deforestation reduces biodiversity and increases CO₂ in the atmosphere. Pollution (plastic, chemicals, acid rain) harms wildlife. Overfishing and hunting can drive species to extinction. Conservation methods include protected areas, breeding programmes, seed banks, and sustainable resource use. Individuals can reduce impact through recycling, reducing energy use, and supporting conservation charities.",
      },
    ],
    examTips: [
      "Draw arrows in food chains pointing in the direction of energy transfer (towards the eater).",
      "Name processes in the carbon cycle: photosynthesis removes CO₂; respiration, decomposition, and combustion add CO₂.",
      "Give specific examples of human impact and a matching conservation strategy.",
    ],
    higherConcepts: [
      { term: "Trophic level", definition: "The position of an organism in a food chain — producer, primary consumer, secondary consumer, etc." },
      { term: "Bioaccumulation", definition: "The build-up of toxins such as mercury in organisms at higher trophic levels as they consume contaminated prey." },
      { term: "Greenhouse effect", definition: "The trapping of heat by gases such as CO₂ and methane in the atmosphere, leading to global warming." },
      { term: "Sustainable development", definition: "Meeting present needs without compromising the ability of future generations to meet theirs." },
      { term: "Indicator species", definition: "An organism whose presence or absence indicates the health of an environment, e.g. lichens for air quality, mayfly larvae for clean water." },
    ],
    higherSections: [
      {
        heading: "Energy transfer and pyramids",
        body: "Only about 10% of energy at one trophic level is passed to the next; the rest is lost through respiration, heat, movement, and undigested material. Pyramids of biomass show the total mass of organisms at each level — they are nearly always pyramid-shaped. Pyramids of numbers can be inverted (e.g. one tree supporting thousands of insects).",
      },
      {
        heading: "Managing ecosystems",
        body: "Reintroduction programmes (e.g. beavers, ospreys) can restore ecological balance. Sustainable fishing quotas prevent stock collapse. Reforestation and peatland restoration sequester carbon. Invasive species (e.g. grey squirrels) can outcompete native species. Ecosystem services — pollination, clean water, flood defence — have enormous economic value.",
      },
    ],
    higherExamTips: [
      "Explain why food chains are limited to 4–5 trophic levels using energy loss at each stage.",
      "Link deforestation to both biodiversity loss and increased atmospheric CO₂ with clear mechanisms.",
      "Evaluate conservation strategies — consider cost, effectiveness, and impact on local communities.",
    ],
  }),

  createCurriculumContent({
    slug: "health-disease",
    overview:
      "This topic covers how communicable diseases spread, the role of pathogens, and how the body defends itself through the immune system. Pupils learn about vaccination, antibiotics, and how lifestyle choices affect non-communicable diseases such as heart disease and lung cancer. It fulfils KS3 National Curriculum requirements on health, disease, and the development of medicines.",
    keyConcepts: [
      { term: "Pathogen", definition: "A microorganism that causes disease, including bacteria, viruses, fungi, and protists." },
      { term: "Communicable disease", definition: "A disease that can spread from one person to another, e.g. flu, measles, or athlete's foot." },
      { term: "Non-communicable disease", definition: "A disease that cannot be caught from another person, e.g. cancer, type 2 diabetes, or coronary heart disease." },
      { term: "White blood cell", definition: "A cell in the blood that defends the body by ingesting pathogens, producing antibodies, or releasing antitoxins." },
      { term: "Antibody", definition: "A protein produced by white blood cells that binds to antigens on pathogens, marking them for destruction." },
      { term: "Vaccination", definition: "Introducing a dead, weakened, or fragment of a pathogen to stimulate the immune system to produce antibodies without causing the disease." },
      { term: "Antibiotic", definition: "A medicine that kills bacteria or stops them reproducing; it is not effective against viruses." },
      { term: "Immune response", definition: "The body's defence against pathogens involving white blood cells, antibodies, and memory cells for long-term immunity." },
    ],
    sections: [
      {
        heading: "Pathogens and disease transmission",
        body: "Bacteria are living cells that can reproduce rapidly and may release toxins. Viruses are much smaller and reproduce inside host cells, damaging them. Fungi cause infections such as athlete's foot; protists cause diseases like malaria. Pathogens spread through direct contact, droplets in air, contaminated food or water, and vectors (e.g. mosquitoes carrying malaria).",
      },
      {
        heading: "The immune system and vaccination",
        body: "The skin and mucus membranes are first-line defences. White blood cells ingest pathogens (phagocytosis), produce antibodies specific to antigens, and release antitoxins. Memory cells remain after infection so the body responds faster if the same pathogen returns. Vaccines stimulate this response safely, providing immunity without illness. Herd immunity protects those who cannot be vaccinated.",
      },
      {
        heading: "Lifestyle and non-communicable disease",
        body: "Smoking damages lungs and increases the risk of lung cancer and heart disease. Excessive alcohol damages the liver. A diet high in saturated fat and salt contributes to obesity and cardiovascular disease. Regular exercise and a balanced diet reduce these risks. Early detection through screening improves treatment outcomes.",
      },
    ],
    examTips: [
      "Never say antibiotics kill viruses — they only work against bacteria.",
      "Describe the specific role of white blood cells: ingest, antibodies, antitoxins.",
      "Give examples of both communicable and non-communicable diseases and how each type is prevented.",
    ],
    higherConcepts: [
      { term: "Antigen", definition: "A molecule on the surface of a pathogen that triggers an immune response and is recognised by antibodies." },
      { term: "Antibiotic resistance", definition: "When bacteria evolve to survive antibiotics, often caused by overuse or incomplete courses of treatment." },
      { term: "Herd immunity", definition: "When a high proportion of a population is vaccinated, preventing disease spread and protecting unvaccinated individuals." },
      { term: "Coronary heart disease", definition: "A non-communicable disease where fatty deposits narrow coronary arteries, reducing blood flow to the heart muscle." },
      { term: "Immunisation programme", definition: "A planned schedule of vaccinations (e.g. MMR, HPV) offered to the population to control infectious diseases." },
    ],
    higherSections: [
      {
        heading: "Antibiotics and drug development",
        body: "Penicillin was the first widely used antibiotic. Antibiotic resistance is a major global health threat — bacteria such as MRSA survive standard treatments. Patients must complete full courses and not demand antibiotics for viral infections. New drugs undergo preclinical testing, clinical trials with control groups, and double-blind studies before approval.",
      },
      {
        heading: "Risk factors and disease prevention",
        body: "Risk factors for non-communicable diseases include smoking, poor diet, lack of exercise, and excessive alcohol. Some factors are linked (obesity increases risk of diabetes and heart disease). Public health campaigns aim to change behaviour. Vaccination programmes have eradicated smallpox and nearly eliminated polio. Clean water, sanitation, and hygiene prevent many communicable diseases.",
      },
    ],
    higherExamTips: [
      "Explain antibiotic resistance in terms of natural selection — resistant bacteria survive and reproduce.",
      "Compare how vaccines and antibiotics work — prevention vs treatment, viruses vs bacteria.",
      "Evaluate lifestyle advice using specific disease links (smoking → lung cancer, saturated fat → CHD).",
    ],
  }),

  createCurriculumContent({
    slug: "particles",
    overview:
      "The particle model explains the properties and behaviour of solids, liquids, and gases. At KS3, pupils describe particle arrangement and movement, explain changes of state, and use the model to account for diffusion and pressure in gases. This topic is central to the National Curriculum chemistry strand on matter and its physical properties.",
    keyConcepts: [
      { term: "Particle model", definition: "The idea that all substances are made of tiny particles (atoms, molecules, or ions) that are in constant motion and have spaces between them." },
      { term: "Solid", definition: "A state of matter with particles closely packed in a fixed arrangement, vibrating in place; solids have fixed shape and volume." },
      { term: "Liquid", definition: "A state of matter with particles close together but able to slide past each other; liquids have fixed volume but take the shape of their container." },
      { term: "Gas", definition: "A state of matter with particles far apart, moving rapidly in random directions; gases fill their container and can be compressed." },
      { term: "Change of state", definition: "A physical change between solid, liquid, and gas caused by heating or cooling — no new substance is formed." },
      { term: "Melting and freezing", definition: "Melting is solid to liquid at the melting point; freezing is the reverse (liquid to solid) at the same temperature." },
      { term: "Evaporation and condensation", definition: "Evaporation is liquid to gas at the surface at any temperature; condensation is gas to liquid, e.g. on a cold window." },
      { term: "Diffusion", definition: "The net movement of particles from an area of higher concentration to lower concentration due to random particle motion." },
    ],
    sections: [
      {
        heading: "The particle model of matter",
        body: "In solids, strong forces hold particles in fixed positions — they vibrate but cannot move far. In liquids, particles are still close but can flow over each other. In gases, particles are far apart with negligible forces between them, moving quickly and colliding with walls to create pressure. Heating gives particles more kinetic energy, making them move faster.",
      },
      {
        heading: "Changes of state",
        body: "When a solid is heated, particle vibrations increase until the melting point is reached and it becomes a liquid. Further heating gives particles enough energy to overcome forces completely and become a gas (boiling). The temperature stays constant during melting and boiling because energy is used to break bonds, not raise temperature. Sublimation is solid directly to gas (e.g. dry ice).",
      },
      {
        heading: "Diffusion in gases and liquids",
        body: "Diffusion occurs because particles move randomly and spread out from high to low concentration. It is faster in gases (particles far apart, move quickly) than in liquids. Examples: the smell of cooking spreading through a house, potassium manganate(VII) diffusing in water, or bromine vapour filling a gas jar. Higher temperature increases diffusion rate because particles move faster.",
      },
    ],
    examTips: [
      "Always link properties to particle behaviour — e.g. gases compress because particles are far apart with large spaces.",
      "State that changes of state are physical, not chemical — the substance remains the same material.",
      "Use the particle model to explain diffusion: random movement from high to low concentration.",
    ],
    higherConcepts: [
      { term: "Kinetic energy", definition: "The energy of moving particles; temperature is a measure of average kinetic energy of particles in a substance." },
      { term: "Boiling vs evaporation", definition: "Boiling occurs throughout a liquid at a fixed boiling point; evaporation occurs only at the surface at any temperature." },
      { term: "Pressure in gases", definition: "Force per unit area caused by gas particles colliding with container walls; increases with temperature or when volume is reduced." },
      { term: "Brownian motion", definition: "The random jerky movement of visible particles (e.g. smoke) caused by collisions with invisible, fast-moving air or water molecules." },
      { term: "Absolute zero", definition: "The theoretical temperature (−273 °C) at which particles have minimum kinetic energy and would stop moving." },
    ],
    higherSections: [
      {
        heading: "Heating and cooling curves",
        body: "A heating curve shows temperature rising until melting point (plateau during melting), then rising to boiling point (plateau during boiling), then rising again as a gas. The flat sections represent energy being used for change of state (latent heat) rather than temperature increase. Cooling curves show the reverse pattern.",
      },
      {
        heading: "Gas pressure and volume",
        body: "When gas particles collide with container walls, they exert pressure. Increasing temperature makes particles move faster and collide more forcefully, increasing pressure. Compressing a gas reduces volume, so particles hit walls more often, also increasing pressure. This particle explanation prepares pupils for Boyle's law and the gas laws at GCSE.",
      },
    ],
    higherExamTips: [
      "Explain why temperature stays constant during a change of state — energy breaks intermolecular forces, not kinetic energy.",
      "Compare rates of diffusion in gases vs liquids using particle spacing and speed.",
      "Describe Brownian motion as evidence for the existence and movement of particles.",
    ],
  }),

  createCurriculumContent({
    slug: "elements-compounds-mixtures",
    overview:
      "Pupils distinguish elements, compounds, and mixtures and learn that elements are made of one type of atom while compounds contain two or more elements chemically bonded. They explore separation techniques based on physical properties and use chemical formulae to represent compounds. This topic addresses the National Curriculum requirement to understand the particulate nature of matter and purity.",
    keyConcepts: [
      { term: "Element", definition: "A substance made of only one type of atom, which cannot be broken down into simpler substances by chemical means; represented by a chemical symbol (e.g. O, Fe)." },
      { term: "Compound", definition: "A substance made of two or more different elements chemically bonded in fixed proportions, with properties different from its elements (e.g. H₂O)." },
      { term: "Mixture", definition: "Two or more substances physically combined but not chemically bonded; each retains its own properties and can be separated by physical methods." },
      { term: "Atom", definition: "The smallest particle of an element that retains the chemical properties of that element." },
      { term: "Molecule", definition: "Two or more atoms chemically bonded together; can be an element (O₂) or a compound (CO₂)." },
      { term: "Chemical formula", definition: "A shorthand showing the types and numbers of atoms in a compound, e.g. NaCl, CO₂, H₂SO₄." },
      { term: "Filtration", definition: "Separating an insoluble solid from a liquid using filter paper; the solid (residue) is trapped and the liquid (filtrate) passes through." },
      { term: "Distillation", definition: "Separating liquids with different boiling points by evaporation and condensation; used to obtain pure water from salt water." },
    ],
    sections: [
      {
        heading: "Elements, compounds, and formulae",
        body: "Elements are listed in the periodic table — about 118 are known. Compounds form when elements react and bond together; the formula shows the ratio of atoms (water H₂O has two hydrogen atoms to one oxygen). Compounds have very different properties from their elements — sodium (reactive metal) + chlorine (poisonous gas) → sodium chloride (table salt).",
      },
      {
        heading: "Mixtures and purity",
        body: "Air is a mixture of gases (mainly nitrogen and oxygen). Seawater is a mixture of water and dissolved salts. Mixtures can be separated without chemical reactions. Pure substances melt and boil at sharp, fixed temperatures; impure substances melt and boil over a range. Chromatography separates dissolved substances based on how far they travel through a medium.",
      },
      {
        heading: "Separation techniques",
        body: "Filtration separates insoluble solids from liquids. Crystallisation obtains solid solute from a solution by evaporating solvent. Simple distillation separates a solvent from a solution. Fractional distillation separates liquids with different boiling points (e.g. crude oil). Chromatography separates dyes and pigments. Choosing the right technique depends on the physical properties of the substances.",
      },
    ],
    examTips: [
      "State clearly whether a substance is an element, compound, or mixture — air and seawater are mixtures, not compounds.",
      "Match separation technique to property: filtration for insoluble solid, distillation for liquids with different boiling points.",
      "Write correct chemical formulae with subscript numbers for atom counts (H₂O not H2O in typed text).",
    ],
    higherConcepts: [
      { term: "Chromatography", definition: "A technique separating dissolved substances as a solvent moves up paper; spots with higher solubility travel further." },
      { term: "Rf value", definition: "The ratio of distance travelled by a substance to distance travelled by the solvent front; used to identify unknown substances." },
      { term: "Homogeneous mixture", definition: "A mixture with uniform composition throughout, e.g. salt dissolved in water (a solution)." },
      { term: "Heterogeneous mixture", definition: "A mixture with visibly different parts, e.g. sand and water, or salad." },
      { term: "Fractional distillation", definition: "Distillation using a fractionating column to separate liquids with close boiling points, e.g. ethanol from water." },
    ],
    higherSections: [
      {
        heading: "Paper chromatography in practice",
        body: "A pencil line is drawn near the bottom of chromatography paper (ink would dissolve and interfere). Spots of sample are placed on the line and the paper is placed in a solvent. As the solvent rises, substances separate according to their affinity for the solvent vs the paper. Rf = distance moved by spot ÷ distance moved by solvent. Pure substances produce one spot; mixtures produce several.",
      },
      {
        heading: "Formulae and conservation of mass",
        body: "In a compound, the ratio of atoms is fixed by chemical bonding. When elements react to form compounds, the total mass of reactants equals the total mass of products — atoms are rearranged, not created or destroyed. This principle of conservation of mass underpins all chemical equations at GCSE.",
      },
    ],
    higherExamTips: [
      "Calculate Rf values and use them to compare unknown substances to known standards.",
      "Explain why fractional distillation works — repeated evaporation and condensation in a fractionating column.",
      "Distinguish physical separation (mixtures) from chemical reactions (compounds forming).",
    ],
  }),

  createCurriculumContent({
    slug: "atomic-structure",
    overview:
      "KS3 atomic structure introduces the subatomic particles — protons, neutrons, and electrons — and how they define an element. Pupils learn about electronic configuration in shells, atomic number and mass number, and the concept of isotopes. This topic provides the foundation for understanding the periodic table and chemical bonding at GCSE.",
    keyConcepts: [
      { term: "Proton", definition: "A positively charged subatomic particle found in the nucleus; its number defines the element (atomic number)." },
      { term: "Neutron", definition: "An uncharged subatomic particle in the nucleus; contributes to mass number but not chemical identity." },
      { term: "Electron", definition: "A negatively charged subatomic particle in shells (energy levels) around the nucleus; much smaller mass than protons or neutrons." },
      { term: "Atomic number", definition: "The number of protons in an atom's nucleus; it determines which element the atom is and equals the number of electrons in a neutral atom." },
      { term: "Mass number", definition: "The total number of protons plus neutrons in an atom's nucleus." },
      { term: "Electron shell", definition: "An energy level around the nucleus that holds electrons; the first shell holds up to 2, the second up to 8, the third up to 8 at KS3." },
      { term: "Isotope", definition: "Atoms of the same element with the same number of protons but different numbers of neutrons, e.g. carbon-12 and carbon-14." },
      { term: "Relative charge", definition: "Proton +1, electron −1, neutron 0; atoms are neutral because proton number equals electron number." },
    ],
    sections: [
      {
        heading: "Structure of the atom",
        body: "Atoms have a tiny, dense, positively charged nucleus containing protons and neutrons, surrounded by electrons in shells. The atom is mostly empty space. The mass of an atom is concentrated in the nucleus because protons and neutrons are much heavier than electrons. Each element has a unique number of protons — this is its atomic number.",
      },
      {
        heading: "Electronic structure",
        body: "Electrons occupy shells around the nucleus. The first shell holds a maximum of 2 electrons, the second 8, the third 8 (at KS3 level). Elements in Group 1 have 1 outer electron, Group 7 have 7 outer electrons, Group 0 have full outer shells. The outer shell electrons (valence electrons) determine how an element reacts.",
      },
      {
        heading: "Isotopes and relative atomic mass",
        body: "Isotopes are atoms of the same element with different numbers of neutrons — they have the same atomic number but different mass numbers. Carbon-12 and carbon-14 are both carbon (6 protons) but have 6 and 8 neutrons respectively. Isotopes have identical chemical properties but may differ in stability — some are radioactive (e.g. carbon-14).",
      },
    ],
    examTips: [
      "Calculate subatomic particles: protons = atomic number; electrons = protons (in neutral atom); neutrons = mass number − atomic number.",
      "Draw electron shell diagrams showing correct numbers for elements up to atomic number 20.",
      "State that isotopes have the same number of protons but different numbers of neutrons.",
    ],
    higherConcepts: [
      { term: "Valence electrons", definition: "Electrons in the outermost shell; their number determines bonding and reactivity." },
      { term: "Relative atomic mass (Ar)", definition: "The weighted average mass of an element's isotopes compared to carbon-12; shown on the periodic table." },
      { term: "Radioactive isotope", definition: "An unstable isotope that decays by emitting radiation, used in carbon dating and medical tracers." },
      { term: "Ion", definition: "An atom or group of atoms that has lost or gained electrons, giving it an overall positive or negative charge." },
      { term: "Nucleon number", definition: "Another name for mass number — the total count of protons and neutrons in the nucleus." },
    ],
    higherSections: [
      {
        heading: "Linking structure to the periodic table",
        body: "Elements are arranged by atomic number. Group number (for Groups 1, 7, 0) equals the number of outer-shell electrons. Period number equals the number of occupied electron shells. This explains why elements in the same group have similar chemical properties — they have the same number of valence electrons and form similar types of bonds.",
      },
      {
        heading: "Ions and simple ion charges",
        body: "Metal atoms lose outer electrons to form positive ions (e.g. Na → Na⁺, Mg → Mg²⁺). Non-metal atoms gain electrons to form negative ions (e.g. Cl → Cl⁻, O → O²⁻). The charge on an ion relates to how many electrons are lost or gained to achieve a stable full outer shell. Ions form ionic compounds through electrostatic attraction.",
      },
    ],
    higherExamTips: [
      "Deduce ion charges from group number — Group 1 → +1, Group 2 → +2, Group 6 → −2, Group 7 → −1.",
      "Explain why isotopes have identical chemical properties — same electron configuration and proton number.",
      "Calculate relative atomic mass from isotope abundances (weighted mean).",
    ],
  }),

  createCurriculumContent({
    slug: "periodic-table",
    overview:
      "The periodic table organises elements by atomic number into groups and periods that reveal patterns in properties. At KS3, pupils explore Groups 1, 7, and 0, understand why elements in the same group behave similarly, and predict properties from position. This topic supports the National Curriculum requirement to use the periodic table to explain chemical behaviour.",
    keyConcepts: [
      { term: "Periodic table", definition: "A tabular arrangement of elements ordered by atomic number, with rows (periods) and columns (groups) showing repeating patterns of properties." },
      { term: "Group", definition: "A vertical column of elements with the same number of outer-shell electrons and similar chemical properties." },
      { term: "Period", definition: "A horizontal row of elements with the same number of electron shells; properties change gradually across a period." },
      { term: "Group 1 (alkali metals)", definition: "Highly reactive metals with one outer electron (Li, Na, K, etc.); reactivity increases down the group." },
      { term: "Group 7 (halogens)", definition: "Reactive non-metals with seven outer electrons (F, Cl, Br, I); exist as diatomic molecules; reactivity decreases down the group." },
      { term: "Group 0 (noble gases)", definition: "Unreactive elements with full outer electron shells (He, Ne, Ar, Kr, Xe); used in lighting and as inert atmospheres." },
      { term: "Metal vs non-metal", definition: "Metals are on the left and centre (conductive, malleable); non-metals are on the right (poor conductors, brittle as solids)." },
      { term: "Transition metals", definition: "Elements in the central block of the table (e.g. iron, copper, nickel) with variable valencies and coloured compounds." },
    ],
    sections: [
      {
        heading: "Organisation of the periodic table",
        body: "Elements are arranged by increasing atomic number. Each period represents a new electron shell being filled. Groups contain elements with the same number of outer electrons — this explains similar properties. The table was developed by Mendeleev, who left gaps for undiscovered elements and predicted their properties accurately.",
      },
      {
        heading: "Group 1 and Group 7",
        body: "Alkali metals (Group 1) are soft, low-density metals that react vigorously with water producing hydrogen gas and an alkali. Reactivity increases down the group as the outer electron is more easily lost. Halogens (Group 7) are coloured non-metals (chlorine is green-yellow gas, bromine is red-brown liquid, iodine is grey-black solid). More reactive halogens displace less reactive ones from solutions.",
      },
      {
        heading: "Group 0 and trends",
        body: "Noble gases have full outer shells and are extremely unreactive. Helium has 2 outer electrons; all others have 8. They are used in neon signs (Ne), filament lamps (Ar), and as inert welding atmospheres. Across a period, elements change from metallic to non-metallic character. Down a group, melting point and reactivity trends differ between metals and non-metals.",
      },
    ],
    examTips: [
      "Link group number to outer electrons: Group 1 → 1, Group 7 → 7, Group 0 → full outer shell.",
      "State trends with direction: alkali metal reactivity increases down; halogen reactivity decreases down.",
      "Write word equations for alkali metal + water and halogen displacement reactions.",
    ],
    higherConcepts: [
      { term: "Displacement reaction", definition: "A more reactive halogen displaces a less reactive halogen from its compound, e.g. Cl₂ + 2KBr → 2KCl + Br₂." },
      { term: "Diatomic molecule", definition: "A molecule of two atoms, e.g. H₂, O₂, Cl₂, N₂; halogens exist as diatomic molecules in their elemental form." },
      { term: "Electron configuration", definition: "The arrangement of electrons in shells, e.g. sodium (2,8,1) explains its Group 1 position and +1 ion formation." },
      { term: "Mendeleev's prediction", definition: "Mendeleev arranged elements by mass but swapped some to fit patterns; he left gaps and predicted properties of germanium and gallium." },
      { term: "Reactivity series link", definition: "Group 1 metals are the most reactive metals; their position reflects ease of losing the single outer electron." },
    ],
    higherSections: [
      {
        heading: "Explaining group trends",
        body: "Down Group 1, each element has an extra electron shell, so the outer electron is further from the nucleus and more easily lost — hence increasing reactivity. Down Group 7, extra shells mean the outer electrons are further from the nucleus and less strongly attracted, so reactivity decreases. These trends are explained by atomic structure, not just memorisation.",
      },
      {
        heading: "Uses of specific elements",
        body: "Sodium and potassium compounds are essential for nerve function and fertilisers. Chlorine disinfects water. Iodine is an antiseptic. Argon prevents oxidation in light bulb filaments. Helium is used in balloons and cooling MRI scanners. Understanding group properties helps explain these applications and predict behaviour of unfamiliar elements in the same group.",
      },
    ],
    higherExamTips: [
      "Explain group trends using electron shells and attraction between nucleus and outer electrons.",
      "Predict whether a displacement reaction will occur by comparing halogen reactivity.",
      "Relate an element's position (group and period) to its electron configuration and likely ion charge.",
    ],
  }),

  createCurriculumContent({
    slug: "chemical-reactions",
    overview:
      "KS3 chemical reactions introduces pupils to describing reactions with word equations, identifying signs of chemical change, and understanding combustion, thermal decomposition, and oxidation. Pupils learn that new substances are formed with different properties and that mass is conserved. This topic aligns with National Curriculum requirements on chemical change and the reactivity of substances.",
    keyConcepts: [
      { term: "Chemical reaction", definition: "A process in which substances (reactants) are converted into new substances (products) with different properties; bonds are broken and reformed." },
      { term: "Word equation", definition: "A summary of a reaction using chemical names, e.g. magnesium + oxygen → magnesium oxide; reactants on the left, products on the right." },
      { term: "Combustion", definition: "A reaction in which a substance burns in oxygen, releasing energy as heat and light; often produces oxides (e.g. carbon dioxide and water from hydrocarbons)." },
      { term: "Thermal decomposition", definition: "Breaking down a compound into simpler substances using heat, e.g. copper carbonate → copper oxide + carbon dioxide." },
      { term: "Oxidation", definition: "A reaction in which a substance gains oxygen, e.g. magnesium oxidises to form magnesium oxide; also linked to loss of electrons at GCSE." },
      { term: "Reduction", definition: "A reaction in which a substance loses oxygen, e.g. copper oxide is reduced to copper when heated with carbon." },
      { term: "Conservation of mass", definition: "The total mass of reactants equals the total mass of products in a closed system; atoms are rearranged but not created or destroyed." },
      { term: "Irreversible change", definition: "A chemical change that cannot easily be undone, unlike physical changes such as melting or dissolving." },
    ],
    sections: [
      {
        heading: "Recognising chemical reactions",
        body: "Signs of a chemical reaction include colour change, temperature change (exothermic or endothermic), gas production (bubbles), and formation of a precipitate (solid from two solutions). Chemical reactions produce new substances — for example, iron rusting forms brown iron oxide, very different from shiny metallic iron. Physical changes (melting, boiling, dissolving) do not produce new substances.",
      },
      {
        heading: "Word equations and combustion",
        body: "Word equations show reactants → products. Combustion of hydrocarbons (fuels): methane + oxygen → carbon dioxide + water. Combustion of metals: magnesium + oxygen → magnesium oxide. A Bunsen burner flame demonstrates combustion of natural gas. Incomplete combustion produces carbon monoxide, a poisonous gas, instead of carbon dioxide.",
      },
      {
        heading: "Thermal decomposition and redox",
        body: "Heating copper carbonate decomposes it: copper carbonate → copper oxide + carbon dioxide (test with limewater). Heating copper oxide with carbon reduces it: copper oxide + carbon → copper + carbon dioxide. Oxidation is gain of oxygen; reduction is loss of oxygen (OIL RIG at GCSE: Oxidation Is Loss of electrons, Reduction Is Gain).",
      },
    ],
    examTips: [
      "Use the arrow → in equations (not =); reactants on left, products on right.",
      "Name the test for carbon dioxide: turns limewater milky/cloudy.",
      "Distinguish chemical change (new substance) from physical change (same substance, different state).",
    ],
    higherConcepts: [
      { term: "Precipitate", definition: "An insoluble solid formed when two solutions are mixed, e.g. lead iodide in the reaction of lead nitrate and potassium iodide." },
      { term: "Exothermic reaction", definition: "A reaction that transfers energy to the surroundings, causing a temperature rise, e.g. combustion, neutralisation." },
      { term: "Endothermic reaction", definition: "A reaction that takes in energy from the surroundings, causing a temperature fall, e.g. thermal decomposition of calcium carbonate." },
      { term: "Symbol equation", definition: "A equation using chemical formulae and balancing coefficients, e.g. 2Mg + O₂ → 2MgO." },
      { term: "State symbols", definition: "(s) solid, (l) liquid, (g) gas, (aq) aqueous — show physical states in symbol equations." },
    ],
    higherSections: [
      {
        heading: "Balancing symbol equations",
        body: "Symbol equations must be balanced so the same number of each type of atom appears on both sides. Coefficients (numbers in front) multiply entire formulae — never change subscripts. Example: Fe + Cl₂ → FeCl₃ needs balancing to 2Fe + 3Cl₂ → 2FeCl₃. Balancing reflects conservation of mass at the atomic level.",
      },
      {
        heading: "Everyday oxidation and corrosion",
        body: "Rusting is oxidation of iron in the presence of water and oxygen. Preventing rust: painting, galvanising (zinc coating), oiling, or using stainless steel alloys. Burning fossil fuels releases CO₂ contributing to climate change. Understanding oxidation helps explain why apples brown, why fires need oxygen, and why some metals tarnish.",
      },
    ],
    higherExamTips: [
      "Balance equations step by step — start with atoms that appear in only one compound on each side.",
      "Use state symbols in symbol equations when asked; they show the physical form of reactants and products.",
      "Explain rusting as a chemical reaction involving iron, water, and oxygen producing hydrated iron oxide.",
    ],
  }),

  createCurriculumContent({
    slug: "acids-alkalis",
    overview:
      "Acids and alkalis are encountered throughout KS3 chemistry through the pH scale, neutralisation reactions, and everyday examples. Pupils use indicators to classify substances, understand the products of acid-alkali reactions, and recognise acids and alkalis in the home and laboratory. This topic meets National Curriculum requirements on chemical reactivity and practical investigation.",
    keyConcepts: [
      { term: "Acid", definition: "A substance with pH below 7 that produces hydrogen ions (H⁺) in aqueous solution; examples include hydrochloric acid, sulfuric acid, and citric acid." },
      { term: "Alkali", definition: "A soluble base with pH above 7 that produces hydroxide ions (OH⁻) in aqueous solution; examples include sodium hydroxide and calcium hydroxide." },
      { term: "pH scale", definition: "A scale from 0–14 measuring acidity or alkalinity; pH 7 is neutral, below 7 is acidic, above 7 is alkaline; each unit is a factor of 10 in H⁺ concentration." },
      { term: "Neutralisation", definition: "The reaction between an acid and an alkali producing a salt and water: acid + alkali → salt + water." },
      { term: "Indicator", definition: "A substance that changes colour depending on pH, used to classify solutions as acidic, neutral, or alkaline." },
      { term: "Universal indicator", definition: "A mixture of indicators giving a continuous colour range across the pH scale, from red (pH 1) to purple (pH 14)." },
      { term: "Litmus", definition: "A dye that turns red in acid and blue in alkali; purple in neutral solution." },
      { term: "Neutral solution", definition: "A solution with pH 7, such as pure water, where H⁺ and OH⁻ concentrations are equal." },
    ],
    sections: [
      {
        heading: "The pH scale and indicators",
        body: "The pH scale measures how acidic or alkaline a solution is. Strong acids (pH 0–2) include battery acid; weak acids (pH 3–6) include vinegar and lemon juice. Strong alkalis (pH 12–14) include oven cleaner; weak alkalis (pH 8–11) include baking soda solution. Universal indicator gives a full colour range; litmus gives a simple acid/alkali test.",
      },
      {
        heading: "Neutralisation reactions",
        body: "When an acid reacts with an alkali, the H⁺ ions from the acid combine with OH⁻ ions from the alkali to form water. The remaining ions form a salt. Hydrochloric acid + sodium hydroxide → sodium chloride + water. The reaction is exothermic. Neutralisation is used to treat acid indigestion (antacid tablets), neutralise acidic soil, and treat industrial waste.",
      },
      {
        heading: "Acids and alkalis in everyday life",
        body: "Stomach acid (hydrochloric acid) aids digestion but excess causes indigestion. Bases in antacid tablets neutralise this acid. Acid rain (from sulfur dioxide and nitrogen oxides) damages buildings and lakes. Household acids: vinegar (ethanoic acid), lemon juice (citric acid). Household alkalis: bleach, soap, baking soda. Safe handling requires goggles and careful dilution.",
      },
    ],
    examTips: [
      "State the products of neutralisation: salt + water (not just 'neutral solution').",
      "Know indicator colours: litmus red in acid, blue in alkali; universal indicator full range.",
      "Give examples of acids and alkalis with approximate pH values.",
    ],
    higherConcepts: [
      { term: "Base", definition: "A substance that neutralises an acid; soluble bases are called alkalis. Insoluble bases include copper oxide and magnesium oxide." },
      { term: "Salt", definition: "An ionic compound formed when the H⁺ of an acid is replaced by a metal ion, e.g. sodium chloride, copper sulfate." },
      { term: "Strong vs weak acid", definition: "Strong acids fully ionise in water (HCl, H₂SO₄); weak acids partially ionise (ethanoic acid, carbonic acid)." },
      { term: "Titration", definition: "A method to find the concentration of an acid or alkali by adding one to the other until exactly neutralised, using an indicator." },
      { term: "Ionic equation", definition: "H⁺(aq) + OH⁻(aq) → H₂O(l) — the net ionic equation for any strong acid-strong alkali neutralisation." },
    ],
    higherSections: [
      {
        heading: "Acids reacting with metals and carbonates",
        body: "Acid + metal → salt + hydrogen (e.g. zinc + sulfuric acid → zinc sulfate + hydrogen; test hydrogen with a squeaky pop). Acid + carbonate → salt + water + carbon dioxide (test CO₂ with limewater). These reactions do not apply to all metals — copper does not react with dilute acids because it is below hydrogen in the reactivity series.",
      },
      {
        heading: "Titration and accurate neutralisation",
        body: "In a titration, a burette delivers alkali into acid (or vice versa) until neutralisation. A single indicator (phenolphthalein or methyl orange) shows the exact end point. The volume of alkali used, combined with known concentration, allows calculation of the unknown concentration. This quantitative approach is essential at GCSE.",
      },
    ],
    higherExamTips: [
      "Write word equations for acid + metal, acid + base, and acid + carbonate with correct products.",
      "Explain why acid rain forms and its effects on limestone buildings and aquatic ecosystems.",
      "Describe the titration procedure including reading the burette at eye level and using a white tile.",
    ],
  }),

  createCurriculumContent({
    slug: "metals",
    overview:
      "The metals topic at KS3 covers physical properties, the reactivity series, displacement reactions, and an introduction to extraction from ores. Pupils compare metals and non-metals, explain why some metals corrode, and understand how reactivity determines extraction methods. This aligns with National Curriculum content on materials and their properties.",
    keyConcepts: [
      { term: "Metal", definition: "An element that is typically shiny, malleable, ductile, and a good conductor of heat and electricity; found mainly on the left and centre of the periodic table." },
      { term: "Malleability", definition: "The ability of a metal to be hammered or rolled into thin sheets without breaking." },
      { term: "Ductility", definition: "The ability of a metal to be drawn into wires." },
      { term: "Reactivity series", definition: "An ordering of metals by reactivity, from most reactive (potassium, sodium, calcium) to least reactive (gold, platinum); also includes carbon and hydrogen." },
      { term: "Displacement reaction", definition: "A more reactive metal displaces a less reactive metal from its compound, e.g. iron + copper sulfate → iron sulfate + copper." },
      { term: "Corrosion", definition: "The gradual destruction of a metal by chemical reaction with its environment, e.g. rusting of iron." },
      { term: "Alloy", definition: "A mixture of a metal with one or more other elements (usually metals) designed to improve properties, e.g. steel (iron + carbon)." },
      { term: "Ore", definition: "A rock containing enough metal compound to make extraction economically worthwhile." },
    ],
    sections: [
      {
        heading: "Properties and uses of metals",
        body: "Metals conduct electricity (used in wires), conduct heat (cooking pans), are malleable (car body panels), and have high melting points. Exceptions exist: mercury is liquid at room temperature. Alloys often have better properties than pure metals — steel is harder than iron, brass (copper + zinc) is corrosion-resistant, and aluminium alloys are lightweight and strong for aircraft.",
      },
      {
        heading: "The reactivity series",
        body: "Potassium, sodium, and calcium react vigorously with cold water. Magnesium reacts slowly with cold water but rapidly when heated. Zinc and iron react with dilute acids producing hydrogen. Copper, silver, and gold are unreactive — found uncombined in the Earth's crust. The reactivity series can be deduced from displacement reactions and reaction with water/acids.",
      },
      {
        heading: "Metal extraction and corrosion",
        body: "Very reactive metals (e.g. aluminium) are extracted by electrolysis. Less reactive metals (e.g. iron) are extracted by reduction with carbon in a blast furnace. Unreactive metals occur native. Iron rusts when exposed to water and oxygen; prevention methods include painting, oiling, galvanising, and sacrificial protection with zinc blocks.",
      },
    ],
    examTips: [
      "Recall key reactivity order: K > Na > Ca > Mg > Al > (C) > Zn > Fe > (H) > Cu > Ag > Au.",
      "Predict displacement: a metal will only displace a less reactive metal from its compound.",
      "Link extraction method to reactivity — electrolysis for reactive metals, carbon reduction for less reactive.",
    ],
    higherConcepts: [
      { term: "Electrolysis", definition: "Using electricity to decompose a compound, used to extract aluminium from bauxite and to purify copper." },
      { term: "Blast furnace", definition: "A furnace where iron ore (haematite) is reduced with coke (carbon) at high temperature to produce molten iron." },
      { term: "Galvanising", definition: "Coating iron or steel with a layer of zinc to prevent rusting — zinc corrodes preferentially (sacrificial protection)." },
      { term: "Sacrificial protection", definition: "Attaching a more reactive metal (e.g. zinc or magnesium blocks) to iron so the reactive metal corrodes instead." },
      { term: "Native metal", definition: "A metal found uncombined in the Earth, e.g. gold, silver, and copper in some deposits." },
    ],
    higherSections: [
      {
        heading: "Extracting iron in the blast furnace",
        body: "Haematite (Fe₂O₃) is fed into the blast furnace with coke (carbon) and limestone. Coke burns to produce CO, which reduces iron oxide: Fe₂O₃ + 3CO → 2Fe + 3CO₂. Limestone removes impurities as slag. Molten iron is tapped off. Steel is made by removing some carbon and adding other elements for desired properties.",
      },
      {
        heading: "Aluminium extraction and recycling",
        body: "Aluminium is too reactive to be reduced by carbon. It is extracted from bauxite by electrolysis — a very energy-intensive process. Recycling aluminium saves ~95% of the energy needed for extraction. The reactivity series explains why aluminium was not isolated until the 19th century while copper has been used since ancient times.",
      },
    ],
    higherExamTips: [
      "Write word and symbol equations for displacement reactions and blast furnace reduction.",
      "Compare three rust prevention methods and explain the chemistry of galvanising.",
      "Justify why aluminium recycling is environmentally and economically important.",
    ],
  }),

  createCurriculumContent({
    slug: "energy-changes",
    overview:
      "Chemical reactions involve energy transfers between the system and surroundings. At KS3, pupils distinguish exothermic reactions (releasing energy, temperature rises) from endothermic reactions (absorbing energy, temperature falls) and relate these to everyday examples. This topic supports the National Curriculum strand on energy changes accompanying chemical reactions.",
    keyConcepts: [
      { term: "Exothermic reaction", definition: "A reaction that transfers thermal energy to the surroundings, causing the temperature to rise; e.g. combustion, neutralisation, respiration." },
      { term: "Endothermic reaction", definition: "A reaction that takes in thermal energy from the surroundings, causing the temperature to fall; e.g. thermal decomposition, photosynthesis." },
      { term: "Energy transfer", definition: "The movement of energy from one store to another; in chemistry, between chemical bonds and the surroundings as heat." },
      { term: "Temperature change", definition: "A practical indicator of energy transfer — exothermic reactions warm the surroundings, endothermic reactions cool them." },
      { term: "Bond breaking", definition: "Requires energy input — bonds must be broken before new ones can form during a reaction." },
      { term: "Bond making", definition: "Releases energy — when new bonds form in products, energy is transferred to the surroundings." },
      { term: "Thermal decomposition", definition: "An endothermic process — heating breaks bonds in compounds like calcium carbonate or copper carbonate." },
      { term: "Hand warmer", definition: "A device using exothermic oxidation of iron powder to release heat; reusable types use supersaturated solutions crystallising exothermically." },
    ],
    sections: [
      {
        heading: "Exothermic reactions",
        body: "Exothermic reactions release energy to the surroundings. Examples: burning fuels (combustion), neutralisation of acids and alkalis, adding water to calcium oxide (making lime mortar), and sodium hydroxide dissolving in water. In the lab, the temperature of the reaction mixture increases. Hand warmers and self-heating cans use controlled exothermic reactions.",
      },
      {
        heading: "Endothermic reactions",
        body: "Endothermic reactions absorb energy from the surroundings. Examples: thermal decomposition (heating copper carbonate), photosynthesis (plants absorb light energy), and ammonium nitrate dissolving in water (used in instant cold packs). The temperature of the reaction mixture decreases. These reactions require a continuous energy supply to proceed.",
      },
      {
        heading: "Energy in everyday life",
        body: "Respiration is exothermic — it releases energy for living processes. Cold packs used for sports injuries use endothermic dissolution of ammonium nitrate. Self-heating coffee cans use exothermic reaction between water and calcium oxide. Understanding energy changes helps explain why some reactions need heating and why others release heat dangerously.",
      },
    ],
    examTips: [
      "Classify reactions using temperature change: temperature up = exothermic, temperature down = endothermic.",
      "Give at least one specific example of each type with the reaction named.",
      "Do not confuse energy in chemistry with energy in physics — here it means thermal energy transfer in reactions.",
    ],
    higherConcepts: [
      { term: "Activation energy", definition: "The minimum energy needed for a reaction to start; even exothermic reactions may need initial heating to overcome this barrier." },
      { term: "Enthalpy change (ΔH)", definition: "The overall energy change of a reaction; negative ΔH is exothermic, positive ΔH is endothermic (GCSE terminology)." },
      { term: "Calorimetry", definition: "Measuring energy change by monitoring temperature change in a known mass of water using q = mcΔT." },
      { term: "Reversible reaction", definition: "A reaction that can proceed in both directions; the exothermic direction in one way is endothermic in reverse." },
      { term: "Energy level diagram", definition: "A diagram showing reactants and products at different energy levels; the difference shows whether a reaction is exothermic or endothermic." },
    ],
    higherSections: [
      {
        heading: "Bond energy and overall energy change",
        body: "If more energy is released making new bonds than is needed to break old bonds, the reaction is exothermic. If more energy is needed to break bonds than is released making new ones, the reaction is endothermic. This bond energy model explains why combustion is strongly exothermic (strong bonds in CO₂ and H₂O form) and why thermal decomposition is endothermic.",
      },
      {
        heading: "Measuring energy changes",
        body: "A simple calorimeter (polystyrene cup) reduces heat loss. Temperature change × mass × specific heat capacity gives energy transferred. Comparing results from different reactions allows ranking by energy release. At GCSE, energy level diagrams and ΔH calculations extend this KS3 understanding.",
      },
    ],
    higherExamTips: [
      "Draw energy level diagrams showing reactants, products, and activation energy for exothermic and endothermic reactions.",
      "Explain cold packs and hand warmers in terms of specific endothermic or exothermic processes.",
      "Use bond breaking (endothermic) vs bond making (exothermic) to explain the overall energy change.",
    ],
  }),

  createCurriculumContent({
    slug: "earth-resources",
    overview:
      "Earth resources covers the rock cycle, formation and use of fossil fuels, and the importance of sustainable resource management. KS3 pupils learn how rocks form and change, why fossil fuels are finite, and how recycling and renewable alternatives reduce environmental impact. This topic addresses National Curriculum requirements on Earth and atmospheric science.",
    keyConcepts: [
      { term: "Rock cycle", definition: "The continuous process by which rocks are formed, broken down, and transformed between igneous, sedimentary, and metamorphic types." },
      { term: "Igneous rock", definition: "Rock formed when molten magma or lava cools and solidifies, e.g. granite (slow cooling), basalt (fast cooling)." },
      { term: "Sedimentary rock", definition: "Rock formed from compressed layers of sediments (eroded rock fragments, shells, or organic matter), e.g. limestone, sandstone, shale." },
      { term: "Metamorphic rock", definition: "Rock formed when existing rock is changed by heat and pressure without melting, e.g. marble (from limestone), slate (from shale)." },
      { term: "Fossil fuel", definition: "A fuel formed from the remains of ancient organisms over millions of years — coal, crude oil, and natural gas; finite and non-renewable." },
      { term: "Renewable resource", definition: "A resource that can be replenished naturally within a human timescale, e.g. solar, wind, timber (if sustainably managed)." },
      { term: "Sustainability", definition: "Using resources to meet present needs without compromising future generations' ability to meet theirs." },
      { term: "Recycling", definition: "Processing used materials into new products, reducing demand for raw materials, energy use, and landfill waste." },
    ],
    sections: [
      {
        heading: "The rock cycle",
        body: "Igneous rocks form from cooling magma/lava. Weathering and erosion break rocks into sediments, which compress to form sedimentary rocks. Heat and pressure transform rocks into metamorphic types without melting. If rocks melt, magma forms and the cycle continues. The rock cycle operates over geological timescales — millions of years.",
      },
      {
        heading: "Fossil fuels and their use",
        body: "Coal formed from ancient forest remains compressed over ~300 million years. Oil and natural gas formed from marine microorganisms. Burning fossil fuels releases energy but also CO₂, contributing to climate change. Fossil fuels are finite — they cannot be replaced on human timescales. The UK is transitioning to renewable energy sources.",
      },
      {
        heading: "Sustainability and recycling",
        body: "Recycling metals (aluminium, steel) saves energy and reduces mining. Recycling paper and plastics reduces landfill and pollution. Renewable energy (solar, wind, hydroelectric, geothermal) provides alternatives to fossil fuels. Life cycle assessment evaluates the total environmental impact of a product from raw material to disposal.",
      },
    ],
    examTips: [
      "Describe the rock cycle using all three rock types and the processes linking them (weathering, heat/pressure, melting).",
      "State why fossil fuels are non-renewable and link combustion to increased atmospheric CO₂.",
      "Give specific examples of sustainable practices: recycling aluminium, wind turbines, sustainable forestry.",
    ],
    higherConcepts: [
      { term: "Carbon footprint", definition: "The total greenhouse gas emissions caused by an individual, organisation, or product, usually expressed as CO₂ equivalent." },
      { term: "Life cycle assessment (LCA)", definition: "Evaluating environmental impact at every stage: extraction, manufacture, use, and disposal." },
      { term: "Biofuel", definition: "Fuel derived from biomass (e.g. ethanol from fermented crops); renewable but may compete with food production." },
      { term: "Carbon capture", definition: "Technology to trap CO₂ from power station emissions before it enters the atmosphere." },
      { term: "Quarrying", definition: "Extracting rock for construction; has environmental impacts including habitat loss, dust, and noise." },
    ],
    higherSections: [
      {
        heading: "Formation of fossil fuels in detail",
        body: "Coal forms in swamp environments where plant material is buried before it fully decays, excluding oxygen. Over millions of years, heat and pressure convert peat → lignite → bituminous coal → anthracite. Oil and gas form in marine sediments where organic matter is trapped and heated. Both processes require specific geological conditions and vast timescales.",
      },
      {
        heading: "Balancing energy needs and environment",
        body: "The UK Climate Change Act commits to net zero emissions. Challenges include energy security, cost, and infrastructure. Nuclear power provides low-carbon baseload but produces radioactive waste. Wind and solar are intermittent — storage and grid management are needed. Sustainable development balances economic growth, social equity, and environmental protection.",
      },
    ],
    higherExamTips: [
      "Compare advantages and disadvantages of a specific renewable energy source (e.g. wind: renewable, no CO₂, but intermittent and visual impact).",
      "Explain the rock cycle as a system with inputs (magma) and outputs (sediments) over geological time.",
      "Evaluate recycling vs landfill using energy savings and environmental impact arguments.",
    ],
  }),

  createCurriculumContent({
    slug: "forces",
    overview:
      "Forces are pushes and pulls that can change the shape, speed, or direction of objects. At KS3, pupils identify contact and non-contact forces, draw and interpret force diagrams, and calculate resultant forces to predict motion. This topic covers National Curriculum physics requirements on forces and their effects on motion and deformation.",
    keyConcepts: [
      { term: "Force", definition: "A push or pull on an object, measured in newtons (N) using a force meter (newton meter)." },
      { term: "Contact force", definition: "A force that acts when objects are physically touching, e.g. friction, air resistance, tension, normal contact force." },
      { term: "Non-contact force", definition: "A force that acts at a distance without touching, e.g. gravity, magnetic force, electrostatic force." },
      { term: "Weight", definition: "The gravitational force on an object; weight = mass × gravitational field strength (W = mg), measured in newtons." },
      { term: "Resultant force", definition: "The single force that has the same effect as all forces acting on an object combined; found by adding forces in the same direction and subtracting opposing ones." },
      { term: "Balanced forces", definition: "When equal and opposite forces act on an object, the resultant force is zero and the object stays at rest or constant velocity." },
      { term: "Unbalanced forces", definition: "When forces are not equal, the resultant force causes acceleration in the direction of the larger force." },
      { term: "Friction", definition: "A contact force that opposes motion between surfaces; it acts parallel to the surface and in the opposite direction to movement." },
    ],
    sections: [
      {
        heading: "Types of forces",
        body: "Gravity pulls objects towards the Earth (weight). Friction opposes sliding motion. Air resistance (drag) opposes motion through air. Tension acts along ropes and strings. Normal contact force supports objects on surfaces. Magnetic and electrostatic forces act at a distance. Identifying forces correctly is the first step in solving force problems.",
      },
      {
        heading: "Force diagrams and resultants",
        body: "Forces are drawn as arrows: length represents magnitude, direction shows which way the force acts. On a free body diagram, all forces on one object are shown. Resultant force = sum of forces in one direction minus sum in the opposite. A 10 N push right and 4 N friction left gives resultant 6 N right, so the object accelerates right.",
      },
      {
        heading: "Forces and deformation",
        body: "Forces can change an object's shape (stretch, compress, bend). Elastic deformation returns to original shape when the force is removed (e.g. stretching a spring within its limit). Plastic deformation is permanent (e.g. bending a paperclip). Hooke's law (F = kx) applies to elastic stretching and is explored further at GCSE.",
      },
    ],
    examTips: [
      "Always state the direction when describing forces — forces are vectors, not just numbers.",
      "Draw force arrows from the point of application (or centre of object) with sensible relative lengths.",
      "Distinguish mass (kg, scalar) from weight (N, force due to gravity).",
    ],
    higherConcepts: [
      { term: "Gravitational field strength (g)", definition: "The force per unit mass due to gravity; g ≈ 9.8 N/kg on Earth; weight = mass × g." },
      { term: "Newton's First Law", definition: "An object remains at rest or constant velocity unless acted on by a resultant force." },
      { term: "Newton's Second Law", definition: "Resultant force = mass × acceleration (F = ma); unbalanced force causes acceleration." },
      { term: "Terminal velocity", definition: "The maximum speed when air resistance equals weight — resultant force is zero and acceleration stops." },
      { term: "Free body diagram", definition: "A diagram showing all forces acting on a single object as arrows, essential for calculating resultants." },
    ],
    higherSections: [
      {
        heading: "Connecting forces to motion",
        body: "Newton's First Law explains why objects need a resultant force to change speed or direction. Newton's Second Law quantifies this: a 2 kg object with 10 N resultant force accelerates at 5 m/s². When a skydiver reaches terminal velocity, weight equals air resistance — forces balance and speed is constant. This links directly to the motion topic.",
      },
      {
        heading: "Friction and efficiency",
        body: "Friction converts kinetic energy to thermal energy — it is useful for walking and braking but wasteful in engines. Lubricants reduce friction. Streamlining reduces air resistance. In force problems, friction often opposes motion and must be subtracted from applied forces to find the resultant.",
      },
    ],
    higherExamTips: [
      "Calculate resultant force and use F = ma to find acceleration when given mass.",
      "Explain terminal velocity as the point where weight equals air resistance with no resultant force.",
      "Draw and label complete free body diagrams before calculating — missing a force causes errors.",
    ],
  }),

  createCurriculumContent({
    slug: "motion",
    overview:
      "Motion at KS3 covers speed, distance-time graphs, and acceleration as the rate of change of velocity. Pupils calculate speed using distance and time, interpret graphs to describe journeys, and understand how forces cause acceleration. This topic fulfils National Curriculum requirements on describing motion and the relationship between force and acceleration.",
    keyConcepts: [
      { term: "Speed", definition: "The distance travelled per unit time; speed = distance ÷ time, measured in m/s or km/h." },
      { term: "Distance", definition: "How far an object has moved along a path, measured in metres (m) or kilometres (km); it is a scalar quantity." },
      { term: "Distance-time graph", definition: "A graph with time on the x-axis and distance on the y-axis; gradient equals speed." },
      { term: "Velocity", definition: "Speed in a stated direction; a vector quantity — e.g. 10 m/s north." },
      { term: "Acceleration", definition: "The rate of change of velocity; acceleration = change in velocity ÷ time, measured in m/s²." },
      { term: "Constant speed", definition: "Motion at unchanging speed — shown as a straight diagonal line on a distance-time graph." },
      { term: "Stationary", definition: "Not moving — shown as a horizontal line (zero gradient) on a distance-time graph." },
      { term: "Average speed", definition: "Total distance travelled divided by total time taken for a journey, including stops and changes in speed." },
    ],
    sections: [
      {
        heading: "Calculating speed",
        body: "Speed = distance ÷ time. A car travelling 150 km in 2 hours has average speed 75 km/h. Convert units carefully: 1 m/s = 3.6 km/h. For uniform motion, speed is constant; most real journeys involve varying speed, so average speed is used. Use the formula triangle: cover the quantity you want to find.",
      },
      {
        heading: "Distance-time graphs",
        body: "A horizontal line means stationary (no distance change). A straight diagonal line means constant speed — steeper gradient = faster speed. A curved line means changing speed (acceleration or deceleration). To calculate speed from a graph, find gradient = rise ÷ run = Δdistance ÷ Δtime.",
      },
      {
        heading: "Acceleration and changing motion",
        body: "Acceleration occurs when velocity changes — speeding up, slowing down, or changing direction. Deceleration (negative acceleration) is slowing down. A car going from 0 to 20 m/s in 4 s has acceleration 5 m/s². Unbalanced forces cause acceleration; when forces balance, speed is constant (Newton's First Law).",
      },
    ],
    examTips: [
      "Show full working for speed calculations with units in the final answer.",
      "Read distance-time graphs carefully: gradient = speed, not the value of the line.",
      "Convert km/h to m/s by dividing by 3.6 when needed for calculations.",
    ],
    higherConcepts: [
      { term: "Velocity-time graph", definition: "A graph where gradient equals acceleration and area under the line equals distance travelled." },
      { term: "Uniform acceleration", definition: "Constant acceleration — velocity changes by equal amounts in equal time intervals." },
      { term: "Equation of motion", definition: "v = u + at relates final velocity, initial velocity, acceleration, and time (GCSE)." },
      { term: "Scalar vs vector", definition: "Scalars have magnitude only (speed, distance); vectors have magnitude and direction (velocity, displacement, force)." },
      { term: "Displacement", definition: "Distance travelled in a straight line from start to finish in a stated direction — a vector quantity." },
    ],
    higherSections: [
      {
        heading: "Velocity-time graphs",
        body: "Horizontal line = constant velocity (zero acceleration). Straight diagonal slope = constant acceleration. Area under the graph gives distance travelled. A negative slope shows deceleration. Combining distance-time and velocity-time graph skills prepares pupils for GCSE equations: v² = u² + 2as and s = ut + ½at².",
      },
      {
        heading: "Motion and force revisited",
        body: "F = ma links motion to forces: doubling the resultant force doubles acceleration for fixed mass. Increasing mass reduces acceleration for the same force — this is why heavy lorries accelerate slowly. Terminal velocity is reached when acceleration drops to zero as air resistance increases with speed.",
      },
    ],
    higherExamTips: [
      "Calculate acceleration from velocity-time graph gradient or from change in velocity ÷ time.",
      "Find distance travelled as area under a velocity-time graph (triangle or trapezium).",
      "Explain why a curved distance-time graph indicates non-uniform speed.",
    ],
  }),

  createCurriculumContent({
    slug: "pressure",
    overview:
      "Pressure describes how force is spread over an area and explains phenomena from sharp knives to atmospheric pressure and hydraulic systems. KS3 pupils calculate pressure, understand how pressure changes in fluids with depth, and apply the particle model to gas pressure. This topic addresses National Curriculum physics on pressure in fluids and on surfaces.",
    keyConcepts: [
      { term: "Pressure", definition: "Force per unit area; pressure = force ÷ area, measured in pascals (Pa) or N/m²." },
      { term: "Pascal (Pa)", definition: "The SI unit of pressure; 1 Pa = 1 N/m² — one newton of force per square metre of area." },
      { term: "Atmospheric pressure", definition: "The pressure exerted by the weight of air in the atmosphere; approximately 101,000 Pa (101 kPa) at sea level." },
      { term: "Pressure in liquids", definition: "Pressure increases with depth because of the weight of liquid above; p = h × ρ × g at GCSE, but at KS3 pupils know it increases with depth." },
      { term: "Hydraulic system", definition: "A system using liquid pressure to transmit force, e.g. car brakes and car jacks — small force on small piston creates large force on large piston." },
      { term: "Barometer", definition: "An instrument measuring atmospheric pressure; a mercury barometer uses the height of a mercury column." },
      { term: "Upthrust", definition: "The upward force exerted by a fluid on a submerged object; if upthrust equals weight, the object floats." },
      { term: "Particle model of gas pressure", definition: "Gas pressure is caused by particles colliding with container walls; more frequent or harder collisions increase pressure." },
    ],
    sections: [
      {
        heading: "Pressure on surfaces",
        body: "The same force produces different pressures depending on area. A sharp knife has a small contact area, so high pressure cuts easily. A snowshoe spreads weight over a large area, reducing pressure so you do not sink. Pressure = force ÷ area — doubling the area halves the pressure for the same force.",
      },
      {
        heading: "Pressure in liquids",
        body: "Liquid pressure acts in all directions and increases with depth. Dams are thicker at the bottom to withstand greater pressure. Submarines and diving require protection against high pressure. Hydraulic systems use incompressible liquid to multiply force — pressing a small piston transfers pressure throughout the liquid to a larger piston.",
      },
      {
        heading: "Atmospheric pressure",
        body: "Air has mass and is pulled by gravity, creating pressure on everything at Earth's surface. A vacuum pump removes air — pressure inside becomes lower than outside, and external air pressure can crush a can. Atmospheric pressure decreases with altitude (less air above). It also affects boiling point — water boils at lower temperature at high altitude.",
      },
    ],
    examTips: [
      "Use pressure = force ÷ area with correct units (Pa or N/m²).",
      "Explain everyday examples (sharp knives, skis, high heels) in terms of force and area.",
      "State that liquid pressure increases with depth and acts in all directions.",
    ],
    higherConcepts: [
      { term: "Pascal's principle", definition: "Pressure applied to a confined fluid is transmitted equally throughout the fluid — basis of hydraulic systems." },
      { term: "Density (ρ)", definition: "Mass per unit volume; denser fluids exert more pressure at the same depth (p = hρg)." },
      { term: "Boyle's law", definition: "For a fixed mass of gas at constant temperature, pressure × volume is constant — compressing gas increases pressure." },
      { term: "Vacuum", definition: "A space with no matter; pressure is effectively zero, so atmospheric pressure can crush evacuated containers." },
      { term: "Floating and sinking", definition: "An object floats if its average density is less than the fluid; upthrust equals weight of fluid displaced (Archimedes' principle at GCSE)." },
    ],
    higherSections: [
      {
        heading: "Pressure and the particle model",
        body: "In a gas, particles move randomly and collide with walls. Faster particles (higher temperature) or more particles in the same volume (compression) increase collision rate and force, raising pressure. This explains why pumping a tyre increases pressure and why aerosol cans warn against heating (pressure rise can cause explosion).",
      },
      {
        heading: "Hydraulic calculations",
        body: "In a hydraulic system, pressure is the same throughout the liquid. Force on large piston = pressure × large area. If the small piston has area 0.01 m² and force 100 N, pressure = 10,000 Pa. A large piston of area 0.05 m² experiences force 500 N — a fivefold force multiplication.",
      },
    ],
    higherExamTips: [
      "Calculate pressure then use it to find force on a second piston in hydraulic problems.",
      "Explain crushing can demonstrations: heating removes air; cooling reduces internal pressure below atmospheric.",
      "Link gas pressure to particle speed and collision frequency using the particle model.",
    ],
  }),

  createCurriculumContent({
    slug: "energy",
    overview:
      "Energy in KS3 physics focuses on energy stores, transfers, and the principle of conservation of energy. Pupils identify stores (kinetic, gravitational, elastic, thermal, chemical) and pathways of transfer (mechanical, electrical, heating), and calculate efficiency. This topic aligns with National Curriculum requirements on energy changes and conservation.",
    keyConcepts: [
      { term: "Energy store", definition: "A way energy is stored in a system — kinetic, gravitational, elastic, thermal, chemical, nuclear, magnetic, or electrostatic." },
      { term: "Energy transfer", definition: "The movement of energy from one store to another by a pathway such as heating, electrical, mechanical, or radiation." },
      { term: "Kinetic energy store", definition: "Energy stored in a moving object; increases with mass and speed." },
      { term: "Gravitational potential energy store", definition: "Energy stored due to an object's height in a gravitational field; increases with mass and height." },
      { term: "Conservation of energy", definition: "Energy cannot be created or destroyed; the total energy of a closed system remains constant — it is transferred between stores." },
      { term: "Efficiency", definition: "The proportion of input energy transferred usefully; efficiency = useful output ÷ total input, often expressed as a percentage." },
      { term: "Wasted energy", definition: "Energy that is not transferred usefully, usually dissipated to the thermal store of surroundings (often due to friction or resistance)." },
      { term: "Thermal energy store", definition: "Energy stored due to the temperature of an object — hot objects have more energy in their thermal store." },
    ],
    sections: [
      {
        heading: "Energy stores and transfers",
        body: "A falling object transfers energy from gravitational potential to kinetic store. A stretched catapult transfers chemical energy (food) to elastic potential, then to kinetic of the projectile. An electric kettle transfers electrical energy to thermal energy of water. Identifying stores before and after an event is key to describing energy changes.",
      },
      {
        heading: "Conservation and dissipation",
        body: "Total energy before equals total energy after in a closed system. In practice, some energy always becomes spread out as thermal energy in the surroundings — this is wasted energy. A light bulb converts electrical energy to light (useful) and heat (wasted). Sankey diagrams show energy input, useful output, and waste proportionally.",
      },
      {
        heading: "Efficiency and improving devices",
        body: "Efficiency = (useful energy output ÷ total energy input) × 100%. No device is 100% efficient except heaters. Lubrication reduces friction waste; insulation reduces heat loss; LED bulbs are more efficient than filament bulbs. Understanding efficiency helps evaluate environmental and economic costs of energy use.",
      },
    ],
    examTips: [
      "Use correct store names — 'kinetic energy store' not just 'movement energy'.",
      "State that wasted energy goes to the thermal store of surroundings (dissipated).",
      "Calculate efficiency as a decimal or percentage and show the formula used.",
    ],
    higherConcepts: [
      { term: "Specific heat capacity", definition: "The energy needed to raise 1 kg of a substance by 1 °C; different materials require different amounts (GCSE)." },
      { term: "Power", definition: "The rate of energy transfer; power = energy ÷ time, measured in watts (W); 1 W = 1 J/s." },
      { term: "Work done", definition: "Energy transferred by a force moving through a distance; W = F × d — links forces and energy." },
      { term: "Renewable vs non-renewable energy", definition: "Renewable sources (solar, wind) are replenished; non-renewable (fossil fuels, nuclear fuel) are finite." },
      { term: "Sankey diagram", definition: "A visual representation of energy transfers where arrow width is proportional to energy amount." },
    ],
    higherSections: [
      {
        heading: "Energy and power calculations",
        body: "Power tells you how quickly energy is transferred. A 2000 W kettle transfers 2000 J every second. Energy = power × time (E = Pt). Gravitational potential energy gained = m × g × h. These calculations connect the energy topic to motion and forces and prepare for GCSE quantitative work.",
      },
      {
        heading: "Reducing energy waste",
        body: "Loft insulation reduces heating costs by slowing thermal transfer. Regenerative braking in electric vehicles recovers kinetic energy. Combined heat and power (CHP) systems use waste heat from electricity generation. National Grid strategies include smart meters and off-peak tariffs to manage demand.",
      },
    ],
    higherExamTips: [
      "Draw Sankey diagrams with correct proportional arrow widths for input, useful output, and waste.",
      "Calculate power and energy using E = Pt with unit conversions (kW to W, hours to seconds).",
      "Explain energy changes in a chosen device naming specific stores and transfer pathways.",
    ],
  }),

  createCurriculumContent({
    slug: "electricity",
    overview:
      "Electricity at KS3 introduces current, voltage, and resistance in circuits, and how components behave in series and parallel arrangements. Pupils draw circuit diagrams using standard symbols, use Ohm's law, and understand how current and voltage behave differently in series and parallel circuits. This topic meets National Curriculum requirements on electrical circuits.",
    keyConcepts: [
      { term: "Electric current", definition: "The flow of electric charge through a circuit, measured in amperes (A) with an ammeter connected in series." },
      { term: "Potential difference (voltage)", definition: "The energy transferred per unit charge between two points, measured in volts (V) with a voltmeter connected in parallel." },
      { term: "Resistance", definition: "Opposition to current flow in a component, measured in ohms (Ω); higher resistance means less current for the same voltage." },
      { term: "Ohm's law", definition: "The relationship V = I × R — potential difference = current × resistance, for components at constant temperature." },
      { term: "Series circuit", definition: "Components connected in a single loop; current is the same everywhere; voltage is shared between components." },
      { term: "Parallel circuit", definition: "Components on separate branches; voltage is the same across each branch; current is shared between branches." },
      { term: "Conductor", definition: "A material that allows electric current to flow easily, e.g. copper wire; metals are good conductors." },
      { term: "Insulator", definition: "A material that does not allow current to flow easily, e.g. plastic, rubber, glass — used for cable coating and safety." },
    ],
    sections: [
      {
        heading: "Current and voltage",
        body: "Current is the rate of flow of charge — like water flow in a pipe. Voltage (potential difference) is what 'pushes' current around the circuit, provided by the cell or battery. A voltmeter measures voltage across a component; an ammeter measures current through it. Conventional current flows from positive to negative terminal.",
      },
      {
        heading: "Series and parallel circuits",
        body: "In series: one path for current; if one component breaks, the circuit is open and all stop working; voltage adds up across components; current is equal everywhere. In parallel: multiple paths; if one branch breaks, others continue; voltage is equal across branches; total current equals sum of branch currents. Household wiring is parallel so appliances work independently.",
      },
      {
        heading: "Resistance and Ohm's law",
        body: "Resistance depends on material, length, thickness, and temperature. Thin, long wires have more resistance. V = IR allows calculation: a 6 V battery across a 3 Ω resistor gives current 2 A. Filament bulbs get hotter when current flows, increasing resistance. Variable resistors (rheostats) control current in circuits.",
      },
    ],
    examTips: [
      "Place ammeters in series and voltmeters in parallel — this is frequently tested.",
      "Use V = IR with correct units: V in volts, I in amps, R in ohms.",
      "Compare series and parallel in terms of current, voltage, and what happens if one component fails.",
    ],
    higherConcepts: [
      { term: "Charge (Q)", definition: "Measured in coulombs (C); Q = I × t — current is rate of flow of charge." },
      { term: "LED", definition: "Light-emitting diode — allows current in one direction only; energy-efficient light source." },
      { term: "LDR", definition: "Light-dependent resistor — resistance decreases as light intensity increases; used in automatic lights." },
      { term: "Thermistor", definition: "A resistor whose resistance changes with temperature; NTC thermistors decrease resistance when hot." },
      { term: "Power in circuits", definition: "P = IV = I²R = V²/R — electrical power in watts." },
    ],
    higherSections: [
      {
        heading: "Circuit calculations",
        body: "In series, R_total = R₁ + R₂ + ... . In parallel, 1/R_total = 1/R₁ + 1/R₂ + ... . Combined with V = IR, pupils can calculate current and voltage at each point. Energy transferred = VIt. Fuses and circuit breakers protect against excessive current from short circuits or overload.",
      },
      {
        heading: "Mains electricity and safety",
        body: "UK mains supply is 230 V alternating current (a.c.), 50 Hz. Plugs have live (brown), neutral (blue), and earth (green/yellow) wires. The earth wire prevents shock if the appliance casing becomes live. Fuses and RCDs (residual current devices) cut off supply if current is abnormal. Never mix water and mains electricity.",
      },
    ],
    higherExamTips: [
      "Calculate total resistance in series and parallel circuits before finding current.",
      "Explain why the earth wire and fuse together protect users from electric shock.",
      "Describe how an LDR or thermistor circuit responds to changing conditions.",
    ],
  }),

  createCurriculumContent({
    slug: "magnetism",
    overview:
      "Magnetism at KS3 covers permanent magnets, magnetic fields, electromagnets, and the motor effect. Pupils plot field lines, understand that like poles repel and unlike attract, and investigate how electric current creates magnetism. This topic supports National Curriculum physics on magnetism and electromagnetism as preparation for GCSE.",
    keyConcepts: [
      { term: "Magnetic field", definition: "The region around a magnet where magnetic force acts; represented by field lines from north to south pole." },
      { term: "Magnetic pole", definition: "The ends of a magnet where force is strongest — north-seeking (N) and south-seeking (S) poles." },
      { term: "Electromagnet", definition: "A magnet created by passing electric current through a coil of wire wrapped around an iron core; can be switched on and off." },
      { term: "Solenoid", definition: "A coil of wire that produces a magnetic field when current flows; the field is similar to a bar magnet." },
      { term: "Motor effect", definition: "A force on a current-carrying wire in a magnetic field; the basis of electric motors." },
      { term: "Compass", definition: "A small magnet that aligns with Earth's magnetic field, pointing approximately north." },
      { term: "Magnetic material", definition: "A material attracted to magnets, e.g. iron, steel, nickel, cobalt; non-magnetic materials like copper and aluminium are not attracted." },
      { term: "Field line pattern", definition: "Lines show field direction (N to S outside a magnet) and density indicates field strength — closer lines = stronger field." },
    ],
    sections: [
      {
        heading: "Permanent magnets and fields",
        body: "Magnets have north and south poles. Like poles repel; unlike poles attract. Magnetic field lines run from north to south outside the magnet, forming closed loops. The field is strongest at the poles. A compass needle is a small magnet aligning with Earth's magnetic field. Magnetic materials (iron, steel) can be induced to become temporary magnets.",
      },
      {
        heading: "Electromagnets",
        body: "When current flows through a wire, a magnetic field forms around it. Coiling the wire into a solenoid concentrates the field. Adding an iron core makes a strong electromagnet. Strength increases with more turns, more current, or an iron core. Electromagnets are used in scrapyard cranes, doorbells, relays, and MRI scanners.",
      },
      {
        heading: "The motor effect",
        body: "When a current-carrying wire is placed in a magnetic field, it experiences a force (Fleming's left-hand rule at GCSE). Reversing current or field direction reverses the force. This effect drives electric motors: current in a coil in a magnetic field makes the coil rotate. Loudspeakers and electric motors use this principle.",
      },
    ],
    examTips: [
      "Draw field lines with arrows from N to S outside the magnet; lines never cross.",
      "State three ways to increase electromagnet strength: more turns, more current, iron core.",
      "Distinguish permanent magnets (always magnetic) from electromagnets (only when current flows).",
    ],
    higherConcepts: [
      { term: "Fleming's left-hand rule", definition: "Thumb = force (motion), first finger = field (N to S), second finger = current — predicts force direction on a wire." },
      { term: "Electromagnetic induction", definition: "Generating voltage by moving a conductor in a magnetic field or changing the field — basis of generators (GCSE)." },
      { term: "Domain theory", definition: "Magnetism in materials explained by aligned magnetic domains; hammering or heating randomises domains and demagnetises." },
      { term: "Earth's magnetic field", definition: "Caused by movement of molten iron in the outer core; protects Earth from solar radiation." },
      { term: "Electric motor", definition: "Device converting electrical energy to kinetic energy using the motor effect on a rotating coil in a magnetic field." },
    ],
    higherSections: [
      {
        heading: "Building and testing electromagnets",
        body: "Investigations vary number of coils, current (using rheostat), and core material. More turns and current increase field strength until saturation of the iron core. Electromagnets can pick up and release objects — advantage over permanent magnets in industrial applications. Safety: large currents cause heating — short bursts prevent overheating.",
      },
      {
        heading: "From motors to generators",
        body: "A motor uses current in a field to produce force and rotation. A generator reverses this: rotating a coil in a field induces current (electromagnetic induction). Dynamos on bicycles, power station generators, and microphones all use induction. This symmetry between motors and generators is a key GCSE concept.",
      },
    ],
    higherExamTips: [
      "Apply Fleming's left-hand rule to predict force direction on a current-carrying wire.",
      "Explain how a simple d.c. motor works: split-ring commutator reverses current every half turn.",
      "Compare permanent magnets and electromagnets for a specific application (e.g. scrapyard crane).",
    ],
  }),

  createCurriculumContent({
    slug: "waves",
    overview:
      "Waves transfer energy without transferring matter. At KS3, pupils describe wave properties (amplitude, wavelength, frequency), distinguish transverse and longitudinal waves, and introduce the electromagnetic spectrum. This topic addresses National Curriculum requirements on waves and their applications in communication and technology.",
    keyConcepts: [
      { term: "Wave", definition: "An oscillation or disturbance that transfers energy from one point to another without transferring matter." },
      { term: "Amplitude", definition: "The maximum displacement of a point on a wave from its rest position; related to the energy carried — larger amplitude = more energy." },
      { term: "Wavelength (λ)", definition: "The distance from one point on a wave to the same point on the next wave, e.g. crest to crest, measured in metres." },
      { term: "Frequency (f)", definition: "The number of complete waves passing a point per second, measured in hertz (Hz)." },
      { term: "Transverse wave", definition: "A wave where oscillations are perpendicular to the direction of energy transfer, e.g. water waves, light, and all EM waves." },
      { term: "Longitudinal wave", definition: "A wave where oscillations are parallel to the direction of energy transfer, e.g. sound and seismic P-waves; has compressions and rarefactions." },
      { term: "Electromagnetic spectrum", definition: "The full range of electromagnetic waves ordered by frequency/wavelength: radio, microwave, infrared, visible, ultraviolet, X-ray, gamma." },
      { term: "Wave speed", definition: "The speed at which energy is transferred; wave speed = frequency × wavelength (v = fλ)." },
    ],
    sections: [
      {
        heading: "Properties of waves",
        body: "All waves have amplitude, wavelength, and frequency. High frequency means more waves per second. The wave equation v = fλ links speed, frequency, and wavelength. Ripples in a tank and ropes can demonstrate wave properties. Period (T) is the time for one complete wave: T = 1/f.",
      },
      {
        heading: "Transverse and longitudinal waves",
        body: "In transverse waves, particles move up and down while energy travels horizontally (e.g. shaking a rope). In longitudinal waves, particles compress and spread along the direction of travel (e.g. a slinky pushed and pulled). Sound is longitudinal; light and water waves are transverse.",
      },
      {
        heading: "The electromagnetic spectrum",
        body: "All EM waves travel at 300,000 km/s in a vacuum and transfer energy. Radio waves (longest wavelength) for communication; microwaves for cooking and satellites; infrared for heating and thermal imaging; visible light for vision; ultraviolet causes sunburn; X-rays for medical imaging; gamma rays for sterilisation and cancer treatment. Higher frequency = more energy per photon.",
      },
    ],
    examTips: [
      "Use v = fλ with consistent units — wavelength in metres, frequency in hertz, speed in m/s.",
      "Label amplitude and wavelength correctly on a diagram — amplitude is height, wavelength is crest to crest.",
      "List EM spectrum regions in order with one use for each.",
    ],
    higherConcepts: [
      { term: "Period (T)", definition: "Time for one complete wave cycle; T = 1/f." },
      { term: "Reflection and refraction of waves", definition: "Waves bounce off boundaries (reflection) or change speed and direction at media boundaries (refraction)." },
      { term: "Ionising radiation", definition: "High-frequency EM waves (UV, X-rays, gamma) carry enough energy to remove electrons from atoms — harmful to living tissue." },
      { term: "Doppler effect", definition: "Change in observed frequency when source and observer move relative to each other, e.g. ambulance siren pitch." },
      { term: "Medium", definition: "The material through which a wave travels; EM waves need no medium, sound waves require one." },
    ],
    higherSections: [
      {
        heading: "Wave behaviour at boundaries",
        body: "When waves hit a barrier they reflect — angle of incidence equals angle of reflection. When waves enter a new medium they may refract (change direction due to speed change) and partially reflect. Diffraction is spreading when waves pass through a gap or around an edge — most noticeable when gap size ≈ wavelength.",
      },
      {
        heading: "Uses and dangers of EM radiation",
        body: "Microwaves are absorbed by water molecules, heating food. Infrared is used in TV remote controls. UV helps vitamin D production but causes skin cancer. X-rays pass through soft tissue but are absorbed by bone. Gamma rays kill bacteria in food sterilisation. Risk increases with exposure time and frequency — ionising radiation requires shielding.",
      },
    ],
    higherExamTips: [
      "Rearrange v = fλ to find any one quantity; check units carefully.",
      "Explain why microwaves are suitable for cooking (absorbed by water in food) but radio waves pass through.",
      "Compare transverse and longitudinal waves with diagrams showing particle movement direction.",
    ],
  }),

  createCurriculumContent({
    slug: "light",
    overview:
      "Light at KS3 covers reflection, refraction, the formation of images by lenses, and the colour of objects. Pupils use ray diagrams to show light paths, apply the law of reflection, and explain how lenses converge or diverge light. This topic fulfils National Curriculum requirements on light waves and optical phenomena.",
    keyConcepts: [
      { term: "Reflection", definition: "The bouncing of light off a surface; the angle of incidence equals the angle of reflection, measured from the normal." },
      { term: "Normal", definition: "An imaginary line perpendicular to a surface at the point where light hits; angles of incidence and reflection are measured from this line." },
      { term: "Refraction", definition: "The change in direction of light when it passes from one medium to another due to a change in speed; light bends towards the normal entering denser media." },
      { term: "Converging lens", definition: "A convex lens that is thicker in the middle and brings parallel rays together at the principal focus; used in magnifying glasses and cameras." },
      { term: "Diverging lens", definition: "A concave lens that is thinner in the middle and spreads parallel rays apart; used in some glasses for short-sightedness." },
      { term: "Spectrum", definition: "White light split into its component colours (red, orange, yellow, green, blue, indigo, violet) by a prism — dispersion." },
      { term: "Colour of objects", definition: "Objects appear coloured because they absorb some wavelengths and reflect others — a red object reflects red and absorbs other colours." },
      { term: "Transparent, translucent, opaque", definition: "Transparent materials let all light through; translucent scatter light (frosted glass); opaque block all light." },
    ],
    sections: [
      {
        heading: "Reflection and mirrors",
        body: "Light travels in straight lines (rays). When it hits a smooth surface like a mirror, it reflects. Angle of incidence = angle of reflection, both measured from the normal. Plane mirrors form virtual, upright, laterally inverted images the same size as the object and as far behind the mirror as the object is in front.",
      },
      {
        heading: "Refraction",
        body: "Light slows down in denser media (glass, water) and speeds up in less dense media (air). When entering glass, light bends towards the normal; leaving glass, it bends away. This makes a straw in water look bent. Prisms disperse white light into a spectrum because each colour refracts by a slightly different amount.",
      },
      {
        heading: "Lenses and colour",
        body: "Converging (convex) lenses focus light to a point — used in magnifying glasses, cameras, and the eye's lens. Diverging (concave) lenses spread light out. Primary colours of light are red, green, and blue — mixing them gives white. Filters absorb certain colours — a green filter only transmits green light.",
      },
    ],
    examTips: [
      "Draw the normal as a dashed line at 90° to the surface before marking angles.",
      "State the law of reflection with correct terminology: angle of incidence = angle of reflection.",
      "Explain colour using absorption and reflection — a white object reflects all colours; black absorbs all.",
    ],
    higherConcepts: [
      { term: "Principal focus (focal point)", definition: "The point where parallel rays meet after passing through a converging lens, or appear to come from after a diverging lens." },
      { term: "Real vs virtual image", definition: "Real images form where light actually converges (can be projected); virtual images form where light appears to come from (mirrors, magnifying glasses)." },
      { term: "Total internal reflection", definition: "When light in a denser medium hits the boundary at a large angle and reflects entirely — used in optical fibres (GCSE)." },
      { term: "Critical angle", definition: "The angle of incidence above which total internal reflection occurs when light travels from denser to less dense medium." },
      { term: "Short-sighted and long-sighted", definition: "Short-sighted eyes focus light before the retina (corrected with diverging lenses); long-sighted eyes focus behind the retina (converging lenses)." },
    ],
    higherSections: [
      {
        heading: "Ray diagrams for lenses",
        body: "Three key rays for converging lenses: parallel ray refracts through focal point; ray through centre continues straight; ray through focal point emerges parallel. Where rays converge forms a real image. Magnifying glass: object inside focal length produces enlarged virtual image. Camera: object beyond focal length produces real, inverted, diminished image on sensor.",
      },
      {
        heading: "Optical fibres and applications",
        body: "Optical fibres use total internal reflection to transmit light signals over long distances with minimal loss — used in endoscopes and broadband internet. Periscopes use two plane mirrors at 45°. UV light is used for security marking and sterilisation. Infrared remote controls and thermal cameras use invisible parts of the spectrum.",
      },
    ],
    higherExamTips: [
      "Construct accurate ray diagrams for plane mirrors and converging lenses with labelled focal points.",
      "Explain dispersion: different wavelengths refract by different amounts, splitting white light.",
      "Describe how the eye focuses light and how defects are corrected with appropriate lens types.",
    ],
  }),

  createCurriculumContent({
    slug: "sound",
    overview:
      "Sound is produced by vibrations and travels as longitudinal waves through solids, liquids, and gases. KS3 pupils explore how sound is made and detected, the structure of the ear, and applications of ultrasound. This topic addresses National Curriculum requirements on sound waves and hearing.",
    keyConcepts: [
      { term: "Sound wave", definition: "A longitudinal wave consisting of compressions and rarefactions, produced by vibrating objects and detected by the ear or microphone." },
      { term: "Vibration", definition: "A rapid back-and-forth movement; all sounds originate from vibrating sources — strings, air columns, vocal cords, or loudspeaker cones." },
      { term: "Frequency and pitch", definition: "Higher frequency means higher pitch; frequency is measured in hertz (Hz); human hearing range is approximately 20 Hz to 20,000 Hz." },
      { term: "Amplitude and loudness", definition: "Greater amplitude means louder sound; amplitude relates to the energy carried by the wave." },
      { term: "Medium", definition: "Sound requires a medium to travel — it cannot travel through a vacuum; it travels fastest in solids, slower in liquids, slowest in gases." },
      { term: "Echo", definition: "A reflected sound wave heard as a repeat of the original sound; used in sonar to measure depth or distance." },
      { term: "Ultrasound", definition: "Sound with frequency above 20,000 Hz, inaudible to humans; used in medical scanning, cleaning, and sonar." },
      { term: "Eardrum", definition: "A thin membrane in the ear that vibrates when sound hits it, transmitting vibrations to the ossicles and cochlea." },
    ],
    sections: [
      {
        heading: "How sound travels",
        body: "Vibrating objects cause nearby particles to vibrate, creating compressions (particles close together) and rarefactions (particles spread apart). This pattern travels through the medium as a longitudinal wave. Sound cannot travel in space (no medium). It travels at about 340 m/s in air, faster in water (~1500 m/s), and fastest in steel (~5000 m/s).",
      },
      {
        heading: "Pitch, loudness, and the ear",
        body: "Frequency determines pitch — a guitar string vibrates faster (shorter length, higher tension) for higher notes. Amplitude determines loudness. The ear: sound enters the ear canal, vibrates the eardrum, ossicles amplify vibrations, and the cochlea converts them to electrical signals sent to the brain. Damage from loud sounds is permanent — ear defenders reduce amplitude reaching the ear.",
      },
      {
        heading: "Ultrasound and applications",
        body: "Ultrasound (above 20 kHz) is used in prenatal scanning — echoes from the fetus build an image. Sonar sends ultrasound pulses to the sea bed and measures time for echo return to calculate depth. Ultrasound cleaning uses high-frequency vibrations to remove dirt from delicate objects. Bats use ultrasound for echolocation to navigate and hunt.",
      },
    ],
    examTips: [
      "State that sound needs a medium — the bell jar vacuum experiment proves this.",
      "Link frequency to pitch and amplitude to loudness — do not confuse them.",
      "Describe the ear's pathway: sound → eardrum → ossicles → cochlea → nerve → brain.",
    ],
    higherConcepts: [
      { term: "Speed of sound calculation", definition: "Distance = speed × time; echo problems use total distance = 2 × depth (sound travels there and back)." },
      { term: "Infrasound", definition: "Sound below 20 Hz, inaudible to humans; used by elephants and detected from volcanic eruptions and earthquakes." },
      { term: "Noise pollution", definition: "Unwanted sound causing health effects — hearing damage, stress, sleep disturbance; controlled by decibel limits and barriers." },
      { term: "Microphone and loudspeaker", definition: "Microphone converts sound to electrical signals; loudspeaker reverses this — coil in magnetic field (motor effect)." },
      { term: "Seismic waves", definition: "Waves from earthquakes — P-waves (longitudinal, faster) and S-waves (transverse, slower, cannot travel through liquid outer core)." },
    ],
    higherSections: [
      {
        heading: "Echo and sonar calculations",
        body: "If an echo returns in 0.4 s from a cliff, sound travels to the cliff and back in 0.4 s. Distance to cliff = (340 m/s × 0.4 s) ÷ 2 = 68 m. Sonar on ships works similarly to map the sea floor. Bats emit ultrasound pulses and interpret returning echoes to locate prey within centimetres.",
      },
      {
        heading: "Sound technology",
        body: "Musical instruments control pitch by changing frequency (string length, air column length, membrane tension) and loudness by amplitude. Noise-cancelling headphones produce anti-phase sound to cancel incoming noise by destructive interference. Seismometers detect seismic waves to locate earthquake epicentres and study Earth's interior structure.",
      },
    ],
    higherExamTips: [
      "Calculate distance using echo data — remember to halve the total distance travelled by sound.",
      "Explain ultrasound scanning: pulses sent into body, echoes from tissue boundaries detected and processed into images.",
      "Compare speed of sound in solids, liquids, and gases using particle spacing arguments.",
    ],
  }),

  createCurriculumContent({
    slug: "space",
    overview:
      "Space physics at KS3 introduces the Solar System, gravity, orbital motion, and the scale of stars and galaxies. Pupils learn about the Sun, planets, moons, and how gravity keeps objects in orbit, and consider the life cycle of stars and the structure of the universe. This topic covers National Curriculum astronomy content for Key Stage 3.",
    keyConcepts: [
      { term: "Solar System", definition: "The Sun and all objects orbiting it — eight planets, dwarf planets (e.g. Pluto), moons, asteroids, and comets, held together by gravity." },
      { term: "Gravity", definition: "A non-contact force of attraction between masses; it keeps planets in orbit, causes weight, and holds the atmosphere to Earth." },
      { term: "Orbit", definition: "The curved path of an object around a larger body due to gravity; planets orbit the Sun, moons orbit planets." },
      { term: "Star", definition: "A massive ball of hot gas (mainly hydrogen) undergoing nuclear fusion, releasing enormous energy as light and heat." },
      { term: "Galaxy", definition: "A vast collection of billions of stars, gas, and dust held together by gravity; the Milky Way is our galaxy." },
      { term: "Light year", definition: "The distance light travels in one year (~9.5 trillion km); used to measure interstellar distances, not a time unit." },
      { term: "Geocentric vs heliocentric", definition: "Geocentric: Earth at centre (old model); heliocentric: Sun at centre (Copernicus, Galileo) — now accepted for the Solar System." },
      { term: "Weightlessness", definition: "The sensation of having no weight in orbit — astronauts are in free fall around Earth, not free from gravity." },
    ],
    sections: [
      {
        heading: "The Solar System",
        body: "The Sun is a star at the centre; planets orbit in elliptical paths. Inner planets (Mercury, Venus, Earth, Mars) are rocky; outer planets (Jupiter, Saturn, Uranus, Neptune) are gas giants. Earth takes 365.25 days to orbit; the Moon takes ~27 days to orbit Earth. Asteroids orbit between Mars and Jupiter; comets have elliptical orbits with icy tails near the Sun.",
      },
      {
        heading: "Gravity and orbits",
        body: "Gravity provides the centripetal force keeping planets in orbit. The further a planet is from the Sun, the longer its orbital period (Kepler's laws at GCSE). Satellites orbit Earth — geostationary satellites (24-hour orbit) stay above one point for communications; low Earth orbit satellites for imaging. Weight = mass × gravitational field strength; on the Moon, g is about 1.6 N/kg.",
      },
      {
        heading: "Stars, galaxies, and the universe",
        body: "Stars form from clouds of gas and dust; our Sun is a main sequence star. Stars eventually run out of fuel — smaller stars become white dwarfs, larger ones may become neutron stars or black holes. The Milky Way contains ~100 billion stars. The universe is expanding — distant galaxies show redshift, evidence for the Big Bang theory (~13.8 billion years ago).",
      },
    ],
    examTips: [
      "Order the planets from the Sun and classify as rocky or gas giant.",
      "Explain weightlessness as free fall in orbit — gravity is still acting.",
      "Use light years for stellar distances; state that a light year is a distance, not time.",
    ],
    higherConcepts: [
      { term: "Nuclear fusion", definition: "The process in stars where hydrogen nuclei fuse to form helium, releasing vast energy; powers the Sun." },
      { term: "Redshift", definition: "The increase in wavelength of light from distant galaxies moving away — evidence the universe is expanding." },
      { term: "Big Bang theory", definition: "The model that the universe began from a hot, dense point ~13.8 billion years ago and has been expanding since." },
      { term: "Artificial satellite", definition: "A human-made object in orbit around Earth — used for communication, navigation (GPS), weather, and research." },
      { term: "Life cycle of a star", definition: "Nebula → main sequence star → red giant → white dwarf (small stars) or supernova → neutron star/black hole (large stars)." },
    ],
    higherSections: [
      {
        heading: "Comparing objects in space",
        body: "The Sun contains 99.86% of the Solar System's mass — its gravity dominates. Jupiter is the largest planet with over 80 moons. Saturn's rings are ice and rock particles. Venus has a thick CO₂ atmosphere and extreme greenhouse effect (460 °C surface). Mars shows evidence of ancient water. Space probes (Voyager, Mars rovers, James Webb Telescope) extend observation beyond Earth.",
      },
      {
        heading: "Human space exploration",
        body: "The ISS orbits at ~400 km altitude with astronauts in continuous free fall. Space travel challenges include radiation, muscle/bone loss in microgravity, and life support. The Moon landings (1969–1972) provided samples and data. Future missions target Mars return samples and Artemis lunar programme. Telescopes in space (Hubble, JWST) avoid atmospheric distortion for clearer images.",
      },
    ],
    higherExamTips: [
      "Describe the life cycle of a star like the Sun from nebula to white dwarf.",
      "Explain redshift as evidence for an expanding universe and the Big Bang theory.",
      "Compare gravitational field strength on Earth, Moon, and Jupiter using weight calculations.",
    ],
  }),
];

export function getKs3Content(slug: string): CurriculumTopicContent | undefined {
  return KS3_TOPIC_CONTENT.find((t) => t.slug === slug);
}
