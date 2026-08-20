# Repository Guidelines

This repository contains the Milaura Shopify theme (based on Dawn 15.4.0). Follow the guidelines below to keep changes consistent, maintainable, and compatible with Shopify’s theme tooling.

## Hubs MilAura (carte rapide, maj 2026-08-12)
- Ce dossier = le SITE / theme Shopify (Liquid, sections, templates). CLAUDE.md = @AGENTS.md : ce fichier est la seule source de verite du repo.
- Les AUTOMATISATIONS MilAura (workflows N8N, pipeline produits, payloads) vivent dans `~/Documents/Agentic-Ops/milaura-automation/` (voir son AGENTS.md) ; souls et contexte des agents Hermes MilAura : `milaura-automation/agents/`.
- Scripts, creative/UGC et contexte ops elargi : `~/Documents/Agentic-Ops/`. Etat courant agents/infra : `~/Documents/Agentic-Ops/docs/project-state.md`.
- Maitre global : `~/.claude/CLAUDE.md` (Codex : `~/.codex/AGENTS.md`).
- Docs du repo (ranges 2026-07-09) : `docs/project-state.md` (etat), `docs/codex-handoff.md` (handoff), `docs/checkpoints/` (handovers de session), `docs/audits/` (SEO), `docs/playbooks/` (Higgsfield, campagnes, workflows IA), `docs/reference/` (metafields, product mapping, blog API, legal), `docs/archive-2026/` (perime).
- Copywriting public MilAura : lire obligatoirement `docs/reference/2026-08-12-copywriting-milaura.md` avant toute creation ou modification de titre, texte commercial, CTA, navigation, page catalogue, fiche produit, email ou contenu SEO.

## Identite visuelle (source unique, maj 2026-08-13)

- La charte validee a 100 % par Patrice le 2026-08-04 vit dans `~/Documents/Agentic-Ops/MILAURA-BRAND-SYSTEM-2026/`. Elle est la seule reference : `MILAURA-BRAND-GUIDE-V1-2026-08-04.md`, `COLORWAY-V2-2026-08-04.md`, `TYPOGRAPHY-V2-2026-08-04.md`.
- La direction d'interface validee par Patrice le 2026-08-13 vit dans `docs/reference/MILAURA-DIRECTION-ARTISTIQUE-2026.md`. Elle complete la charte : simple, sobre, efficace, premium, photographie prioritaire, surfaces transparentes, cadres fins, actions soulignees et aucune grosse pastille generique.
- Son implementation dans le theme est `assets/milaura-tokens.css`. Toute couleur, taille de texte ou famille de police passe par une variable de ce fichier. Aucune valeur hex ni `font-family` en dur dans une section.
- Couleurs : Nacre `#FBF8F3`, Encre prune `#2F222D`, Or mat `#B9975B`, Aigue-marine `#6FA9A6`, Amethyste `#7A4D82`. L'Or mat souligne, il ne couvre jamais une grande surface.
- Polices : Gloock 400 (editorial, 24 px minimum, jamais pour navigation, bouton, prix ou texte long), Instrument Sans 400 a 700 (fonctionnel), Dancing Script 500 ou 600 (signature, 2 a 6 mots, une seule presence par ecran).
- L'ancienne identite `Playfair Display`, `Lato`, or `#C0A062` et glassmorphism `Vision OS` est morte depuis le 2026-08-04. Elle ne doit reapparaitre dans aucun fichier. L'ancien `CLAUDE.md` qui la decrivait a ete reduit a un pointeur le 2026-08-13.
- Sur une carte produit, la photo ne doit jamais etre masquee par les informations. Le fond transparent est la regle sur les univers visuels MilAura ; les panneaux blancs, gros boutons remplis, gradients decoratifs et composants natifs Dawn sans adaptation sont interdits.

## Git, Sessions Paralleles Et Shopify

