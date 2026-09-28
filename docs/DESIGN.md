---
name: Grimoire Archive
colors:
  surface: '#10141a'
  surface-dim: '#10141a'
  surface-bright: '#353940'
  surface-container-lowest: '#0a0e14'
  surface-container-low: '#181c22'
  surface-container: '#1c2026'
  surface-container-high: '#262a31'
  surface-container-highest: '#31353c'
  on-surface: '#dfe2eb'
  on-surface-variant: '#d0c5af'
  inverse-surface: '#dfe2eb'
  inverse-on-surface: '#2d3137'
  outline: '#99907c'
  outline-variant: '#4d4635'
  surface-tint: '#e9c349'
  primary: '#f2ca50'
  on-primary: '#3c2f00'
  primary-container: '#d4af37'
  on-primary-container: '#554300'
  inverse-primary: '#735c00'
  secondary: '#d6bcf4'
  on-secondary: '#3b2754'
  secondary-container: '#523d6c'
  on-secondary-container: '#c4abe1'
  tertiary: '#dfccb0'
  on-tertiary: '#3a2f1b'
  tertiary-container: '#c2b195'
  on-tertiary-container: '#50442e'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffe088'
  primary-fixed-dim: '#e9c349'
  on-primary-fixed: '#241a00'
  on-primary-fixed-variant: '#574500'
  secondary-fixed: '#eedbff'
  secondary-fixed-dim: '#d6bcf4'
  on-secondary-fixed: '#25113e'
  on-secondary-fixed-variant: '#523d6c'
  tertiary-fixed: '#f3e0c3'
  tertiary-fixed-dim: '#d6c4a8'
  on-tertiary-fixed: '#241a08'
  on-tertiary-fixed-variant: '#514530'
  background: '#10141a'
  on-background: '#dfe2eb'
  surface-variant: '#31353c'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Playfair Display
    fontSize: 22px
    fontWeight: '500'
    lineHeight: 28px
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.02em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.04em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 10px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.08em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-mobile: 0.75rem
  margin: 1.25rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.25rem
---

## Brand & Style

This design system channels the enigmatic prestige of a centuries-old arcane sanctuary. Melding the scholarly intimacy of an ancient library vault with the precision of contemporary mobile software, it balances mystical allure and modern readability. It does not feel like a toy or a theme park artifact; instead, it adopts an editorial, academic, and ceremonial tone—as if holding an illuminated codex that breathes through digital glass.

### Design Movements
- **Ethereal Glassmorphism meets Arcane Tactility:** Semi-translucent panels layered like sheets of vellum over abyssal backgrounds, accented by fine filigree borders and subtle inner luminescence.
- **Atmospheric Depth:** Atmospheric layering where illuminated gold glyphs and deep midnight velvets create focus, contrast, and tactile depth.
- **Editorial Archival:** High-contrast typographic titles paired with ultra-crisp interface surfaces to ensure structured data (spells, potion formulas, genealogical house archives) reads effortlessly on mobile devices.

## Colors

The palette revolves around deep nocturnal depths, ceremonial golds, and parchment tones, enriched by dedicated house accents.

### Core Architecture
- **Midnight Canvas (`#0D1117`):** The primary ground, establishing a moonless, quiet spatial depth.
- **Arcane Chamber (`#1A1F2C`):** Surface tone for layered containers, sheets, and elevated tiles.
- **Noble Wine / Imperial Shadow (`#2E1A47`):** Tertiary interactive backdrop, used for elevated modals, spell state indicators, and active selector backgrounds.
- **Antiqued Gold (`#D4AF37`):** Primary interactive focal point, glyph highlight, and active border accent.
- **Luminous Aureolin (`#F5D77F`):** Hover, focus states, and high-energy magical micro-glows.
- **Aged Vellum (`#F4EBD9` / `#EAD7BA`):** High-readability content surfaces and typography contrast against dark canvas.

### House Accents (Semantic Metadata & Badges)
- **Gryffindor (Bravery):** Scarlet Core (`#8B1527`), Gold Trim (`#E89C35`).
- **Slytherin (Ambition):** Emerald Depths (`#1B4731`), Silver Mist (`#A8B8AD`).
- **Ravenclaw (Wisdom):** Midnight Sapphire (`#103763`), Burnished Bronze (`#9E7B4F`).
- **Hufflepuff (Loyalty):** Warm Honey (`#D39E2C`), Badger Charcoal (`#282622`).

## Typography

The typographic strategy unifies archival grandeur with crisp digital ergonomics:

- **Headlines (`Playfair Display`):** Reserved for page headings, modal titles, spell names, and ritual designations. It carries literary dignity and echoes antique incunabula without sacrificing digital clarity.
- **Body & Labels (`Plus Jakarta Sans`):** Drives system readouts, ingredient ratios, spell statistics, cooldowns, and navigation tokens. It counterbalances the historical weight of the serif with modern legibility.
- **Hierarchy Rules:** Large headlines must maintain comfortable tracking to preserve a ceremonial cadence. Micro labels (e.g., House metadata, spell tiers) utilize subtle uppercase letter-spacing to mirror catalog engravings.

