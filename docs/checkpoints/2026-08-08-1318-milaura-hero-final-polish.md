# MilAura - Clôture du Hero final

Date : 2026-08-08 13:32 CEST

## Résultat

Le Hero MilAura est finalisé et publié sur le thème live Shopify `dawn-X-milaura/main`, ID `190430282075`. Patrice a validé visuellement la direction et les passes précédentes. Le dernier décalage desktop a été demandé explicitement puis vérifié techniquement sur le site public.

## Décisions visuelles et correction finale demandée

- Le triptyque conserve trois grands médaillons asymétriques avec contours or et aigue-marine.
- Trois preuves photographiques flottent entre le Hero et la section suivante, sans bandeau de fond : certificat LFG Paris, portrait de Karine et atelier de Metz.
- Le portrait de Karine est conservé pour humaniser la boutique.
- Le texte de conversion final est : `Des pierres naturelles choisies avec exigence pour leur beauté, leur qualité et leur symbolique en lithothérapie.`
- Seuls les mots `choisies avec exigence` reçoivent un surlignage champagne horizontal derrière la moitié basse des lettres.
- Le premier soulignage irrégulier a été refusé après contrôle à fort zoom puis entièrement supprimé. La version finale n'utilise aucun trait, rotation, `clip-path` ou pseudo-élément.
- Les anciens doubles traits prune et aigue-marine du texte de conversion ont été supprimés.
- La hiérarchie du slogan met davantage en valeur `beauté` et `vertu` sans ajouter de décoration concurrente.
- Sur desktop uniquement, les trois photos du triptyque remontent de `34px` à `40px` selon la largeur. Cette correction supprime le chevauchement avec les preuves photographiques.
- Le mobile conserve sa composition et son positionnement antérieurs.

## Fichier publié

- `sections/milaura-hero-portal.liquid`

## Déploiement et validation

- Déploiement ciblé avec `shopify theme push --only sections/milaura-hero-portal.liquid`.
- Thème live : `190430282075`.
- Theme Check : 270 fichiers, 0 erreur, 28 avertissements historiques hors périmètre lors de la correction finale.
- Pullback ciblé du fichier live : SHA-256 local et distant identique, `0fa221e4eee886a3b0a4bcbda5052c55dcb822c65496bf3fc9dd1a251a7411ab`.
- Contrôle public desktop `1440 x 1200` : CTA visible, environ `2px` entre le médaillon gauche et le portrait de Karine, environ `32px` entre le médaillon droit et la preuve atelier.
- Contrôle public mobile `390 x 1250` : décalage desktop neutralisé, CTA visible, composition inchangée.

## Commits du lot Hero

- `9a809e0d` : preuves photographiques et cadrages du Hero.
- `ed455a9f` : hiérarchie typographique du slogan.
- `3b98c937` : texte de conversion et soulignage doré.
- `45a225fa` : séparation du triptyque et des preuves.
- `78bbb26b` : remplacement du soulignage refusé par le surlignage champagne final.

La branche `codex/milaura-reconcile-2026-08-07` a été poussée après `78bbb26b`.

## État local préservé

Ces fichiers restent hors du lot Hero et n'ont pas été modifiés, stagés ou déployés pendant la correction finale :

- `sections/milaura-choice-doors.liquid` ;
- `templates/index.json` ;
- `templates/cart.json` ;
- `templates/cart.milaura.json` ;
- `assets/milaura-hero-proof-karine.webp` ;
- `sections/milaura-selection-atelier 2.liquid`.

Les deux premiers diffs sont apparus hors de la correction du Hero. Leur provenance, leur état live et leur approbation visuelle restent à contrôler.

## Reprise recommandée

Le Hero est fermé. Reprendre le plan homepage par le contrôle du lot des trois portes présent dans le commit `7f4093f7`, puis confirmer son état live et son approbation visuelle avant de poursuivre vers la Pierre du moment.
