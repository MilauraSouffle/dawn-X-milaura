# MilAura - État courant du projet

Dernière mise à jour : 2026-08-07 18:25 CEST

## État en une phrase

Le hero et le dock mobile V2 sont live et validés. La réconciliation Git et privée est terminée : le chemin canonique contient une base propre alignée avec GitHub, et l'ancien checkout est archivé sans perte sous un nom daté.

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

1. Calculer l'économie des paliers panier et vérifier les cumuls Shopify.
2. Compter le stock physique et le rapprocher de Shopify.
3. Choisir 20 à 30 produits héros rentables.
4. Tenir un registre de preuve par SKU.

### P1

1. Sélection de l'atelier avec quatre produits réels.
2. Trois portes.
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

État du 2026-08-07 à 18:25 CEST :

- checkout canonique propre : `/Users/paesano/Documents/MilAura website/dawn-X-milaura` ;
- branche : `codex/milaura-reconcile-2026-08-07` ;
- HEAD et branche distante : `ff5712dd0a7cf6900e1e8a4dcd4e7fa2ebd71f9b` ;
- divergence avec la branche distante : `0 ahead`, `0 behind` ;
- commits de la réconciliation : `ac49b85b`, `b6b7fce9` et `ff5712dd` ;
- six fichiers utiles de l'ancien checkout ont été classés, migrés, validés et versionnés ;
- ancien checkout intact : `/Users/paesano/Documents/MilAura website/dawn-X-milaura-archive-2026-08-07` ;
- son ancien `main` reste à `252f31b5`, `ahead 29`, `behind 338`, avec toutes ses modifications historiques ;
- workspace privé hors Git : `/Users/paesano/Documents/Agentic-Ops/milaura-automation/private-workspace` ;
- workflow produit, outputs, modèles Chloé et Elena, photos, documents et données historiques y sont conservés ;
- `.venv`, caches et fichiers reproductibles sont exclus ;
- les deux `.env` historiques sont conservés localement en permissions `600`, sans lecture de leur contenu ;
- corpus `credentials` : 2 741 fichiers utiles source et destination, contrôle checksum sans différence ;
- Camilla sur le VPS reste indépendante et inchangée.

Validation finale : `shopify theme check` avec 0 erreur et 29 avertissements historiques, `git diff --check` sans erreur, checkout canonique propre, aucun secret ou matériau privé dans Git.

Priorité : développer uniquement depuis le chemin canonique propre et lancer le lot P0A sur l'économie du panier.

## Documents de reprise

- Handoff : `docs/codex-handoff.md`.
- Checkpoint : `docs/checkpoints/2026-08-06-1828-milaura-hero-renouveau-little-words-handoff.md`.
- Checkpoint G1 : `docs/checkpoints/2026-08-07-0955-milaura-dock-v2-g1-reconciliation.md`.
- Clôture G1 : `docs/checkpoints/2026-08-07-1735-milaura-g1-baseline-complete.md`.
- Réconciliation complète : `docs/checkpoints/2026-08-07-1825-milaura-repo-reconciliation-complete.md`.
- Plan : `docs/superpowers/plans/2026-08-05-milaura-renouveau-plan-execution.md`.
- Spécification : `docs/superpowers/specs/2026-07-31-milaura-renouveau-commerce-design.md`.
