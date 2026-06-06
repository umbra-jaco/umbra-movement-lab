# UMBRA Site: Human Translation for Lead Generation

> **Goal:** Make the site feel more human and natural — preserving UMBRA's unique character while translating the clinical/academic language into copy that resonates with people interested in wellness, fitness, yoga, philosophy, and self-improvement. Drive leads (booking inquiries).

> **Core Approach:** Layer the copy — warm, human hooks at the top of each page draw people in; the deeper esoteric content stays accessible below for those who want it. Don't remove the uniqueness, just make the front door welcoming.

> **Credentialled:** GitHub push access enabled. Cloudflare API configured. Deployment: push to `orion` branch → Cloudflare auto-builds.

---

## Tone Audit: Current State

| Page | Current Vibe | Problem |
|------|-------------|---------|
| **Homepage** `/` | Mostly good — warm, concrete ("pop-up lab", dates, prices) | Needs small human touches |
| **Philosophy** `/philosophy` | Academic — full ecological dynamics bento grid, Gibson/Turvey/Gray/Souders cards | Reads like a research paper, not a movement studio |
| **Curriculum** `/curriculum` | Clinical — "Immediate live resistance through strict constraints", Lagrangian equations | Intimidating jargon, no human entry point |
| **Lab** `/lab` | Esoteric — "Photometric Occlusion", "Zero-Mirror Policy" | Feels exclusive, not inviting |
| **Program** `/program` | Most esoteric — "Protocol: Inner Crucible", "Haptic Dominance Over Optic Reliance" | No sense of what a beginner actually experiences |
| **Lexicon** `/lexicon` | Glossary — 30+ academic terms with clinical definitions | Pure reference; no human context |
| **Codex** `/codex` | Internal roadmap / terminal aesthetic | Not visible to casual visitors |
| **Book** `/book` | Good — functional, clean | Minor polish |

---

## Principles for Translation

1. **Front-load the human benefit** — every page opens with: "What does this mean for you?"
2. **Keep the depth** — the bento grids, lexicon definitions, and curriculum phases stay. People who scroll deep *want* the depth.
3. **No jargon without translation** — every technical term gets a plain-English sibling on first use.
4. **Replace the "we" focus with "you" focus** — shift from "we reject X" to "you discover Y".
5. **Preserve the aesthetic** — visuals, animations, layout, colors stay identical. Only copy changes.

---

## Task 1: Hompage — Warm the CTAs & Intro

**Files:** `app/page.tsx`

**Current:** "A Human-Centric Movement Lab" — good, keep this.

**Changes:**
- Replace the first paragraph block: `"What is Umbra? Right now, it is a pop-up lab... This 4-week program explores the full spectrum of martial movement…"` is actually already good. Minor polish only.
- Change button labels:
  - "Secure Your Spot" → "Book Your Spot"
  - "Follow Us" → "Follow @umbramovement"
  - "Email Us" → "Ask a Question"
- Add a tagline below the phone: "No experience needed. Just curiosity."

## Task 2: Philosophy — Add a Human Entry Point

**Files:** `app/philosophy/page.jsx`

**Current opening:** "Movement is a Physical Truth. UMBRA is a laboratory for human-centric movement. We explicitly reject the ego-driven vernacular and overt aggression of traditional combat sports."

**Translation:** Replace the hero paragraph with a warm bridge, then let the bento grid remain.

```tsx
// New hero paragraph (replaces lines 18-20):
<p className="max-w-2xl text-lg md:text-xl text-neutral-400 leading-relaxed font-light">
    Most people think martial arts is about learning to fight.
    We think it's about learning to <i>move</i>, <i>breathe</i>, and <i>adapt</i> — 
    and the fighting comes as a natural side effect.
    <br/><br/>
    No rigid forms. No memorized sequences. Just you, a problem to solve,
    and your body figuring it out in real time.
</p>
```

- Add a "How It Feels" sentence before the bento grid:
```
// Insert after line 27 (before "UMBRA discards the outdated model..."):
<p className="text-neutral-400 max-w-2xl text-lg mb-8">
    Instead of drilling moves until they're robotic, we set up games and constraints
    that make your nervous system teach itself. The result? Movement that's fluid,
    adaptable, and feels like it was always yours.
</p>
```

- Add a CTA at the bottom: "Ready to feel the difference? → Book a trial session" (replacing the current button that says "Enter The Lab")

## Task 3: Curriculum — Lead with What You'll Experience

**Files:** `app/curriculum/page.jsx`

**Current:** Opens with "The Curriculum" subtitle + academic quote.

**Changes:**
- Replace the italic quote from the "Pedagogical Framework" with an invitation:
```tsx
// Replace lines 60-62:
<p className="font-editorial text-xl text-white/50 leading-relaxed max-w-3xl">
    Four phases, four Saturdays. Each session builds on the last.
    By the end, you won't just know how to move — 
    you'll trust your body to figure it out under pressure.
</p>
```