- Le seul depot actif est `/Users/paesano/Documents/MilAura website/dawn-X-milaura`.
- Le checkout principal est le point d'integration. Il doit rester propre et ne sert aux sessions paralleles que pour integrer, documenter et deployer.
- Une session parallele utilise obligatoirement une branche dediee et un worktree Git gere sous `/Users/paesano/Documents/MilAura website/_worktrees/`.
- Chaque session s'enregistre avant edition dans `docs/workstreams.md` avec son proprietaire, sa branche, son chemin, ses fichiers et son theme Shopify.
- Deux sessions ne modifient jamais le meme fichier ou le meme theme Shopify au meme moment.
- Les clones complets manuels, dossiers numerotes et copies de depot sont interdits.
- Aucun handoff avec des changements non committes. Une session termine par validation, commit, push et mise a jour du registre.
- Seul le proprietaire du checkout d'integration peut merger et deployer sur le theme live. Les pushes Shopify restent cibles, sans suppression, puis controles par pullback.
- Apres integration, le worktree termine est retire proprement et sa branche ephemere peut etre supprimee apres verification du merge.
- Les secrets, exports, sauvegardes et assets rejetes restent hors du depot Git.
- Procedure complete : `docs/reference/2026-08-12-repository-workflow.md`.

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

## Copywriting MilAura

- Le texte public est commercial, clair, concret et centre sur le produit. Il explique ce qui est vendu, pourquoi le produit a ete selectionne et quelles informations aident a choisir.
- Interdiction du remplissage poetique, des phrases interchangeables, du faux luxe et du `AI slop`. Un texte qui pourrait convenir sans modification a une marque de cosmetique, de bougies ou de mode doit etre reecrit.
- Les mots `qualite`, `provenance`, `certifie`, `artisanat`, `fait main`, `ethique` et toute garantie exigent une preuve reliee au produit ou au perimetre concerne. Ne jamais transformer une preuve partielle en promesse globale.
- MilAura assume pleinement la lithotherapie, les vertus des pierres, leurs bienfaits et le bien-etre emotionnel. Les termes `protection`, `apaisement`, `ancrage`, `energie`, `confiance`, `vertus` et `bienfaits` ne sont pas interdits par principe et ne doivent pas etre effaces par exces de prudence. La limite est de ne jamais presenter la lithotherapie comme une science ou une medecine, ni comme un diagnostic, un soin, un traitement, une prevention de maladie ou une guerison.
- Les titres de navigation et H1 utilisent les mots simples compris par les clients. Les precisions SEO vivent dans le title, la meta description ou le contenu secondaire sans alourdir l'ouverture de page.
- Le guide canonique, les exemples acceptes et la grille de relecture sont dans `docs/reference/2026-08-12-copywriting-milaura.md`.

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

## Contexte projet MilAura (maj 2026-06-16)
MilAura.fr : e-shop Shopify (bougies emotionnelles, mineraux, bijoux en pierres). Theme Dawn customise (projet dawn-X-milaura). Gere par Karine (femme de Patrice). Vitrine technique d'ONORA.

Stack : Antigravity (IDE), Shopify CLI (compte MilauraSouffle), N8N self-hosted (VPS Hostinger 147.79.100.97). Generation creative images : workflow GPT Image 2 (Gemini abandonne). Enrichissement texte/metafields : a recabler sur le workflow courant (l'ancien pipeline Gemini 3.1 est obsolete, verifier les scripts dans Agentic-Ops/).

Modeles UGC :
- Chloe (TikTok/Reels, selfie energique) : `Agentic-Ops/Creative + UGC/MilAura/Chloe/chloe_human_model.json`
- Elena (Instagram/Pinterest, premium serenite) : `Agentic-Ops/Creative + UGC/MilAura/Elena/elena_human_model.json`

Chantiers ouverts connus :
- Mapping images : `credentials/data/images-final/` contient ~832 dossiers nommes par IDs aleatoires (pas des EAN). Reconstituer le mapping ID -> nom produit (indice : `batch_state.json`) avant de renommer.
- Pinterest : compte cree + blog milaura.fr en place, mais connexion API + workflow N8N (veille -> generation post -> publication Pinterest/blog, chaque post pointant vers la fiche produit) restent a construire.

Automatisations detaillees et etat agents : `~/Documents/Agentic-Ops/milaura-automation/` + `~/Documents/Agentic-Ops/docs/project-state.md`.

Contraintes durables :
- Ne pas toucher aux fichiers actifs de dawn-X-milaura sans validation.
- Verifier les chemins absolus avant d'ecrire.
- Patrice = operateur solo : viser l'autonomie, zero dependance humaine pour scaler.
- Pas d'em-dash, dates absolues YYYY-MM-DD.
