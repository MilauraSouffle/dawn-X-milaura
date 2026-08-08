# MilAura - Handoff Codex

Date : 2026-08-08 18:10 CEST

## Mission de la prochaine session

Le Hero est terminé et live. Commencer par faire confirmer visuellement à Patrice sa dernière échelle typographique et les nouveaux visuels LFG et atelier, tous déjà déployés et vérifiés par pullback, puis contrôler le lot des trois portes avant de poursuivre vers la Pierre du moment. La stratégie de ventes complémentaires reste reportée à une session dédiée.

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
- Hero H1C final : live. Photographies, copywriting et hiérarchie validés visuellement par Patrice le 2026-08-08. Dernier espacement desktop demandé explicitement et vérifié techniquement.
- Texte final du Hero : `Des pierres naturelles choisies avec exigence pour leur beauté, leur qualité et leur symbolique en lithothérapie.`
- `choisies avec exigence` possède un surlignage champagne horizontal derrière la moitié basse des lettres. Aucun soulignage, aucune rotation et aucun pseudo-élément ne subsistent.
- Les trois preuves photographiques flottent sans bandeau : nouveau visuel LFG Paris, portrait de Karine inchangé et nouvelle photographie de l'atelier de Metz.
- Les deux nouvelles sources ont été converties en WebP et cadrées sans génération ou retouche IA.
- L'équation typographique est amplifiée sur desktop et mobile : échelle générale environ 20 % supérieure, contraste renforcé sur `beauté`, `vertu` et le résultat, zone desktop élargie à `min(51%, 860px)`.
- Le triptyque remonte de `34px` à `40px` sur desktop uniquement et ne chevauche plus les preuves. Le mobile est inchangé.
- Pullback des deux images et de la section Hero identique au local : LFG `3851ae42dfcb9fc31ba3940888792c9f3b14ec71a4547e470b9c44ba1fb75bdf`, atelier `115aebde3c849fe1e00b183219e77bcf9bc88b23fe57b2c6ab57cdee1e52806e`, section `de7161ae3992c528e51b4b33bc7d253832e1023a356f8e174395579124321afb`.
- Aucun Chrome ou Playwright n'a été ouvert pour cette dernière passe. Le déploiement est validé techniquement ; le rendu final des deux images reste à confirmer visuellement par Patrice.
- Dernier pullback typographique identique au local, SHA-256 `1ff6e40fb7f7044efa848608942e23631383beea7c878f17bd64a667f6c0a1ab`. Theme Check : 0 erreur et 29 avertissements historiques. Les formules ont été mesurées avec la police réelle sur neuf largeurs sans navigateur.
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
- Dernier commit fonctionnel Hero poussé : `c1411895 feat: amplify hero typography`.
- Commits Hero précédents : `9a809e0d`, `ed455a9f`, `3b98c937` et `45a225fa`.
- Commit des trois portes présent sur la branche : `7f4093f7`. Ne pas assimiler sa présence Git à une validation visuelle ou live sans nouveau contrôle.
- La branche locale était alignée avec la branche distante après le push de `c1411895`, avant l'actualisation de cette documentation.

Deux fichiers panier sont modifiés localement par le lot P0A :

- `templates/cart.json`
- `templates/cart.milaura.json`

Ils retirent le reliquat panier obsolète. Ils ne sont ni stagés, ni commités, ni déployés. Ne pas lancer de reset, clean, pull global ou commit large.

Fichiers hors lot toujours présents localement :

- `sections/milaura-choice-doors.liquid` ;
- `templates/index.json` ;
- `assets/milaura-hero-proof-karine.webp` ;
- `sections/milaura-selection-atelier 2.liquid`.

Ne pas les supprimer, les réinitialiser ou les embarquer sans audit. Les deux premiers diffs sont apparus hors de la correction du Hero. Leur provenance, leur état live et leur approbation n'ont pas été contrôlés dans cette passe. Le dernier fichier est un doublon iCloud dont le nom est invalide pour Shopify.

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

> Reprends MilAura depuis `docs/codex-handoff.md` dans `/Users/paesano/Documents/MilAura website/dawn-X-milaura`. Le Hero final et `L’atelier MilAura` sont live. Commence par faire confirmer visuellement la dernière échelle typographique et les nouveaux visuels LFG et atelier déjà vérifiés par pullback, puis contrôle le lot des trois portes. Préserve les diffs locaux du panier et les fichiers non suivis signalés.
