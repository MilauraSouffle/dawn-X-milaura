# MilAura - Handoff Codex

Date : 2026-08-08 13:18 CEST

## Mission de la prochaine session

Le Hero est terminé, validé et live. Reprendre par le contrôle du lot des trois portes présent dans le commit `7f4093f7` : confirmer son état live et obtenir l'approbation visuelle de Patrice avant de poursuivre vers la Pierre du moment. La stratégie de ventes complémentaires reste reportée à une session dédiée.

## Lecture obligatoire, dans cet ordre

1. `AGENTS.md`.
2. `docs/project-state.md`.
3. `docs/checkpoints/2026-08-08-1318-milaura-hero-final-polish.md`.
4. `docs/reference/MILAURA-P0B-PRODUCT-REGISTER-2026.md`.
5. `docs/checkpoints/2026-08-08-0712-milaura-plan-p0a-handoff.md`.
6. `docs/checkpoints/2026-08-08-0814-milaura-menu-cercle-branding-handoff.md`.
7. `docs/superpowers/plans/2026-08-05-milaura-renouveau-plan-execution.md`.
8. `docs/superpowers/specs/2026-07-31-milaura-renouveau-commerce-design.md`.
9. `docs/reference/MILAURA-VISUAL-SYMBOLS-2026.md` avant tout travail visuel.
10. `docs/reference/MILAURA-CTA-SYSTEM-2026.md` avant tout CTA.

## État live confirmé

- Boutique : `https://milaura.fr`.
- Thème live : `dawn-X-milaura/main`, ID `190430282075`.
- Hero H1C final : live et validé visuellement par Patrice le 2026-08-08 après les passes photographies, copywriting, hiérarchie et espacement.
- Texte final du Hero : `Des pierres naturelles choisies avec exigence pour leur beauté, leur qualité et leur symbolique en lithothérapie.`
- Les trois preuves photographiques flottent sans bandeau : LFG Paris, portrait de Karine et atelier de Metz.
- Le triptyque remonte de `34px` à `40px` sur desktop uniquement et ne chevauche plus les preuves. Le mobile est inchangé.
- Pullback du Hero live identique au local, SHA-256 `8f43fd3284f3b0df4c235876fd9cb0f620d583b325a4ac1d01eabe12fc2acbe6`.
- Dock mobile V2 : live et validé.
- Nouveau panneau mobile : live. Patrice a répondu `j'aime beaucoup bravo`.
- Croix de fermeture finale : dorée, simple, sans anneaux.
- Pullback ciblé de `sections/milaura-navbar.liquid` : identique au local après déploiement.
- Validation publique : mobile 390 x 844, fermeture par Echap et desktop 1440 px.
- Theme Check : 0 erreur, 29 avertissements historiques.
- `L’atelier MilAura` : live sur le thème `190430282075` depuis le 2026-08-08 à 10:06 CEST.
- Livraison standard France : 5,80 EUR jusqu'à 49,99 EUR, gratuite à partir de 50 EUR.
- Europe : tarif payant de 12 EUR.
- `MILAURA-LIV50` et `MILAURA-LIV19` : France uniquement, tarif d'expédition maximum 6 EUR.
- Guadeloupe, Martinique, La Réunion, États-Unis et reste du monde : aucune zone d'expédition active au contrôle du 2026-08-08.

## Décision de marque impérative

Le double anneau irrégulier croisé, un contour or et un contour aigue-marine, est réservé à deux usages :

1. le Cercle MilAura ;
2. les cadres de photographies produit importantes.

Ne pas l'utiliser autour d'une croix de fermeture, d'une icône de recherche, du panier, d'un focus, d'un séparateur, d'un champ, d'un contrôle ou d'un CTA générique.

Le cabochon `Trouver ma pierre` conserve ses contours décalés comme exception validée. Référence canonique : `docs/reference/MILAURA-VISUAL-SYMBOLS-2026.md`.

## État Git à préserver

- Checkout : `/Users/paesano/Documents/MilAura website/dawn-X-milaura`.
- Branche : `codex/milaura-reconcile-2026-08-07`.
- HEAD du lot Hero poussé : `45a225fa fix: separate hero triptych from proof`.
- Commits Hero précédents : `9a809e0d`, `ed455a9f` et `3b98c937`.
- Commit des trois portes présent sur la branche : `7f4093f7`. Ne pas assimiler sa présence Git à une validation visuelle ou live sans nouveau contrôle.
- La branche locale était alignée avec la branche distante après le push de `45a225fa`.

