# Hero Pierres de naissance à trois bracelets

Date : 2026-09-12 18:52 CEST
Statut : `CORRECTIF VISUEL EN PREVIEW PRIVÉE, LIVE INCHANGÉ`

## Retour de Patrice

Patrice valide le reste du lot mais signale que le Hero de la page canonique `Pierres de naissance` ne montre qu'un seul bracelet. Il demande de retrouver la richesse de la première proposition, qu'il se rappelle avec trois bracelets.

L'historique confirme que la première génération naissance montrait deux bracelets. Le second avait été retiré car la génération ne respectait pas assez fidèlement sa référence produit. Le défaut perçu reste réel : la version à un seul bijou était trop pauvre pour la destination.

## Correction

Le correctif conserve la scène validée : fond minéral lilas, cadran circulaire en travertin, douze repères discrets, lumière douce et zone de respiration pour le texte HTML.

La nouvelle composition montre exactement trois bracelets MilAura distincts :

1. le bracelet Iris multicolore ;
2. un bracelet Pierre de lune aux tons pêche et crème ;
3. un bracelet ajustable en améthyste.

La version bureau est une composition 3:2. La version mobile est une recomposition 4:5 dédiée, avec le cadran et les trois produits descendus sous la zone principale de lecture. Aucun texte n'est incrusté dans les images.

Génération : outil Imagegen intégré, mode `precise-object-edit` pour le desktop puis recomposition mobile. Le prompt final impose la conservation du cadran, de la palette et de la lumière, exactement trois bracelets fidèles aux références, une zone de copie libre et l'absence de bijoux ou signes décoratifs supplémentaires.

## Fichiers remplacés

- `assets/milaura-hero-editorial-hub-birthstone-desktop.webp`, 1536 x 1024, 210776 octets ;
- `assets/milaura-hero-editorial-hub-birthstone-mobile.webp`, 1122 x 1402, 277066 octets.

Sauvegardes avant remplacement :

- locale : `/private/tmp/milaura-birthstone-hero-three-20260912/` ;
- distante fraîche : `/private/tmp/milaura-birthstone-three-remote-before-20260912/`.

## Preview Shopify

- thème privé : `200974958939` ;
- push strict et ciblé des deux assets, sans suppression et sans `--live` ;
- pullback final : `/private/tmp/milaura-birthstone-three-final-pullback-20260912/` ;
- égalité locale et distante : 2 fichiers sur 2 ;
- thème live `190430282075` : non touché.

## QA navigateur

URL : `https://milaura.fr/pages/pierres-de-naissance?preview_theme_id=200974958939&_fd=0&pb=0`

- mobile 390 px : thème privé confirmé, variante mobile 1122 px chargée, H1 unique, douze mois présents, aucun débordement horizontal ;
- desktop 1440 px : thème privé confirmé, variante desktop 1536 px chargée, H1 unique, douze mois présents, aucun débordement horizontal ;
- inspection visuelle : trois bracelets distincts et lisibles sur desktop ; composition mobile dédiée avec produits regroupés sous la zone de texte ;
- journal navigateur vide.

Captures finales : `/private/tmp/milaura-birthstone-three-browser-20260912/`.

## Vérifications techniques

- tests Node : 6 sur 6 ;
- générateur : `PASS: 8 stones, 3 generated snippets` ;
- `git diff --check` : conforme ;
- Theme Check exécuté pendant le push : 0 erreur, 16 avertissements historiques dans huit fichiers.

## Gates

Le correctif reste sur la preview privée. Il ne vaut ni intégration ni publication. Les gates suivants restent séparés : GO visuel final de Patrice, décisions Admin pour les trois pages du lot, intégration Git, puis GO live explicite.
