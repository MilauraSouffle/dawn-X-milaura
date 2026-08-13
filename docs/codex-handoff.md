# MilAura - Handoff Codex actif

Date de mise a jour : 2026-08-13 08:25 CEST

## Mission de reprise

Reprendre apres la livraison live validee de la PDP-P0. Le lot creatif suivant est le bandeau mobile 56 px et le Hero immersif avec media reel.

## Lecture obligatoire

1. `AGENTS.md`
2. `docs/project-state.md`
3. `docs/workstreams.md`
4. `docs/reference/2026-08-12-repository-workflow.md`
5. `docs/checkpoints/2026-08-12-1819-repository-cleanup.md`
6. `docs/checkpoints/2026-08-12-1829-homepage-shipping-labels-live.md`
7. `docs/checkpoints/2026-08-12-1019-catalogue-v1-activation.md`
8. `docs/checkpoints/2026-08-12-1746-three-lots-reconciliation-pdp.md`
9. `docs/superpowers/specs/2026-08-12-milaura-bandeau-hero-immersif.md`
10. `docs/checkpoints/2026-08-12-1927-collection-pill-aqua.md`
11. `docs/checkpoints/2026-08-12-1931-pdp-visual-correction.md`
12. `docs/checkpoints/2026-08-13-0810-pdp-bonheur-heart.md`

## Etat Git de depart

- Depot actif unique : `/Users/paesano/Documents/MilAura website/dawn-X-milaura`.
- Branche d'integration : `codex/milaura-integration`.
- `main` reste le miroir automatique Shopify.
- L'integration contient l'historique `main` depuis `952d7587`, le miroir collection rattache par `8bc59704`, le miroir PDP-P0 rattache par `75ae911f` et le miroir `b♥nheur` `71797a16` rattache par `a6803efa`.
- La branche temporaire PDP et son worktree ont ete fermes apres integration.
- Les quatre anciennes branches sont preservees par les tags `archive/2026-08-12/*`.
- Aucun clone numerote et aucun fichier temporaire ne reste dans la zone active.
- Aucun worktree parallele de lot ne reste actif.

Ne jamais demarrer un nouveau lot depuis `main`. Lire la branche d'integration courante dans `docs/workstreams.md`, creer un worktree gere, puis inscrire son ownership avant edition.

## Faits live confirmes

- Theme public : `dawn-X-milaura/main`, ID `190430282075`.
- Theme de developpement : `Development (c105a8-mac-1)`, ID `199421952347`.
- Catalogue V1 public : 4 pages utiles, 6 collections et 5 entrees de menu natives.
- Hero, selection d'aout, dock mobile, guide de decouverte, `Choisir sa pierre`, bandeau d'engagement et panier 30/50/80 sont live.
- Homepage Bagues pointe vers `/collections/bagues-pierres`.
- La homepage rend `Point relais offert dès 30 EUR` et `En point relais dès 30 EUR`. `templates/index.json` est identique bit a bit au pullback live.
- Le quiz principal reste `/pages/diagnostic-emotionnel`.
- La politique publique confirme point relais offert des 30 EUR, expedition sous 24 h du lundi au vendredi et livraison France sous 3 a 5 jours.
- PDP-P0, retrait Scratch, pills mobiles, bulle sociale historique et CTA prune sont live. L'accent final affiche `b♥nheur` en Lato rose avec un coeur a la place du premier `o`, sans Dancing Script. Le Hero live est identique bit a bit a Git.
- La capsule aigue-marine des collections est live depuis le 2026-08-12 19:37 CEST. Le fichier live est identique bit a bit a Git.

## Changements locaux historiques maintenant classes

Le commit `9220031e` a absorbe les 31 fichiers storefront auparavant non committes. Les quatre fichiers qui se chevauchaient sont documentes dans `docs/project-state.md` et dans le checkpoint de nettoyage.

Aucun de ces changements n'est encore local et flottant. Aucun fichier non suivi ne reste dans le depot actif.

## Lot clos : PDP-P0

Patrice a donne son GO visuel final le 2026-08-13 pour `b♥nheur`. Dancing Script a ete retiree ; le mot utilise Lato, un rose poudre et un coeur accessible a la place du premier `o`. Le push live du seul Hero produit, le pullback bit a bit et le controle HTTP public sans cookie de preview sont valides. Les controles achat du lot PDP-P0 restent valides.

## Prochain lot : bandeau et Hero

Direction validee pour prototype, pas pour live :

- bandeau mobile ramene a environ 56 px sur une seule ligne
- detail de marque issu d'un vrai bijou
- facette centrale du Hero pouvant accueillir une video reelle de 6 a 8 secondes
- poster, lecture silencieuse et support `prefers-reduced-motion`
- une proposition mobile et desktop avant correction

Suivre `docs/superpowers/specs/2026-08-12-milaura-bandeau-hero-immersif.md`.

## Interdits de reprise

- Ne pas travailler directement dans le checkout d'integration depuis plusieurs sessions.
- Ne pas creer de clone complet ou de dossier numerote.
- Ne pas editer un fichier deja reserve dans `docs/workstreams.md`.
- Ne pas pousser le theme complet.
- Ne pas modifier les fichiers PDP clos sans nouveau lot declare.
- Ne pas remplacer le diagnostic emotionnel.
- Ne pas publier un produit CAN. Les produits restent draft-only jusqu'a la decision de Patrice.

## Prompt de reprise

> Reprends MilAura depuis `AGENTS.md`, `docs/project-state.md`, `docs/workstreams.md` et `docs/codex-handoff.md`. La capsule aigue-marine des collections et la PDP-P0 sont live, avec pullbacks valides. Ouvre un nouveau worktree declare, puis suis le brief bandeau 56 px et Hero immersif avec media reel. Ne travaille jamais dans un clone numerote et ne pousse jamais le theme complet.