Deux fichiers panier sont modifiés localement par le lot P0A :

- `templates/cart.json`
- `templates/cart.milaura.json`

Ils retirent le reliquat panier obsolète. Ils ne sont ni stagés, ni commités, ni déployés. Ne pas lancer de reset, clean, pull global ou commit large.

Fichiers hors lot toujours présents localement :

- `assets/milaura-hero-proof-karine.webp` ;
- `sections/milaura-selection-atelier 2.liquid`.

Ne pas les supprimer sans validation. Le second est un doublon iCloud dont le nom est invalide pour Shopify.

Validation de `L’atelier MilAura` :

- version simple retenue après le refus des directions éditoriale et du toit dessiné ;
- cartes natives réutilisées via `snippets/milaura-card-product.liquid` ;
- contour aigue-marine limité à cette section ;
- titre doré en Dancing Script `L’atelier MilAura` et sous-titre sur les créations choisies et préparées par Karine ;
- quatre cartes sur toute la largeur disponible en desktop et carousel avec aperçu de la suivante en mobile ;
- Theme Check : 0 erreur, 29 avertissements historiques ;
- JSON de `templates/index.json` valide après retrait du commentaire Shopify ;
- preview mobile 390 x 844 et desktop 1440 px contrôlée ;
- CTA Hero vers la section contrôlé ;
- ajout du Bracelet Amazonite contrôlé, drawer ouvert et total 29,90 EUR ;
- déploiement Shopify ciblé limité à la section et à `templates/index.json` ;
- pullback de la section et de `templates/index.json` identique au local ;
- Hero public intact après normalisation par Shopify de trois anciens réglages désormais absents du schéma ;
- validation publique mobile 390 x 844 et desktop 1440 px réussie.
- doublon iCloud non suivi `sections/milaura-selection-atelier 2.liquid` exclu de la preview car son nom est invalide pour Shopify ; ne pas le supprimer sans validation.

## Ordre d'exécution actif

1. P0A clos par décision de Patrice le 2026-08-08.
2. P0B terminé : quatre produits physiquement présents et rentables confirmés par Patrice.
3. Sélection de l'atelier terminée et live le 2026-08-08.
4. Étape active : contrôler le lot des trois portes de `7f4093f7`, confirmer son état live et sa validation visuelle.
5. Construire la landing Aigue-marine.
6. Inventorier et prototyper l'Atelier des émotions.

## P0A clos et P0B actif

Patrice considère P0A terminé. Les protections de livraison sont appliquées. `MILAURA15`, le cadeau et les automatisations n'ont pas été modifiés. Les coûts exacts manquants restent à compléter avant Ads et ne doivent pas être présentés comme confirmés.

P0B est validé par Patrice le 2026-08-08 avec quatre produits physiquement présents et disposant d'une bonne marge :

1. Bracelet Amazonite 6 mm ;
2. Distributeur Savon Lapis-Lazuli ;
3. Bougie Joie - Aventurine verte ;
4. Collier Jade.

Les quatre variantes Shopify et leurs images live sont identifiées. Les coûts exacts et délais de remplacement restent à documenter avant Ads. La sélection est provisoire : chaque produit doit être remplaçable depuis l'éditeur Shopify sans code.

## Architecture homepage validée

1. Hero de marque.
2. Sélection de l'atelier, quatre produits réels.
3. Trois portes pour les indécis.
4. Pierre du moment.
5. Karine et preuves.
6. Sur mesure et Atelier des émotions.
7. Cadeaux et mariage.
8. Journal.
9. Cercle MilAura.

## Contraintes durables

- Patrice publie seul les produits Shopify.
- Camilla s'arrête au brouillon.
- Chloé et Elena sont les mannequins documentés.
- Pas de promesse médicale.
- Pas de trafic payant avant économie et mesure fiables.
- Pas de suppression d'une bonne section avant sa destination opérationnelle.
- Pas de généralisation décorative du double anneau MilAura.

## Prompt prêt à copier

> Reprends MilAura depuis `docs/codex-handoff.md` dans `/Users/paesano/Documents/MilAura website/dawn-X-milaura`. Le Hero final et `L’atelier MilAura` sont live et validés. Commence par contrôler le lot des trois portes présent dans `7f4093f7`, puis confirme son état live et son approbation visuelle avant de poursuivre. Préserve les diffs locaux du panier et les fichiers non suivis signalés.
