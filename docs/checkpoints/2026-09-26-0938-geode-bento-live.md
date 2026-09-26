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

`RELEASE EN COURS`. Commit, push, deploiement cible, pullback live et QA publique restent a inscrire ci-dessous.
