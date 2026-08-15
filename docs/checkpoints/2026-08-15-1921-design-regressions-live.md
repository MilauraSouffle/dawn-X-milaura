# Correctifs design cibles deployes en production

Date : 2026-08-15 19:21 CEST

## Resultat

Le lot de correction des regressions visuelles signalees par Patrice est integre a `codex/milaura-integration`, pousse sur GitHub et deploye sur le theme live Shopify `190430282075`.

1. Le faux bandeau sous le Hero mobile a disparu. La section suivante commence exactement a la fin du Hero.
2. Le dock mobile est reactive et contient Menu, Rechercher, Contact, Cercle et Panier.
3. La navbar mobile montre uniquement le logo flottant a gauche et `Trouver ma pierre` a droite. Le burger, la recherche et le panier ne sont plus dupliques dans la barre haute.
4. Le panneau du menu masque la barre haute sans masquer le dock. Le drawer panier masque la navbar, le dock et la sticky pendant son ouverture.
5. La sticky PDP apparait apres le passage complet du CTA principal du Hero produit puis reste fixe, y compris quand l'utilisateur remonte. Le Ruban Vivant ne la masque plus.
6. La navbar hors Home reste transparente avec Nacre a 16 % et blur de 12 px.
7. Les enveloppes de fond desktop sont full width, sans marge globale laterale.

## Git

- Branche de lot : `codex/milaura-design-regressions-20260815`.
- Commits du lot : `165ebf7a` puis `e768748f`.
- Integration : fast-forward de `c0650b24` vers `e768748f` sur `codex/milaura-integration`.
- Branche de lot et branche d'integration poussees sur GitHub.
- Worktree du lot retire apres verification de son etat propre.

## Deploiement Shopify

- Theme de developpement valide : `199421952347`.
- Theme live deploye : `190430282075`.
- Push live cible avec `--allow-live`, `--nodelete` et `--strict`.
- Sauvegarde avant push : `/private/tmp/milaura-live-backup-design-20260815.ngx5kw`.
- Pullback apres push : `/private/tmp/milaura-live-pullback-design-20260815.fNRid9`.
- Les 8 fichiers deployes sont identiques octet pour octet au pullback live :
  - `assets/milaura-navigation.css`
  - `assets/milaura-navigation.js`
  - `assets/milaura-recommendations.css`
  - `assets/milaura.css`
  - `sections/footer-group.json`
  - `sections/milaura-dock.liquid`
  - `sections/milaura-hero-portal.liquid`
  - `sections/milaura-sticky-bar.liquid`

## Validation

- `git diff --check` : OK.
- `node --check assets/milaura-navigation.js` : OK.
- Shopify Theme Check : 0 erreur, 17 avertissements historiques dans 9 fichiers hors perimetre.
- Live Home 430 px : logo et `Trouver ma pierre` seuls dans la navbar, dock visible, Hero et section suivante jointifs avec un ecart de 0 px.
- Live Home 360 px : logo, action et dock dans la largeur du viewport.
- Live PDP 390 px : navbar transparente avec blur, sticky cachee avant le CTA, visible apres le CTA et encore visible apres retour en haut.
- Live menu mobile : panneau visible, barre haute masquee, dock visible.
- Live panier mobile : drawer actif, navbar, dock et sticky masques.
- Live PDP 1440 px : navbar et cinq premieres sections a 1440 px, position x a 0, paddings lateraux globaux a 0.

## Limite conservee

Le doublon `Rituels & bien-etre` deja present dans les donnees de navigation reste intact. Il est hors du perimetre design demande et n'a pas ete modifie.
