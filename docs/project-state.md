# MilAura - État courant du projet

Dernière mise à jour : 2026-08-08 13:32 CEST

## État en une phrase

Le Hero final, le dock mobile V2, le panneau mobile et `L’atelier MilAura` sont live. La direction du Hero est validée visuellement par Patrice. Le dernier espacement desktop a été demandé explicitement puis vérifié techniquement. La prochaine reprise doit contrôler le lot des trois portes présent dans `7f4093f7` avant de poursuivre le plan homepage.

## Hero final validé et live le 2026-08-08

- Les trois preuves sont maintenant photographiques et flottantes, sans bandeau de fond : certificat LFG Paris, portrait de Karine et atelier de Metz.
- Le portrait de Karine est volontairement conservé pour humaniser la boutique.
- Texte de conversion final : `Des pierres naturelles choisies avec exigence pour leur beauté, leur qualité et leur symbolique en lithothérapie.`
- `choisies avec exigence` reçoit un surlignage champagne horizontal derrière la moitié basse des lettres. Le premier soulignage irrégulier a été refusé puis entièrement supprimé, comme les anciens doubles traits prune et aigue-marine.
- La hiérarchie du slogan renforce `beauté` et `vertu` sans ajouter de nouvel ornement concurrent.
- Le triptyque remonte de `34px` à `40px` sur desktop uniquement afin de ne plus chevaucher les preuves photographiques. Le mobile reste inchangé.
- Déploiement ciblé du seul fichier `sections/milaura-hero-portal.liquid` sur le thème live `190430282075`.
- Pullback live identique au local, SHA-256 `0fa221e4eee886a3b0a4bcbda5052c55dcb822c65496bf3fc9dd1a251a7411ab`.
- Contrôles publics : desktop `1440 x 1200`, mobile `390 x 1250`, CTA visible dans les deux formats.
- Commits du lot : `9a809e0d`, `ed455a9f`, `3b98c937`, `45a225fa` et `78bbb26b`.

## Décision P0A et reprise P0B du 2026-08-08

- Patrice considère P0A terminé et demande de reprendre la séquence canonique de refonte.
- La livraison standard France coûte 5,80 EUR jusqu'à 49,99 EUR et devient gratuite à partir de 50 EUR.
- Les codes actifs `MILAURA-LIV50` et `MILAURA-LIV19` sont limités à la France et aux tarifs d'expédition de 6 EUR maximum.
- La zone Europe reste payante à 12 EUR. Aucun tarif n'est ouvert pour la Guadeloupe, la Martinique, La Réunion, les États-Unis ou le reste du monde.
- `MILAURA15`, le cadeau et les automatisations n'ont pas été modifiés pendant ce réglage.
- Le reliquat panier obsolète a été retiré des deux templates locaux. Le moteur ScratchToReveal reste conservé pour une future réutilisation Cercle.
- La stratégie de ventes complémentaires est explicitement reportée à une session dédiée. Elle ne doit pas détourner P0B ni la refonte active.
- Registre P0B : `docs/reference/MILAURA-P0B-PRODUCT-REGISTER-2026.md`.

## Décision P0B du 2026-08-08

- Patrice confirme quatre produits physiquement en stock et disposant d'une bonne marge : Bracelet Amazonite 6 mm, Distributeur Savon Lapis-Lazuli, Bougie Joie - Aventurine verte et Collier Jade.
- Les quatre variantes Shopify sont identifiées et achetables sur le storefront public.
- Chaque produit dispose de trois images live.
- La sélection est volontairement saisonnière et provisoire. Les quatre produits doivent pouvoir être remplacés depuis l'éditeur Shopify sans développement.
- Les coûts exacts, quantités exactes et délais de remplacement restent à documenter avant acquisition payante.

## L'atelier MilAura, terminé et live le 2026-08-08

