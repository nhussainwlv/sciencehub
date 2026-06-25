import { createContent } from "./types";

export const PHYSICS_CONTENT = [
  createContent({
    slug: "energy",
    aliases: ["conservation-of-energy", "energy-resources-and-transfers", "energy-forces-doing-work", "sustainable-energy", "key-concepts-of-physics", "global-challenges"],
    overview:
      "Energy stores, transfers, conservation, efficiency, and resources. AQA 8463 Topic 4.1 — energy cannot be created or destroyed, only transferred between stores.",
    keyConcepts: [
      { term: "Energy", definition: "The capacity to do work or cause change, measured in joules (J)." },
      { term: "Energy store", definition: "Kinetic, gravitational, elastic, thermal, chemical, magnetic, electrostatic, nuclear." },
      { term: "Energy transfer", definition: "Mechanically, electrically, by heating, or by radiation (waves)." },
      { term: "Conservation of energy", definition: "Energy cannot be created or destroyed — total energy in a closed system is constant." },
      { term: "Kinetic energy", definition: "Energy of a moving object." },
      { term: "Gravitational potential energy", definition: "Energy stored due to height in a gravitational field." },
      { term: "Elastic potential energy", definition: "Energy stored in a stretched or compressed spring." },
      { term: "Efficiency", definition: "Useful energy output ÷ total energy input × 100% — always less than 100%." },
      { term: "Power", definition: "Rate of energy transfer, measured in watts (W): power = energy ÷ time." },
      { term: "Work done", definition: "Energy transferred when a force moves an object: W = F × d." },
      { term: "Specific heat capacity", definition: "Energy needed to raise 1 kg of a substance by 1°C." },
      { term: "Renewable resource", definition: "Can be replenished: solar, wind, hydro, geothermal, tidal, biomass." },
      { term: "Non-renewable resource", definition: "Finite supply: fossil fuels, nuclear fuel (uranium)." },
    ],
    sections: [
      {
        heading: "Energy stores and transfers",
        body: "A system is an object or group of objects. When a system changes, energy is transferred between stores. Sankey diagrams show energy transfers — arrow width represents amount.",
      },
      {
        heading: "Calculating energy",
        body: "Kinetic energy increases with mass and velocity squared. GPE depends on mass, gravitational field strength (10 N/kg on Earth), and height. Reducing wasted energy improves efficiency.",
      },
      {
        heading: "Energy resources",
        body: "Fossil fuels reliable but cause pollution and climate change. Renewables are cleaner but intermittent. Nuclear: reliable, no CO₂ in operation, but waste disposal issues.",
      },
    ],
    equations: [
      { label: "Kinetic energy", formula: "Ek = ½mv²", unit: "J" },
      { label: "Gravitational PE", formula: "Ep = mgh", unit: "J" },
      { label: "Efficiency", formula: "efficiency = useful output / total input", unit: "ratio or %" },
      { label: "Power", formula: "P = E / t", unit: "W" },
      { label: "Work done", formula: "W = Fd", unit: "J" },
    ],
    diagrams: [
      { id: "energy-stores", title: "Energy Stores", caption: "Kinetic, gravitational, elastic, thermal, chemical, nuclear." },
      { id: "sankey-diagram", title: "Sankey Diagram", caption: "Width of arrows shows energy amount; wasted energy to surroundings." },
    ],
    examTips: [
      "Always state the energy store and transfer pathway.",
      "Show units in calculations: kg, m/s, m, J.",
      "Explain why no device is 100% efficient.",
    ],
  }),

  createContent({
    slug: "electricity",
    aliases: ["electricity-and-circuits", "electric-circuits", "electricity-and-magnetism"],
    overview:
      "Electric circuits, current, potential difference, resistance, and power. Ohm's law and series/parallel circuit rules.",
    keyConcepts: [
      { term: "Electric current", definition: "Rate of flow of charge, measured in amperes (A)." },
      { term: "Charge", definition: "Property of matter measured in coulombs (C): Q = I × t." },
      { term: "Potential difference", definition: "Energy transferred per unit charge (voltage), measured in volts (V)." },
      { term: "Resistance", definition: "Opposition to current flow, measured in ohms (Ω)." },
      { term: "Ohm's law", definition: "V = I × R — potential difference = current × resistance (at constant temperature)." },
      { term: "Series circuit", definition: "Single loop — same current everywhere; potential differences add up." },
      { term: "Parallel circuit", definition: "Multiple branches — same pd across each; currents add at junctions." },
      { term: "Filament lamp", definition: "Resistance increases with temperature — non-ohmic conductor." },
      { term: "Diode", definition: "Allows current in one direction only — used for rectification." },
      { term: "LDR", definition: "Light-dependent resistor — resistance decreases in bright light." },
      { term: "Thermistor", definition: "Resistance changes with temperature — NTC: resistance decreases when hot." },
      { term: "National Grid", definition: "Network distributing electricity; step-up transformers reduce energy loss in transmission." },
    ],
    sections: [
      {
        heading: "Circuit rules",
        body: "Series: Itotal = I₁ = I₂; Vtotal = V₁ + V₂; Rtotal = R₁ + R₂. Parallel: Vtotal = V₁ = V₂; Itotal = I₁ + I₂; 1/Rtotal = 1/R₁ + 1/R₂.",
      },
      {
        heading: "Electrical power and energy",
        body: "Power = current × voltage (P = IV). Energy = power × time (E = Pt). kWh is the unit for electrical energy bills.",
      },
    ],
    equations: [
      { label: "Charge", formula: "Q = It", unit: "C" },
      { label: "Ohm's law", formula: "V = IR", unit: "V = A × Ω" },
      { label: "Power", formula: "P = IV", unit: "W" },
      { label: "Energy", formula: "E = Pt", unit: "J" },
    ],
    diagrams: [
      { id: "circuit-series", title: "Series Circuit", caption: "One path; same current; voltages share." },
      { id: "circuit-parallel", title: "Parallel Circuit", caption: "Multiple paths; same voltage; currents share." },
      { id: "iv-graph", title: "I-V Characteristics", caption: "Resistor: straight line. Filament lamp: curve. Diode: one direction only." },
    ],
    examTips: [
      "Draw circuit diagrams with correct symbols.",
      "Calculate total resistance in series and parallel.",
      "Explain energy transfer in terms of charge and pd.",
    ],
  }),

  createContent({
    slug: "forces",
    aliases: ["motion-and-forces", "forces-and-motion", "forces-and-their-effects", "explaining-motion", "forces-and-matter"],
    overview:
      "Scalars and vectors, contact and non-contact forces, Newton's laws, motion graphs, and stopping distances.",
    keyConcepts: [
      { term: "Scalar quantity", definition: "Has magnitude only, e.g. speed, distance, mass, energy." },
      { term: "Vector quantity", definition: "Has magnitude and direction, e.g. velocity, force, acceleration, momentum." },
      { term: "Resultant force", definition: "Single force with the same effect as all forces acting on an object combined." },
      { term: "Weight", definition: "Force due to gravity: W = mg (g = 10 N/kg on Earth)." },
      { term: "Mass", definition: "Amount of matter in an object, measured in kg — constant everywhere." },
      { term: "Acceleration", definition: "Rate of change of velocity, measured in m/s²." },
      { term: "Newton's First Law", definition: "Object stays at rest or constant velocity unless a resultant force acts." },
      { term: "Newton's Second Law", definition: "F = ma — resultant force = mass × acceleration." },
      { term: "Newton's Third Law", definition: "Every action has an equal and opposite reaction — forces on different objects." },
      { term: "Thinking distance", definition: "Distance travelled during driver's reaction time — affected by speed, drugs, alcohol, tiredness." },
      { term: "Braking distance", definition: "Distance to stop once brakes applied — affected by speed, mass, brakes, tyres, road conditions." },
      { term: "Momentum", definition: "Mass × velocity (p = mv), measured in kg·m/s — conserved in collisions." },
    ],
    sections: [
      {
        heading: "Motion graphs",
        body: "Distance-time: gradient = speed. Velocity-time: gradient = acceleration; area under = distance travelled. Constant velocity = horizontal line; acceleration = sloped line.",
      },
      {
        heading: "Stopping distances",
        body: "Stopping distance = thinking distance + braking distance. Speed doubles → thinking distance doubles AND braking distance quadruples (4× total increase).",
      },
      {
        heading: "Newton's laws in practice",
        body: "Seatbelts increase stopping time, reducing force on passengers (F = ma). Crumple zones increase collision time. Airbags slow deceleration of head.",
      },
    ],
    equations: [
      { label: "Weight", formula: "W = mg", unit: "N" },
      { label: "Newton's 2nd law", formula: "F = ma", unit: "N" },
      { label: "Speed", formula: "v = d / t", unit: "m/s" },
      { label: "Acceleration", formula: "a = Δv / t", unit: "m/s²" },
      { label: "Momentum", formula: "p = mv", unit: "kg·m/s" },
    ],
    diagrams: [
      { id: "force-diagram", title: "Free Body Diagram", caption: "Arrows show magnitude and direction of forces on an object." },
      { id: "velocity-time", title: "Velocity-Time Graph", caption: "Gradient = acceleration; area = distance." },
      { id: "stopping-distance", title: "Stopping Distance", caption: "Thinking distance + braking distance." },
    ],
    examTips: [
      "Distinguish mass (kg) from weight (N).",
      "Interpret motion graphs — describe what each section means.",
      "Explain safety features using F = ma and momentum.",
    ],
  }),

  createContent({
    slug: "waves",
    aliases: ["light-and-the-electromagnetic-spectrum", "radiation-and-waves", "waves-and-radioactivity"],
    overview:
      "Wave properties, electromagnetic spectrum, reflection, refraction, and sound. Transverse and longitudinal waves.",
    keyConcepts: [
      { term: "Transverse wave", definition: "Oscillations perpendicular to direction of energy transfer, e.g. light, water, EM waves." },
      { term: "Longitudinal wave", definition: "Oscillations parallel to direction of travel, e.g. sound, ultrasound." },
      { term: "Amplitude", definition: "Maximum displacement from equilibrium — relates to loudness or brightness." },
      { term: "Wavelength", definition: "Distance between two consecutive identical points on a wave (λ)." },
      { term: "Frequency", definition: "Number of waves passing a point per second, measured in hertz (Hz)." },
      { term: "Wave speed", definition: "v = f × λ — wave speed = frequency × wavelength." },
      { term: "Electromagnetic spectrum", definition: "Radio, microwave, infrared, visible, ultraviolet, X-ray, gamma — all travel at same speed in vacuum." },
      { term: "Reflection", definition: "Wave bounces off a surface — angle of incidence = angle of reflection." },
      { term: "Refraction", definition: "Wave changes speed and direction at a boundary between media." },
      { term: "Ultrasound", definition: "Sound above 20,000 Hz — used in sonar and medical imaging." },
    ],
    sections: [
      {
        heading: "The EM spectrum",
        body: "All EM waves transfer energy. Radio: communication. Microwaves: cooking, satellites. Infrared: heating, thermal imaging. Visible: sight. UV: security marking, sterilisation. X-rays: medical imaging. Gamma: cancer treatment, sterilisation.",
      },
      {
        heading: "Sound",
        body: "Needs a medium — cannot travel in vacuum. Speed ~340 m/s in air. Higher frequency = higher pitch. Greater amplitude = louder. Echo: reflection of sound.",
      },
    ],
    equations: [
      { label: "Wave equation", formula: "v = fλ", unit: "m/s" },
    ],
    diagrams: [
      { id: "wave-properties", title: "Wave Properties", caption: "Label: amplitude, wavelength, crest, trough." },
      { id: "em-spectrum", title: "EM Spectrum", caption: "Radio → microwave → IR → visible → UV → X-ray → gamma." },
      { id: "reflection", title: "Reflection", caption: "Angle of incidence = angle of reflection." },
    ],
    examTips: [
      "All EM waves travel at 3 × 10⁸ m/s in vacuum.",
      "Link wave properties to uses and dangers of each EM type.",
      "Draw ray diagrams for reflection and refraction.",
    ],
  }),

  createContent({
    slug: "particle-model-of-matter",
    aliases: ["particle-model", "solids-liquids-and-gases", "matter"],
    overview:
      "The particle model explains the behaviour of solids, liquids and gases. Covers density, changes of state, internal energy, specific heat capacity, specific latent heat, and pressure in gases. AQA 8463 Topic 4.3.",
    keyConcepts: [
      { term: "Solid", definition: "Particles are close together in a fixed arrangement, vibrating in place — fixed shape and volume." },
      { term: "Liquid", definition: "Particles are close together but move past each other — fixed volume but takes shape of container." },
      { term: "Gas", definition: "Particles are far apart and move randomly at high speed — no fixed shape or volume." },
      { term: "Density", definition: "Mass per unit volume: ρ = m/V, measured in kg/m³." },
      { term: "Change of state", definition: "Physical change between solid, liquid and gas — mass is conserved; energy changes internal energy, not temperature during the change." },
      { term: "Internal energy", definition: "Total kinetic and potential energy of all particles in a substance." },
      { term: "Specific heat capacity", definition: "Energy needed to raise the temperature of 1 kg of a substance by 1°C, measured in J/kg°C." },
      { term: "Specific latent heat", definition: "Energy needed to change the state of 1 kg of a substance with no temperature change, measured in J/kg." },
      { term: "Latent heat of fusion", definition: "Energy to melt 1 kg of solid at its melting point (or freeze 1 kg of liquid)." },
      { term: "Latent heat of vaporisation", definition: "Energy to boil 1 kg of liquid at its boiling point (or condense 1 kg of gas)." },
      { term: "Evaporation", definition: "Liquid turns to gas below boiling point at the surface — faster when warmer, windy, or low humidity." },
      { term: "Gas pressure", definition: "Caused by particles colliding with walls of container — increases with temperature or particle number." },
    ],
    sections: [
      {
        heading: "States of matter",
        body: "In solids, particles vibrate about fixed positions. In liquids, particles slide over each other. In gases, particles move freely and far apart. Heating adds energy; cooling removes it. Sublimation: solid → gas directly. Boiling is active (energy supplied); evaporation is passive (from surroundings).",
      },
      {
        heading: "Density and the particle model",
        body: "Denser materials have more mass in the same volume because particles are packed more closely. To calculate density: measure mass on a balance and volume (regular shapes: formula; irregular: displacement in water).",
      },
      {
        heading: "Energy and temperature changes",
        body: "When heated without changing state, temperature rises and internal energy increases. ΔE = m × c × Δθ where c is specific heat capacity. Water has a high specific heat capacity (4200 J/kg°C) — useful in heating systems and explains climate moderation.",
      },
      {
        heading: "Changes of state and latent heat",
        body: "During melting or boiling, energy supplied breaks bonds between particles — temperature stays constant. E = m × L where L is specific latent heat. After all solid has melted, further heating raises temperature again.",
      },
      {
        heading: "Pressure in gases",
        body: "Gas particles collide with container walls. Higher temperature → faster particles → more frequent and harder collisions → higher pressure. Increasing volume at constant temperature decreases pressure (fewer collisions per unit area).",
      },
    ],
    equations: [
      { label: "Density", formula: "ρ = m / V", unit: "kg/m³" },
      { label: "Thermal energy change", formula: "ΔE = m × c × Δθ", unit: "J" },
      { label: "Latent heat", formula: "E = m × L", unit: "J" },
    ],
    diagrams: [
      { id: "states-of-matter", title: "States of Matter", caption: "Solid: fixed arrangement. Liquid: sliding particles. Gas: far apart, random motion." },
      { id: "heating-curve", title: "Heating Curve", caption: "Flat sections = change of state at constant temperature." },
      { id: "gas-pressure", title: "Gas Pressure", caption: "Particles collide with walls — more collisions = higher pressure." },
    ],
    examTips: [
      "Show all units in density calculations — convert cm³ to m³ if needed.",
      "Distinguish specific heat capacity (temperature change) from specific latent heat (change of state).",
      "Explain evaporation using the particle model — fastest particles escape from the surface.",
    ],
  }),

  createContent({
    slug: "atomic-structure",
    aliases: ["radioactivity", "radioactivity-and-particles", "radioactive-materials"],
    overview:
      "Structure of the atom, radioactivity, nuclear equations, half-life, and hazards. Physics atomic structure topic.",
    keyConcepts: [
      { term: "Nucleus", definition: "Tiny dense centre of atom containing protons and neutrons." },
      { term: "Alpha particle", definition: "2 protons + 2 neutrons (helium nucleus); heavily ionising; stopped by paper/skin." },
      { term: "Beta particle", definition: "Fast electron from nucleus; moderately ionising; stopped by thin aluminium." },
      { term: "Gamma ray", definition: "Electromagnetic radiation from nucleus; weakly ionising; reduced by thick lead." },
      { term: "Ionising radiation", definition: "Radiation that can knock electrons from atoms, forming ions." },
      { term: "Half-life", definition: "Time for half the radioactive nuclei in a sample to decay." },
      { term: "Background radiation", definition: "Low-level radiation always present from rocks, cosmic rays, and medical sources." },
      { term: "Nuclear fission", definition: "Splitting a large nucleus (uranium/plutonium) — releases energy, used in nuclear power." },
      { term: "Nuclear fusion", definition: "Joining small nuclei (hydrogen) — releases huge energy, powers the Sun." },
    ],
    sections: [
      {
        heading: "Types of radiation",
        body: "Alpha: +2 charge, large mass, short range. Beta: -1 charge, medium range. Gamma: no charge, no mass, long range. Penetrating power: alpha < beta < gamma. Ionising power: alpha > beta > gamma.",
      },
      {
        heading: "Half-life calculations",
        body: "After one half-life, activity and number of nuclei halve. Graph is exponential decay curve. Used in carbon-14 dating and medical tracers.",
      },
      {
        heading: "Safety",
        body: "Minimise time of exposure, maximise distance from source, use shielding. Nuclear waste: stored underground. Contamination vs irradiation.",
      },
    ],
    equations: [
      { label: "Remaining nuclei", formula: "N = N₀ × (½)ⁿ", unit: "n = number of half-lives" },
    ],
    diagrams: [
      { id: "penetration", title: "Radiation Penetration", caption: "Alpha: paper. Beta: aluminium. Gamma: thick lead." },
      { id: "half-life-graph", title: "Half-Life Graph", caption: "Exponential decay; half-life read from graph." },
    ],
    examTips: [
      "Write nuclear equations balancing mass and atomic numbers.",
      "Calculate half-life from decay graphs.",
      "Compare fission and fusion — fuel, products, energy release.",
    ],
  }),

  createContent({
    slug: "magnetism-and-electromagnetism",
    aliases: ["magnetism-and-the-motor-effect", "electromagnetic-induction", "static-electricity"],
    overview:
      "Magnetic fields, electromagnets, motor effect, generator effect, and transformers.",
    keyConcepts: [
      { term: "Magnetic field", definition: "Region around a magnet where magnetic forces act — shown by field lines from N to S." },
      { term: "Electromagnet", definition: "Magnet created by current in a coil — strength increased by more turns, more current, or iron core." },
      { term: "Motor effect", definition: "Force on current-carrying conductor in a magnetic field — basis of electric motors." },
      { term: "Electromagnetic induction", definition: "Inducing pd/current by moving a conductor in a magnetic field or changing field through a coil." },
      { term: "Generator", definition: "Converts kinetic energy to electrical energy using electromagnetic induction." },
      { term: "Transformer", definition: "Changes pd using two coils and an iron core — AC only." },
      { term: "Step-up transformer", definition: "More turns on secondary coil — increases voltage, used at power stations." },
      { term: "Step-down transformer", definition: "Fewer turns on secondary — decreases voltage, used in phone chargers." },
    ],
    sections: [
      {
        heading: "The motor effect",
        body: "Force depends on current, magnetic field strength, and wire length. Fleming's left-hand rule gives force direction. Used in motors and loudspeakers.",
      },
      {
        heading: "Generators and transformers",
        body: "Moving magnet in coil induces current. Transformers: Vp/Vs = Np/Ns. Step-up transformers reduce current in transmission cables, reducing energy wasted as heat.",
      },
    ],
    equations: [
      { label: "Motor force", formula: "F = BIL", unit: "N" },
      { label: "Transformer", formula: "Vp/Vs = Np/Ns", unit: "" },
    ],
    diagrams: [
      { id: "magnetic-field", title: "Magnetic Field", caption: "Field lines from N pole to S pole." },
      { id: "motor-effect", title: "Motor Effect", caption: "Current in field experiences force — Fleming's left-hand rule." },
      { id: "transformer", title: "Transformer", caption: "Primary coil, iron core, secondary coil." },
    ],
    examTips: [
      "Use Fleming's left-hand rule for motor effect questions.",
      "Explain how transformers work in the National Grid.",
      "Describe the generator effect — movement induces current.",
    ],
  }),

  createContent({
    slug: "space-physics",
    aliases: ["astronomy", "astrophysics", "matter"],
    overview:
      "Solar System, life cycle of stars, orbits, and red-shift. Physics-only topic on some specifications.",
    keyConcepts: [
      { term: "Solar System", definition: "Sun (star) with planets, dwarf planets, moons, asteroids, and comets orbiting it." },
      { term: "Orbit", definition: "Path of an object around a larger body — maintained by gravitational force providing centripetal force." },
      { term: "Geostationary orbit", definition: "Orbit above equator, period 24 hours — satellites stay above same point." },
      { term: "Nebula", definition: "Cloud of gas and dust where stars are born." },
      { term: "Main sequence star", definition: "Stable star fusing hydrogen to helium in its core, e.g. our Sun." },
      { term: "Red giant", definition: "Old star that has expanded and cooled after hydrogen runs out in core." },
      { term: "White dwarf", definition: "Hot dense remnant of a medium star after red giant phase." },
      { term: "Supernova", definition: "Explosive death of a massive star — creates elements heavier than iron." },
      { term: "Black hole", definition: "Remnant of the most massive stars — gravity so strong not even light escapes." },
      { term: "Red-shift", definition: "Wavelength of light from distant galaxies shifted towards red — galaxies moving away, Universe expanding." },
    ],
    sections: [
      {
        heading: "The Solar System",
        body: "Inner rocky planets (Mercury to Mars) and outer gas giants (Jupiter to Neptune). Asteroid belt between Mars and Jupiter. Comets have elliptical orbits with icy nuclei.",
      },
      {
        heading: "Life cycle of stars",
        body: "Nebula → protostar → main sequence → red giant → white dwarf (small stars) OR supernova → neutron star/black hole (massive stars). Fusion creates elements up to iron; heavier elements from supernovae.",
      },
      {
        heading: "The expanding Universe",
        body: "Hubble observed red-shift in light from distant galaxies. Further away = faster recession = Universe expanding. Evidence for the Big Bang theory.",
      },
    ],
    diagrams: [
      { id: "solar-system", title: "Solar System", caption: "Inner rocky planets, asteroid belt, outer gas giants." },
      { id: "star-lifecycle", title: "Star Life Cycle", caption: "Nebula → main sequence → red giant → white dwarf or supernova." },
      { id: "red-shift", title: "Red-Shift", caption: "Light from receding galaxies shifted to longer wavelengths." },
    ],
    examTips: [
      "Compare life cycles of similar-mass and massive stars.",
      "Explain how red-shift supports the Big Bang theory.",
      "Describe differences between planets, moons, and artificial satellites.",
    ],
  }),
];
