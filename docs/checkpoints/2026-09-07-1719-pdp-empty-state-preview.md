# Note PDP et etats vides Mariage, preview du 2026-09-07

Date : 2026-09-07 17:19 CEST.

## Resultat

- La mention `Photos non contractuelles` est remplacee sur la fiche produit par le texte valide par Patrice.
- La premiere phrase et l apercu jusqu a `son veinage...` restent visibles en 13 px. Un disclosure natif `Lire la suite` affiche le texte complet et `Masquer la suite` le replie.
- Dans le hub Mariage, les produits indisponibles ne sont plus rendus dans les correspondances. Un onglet sans offre affiche un etat vide sans carte ni fond ajoute : `Nous n’avons pas encore selectionne de bijou pour ces noces.` puis `Voir les bijoux disponibles`.
- Une correspondance avec des produits disponibles conserve ses cartes. La revue a confirme 11 produits pour 17 ans et aucun produit pour 50 ans.

## Fichiers sources

- `sections/milaura-product-hero.liquid`
- `assets/milaura-product-experience.css`
- `sections/milaura-catalogue-hub.liquid`
- `assets/milaura-catalogue-hub.css`
- `docs/workstreams.md`

## Shopify

- Theme live non modifie : `190430282075`.
- Preview privee : `201065824603`, `MilAura Notes et etats vides Preview 2026-09-07`.
- La duplication Shopify avait produit un `layout/theme.liquid` tronque a 48 octets. La preview uniquement a ete reparee avec le layout local, dont le SHA-256 est identique au layout recupere depuis le live : `768517d6e197e69387841a8589adeaa8714928ad770debf816cfce8614cb427a`.
- Les quatre fichiers fonctionnels ont ete pousses de facon ciblee avec `--nodelete`, puis recuperes pour controle d identite.

## Verification

- `shopify theme check --path . --fail-level error` : zero erreur, 16 avertissements historiques dans huit fichiers non modifies.
- `python3 tools/check_copywriting.py` : PASS, 332 fichiers controles.
- `git diff --check` : PASS.
- Browser QA isolee : desktop 1440 px et mobile 360, 390, 430 px, sans debordement horizontal.
- PDP : apercu exact, ouverture et fermeture du disclosure, texte complet exact, controle stable dans les deux etats.
- Mariage : 17 ans conserve 11 cartes ; 50 ans affiche l etat vide, le CTA et la selection d annee.
- Revue visuelle independante : aucun defaut bloquant. Le CTA a ete raccourci et la couleur du controle PDP stabilisee apres cette revue.

## Limite

- Le lot performance du brief n a pas ete mesure ni modifie. Le module Chrome DevTools exige par la procedure performance n est pas disponible dans cette session.
- Publication live exclue sans GO live distinct de Patrice.
