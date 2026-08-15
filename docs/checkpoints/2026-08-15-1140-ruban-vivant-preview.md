# Checkpoint 2026-08-15 11:40 CEST - Ruban Vivant PDP

## Decision et perimetre

Patrice a valide le 2026-08-15 le principe d'un ruban horizontal vivant : huit bijoux detoures defilent continuellement de droite a gauche, restent cliquables et revelent les informations de la piece selectionnee. Cette validation autorise le prototype sur le theme de developpement `199421952347`, pas une integration ni un deploiement live.

Le theme live `190430282075` n'a pas ete modifie.

## Huit references verrouillees

1. `bracelet-dore-en-aigue-marine-naturelle-16-a-21-cm`
2. `bague-reglable-en-argent-925-et-amethyste-naturelle`
3. `collier-argente-en-amethyste-naturelle-40-a-45-cm`
4. `boucles-d-oreilles-dorees-en-aigue-marine-naturelle-36-mm`
5. `bracelet-aventurine-rouge-1`
6. `collier-aventurine-verte-boho-dore`
7. `bracelet-amazonite-1`
8. `bracelet-elye-dore-nacre-lapis-lazuli-aa`

Les deux templates produit portent cette curation. Le produit courant est exclu de son propre ruban.

## Implementation

- `assets/milaura-recommendations.js` remplace l'ancienne composition statique par une piste doublee sans saut, pilotee par `requestAnimationFrame`.
- Le mouvement est suspendu au survol, au focus, pendant le geste tactile, hors viewport et lorsque l'onglet est masque.
- Une commande textuelle soulignee `Mettre en pause` expose un etat `aria-pressed` et permet une pause durable.
- Les fleches gauche et droite selectionnent, centrent et focalisent la piece precedente ou suivante.
- Les duplicatas de boucle sont exclus du clavier, de l'arbre accessible et des impressions analytics.
- Avec `prefers-reduced-motion: reduce`, aucun duplicata ni mouvement automatique n'est cree ; la liste reste un rail horizontal statique avec `scroll-snap`.
- `assets/milaura-recommendations.css` supprime entierement les regles de l'ancienne `Composition Vivante` et definit le ruban pleine largeur, sans panneau blanc, gradient ni bouton Dawn.
- Les contextes panier, drawer, diagnostic, compte, recent et editorial conservent leurs layouts partages existants. Le Ruban Vivant est limite aux PDP disposant d'au moins quatre detourages valides.

## Assets GPT Image 2

Sept nouveaux detourages ont ete produits avec l'outil GPT Image 2 integre, puis detoures localement sur alpha. Le huitieme asset, le collier aventurine verte, reutilise `assets/milaura-reco-cutout-aventurine-v1.png` deja present.

Prompt de production commun : conserver strictement le bijou de la photo officielle, sa pierre, sa monture, sa chaine, ses proportions et ses couleurs ; l'isoler seul, entier et centre sur un fond chroma vert uniforme ; ne rien ajouter, ne rien retirer, sans texte, main, support, decor ni ombre coupee. Les sorties modifiant clairement le produit ou utilisant un fond sombre ont ete refusees et regenerees.

Nouveaux fichiers :

- `assets/milaura-ribbon-cutout-aigue-marine-bracelet-v1.png`
- `assets/milaura-ribbon-cutout-aigue-marine-earrings-v1.png`
- `assets/milaura-ribbon-cutout-amazonite-bracelet-v1.png`
- `assets/milaura-ribbon-cutout-amethyste-necklace-v1.png`
- `assets/milaura-ribbon-cutout-amethyste-ring-v1.png`
- `assets/milaura-ribbon-cutout-lapis-nacre-bracelet-v1.png`
- `assets/milaura-ribbon-cutout-red-aventurine-bracelet-v1.png`

Ces fichiers restent des assets de prototype. La fidelite exacte au SKU doit encore recevoir le GO visuel produit par produit de Patrice avant le live.

## Validation executee

- `node --check assets/milaura-recommendations.js` : OK.
- parsing JSON de `templates/product.json` et `templates/product.milaura-produit.json` : OK.
- `git diff --check` : OK avant documentation.
- `shopify theme check --output text` : aucune nouvelle alerte dans les fichiers du lot ; 27 warnings historiques dans 10 autres fichiers.
- theme de developpement : 8 originaux, 8 duplicatas, piste de 16 objets, largeur scrollable superieure au viewport.
- mouvement mesure sur 1,2 seconde : progression de 73,5 px.
- pause manuelle mesuree sur 0,9 seconde : progression de 0 px.
- reprise mesuree sur 0,9 seconde : progression de 55 px.
- clavier : `ArrowRight` a selectionne et focalise la troisieme reference depuis la deuxieme.
- desktop 1280 px : boucle, hierarchie, filet mineral, focus et commande sans chevauchement.
- mobile 390 x 844 px : huit references, apercu suivant, titre, sous-titre et commande sans chevauchement.
- journal navigateur : aucun warning ni erreur du composant, seulement les informations Shopify de hot reload desactive en preview.
- pullback cible du theme de developpement : 14 fichiers sur 14 strictement identiques aux fichiers locaux.

## Etat et prochaines portes

1. Committer et pousser uniquement la branche `codex/milaura-recommendation-system-20260814`.
2. Demander le GO visuel de Patrice sur le theme de developpement.
3. Ne pas integrer et ne pas deployer live avant un GO distinct.
