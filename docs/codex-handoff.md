# MilAura - Handoff Codex actif

Date de mise a jour : 2026-08-13 18:40 CEST

## Etat de reprise

La Selection d'aout de la homepage est polie, validee par Patrice et live. Ses cartes transparentes, leurs cadres mineraux fins et leurs actions soulignees constituent desormais la direction d'interface a propager au reste du site.

Le prochain travail se divise en deux lots independants :

1. le bandeau mobile et le Hero immersif ;
2. l'audit puis la migration progressive des cartes, boutons et controles du theme.

Ils ne doivent pas reserver les memes fichiers ni pousser simultanement sur le meme theme Shopify.

## Lecture obligatoire

1. `AGENTS.md`
2. `docs/project-state.md`
3. `docs/workstreams.md`
4. `docs/reference/2026-08-12-repository-workflow.md`
5. `docs/reference/MILAURA-DIRECTION-ARTISTIQUE-2026.md`
6. `docs/reference/MILAURA-CTA-SYSTEM-2026.md`
7. `docs/reference/MILAURA-VISUAL-SYMBOLS-2026.md`
8. `docs/checkpoints/2026-08-13-1840-home-seasonal-da-live-handoff.md`
9. `docs/superpowers/specs/2026-08-12-milaura-bandeau-hero-immersif.md`

## Direction visuelle verrouillee le 2026-08-13

- simple, sobre, efficace et premium ;
- photographie prioritaire et jamais masquee ;
- surfaces transparentes par defaut sur les univers MilAura ;
- cadres de 1 px et details mineraux fins ;
- or mat utilise comme filet, pas comme grande surface ;
- titre, prix et actions groupes de facon compacte ;
- actions de carte soulignees, sans grosse pastille prune ;
- aucun fond blanc ajoute par reflexe ;
- aucun aspect bouton natif Dawn ;
- aucune decoration generique de luxe, diamant IA, gradient gratuit ou glassmorphism ;
- cibles tactiles, focus, contraste et etats fonctionnels preserves.

La palette, les polices et le logo restent ceux du Brand System du 2026-08-04. `assets/milaura-tokens.css` reste la seule source technique de couleur, typographie, espacement et geometrie.

## Etat Git et Shopify

- depot actif : `/Users/paesano/Documents/MilAura website/dawn-X-milaura`
- branche d'integration : `codex/milaura-integration`
- `main` : miroir automatique du theme live
- theme live : `190430282075`
- theme de developpement : `199421952347`
- integration du lot : `60634812`
- miroir Shopify : `0cc7ce28`
- reconciliation : `869d522a`
- fichiers live du dernier lot : `assets/milaura-section-heading.css` et `sections/milaura-selection-atelier.liquid`
- pullback live : 2/2 identique bit a bit
- Theme Check : 0 erreur, 29 avertissements historiques

Le worktree et la branche ephemere du lot saisonnier sont retires. Les seules branches durables restent `main` et `codex/milaura-integration`.

## Lot 1 : Hero immersif

Brief copiable : `docs/prompts/2026-08-13-hero-refonte-direction-minerale.md`.

Objectif : conserver le Hero valide, agrandir la facette centrale et accueillir une video reelle de 6 a 8 secondes ou un poster MilAura valide. Le media domine ; le texte et les actions restent discrets. Aucune grosse pastille, aucun mannequin IA et aucun live avant le GO visuel de Patrice.

## Lot 2 : UI sitewide

Brief copiable : `docs/prompts/2026-08-13-sitewide-ui-css-refonte.md`.

Objectif : inventorier toutes les familles de cartes et actions, construire des variantes partagees, valider homepage, collection, PDP et panier, puis propager par vagues. Aucun remplacement global de `.button` ou `.card`.

## Autres priorites conservees

- ajouter Amethyste au hub `/pages/bijoux-par-pierre` ;
- creer le systeme chromatique par pierre, Amethyste puis Aigue-marine ;
- polir legerement les cross-sells Mariage et Naissance sans les supprimer ;
- bandeau d'engagement mobile a reduire vers 56 px ;
- verifier plus tard GSC, GA4, Merchant Center, Pinterest et le parcours reel du point relais.

## Interdits de reprise

- travailler a plusieurs dans le checkout d'integration ;
- creer un clone complet ou un dossier numerote ;
- modifier un fichier reserve dans `docs/workstreams.md` ;
- pousser le theme complet ;
- reintroduire Playfair Display, Lato, l'or historique ou Vision OS ;
- ecrire des valeurs hex ou des `font-family` dans les sections ;
- recharger `search-form.js` ou `predictive-search.js` depuis une section ;
- modifier un produit, son prix, son stock ou sa publication dans un lot UI ;
- confondre validation technique, GO visuel de Patrice et autorisation live.

## Prompt de reprise general

> Reprends MilAura depuis `AGENTS.md`, `docs/project-state.md`, `docs/workstreams.md`, `docs/codex-handoff.md` et `docs/reference/MILAURA-DIRECTION-ARTISTIQUE-2026.md`. La Selection d'aout transparente est live et devient la reference UI. Choisis un seul des deux lots prepares, Hero ou UI sitewide, declare son worktree et son ownership avant toute edition, puis travaille uniquement sur le theme de developpement jusqu'au GO visuel explicite de Patrice.