- Update the intro paragraph that describes each phase to start with "You'll learn...":
  - Phase 01: "Immediate live resistance..." → **Add:** "You'll learn to feel where your weight is, how to connect through your hands, and how to stay balanced when someone tries to move you."
  - Phase 02: "Understanding gravity..." → **Add:** "You'll discover how momentum works with (not against) your body, and how a small shift can redirect an entire person's force."
  - Phase 03: "Navigating complexity..." → **Add:** "You'll face unpredictable situations that force your brain to find new solutions — no two rounds feel the same."
  - Phase 04: "Full systemic integration..." → **Add:** "You'll flow continuously through problems, relying on feel rather than sight. This is where it all clicks."

- The Lagrangian principle section at the bottom (δ∫L dt = 0) — add a human explanation above it:
```tsx
// Insert before line 105:
<p className="font-editorial text-sm text-white/30 italic max-w-xl mb-4">
    Physics for how bodies work. A fancy way of saying: 
    your body naturally finds the easiest path — we just help it see the options.
</p>
```

## Task 4: Lab Page — Make It Feel Welcoming

**Files:** `app/lab/page.jsx`

**Current:** "The Sanctuary." "A laboratory designed for the Inner Crucible." "We have stripped away the vanity..."

**Changes:**
- Add a subheading above the hero: "The Space" (warm, familiar)
- Replace/expand the hero paragraph (line 53-57):
```tsx
// Replace lines 53-57:
<p className="font-editorial text-xl md:text-2xl text-white/50 max-w-3xl leading-relaxed">
    A room. Concrete floors. One light. No mirrors, no screens, no distractions.
    Just you and another person, solving movement puzzles in real time.
    <br/><br/>
    We designed it this way because the less there is to look at,
    the more you can <span className="text-albedo">feel</span>.
</p>
```

- For each lab spec, add a plain-English "what this means" line:
  - Photometric Occlusion: "**Why:** When you can't rely on your eyes, your body learns to listen."
  - Zero-Mirror Policy: "**Why:** Watching yourself slows you down. Feeling yourself speeds you up."
  - Brutalist Geometry: "**Why:** A quiet room helps a quiet mind. No distractions, just movement."

- Change "Request Access" → "See the Space" or "Book a Visit"

## Task 5: Program (Landing/Hero) — Translate the Calls-to-Action

**Files:** `app/program/page.jsx`

**Current:** "Haptic Dominance Over Optic Reliance." "Protocol: Inner Crucible." CTA: "Initiate Assessment".

**Changes:**
- Replace the hero headline:
```tsx
// Replace line 62-66:
<h1 className="...">
    Trust Your <br />
    <span className="text-white/40 italic">Body to Know What To Do.</span>
</h1>
```

- Replace the hero paragraph:
```tsx
// Replace lines 69-77:
<p className="...">
    Four weeks of learning how your body actually wants to move —
    through games, not drills. There's no sparring, no pressure,
    and zero expectation that you've ever done this before.
    <br/><br/>
    Just a room, a partner, and a series of puzzles you solve together.
</p>
```

- Change "Initiate Assessment" → "Start Your 4-Week Journey"
- Change "Read The Lexicon" → "How It Works"

## Task 6: Lexicon — Add Human Context to Each Category

**Files:** `app/lexicon/page.jsx`

**Current:** "A complete decryption of our movement architecture."

**Changes:**
- Replace the header paragraph:
```tsx
// Replace lines 208-211:
<p className="font-editorial text-xl text-white/50 leading-relaxed max-w-2xl">
    Movement science has its own language. These are the terms you'll hear in the lab — 
    and what they actually mean for your body.
</p>
```

- Prepend a human-translation sentence to each category's terms. Easiest approach: add an `intent` field to the first entry of each category (e.g., Pedagogy, Physics):
  - Pedagogy intro: "How your body learns to move without thinking about it."
  - Physics intro: "Real-life physics lessons your body already understands."
  - Aesthetics intro: "Why the space looks like this — and how it helps you focus."

## Task 7: Book Page — Small Polish

**Files:** `app/book/page.jsx`

- Change "Secure your slot. No walk-ins." → "Reserve your spot for the 4-Week Crucible. Space is limited."
- Change "← RETURN TO SURFACE" → "← Back to Home"

## Task 8: Navigation Header — Add "Book Now" CTA

**Files:** `components/Header.jsx`

If the header currently has text links, add a visual "Book Now" button (crimson border, stands out) at the end of the nav. This is the highest-conversion real estate.

## Task 9: Privacy / Intake Page

**Files:** `app/intake/page.jsx`

Let me check if this needs changes after reading it.

---

## Pages to Leave Unchanged

- **Codex** (`/codex`) — This is the internal roadmap / technical manifest. It's not a lead-gen page. Leave it as-is. People who find their way here are already deeply interested.

---

## Verification

1. `npm run build` — must succeed
2. Visual check: all Framer Motion animations still work, no broken imports
3. Links still point to correct paths
4. `git diff --stat` should show changed files

---

## Push Strategy

After each task, commit with a descriptive message. Final push to `orion` triggers Cloudflare auto-deploy.
