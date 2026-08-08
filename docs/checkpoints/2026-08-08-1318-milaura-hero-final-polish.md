# MilAura - Clôture du Hero final

Date : 2026-08-08 13:52 CEST

## Résultat

Le Hero MilAura est finalisé et publié sur le thème live Shopify `dawn-X-milaura/main`, ID `190430282075`. Patrice a validé visuellement la direction et les passes précédentes. Les deux photographies de réassurance demandées en fin de session ont été remplacées, déployées et contrôlées par pullback ciblé. Leur rendu live final reste à confirmer visuellement par Patrice.

## Décisions visuelles et correction finale demandée

- Le triptyque conserve trois grands médaillons asymétriques avec contours or et aigue-marine.
- Trois preuves photographiques flottent entre le Hero et la section suivante, sans bandeau de fond : nouveau visuel LFG Paris à gauche, portrait de Karine inchangé au centre et nouvelle photographie de l'atelier de Metz à droite.
- Les deux nouvelles sources fournies par Patrice ont seulement été converties en WebP et cadrées en CSS. Aucune génération ou retouche IA n'a été appliquée.
- Le portrait de Karine est conservé pour humaniser la boutique.
- Le texte de conversion final est : `Des pierres naturelles choisies avec exigence pour leur beauté, leur qualité et leur symbolique en lithothérapie.`
- Seuls les mots `choisies avec exigence` reçoivent un surlignage champagne horizontal derrière la moitié basse des lettres.
- Le premier soulignage irrégulier a été refusé après contrôle à fort zoom puis entièrement supprimé. La version finale n'utilise aucun trait, rotation, `clip-path` ou pseudo-élément.
- Les anciens doubles traits prune et aigue-marine du texte de conversion ont été supprimés.
- La hiérarchie du slogan met davantage en valeur `beauté` et `vertu` sans ajouter de décoration concurrente.
- Sur desktop uniquement, les trois photos du triptyque remontent de `34px` à `40px` selon la largeur. Cette correction supprime le chevauchement avec les preuves photographiques.
- Le mobile conserve sa composition et son positionnement antérieurs.

## Fichiers publiés

- `assets/milaura-hero-proof-certificat-lfg.webp`
- `assets/milaura-hero-proof-atelier-metz.webp`
- `sections/milaura-hero-portal.liquid`

## Déploiement et validation

- Déploiement ciblé limité aux deux WebP et à `sections/milaura-hero-portal.liquid`.
- Thème live : `190430282075`.
- Theme Check : 0 erreur, avertissements historiques hors périmètre.
- Pullback ciblé des trois fichiers live : correspondance exacte avec le local.
- SHA-256 LFG local et live : `3851ae42dfcb9fc31ba3940888792c9f3b14ec71a4547e470b9c44ba1fb75bdf`.
- SHA-256 atelier local et live : `115aebde3c849fe1e00b183219e77bcf9bc88b23fe57b2c6ab57cdee1e52806e`.
- SHA-256 section Hero local et live : `de7161ae3992c528e51b4b33bc7d253832e1023a356f8e174395579124321afb`.
- Contrôle public desktop `1440 x 1200` : CTA visible, environ `2px` entre le médaillon gauche et le portrait de Karine, environ `32px` entre le médaillon droit et la preuve atelier.
- Contrôle public mobile `390 x 1250` : décalage desktop neutralisé, CTA visible, composition inchangée.
- Aucun Chrome ou Playwright n'a été ouvert pour la dernière substitution, conformément à la demande de Patrice. La validation de cette passe est technique et non une approbation visuelle.

## Commits du lot Hero

- `9a809e0d` : preuves photographiques et cadrages du Hero.
- `ed455a9f` : hiérarchie typographique du slogan.
- `3b98c937` : texte de conversion et soulignage doré.
- `45a225fa` : séparation du triptyque et des preuves.
- `78bbb26b` : remplacement du soulignage refusé par le surlignage champagne final.
- `6848e181` : remplacement des visuels LFG et atelier, avec cadrages associés.

La branche `codex/milaura-reconcile-2026-08-07` a été poussée après `6848e181`.

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

Confirmer visuellement les deux nouvelles images de réassurance sur le live, puis reprendre le plan homepage par le contrôle du lot des trois portes présent dans le commit `7f4093f7` avant de poursuivre vers la Pierre du moment.
