# Préversion UX urgente MilAura, 2026-09-12 18:21 CEST

## Statut

GO VISUEL PREVIEW UX DONNÉ PAR PATRICE LE 2026-09-12. Aucun fichier n'a été publié sur le thème live `190430282075` et aucun réglage du checkout n'a été enregistré dans Shopify Admin.

- Branche : `codex/milaura-urgent-ux-20260912`
- Worktree : `/Users/paesano/Documents/MilAura website/_worktrees/urgent-ux-20260912`
- Base : `origin/codex/milaura-integration` au commit `8e9e1350`
- Thème privé : `201115566427`
- URL Collections : `https://milaura.fr/collections?preview_theme_id=201115566427`
- URL accueil : `https://milaura.fr/?preview_theme_id=201115566427`

## Changements préparés

### Page Collections

- remplacement de l'ancien assemblage bento par une entrée éditoriale mobile-first ;
- ajout d'un H1 explicite `Toutes les collections` ;
- trois univers photographiques : bijoux, pierres et minéraux, bougies et senteurs ;
- accès directs vers Nouveautés, Bestsellers, Sélection de Karine, Rituels bien-être et Choisir par pierre ;
- retrait du compteur non sourcé `2 847`, des emojis, des badges génériques et des promesses vagues ;
- ajout d'un appel simple vers le diagnostic émotionnel.

### Fiche produit

La phrase contestée devient :

> Ce modèle en photo est unique. Chaque pierre est différente.

Le paragraphe validé sur les nuances, le veinage et la forme de chaque pierre reste inchangé.

### Hero de l'accueil

Sur mobile uniquement, la photographie et le contenu ne se superposent plus :

- portrait propre dans la partie haute ;
- H1, phrase signature et CTA dans un panneau Nacre sous l'image ;
- visage entièrement libre ;
- CTA visible dans le premier écran à 390 x 844 px ;
- version bureau conservée.

## Checkout, audit sans écriture

Le client n'est pas techniquement bloqué : le logo renvoie déjà vers l'accueil et l'icône panier vers le panier. Le problème observé est la découvrabilité, car aucun libellé explicite n'indique le retour au catalogue.

Préparation recommandée dans l'éditeur Checkout :

- logo MilAura plus lisible et immédiatement identifiable comme retour à la boutique ;
- fond principal blanc ;
- fond du récapitulatif de commande Nacre `#FBF8F3` à la place du beige jaune actuel proche de `#FCF4E4` ;
- accent Encre prune `#2F222D` ;
- Klarna est déjà visible dans le checkout actuel ;
- Shop Pay est déjà proposé en paiement express ;
- Apple Pay doit être vérifié dans Shopify Payments sur Safari et appareil Apple compatible, son absence dans Chromium ne prouve pas qu'il est désactivé.

Un vrai lien texte `Retour au catalogue` injecté dans les étapes du checkout dépend des possibilités du forfait Shopify. Les extensions d'interface sur les étapes information, livraison et paiement sont réservées à Shopify Plus. Aucun contournement fragile n'est prévu.

## Vérifications

- corps JSON du template, après le commentaire standard Shopify, validé par `python3 -m json.tool` : PASS ;
- `python3 tools/check_copywriting.py` : PASS, 339 fichiers contrôlés ;
- `shopify theme check` : 0 erreur, 16 avertissements historiques dans huit fichiers hors lot ;
- préflight du thème privé : les trois fichiers existants correspondaient bit à bit à la base d'intégration avant le push ;
- push ciblé de cinq fichiers de thème, sans suppression ;
- pullback : cinq fichiers sur cinq identiques, commentaire Shopify standard inclus pour le template JSON ;
- recette réelle : Collections à 390 et 1440 px, Hero à 390 x 844 et 1440 x 1000 px, fiche produit active à 390 px ;
- aucun débordement horizontal visible et aucun texte devant le visage sur le Hero mobile ;
- phrase PDP vérifiée sur `Bougie Réconfort - Calcédoine bleue` ;
- correction exacte du 2026-09-12 à 18:44 CEST poussée sur le thème privé, pullback un sur un identique et texte visible à 390 px ;
- routes publiques des collections principales et de la Sélection de Karine vérifiées en HTTP 200.

## Gates restantes

1. Intégration Git ciblée, sur GO distinct.
2. GO live explicite avant tout push sur `190430282075`.
3. Pour le checkout, vérification du forfait et des moyens de paiement dans Shopify Admin, puis GO distinct immédiatement avant l'enregistrement.
