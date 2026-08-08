# MilAura - Handoff Codex

Date : 2026-08-08 08:14 CEST

## Mission de la prochaine session

Poursuivre le lot P0A sur l'économie du panier depuis le checkout canonique. Le hero, le dock et le panneau mobile sont terminés pour cette session. Préserver le travail panier déjà présent et appliquer le cadrage des symboles MilAura avant toute nouvelle modification visuelle.

## Lecture obligatoire, dans cet ordre

1. `AGENTS.md`.
2. `docs/project-state.md`.
3. `docs/checkpoints/2026-08-08-0712-milaura-plan-p0a-handoff.md`.
4. `docs/checkpoints/2026-08-08-0814-milaura-menu-cercle-branding-handoff.md`.
5. `docs/superpowers/plans/2026-08-05-milaura-renouveau-plan-execution.md`.
6. `docs/superpowers/specs/2026-07-31-milaura-renouveau-commerce-design.md`.
7. `docs/reference/MILAURA-VISUAL-SYMBOLS-2026.md` avant tout travail visuel.
8. `docs/reference/MILAURA-CTA-SYSTEM-2026.md` avant tout CTA.

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

Deux fichiers panier sont modifiés par la session P0A parallèle :

- `templates/cart.json`
- `templates/cart.milaura.json`

Ces fichiers n'ont pas été touchés, stagés, commités ou déployés par le lot navigation. Ne pas lancer de reset, clean, pull global ou commit large. Identifier le propriétaire P0A et préserver son diff.

## Ordre d'exécution actif

1. Terminer P0A : économie des paliers panier, cumuls Shopify et reliquats Scratch.
2. Identifier quatre produits physiquement présents et rentables.
3. Construire la Sélection de l'atelier.
4. Repositionner les trois portes.
5. Construire la landing Aigue-marine.
6. Inventorier et prototyper l'Atelier des émotions.

## P0A

Avant tout trafic payant :

- calculer cadeau, livraison, remise, frais et CAC dans le pire scénario ;
- vérifier le cumul réel des avantages Shopify ;
- vérifier stock, marge, délais, tracking et claims ;
- retirer ScratchToReveal des PDP quand ce lot arrive, puis le réutiliser plus tard comme mécanique distinctive d'inscription au Cercle ;
- ne pas réintroduire de friction dans le panier.

Codes et seuils connus :

- 30 EUR : cadeau ;
- 50 EUR : livraison ;
- 80 EUR : remise de 15 % ;
- `MILAURA-LIV50` ;
- `MILAURA15` ;
- cadeau variante `53142713925979`.

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

> Reprends MilAura depuis `docs/codex-handoff.md` dans `/Users/paesano/Documents/MilAura website/dawn-X-milaura`. Le hero, le dock et le panneau mobile sont live. Préserve les modifications concurrentes de `templates/cart.json` et `templates/cart.milaura.json`. Lis obligatoirement `docs/reference/MILAURA-VISUAL-SYMBOLS-2026.md` avant toute décision visuelle : le double anneau or et aigue-marine est réservé au Cercle et aux cadres photo produit importants. Poursuis P0A sans reset, clean, pull global ou commit non ciblé.
