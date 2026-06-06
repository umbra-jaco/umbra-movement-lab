// Capacity Map — Scoring, Weighting & Benchmark Profiles
// Coach-use only. Not student-facing.

export const tierLabels = ["Hidden", "Awareness", "Response", "Reliability", "Transfer"];
export const tierColors = ["", "#7C7770", "#D8D2C8", "#F4F1EA", "#39FF14"];

// Weight categories
// Foundation = 3 (non-negotiable)
// Core = 2 (every competent grappler)
// Advanced = 1.5 (differentiates skill levels)
// Specialized = 1 (playstyle-specific)
export const weights = {
  connection: 3,
  "head-safety": 2,
  "base-stability": 3,

  "grip-fighting": 2,
  "two-on-one": 1.5,
  "level-changing": 2,
  "snap-down": 1.5,
  "single-leg": 1.5,
  "hip-throw": 1,

  frames: 3,
  "off-balancing": 3,
  "distance-management": 2,
  "shield-retention": 2,
  "redirect-force": 2.5,
  "stand-up": 2.5,
  sweeping: 2.5,
  "guard-to-mount": 1.5,
  "triangle-finishing": 1.5,

  "side-control": 2,
  mount: 2,
  "submission-pressure": 2,
  "mount-transitions": 1.5,
  "mount-submissions": 1.5,
  "back-control": 2.5,
  "back-finishing": 2,

  "front-headlock": 2,
  "turtle-breakdown": 1.5,
  "turtle-defense": 1.5,

  "scramble-management": 2.5,
  "surface-adaptability": 1.5,
  "creative-adaptation": 1.5,

  "head-positioning": 1.5,
  "clinch-control": 1.5,
  "striking-range": 1.5,
};

// ── Benchmark Profiles ──
// Each benchmark defines a getTier(id) function that returns the expected tier for that skill.

export const benchmarks = {
  beginner: {
    name: "Beginner (White Belt)",
    desc: "First 6 months. Foundation and awareness of core positions.",
    getTier: (id, w) => {
      if (w >= 3) return 2;
      if (w >= 2) return 1;
      return 0;
    }
  },
  average: {
    name: "Average Grappler",
    desc: "Recreational practitioner, trains 2-3x/week. Has basics but gaps in scrambling, standup, recovery.",
    getTier: (id, w) => {
      if (w >= 3) return 3;
      if (w >= 2.5) return 2;
      if (w >= 2) return 1;
      return 0;
    }
  },
  intermediate: {
    name: "Solid Competitor",
    desc: "Compete regularly. Strong guard, passing, and pinning. Weaker scrambled and striking awareness.",
    getTier: (id, w) => {
      const isWeakDomain = id.includes("scramble") || id.includes("striking") || id.includes("head-positioning") || id.includes("clinch");
      if (w >= 3) return 4;
      if (w >= 2.5) return isWeakDomain ? 2 : 3;
      if (w >= 2) return isWeakDomain ? 1 : 2;
      if (w >= 1.5) return isWeakDomain ? 0 : 1;
      return 0;
    }
  },
  elite: {
    name: "Elite Grappler",
    desc: "High-level competitor or coach. Strong across all domains. Minor gaps in striking awareness.",
    getTier: (id, w) => {
      const isStriking = id.includes("striking") || id.includes("head-positioning") || id.includes("clinch");
      if (w >= 3) return 4;
      if (w >= 2.5) return 4;
      if (w >= 2) return isStriking ? 2 : 3;
      if (w >= 1.5) return isStriking ? 1 : 2;
      return 1;
    }
  },
  highest: {
    name: "Highest Level",
    desc: "Complete grappler. All domains at Transfer tier. The ceiling of the map.",
    getTier: (id, w) => 4,
  }
};

// ── Scoring Engine ──

