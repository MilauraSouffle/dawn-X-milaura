# Polish 2 Landing Sodalite, galerie Bento du produit star

Date : 2026-09-02 11:10 CEST

Statut : `GO VISUEL ACQUIS, INTEGRE, PAS LIVE`

## Demande

Transformer la photo unique du produit star Horus en galerie Bento sur mobile et desktop, sans modifier le reste de la Landing Sodalite.

## Perimetre exact

- `sections/milaura-sodalite-landing.liquid`
- aucun nouveau media ; la galerie utilise les images Shopify du produit deja publiees ;
- aucune modification de texte, prix, produit, collection, template JSON, Home, Admin, panier, Ads ou live.

## Composition retenue

- image principale : couverture produit sur fond mineral clair ;
- image secondaire : mise en situation portee ;
- image tertiaire : produit sur bois sombre ;
- la premiere grille plate, avec une grande image au-dessus de deux vignettes, a ete rejetee visuellement par Patrice le 2026-09-02 ;
- la version qui la remplace est une composition editoriale superposee : grande image produit, portrait vertical chevauchant a droite, detail sombre carre chevauchant en bas a gauche ;
- les cadrages sont propres a chaque vue : produit principal lisible, visage et bracelet visibles dans la vue portee, pendentif entier dans la vue sombre ;
- mobile : scene carree compacte, sans rang de miniatures ni effet catalogue ;
- desktop : meme composition superposee dans la colonne media, alignee avec le panneau texte ;
- repli automatique vers une image unique si un futur produit ne possede pas de vues secondaires.

## Preflight et publication privee

- base Git : `4957ba431669ffe4fb4954e7dd9cd8eed40f37db` ;
- branche : `codex/milaura-sodalite-star-bento-20260902` ;
- worktree : `/Users/paesano/Documents/MilAura website/_worktrees/sodalite-star-bento-20260902` ;
- theme prive : `200259043675` ;
- le fichier du theme prive etait identique au fichier canonique avant le push ;
- push cible avec `--nodelete --strict --only sections/milaura-sodalite-landing.liquid` ;
- pullback prive identique au fichier local, SHA-256 `11824f90e648d7412122fbe597df02d56c473055ebfe61a71b3f919ce85a94a2` ;
- aucun push live ; le fichier du theme live reste identique a l integration, SHA-256 `48ffa901989121a05cd7480f0b59a265f0695e4d136f874d2f40853dc1cd3c44`.

## Verifications

- `git diff --check` : PASS ;
- `shopify theme check` : 0 erreur, 16 warnings historiques hors lot ;
- 360, 390, 430 et 1440 px : trois images chargees, aucun overflow horizontal ;
- desktop 1440 px : galerie et panneau texte alignes, superpositions contenues dans la colonne media ;
- le lien unique de la galerie continue de pointer vers `/products/bracelet-horus-dore-en-sodalite-6-mm` ;
- console du theme prive : aucune erreur ni alerte ;
- aucun mouvement ou script ajoute.

## Preview

`https://milaura-2.myshopify.com/collections/selection-de-karine?preview_theme_id=200259043675`

## Integration

- GO visuel Patrice acquis le 2026-09-02 : `ah voila bravo jaime ca` ;
- GO integration Patrice acquis le 2026-09-02 : `GO INTEGRATION POLISH 2` ;
- les deux commits source ont ete integres sous une forme condensee dans `codex/milaura-integration` par `d180e7cb` ;
- branche d integration poussee et SHA distant verifie ;
- le theme live `190430282075` n a pas ete modifie.

## Gate restante

1. GO live separe avant toute mutation du theme `190430282075`.