- Nouvelle section locale : `sections/milaura-selection-atelier.liquid`.
- La section remplace localement `Les incontournables` dans `templates/index.json`.
- Quatre blocs produit indépendants permettent une rotation saisonnière depuis l'éditeur Shopify sans changement de code.
- Produits initiaux : Bracelet Amazonite 6 mm, Distributeur Savon Lapis-Lazuli, Bougie Joie - Aventurine verte et Collier Jade.
- Aucun badge bestseller forcé.
- La première proposition éditoriale a été refusée par Patrice car elle reconstruisait inutilement les cartes et ne respectait pas assez les codes visuels MilAura.
- Version finale : réutilisation stricte de `snippets/milaura-card-product.liquid` et de `assets/milaura-card.css`.
- Seule adaptation des cartes dans cette section : contour aigue-marine et ombre assortie, sans modifier le composant partagé.
- Le toit dessiné de la V2 a été refusé puis entièrement retiré à la demande de Patrice.
- Présentation retenue : titre doré en Dancing Script `L’atelier MilAura`, suivi de `Des créations choisies et préparées par Karine, au fil de sa créativité et des saisons.`
- Desktop 1440 px : grille régulière de quatre cartes occupant toute la largeur disponible.
- Mobile 390 x 844 : carousel horizontal avec aperçu net de la carte suivante.
- Ajout panier réel vérifié en preview avec ouverture du drawer et total de 29,90 EUR pour le Bracelet Amazonite.
- CTA du Hero vers `#MilauraSelectionAtelier` vérifié à 390 x 844.
- Theme Check : 272 fichiers, 0 erreur, 29 avertissements historiques.
- Déploiement ciblé réussi à 10:06 CEST sur le thème live `dawn-X-milaura/main`, ID `190430282075`, avec uniquement `sections/milaura-selection-atelier.liquid` et `templates/index.json`.
- Pullback : les deux fichiers live correspondent exactement aux fichiers locaux. Shopify avait retiré trois anciens réglages Hero devenus étrangers au schéma actuel ; le local a été aligné et le Hero public est intact.
- Validation publique : Hero intact, CTA vers `#MilauraSelectionAtelier` fonctionnel, quatre produits corrects, mobile 390 x 844 et desktop 1440 px contrôlés.
- Un doublon iCloud non suivi `sections/milaura-selection-atelier 2.liquid` est apparu pendant la validation. Son espace rend son nom invalide pour Shopify. Il a été exclu de la preview mais n'a pas été supprimé sans autorisation.

## Décision historique de reprise avant P0A du 2026-08-08

- Ne pas commencer P0A dans la session de réconciliation.
- Ouvrir une nouvelle session principale propriétaire du thème et du live.
- Commencer en lecture seule par les coûts, seuils, codes, règles de cumul et reliquats Scratch du panier.
- Ne modifier ni Shopify ni le thème avant présentation du diagnostic P0A et GO explicite de Patrice.
- Autoriser en parallèle uniquement P0B inventaire, l'inventaire des composants de l'Atelier des émotions et une session Camilla strictement séparée.
- Interdire deux sessions concurrentes sur le thème, la homepage, le panier, les documents d'état ou les déploiements Shopify.

## Production Shopify

- Boutique : `milaura.fr`.
- Thème live : `dawn-X-milaura/main`.
- ID : `190430282075`.
- Hero H1C final : live. Photographies, copywriting et hiérarchie validés visuellement par Patrice le 2026-08-08. Dernier espacement desktop demandé explicitement et vérifié techniquement.
- Dock V2 : live depuis le 2026-08-07 à 09:46 CEST environ.
- Panneau mobile V2 : live le 2026-08-08, avec croix de fermeture dorée simple.
- `L’atelier MilAura` : live le 2026-08-08 à 10:06 CEST, quatre produits réels, cartes natives et contour aigue-marine local à la section.
- Pullback ciblé du dock, de la navbar, du hero, de la sélection et de l'asset gemmes : identique au local approuvé.
- Pullback ciblé de la navbar après la correction du 2026-08-08 : identique octet pour octet au local.
- Validation publique : mobile 390 px, Menu, Recherche et Panier fonctionnels ; desktop 1440 px sans dock.
- Theme Check du déploiement : 0 erreur, 29 avertissements historiques.

## Panier

- Drawer live et validé par Patrice.
- Paliers : 30 EUR cadeau, 50 EUR livraison, 80 EUR remise de 15 %.
- Codes : `MILAURA-LIV50`, `MILAURA15`.
- Cadeau : variante `53142713925979`.
- Réglage de livraison France protégé contre l'international le 2026-08-08.
- P0A clos par décision de Patrice. Les coûts exacts manquants restent des données de pilotage à compléter avant Ads et ne doivent pas être présentés comme confirmés.

