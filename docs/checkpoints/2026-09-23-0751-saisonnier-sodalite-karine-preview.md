# Bibliotheque saisonniere, Sodalite permanente et Selection de Karine, preview privee

Date : 2026-09-23 07:51 CEST

## Statut

`PASS TECHNIQUE SUR THEME PRIVE`. Le GO visuel Patrice, les actions Shopify Admin, l integration, la release et le live restent des gates distinctes. Le theme live `190430282075` n a pas ete modifie.

- Branche : `codex/milaura-seasonal-library-20260923`
- Worktree : `/Users/paesano/Documents/MilAura website/_worktrees/seasonal-library-20260923`
- Base : `3b861497`, lot Automne deja live
- Theme prive : `200259043675`

## Decisions implementees

1. `Home Occasion` reste le slot saisonnier récurrent de la Home.
2. Le futur hub public porte exactement le H1 `Sélections saisonnières`. Il conserve les landings encore utiles, y compris en hors-saison, sans vocabulaire d archive expirée.
3. Les landings liées à une pierre restent permanentes et rejoignent le parcours `Pierres de A à Z`.
4. `/collections/par-pierre-sodalite` devient intemporelle. Les références à `Septembre 2026` et à la rentrée sont retirées. Les médias `milaura-rentree-sodalite-landing-v2-*` sont conservés.
5. `Cadeaux > Rentrée en Sodalite` devient `Cadeaux > Sélection de Karine`, vers `/collections/selection-de-karine`.
6. La section Aigue-marine de la Home est remplacée par un composant dynamique `La sélection de Karine`, alimenté par la collection `selection-de-karine`.

## Implementation

- Nouveau composant Home : `sections/milaura-home-karine-selection.liquid`.
- Nouveau hub : `sections/milaura-seasonal-library.liquid` et `templates/page.selections-saisonnieres.json`.
- Home : `templates/index.json` utilise la collection `selection-de-karine` et trois cartes produit canoniques.
- Sodalite : `templates/collection.milaura-pierre-sodalite.json` conserve la vidéo et les posters `landing-v2`, avec un contenu neutre et produit.
- Guide : `templates/page.milaura-guide-pierres.json` relie Sodalite à `/collections/par-pierre-sodalite` avec `Voir les bijoux`.
- Navigation : `snippets/milaura-nav-curated-links.liquid` remplace le libellé de rentrée par `Sélection de Karine` sur desktop et mobile.
- Footer local : `sections/milaura-footer.liquid` contient le futur lien `/pages/selections-saisonnieres`, volontairement non poussé tant que la page Admin n existe pas.
- Ancien template non affecté `templates/collection.selection-de-karine.json` supprimé localement pour éviter une future réactivation du contenu Sodalite daté.
- Contrat et registre mis à jour dans `docs/reference/HOME-SECTION-2-OCCASIONS.md`, `docs/reference/milaura-home-occasion-registry.json`, `docs/campaigns/automne/manifest.md` et `docs/campaigns/README.md`.

## Nettoyage medias

Audit local et pull texte du theme live : aucune reference restante vers les familles `hero-v3`, `hero-v4`, `chloe`, `chapelet-porte` ou `landing-desktop-v1`. Les quatre medias `landing-v2` restent references par la landing Sodalite et ont ete verifies en navigateur.

Douze fichiers prouves orphelins, total Git `18 571 046` octets, sont supprimes uniquement dans la branche :

- `assets/milaura-rentree-sodalite-chapelet-porte.webp`
- `assets/milaura-rentree-sodalite-chloe-6s-4x5.mp4`
- `assets/milaura-rentree-sodalite-chloe-poster-4x5.webp`
- les quatre medias `milaura-rentree-sodalite-hero-v3-*`
- les quatre medias `milaura-rentree-sodalite-hero-v4-*`
- `assets/milaura-rentree-sodalite-landing-desktop-v1.mp4`

La suppression distante n est pas executee. Les anciennes URLs CDN peuvent donc encore repondre `200` jusqu au GO live et a une suppression ciblee sans risque de theme-wide delete.

## Verification

- `git diff --check` : PASS.
- `python3 tools/check_copywriting.py` : `COPYWRITING MILAURA: PASS`, 362 fichiers controles.
- `shopify theme check` : 0 erreur, 16 avertissements historiques dans 8 fichiers hors perimetre.
- Theme prive : push strict cible avec `--only`, `--nodelete`, aucune mutation du live.
- Pullback : sept fichiers sur huit identiques octet pour octet. `templates/index.json` ne differe que par la normalisation Shopify deja connue de six reglages Hero historiques ; les blocs `Home Occasion` et `La selection de Karine` correspondent. La section Karine corrigee a ensuite ete repullee identique, `cmp` code `0`.
- Home 390 px : largeur document `390`, trois cartes, aucune mention Aigue-marine dans la nouvelle section.
- Home 1440 px : largeur document `1440`, trois cartes de `244.09 px`, aucun debordement dans la section.
- Sodalite 390 et 1440 px : un H1, aucune mention `Septembre 2026` ou `rentree`, video `landing-v2-mobile` puis `landing-v2-desktop` chargee, aucun debordement.
- Guide A a Z 390 px : Sodalite est un lien vers `/collections/par-pierre-sodalite`, avec le libelle `Voir les bijoux`.
- Navigation : deux liens `Sélection de Karine`, desktop et mobile, et zéro lien `Rentrée en Sodalite`.
- Hub carrier 390 et 1440 px : un H1 `Sélections saisonnières`, lien Automne vers `/collections/selection-automne`, aucun message expiré, aucun débordement.
- Erreurs navigateur : aucune erreur de page pendant les parcours. Le seul message console observe sur la Home est le hot reload CLI desactive.

## Preuves visuelles locales

- `/private/tmp/milaura-home-karine-mobile-fixed.png`
- `/private/tmp/milaura-home-karine-desktop-fixed2.png`
- `/private/tmp/milaura-sodalite-evergreen-mobile.png`
- `/private/tmp/milaura-guide-sodalite-mobile.png`
- `/private/tmp/milaura-seasonal-library-mobile.png`
- `/private/tmp/milaura-seasonal-library-desktop.png`

## Gates suivantes

1. Patrice donne ou refuse le GO visuel sur la Home, la landing Sodalite et le hub.
2. Apres GO visuel, creer la page Shopify Admin `/pages/selections-saisonnieres`, lui affecter `page.selections-saisonnieres`, verifier son SEO et seulement alors pousser le lien footer.
3. Integrer la branche dans le checkout principal sans reprendre ses changements sales concurrents.
4. Apres GO live explicite, pousser les seuls fichiers valides sur `190430282075`, effectuer le pullback, la QA publique, puis supprimer individuellement les douze assets orphelins. Recontroler que chaque ancien asset renvoie autre chose que `200` sans toucher aux medias `landing-v2`.
