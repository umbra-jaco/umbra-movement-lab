# Invert Theme — Tasks

## Phase 1: CSS Variable Remap

- [x] 1.1 Add `:root:not(.dark)` block to `globals.css` with all neutral/surface color remaps (void, bone, albedo, concrete, ash, shadow, surface, surface-mid, elevated, oxide, absolute-black, absolute-white, background, foreground, border)
- [x] 1.2 Add light-mode shadow overrides in the `:root:not(.dark)` block (shadow-card, shadow-dropdown, shadow-modal, shadow-glow-sm, shadow-glow-md)
- [x] 1.3 Update `.liquid-glass` to use `var(--color-void)` or remapped variables instead of hardcoded `rgba(5,5,5,0.6)` and white border
- [x] 1.4 Update `.haptic-node` to use `var(--color-surface)` instead of hardcoded `#1A1A1A`
- [x] 1.5 Update `.section-card` to use `var(--color-surface)` and `var(--color-elevated)` instead of hardcoded hex
- [x] 1.6 Update `.section-alt` to use `var(--color-shadow)` instead of hardcoded `#151515`

## Phase 2: Theme Toggle Logic

- [x] 2.1 Create `components/ThemeToggle.jsx` — "use client" component with sun/moon icons, reads `localStorage`, toggles `html.dark` class
- [x] 2.2 Add `<ThemeToggle />` to `app/layout.jsx` in the bottom-left fixed area (near AcousticNode)
- [x] 2.3 Replace hardcoded `className="dark"` in `<html>` with state-driven logic that defaults to light (no `dark` class on first visit)

## Phase 3: Flash Prevention

- [x] 3.1 Add a blocking `<script>` in `<head>` that reads `localStorage['umbra-theme']` and sets/removes `dark` class on `<html>` before first paint
- [ ] 3.2 Verify no flash of wrong theme on reload in both Chrome and Firefox

## Phase 4: Hardcoded Hex Sweep

- [x] 4.1 Grep all `.jsx`/`.tsx`/`.js`/`.ts` files for hardcoded hex values (`#[0-9a-fA-F]{3,6}`) that match dark theme colors (`#050505`, `#1A1A1A`, `#222`, `#2A2A2A`, `#151515`, `#000`, `#000000`)
- [x] 4.2 Replace any found hardcoded hexes with Tailwind token classes (`bg-void`, `bg-surface`, `text-bone`, etc.)
- [x] 4.3 Check `components/Footer.js` — the `bg-oxide/30` on the decorative circle must resolve to the remapped oxide in light mode

## Phase 5: Page-by-Page Light Mode QA

- [ ] 5.1 QA homepage (`/`) in light mode — hero, cards, CTA buttons, dividers, footer
- [ ] 5.2 QA `/about` in light mode
- [ ] 5.3 QA `/philosophy` in light mode
- [ ] 5.4 QA `/faq` in light mode
- [ ] 5.5 QA `/lexicon` in light mode
- [ ] 5.6 QA `/program` in light mode
- [ ] 5.7 QA `/book` in light mode
- [ ] 5.8 QA `/coach-tools` and all sub-pages in light mode
- [ ] 5.9 QA `/intake`, `/access`, `/codex`, `/artifacts`, `/curriculum` in light mode

## Phase 6: Dark Mode Regression Test

- [ ] 6.1 Toggle to dark mode and verify homepage looks identical to pre-inversion state
- [ ] 6.2 Spot-check 3 other pages in dark mode against the live site
- [ ] 6.3 Verify phosphor green glow shadows still work in dark mode

## Phase 7: Rollback Validation

- [x] 7.1 Create backup branch `backup/pre-inversion-dark` from current main
- [ ] 7.2 After all changes are committed, test `git revert` on a local branch
- [ ] 7.3 Verify the reverted state matches the backup branch exactly (no residual light-mode CSS or toggle)

## Phase 8: Deploy

- [x] 8.1 Build: `npm run build` (must pass with no errors)
- [ ] 8.2 Commit with message: `feat: invert theme from dark to light with CSS variable remap and toggle`
- [ ] 8.3 Push to main — Cloudflare auto-deploys
- [ ] 8.4 Verify production at umbramovementlab.com renders in light mode by default
- [ ] 8.5 Test toggle in production
