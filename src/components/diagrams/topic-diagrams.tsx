"use client";

interface DiagramProps {
  className?: string;
}

const stroke = "currentColor";
const fill = "var(--surface)";
const accent = "var(--foreground)";
const muted = "var(--muted)";

function Label({ x, y, children }: { x: number; y: number; children: string }) {
  return (
    <text x={x} y={y} fontSize="11" fill={muted} textAnchor="middle" fontFamily="system-ui,sans-serif">
      {children}
    </text>
  );
}

export function TopicDiagram({ id }: { id: string }) {
  const diagrams: Record<string, React.ReactNode> = {
    "animal-cell": <AnimalCell />,
    "plant-cell": <PlantCell />,
    "prokaryotic-cell": <ProkaryoticCell />,
    "diffusion-osmosis": <DiffusionOsmosis />,
    "digestive-system": <DigestiveSystem />,
    "heart": <Heart />,
    "villi": <Villi />,
    "plant-transport": <PlantTransport />,
    "photosynthesis": <Photosynthesis />,
    "respiration": <RespirationDiagram />,
    "reflex-arc": <ReflexArc />,
    "dna-structure": <DnaStructure />,
    "food-chain": <FoodChain />,
    "carbon-cycle": <CarbonCycle />,
    "atom-structure": <AtomStructure />,
    "bohr-model": <BohrModel />,
    "periodic-table": <PeriodicTable />,
    "ionic-bonding": <IonicBonding />,
    "covalent-methane": <CovalentMethane />,
    "graphite-diamond": <GraphiteDiamond />,
    "metallic-bonding": <MetallicBonding />,
    "electrolysis": <Electrolysis />,
    "energy-stores": <EnergyStores />,
    "circuit-series": <CircuitSeries />,
    "circuit-parallel": <CircuitParallel />,
    "force-diagram": <ForceDiagram />,
    "wave-properties": <WaveProperties />,
    "em-spectrum": <EmSpectrum />,
    "magnetic-field": <MagneticField />,
    "transformer": <Transformer />,
    "solar-system": <SolarSystem />,
    "star-lifecycle": <StarLifecycle />,
    "penetration": <Penetration />,
    "pathogen-types": <PathogenTypes />,
    "immune-response": <ImmuneResponse />,
    "energy-profile": <EnergyProfile />,
    "fractional-distillation": <FractionalDistillation />,
    "greenhouse-effect": <GreenhouseEffect />,
    "velocity-time": <VelocityTime />,
    "stopping-distance": <StoppingDistance />,
    "states-of-matter": <StatesOfMatter />,
    "heating-curve": <HeatingCurve />,
    "gas-pressure": <GasPressure />,
    "half-life-graph": <HalfLifeGraph />,
    "motor-effect": <MotorEffect />,
    "red-shift": <RedShift />,
    "rate-graph": <RateGraph />,
    "polymerisation": <Polymerisation />,
    "atmosphere-composition": <AtmosphereComposition />,
    "reflection": <Reflection />,
    "punnett-square": <PunnettSquare />,
    "sankey-diagram": <SankeyDiagram />,
    "iv-graph": <IvGraph />,
    "mole-triangle": <MoleTriangle />,
    "reactivity-series": <ReactivitySeries />,
  };

  return diagrams[id] ?? <GenericDiagram id={id} />;
}

function GenericDiagram({ id }: { id: string }) {
  return (
    <svg viewBox="0 0 400 200" className="w-full" aria-label={id}>
      <rect x="20" y="20" width="360" height="160" rx="12" fill={fill} stroke={stroke} strokeWidth="1.5" />
      <text x="200" y="105" textAnchor="middle" fill={muted} fontSize="14" fontFamily="system-ui">
        Diagram: {id.replace(/-/g, " ")}
      </text>
    </svg>
  );
}

function AnimalCell({}: DiagramProps) {
  return (
    <svg viewBox="0 0 400 280" className="w-full">
      <ellipse cx="200" cy="140" rx="170" ry="120" fill={fill} stroke={stroke} strokeWidth="2" />
      <circle cx="200" cy="130" r="50" fill="none" stroke={accent} strokeWidth="2" />
      <Label x={200} y={90}>Nucleus</Label>
      <ellipse cx="120" cy="170" rx="30" ry="18" fill="none" stroke={accent} strokeWidth="1.5" />
      <Label x={120} y={200}>Mitochondria</Label>
      <ellipse cx="280" cy="160" rx="25" ry="15" fill="none" stroke={accent} strokeWidth="1.5" />
      <Label x={280} y={190}>Mitochondria</Label>
      <Label x={200} y={265}>Cell membrane</Label>
    </svg>
  );
}

function PlantCell({}: DiagramProps) {
  return (
    <svg viewBox="0 0 400 280" className="w-full">
      <rect x="30" y="30" width="340" height="220" rx="8" fill="none" stroke={accent} strokeWidth="3" />
      <Label x={55} y={55}>Cell wall</Label>
      <ellipse cx="200" cy="140" rx="150" ry="100" fill={fill} stroke={stroke} strokeWidth="2" />
      <circle cx="200" cy="120" r="40" fill="none" stroke={accent} strokeWidth="2" />
      <Label x={200} y={85}>Nucleus</Label>
      <ellipse cx="130" cy="150" rx="22" ry="14" fill="#22c55e33" stroke="#22c55e" strokeWidth="1.5" />
      <Label x={130} y={175}>Chloroplast</Label>
      <rect x="250" y="100" width="60" height="80" rx="4" fill="none" stroke={accent} strokeWidth="1.5" strokeDasharray="4" />
      <Label x={280} y={195}>Vacuole</Label>
    </svg>
  );
}