const capacitiesList = [
  { id: "connection", name: "Maintaining Connection", branch: "foundation", phase: 1 },
  { id: "head-safety", name: "Head Safety & Awareness", branch: "foundation", phase: 1 },
  { id: "base-stability", name: "Base & Balance", branch: "foundation", phase: 1 },
  { id: "grip-fighting", name: "Grip Fighting", branch: "standing", phase: 1 },
  { id: "two-on-one", name: "Two-on-One Control", branch: "standing", phase: 2 },
  { id: "level-changing", name: "Level Changing", branch: "standing", phase: 2 },
  { id: "snap-down", name: "Snap Down", branch: "standing", phase: 2 },
  { id: "single-leg", name: "Single Leg Takedown", branch: "standing", phase: 3 },
  { id: "hip-throw", name: "Hip Throw Entry", branch: "standing", phase: 3 },
  { id: "frames", name: "Frames & Structure", branch: "guard", phase: 1 },
  { id: "off-balancing", name: "Off-Balancing (Kuzushi)", branch: "guard", phase: 1 },
  { id: "distance-management", name: "Distance Management", branch: "guard", phase: 2 },
  { id: "shield-retention", name: "Shield Retention", branch: "guard", phase: 2 },
  { id: "redirect-force", name: "Force Redirection", branch: "guard", phase: 2 },
  { id: "stand-up", name: "Standing Up Under Pressure", branch: "guard", phase: 2 },
  { id: "sweeping", name: "Sweeping from Guard", branch: "guard", phase: 3 },
  { id: "guard-to-mount", name: "Guard to Mount Transition", branch: "guard", phase: 3 },
  { id: "triangle-finishing", name: "Triangle Finishing", branch: "guard", phase: 4 },
  { id: "side-control", name: "Side Control Maintenance", branch: "pinning", phase: 2 },
  { id: "mount", name: "Mount Position", branch: "pinning", phase: 2 },
  { id: "submission-pressure", name: "Submission Pressure", branch: "pinning", phase: 3 },
  { id: "mount-transitions", name: "Mount Transitions", branch: "pinning", phase: 3 },
  { id: "mount-submissions", name: "Mount Finishing", branch: "pinning", phase: 4 },
  { id: "back-control", name: "Back Control & Escape", branch: "pinning", phase: 3 },
  { id: "back-finishing", name: "Back Finishing", branch: "pinning", phase: 4 },
  { id: "front-headlock", name: "Front Headlock Offense", branch: "turtle", phase: 3 },
  { id: "turtle-breakdown", name: "Turtle Breakdown", branch: "turtle", phase: 3 },
  { id: "turtle-defense", name: "Turtle Recovery", branch: "turtle", phase: 4 },
  { id: "scramble-management", name: "Scramble Management", branch: "scramble", phase: 3 },
  { id: "surface-adaptability", name: "Surface Adaptability", branch: "scramble", phase: 4 },
  { id: "creative-adaptation", name: "Novel Position Adaptation", branch: "scramble", phase: 4 },
  { id: "head-positioning", name: "Striking Head Position", branch: "striking", phase: 3 },
  { id: "clinch-control", name: "Clinch Control", branch: "striking", phase: 3 },
  { id: "striking-range", name: "Striking Range Management", branch: "striking", phase: 4 },
];

export function calculateScore(allocated, benchmark = null) {
  let totalWeight = 0;
  let earnedPoints = 0;
  let branchScores = {};

  capacitiesList.forEach(c => {
    const w = weights[c.id] || 1;
    totalWeight += w * 4;

    const studentTier = allocated[c.id] || 0;
    const maxTier = benchmark ? benchmark.getTier(c.id, w) : 4;
    const actualTier = Math.min(studentTier, maxTier);

    earnedPoints += actualTier * w;

    if (!branchScores[c.branch]) branchScores[c.branch] = { earned: 0, max: 0 };
    branchScores[c.branch].earned += actualTier * w;
    branchScores[c.branch].max += maxTier * w;
  });

  const overall = Math.round((earnedPoints / totalWeight) * 100);

  const branches = {};
  Object.entries(branchScores).forEach(([key, val]) => {
    branches[key] = Math.round((val.earned / val.max) * 100);
  });

  return {
    overall,
    earnedPoints,
    totalWeight,
    branches,
    tierDistribution: {
      transfer: Object.values(allocated).filter(t => t >= 4).length,
      reliability: Object.values(allocated).filter(t => t >= 3).length,
      response: Object.values(allocated).filter(t => t >= 2).length,
      awareness: Object.values(allocated).filter(t => t >= 1).length,
      hidden: capacitiesList.length - Object.values(allocated).filter(t => t >= 1).length,
    }
  };
}

export function evaluateAllBenchmarks(allocated) {
  const results = [];
  Object.entries(benchmarks).forEach(([key, bm]) => {
    const score = calculateScore(allocated, bm);
    results.push({
      key,
      name: bm.name,
      desc: bm.desc,
      score: score.overall,
      branches: score.branches,
    });
  });
  return results;
}
