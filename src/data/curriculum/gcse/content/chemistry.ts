import { createContent } from "./types";

export const CHEMISTRY_CONTENT = [
  createContent({
    slug: "atomic-structure-and-the-periodic-table",
    aliases: ["key-concepts-in-chemistry", "principles-of-chemistry", "particles", "chemical-patterns", "groups-in-the-periodic-table"],
    overview:
      "Structure of the atom, electronic configuration, the periodic table, and isotopes. Based on AQA 8462 Topic 4.1 — atoms contain protons, neutrons and electrons; elements are arranged by atomic number.",
    keyConcepts: [
      { term: "Atom", definition: "The smallest part of an element that retains its chemical properties." },
      { term: "Proton", definition: "Positively charged particle in the nucleus; relative mass 1; defines atomic number." },
      { term: "Neutron", definition: "Neutral particle in the nucleus; relative mass 1." },
      { term: "Electron", definition: "Negatively charged particle in shells around the nucleus; negligible mass." },
      { term: "Atomic number", definition: "Number of protons in an atom's nucleus — defines the element." },
      { term: "Mass number", definition: "Total number of protons and neutrons in the nucleus." },
      { term: "Isotope", definition: "Atoms of the same element with the same number of protons but different numbers of neutrons." },
      { term: "Relative atomic mass (Ar)", definition: "Weighted mean mass of an atom compared to 1/12 the mass of carbon-12." },
      { term: "Electron shell", definition: "Energy level around the nucleus; first shell holds 2 electrons, then 8, then 8." },
      { term: "Group", definition: "Vertical column in the periodic table — elements with similar properties and same outer electrons." },
      { term: "Period", definition: "Horizontal row in the periodic table — elements with the same number of electron shells." },
      { term: "Noble gas", definition: "Group 0 elements with full outer shells — unreactive." },
      { term: "Alkali metal", definition: "Group 1 metals — reactive, form +1 ions, reactivity increases down the group." },
      { term: "Halogen", definition: "Group 7 non-metals — form -1 ions, reactivity decreases down the group." },
    ],
    sections: [
      {
        heading: "History of the atom",
        body: "Dalton: solid sphere. Thomson: plum pudding (electrons in positive sphere). Rutherford: nuclear model — most mass in tiny positive nucleus. Bohr: electrons in fixed shells. Modern: nucleus of protons/neutrons, electrons in shells.",
      },
      {
        heading: "The periodic table",
        body: "Mendeleev arranged elements by atomic mass and left gaps for undiscovered elements. Modern table is ordered by atomic number. Group number = outer electrons. Period number = number of shells.",
      },
      {
        heading: "Isotopes",
        body: "Same element, different mass numbers. Chemical properties identical (same electrons) but different physical properties (different mass). Used in radiotherapy and carbon dating.",
      },
    ],
    equations: [
      { label: "Mass number", formula: "A = protons + neutrons", unit: "" },
      { label: "Protons", formula: "protons = atomic number", unit: "" },
      { label: "Neutrons", formula: "neutrons = mass number − atomic number", unit: "" },
    ],
    diagrams: [
      { id: "atom-structure", title: "Atomic Structure", caption: "Nucleus (protons + neutrons) with electrons in shells." },
      { id: "bohr-model", title: "Bohr Model", caption: "Lithium: 2 electrons in first shell, 1 in second." },
      { id: "periodic-table", title: "Periodic Table", caption: "Groups (columns) and periods (rows)." },
    ],
    examTips: [
      "Calculate protons, neutrons, electrons from atomic/mass number.",
      "Explain why isotopes have the same chemical properties.",
      "Describe Rutherford's gold foil experiment and what it proved.",
    ],
  }),

  createContent({
    slug: "bonding-structure-and-properties-of-matter",
    aliases: ["states-of-matter-and-mixtures", "elements-compounds-and-mixtures", "inorganic-chemistry"],
    overview:
      "Ionic, covalent and metallic bonding. How bonding type determines properties — melting point, conductivity, solubility. Giant structures vs simple molecules.",
    keyConcepts: [
      { term: "Ionic bond", definition: "Strong electrostatic attraction between oppositely charged ions formed by electron transfer." },
      { term: "Covalent bond", definition: "Shared pair of electrons between two non-metal atoms." },
      { term: "Metallic bond", definition: "Attraction between positive metal ions and delocalised electrons." },
      { term: "Ion", definition: "Charged particle formed when an atom gains or loses electrons." },
      { term: "Giant ionic lattice", definition: "Regular 3D arrangement of alternating positive and negative ions — high melting points." },
      { term: "Simple molecule", definition: "Small group of atoms held by covalent bonds — low melting/boiling points." },
      { term: "Giant covalent structure", definition: "Network of covalent bonds throughout — very high melting point (diamond, graphite, SiO₂)." },
      { term: "Delocalised electrons", definition: "Electrons free to move throughout a structure — conduct electricity in metals and graphite." },
      { term: "Electrolyte", definition: "Molten or dissolved ionic compound that conducts electricity." },
      { term: "Allotrope", definition: "Different forms of the same element in the same physical state, e.g. diamond and graphite." },
      { term: "Polymer", definition: "Very large molecule made of repeating monomer units joined by covalent bonds." },
      { term: "Nanoparticle", definition: "1–100 nm in size; very large surface area to volume ratio — different properties to bulk material." },
    ],
    sections: [
      {
        heading: "Ionic bonding",
        body: "Metal atoms lose electrons to form positive ions; non-metals gain electrons to form negative ions. Ionic compounds form giant lattices. Conduct electricity when molten or dissolved (ions free to move) but not as solids.",
      },
      {
        heading: "Covalent bonding",
        body: "Non-metals share electron pairs. Simple molecules (H₂O, CO₂) have low melting points — weak intermolecular forces. Giant covalent structures have no free molecules — extremely high melting points.",
      },
      {
        heading: "Properties comparison",
        body: "Ionic: high mp, soluble in water, conduct when dissolved. Simple covalent: low mp, don't conduct. Giant covalent: very high mp, generally don't conduct (except graphite). Metals: high mp, conduct heat and electricity, malleable.",
      },
    ],
    diagrams: [
      { id: "ionic-bonding", title: "Ionic Bonding", caption: "Na loses 1 electron → Na⁺; Cl gains 1 → Cl⁻; electrostatic attraction." },
      { id: "covalent-methane", title: "Covalent Bonding", caption: "Carbon shares 4 electron pairs in methane (CH₄)." },
      { id: "graphite-diamond", title: "Carbon Allotropes", caption: "Diamond: 4 bonds each. Graphite: 3 bonds, layers slide, delocalised electrons." },
      { id: "metallic-bonding", title: "Metallic Bonding", caption: "Positive ions in sea of delocalised electrons." },
    ],
    examTips: [
      "Explain properties in terms of structure and bonding — always link them.",
      "Draw dot-and-cross diagrams for ionic and covalent compounds.",
      "Compare diamond and graphite: bonding, conductivity, hardness.",
    ],
  }),

  createContent({
    slug: "quantitative-chemistry",
    aliases: ["physical-chemistry"],
    overview: "Relative formula mass, the mole, conservation of mass, and concentration calculations. Essential for GCSE Chemistry calculations.",
    keyConcepts: [
      { term: "Relative formula mass (Mr)", definition: "Sum of relative atomic masses of all atoms in a formula." },
      { term: "Mole", definition: "Amount of substance containing 6.02 × 10²³ particles (Avogadro's constant)." },
      { term: "Conservation of mass", definition: "Total mass of reactants equals total mass of products in a closed system." },
      { term: "Balanced equation", definition: "Chemical equation with equal numbers of each atom on both sides." },
      { term: "Concentration", definition: "Amount of solute per unit volume: concentration = moles ÷ volume (dm³)." },
      { term: "Limiting reactant", definition: "Reactant that is used up first, limiting the amount of product formed." },
      { term: "Percentage yield", definition: "Actual yield ÷ theoretical yield × 100%." },
      { term: "Atom economy", definition: "Mass of desired product ÷ total mass of reactants × 100%." },
    ],
    sections: [
      {
        heading: "Calculating masses",
        body: "Use Ar and Mr from the periodic table. In balanced equations, the ratio of moles of reactants and products is fixed. Reacting mass calculations use: moles = mass ÷ Mr.",
      },
      {
        heading: "The mole",
        body: "One mole of any substance contains the same number of particles. Moles = mass ÷ Mr. Moles = concentration × volume (dm³). Use the mole triangle for calculations.",
      },
    ],
    equations: [
      { label: "Moles", formula: "n = m / Mr", unit: "mol" },
      { label: "Concentration", formula: "c = n / V", unit: "mol/dm³" },
      { label: "% yield", formula: "% yield = (actual / theoretical) × 100", unit: "%" },
    ],
    diagrams: [
      { id: "mole-triangle", title: "Mole Triangle", caption: "Cover the value you want: n = m/Mr, m = n × Mr." },
    ],
    examTips: [
      "Always balance equations before mole calculations.",
      "Show all working — method marks are available.",
      "Convert cm³ to dm³ by dividing by 1000.",
    ],
  }),

  createContent({
    slug: "chemical-changes",
    aliases: ["chemical-reactions", "extracting-metals-and-equilibria", "monitoring-and-controlling-chemical-reactions"],
    overview: "Reactivity of metals, acids and alkalis, electrolysis, and extraction of metals. Core practical: electrolysis of aqueous solutions.",
    keyConcepts: [
      { term: "Reactivity series", definition: "Order of metals by reactivity: K, Na, Ca, Mg, Al, C, Zn, Fe, H, Cu, Ag, Au." },
      { term: "Displacement reaction", definition: "More reactive metal displaces less reactive metal from its compound." },
      { term: "Acid", definition: "Substance with pH < 7 that produces H⁺ ions in solution." },
      { term: "Alkali", definition: "Base that dissolves in water; pH > 7; produces OH⁻ ions." },
      { term: "Neutralisation", definition: "Acid + alkali → salt + water." },
      { term: "pH scale", definition: "0–14 scale measuring acidity; pH 7 is neutral; each unit is 10× difference in H⁺ concentration." },
      { term: "Electrolysis", definition: "Decomposition using electricity; positive ions to cathode, negative to anode." },
      { term: "Electrode", definition: "Conductor through which current enters or leaves an electrolyte." },
      { term: "Cathode", definition: "Negative electrode — positive ions (cations) gain electrons (reduction)." },
      { term: "Anode", definition: "Positive electrode — negative ions (anions) lose electrons (oxidation)." },
      { term: "Oxidation", definition: "Loss of electrons — OIL (Oxidation Is Loss)." },
      { term: "Reduction", definition: "Gain of electrons — RIG (Reduction Is Gain)." },
    ],
    sections: [
      {
        heading: "Acids and salts",
        body: "Acids react with metals (above hydrogen), metal oxides, metal hydroxides, and metal carbonates to form salts. Hydrochloric acid → chlorides, sulfuric acid → sulfates, nitric acid → nitrates.",
      },
      {
        heading: "Electrolysis",
        body: "Molten ionic compounds and aqueous solutions conduct electricity. At cathode: metal ions or H⁺ gain electrons. At anode: non-metal ions or OH⁻ lose electrons. Used to extract aluminium and electroplate objects.",
      },
    ],
    diagrams: [
      { id: "electrolysis", title: "Electrolysis Cell", caption: "Battery, electrodes in electrolyte, ions move to oppositely charged electrodes." },
      { id: "reactivity-series", title: "Reactivity Series", caption: "More reactive metals displace less reactive metals from solutions." },
    ],
    examTips: [
      "Remember OIL RIG for oxidation and reduction.",
      "Predict products of electrolysis of aqueous solutions.",
      "Write ionic half equations at each electrode.",
    ],
  }),

  createContent({
    slug: "energy-changes",
    aliases: ["rates-of-reaction-and-energy-changes", "rates-reaction", "the-rate-and-extent-of-chemical-change", "physical-chemistry"],
    overview: "Exothermic and endothermic reactions, energy level diagrams, bond energies, and rates of reaction.",
    keyConcepts: [
      { term: "Exothermic reaction", definition: "Transfers thermal energy to surroundings — temperature increases. E.g. combustion, neutralisation." },
      { term: "Endothermic reaction", definition: "Takes in thermal energy from surroundings — temperature decreases. E.g. thermal decomposition, photosynthesis." },
      { term: "Activation energy", definition: "Minimum energy needed for a reaction to occur." },
      { term: "Bond energy", definition: "Energy needed to break one mole of bonds in gaseous molecules." },
      { term: "Rate of reaction", definition: "Speed at which reactants are converted to products." },
      { term: "Catalyst", definition: "Increases rate without being used up — provides alternative pathway with lower activation energy." },
      { term: "Equilibrium", definition: "In a reversible reaction, forward and reverse rates are equal — closed system, constant conditions." },
    ],
    sections: [
      {
        heading: "Energy in reactions",
        body: "Breaking bonds requires energy (endothermic); making bonds releases energy (exothermic). Overall energy change = energy to break bonds − energy released making bonds.",
      },
      {
        heading: "Rates of reaction",
        body: "Affected by temperature, concentration, pressure (gases), surface area, and catalysts. Measure rate by gas volume, mass loss, or colour change over time. Collision theory: particles must collide with sufficient energy.",
      },
    ],
    equations: [
      { label: "Energy change", formula: "ΔE = bonds broken − bonds made", unit: "kJ/mol" },
    ],
    diagrams: [
      { id: "energy-profile", title: "Energy Profile", caption: "Activation energy hump; exothermic: products lower than reactants." },
      { id: "rate-graph", title: "Rate Graph", caption: "Steeper slope = faster rate; curve levels off as reactant used up." },
    ],
    examTips: [
      "Draw energy level diagrams with labelled axes and activation energy.",
      "Explain rate changes using collision theory and activation energy.",
      "Le Chatelier: predict shift when conditions change (Higher tier).",
    ],
  }),

  createContent({
    slug: "organic-chemistry",
    aliases: ["fuels-and-earth-science", "separate-chemistry-i", "separate-chemistry-ii"],
    overview: "Crude oil, hydrocarbons, alkanes, alkenes, polymers, and alcohols. Fractional distillation and cracking.",
    keyConcepts: [
      { term: "Hydrocarbon", definition: "Compound containing only hydrogen and carbon atoms." },
      { term: "Crude oil", definition: "Finite fossil fuel mixture of hydrocarbons, formed from ancient biomass." },
      { term: "Fractional distillation", definition: "Separating crude oil into fractions by boiling point in a fractionating column." },
      { term: "Alkane", definition: "Saturated hydrocarbon with single C-C bonds; general formula CₙH₂ₙ₊₂." },
      { term: "Alkene", definition: "Unsaturated hydrocarbon with C=C double bond; general formula CₙH₂ₙ." },
      { term: "Cracking", definition: "Breaking large alkane molecules into smaller alkane + alkene using heat and catalyst." },
      { term: "Monomer", definition: "Small molecule that joins to form a polymer." },
      { term: "Polymerisation", definition: "Joining many monomers to form a polymer — addition polymerisation uses alkenes." },
      { term: "Combustion", definition: "Reaction with oxygen releasing energy; complete combustion → CO₂ + H₂O." },
    ],
    sections: [
      {
        heading: "Crude oil and fractions",
        body: "Fractions: gases, petrol, kerosene, diesel, fuel oil, bitumen. Uses depend on chain length and boiling point. Cracking produces shorter alkanes (fuels) and alkenes (for plastics).",
      },
      {
        heading: "Testing for unsaturation",
        body: "Bromine water turns colourless with alkenes (addition reaction) but stays orange with alkanes. This distinguishes saturated from unsaturated hydrocarbons.",
      },
    ],
    diagrams: [
      { id: "fractional-distillation", title: "Fractional Distillation", caption: "Crude oil vapour rises; fractions condense at different heights." },
      { id: "polymerisation", title: "Addition Polymerisation", caption: "Many ethene monomers → poly(ethene)." },
    ],
    examTips: [
      "Draw structural formulas for first 4 alkanes and alkenes.",
      "Explain why cracking is needed — demand for short chains exceeds supply.",
      "Addition polymerisation: draw repeating unit from monomer.",
    ],
  }),

  createContent({
    slug: "chemistry-of-the-atmosphere",
    aliases: ["air-and-water", "chemicals-of-the-natural-environment", "global-challenges", "material-choices"],
    overview: "Evolution of Earth's atmosphere, greenhouse gases, climate change, and air pollution.",
    keyConcepts: [
      { term: "Greenhouse gas", definition: "Gas that absorbs infrared radiation, trapping heat — CO₂, methane, water vapour." },
      { term: "Global warming", definition: "Increase in Earth's average temperature due to enhanced greenhouse effect." },
      { term: "Carbon footprint", definition: "Total greenhouse gas emissions caused by an individual, event, or product." },
      { term: "Combustion", definition: "Burning fuel — produces CO₂; incomplete combustion produces CO (toxic)." },
      { term: "Catalytic converter", definition: "Reduces CO and NOₓ emissions from car exhausts." },
    ],
    sections: [
      {
        heading: "Earth's atmosphere",
        body: "Early atmosphere: volcanic CO₂, water vapour, ammonia. Photosynthesis removed CO₂ and added O₂. Current: ~78% N₂, ~21% O₂, ~0.04% CO₂. Human activity increases greenhouse gases.",
      },
      {
        heading: "Pollution",
        body: "CO: toxic, binds to haemoglobin. SO₂: acid rain. NOₓ: acid rain and smog. Particulates: global dimming, respiratory problems.",
      },
    ],
    diagrams: [
      { id: "atmosphere-composition", title: "Atmosphere Composition", caption: "Nitrogen 78%, Oxygen 21%, other gases 1%." },
      { id: "greenhouse-effect", title: "Greenhouse Effect", caption: "Solar radiation in → IR radiation trapped by greenhouse gases." },
    ],
    examTips: [
      "Describe how the early atmosphere changed over time.",
      "Evaluate evidence for human-caused climate change.",
      "Suggest ways to reduce carbon footprint.",
    ],
  }),

  createContent({
    slug: "chemical-analysis",
    aliases: ["analysis", "pure-substances"],
    overview:
      "Chemical analysis covers purity, formulations, chromatography, and tests for ions. GCSE students must distinguish pure substances from mixtures, calculate Rf values, and identify unknown ions using flame tests and precipitate reactions.",
    keyConcepts: [
      { term: "Pure substance", definition: "A single element or compound with a fixed melting point. Impure substances melt over a range of temperatures." },
      { term: "Formulation", definition: "A mixture designed as a useful product — e.g. paints, medicines, alloys. Contains measured proportions of components." },
      { term: "Chromatography", definition: "Technique to separate mixtures of dissolved substances. Mobile phase moves through stationary phase; components travel different distances." },
      { term: "Rf value", definition: "Retention factor: distance moved by substance ÷ distance moved by solvent. Always between 0 and 1; same substance gives same Rf on same paper." },
      { term: "Flame test", definition: "Identifies metal ions by colour in a Bunsen flame — e.g. lithium red, sodium yellow, potassium lilac, copper green." },
      { term: "Precipitate test", definition: "Add sodium hydroxide: Fe²⁺ green, Fe³⁺ brown, Cu²⁺ blue, Ca²⁺ white (insoluble in excess). Add acid to carbonates → CO₂ fizz." },
      { term: "Gas tests", definition: "H₂: squeaky pop with lit splint. O₂: relights glowing splint. CO₂: turns limewater cloudy. Cl₂: bleaches damp litmus white." },
      { term: "Instrumental analysis", definition: "Automated techniques (e.g. mass spectrometry, flame emission spectroscopy) — fast, accurate, detects tiny amounts." },
    ],
    sections: [
      {
        heading: "Chromatography in practice",
        body: "Draw a pencil baseline (ink dissolves). Spot mixtures and known substances. Solvent rises by capillary action. Compare Rf values to identify components. If substances have similar Rf, use a different solvent.",
      },
      {
        heading: "Testing for ions",
        body: "Flame tests identify Group 1 and some transition metal ions. Sodium hydroxide precipitate tests identify many metal ions. Halide tests: add nitric acid then silver nitrate — chloride white, bromide cream, iodide yellow precipitates.",
      },
    ],
    diagrams: [
      { id: "chromatography", title: "Paper Chromatography", caption: "Baseline, solvent front, and separated spots with Rf measurement." },
    ],
    examTips: [
      "Rf = distance by substance / distance by solvent — show working with measurements from diagram.",
      "Pure substance: sharp melting point; impure: melts over a range.",
      "State observation clearly for gas tests — colour change or sound.",
    ],
  }),

  createContent({
    slug: "using-resources",
    aliases: ["resources", "sustainability", "earth-resources"],
    overview:
      "Using resources covers sustainability, potable water, wastewater treatment, life cycle assessment (LCA), and recycling. Students evaluate environmental impact of products and learn how finite resources must be managed responsibly.",
    keyConcepts: [
      { term: "Sustainable development", definition: "Meeting present needs without compromising future generations' ability to meet theirs. Balance economic, social, and environmental factors." },
      { term: "Finite resource", definition: "Resource that runs out — fossil fuels, metal ores. Must be conserved, recycled, or replaced with renewables." },
      { term: "Potable water", definition: "Water safe to drink. Produced by filtration and chlorination from fresh water sources. Not the same as pure water." },
      { term: "Wastewater treatment", definition: "Screening → sedimentation → aerobic digestion (bacteria break down organic matter) → anaerobic digestion → discharge or agricultural use." },
      { term: "Life cycle assessment (LCA)", definition: "Evaluates environmental impact at every stage: extracting raw materials, manufacturing, use, disposal. Identifies areas to improve." },
      { term: "Recycling", definition: "Reprocessing waste into new products. Saves energy and raw materials but has collection/sorting costs. Not always cheaper than virgin materials." },
      { term: "Corrosion", definition: "Gradual destruction of metals by reaction with environment. Rusting (iron + water + oxygen). Prevention: painting, galvanising, sacrificial protection." },
      { term: "Alloy", definition: "Mixture of metal with other elements — often stronger or more corrosion-resistant than pure metal. E.g. steel, brass, stainless steel." },
    ],
    sections: [
      {
        heading: "Water treatment",
        body: "Fresh water passes through filter beds to remove solids. Chlorine or ozone kills bacteria. Desalination (removing salt from seawater) uses distillation or reverse osmosis — energy intensive, used where fresh water scarce.",
      },
      {
        heading: "Life cycle assessment",
        body: "Four stages: materials extraction, manufacturing, use, end of life. LCA considers energy use, pollution, and resource depletion. Compare reusable vs disposable products — reusables may use more energy to manufacture but less over lifetime.",
      },
    ],
    diagrams: [
      { id: "water-treatment", title: "Water Treatment", caption: "Filtration, sedimentation, and chlorination stages." },
    ],
    examTips: [
      "LCA: evaluate ALL stages, not just use or disposal.",
      "Distinguish potable water (safe to drink) from pure water (H₂O only).",
      "Suggest specific ways to reduce environmental impact with justification.",
    ],
  }),
];
