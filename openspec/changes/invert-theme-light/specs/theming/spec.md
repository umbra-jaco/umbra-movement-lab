# Theming Specification

## Requirements

### REQ-001: Light Theme by Default
**Priority:** Must Have

First-time visitors see a light-themed site. The `<html>` element must not have the `dark` class on initial render.

#### Scenario: First visit — no stored preference
**Given** a user has never visited the site
**When** they load any page
**Then** the `<html>` element has no `dark` class
**And** backgrounds are light (near-white)
**And** body text is dark (warm charcoal)

#### Scenario: Returning visitor — dark preference stored
**Given** a user previously toggled to dark mode
**When** they return to any page
**Then** the `<html>` element has the `dark` class
**And** the site renders in dark mode

### REQ-002: Theme Toggle Button
**Priority:** Must Have

A button exists that switches between light and dark mode and persists the choice.

#### Scenario: Toggle from light to dark
**Given** the site is in light mode
**When** the user clicks the theme toggle
**Then** the `dark` class is added to `<html>`
**And** `localStorage['umbra-theme']` is set to `'dark'`
**And** all colors flip to their dark equivalents

#### Scenario: Toggle from dark to light
**Given** the site is in dark mode
**When** the user clicks the theme toggle
**Then** the `dark` class is removed from `<html>`
**And** `localStorage['umbra-theme']` is set to `'light'`
**And** all colors flip to their light equivalents

### REQ-003: No Flash of Wrong Theme
**Priority:** Must Have

The correct theme must be applied before the first paint — users must never see a flash of the wrong theme.

#### Scenario: Dark-mode user reloads the page
**Given** `localStorage['umbra-theme']` is `'dark'`
**When** the user reloads the page
**Then** the page renders in dark mode from the first frame
**And** no flash of light mode is visible

### REQ-004: All Existing Pages Render Correctly in Light Mode
**Priority:** Must Have

Every page that works in dark mode must look correct in light mode with no manual markup changes to individual pages.

#### Scenario: Homepage in light mode
**Given** the site is in light mode
**When** the user visits the homepage (`/`)
**Then** the hero section has a light background
**And** the "Umbra" heading is dark (near-black)
**And** the "What to Expect" section cards have light surfaces with visible borders
**And** the "Book Your Spot" CTA is dark text on light background (inverted from current light-on-dark)
**And** phosphor green dividers and accents are still visible

#### Scenario: Coach Tools pages in light mode
**Given** the site is in light mode
**When** the user visits any `/coach-tools/*` page
**Then** the capacity map canvas, game cards, and overlays have light surfaces
**And** all text is readable against light backgrounds
**And** interactive states (hover, active, selected) have appropriate contrast

### REQ-005: Brand Accent Colors Unchanged
**Priority:** Must Have

The brand accent colors must not shift between themes. Phosphor green, visceral crimson, oxide, and visceral-blood must remain the same hex values in both modes.

#### Scenario: Phosphor green in light mode
**Given** the site is in light mode
**When** inspecting any phosphor green element
**Then** the color is `#39FF14` (unchanged)

#### Scenario: Visceral crimson in light mode
**Given** the site is in light mode
**When** inspecting any visceral crimson element
**Then** the color is `#B1121B` (unchanged)

### REQ-006: Theme Toggle Visual Design
**Priority:** Should Have

The toggle must be discoverable but not intrusive. It must match the brand aesthetic.

#### Scenario: Toggle button appearance
**Given** the site is in either mode
**When** looking at the bottom-left fixed area
**Then** a toggle button is visible near the AcousticNode indicator
**And** it shows a sun icon in dark mode and a moon icon in light mode (or equivalent)
**And** it uses the brand's border/transition conventions

### REQ-007: Rollback to Dark-Only
**Priority:** Must Have

A single `git revert` of the merge commit must restore the site to its pre-inversion dark-only state with zero residual light-mode artifacts.

#### Scenario: Emergency rollback
**Given** the inversion has been deployed to production
**When** `git revert <merge-commit> && git push` is executed
**Then** Cloudflare deploys the reverted build
**And** the site renders exactly as it did before the inversion
**And** no light-mode CSS or toggle component remains active