function ProkaryoticCell({}: DiagramProps) {
  return (
    <svg viewBox="0 0 400 200" className="w-full">
      <ellipse cx="200" cy="100" rx="160" ry="70" fill={fill} stroke={stroke} strokeWidth="2" />
      <path d="M 120 100 Q 200 60 280 100 Q 200 140 120 100" fill="none" stroke={accent} strokeWidth="1.5" />
      <Label x={200} y={105}>DNA loop</Label>
      <circle cx="300" cy="80" r="12" fill="none" stroke={accent} strokeWidth="1.5" />
      <Label x={300} y={105}>Plasmid</Label>
      <Label x={200} y={185}>Bacterial cell — no nucleus</Label>
    </svg>
  );
}

function DiffusionOsmosis({}: DiagramProps) {
  return (
    <svg viewBox="0 0 400 180" className="w-full">
      <rect x="20" y="40" width="160" height="100" fill={fill} stroke={stroke} strokeWidth="1.5" />
      <rect x="220" y="40" width="160" height="100" fill={fill} stroke={stroke} strokeWidth="1.5" />
      <line x1="200" y1="40" x2="200" y2="140" stroke={accent} strokeWidth="2" strokeDasharray="6" />
      <Label x={100} y={95}>High concentration</Label>
      <Label x={300} y={95}>Low concentration</Label>
      <path d="M 175 90 L 195 90" stroke={accent} strokeWidth="2" markerEnd="url(#arrow)" />
      <defs><marker id="arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill={accent} /></marker></defs>
      <Label x={200} y={165}>Partially permeable membrane</Label>
    </svg>
  );
}

function DigestiveSystem({}: DiagramProps) {
  const organs = ["Mouth", "Oesophagus", "Stomach", "Small intestine", "Large intestine"];
  return (
    <svg viewBox="0 0 400 120" className="w-full">
      {organs.map((o, i) => (
        <g key={o}>
          <rect x={20 + i * 72} y="40" width="60" height="40" rx="6" fill={fill} stroke={stroke} strokeWidth="1.5" />
          <Label x={50 + i * 72} y={65}>{o}</Label>
          {i < organs.length - 1 && <path d={`M ${80 + i * 72} 60 L ${92 + i * 72} 60`} stroke={accent} strokeWidth="1.5" markerEnd="url(#a2)" />}
        </g>
      ))}
      <defs><marker id="a2" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill={accent} /></marker></defs>
    </svg>
  );
}

function Heart({}: DiagramProps) {
  return (
    <svg viewBox="0 0 300 260" className="w-full max-w-xs mx-auto">
      <path d="M150 30 C100 30 60 70 60 120 C60 180 150 230 150 230 C150 230 240 180 240 120 C240 70 200 30 150 30Z" fill={fill} stroke={stroke} strokeWidth="2" />
      <line x1="150" y1="30" x2="150" y2="230" stroke={accent} strokeWidth="1.5" />
      <line x1="60" y1="120" x2="240" y2="120" stroke={accent} strokeWidth="1.5" />
      <Label x={105} y={85}>RA</Label>
      <Label x={195} y={85}>LA</Label>
      <Label x={105} y={165}>RV</Label>
      <Label x={195} y={165}>LV</Label>
      <Label x={150} y={252}>Right / Left atria & ventricles</Label>
    </svg>
  );
}

function Villi({}: DiagramProps) {
  return (
    <svg viewBox="0 0 400 160" className="w-full">
      <rect x="50" y="100" width="300" height="20" fill={fill} stroke={stroke} strokeWidth="1.5" />
      {[80, 130, 180, 230, 280, 330].map((x) => (
        <rect key={x} x={x - 8} y="40" width="16" height="60" rx="4" fill={fill} stroke={accent} strokeWidth="1.5" />
      ))}
      <Label x={200} y={30}>Villi — increase surface area</Label>
      <Label x={200} y={145}>Intestinal wall</Label>
    </svg>
  );
}

function PlantTransport({}: DiagramProps) {
  return (
    <svg viewBox="0 0 300 220" className="w-full max-w-xs mx-auto">
      <line x1="150" y1="200" x2="150" y2="30" stroke="#22c55e" strokeWidth="4" />
      <line x1="145" y1="200" x2="145" y2="30" stroke="#3b82f6" strokeWidth="3" strokeDasharray="4" />
      <ellipse cx="150" cy="25" rx="40" ry="15" fill="#22c55e33" stroke="#22c55e" strokeWidth="1.5" />
      <Label x={80} y={120}>Xylem (water up)</Label>
      <Label x={220} y={120}>Phloem (sugars)</Label>
    </svg>
  );
}

function Photosynthesis({}: DiagramProps) {
  return (
    <svg viewBox="0 0 400 140" className="w-full">
      <text x="200" y="30" textAnchor="middle" fill={accent} fontSize="13" fontFamily="system-ui">
        6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂
      </text>
      <rect x="30" y="50" width="80" height="40" rx="6" fill={fill} stroke={stroke} strokeWidth="1.5" />
      <Label x={70} y={75}>CO₂ in</Label>
      <rect x="130" y="50" width="80" height="40" rx="6" fill="#22c55e33" stroke="#22c55e" strokeWidth="1.5" />
      <Label x={170} y={75}>Chloroplast</Label>
      <rect x="230" y="50" width="80" height="40" rx="6" fill={fill} stroke={stroke} strokeWidth="1.5" />
      <Label x={270} y={75}>O₂ out</Label>
      <text x="200" y="120" textAnchor="middle" fill={muted} fontSize="11" fontFamily="system-ui">Light energy required</text>
    </svg>
  );
}

function RespirationDiagram({}: DiagramProps) {
  return (
    <svg viewBox="0 0 400 100" className="w-full">
      <text x="200" y="30" textAnchor="middle" fill={accent} fontSize="11" fontFamily="system-ui">Aerobic → mitochondria → more ATP</text>
      <text x="200" y="55" textAnchor="middle" fill={muted} fontSize="11" fontFamily="system-ui">Anaerobic → cytoplasm → less ATP + lactic acid</text>
      <text x="200" y="80" textAnchor="middle" fill={muted} fontSize="11" fontFamily="system-ui">Oxygen debt repaid after exercise</text>
    </svg>
  );
}