## Hero H1C

- Kicker Dancing Script.
- Slogan : `La beauté d'un bijou + la vertu des pierres = l'émotion MilAura !`.
- `+` et `=` typographiques or entre des filets visibles.
- Hiérarchie renforcée sur `beauté` et `vertu`.
- CTA unique prune et or : `Découvrir les créations`.
- Texte de conversion : `Des pierres naturelles choisies avec exigence pour leur beauté, leur qualité et leur symbolique en lithothérapie.`
- Surlignage champagne horizontal limité à `choisies avec exigence`, sans trait, rotation ou pseudo-élément.
- Trois preuves photographiques flottantes, sans cartouche ni bandeau : LFG Paris, Karine et atelier de Metz.
- Trois cabochons ovales asymétriques avec doubles contours or et aigue-marine.
- Neuf photographies produit officielles en rotation, une image toutes les quatre secondes.
- Triptyque remonté de `34px` à `40px` sur desktop uniquement pour ne plus chevaucher les preuves.
- Aucun produit régénéré par IA.
- Image secondaire des cartes activée au survol et au focus, première image conservée sur tactile.

Validation : Hero terminé et déployé. Direction validée visuellement par Patrice. Dernier espacement contrôlé publiquement en desktop et mobile le 2026-08-08.

## Dock mobile et CTA

- Navigation principale mobile : Menu, Rechercher, Contact, Cercle et Panier.
- Logo et CTA `Trouver ma pierre` conservés dans l'en-tête mobile.
- Gemmes sous les pictogrammes, coupées par le bord inférieur de l'écran.
- Hauteur hors zone de sécurité réduite de 128 à 88 px.
- Prune profond du dock : `#2F222D`.
- Dégradé d'action CTA : `#52394D` vers `#493246`, avec terminaison prune profond.
- Commits : `0567fff1` pour le baseline live homepage, puis `252f31b5` pour le polish V2.
- Branche distante sûre : `codex/milaura-mobile-dock-2026-08-07`.

## Panneau mobile et symboles de marque

- Le panneau est un écrin prune avec `Explorer MilAura`, les catégories, le Cercle, `Notre histoire` et `Le Journal`.
- Le dock reste présent sous le panneau.
- La fermeture est une croix dorée simple, sans cercle ni double anneau.
- Le double anneau irrégulier croisé, or et aigue-marine, est réservé au Cercle MilAura et aux cadres de photographies produit importantes.
- Il est interdit sur les contrôles utilitaires, les fermetures, la recherche, le panier, les focus, les séparateurs et les CTA génériques.
- Le cabochon `Trouver ma pierre` conserve ses contours décalés comme exception validée.
- Référence obligatoire : `docs/reference/MILAURA-VISUAL-SYMBOLS-2026.md`.
- Commits du lot : `e89c76e4` puis `e49a18d2` sur `codex/milaura-reconcile-2026-08-07`.

## Architecture homepage validée

1. Hero de marque.
2. Sélection de l'atelier, quatre produits réels.
3. Trois portes pour les indécis.
4. Pierre du moment.
5. Karine et les preuves.
6. Sur mesure et Atelier des émotions.
7. Cadeaux et mariage.
8. Journal.
9. Cercle MilAura.

## Nouveau chantier actif : Atelier des émotions

