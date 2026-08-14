# MilAura - Handoff Codex actif

Date de mise a jour : 2026-08-14 09:47 CEST

## Etat de reprise

Les dix Heroes editoriaux GPT Image 2 sont live sur Naissance, Mariage, Bijoux par pierre, Bagues et six collections de pierre. Le push live a ete limite aux 23 fichiers du lot et le pullback est identique bit a bit. Les lots UI sitewide et carrousel sont egalement fermes et live. La direction artistique est maintenant transferee dans un brief autonome pour les futures sessions.

La prochaine reprise design peut se concentrer sur :

1. le bandeau d'engagement mobile a reduire vers 56 px ;
2. le Hero immersif de la homepage ;
3. les ajustements de cadrage des Heroes de destination, uniquement apres retour visuel de Patrice ;
4. l'ajout d'Amethyste au hub Bijoux par pierre ;
5. le polish des cross-sells Mariage et Naissance.

Ils ne doivent pas reserver les memes fichiers ni pousser simultanement sur le meme theme Shopify.

## Lecture obligatoire

1. `AGENTS.md`
2. `docs/project-state.md`
3. `docs/workstreams.md`
4. `docs/reference/2026-08-12-repository-workflow.md`
5. `docs/reference/MILAURA-DIRECTION-ARTISTIQUE-2026.md`
6. `docs/prompts/2026-08-14-hero-destination-da-reprise.md`
7. `docs/checkpoints/2026-08-14-0947-editorial-hero-da-session-handoff.md`
8. `docs/reference/MILAURA-CTA-SYSTEM-2026.md`
9. `docs/reference/MILAURA-VISUAL-SYMBOLS-2026.md`
10. `docs/checkpoints/2026-08-13-1840-home-seasonal-da-live-handoff.md`
11. `docs/checkpoints/2026-08-13-2058-editorial-heroes-gpt-image-2.md`
12. `docs/superpowers/specs/2026-08-12-milaura-bandeau-hero-immersif.md`

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

Pour tout futur Hero de destination : une scene photographique unique avec de vrais produits MilAura, une composition desktop et une recomposition mobile dediee, une palette propre a l'univers, le texte conserve en HTML et aucun collage CSS. Les overlays ne servent qu'a la lisibilite ; aucun flou, glassmorphism, trait decoratif ou symbole pseudo-luxe ne doit recouvrir l'image.

Hierarchie transmissible : produit exact, scene et matiere, texte HTML, action discrete. Le contrat photographique, la cartographie technique des dix destinations, les dimensions et le prompt GPT Image 2 sont dans `docs/prompts/2026-08-14-hero-destination-da-reprise.md`.

La palette, les polices et le logo restent ceux du Brand System du 2026-08-04. `assets/milaura-tokens.css` reste la seule source technique de couleur, typographie, espacement et geometrie.

## Etat Git et Shopify

- depot actif : `/Users/paesano/Documents/MilAura website/dawn-X-milaura`
- branche d'integration : `codex/milaura-integration`
- `main` : miroir automatique du theme live
- theme live : `190430282075`
- theme de developpement : `199421952347`
- commit de production du lot Heroes : `0d6d5c42`
- integration canonique : `a3c26aaa`
- reconciliation du miroir Shopify live : `75c8171d`, arbre source inchange
- theme de developpement : 23 fichiers cibles, pullback 23/23 identique bit a bit
- theme live : 23 fichiers cibles, pullback 23/23 identique bit a bit
- validation publique : 10 routes HTTP 200, un H1, aucun `noindex`, deux assets Hero par page
- Theme Check : 0 erreur, 29 avertissements historiques
- nouvelle verification publique le 2026-08-14 a 09:47 CEST : dix routes HTTP 200, un H1, aucun `noindex`, deux assets Hero par route

Les worktrees et branches ephemeres Heroes, UI sitewide et carrousel sont retires.

## Heroes de destination livres

Les dix routes sont listees dans le checkpoint `2058`. Toute future correction doit conserver la paire desktop/mobile, les vrais produits, le texte HTML et le push cible. Ne pas regenerer une composition deja validee pour corriger un simple cadrage CSS.

## Futur lot : Hero homepage immersif

Brief copiable : `docs/prompts/2026-08-13-hero-refonte-direction-minerale.md`.

Objectif : conserver le Hero valide, agrandir la facette centrale et accueillir une video reelle de 6 a 8 secondes ou un poster MilAura valide. Le media domine ; le texte et les actions restent discrets. Aucune grosse pastille, aucun mannequin IA et aucun live avant le GO visuel de Patrice.

## Baseline UI sitewide live

Reference de reprise : `docs/prompts/2026-08-13-sitewide-ui-css-refonte.md`.

Le lot est ferme et live. Ses variantes partagees sont la baseline actuelle. Toute extension doit conserver les adaptateurs explicites et ne jamais remplacer globalement `.button` ou `.card`.

## Autres priorites conservees

- ajouter Amethyste au hub `/pages/bijoux-par-pierre` si la destination manque encore dans le contenu ;
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

> Reprends MilAura depuis `AGENTS.md`, `docs/project-state.md`, `docs/workstreams.md`, `docs/codex-handoff.md`, `docs/prompts/2026-08-14-hero-destination-da-reprise.md`, `docs/reference/MILAURA-DIRECTION-ARTISTIQUE-2026.md` et `docs/checkpoints/2026-08-14-0947-editorial-hero-da-session-handoff.md`. Les dix Heroes de destination, l'UI sitewide et le carrousel Nouveautes sont live. Commence en lecture seule, choisis un seul lot, declare son worktree et son ownership, puis preserve la hierarchie produit, scene, texte, action. Aucun live sans GO explicite de Patrice.