function ReflexArc({}: DiagramProps) {
  const steps = ["Receptor", "Sensory", "CNS", "Motor", "Effector"];
  return (
    <svg viewBox="0 0 400 80" className="w-full">
      {steps.map((s, i) => (
        <g key={s}>
          <rect x={10 + i * 78} y="25" width="68" height="30" rx="4" fill={fill} stroke={stroke} strokeWidth="1.5" />
          <Label x={44 + i * 78} y={45}>{s}</Label>
          {i < 4 && <path d={`M ${78 + i * 78} 40 L ${88 + i * 78} 40`} stroke={accent} strokeWidth="1.5" />}
        </g>
      ))}
    </svg>
  );
}

function DnaStructure({}: DiagramProps) {
  return (
    <svg viewBox="0 0 200 200" className="w-full max-w-[200px] mx-auto">
      <path d="M60 20 Q100 50 140 20 Q180 50 140 80 Q100 110 60 80 Q20 50 60 20" fill="none" stroke={accent} strokeWidth="2" />
      <path d="M60 80 Q100 110 140 80 Q180 110 140 140 Q100 170 60 140 Q20 110 60 80" fill="none" stroke={accent} strokeWidth="2" />
      <line x1="75" y1="35" x2="125" y2="65" stroke={muted} strokeWidth="1" />
      <line x1="75" y1="65" x2="125" y2="35" stroke={muted} strokeWidth="1" />
      <Label x={100} y={195}>A-T  C-G base pairs</Label>
    </svg>
  );
}

function FoodChain({}: DiagramProps) {
  const items = ["🌿 Producer", "🐛 Primary", "🐦 Secondary", "🦅 Apex"];
  return (
    <svg viewBox="0 0 400 80" className="w-full">
      {items.map((item, i) => (
        <g key={item}>
          <rect x={10 + i * 95} y="20" width="85" height="35" rx="4" fill={fill} stroke={stroke} strokeWidth="1.5" />
          <text x={52 + i * 95} y={42} textAnchor="middle" fill={accent} fontSize="10" fontFamily="system-ui">{item}</text>
          {i < 3 && <text x={100 + i * 95} y={42} fill={muted} fontSize="14">→</text>}
        </g>
      ))}
    </svg>
  );
}

function CarbonCycle({}: DiagramProps) {
  return (
    <svg viewBox="0 0 300 200" className="w-full max-w-sm mx-auto">
      <circle cx="150" cy="100" r="30" fill={fill} stroke={stroke} strokeWidth="1.5" />
      <Label x={150} y={105}>CO₂</Label>
      <circle cx="80" cy="60" r="25" fill="#22c55e33" stroke="#22c55e" strokeWidth="1.5" />
      <Label x={80} y={65}>Plants</Label>
      <circle cx="220" cy="60" r="25" fill={fill} stroke={stroke} strokeWidth="1.5" />
      <Label x={220} y={65}>Animals</Label>
      <path d="M 150 70 L 95 65" stroke={accent} strokeWidth="1" markerEnd="url(#cy)" />
      <path d="M 105 60 L 195 60" stroke={accent} strokeWidth="1" />
      <path d="M 220 85 L 165 105" stroke={accent} strokeWidth="1" />
      <defs><marker id="cy" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto"><path d="M0,0 L5,2.5 L0,5" fill={accent} /></marker></defs>
      <Label x={150} y={185}>Photosynthesis & respiration</Label>
    </svg>
  );
}

function AtomStructure({}: DiagramProps) {
  return (
    <svg viewBox="0 0 200 200" className="w-full max-w-[200px] mx-auto">
      <circle cx="100" cy="100" r="20" fill={fill} stroke={accent} strokeWidth="2" />
      <Label x={100} y={105}>Nucleus</Label>
      <circle cx="100" cy="100" r="60" fill="none" stroke={muted} strokeWidth="1" strokeDasharray="3" />
      <circle cx="160" cy="100" r="5" fill={accent} />
      <Label x={100} y={175}>Electrons in shells</Label>
    </svg>
  );
}

function BohrModel({}: DiagramProps) {
  return (
    <svg viewBox="0 0 200 200" className="w-full max-w-[200px] mx-auto">
      <circle cx="100" cy="100" r="12" fill={fill} stroke={accent} strokeWidth="2" />
      <circle cx="100" cy="100" r="35" fill="none" stroke={muted} strokeWidth="1" />
      <circle cx="135" cy="100" r="4" fill={accent} />
      <circle cx="65" cy="100" r="4" fill={accent} />
      <circle cx="100" cy="100" r="60" fill="none" stroke={muted} strokeWidth="1" />
      <circle cx="160" cy="100" r="4" fill={accent} />
      <Label x={100} y={185}>Li: 2,1</Label>
    </svg>
  );
}

function PeriodicTable({}: DiagramProps) {
  return (
    <svg viewBox="0 0 400 120" className="w-full">
      <text x="30" y="30" fill={muted} fontSize="11" fontFamily="system-ui">Groups →</text>
      <text x="10" y="70" fill={muted} fontSize="11" fontFamily="system-ui" transform="rotate(-90 10 70)">Periods</text>
      {[0, 1, 2, 3, 4, 5, 6, 7].map((g) => (
        <rect key={g} x={40 + g * 42} y="40" width="38" height="30" fill={fill} stroke={stroke} strokeWidth="1" />
      ))}
      {[0, 1, 2].map((p) => (
        <rect key={p} x={40} y={40 + p * 34} width="38" height="30" fill={fill} stroke={stroke} strokeWidth="1" />
      ))}
      <Label x={200} y={105}>Groups = columns, Periods = rows</Label>
    </svg>
  );
}

