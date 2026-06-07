# Invert Theme — Design

## Approach

CSS custom property remap with a class toggle. Keep all 250+ component color-class references (`bg-void`, `text-bone`, etc.) untouched in markup. Add a `:root:not(.dark)` block in `globals.css` that remaps every neutral/surface color variable to its light equivalent. Replace the hardcoded `className="dark"` in `layout.jsx` with a state-driven toggle backed by `localStorage`. Add a small `ThemeToggle` button component.

This is a **CSS-first inversion** — the component tree never changes. Only the values behind the token names change based on whether `html.dark` is present.

## Architecture

```
globals.css
├── @theme block (unchanged — defines tokens at Tailwind level)
├── :root { ... }              ← stays dark defaults
├── :root:not(.dark) { ... }   ← NEW: light overrides
├── .liquid-glass              ← updated: uses var() lookups
├── .haptic-node               ← updated: uses var() lookups  
├── .section-card              ← updated: uses var() lookups
├── .section-alt               ← updated: uses var() lookups
└── shadow tokens              ← adjusted for light mode

layout.jsx
├── <html className="dark">    ← REPLACED with state-driven className
└── <ThemeToggle />            ← NEW: added near AcousticNode

components/ThemeToggle.jsx     ← NEW file
├── reads localStorage on mount
├── flips document.documentElement.classList
└── persists to localStorage on click
```

## Color Remap Table

The strategy: neutral tokens flip their lightness while preserving hue/warmth. Accent tokens stay fixed.

| Token | Dark (`.dark` / default) | Light (`:not(.dark)`) | Notes |
|---|---|---|---|
| `--color-void` | `#050505` | `#FAFAF7` | Warm near-white |
| `--color-void-black` | `#000000` | `#FFFFFF` | Pure swap |
| `--color-royal-white` | `#F4F1EA` | `#12110F` | Near-black |
| `--color-albedo` | `#F4F1EA` | `#12110F` | Same as royal-white |
| `--color-bone` | `#D8D2C8` | `#3D3830` | Warm charcoal |
| `--color-concrete` | `#7C7770` | `#6B6560` | Mid gray |
| `--color-ash` | `#A8A199` | `#7A746E` | Warmer gray |
| `--color-shadow` | `#151515` | `#EBE7E0` | Light warm gray |
| `--color-surface` | `#1A1A1A` | `#F3F1EC` | Off-white card |
| `--color-surface-mid` | `#222222` | `#EDEAE5` | Slightly darker card |
| `--color-elevated` | `#2A2A2A` | `#E2DDD5` | Border/raised |
| `--color-oxide` | `#3A0D11` | `#F5E5E7` | Light red tint |
| `--color-visceral-crimson` | `#B1121B` | `#B1121B` | **UNCHANGED** |
| `--color-visceral-blood` | `#8A0A0F` | `#8A0A0F` | **UNCHANGED** |
| `--color-phosphor-green` | `#39FF14` | `#39FF14` | **UNCHANGED** |
| `--color-absolute-black` | `#000000` | `#12110F` | Matches albedo |
| `--color-absolute-white` | `#FFFFFF` | `#FAFAF7` | Matches void |
| `--background` | `#050505` | `#FAFAF7` | |
| `--foreground` | `#F4F1EA` | `#12110F` | |
| `--border` | `#2A2A2A` | `#E2DDD5` | |

Shadow tokens also need light equivalents:
- `--shadow-card`: heavy black drops → subtle gray lifts
- `--shadow-dropdown`: black with white ring → gray with darker ring
- `--shadow-modal`: same adjustment
- `--shadow-glow-sm/md`: phosphor green glow stays, but opacity may need a slight bump (from 0.15 to 0.12 on white — actually green on white is MORE visible, so reduce to 0.08)

## Decisions

- **Decision:** Keep all component markup unchanged. Remap at the CSS variable level only.
  - **Rationale:** 250+ class instances across 25 files. Changing each one creates a massive diff, high regression risk, and ongoing dual-theme maintenance burden. CSS variable remap is a single-file change that auto-propagates.
  - **Alternatives considered:** Tailwind `dark:` prefix everywhere (too many files, too fragile), new semantic token layer (same net effect, more indirection).

- **Decision:** Use `:root:not(.dark)` for light mode instead of `[data-theme="light"]`.
  - **Rationale:** The site already uses `html.dark` to signal dark mode (standard Tailwind convention). Flipping to `:not(.dark)` for light means the existing dark-mode code paths stay untouched — dark mode is the "default" in CSS and the `.dark` class activates it exactly as before. Light mode becomes the absence of `.dark`.
  - **Alternatives considered:** `data-theme` attribute (cleaner semantics but requires changing existing dark-mode selectors), `prefers-color-scheme` media query (adds complexity, doesn't allow manual toggle).

- **Decision:** Invert oxide from `#3A0D11` (dark red) to `#F5E5E7` (light pink tint) in light mode.
  - **Rationale:** Oxide is currently used as a background decorative element (the large blurred circle in the footer). On light backgrounds, a dark red blur looks like a stain. A light pink tint preserves the "oxide" feel without the gore association.
  - **Alternatives considered:** Keep oxide dark (jarring on light backgrounds), remove oxide decorations in light mode (loses brand texture).

- **Decision:** No server-side `prefers-color-scheme` detection in this pass.
  - **Rationale:** Adds SSR complexity (flash avoidance requires cookie or client hint), and Jacobb explicitly wants manual control. Can add later as an enhancement.
  - **Alternatives considered:** Full `prefers-color-scheme` with three-way toggle (light/dark/system).

## Files Changed

- `app/globals.css` — Add `:root:not(.dark)` block with all remapped variables. Update `.liquid-glass`, `.haptic-node`, `.section-card`, `.section-alt` to use variables instead of hardcoded values.
- `app/layout.jsx` — Replace hardcoded `className="dark"` with state-driven logic. Add `<ThemeToggle />`.
- `components/ThemeToggle.jsx` — **NEW.** Theme toggle button component with localStorage persistence.
- `components/Footer.js` — Update hardcoded `bg-oxide/30` if it doesn't resolve through CSS variables (Tailwind v4 with `@theme` should resolve it — verify).

## Risks

- **Phosphor green glow invisible on white** — The glow shadows (`--shadow-glow-sm`, `--shadow-glow-md`) use `rgba(57,255,20,0.15)` which is nearly invisible on `#FAFAF7`. **Mitigation:** Test and adjust opacity. On light backgrounds, green needs less opacity to read as "glow" — likely `0.08-0.10` works better.

- **Hardcoded hex values in components** — Some components may use literal hex values or `bg-[#1A1A1A]` instead of `bg-surface`. These won't flip. **Mitigation:** Grep for hex values in JSX and replace with token classes during implementation.

- **Coach Tools has its own layout** — `app/coach-tools/layout.jsx` may have its own `<html>` or body classes. **Mitigation:** Check during implementation. If it imports the root layout's theme, it inherits automatically.

- **Third-party embeds (Instagram, etc.)** — Embeds may have their own dark/light themes that don't match. **Mitigation:** Out of scope. Acceptable trade-off.

- **`getAsset()` paths with `undefined/` prefix** — Background images reference `undefined/laboratory/...` (broken path). **Mitigation:** Not related to theme inversion but noted during exploration. Separate fix.
