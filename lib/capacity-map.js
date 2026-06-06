// Action Capacity Map — Data Model
// Each node represents one action capacity a student can develop.
// Tiers: 0=hidden, 1=Awareness, 2=Response, 3=Reliability, 4=Transfer

export const tierLabels = ["Hidden", "Awareness", "Response", "Reliability", "Transfer"];
export const tierColors = ["", "#7C7770", "#D8D2C8", "#F4F1EA", "#39FF14"];

const capacities = [
  // ROOT: Foundational
  {
    id: "connection",
    name: "Maintaining Connection",
    description: "Staying in contact with a resisting partner without losing connection",
    phase: 1,
    position: "Foundation",
    prerequisites: [],
    compounds: [],
    x: 400, y: 30,
  },
  {
    id: "head-safety",
    name: "Head Safety & Spatial Awareness",
    description: "Keeping your head protected while tracking your partner",
    phase: 1,
    position: "Foundation",
    prerequisites: [],
    compounds: [],
    x: 250, y: 120,
  },
  {
    id: "base-stability",
    name: "Base & Balance",
    description: "Maintaining your base when someone tries to move you",
    phase: 1,
    position: "Foundation",
    prerequisites: [],
    compounds: [],
    x: 550, y: 120,
  },

  // PHASE 1: Threshold & Connection
  {
    id: "frames",
    name: "Frames & Structure",
    description: "Using arms and legs to create distance and protect your torso",
    phase: 1,
    position: "Guard",
    prerequisites: ["connection"],
    compounds: [],
    x: 180, y: 230,
  },
  {
    id: "off-balancing",
    name: "Off-Balancing (Kuzushi)",
    description: "Drawing reactions from your partner by disrupting their structure",
    phase: 1,
    position: "Guard",
    prerequisites: ["connection"],
    compounds: ["connection", "base-stability"],
    x: 400, y: 230,
    compound_label: "Connection + Base Stability",
  },
  {
    id: "distance-management",
    name: "Distance Management",
    description: "Controlling the space between you and your partner with your feet",
    phase: 2,
    position: "Guard",
    prerequisites: ["frames"],
    compounds: [],
    x: 620, y: 230,
  },

  // PHASE 2: Force Dissipation
  {
    id: "stand-up",
    name: "Standing Up Under Pressure",
    description: "Getting to your feet when someone is trying to hold you down",
    phase: 2,
    position: "Guard",
    prerequisites: ["frames", "off-balancing"],
    compounds: [],
    x: 80, y: 350,
  },
  {
    id: "shield-retention",
    name: "Shield Retention (Half Guard)",
    description: "Maintaining the knee shield to prevent chest-to-chest contact",
    phase: 2,
    position: "Half Guard",
    prerequisites: ["frames", "distance-management"],
    compounds: [],
    x: 270, y: 350,
  },
  {
    id: "redirect-force",
    name: "Force Redirection",
    description: "Using the opponent's forward pressure against them",
    phase: 2,
    position: "Guard",
    prerequisites: ["off-balancing"],
    compounds: [],
    x: 470, y: 350,
  },
  {
    id: "sweeping",
    name: "Sweeping from Guard",
    description: "Reversing position from bottom using leverage",
    phase: 2,
    position: "Guard",
    prerequisites: ["redirect-force", "distance-management"],
    compounds: ["redirect-force", "stand-up"],
    x: 650, y: 350,
    compound_label: "Force Redirection + Stand Up",
  },

  // PHASE 3: Adaptive Architecture
  {
    id: "front-headlock",
    name: "Front Headlock Offense",
    description: "Taking the back from front headlock position",
    phase: 3,
    position: "Turtle",
    prerequisites: ["base-stability", "connection"],
    compounds: [],
    x: 100, y: 470,
  },
  {
    id: "back-control",
    name: "Back Control & Escape",
    description: "Maintaining back position and escaping it",
    phase: 3,
    position: "Back",
    prerequisites: ["front-headlock"],
    compounds: [],
    x: 280, y: 470,
  },
  {
    id: "turtle-defense",
    name: "Turtle Defense",
    description: "Covering and recovering from the turtle position",
    phase: 3,
    position: "Turtle",
    prerequisites: ["front-headlock"],
    compounds: [],
    x: 500, y: 470,
  },
  {
    id: "scramble-management",
    name: "Scramble Management",
    description: "Staying calm and systematic under chaotic transitions",
    phase: 3,
    position: "Scramble",
    prerequisites: ["base-stability", "connection"],
    compounds: [],
    x: 680, y: 470,
  },

  // PHASE 4: Inner Crucible
  {
    id: "back-finishing",
    name: "Back Finishing",
    description: "Submitting from back control with patience and precision",
    phase: 4,
    position: "Back",
    prerequisites: ["back-control"],
    compounds: [],
    x: 180, y: 580,
  },
  {
    id: "triangle-finishing",
    name: "Triangle Finishing",
    description: "Setting up and finishing the triangle choke from guard",
    phase: 4,
    position: "Guard",
    prerequisites: ["off-balancing", "sweeping"],
    compounds: [],
    x: 380, y: 580,
  },
  {
    id: "no-knees-movement",
    name: "Surface Adaptability",
    description: "Moving effectively without relying on predictable base points",
    phase: 4,
    position: "Scramble",
    prerequisites: ["scramble-management"],
    compounds: [],
    x: 560, y: 580,
  },
  {
    id: "creative-adaptation",
    name: "Novel Position Adaptation",
    description: "Solving movement problems from unfamiliar starting positions",
    phase: 4,
    position: "Scramble",
    prerequisites: ["scramble-management", "base-stability"],
    compounds: ["scramble-management", "sweeping"],
    x: 720, y: 580,
    compound_label: "Scramble + Sweeping",
  },
];

export default capacities;

export function getReachable(allocated) {
  return capacities.filter(c => {
    if (allocated[c.id] && allocated[c.id] >= 1) return false;
    if (!c.prerequisites || c.prerequisites.length === 0) return true;
    return c.prerequisites.every(preId => {
      const tier = allocated[preId] || 0;
      return tier >= 3;
    });
  });
}

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