function IonicBonding({}: DiagramProps) {
  return (
    <svg viewBox="0 0 300 120" className="w-full max-w-sm mx-auto">
      <circle cx="80" cy="60" r="30" fill={fill} stroke={stroke} strokeWidth="1.5" />
      <Label x={80} y={65}>Na</Label>
      <text x="130" y="65" fill={accent} fontSize="16">→</text>
      <circle cx="180" cy="60" r="30" fill={fill} stroke={accent} strokeWidth="2" />
      <Label x={180} y={65}>Na⁺</Label>
      <circle cx="250" cy="60" r="30" fill={fill} stroke={accent} strokeWidth="2" />
      <Label x={250} y={65}>Cl⁻</Label>
      <Label x={150} y={105}>Electron transfer → ionic bond</Label>
    </svg>
  );
}

function CovalentMethane({}: DiagramProps) {
  return (
    <svg viewBox="0 0 200 180" className="w-full max-w-[200px] mx-auto">
      <text x="100" y="90" textAnchor="middle" fill={accent} fontSize="16" fontWeight="bold">C</text>
      <text x="100" y="40" textAnchor="middle" fill={muted} fontSize="14">H</text>
      <text x="100" y="140" textAnchor="middle" fill={muted} fontSize="14">H</text>
      <text x="50" y="90" textAnchor="middle" fill={muted} fontSize="14">H</text>
      <text x="150" y="90" textAnchor="middle" fill={muted} fontSize="14">H</text>
      <line x1="100" y1="75" x2="100" y2="50" stroke={accent} strokeWidth="1.5" />
      <line x1="100" y1="105" x2="100" y2="130" stroke={accent} strokeWidth="1.5" />
      <line x1="88" y1="90" x2="62" y2="90" stroke={accent} strokeWidth="1.5" />
      <line x1="112" y1="90" x2="138" y2="90" stroke={accent} strokeWidth="1.5" />
      <Label x={100} y={170}>CH₄ — shared electron pairs</Label>
    </svg>
  );
}

function GraphiteDiamond({}: DiagramProps) {
  return (
    <svg viewBox="0 0 300 120" className="w-full max-w-sm mx-auto">
      <text x="75" y="30" textAnchor="middle" fill={accent} fontSize="12" fontWeight="bold">Diamond</text>
      <text x="75" y="55" textAnchor="middle" fill={muted} fontSize="10">4 bonds each</text>
      <text x="75" y="75" textAnchor="middle" fill={muted} fontSize="10">Very hard</text>
      <text x="225" y="30" textAnchor="middle" fill={accent} fontSize="12" fontWeight="bold">Graphite</text>
      <text x="225" y="55" textAnchor="middle" fill={muted} fontSize="10">3 bonds, layers</text>
      <text x="225" y="75" textAnchor="middle" fill={muted} fontSize="10">Conducts electricity</text>
      <line x1="150" y1="20" x2="150" y2="100" stroke={stroke} strokeWidth="1" />
    </svg>
  );
}

function MetallicBonding({}: DiagramProps) {
  return (
    <svg viewBox="0 0 300 120" className="w-full max-w-sm mx-auto">
      {[[60, 40], [100, 40], [140, 40], [80, 70], [120, 70]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="18" fill={fill} stroke={accent} strokeWidth="1.5" />
      ))}
      <text x="200" y="60" fill={muted} fontSize="10" fontFamily="system-ui">+ ions in</text>
      <text x="200" y="75" fill={muted} fontSize="10" fontFamily="system-ui">sea of e⁻</text>
    </svg>
  );
}

function Electrolysis({}: DiagramProps) {
  return (
    <svg viewBox="0 0 300 160" className="w-full max-w-sm mx-auto">
      <rect x="50" y="60" width="200" height="80" fill={fill} stroke={stroke} strokeWidth="1.5" />
      <rect x="80" y="30" width="20" height="110" fill={accent} opacity="0.3" stroke={accent} strokeWidth="1.5" />
      <rect x="200" y="30" width="20" height="110" fill={accent} opacity="0.3" stroke={accent} strokeWidth="1.5" />
      <Label x={90} y={25}>Cathode (−)</Label>
      <Label x={210} y={25}>Anode (+)</Label>
      <Label x={150} y={110}>Electrolyte</Label>
    </svg>
  );
}

function EnergyStores({}: DiagramProps) {
  const stores = ["Kinetic", "Gravitational", "Elastic", "Thermal", "Chemical"];
  return (
    <svg viewBox="0 0 400 70" className="w-full">
      {stores.map((s, i) => (
        <rect key={s} x={10 + i * 76} y="20" width="70" height="30" rx="4" fill={fill} stroke={stroke} strokeWidth="1.5" />
      ))}
      {stores.map((s, i) => (
        <Label key={s} x={45 + i * 76} y={40}>{s}</Label>
      ))}
    </svg>
  );
}

function CircuitSeries({}: DiagramProps) {
  return (
    <svg viewBox="0 0 300 120" className="w-full max-w-sm mx-auto">
      <rect x="50" y="30" width="200" height="60" fill="none" stroke={accent} strokeWidth="2" />
      <circle cx="70" cy="60" r="12" fill={fill} stroke={stroke} strokeWidth="1.5" />
      <Label x={70} y={64}>Cell</Label>
      <rect x="130" y="48" width="40" height="24" fill={fill} stroke={stroke} strokeWidth="1.5" />
      <Label x={150} y={64}>R₁</Label>
      <rect x="200" y="48" width="40" height="24" fill={fill} stroke={stroke} strokeWidth="1.5" />
      <Label x={220} y={64}>R₂</Label>
      <Label x={150} y={110}>Same current throughout</Label>
    </svg>
  );
}

function CircuitParallel({}: DiagramProps) {
  return (
    <svg viewBox="0 0 300 140" className="w-full max-w-sm mx-auto">
      <rect x="50" y="20" width="200" height="100" fill="none" stroke={accent} strokeWidth="2" />
      <line x1="50" y1="60" x2="250" y2="60" stroke={accent} strokeWidth="2" />
      <line x1="50" y1="80" x2="250" y2="80" stroke={accent} strokeWidth="2" />
      <rect x="120" y="48" width="60" height="16" fill={fill} stroke={stroke} strokeWidth="1" />
      <rect x="120" y="76" width="60" height="16" fill={fill} stroke={stroke} strokeWidth="1" />
      <Label x={150} y={130}>Same voltage across branches</Label>
    </svg>
  );
}

