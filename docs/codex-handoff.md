# MilAura - Handoff Codex

Date : 2026-08-08 10:10 CEST

## Mission de la prochaine session

Finaliser les trois portes placées après `L’atelier MilAura` pour récupérer les visiteurs qui n'ont pas encore choisi : par type de création, par besoin ou par diagnostic. `L’atelier MilAura` est terminé et live. La stratégie de ventes complémentaires reste reportée à une session dédiée.

## Lecture obligatoire, dans cet ordre

1. `AGENTS.md`.
2. `docs/project-state.md`.
3. `docs/reference/MILAURA-P0B-PRODUCT-REGISTER-2026.md`.
4. `docs/checkpoints/2026-08-08-0712-milaura-plan-p0a-handoff.md`.
5. `docs/checkpoints/2026-08-08-0814-milaura-menu-cercle-branding-handoff.md`.
6. `docs/superpowers/plans/2026-08-05-milaura-renouveau-plan-execution.md`.
7. `docs/superpowers/specs/2026-07-31-milaura-renouveau-commerce-design.md`.
8. `docs/reference/MILAURA-VISUAL-SYMBOLS-2026.md` avant tout travail visuel.
9. `docs/reference/MILAURA-CTA-SYSTEM-2026.md` avant tout CTA.

## État live confirmé

- Boutique : `https://milaura.fr`.
- Thème live : `dawn-X-milaura/main`, ID `190430282075`.
- Hero H1C final : live et validé visuellement par Patrice.
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
- Commit panneau mobile : `e89c76e4 feat: rebuild mobile navigation`.
- Commit correction et cadrage : `e49a18d2 fix: reserve Cercle rings for brand use`.
- Les deux commits sont poussés sur la branche distante.
- Divergence vérifiée après le dernier push : 0 ahead, 0 behind.

Deux fichiers panier sont modifiés localement par le lot P0A :

- `templates/cart.json`
- `templates/cart.milaura.json`

Ils retirent le reliquat panier obsolète. Ils ne sont ni stagés, ni commités, ni déployés. Ne pas lancer de reset, clean, pull global ou commit large.

Documents non versionnés ou modifiés par la reprise P0B :

- `docs/project-state.md` ;
- `docs/codex-handoff.md` ;
- `docs/reference/MILAURA-P0B-PRODUCT-REGISTER-2026.md`.
- `sections/milaura-selection-atelier.liquid` ;
- `templates/index.json`.

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
4. Étape active : repositionner et finaliser les trois portes.
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

> Reprends MilAura depuis `docs/codex-handoff.md` dans `/Users/paesano/Documents/MilAura website/dawn-X-milaura`. P0A, P0B et `L’atelier MilAura` sont terminés. L'atelier est live avec quatre produits saisonniers. Commence par relire et finaliser les trois portes placées juste après les produits : type de création, besoin et diagnostic. Préserve les diffs locaux du panier et le travail Hero concurrent.
