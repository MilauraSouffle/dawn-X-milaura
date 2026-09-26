# Bento produit star Geode, release live

Date : 2026-09-26 09:38 CEST

## Demande

Patrice valide la nouvelle composition du bento produit star de la geode GC0256 sur la landing `Pieces rares & de collection`, puis demande le commit, le push Git et le deploiement live.

## Perimetre

- `assets/milaura-rare-pieces-landing.css`
- `sections/milaura-rare-pieces-landing.liquid`
- `templates/collection.milaura-pieces-rares.json`
- documentation de release de ce lot

Le hero et le carousel F04 rejetes sont explicitement exclus. Le theme live est `190430282075`.

## Contenu valide

- Vue principale : position 1, packshot contractuel frontal.
- Vue secondaire : position 4, macro des cristaux.
- Vue tertiaire : position 7, projection dans un interieur.
- Bureau : geode dominante, deux vues secondaires et panneau Nacre.
- Mobile : vue complete, deux vues secondaires cote a cote, puis informations, prix et CTA.
- Texte : `Cette cathedrale d amethyste AA+ a ete choisie pour sa silhouette elancee, sa cavite profonde et le contraste entre son coeur violet et ses bandes minerales plus claires. Une piece de collection qui prend immediatement sa place dans un interieur.`

## Preuves avant release

- Les trois fichiers tires du live avant edition sont identiques a `codex/milaura-integration` au commit `9324d0e4`.
- `git diff --check` : PASS.
- Preview privee `201935323483` : desktop et mobile `390 x 844`, images chargees, aucun debordement.
- Pullback preview : identique.

## Etat

`FERME, INTEGRE, POUSSE ET LIVE VERIFIE` au 2026-09-26 09:42 CEST.

## Release

- Commit fonctionnel : `169c8d93 feat: refine rare pieces geode bento`.
- Branche de release poussee : `codex/milaura-geode-bento-live-20260926`.
- Integration : fast-forward sur `codex/milaura-integration`, puis push confirme.
- Deploiement Shopify cible sur le theme public `190430282075`, sans suppression : les trois seuls fichiers du perimetre theme.
- Pullback live final : identique `3/3` par SHA-256.

## QA publique

- Route : `https://milaura.fr/collections/pieces-rares`, sans parametre de preview ni barre de preview.
- Bureau `1440 x 900` : bento `914 x 634px`, texte exact, titre et CTA presents, aucun debordement.
- Mobile `390 x 844` : galerie `390 x 609px`, packshot principal `390 x 406px`, deux vues secondaires `191 x 187px`, aucun debordement.
- Medias charges : `01-packshot-principal-strict.jpg`, `04-macro-cristaux.jpg`, `07-scene-interieur.jpg`.
- Erreurs navigateur : aucune sur bureau et mobile.
- Captures de preuve : `/private/tmp/milaura-geode-bento-live-desktop-1440.png`, `/private/tmp/milaura-geode-bento-live-mobile-390.png`, `/private/tmp/milaura-geode-bento-live-mobile-390-copy.png`.

## Exclusions preservees

- Le hero et le carousel F04 rejetes n ont pas ete deployes.
- Les changements sales et concurrents du checkout d integration sont restes intacts.