function ForceDiagram({}: DiagramProps) {
  return (
    <svg viewBox="0 0 200 120" className="w-full max-w-xs mx-auto">
      <rect x="80" y="45" width="40" height="30" fill={fill} stroke={stroke} strokeWidth="1.5" />
      <line x1="100" y1="45" x2="100" y2="15" stroke="#22c55e" strokeWidth="2" markerEnd="url(#fg)" />
      <text x="115" y="25" fill="#22c55e" fontSize="10">Upthrust</text>
      <line x1="100" y1="75" x2="100" y2="105" stroke="#ef4444" strokeWidth="2" markerEnd="url(#fr)" />
      <text x="115" y="100" fill="#ef4444" fontSize="10">Weight</text>
      <defs>
        <marker id="fg" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,6 L3,0 L6,6" fill="#22c55e" /></marker>
        <marker id="fr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L3,6 L6,0" fill="#ef4444" /></marker>
      </defs>
    </svg>
  );
}

function WaveProperties({}: DiagramProps) {
  return (
    <svg viewBox="0 0 400 120" className="w-full">
      <path d="M20 60 Q60 20 100 60 T180 60 T260 60 T340 60" fill="none" stroke={accent} strokeWidth="2" />
      <line x1="60" y1="20" x2="60" y2="60" stroke={muted} strokeWidth="1" strokeDasharray="3" />
      <line x1="60" y1="60" x2="60" y2="100" stroke={muted} strokeWidth="1" strokeDasharray="3" />
      <text x="70" y="45" fill={muted} fontSize="10">Amplitude</text>
      <line x1="60" y1="105" x2="140" y2="105" stroke={muted} strokeWidth="1" />
      <text x="100" y="118" fill={muted} fontSize="10" textAnchor="middle">Wavelength (λ)</text>
    </svg>
  );
}

function EmSpectrum({}: DiagramProps) {
  const bands = ["Radio", "Micro", "IR", "Visible", "UV", "X-ray", "Gamma"];
  const colors = ["#94a3b8", "#a78bfa", "#ef4444", "#fbbf24", "#22c55e", "#3b82f6", "#8b5cf6", "#ec4899"];
  return (
    <svg viewBox="0 0 400 60" className="w-full">
      {bands.map((b, i) => (
        <g key={b}>
          <rect x={10 + i * 54} y="15" width="50" height="25" fill={colors[i]} opacity="0.5" stroke={stroke} strokeWidth="1" />
          <text x={35 + i * 54} y="32" textAnchor="middle" fill={accent} fontSize="7" fontFamily="system-ui">{b}</text>
        </g>
      ))}
    </svg>
  );
}

function MagneticField({}: DiagramProps) {
  return (
    <svg viewBox="0 0 200 120" className="w-full max-w-xs mx-auto">
      <rect x="85" y="30" width="30" height="60" fill={fill} stroke={accent} strokeWidth="2" />
      <text x="100" y="25" textAnchor="middle" fill={accent} fontSize="12" fontWeight="bold">N</text>
      <text x="100" y="105" textAnchor="middle" fill={accent} fontSize="12" fontWeight="bold">S</text>
      <path d="M120 40 Q160 60 120 80" fill="none" stroke={muted} strokeWidth="1" />
      <path d="M80 40 Q40 60 80 80" fill="none" stroke={muted} strokeWidth="1" />
      <Label x={100} y={118}>Field lines: N → S</Label>
    </svg>
  );
}

function Transformer({}: DiagramProps) {
  return (
    <svg viewBox="0 0 300 120" className="w-full max-w-sm mx-auto">
      <rect x="120" y="20" width="60" height="80" fill={fill} stroke={accent} strokeWidth="2" />
      <path d="M60 40 Q80 60 60 80 Q40 60 60 40" fill="none" stroke={accent} strokeWidth="1.5" />
      <path d="M240 30 Q260 50 240 70 Q220 50 240 30" fill="none" stroke={accent} strokeWidth="1.5" />
      <path d="M240 50 Q260 70 240 90 Q220 70 240 50" fill="none" stroke={accent} strokeWidth="1.5" />
      <Label x={60} y={105}>Primary</Label>
      <Label x={240} y={105}>Secondary</Label>
    </svg>
  );
}

function SolarSystem({}: DiagramProps) {
  return (
    <svg viewBox="0 0 300 120" className="w-full max-w-sm mx-auto">
      <circle cx="150" cy="60" r="20" fill="#fbbf24" opacity="0.6" stroke="#f59e0b" strokeWidth="1.5" />
      <Label x={150} y={65}>Sun</Label>
      {[40, 65, 90, 115].map((r, i) => (
        <ellipse key={r} cx="150" cy="60" rx={r} ry={r * 0.35} fill="none" stroke={muted} strokeWidth="0.8" strokeDasharray="2" />
      ))}
      <circle cx="190" cy="60" r="5" fill={fill} stroke={accent} strokeWidth="1" />
      <Label x={190} y={90}>Planet</Label>
    </svg>
  );
}

function StarLifecycle({}: DiagramProps) {
  const stages = ["Nebula", "Main seq.", "Red giant", "White dwarf"];
  return (
    <svg viewBox="0 0 400 70" className="w-full">
      {stages.map((s, i) => (
        <g key={s}>
          <rect x={10 + i * 95} y="20" width="85" height="30" rx="4" fill={fill} stroke={stroke} strokeWidth="1.5" />
          <Label x={52 + i * 95} y={40}>{s}</Label>
          {i < 3 && <text x={100 + i * 95} y={40} fill={muted} fontSize="14">→</text>}
        </g>
      ))}
    </svg>
  );
}