- Inspiration de mécanique : [Little Words Project](https://www.littlewordsproject.com).
- Patrice achète actuellement les composants nécessaires.
- Offre MilAura propre : pierres naturelles, lettres, mot ou prénom, charms ludiques, tailles et palettes contrôlées, création par Karine.
- Position : section Sur mesure de la homepage puis landing ou configurateur dédié.
- Prochaine étape produit : inventaire des composants, trois à cinq prototypes, coûts, prix, délais, règles de personnalisation, photos et pilote.
- Ne pas copier la marque ou l'identité visuelle de Little Words Project.

## Priorités

### P0

1. Calculer l'économie des paliers panier et vérifier les cumuls Shopify.
2. Compter le stock physique et le rapprocher de Shopify.
3. Choisir 20 à 30 produits héros rentables.
4. Tenir un registre de preuve par SKU.

### P1

1. Terminé : Sélection de l'atelier avec quatre produits réels.
2. Actif : Trois portes.
3. Pierre du moment et landing Aigue-marine.
4. Karine et preuves.
5. Sur mesure V1 et pilote Atelier des émotions.
6. PDP mobile-first, mariage, Journal et Cercle.

### P2 et P3

- SEO, AEO, GEO, landings, Pinterest, organique puis Ads rentables.
- Camilla jusqu'au brouillon uniquement.
- Conseillère MilAura avec sources réelles et escalade vers Karine.
- Cercle Privilège puis ambassadeurs après preuve.

## Recyclage acté

- `Une pierre pour une émotion` devient une landing interactive.
- Aigue-marine devient la première Pierre du moment.
- La vidéo atelier nourrit Karine et les preuves.
- Le rituel de purification nourrit le Journal ou les PDP.
- Les cartes à gratter rejoignent le Cercle.
- Aucun bon composant n'est supprimé avant que sa destination soit opérationnelle.

## Vérité origine et certification

- Les commandes sont préparées et expédiées depuis l'atelier MilAura à Metz.
- Formulation hero : `notre atelier en France`.
- Les certificats sont transmis par le fournisseur et émis par LFG Paris.
- La référence à Cartier reste interne tant que son usage public n'est pas prouvé et autorisé.

## Git

État contrôlé le 2026-08-08 à 13:18 CEST :

- checkout canonique : `/Users/paesano/Documents/MilAura website/dawn-X-milaura` ;
- branche : `codex/milaura-reconcile-2026-08-07` ;
- dernier commit fonctionnel Hero poussé : `78bbb26b` ;
- branche locale alignée avec `origin/codex/milaura-reconcile-2026-08-07` après le push ;
- commits Hero : `9a809e0d`, `ed455a9f`, `3b98c937`, `45a225fa` et `78bbb26b` ;
- commit des trois portes présent sur la branche : `7f4093f7`, état live et approbation visuelle à reconfirmer lors de la reprise ;
- nouveaux diffs locaux hors lot observés à la clôture : `sections/milaura-choice-doors.liquid` et `templates/index.json`. Leur provenance, leur état live et leur approbation n'ont pas été audités pendant la correction du Hero ;
- modifications panier préservées et hors lot : `templates/cart.json` et `templates/cart.milaura.json` ;
- fichiers non suivis préservés et hors lot : `assets/milaura-hero-proof-karine.webp` et `sections/milaura-selection-atelier 2.liquid` ;
- aucun reset, nettoyage global, pull global ou déploiement de thème complet n'a été effectué ;
- aucun secret ou matériau privé n'a été ajouté à Git.

L'ancien checkout, le workspace privé d'automatisation et Camilla restent indépendants et inchangés. Leur état détaillé est conservé dans `docs/checkpoints/2026-08-07-1825-milaura-repo-reconciliation-complete.md`.

## Documents de reprise

- Handoff : `docs/codex-handoff.md`.
- Checkpoint : `docs/checkpoints/2026-08-06-1828-milaura-hero-renouveau-little-words-handoff.md`.
- Checkpoint G1 : `docs/checkpoints/2026-08-07-0955-milaura-dock-v2-g1-reconciliation.md`.
- Clôture G1 : `docs/checkpoints/2026-08-07-1735-milaura-g1-baseline-complete.md`.
- Réconciliation complète : `docs/checkpoints/2026-08-07-1825-milaura-repo-reconciliation-complete.md`.
- Handoff avant P0A : `docs/checkpoints/2026-08-08-0712-milaura-plan-p0a-handoff.md`.
- Menu mobile et symboles : `docs/checkpoints/2026-08-08-0814-milaura-menu-cercle-branding-handoff.md`.
- Hero final : `docs/checkpoints/2026-08-08-1318-milaura-hero-final-polish.md`.
- Plan : `docs/superpowers/plans/2026-08-05-milaura-renouveau-plan-execution.md`.
- Spécification : `docs/superpowers/specs/2026-07-31-milaura-renouveau-commerce-design.md`.
- Symboles visuels : `docs/reference/MILAURA-VISUAL-SYMBOLS-2026.md`.
