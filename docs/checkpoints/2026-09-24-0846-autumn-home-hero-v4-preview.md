# Hero Home Automne V4 en preview

Date : 2026-09-24 08:46 CEST

Statut : `PREVIEW TECHNIQUE PASS, GO VISUEL PATRICE EN ATTENTE`

## Resultat

Le Hero Automne de la Home a ete recompose autour des cinq bracelets choisis par Patrice :

- Bracelet dore en amethyste, cornaline et cristal de roche
- Bracelet en cornaline 8 mm
- Bracelet dore en cornaline 6 mm
- Bracelet Iris dore en aigue-marine, cornaline et grenat 4 mm
- Bracelet dore en grenat rhodolite 3 mm

La branche est conservee comme accent. Les boucles pendantes en grenat sont accrochees par leur crochet et restent sous la navigation. Le collier qui traversait le menu a ete retire. La grande nappe claire gauche a ete retiree ; le texte conserve sa lisibilite sans masquer la chute des feuilles.

La video de huit secondes boucle maintenant en continu. Le bouton expose les etats `Pause` et `Lire`, conserve une alternative manuelle et respecte la reduction de mouvement et le mode economie de donnees.

## Theme et perimetre

- Branche : `codex/milaura-autumn-hero-v4-20260924`
- Worktree : `/Users/paesano/Documents/MilAura website/_worktrees/autumn-hero-v4-20260924`
- Theme prive : `Development (570851-mac-1)` `201797534043`
- Preview : `https://milaura-2.myshopify.com?preview_theme_id=201797534043`
- Theme public exclu : `190430282075`
- Shopify Admin, produits, prix, stocks, collection et navigation : intouches

Huit fichiers theme pousses avec `--only`, `--nodelete` et `--strict` :

1. `assets/milaura-home-seasonal-media.js`
2. `assets/milaura-home-seasonal.css`
3. `sections/milaura-selection-atelier.liquid`
4. `templates/index.json`
5. `assets/milaura-automne-2026-bracelets-desktop-v4.webp`
6. `assets/milaura-automne-2026-bracelets-mobile-v4.webp`
7. `assets/milaura-automne-2026-branch-earrings-desktop-v4.webp`
8. `assets/milaura-automne-2026-branch-earrings-mobile-v4.webp`

## Verification

- `python3 tests/css_contract_test.py` : PASS, quatre actifs de surface conformes et aucune section Liquid avec CSS inline
- `node --check assets/milaura-home-seasonal-media.js` : PASS
- parsing JSON de `templates/index.json` : PASS
- `git diff --check` : PASS
- `shopify theme check` : zero erreur, seize avertissements historiques dans huit fichiers hors lot
- QA navigateur desktop `1440 x 900` : largeur document egale au viewport, cinq bracelets visibles, branche sous le menu, zero image cassee
- QA navigateur mobile `390 x 844` : largeur document egale au viewport, composition adaptee, texte place apres le media, zero image cassee
- boucle video : mesure avant `4.758 / 8 s`, puis `1.931 / 8 s` neuf secondes plus tard, lecture toujours active et attribut `loop=true`
- controle video : `Pause` place la video dans l etat `paused`, puis `Lire` relance l etat `playing`
- journal navigateur : aucune erreur ; seulement l information normale de hot reload absent sur une preview distante
- pullback frais du theme prive : huit fichiers sur huit identiques octet par octet au worktree

Captures locales de recette :

- `/private/tmp/milaura-autumn-hero-v4-20260924/desktop-1440x900-final-clean.png`
- `/private/tmp/milaura-autumn-hero-v4-20260924/mobile-390x844-final-clean.png`

## Gate restante

Patrice doit donner son GO visuel sur la preview. Aucun commit d integration et aucun push sur le theme public ne sont autorises avant ce GO, puis un GO live explicite distinct.
