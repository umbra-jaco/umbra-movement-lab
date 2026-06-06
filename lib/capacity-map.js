// Action Capacity Map v2 — Expanded Data Model
// 36 nodes across 5 branches + foundation. localStorage-backed. Archetype presets.

export const tierLabels = ["Hidden", "Awareness", "Response", "Reliability", "Transfer"];
export const tierColors = ["", "#7C7770", "#D8D2C8", "#F4F1EA", "#39FF14"];

export const archetypes = {
  "guard-player": {
    name: "The Guard Player",
    desc: "Begins with guard-feel. Prioritizes frames, sweeps, and submissions from bottom.",
    starterNodes: ["connection", "frames"],
    recommendedPath: ["connection", "frames", "off-balancing", "distance-management", "redirect-force", "shield-retention", "sweeping", "triangle-finishing"]
  },
  "pressure-player": {
    name: "The Pressure Player",
    desc: "Begins with base and connection. Prioritizes pins, top pressure, and back takes.",
    starterNodes: ["connection", "base-stability"],
    recommendedPath: ["connection", "base-stability", "side-control", "mount", "mount-transitions", "mount-submissions", "back-control", "back-finishing"]
  },
  "scrambler": {
    name: "The Scrambler",
    desc: "Begins with space and awareness. Prioritizes transitions, standup, and creativity.",
    starterNodes: ["head-safety", "connection"],
    recommendedPath: ["connection", "head-safety", "scramble-management", "stand-up", "level-changing", "single-leg", "creative-adaptation", "surface-adaptability"]
  },
};

