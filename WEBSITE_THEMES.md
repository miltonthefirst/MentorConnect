# Website Theme Extraction

## Scope of Search

This document was built by reviewing:

- `src/index.html`
- `src/styles.css`
- `src/app/app.html`
- `src/app/app.scss`
- `src/app/app.ts`
- `angular.json`
- `README.md`
- `CONTRIBUTING.md`

No separate Tailwind config file was found, and no additional theme files were found under `public/`.

## Active Theme Snapshot

Current UI appears to implement a light, indigo-accented authentication theme built primarily with Tailwind utility classes.

### Theme Name

- **Indigo Auth (Current)**

### Visual Characteristics

- **Typography:** Google Font `Poppins` is loaded globally.
- **Primary accent:** Indigo (`bg-indigo-500`, `text-indigo-400`, `hover:text-indigo-300`, `focus:outline-indigo-500`).
- **Surface/input style:** Semi-transparent white inputs (`bg-white/5`) with subtle outlines.
- **Body text strategy:** Black/gray text classes (`text-black-100`, `text-gray-400`, `placeholder:text-gray-500`).
- **Button style:** Filled indigo primary action with lighter indigo hover state.

## Extracted Theme Tokens (From Current Markup)

### Color Tokens in Use

- `indigo-500`
- `indigo-400`
- `indigo-300`
- `white`
- `white/5`
- `white/10`
- `black/10`
- `black-100`
- `gray-400`
- `gray-500`

### State Tokens in Use

- `hover:bg-indigo-400`
- `hover:text-indigo-300`
- `focus:outline-indigo-500`
- `focus-visible:outline-indigo-500`

### Shape/Spacing Language

- Rounded controls: `rounded-md`
- Vertical spacing: `mt-10`, `space-y-6`
- Compact control rhythm: `px-3 py-1.5`

## Theme Mapping by UI Element

- **Brand mark/logo:** Indigo-tinted external logo URL (`?color=indigo&shade=500`).
- **Heading and labels:** `text-black-100`, bold/medium weights.
- **Inputs:** `bg-white/5`, `outline-white/10` or `outline-black/10`, indigo focus outline.
- **Primary CTA (Sign in):** `bg-indigo-500`, white text, indigo hover/focus variants.
- **Secondary links:** `text-indigo-400` with lighter hover state.
- **Support text:** `text-gray-400`, placeholders in `gray-500`.

## Theme Architecture Observations

- Tailwind is enabled globally through `@import "tailwindcss"` in `src/styles.css`.
- Theme values are currently inline in template classes (no centralized token map in project source).
- `src/app/app.scss` is currently empty.
- There is no explicit dark mode strategy or alternate named themes in the current codebase.

## Potential Inconsistencies to Verify

- `text-black-100` is used multiple times. In default Tailwind palettes, `black-100` is not standard. It may be:
  - A custom color not visible in current repo files, or
  - An invalid token that may not compile to a class.

## Suggested Next Step (Optional)

To support multiple themes cleanly, move these values into a documented design token layer (CSS variables or Tailwind theme extension) and map utility usage to named semantic roles (for example: `--color-primary`, `--color-text-muted`, `--color-focus-ring`).