function Penetration({}: DiagramProps) {
  return (
    <svg viewBox="0 0 300 100" className="w-full max-w-sm mx-auto">
      <rect x="20" y="30" width="8" height="50" fill={fill} stroke={stroke} strokeWidth="1" />
      <text x="24" y="95" fill={muted} fontSize="9" textAnchor="middle">Paper</text>
      <rect x="80" y="30" width="8" height="50" fill={fill} stroke={stroke} strokeWidth="1" />
      <text x="84" y="95" fill={muted} fontSize="9" textAnchor="middle">Al</text>
      <rect x="140" y="30" width="8" height="50" fill={fill} stroke={stroke} strokeWidth="1" />
      <text x="144" y="95" fill={muted} fontSize="9" textAnchor="middle">Lead</text>
      <text x="24" y="22" fill="#ef4444" fontSize="9" textAnchor="middle">α</text>
      <text x="84" y="22" fill="#f59e0b" fontSize="9" textAnchor="middle">β</text>
      <text x="144" y="22" fill="#22c55e" fontSize="9" textAnchor="middle">γ</text>
    </svg>
  );
}

function PathogenTypes({}: DiagramProps) {
  const types = ["Bacteria", "Virus", "Fungus", "Protist"];
  return (
    <svg viewBox="0 0 400 70" className="w-full">
      {types.map((t, i) => (
        <rect key={t} x={10 + i * 95} y="20" width="85" height="35" rx="4" fill={fill} stroke={stroke} strokeWidth="1.5" />
      ))}
      {types.map((t, i) => (
        <Label key={t} x={52 + i * 95} y={42}>{t}</Label>
      ))}
    </svg>
  );
}

function ImmuneResponse({}: DiagramProps) {
  return (
    <svg viewBox="0 0 400 70" className="w-full">
      {["Pathogen", "WBC", "Antibody", "Memory"].map((s, i) => (
        <g key={s}>
          <rect x={10 + i * 95} y="20" width="85" height="30" rx="4" fill={fill} stroke={stroke} strokeWidth="1.5" />
          <Label x={52 + i * 95} y={40}>{s}</Label>
          {i < 3 && <text x={100 + i * 95} y={40} fill={muted} fontSize="14">→</text>}
        </g>
      ))}
    </svg>
  );
}

function EnergyProfile({}: DiagramProps) {
  return (
    <svg viewBox="0 0 300 140" className="w-full max-w-sm mx-auto">
      <line x1="40" y1="120" x2="280" y2="120" stroke={muted} strokeWidth="1" />
      <line x1="40" y1="20" x2="40" y2="120" stroke={muted} strokeWidth="1" />
      <path d="M60 100 Q150 20 240 80" fill="none" stroke={accent} strokeWidth="2" />
      <line x1="150" y1="20" x2="150" y2="120" stroke={muted} strokeWidth="1" strokeDasharray="3" />
      <Label x={150} y={135}>Activation energy</Label>
      <Label x={70} y={110}>Reactants</Label>
      <Label x={230} y={95}>Products</Label>
    </svg>
  );
}

function FractionalDistillation({}: DiagramProps) {
  return (
    <svg viewBox="0 0 200 180" className="w-full max-w-[200px] mx-auto">
      <rect x="70" y="20" width="60" height="140" fill={fill} stroke={stroke} strokeWidth="2" />
      <line x1="70" y1="50" x2="130" y2="50" stroke={muted} strokeWidth="0.8" />
      <line x1="70" y1="80" x2="130" y2="80" stroke={muted} strokeWidth="0.8" />
      <line x1="70" y1="110" x2="130" y2="110" stroke={muted} strokeWidth="0.8" />
      <text x="145" y="45" fill={muted} fontSize="8">Gases</text>
      <text x="145" y="75" fill={muted} fontSize="8">Petrol</text>
      <text x="145" y="105" fill={muted} fontSize="8">Diesel</text>
      <Label x={100} y={175}>Fractionating column</Label>
    </svg>
  );
}

function GreenhouseEffect({}: DiagramProps) {
  return (
    <svg viewBox="0 0 300 140" className="w-full max-w-sm mx-auto">
      <circle cx="150" cy="30" r="18" fill="#fbbf24" opacity="0.5" />
      <path d="M150 48 L150 90" stroke="#fbbf24" strokeWidth="2" strokeDasharray="4" />
      <rect x="50" y="90" width="200" height="30" rx="4" fill="#22c55e22" stroke="#22c55e" strokeWidth="1" />
      <path d="M150 120 L150 135" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="3" />
      <Label x={150} y={82}>Solar radiation in</Label>
      <Label x={150} y={108}>Greenhouse gases trap IR</Label>
    </svg>
  );
}

function VelocityTime({}: DiagramProps) {
  return (
    <svg viewBox="0 0 300 140" className="w-full max-w-sm mx-auto">
      <line x1="40" y1="120" x2="280" y2="120" stroke={muted} strokeWidth="1" />
      <line x1="40" y1="20" x2="40" y2="120" stroke={muted} strokeWidth="1" />
      <path d="M60 100 L120 60 L200 60 L260 100" fill="none" stroke={accent} strokeWidth="2" />
      <Label x={150} y={135}>Time</Label>
      <text x="15" y="70" fill={muted} fontSize="10" transform="rotate(-90 15 70)">Velocity</text>
    </svg>
  );
}

function StoppingDistance({}: DiagramProps) {
  return (
    <svg viewBox="0 0 400 80" className="w-full">
      <rect x="20" y="30" width="150" height="25" fill="#fbbf2433" stroke="#f59e0b" strokeWidth="1.5" />
      <rect x="170" y="30" width="210" height="25" fill="#ef444433" stroke="#ef4444" strokeWidth="1.5" />
      <Label x={95} y={47}>Thinking distance</Label>
      <Label x={275} y={47}>Braking distance</Label>
      <text x="20" y="20" fill={accent} fontSize="12">🚗</text>
    </svg>
  );
}

