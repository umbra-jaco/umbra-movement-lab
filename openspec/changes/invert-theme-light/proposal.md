# Invert Theme — Dark to Light

## Why

The current site is exclusively dark-themed (`#050505` backgrounds, warm bone text). Jacobb is tired of the darkness and wants a lighter feel — but the brand vocabulary and accent palette must stay intact. This change adds a light theme as the default while preserving dark mode as a one-click fallback.

## What Changes

- **Theme layer in `globals.css`:** Add a `:root:not(.dark)` block that remaps all neutral/surface color variables to light equivalents. Accent colors (phosphor green, visceral crimson, oxide) stay unchanged.
- **Layout toggle:** Replace the hardcoded `<html className="dark">` with a state-driven class that reads from `localStorage`. Default to light mode.
- **ThemeToggle component:** A small button (sun/moon icon) in the fixed bottom-left area. Flips the `dark` class on `<html>` and persists preference.
- **Shadow adjustments:** Dark-mode shadows (heavy `#000000` drops) get light-mode equivalents (subtle gray lifts).
- **Component utility classes:** `.liquid-glass`, `.haptic-node`, `.section-card`, `.section-alt` get light-mode variants via CSS custom property lookups — no markup changes.

## Scope

- **In scope:**
  - All neutral/surface/background/text color remaps
  - Theme toggle button with localStorage persistence
  - Light-mode variants for `.section-card`, `.section-alt`, `.liquid-glass`, `.haptic-node`, `.phosphor-divider`, `.crimson-divider`
  - Shadow/elevation scale adjusted for light backgrounds
  - Default to light mode on first visit

- **Out of scope:**
  - Changing accent colors (phosphor green, visceral crimson, oxide)
  - Modifying any component markup (250+ class instances stay as-is)
  - Typography changes
  - Layout or structural changes
  - Dark/light toggle on the Coach Tools sub-app (separate layout file)
  - Server-side theme detection (no `prefers-color-scheme` — too complex for this pass)

## Success Criteria

- [ ] Site renders with light background and dark text by default on first visit
- [ ] Toggle button switches between light and dark instantly (no flash)
- [ ] All pages render correctly in light mode (no invisible text, no broken contrast)
- [ ] Dark mode still works exactly as before when toggled back
- [ ] `git revert` of the merge commit restores the exact pre-inversion dark-only state
