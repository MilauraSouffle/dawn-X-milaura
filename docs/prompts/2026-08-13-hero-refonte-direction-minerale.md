# Prompt de reprise - Hero MilAura

Date : 2026-08-13

Reprends le chantier du bandeau et du Hero MilAura en lecture seule depuis `AGENTS.md`, `docs/project-state.md`, `docs/codex-handoff.md`, `docs/workstreams.md`, `docs/reference/MILAURA-DIRECTION-ARTISTIQUE-2026.md` et `docs/superpowers/specs/2026-08-12-milaura-bandeau-hero-immersif.md`.

Patrice a valide le 2026-08-13 une direction simple, sobre, efficace et premium. La reference interne est la nouvelle Selection d'aout sur la homepage : photographie prioritaire, surfaces transparentes, cadres mineraux fins, details or en filet, controles legers, aucune grosse pastille et aucun bouton massif. Le Hero doit parler la meme langue visuelle.

Objectif : faire evoluer le Hero valide sans le reconstruire depuis zero. Conserver ses trois facettes, rendre la facette centrale nettement plus immersive et preparer l'accueil d'une video reelle verticale de 6 a 8 secondes. En l'absence de video validee, utiliser une vraie photographie MilAura comme poster et travailler uniquement le cadrage. Aucun mannequin IA.

Contraintes visuelles :

- media avant decoration ;
- un seul geste de mouvement principal ;
- texte et CTA discrets, compacts et lisibles ;
- pas de gros bouton rempli, pas de gradient decoratif, pas de glassmorphism, pas de pictogramme de luxe generique ;
- `Trouver ma pierre` reste la seule exception cabochon deja validee ;
- utiliser uniquement `assets/milaura-tokens.css` ;
- cibles tactiles, focus, contraste et `prefers-reduced-motion` preserves ;
- mobile-first a 360, 390 et 430 px, puis desktop.

Commence par verifier l'ownership exact des fichiers dans `docs/workstreams.md`. Cree un worktree dedie, declare la branche et les fichiers avant toute edition. Ne touche ni a la PDP ni aux cartes produit. Travaille uniquement sur le theme de developpement `199421952347`. Fournis une capture mobile et une capture desktop, le poids des medias, le controle LCP/CLS et les differences exactes avec le Hero live. Aucun deploiement live sans GO visuel explicite de Patrice.