function StatesOfMatter({}: DiagramProps) {
  return (
    <svg viewBox="0 0 400 120" className="w-full">
      {[0, 1, 2].map((col) => {
        const labels = ["Solid", "Liquid", "Gas"];
        const xs = [60, 200, 340];
        return (
          <g key={col}>
            <text x={xs[col]} y="18" textAnchor="middle" fill={accent} fontSize="11" fontWeight="600">{labels[col]}</text>
            {col === 0 && [0, 1, 2, 3, 4, 5].map((i) => (
              <circle key={i} cx={40 + (i % 3) * 14} cy={40 + Math.floor(i / 3) * 14} r="4" fill={accent} />
            ))}
            {col === 1 && [0, 1, 2, 3, 4].map((i) => (
              <circle key={i} cx={175 + (i % 3) * 16} cy={38 + Math.floor(i / 3) * 18} r="4" fill={accent} opacity="0.8" />
            ))}
            {col === 2 && [0, 1, 2, 3].map((i) => (
              <circle key={i} cx={300 + i * 28} cy={35 + (i % 2) * 30} r="4" fill={accent} opacity="0.6" />
            ))}
          </g>
        );
      })}
      <Label x={200} y={110}>Closer packing → higher density</Label>
    </svg>
  );
}

function HeatingCurve({}: DiagramProps) {
  return (
    <svg viewBox="0 0 300 140" className="w-full max-w-sm mx-auto">
      <line x1="40" y1="120" x2="280" y2="120" stroke={muted} strokeWidth="1" />
      <line x1="40" y1="20" x2="40" y2="120" stroke={muted} strokeWidth="1" />
      <path d="M60 100 L100 70 L140 70 L180 40 L220 40 L260 70" fill="none" stroke={accent} strokeWidth="2" />
      <text x="120" y="82" fill={muted} fontSize="8">melting</text>
      <text x="200" y="52" fill={muted} fontSize="8">boiling</text>
      <Label x={150} y={135}>Time →</Label>
      <text x="12" y="70" fill={muted} fontSize="9" transform="rotate(-90 12 70)">Temp</text>
    </svg>
  );
}

function GasPressure({}: DiagramProps) {
  return (
    <svg viewBox="0 0 300 120" className="w-full max-w-sm mx-auto">
      <rect x="80" y="30" width="140" height="70" rx="4" fill={fill} stroke={stroke} strokeWidth="1.5" />
      {[[100, 50], [130, 70], [160, 45], [190, 80], [120, 85], [170, 55]].map(([cx, cy], i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r="3" fill={accent} />
          <line x1={cx} y1={cy} x2={cx > 150 ? 218 : 82} y2={cy + (i % 2 ? 5 : -5)} stroke={accent} strokeWidth="1" markerEnd="url(#arrow)" />
        </g>
      ))}
      <defs>
        <marker id="arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6" fill={accent} />
        </marker>
      </defs>
      <Label x={150} y={115}>Particles collide with walls → pressure</Label>
    </svg>
  );
}

function HalfLifeGraph({}: DiagramProps) {
  return (
    <svg viewBox="0 0 300 140" className="w-full max-w-sm mx-auto">
      <line x1="40" y1="120" x2="280" y2="120" stroke={muted} strokeWidth="1" />
      <line x1="40" y1="20" x2="40" y2="120" stroke={muted} strokeWidth="1" />
      <path d="M50 30 Q120 80 280 110" fill="none" stroke={accent} strokeWidth="2" />
      <line x1="40" y1="75" x2="120" y2="75" stroke="#ef4444" strokeWidth="1" strokeDasharray="4" />
      <line x1="120" y1="75" x2="120" y2="120" stroke="#ef4444" strokeWidth="1" strokeDasharray="4" />
      <Label x={80} y={68}>½ remaining</Label>
      <Label x={150} y={135}>Time</Label>
    </svg>
  );
}

function MotorEffect({}: DiagramProps) {
  return (
    <svg viewBox="0 0 300 120" className="w-full max-w-sm mx-auto">
      <rect x="60" y="40" width="180" height="50" fill={fill} stroke={stroke} strokeWidth="1" />
      <text x="150" y="68" textAnchor="middle" fill={accent} fontSize="11">Wire in magnetic field</text>
      <path d="M150 20 L150 38" stroke="#ef4444" strokeWidth="2" markerEnd="url(#arrow)" />
      <text x="165" y="30" fill="#ef4444" fontSize="10">F</text>
      <Label x={150} y={105}>Fleming's left-hand rule</Label>
    </svg>
  );
}

function RedShift({}: DiagramProps) {
  return (
    <svg viewBox="0 0 300 80" className="w-full max-w-sm mx-auto">
      <rect x="40" y="30" width="60" height="20" fill="#3b82f6" opacity="0.6" />
      <rect x="200" y="30" width="60" height="20" fill="#ef4444" opacity="0.6" />
      <text x="70" y="44" textAnchor="middle" fill="white" fontSize="9">near</text>
      <text x="230" y="44" textAnchor="middle" fill="white" fontSize="9">far</text>
      <path d="M110 40 L190 40" stroke={muted} strokeWidth="1.5" markerEnd="url(#arrow)" />
      <Label x={150} y={70}>Light shifted to longer wavelength (red)</Label>
    </svg>
  );
}

function RateGraph({}: DiagramProps) {
  return (
    <svg viewBox="0 0 300 140" className="w-full max-w-sm mx-auto">
      <line x1="40" y1="120" x2="280" y2="120" stroke={muted} strokeWidth="1" />
      <line x1="40" y1="20" x2="40" y2="120" stroke={muted} strokeWidth="1" />
      <path d="M50 110 Q150 30 270 25" fill="none" stroke={accent} strokeWidth="2" />
      <Label x={150} y={135}>Time</Label>
      <text x="12" y="70" fill={muted} fontSize="9" transform="rotate(-90 12 70)">Mass lost</text>
    </svg>
  );
}

