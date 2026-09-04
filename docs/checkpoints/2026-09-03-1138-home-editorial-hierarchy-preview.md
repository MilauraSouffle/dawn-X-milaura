# Polish 6 - hierarchie editoriale et CTA - preview privee

Date : 2026-09-03 11:38 CEST

## Etat

- Branche : `codex/milaura-ui-hierarchy-polish6-20260903`
- Base integration : `1a529e7126ba8b3708180a9cf037186340d01a7a`
- Commits fonctionnels pousses : `96b6d422`, `ce2f56d7`, `7b8860c1`
- Theme prive : `200259043675`, `MilAura Sodalite Rentree Preview 2026-08-21`
- Theme live : `190430282075`, intact
- Gate suivante : GO visuel de Patrice avant integration, puis GO live distinct

## Perimetre livre

- Systeme partage pour les noms de chapitre avec couleur aigue-marine et repere vertical or.
- Systeme partage pour les titres editoriaux avec socle or court.
- CTA editoriaux conserves sous forme soulignee, avec cible de 48 px, libelle renforce et carre mineral directionnel.
- Migration pilote de la Home : Sodalite, Aigue-marine, chemins de choix, best-sellers, nouveautes, occasions et editorial Karine.
- Un seul CTA responsive par section produits, sans duplication mobile et desktop.
- Chargement unique des styles partages depuis `layout/theme.liquid` et suppression des chargements locaux devenus morts.
- Aucun texte public, produit, prix, stock, Admin, Ads ou template metier modifie.

## Verification

- `shopify theme check` : 0 erreur, 16 warnings historiques dans des fichiers hors lot.
- `git diff --check` : PASS.
- QA theme prive en 360, 390, 430 et 1440 px : aucun debordement horizontal.
- CTA editoriaux visibles : hauteur 48 px, texte 15 px, filet or 2 px, carre directionnel 30 px.
- Noms de chapitre : 13 px mobile, 14 px desktop, repere or 2 px.
- Sections best-sellers et nouveautes : un seul CTA dans le DOM et un seul CTA visible a chaque breakpoint.
- Home, landing Sodalite, landing Aigue-marine et PDP controlees sans erreur Liquid.
- Dependances deja appelees par le layout, `assets/milaura-c1-release-bridge.js` et `snippets/milaura-c1-release-bridge.liquid`, synchronisees sur le theme prive uniquement.
- Pullback cible du theme prive : 19 fichiers sur 19 identiques au worktree.

## Preview

`https://milaura-2.myshopify.com/?preview_theme_id=200259043675`

## Reprise

Attendre le verdict visuel de Patrice. Sur GO, integrer les commits fonctionnels et ce checkpoint dans `codex/milaura-integration`, pousser la branche d'integration, puis ne deployer le live que sur un GO live explicite distinct.
