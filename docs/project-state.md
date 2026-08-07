# MilAura - État courant du projet

Dernière mise à jour : 2026-08-07 09:55 CEST

## État en une phrase

Le hero et le dock mobile V2 sont live et validés, tandis que la réconciliation G1 a produit une base propre séparée fondée sur le dernier miroir Shopify/GitHub. Le vieux checkout sale reste intact jusqu'au commit et au push explicites du lot de réconciliation.

## Production Shopify

- Boutique : `milaura.fr`.
- Thème live : `dawn-X-milaura/main`.
- ID : `190430282075`.
- Hero H1C : live et validé visuellement par Patrice le 2026-08-07.
- Dock V2 : live depuis le 2026-08-07 à 09:46 CEST environ.
- Pullback ciblé du dock, de la navbar, du hero, de la sélection et de l'asset gemmes : identique au local approuvé.
- Validation publique : mobile 390 px, Menu, Recherche et Panier fonctionnels ; desktop 1440 px sans dock.
- Theme Check du déploiement : 0 erreur, 29 avertissements historiques.

## Panier

- Drawer live et validé par Patrice.
- Paliers : 30 EUR cadeau, 50 EUR livraison, 80 EUR remise de 15 %.
- Codes : `MILAURA-LIV50`, `MILAURA15`.
- Cadeau : variante `53142713925979`.
- Reste à faire avant Ads : contribution du pire scénario et cumul Shopify.

## Hero H1C

- Kicker Dancing Script.
- Slogan : `La beauté d'un bijou + la vertu des pierres = l'émotion MilAura !`.
- `+` et `=` typographiques or entre des filets visibles.
- CTA unique prune et or : `Découvrir les créations`.
- Trois preuves simples, sans cartouche marketing.
- Trois cabochons ovales asymétriques avec doubles contours or et aigue-marine.
- Neuf photographies produit officielles en rotation, une image toutes les quatre secondes.
- Aucun produit régénéré par IA.
- Image secondaire des cartes activée au survol et au focus, première image conservée sur tactile.

Validation : hero terminé et validé visuellement par Patrice.

## Dock mobile et CTA

- Navigation principale mobile : Menu, Rechercher, Contact, Cercle et Panier.
- Logo et CTA `Trouver ma pierre` conservés dans l'en-tête mobile.
- Gemmes sous les pictogrammes, coupées par le bord inférieur de l'écran.
- Hauteur hors zone de sécurité réduite de 128 à 88 px.
- Prune profond du dock : `#2F222D`.
- Dégradé d'action CTA : `#52394D` vers `#493246`, avec terminaison prune profond.
- Commits : `0567fff1` pour le baseline live homepage, puis `252f31b5` pour le polish V2.
- Branche distante sûre : `codex/milaura-mobile-dock-2026-08-07`.

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

1. Réconcilier Git par lots, sans reset ni écrasement.
2. Calculer l'économie des paliers panier et vérifier les cumuls Shopify.
3. Compter le stock physique et le rapprocher de Shopify.
4. Choisir 20 à 30 produits héros rentables.
5. Tenir un registre de preuve par SKU.

### P1

1. Terminer G1 et adopter la base de travail propre.
2. Sélection de l'atelier avec quatre produits réels.
3. Trois portes.
4. Pierre du moment et landing Aigue-marine.
5. Karine et preuves.
6. Sur mesure V1 et pilote Atelier des émotions.
7. PDP mobile-first, mariage, Journal et Cercle.

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

État du 2026-08-07 à 09:55 CEST :

- vieux checkout sur `main`, HEAD `252f31b5` ;
- `ahead 29`, `behind 338` après `git fetch origin --prune` ;
- 75 fichiers suivis modifiés, 1 suppression suivie et 177 fichiers non suivis ;
- `origin/main` est un miroir automatique Shopify, dernier commit `b55b7494` ;
- 484 fichiers dans le thème live, dont 402 identiques au vieux checkout ;
- aucun fichier live absent du vieux checkout ;
- nouveau worktree propre : `/Users/paesano/Documents/MilAura website/dawn-X-milaura-reconcile-2026-08-07` ;
- branche : `codex/milaura-reconcile-2026-08-07`, fondée sur `origin/main` ;
- 20 assets publics actifs absents du miroir GitHub ont été recopiés depuis le snapshot live et restent à committer ;
- 9 assets live non référencés sont documentés mais non recopiés ;
- aucun reset, clean, merge global ou écrasement du vieux checkout.

Priorité : valider, committer et pousser le baseline G1, puis travailler uniquement depuis la base propre.

## Documents de reprise

- Handoff : `docs/codex-handoff.md`.
- Checkpoint : `docs/checkpoints/2026-08-06-1828-milaura-hero-renouveau-little-words-handoff.md`.
- Checkpoint G1 : `docs/checkpoints/2026-08-07-0955-milaura-dock-v2-g1-reconciliation.md`.
- Plan : `docs/superpowers/plans/2026-08-05-milaura-renouveau-plan-execution.md`.
- Spécification : `docs/superpowers/specs/2026-07-31-milaura-renouveau-commerce-design.md`.