function Polymerisation({}: DiagramProps) {
  return (
    <svg viewBox="0 0 400 80" className="w-full">
      {[0, 1, 2, 3].map((i) => (
        <circle key={i} cx={60 + i * 50} cy="40" r="14" fill={fill} stroke={accent} strokeWidth="1.5" />
      ))}
      <text x="230" y="44" fill={accent} fontSize="16">→</text>
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <rect key={i} x={260 + i * 22} y="28" width="18" height="24" rx="2" fill={fill} stroke={accent} strokeWidth="1" />
      ))}
      <Label x={200} y={72}>Monomers join → polymer chain</Label>
    </svg>
  );
}

function AtmosphereComposition({}: DiagramProps) {
  return (
    <svg viewBox="0 0 300 100" className="w-full max-w-sm mx-auto">
      <rect x="40" y="30" width="156" height="40" fill="#3b82f622" stroke="#3b82f6" strokeWidth="1" />
      <rect x="196" y="30" width="42" height="40" fill="#22c55e22" stroke="#22c55e" strokeWidth="1" />
      <rect x="238" y="30" width="22" height="40" fill="#f59e0b22" stroke="#f59e0b" strokeWidth="1" />
      <Label x={118} y={52}>N₂ 78%</Label>
      <Label x={217} y={52}>O₂ 21%</Label>
      <Label x={249} y={52}>Other</Label>
    </svg>
  );
}

function Reflection({}: DiagramProps) {
  return (
    <svg viewBox="0 0 300 120" className="w-full max-w-sm mx-auto">
      <line x1="40" y1="80" x2="260" y2="80" stroke={accent} strokeWidth="2" />
      <line x1="150" y1="80" x2="100" y2="30" stroke="#f59e0b" strokeWidth="1.5" />
      <line x1="150" y1="80" x2="200" y2="30" stroke="#ef4444" strokeWidth="1.5" />
      <line x1="150" y1="80" x2="150" y2="20" stroke={muted} strokeWidth="1" strokeDasharray="3" />
      <Label x={150} y={110}>Angle of incidence = angle of reflection</Label>
    </svg>
  );
}

function PunnettSquare({}: DiagramProps) {
  return (
    <svg viewBox="0 0 200 140" className="w-full max-w-xs mx-auto">
      <rect x="60" y="40" width="50" height="50" fill="#22c55e33" stroke={stroke} strokeWidth="1" />
      <rect x="110" y="40" width="50" height="50" fill="#22c55e22" stroke={stroke} strokeWidth="1" />
      <rect x="60" y="90" width="50" height="50" fill="#22c55e22" stroke={stroke} strokeWidth="1" />
      <rect x="110" y="90" width="50" height="50" fill="#ef444433" stroke={stroke} strokeWidth="1" />
      <text x="85" y="70" textAnchor="middle" fill={accent} fontSize="11">Bb</text>
      <text x="135" y="70" textAnchor="middle" fill={accent} fontSize="11">Bb</text>
      <text x="85" y="120" textAnchor="middle" fill={accent} fontSize="11">Bb</text>
      <text x="135" y="120" textAnchor="middle" fill={accent} fontSize="11">bb</text>
      <Label x={100} y={25}>3:1 phenotype ratio</Label>
    </svg>
  );
}

function SankeyDiagram({}: DiagramProps) {
  return (
    <svg viewBox="0 0 300 100" className="w-full max-w-sm mx-auto">
      <rect x="20" y="35" width="80" height="30" fill={accent} opacity="0.3" />
      <path d="M100 50 L200 30 L200 45 L260 45 L260 55 L200 55 L200 70 L100 50" fill="#ef444433" stroke="#ef4444" strokeWidth="1" />
      <path d="M100 50 L200 30 L260 30 L260 40 L200 40 L100 50" fill="#22c55e33" stroke="#22c55e" strokeWidth="1" />
      <Label x={55} y={52}>Input</Label>
      <Label x={230} y={35}>Useful</Label>
      <Label x={230} y={62}>Wasted</Label>
    </svg>
  );
}

function IvGraph({}: DiagramProps) {
  return (
    <svg viewBox="0 0 300 140" className="w-full max-w-sm mx-auto">
      <line x1="40" y1="120" x2="280" y2="120" stroke={muted} strokeWidth="1" />
      <line x1="40" y1="20" x2="40" y2="120" stroke={muted} strokeWidth="1" />
      <line x1="50" y1="110" x2="250" y2="30" stroke={accent} strokeWidth="2" />
      <path d="M50 110 Q150 60 250 35" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4" />
      <Label x={150} y={135}>Voltage</Label>
    </svg>
  );
}

function MoleTriangle({}: DiagramProps) {
  return (
    <svg viewBox="0 0 200 140" className="w-full max-w-xs mx-auto">
      <polygon points="100,30 170,110 30,110" fill={fill} stroke={accent} strokeWidth="1.5" />
      <text x="100" y="55" textAnchor="middle" fill={accent} fontSize="11">m (mass)</text>
      <text x="65" y="100" textAnchor="middle" fill={accent} fontSize="11">Mr</text>
      <text x="135" y="100" textAnchor="middle" fill={accent} fontSize="11">n (moles)</text>
      <Label x={100} y={130}>n = m ÷ Mr</Label>
    </svg>
  );
}

function ReactivitySeries({}: DiagramProps) {
  const metals = ["K", "Na", "Ca", "Mg", "Al", "Zn", "Fe", "H", "Cu", "Ag"];
  return (
    <svg viewBox="0 0 120 280" className="w-full max-w-xs mx-auto">
      {metals.map((m, i) => (
        <g key={m}>
          <rect x="30" y={20 + i * 24} width="60" height="20" rx="3" fill={fill} stroke={stroke} strokeWidth="1" />
          <text x="60" y={34 + i * 24} textAnchor="middle" fill={accent} fontSize="10">{m}</text>
        </g>
      ))}
      <text x="60" y="268" textAnchor="middle" fill={muted} fontSize="9">Most reactive ↑</text>
    </svg>
  );
}