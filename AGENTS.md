# Repository Guidelines

This repository contains the Milaura Shopify theme (based on Dawn 15.4.0). Follow the guidelines below to keep changes consistent, maintainable, and compatible with Shopify’s theme tooling.

## Project Structure & Module Organization
- `assets/` holds CSS, JavaScript, and images. Global Milaura styles live in `assets/milaura.css`.
- `sections/` contains Liquid sections. Custom Milaura sections follow `milaura-*.liquid`.
- `templates/` contains JSON templates (plus `templates/gift_card.liquid`).
- `snippets/` contains reusable Liquid partials; `layout/` contains top-level wrappers.
- `config/` stores theme settings and defaults; `locales/` contains translation files.
- `docs/` stores product/feature specs; `scripts/` includes local Python utilities.

## Build, Test, and Development Commands
- `shopify theme dev` runs a local preview server with live reload (Shopify CLI required).
- `shopify theme check` runs Theme Check linting.
- `shopify theme pull` / `shopify theme push` sync changes with a Shopify store theme.

## Coding Style & Naming Conventions
- Use 2-space indentation for Liquid, JSON, and CSS.
- Favor HTML-first Liquid with minimal, progressive JavaScript. Wrap section JS in IIFEs and guard for missing elements.
- Milaura naming: classes `.milaura-*`, IDs `Milaura*`, CSS variables `--milaura-*`.
- Keep shared styles in `assets/milaura.css`; limit section-specific styles to `{% style %}` blocks.
- Avoid editing upstream Dawn files unless necessary; prefer new Milaura sections/snippets.

## Testing Guidelines
- No unit test suite is present; rely on `shopify theme check` for linting.
- Manually verify in the Shopify theme editor, plus mobile/desktop breakpoints.
- Validate accessibility (keyboard, contrast, focus) and performance (Lighthouse).

## Commit & Pull Request Guidelines
- Use short, imperative commit subjects; Conventional Commit prefixes are common (e.g., `feat: update milaura ui`).
- PRs should include a concise summary, linked issues, and screenshots for visual changes.
- Note how you tested (CLI commands, theme editor checks, device coverage).

## Configuration & Localization Tips
- Update `config/settings_schema.json` when adding new settings and keep defaults in `config/settings_data.json`.
- Keep translation keys consistent across `locales/*.json` when adding or changing copy.
