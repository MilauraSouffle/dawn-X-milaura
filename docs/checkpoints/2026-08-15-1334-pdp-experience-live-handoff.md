# Experience PDP MilAura live et handoff Ruban Vivant

Date : 2026-08-15 13:34 CEST

## Resultat livre

Patrice a donne son GO visuel et son GO live explicites. La nouvelle experience fiche produit est integree dans `codex/milaura-integration`, poussee sur Git et deployee sur le theme live `190430282075`.

Parcours actif des deux templates produit :

1. Hero produit existant ;
2. sticky bar existante ;
3. bande fine de services, preuves et paiements ;
4. guide produit en trois portes ;
5. Ruban Vivant existant ;
6. service conseiller MilAura.

Le Hero, la sticky bar, le moteur de recommandations, le Ruban Vivant, le panier et le tiroir panier n'ont pas ete reecrits dans ce lot.

## Fichiers deployes live

- `assets/milaura-product-experience.css` ;
- `assets/milaura-product-experience.js` ;
- `sections/milaura-product-experience.liquid` ;
- `sections/milaura-product-advisor.liquid` ;
- `templates/product.json` ;
- `templates/product.milaura-produit.json`.

Push Shopify cible avec `--nodelete`. Aucun autre fichier theme et aucune donnee produit n'ont ete modifies.

## Git

- branche de lot : `codex/milaura-pdp-experience-20260815` ;
- commit fonctionnel : `9762d1b8` ;
- commit de preuve preview : `ceaeb1e7` ;
- integration : fast-forward de `codex/milaura-integration` jusqu'a `ceaeb1e7` ;
- branche d'integration poussee sur origin ;
- worktree de lot retire proprement apres verification que la branche est integree.

## Validations

- JSON des deux templates : valide ;
- JavaScript : `node --check` valide ;
- Theme Check au niveau erreur : aucune erreur, avertissements historiques hors lot ;
- preview developpement : pullback 6/6 identique ;
- live : pullback 6/6 identique octet par octet ;
- HTML public sans cookie : HTTP 200, aucun artefact de preview, nouvelle experience, `#ProductTabs`, Ruban et conseiller presents dans le bon ordre ;
- mobile 390 px sur le theme live : une experience, un conseiller, trois tabs, lien Hero vers `#ProductTabs`, rail de preuves large de 1 470 px dans un viewport interne de 360 px ;
- rail mobile de preuves : defilement de 0 a 245 px, page maintenue a `scrollX = 0` ;
- tabs : clic puis `ArrowRight`, mise a jour correcte de `aria-selected` ;
- console : aucune erreur applicative observee ; seules des informations de la barre de preview Shopify etaient presentes dans la session navigateur de controle.

## Nettoyage

Les deux templates ont perdu 640 lignes de definitions anciennes et inactives. Les anciennes FAQ, onglets, confiance, rituel, senteur, craft, reviews, CTA final et `Consultes recemment` ne sont plus rendus.

Douze fichiers sources historiques restent physiquement presents mais ne sont plus references. Ne pas les supprimer sans controle exhaustif des references et autorisation explicite, car la suppression est destructive.

## P0 prochaine session : Ruban Vivant mobile

Patrice signale que 80 % du trafic est mobile, que le Ruban Vivant fonctionne mal sur mobile et que ses photos sont pales, presque floues et fortement degradees. Cette alerte remplace la precedente validation mobile comme verite creative actuelle.

Ordre de reprise obligatoire :

1. audit en lecture seule du live a 360, 390 et 430 px, avec gestes tactiles, pause, reprise, clic produit, quantite, ajout panier et `prefers-reduced-motion` ;
2. mesure de chaque asset du Ruban : dimensions intrinseques, poids, format, canal alpha, compression, ratio d'affichage et eventuel agrandissement CSS ;
3. comparaison des sept detourages avec les photographies officielles des huit references ;
4. correction du layout mobile sans affaiblir le concept desktop ;
5. remplacement ou regeneration GPT Image 2 seulement si la source est insuffisante, avec fidelite stricte du bijou ;
6. preview sur `199421952347`, captures 360, 390 et 430 px, puis attente du GO visuel explicite avant tout nouveau live.

Ne pas appliquer un simple filtre de nettete CSS avant d'avoir identifie la cause. Ne pas retoucher les nouveaux fichiers PDP dans ce lot sauf preuve d'un conflit direct.

## Prompt de reprise copiable

> Reprends MilAura depuis `AGENTS.md`, `docs/project-state.md`, `docs/workstreams.md`, `docs/codex-handoff.md`, `docs/checkpoints/2026-08-15-1155-ruban-vivant-live.md` et `docs/checkpoints/2026-08-15-1334-pdp-experience-live-handoff.md`. La nouvelle experience PDP est live sur `190430282075`, avec pullback 6/6 identique. Priorite P0 exclusive : auditer puis corriger le Ruban Vivant sur mobile 360, 390 et 430 px, ainsi que la paleur et le flou de ses images. Commence en lecture seule, declare un worktree dedie et reserve uniquement les fichiers du moteur de recommandations. Ne touche pas aux composants PDP, Hero, sticky, panier ou drawer sans preuve de conflit. Controle les dimensions et la compression des sources avant toute regeneration. Preview sur `199421952347`, aucun live sans nouveau GO visuel explicite de Patrice.
