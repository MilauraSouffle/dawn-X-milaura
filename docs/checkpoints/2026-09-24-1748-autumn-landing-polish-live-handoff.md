# Landing Automne : polish final, reference des futures landings

Date : 2026-09-24 17:48 CEST

Statut : `VALIDE PAR PATRICE, INTEGRE, POUSSE ET LIVE VERIFIE`

## Decision durable

Patrice valide la page `/collections/selection-automne` comme une reussite visuelle de reference. Cette landing devient le template editorial et visuel a suivre pour la mise a jour des autres landings MilAura. Il ne faut pas recopier aveuglement ses pierres ou ses medias saisonniers : il faut reproduire sa hierarchie, son rythme, sa densite, son traitement mobile, son niveau de finition et son parcours produit.

Le modele de reference est :

1. Hero immersif responsive avec un seul H1, un surtitre court, aucun texte superflu et une video en boucle avec fallback.
2. Transition courte sous le Hero avec reperes de collection visibles.
3. Produit phare compact, photographie en bento et texte commercial concret.
4. Catalogue de vingt produits qui remonte rapidement dans la page.
5. Guides pierre compacts, interactifs et suffisamment courts pour tenir dans un viewport desktop de 720 px sous la navigation.
6. Bloc final Quartz rose qui relance clairement vers le choix et le panier.
7. Fond blanc pur sur le corps de page, avec les couleurs de marque reservees aux accents et aux respirations utiles.

## Resultat livre

- Hero Automne aligne sur la composition validee de la Home, avec `Automne 2026` et `Grenat & cornaline`.
- Introduction raccourcie et reperes `Automne 2026`, `Grenat`, `Cornaline` restaures.
- Bracelet Iris presente comme produit phare avec une composition plus compacte et un texte choisi par Karine.
- Vingt produits publics presents dans la selection.
- Guides `Tout savoir sur le grenat` et `Tout savoir sur la cornaline` ramenes a environ `598px` sur le live desktop `1440 x 900`.
- Fond blanc pur sur le corps de la landing.
- Bloc final Quartz rose avec le titre `Alors, quel bijou vous accompagnera cet automne ?`.
- Aucun produit, prix, stock, media produit, Shopify Admin, Ads ou commande modifie pendant ce lot.

## Git et Shopify

- Branche source : `codex/milaura-autumn-landing-polish-20260924`.
- Worktree source : `/Users/paesano/Documents/MilAura website/_worktrees/autumn-landing-polish-20260924`.
- Commit fonctionnel final : `3634c70e` (`feat: refine autumn landing surfaces`).
- Integration : fast-forward de `96faff48` a `3634c70e` sur `codex/milaura-integration`, poussee sur origin.
- Theme prive de recette : `201797534043`.
- Theme public confirme par `shopify theme list` : `190430282075`, `dawn-X-milaura/main`, role `live`.
- Deploiement live cible avec `--allow-live --nodelete --strict` sur sept fichiers :
  - `assets/milaura-destination-landing.css`
  - `assets/milaura-seasonal-closing-cta.css`
  - `assets/milaura-sodalite-landing-media.js`
  - `sections/milaura-seasonal-closing-cta.liquid`
  - `sections/milaura-sodalite-landing.liquid`
  - `sections/milaura-stone-guide.liquid`
  - `templates/collection.selection-automne.json`
- Pullback apres deploiement : `7/7` fichiers identiques a Git.

## Verification

- `git diff --check` : PASS.
- `python3 tests/css_contract_test.py` : PASS.
- `shopify theme check` : 0 erreur, 16 avertissements historiques hors lot.
- QA publique sans preview bar en `1440 x 900` : un H1, aucun overflow, video chargee et en lecture avec `loop=true`, fond blanc, guides a `598px`, CTA Quartz rose.
- QA publique sans preview bar en `390 x 844` : un H1, aucun overflow, video chargee et en lecture avec `loop=true`, fond blanc, guides compacts et CTA Quartz rose.
- Console publique : aucune erreur.

## Etat du checkout

Le checkout d integration conserve des changements concurrents preexistants dans `AGENTS.md`, trois exports CSV de campagne, `docs/checkpoints/2026-09-22-1726-pinterest-organic-scheduling-handoff.md` et `docs/project-state-ledger.md`. Ils ont ete preserves. `docs/project-state.md` et `docs/codex-handoff.md` ont ete reconcilies dans cette cloture. Ne pas nettoyer, reinitialiser ou ajouter globalement les fichiers encore hors lot.

## Reprise du 2026-09-25

Patrice prevoit une courte passe de deux ou trois corrections sur la Home, puis la mise a jour de toutes les landings du site. Commencer par la Home dans un nouveau worktree et une preview privee. Ensuite, inventorier les landings existantes et les migrer par lots vers le modele Automne, avec une QA visuelle mobile et desktop pour chaque lot. Ne jamais transformer la page Automne en composant generique au prix de regressions : extraire uniquement les primitives partageables apres inventaire.

Prompt de reprise :

```text
Reprends MilAura depuis docs/checkpoints/2026-09-24-1748-autumn-landing-polish-live-handoff.md. La landing Automne est validee par Patrice, integree, poussee et live sur le theme 190430282075. Elle devient la reference de design pour toutes les autres landings MilAura : meme hierarchie, meme rythme, meme densite, meme niveau de finition et meme exigence mobile, avec des contenus et medias propres a chaque destination. Commence par les deux ou trois retouches rapides demandees sur la Home dans un nouveau worktree et une preview privee. Puis inventorie les landings et propose des lots de migration. Preserve le checkout principal sale et separe toujours PASS technique, GO visuel Patrice et GO live.
```