## Layout & Spacing

The layout model is built around a mobile-first, 4-column dynamic grid transitioning to 8 columns on tablets:

- **Mobile Canvas:** Margins sit at `1rem` (16px) with `0.75rem` (12px) gutters to maximize edge-to-edge readability while keeping interactive zones away from phone bezels.
- **Vertical Cadence:** A strict 8pt base grid coordinates vertical flow. Component padding relies strictly on internal tokens (`space-sm` for compact badges, `space-md` for standard card bodies, `space-lg` for modal headers).
- **Safe Tap Targets:** Every interactive icon, pill, or selector strictly preserves an unobstructed 44×44px hit-box minimum.

## Elevation & Depth

Visual hierarchy does not use mundane gray dropshadows; it relies on atmospheric luminescent falloff and layered obsidian surfaces.

- **Level 0 (Canvas Base):** Pure deep ground (`#0D1117`), non-reflective, anchoring the application.
- **Level 1 (Card & Scroll Panels):** Deep glass layer with background color `rgba(26, 31, 44, 0.75)` supported by a `12px` backdrop blur and an ultra-subtle border stroke (`1px solid rgba(212, 175, 55, 0.15)`).
- **Level 2 (Modals & Sticky Bars):** Elevated parchment-slate blend (`rgba(46, 26, 71, 0.85)`) framed by a golden hair-line (`1px solid rgba(245, 215, 127, 0.3)`), projecting a faint warm ambient halo (`box-shadow: 0 8px 32px -4px rgba(0, 0, 0, 0.6), 0 0 16px 0 rgba(212, 175, 55, 0.08)`).
- **Level 3 (Floating Grimoire Actions):** Floating action triggers rely on a radial inner burnish and a directional golden rim light (`box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.2), 0 4px 20px rgba(212, 175, 55, 0.25)`).

## Shapes

The geometry uses rounded curves (`roundedness: 2`, base `0.5rem` / 8px) to soften the stone-and-parchment aesthetic into a contemporary handheld interface.

- **Standard Cards & Tiles:** Radius of `0.75rem` (12px), creating smooth containment for spell metadata and lore excerpts.
- **Bottom Sheets & Modal Chambers:** Radius of `1.25rem` (20px) on top edges to embrace natural hand gestures.
- **Badges & Pills:** Fully pill-shaped (`rounded-full`) for House crests, mana indicators, and category tabs.
- **Dividers & Embellishments:** Accentuated with diamond-point center markers (4×4px rotated squares) placed along 1px golden gradient dividers.

## Components

### Buttons
- **Primary ("Spellcast / Confirm"):** Rich gradient fill from `#D4AF37` to `#B38E22` with dark typography (`#0D1117`). Inset top-light `1px solid rgba(255, 255, 255, 0.35)`. Pressed state scales subtly to `0.98` with an expanded gold aura.
- **Secondary ("Archive / Inspect"):** Translucent nocturnal background (`rgba(26, 31, 44, 0.6)`), border `1px solid rgba(212, 175, 55, 0.35)`, text `#F4EBD9`. Active state transitions to `#2E1A47` border with gold text illumination.
- **Ghost:** Minimal `#EAD7BA` text with subtle gold underbar on touch.

### Chips & House Badges
- Compact capsules (`0.25rem` vertical, `0.75rem` horizontal padding).
- House badges leverage designated house base tones with translucent saturation:
  - Gryffindor: `rgba(139, 21, 39, 0.2)` with `#E89C35` text and border.
  - Slytherin: `rgba(27, 71, 49, 0.2)` with `#A8B8AD` text and border.
  - Ravenclaw: `rgba(16, 55, 99, 0.2)` with `#9E7B4F` text and border.
  - Hufflepuff: `rgba(211, 158, 44, 0.2)` with `#D39E2C` text and border.

### Input Fields
- Dark well container (`rgba(13, 17, 23, 0.8)`) lined with an antique border (`1px solid rgba(212, 175, 55, 0.2)`).
- Placeholder text in muted vellum (`rgba(244, 235, 217, 0.4)`).
- On focus, border illuminates to `#D4AF37` with an ambient glow (`box-shadow: 0 0 10px rgba(212, 175, 55, 0.2)`), and label transitions upward with serif distinction.

### Cards ("Tome Entries")
- Glass-backed nocturnal surfaces with top-edge gold hairline accents.
- Contain a structured header: category label (e.g., "CHARM", "POTION"), serif title, descriptive metadata grid (difficulty, incantation, wand motion SVG thumbnail), and an action footer.

### Lists & Cell Selectors
- Borderless list rows separated by 1px horizontal fades (`rgba(212, 175, 55, 0.1)`).
- Leading glyph container inside a soft square (`36×36px`) with antique gold tint.
- Trailing chevron styled as a refined, slender brass arrow.

### Checkboxes & Switches
- **Checkboxes:** Square with smoothed corners (`4px`), bordered in gold foil. When checked, fills with `#D4AF37` displaying an obsidian runic checkmark.
- **Switches:** Pill track in midnight slate (`#1A1F2C`). Thumb is a glowing orb of warm antique gold that shifts right with a smooth haptic easing.