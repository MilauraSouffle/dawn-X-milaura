# MilAura - Clôture du Hero final

Date : 2026-08-08 13:18 CEST

## Résultat

Le Hero MilAura est finalisé, validé visuellement par Patrice et publié sur le thème live Shopify `dawn-X-milaura/main`, ID `190430282075`.

## Décisions visuelles validées

- Le triptyque conserve trois grands médaillons asymétriques avec contours or et aigue-marine.
- Trois preuves photographiques flottent entre le Hero et la section suivante, sans bandeau de fond : certificat LFG Paris, portrait de Karine et atelier de Metz.
- Le portrait de Karine est conservé pour humaniser la boutique.
- Le texte de conversion final est : `Des pierres naturelles choisies avec exigence pour leur beauté, leur qualité et leur symbolique en lithothérapie.`
- Seuls les mots `choisies avec exigence` reçoivent un soulignage fin, irrégulier et doré.
- Les anciens doubles traits prune et aigue-marine du texte de conversion ont été supprimés.
- La hiérarchie du slogan met davantage en valeur `beauté` et `vertu` sans ajouter de décoration concurrente.
- Sur desktop uniquement, les trois photos du triptyque remontent de `34px` à `40px` selon la largeur. Cette correction supprime le chevauchement avec les preuves photographiques.
- Le mobile conserve sa composition et son positionnement antérieurs.

## Fichier publié

- `sections/milaura-hero-portal.liquid`

## Déploiement et validation

- Déploiement ciblé avec `shopify theme push --only sections/milaura-hero-portal.liquid`.
- Thème live : `190430282075`.
- Theme Check : 272 fichiers, 0 erreur, 29 avertissements historiques hors périmètre.
- Pullback ciblé du fichier live : SHA-256 local et distant identique, `8f43fd3284f3b0df4c235876fd9cb0f620d583b325a4ac1d01eabe12fc2acbe6`.
- Contrôle public desktop `1440 x 1200` : CTA visible, environ `2px` entre le médaillon gauche et le portrait de Karine, environ `32px` entre le médaillon droit et la preuve atelier.
- Contrôle public mobile `390 x 1250` : décalage desktop neutralisé, CTA visible, composition inchangée.

## Commits du lot Hero

- `9a809e0d` : preuves photographiques et cadrages du Hero.
- `ed455a9f` : hiérarchie typographique du slogan.
- `3b98c937` : texte de conversion et soulignage doré.
- `45a225fa` : séparation du triptyque et des preuves.

La branche `codex/milaura-reconcile-2026-08-07` a été poussée après `45a225fa`.

## État local préservé

Ces fichiers restent hors du lot Hero et n'ont pas été modifiés, stagés ou déployés pendant la correction finale :

- `templates/cart.json` ;
- `templates/cart.milaura.json` ;
- `assets/milaura-hero-proof-karine.webp` ;
- `sections/milaura-selection-atelier 2.liquid`.

## Reprise recommandée

Le Hero est fermé. Reprendre le plan homepage par le contrôle du lot des trois portes présent dans le commit `7f4093f7`, puis confirmer son état live et son approbation visuelle avant de poursuivre vers la Pierre du moment.
