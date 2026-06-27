# AGENTS.md

## Commands

- **Package manager:** pnpm (not npm — `package-lock.json` is stale)
- `pnpm dev` — start Vite dev server
- `pnpm build` — production build to `dist/`
- No lint, test, typecheck, or formatter scripts exist

## Architecture

- React 18 + Vite 6 + TypeScript SPA (no router)
- Entry: `index.html` → `src/main.tsx` → `src/app/App.tsx`
- Single-page portfolio with glassmorphism UI, dark/light mode toggle
- Deploys to GitHub Pages from `master` branch

## Key config

- **Base path:** `base: '/portfolio/'` in `vite.config.ts` — all static asset URLs must include this prefix
- **Path alias:** `@` → `./src` (configured in `vite.config.ts`)
- **Tailwind CSS v4** via `@tailwindcss/vite` plugin — config is in `src/styles/tailwind.css` (CSS-based, no `tailwind.config.js`)
- **Custom Vite plugin** `figmaAssetResolver` — resolves `figma:asset/<filename>` imports to `src/assets/<filename>`
- **Fonts** loaded via `<link>` in `index.html`; referenced as `var(--font-outfit)`, `var(--font-inter)`, `var(--font-jetbrains)`

## Styling

- Design tokens (CSS custom properties) in `src/styles/theme.css` — both `:root` and `.dark` variants
- Custom Tailwind utilities defined in `theme.css`: `glass-card`, `glass-card-hover`, `glass-pill`, `glass-chip`, `glass-button`, `gradient-text`, `orb`, `grid-pattern`
- Dark mode: `.dark` class on `<html>`, toggled by `App.tsx` state + `prefers-color-scheme` detection in `index.html`
- `default_shadcn_theme.css` at repo root is a **reference file, not imported** — the active theme is `src/styles/theme.css`
- `postcss.config.mjs` is intentionally empty (Tailwind v4 uses Vite plugin, not PostCSS)

## Component boundaries

- `src/app/components/ui/` — shadcn/ui generated components (Radix primitives). Do not hand-edit; regenerate via shadcn CLI if changes are needed
- `src/app/components/figma/` — currently empty, reserved for Figma-originated components
- `cn()` utility at `src/app/components/ui/utils.ts` (clsx + tailwind-merge)

## Code quality

- **Small, focused components** — one responsibility per file. Extract sub-components when a file grows beyond ~150 lines.
- **Naming** — components use PascalCase, utilities/hooks use camelCase, constants use UPPER_SNAKE_CASE. Names should describe *what*, not *how*.
- **Type safety** — strict TypeScript. Avoid `any`; prefer interfaces for object shapes, `type` for unions/intersections. Type props explicitly.
- **No magic values** — extract repeated strings, numbers, and config into named constants at the top of the file or a shared module.
- **Styling** — prefer Tailwind utilities and the existing custom utilities (`glass-card`, `gradient-text`, etc.) over inline `style={}`. Use design tokens from `theme.css`, not hardcoded colors.
- **Imports** — use the `@/` path alias. Group: React → third-party → local. Keep barrel exports out of `components/ui/`.
- **State** — lift state only as high as needed. Prefer local `useState` over global state for this SPA's scope.
- **Comments** — only explain *why*, never *what*. Self-documenting code over comments.
- **DRY** — extract repeated JSX patterns into components, repeated logic into hooks. But don't abstract prematurely — duplicate twice, abstract on the third.
- **Accessibility** — use semantic HTML, ensure keyboard navigability, add `aria-label` to icon-only buttons (as done for the theme toggle).