const capacities = [
  // ═══════════════════════════════════════════
  // ROOT: Foundational (Phase 1, top of tree)
  // ═══════════════════════════════════════════

  {
    id: "connection",
    name: "Maintaining Connection",
    desc: "Staying in contact with a resisting partner without losing connection",
    short: "Touch & stay",
    phase: 1, branch: "foundation",
    prereqs: [], compounds: [],
    x: 330, y: 20,
    games: ["wrist-connection", "forehead-tag"]
  },
  {
    id: "head-safety",
    name: "Head Safety & Awareness",
    desc: "Protecting your head while tracking your partner's position and movement",
    short: "Keep your head",
    phase: 1, branch: "foundation",
    prereqs: [], compounds: [],
    x: 500, y: 20,
    games: ["forehead-tag", "belly-forehead-tag"]
  },
  {
    id: "base-stability",
    name: "Base & Balance",
    desc: "Maintaining your base when someone tries to move you",
    short: "Stay rooted",
    phase: 1, branch: "foundation",
    prereqs: [], compounds: [],
    x: 670, y: 20,
    games: ["base-and-balance"]
  },

  // ═══════════════════════════════════════════
  // BRANCH 1: STANDING / TAKEDOWNS
  // ═══════════════════════════════════════════

  {
    id: "grip-fighting",
    name: "Grip Fighting",
    desc: "Winning the hand-fighting battle to control distance and entries",
    short: "Win the hands",
    phase: 1, branch: "standing",
    prereqs: ["connection"], compounds: [],
    x: 50, y: 140,
    games: ["wrist-connection", "poopy-hands"]
  },
  {
    id: "two-on-one",
    name: "Two-on-One Control",
    desc: "Using an asymmetric grip advantage to control your partner's posture and set up entries",
    short: "Asymmetric grip",
    phase: 2, branch: "standing",
    prereqs: ["grip-fighting"], compounds: [],
    x: 20, y: 250,
    games: ["poopy-hands"]
  },
  {
    id: "level-changing",
    name: "Level Changing",
    desc: "Dropping your hips and changing elevation without losing structure",
    short: "Change levels",
    phase: 2, branch: "standing",
    prereqs: ["base-stability"], compounds: [],
    x: 110, y: 250,
    games: ["base-and-balance"]
  },
  {
    id: "snap-down",
    name: "Snap Down",
    desc: "Using head and hand control to break your partner's posture to the mat",
    short: "Break them down",
    phase: 2, branch: "standing",
    prereqs: ["grip-fighting", "head-safety"], compounds: [],
    x: 80, y: 360,
    games: []
  },
  {
    id: "single-leg",
    name: "Single Leg Takedown",
    desc: "Entering, lifting, and finishing a single leg takedown",
    short: "One leg up",
    phase: 3, branch: "standing",
    prereqs: ["level-changing", "two-on-one"], compounds: [],
    compounds: ["two-on-one", "level-changing"],
    compound_label: "Two-on-One + Level Change",
    x: 50, y: 470,
    games: []
  },
  {
    id: "hip-throw",
    name: "Hip Throw Entry",
    desc: "Using hip contact and rotation to off-balance and throw",
    short: "Rotate and throw",
    phase: 3, branch: "standing",
    prereqs: ["grip-fighting", "base-stability"], compounds: [],
    x: 140, y: 470,
    games: []
  },

  // ═══════════════════════════════════════════
  // BRANCH 2: GUARD
  // ═══════════════════════════════════════════

  {
    id: "frames",
    name: "Frames & Structure",
    desc: "Using arms and legs to create distance and protect your torso",
    short: "Build a shelf",
    phase: 1, branch: "guard",
    prereqs: ["connection"], compounds: [],
    x: 270, y: 140,
    games: ["structure-connections"]
  },
  {
    id: "off-balancing",
    name: "Off-Balancing (Kuzushi)",
    desc: "Drawing reactions from your partner by disrupting their structure and weight distribution",
    short: "Pull them off",
    phase: 1, branch: "guard",
    prereqs: ["connection"], compounds: [],
    x: 400, y: 140,
    games: ["causing-posts"]
  },
  {
    id: "distance-management",
    name: "Distance Management",
    desc: "Controlling the space between you with your feet and shins",
    short: "Feet first",
    phase: 2, branch: "guard",
    prereqs: ["frames"], compounds: [],
    x: 230, y: 250,
    games: ["shin-surfing"]
  },
  {
    id: "shield-retention",
    name: "Shield Retention",
    desc: "Maintaining the knee shield in half guard to prevent chest-to-chest contact",
    short: "Keep the shield",
    phase: 2, branch: "guard",
    prereqs: ["frames", "distance-management"], compounds: [],
    x: 340, y: 250,
    games: ["ball-of-yarn"]
  },
  {
    id: "redirect-force",
    name: "Force Redirection",
    desc: "Using your opponent's forward pressure and momentum against them",
    short: "Redirect their weight",
    phase: 2, branch: "guard",
    prereqs: ["off-balancing"], compounds: [],
    x: 460, y: 250,
    games: ["open-guard-sweeping"]
  },
  {
    id: "stand-up",
    name: "Standing Up Under Pressure",
    desc: "Getting to your feet when someone is trying to hold you down",
    short: "Get up",
    phase: 2, branch: "guard",
    prereqs: ["frames", "off-balancing"], compounds: [],
    compounds: ["frames", "off-balancing"],
    compound_label: "Frames + Off-Balancing",
    x: 270, y: 360,
    games: ["hip-pinch-standup"]
  },
  {
    id: "sweeping",
    name: "Sweeping from Guard",
    desc: "Reversing position from bottom using leverage and timing",
    short: "Reverse the position",
    phase: 3, branch: "guard",
    prereqs: ["redirect-force", "distance-management"], compounds: [],
    x: 400, y: 360,
    games: ["open-guard-sweeping"]
  },
  {
    id: "guard-to-mount",
    name: "Guard to Mount Transition",
    desc: "Transitioning from sweeping or passing directly into mount position",
    short: "Sweep to mount",
    phase: 3, branch: "guard",
    prereqs: ["sweeping"], compounds: [],
    x: 350, y: 470,
    games: []
  },
  {
    id: "triangle-finishing",
    name: "Triangle Finishing",
    desc: "Setting up and finishing the triangle choke from closed guard",
    short: "Lock the triangle",
    phase: 4, branch: "guard",
    prereqs: ["off-balancing", "sweeping"], compounds: [],
    x: 400, y: 570,
    games: ["triangle"]
  },

  // ═══════════════════════════════════════════
  // BRANCH 3: CONTROL / PINNING
  // ═══════════════════════════════════════════

  {
    id: "side-control",
    name: "Side Control Maintenance",
    desc: "Stabilizing and maintaining side control position against escapes",
    short: "Hold and control",
    phase: 2, branch: "pinning",
    prereqs: ["base-stability"], compounds: [],
    x: 570, y: 140,
    games: []
  },
  {
    id: "mount",
    name: "Mount Position",
    desc: "Establishing and maintaining mount with proper weight distribution",
    short: "Take the top",
    phase: 2, branch: "pinning",
    prereqs: ["base-stability", "connection"], compounds: [],
    x: 700, y: 140,
    games: []
  },
  {
    id: "submission-pressure",
    name: "Submission Pressure",
    desc: "Creating conditions that force your partner to expose submission opportunities",
    short: "Force the opening",
    phase: 3, branch: "pinning",
    prereqs: ["side-control"], compounds: [],
    x: 540, y: 250,
    games: ["submission-hunting-back"]
  },
  {
    id: "mount-transitions",
    name: "Mount Transitions",
    desc: "Moving between low mount, high mount, and technical mount",
    short: "Climb the mount",
    phase: 3, branch: "pinning",
    prereqs: ["mount"], compounds: [],
    x: 670, y: 250,
    games: []
  },
  {
    id: "mount-submissions",
    name: "Mount Finishing",
    desc: "Finishing submissions from mount position (arm bars, chokes)",
    short: "Finish from top",
    phase: 4, branch: "pinning",
    prereqs: ["mount-transitions", "submission-pressure"], compounds: [],
    compounds: ["mount-transitions", "submission-pressure"],
    compound_label: "Mount Transitions + Submission Pressure",
    x: 640, y: 360,
    games: []
  },
  {
    id: "back-control",
    name: "Back Control & Escape",
    desc: "Taking and maintaining back control, and escaping when someone has yours",
    short: "Take the back",
    phase: 3, branch: "pinning",
    prereqs: ["connection", "base-stability"], compounds: [],
    x: 600, y: 360,
    games: ["hip-and-shoulder", "front-headlock-back"]
  },
  {
    id: "back-finishing",
    name: "Back Finishing",
    desc: "Finishing from back control (RNC, bow-and-arrow) with patience and precision",
    short: "Finish from back",
    phase: 4, branch: "pinning",
    prereqs: ["back-control"], compounds: [],
    x: 630, y: 470,
    games: ["submission-hunting-back"]
  },

  // ═══════════════════════════════════════════
  // BRANCH 4: TURTLE / DEFENSE
  // ═══════════════════════════════════════════

  {
    id: "front-headlock",
    name: "Front Headlock Offense",
    desc: "Attacking from the front headlock position and taking the back",
    short: "Headlock attack",
    phase: 3, branch: "turtle",
    prereqs: ["connection", "head-safety"], compounds: [],
    compounds: ["connection", "head-safety"],
    compound_label: "Connection + Head Safety",
    x: 780, y: 250,
    games: ["front-headlock-back", "cover-head-shoulders"]
  },
  {
    id: "turtle-breakdown",
    name: "Turtle Breakdown",
    desc: "Breaking the turtle position to establish chest-to-back contact",
    short: "Open the turtle",
    phase: 3, branch: "turtle",
    prereqs: ["front-headlock"], compounds: [],
    x: 800, y: 360,
    games: ["cover-head-shoulders"]
  },
  {
    id: "turtle-defense",
    name: "Turtle Recovery",
    desc: "Recovering guard or standing up from the turtle position",
    short: "Recover from turtle",
    phase: 4, branch: "turtle",
    prereqs: ["front-headlock", "stand-up"], compounds: [],
    x: 780, y: 470,
    games: ["cover-head-shoulders"]
  },

  // ═══════════════════════════════════════════
  // BRANCH 5: SCRAMBLE / ADAPTABILITY
  // ═══════════════════════════════════════════

  {
    id: "scramble-management",
    name: "Scramble Management",
    desc: "Staying calm and systematic under chaotic transitions and unpredictable movement",
    short: "Stay calm in chaos",
    phase: 3, branch: "scramble",
    prereqs: ["base-stability", "connection"], compounds: [],
    compounds: ["base-stability", "connection"],
    compound_label: "Base Stability + Connection",
    x: 140, y: 580,
    games: ["ankle-wars", "creative-starts"]
  },
  {
    id: "surface-adaptability",
    name: "Surface Adaptability",
    desc: "Moving effectively without relying on predictable base points (knees, hands)",
    short: "Move anywhere",
    phase: 4, branch: "scramble",
    prereqs: ["scramble-management"], compounds: [],
    x: 80, y: 680,
    games: ["no-knees"]
  },
  {
    id: "creative-adaptation",
    name: "Novel Position Adaptation",
    desc: "Solving movement problems from unfamiliar starting positions",
    short: "Solve the unknown",
    phase: 4, branch: "scramble",
    prereqs: ["scramble-management", "sweeping"], compounds: [],
    compounds: ["scramble-management", "sweeping"],
    compound_label: "Scramble + Sweeping",
    x: 230, y: 680,
    games: ["creative-starts"]
  },

  // ═══════════════════════════════════════════
  // BRANCH 6: STRIKING AWARENESS (UMBRA-Specific)
  // ═══════════════════════════════════════════

  {
    id: "head-positioning",
    name: "Striking Head Position",
    desc: "Keeping your head safe and hidden while managing distance in striking range",
    short: "Hide your head",
    phase: 3, branch: "striking",
    prereqs: ["head-safety"], compounds: [],
    x: 910, y: 250,
    games: ["belly-forehead-tag"]
  },
  {
    id: "clinch-control",
    name: "Clinch Control",
    desc: "Managing the clinch range — head position, underhooks, and pummeling",
    short: "Win the clinch",
    phase: 3, branch: "striking",
    prereqs: ["connection", "head-positioning"], compounds: [],
    x: 920, y: 360,
    games: []
  },
  {
    id: "striking-range",
    name: "Striking Range Management",
    desc: "Understanding when you are in punching range and how to exit or enter safely",
    short: "Know the range",
    phase: 4, branch: "striking",
    prereqs: ["head-positioning", "distance-management"], compounds: [],
    compounds: ["head-positioning", "distance-management"],
    compound_label: "Head Position + Distance Management",
    x: 900, y: 470,
    games: []
  },
];

