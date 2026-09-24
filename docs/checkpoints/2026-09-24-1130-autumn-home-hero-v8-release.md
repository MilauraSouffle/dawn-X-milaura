# Hero Home Automne V8 responsive, release autorisee

Date : 2026-09-24 11:30 CEST

Statut : `FERME, INTEGRE, LIVE ET VERIFIE`

## Direction validee

- Fond : videos Automne existantes, conservees en lecture automatique et en boucle continue.
- Desktop : branche nue avec deux bracelets suspendus, degagee de la navigation ; flaque et boucles en grenat au bord inferieur droit.
- Mobile : composition verticale dediee, avec la branche dans la moitie haute et la flaque qui sort du bas du media.
- Elements rejetes et absents : bracelets entre-meles au bord gauche, bracelet Iris sur socle et montages Higgsfield.

## Copy validee

- Surtitre : `SELECTION D OCTOBRE`.
- H1 : `L automne vous va si bien`.
- Signature Dancing Script : `Grenat & cornaline`.
- Description : `Decouvrez une selection de bijoux et de mineraux en grenat et en cornaline, choisis pour leurs nuances profondes, du rouge sombre a l orange lumineux.`
- CTA : `DECOUVRIR LA SELECTION`.

Le theme conserve les apostrophes et accents francais dans le texte public ; ils sont retires ici uniquement pour respecter la convention documentaire historique du fichier.

## Fichiers de theme cibles

- `assets/milaura-home-seasonal-media.js`
- `assets/milaura-home-seasonal.css`
- `sections/milaura-selection-atelier.liquid`
- `templates/index.json`
- `assets/milaura-automne-2026-branch-bracelets-desktop-v6.webp`
- `assets/milaura-automne-2026-branch-bracelets-mobile-v6.webp`
- `assets/milaura-automne-2026-puddle-earrings-desktop-v6.webp`
- `assets/milaura-automne-2026-puddle-earrings-mobile-v6.webp`

## Verification preview

- Theme prive : `201797534043`.
- Mobile : `390 x 844`, largeur document `390px`, aucun debordement horizontal.
- Desktop : `1440 x 900`, largeur document `1440px`, aucun debordement horizontal.
- Texte, description et CTA rendus ; CTA mobile mesure a `48px` de haut.
- Video : `loop=true`, lecture active, retour de `0,86s` a `1,36s` apres une attente de `8,5s`, ce qui confirme le passage de la fin et la reprise automatique.
- Console : aucun message ne pointe vers les fichiers du lot ; seuls les echecs reseau Shopify consentement et telemetry deja connus apparaissent.
- Theme Check : zero erreur et seize avertissements historiques hors lot.
- Pullback prive : `8/8` identique au worktree.
- Theme public `190430282075` : intact a cette etape.

## Autorisation

Patrice a valide le hook, demande la version mobile, puis autorise explicitement le commit, le push et le deploiement live le 2026-09-24.

## Release live

- Commit de fonctionnalite : `9ed6cee2`.
- Branche `codex/milaura-autumn-hero-v4-20260924` poussee, puis integration en avance rapide dans `codex/milaura-integration` et push origin.
- Theme public : `190430282075`.
- Push cible de huit fichiers avec `--allow-live --nodelete --strict`.
- Snapshot avant remplacement des quatre fichiers existants : `/private/tmp/milaura-autumn-live-before-8JFgPj`.
- Pullback apres deploiement : `/private/tmp/milaura-autumn-live-pullback-Ar6ia5`, `8/8` identique.
- QA publique sans barre de preview a `390 x 844` et `1440 x 900` : aucun debordement, H1 et medias servis, quatre actifs responsive charges, video active avec `loop=true`.
- Boucle publique confirmee apres `8,5s` : temps video passe de `0,35s` a `0,86s`, lecture toujours active.
- Aucun produit, prix, stock, media produit, Shopify Admin ou Ads modifie.