export default capacities;

/* ── Helpers ── */

// Build edge list from prereqs + compounds
export function buildEdges(caps) {
  const edges = [];
  caps.forEach(c => {
    (c.prereqs || []).forEach(preId => {
      const pre = caps.find(p => p.id === preId);
      if (pre) edges.push({ from: pre, to: c, type: "prerequisite" });
    });
    if (c.compounds && c.compounds.length === 2) {
      const cp1 = caps.find(p => p.id === c.compounds[0]);
      const cp2 = caps.find(p => p.id === c.compounds[1]);
      if (cp1 && cp2) edges.push({ from: cp1, to: c, type: "compound" });
      if (cp2 && cp2) edges.push({ from: cp2, to: c, type: "compound" });
    }
  });
  return edges;
}

// Which nodes are reachable given current allocations
export function getReachable(allocated, caps) {
  const nodes = caps || capacities;
  return nodes.filter(c => {
    if (allocated[c.id] && allocated[c.id] >= 1) return false;
    if (!c.prereqs || c.prereqs.length === 0) return true;
    return c.prereqs.every(preId => (allocated[preId] || 0) >= 3);
  }).map(c => c.id);
}

// Tier counts
export function getTierCount(allocated) {
  let awareness = 0, response = 0, reliability = 0, transfer = 0;
  Object.values(allocated).forEach(t => {
    if (t >= 1) awareness++;
    if (t >= 2) response++;
    if (t >= 3) reliability++;
    if (t >= 4) transfer++;
  });
  return { awareness, response, reliability, transfer, total: capacities.length };
}

// Branch color accent
export const branchColors = {
  standing: "#B1121B",
  guard: "#D8D2C8",
  pinning: "#F4F1EA",
  turtle: "#7C7770",
  scramble: "#39FF14",
  striking: "#B1121B",
  foundation: "#A8A199",
};

export const branchLabels = {
  standing: "STANDING & TAKEDOWNS",
  guard: "GUARD WORK",
  pinning: "CONTROL & PINNING",
  turtle: "TURTLE & DEFENSE",
  scramble: "SCRAMBLE & ADAPTABILITY",
  striking: "STRIKING AWARENESS",
  foundation: "FOUNDATION",
};
