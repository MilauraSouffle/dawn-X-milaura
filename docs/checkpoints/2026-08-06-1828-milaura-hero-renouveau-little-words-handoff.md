# Checkpoint MilAura - hero, homepage et Atelier des émotions

Date : 2026-08-06 18:28 CEST

Projet : MilAura Shopify

Repo : `/Users/paesano/Documents/MilAura website/dawn-X-milaura`

Thème live Shopify : `dawn-X-milaura/main`, ID `190430282075`

## 1. Résumé exécutif

Le panier latéral est live et validé par Patrice. Le nouveau hero de marque a été construit, corrigé par itérations et poussé sur le thème live. La dernière variante utilise trois cabochons ovales et asymétriques, des doubles contours fins or et aigue-marine, neuf photographies produit officielles en rotation, le slogan MilAura, trois preuves simples et un CTA prune et or.

Le pullback Shopify de la dernière variante est identique au fichier local. À 18:28 CEST, puis à nouveau à 18:33 CEST, la page publique servait encore une variante antérieure depuis son cache. La présence du code sur le thème live est donc confirmée côté fournisseur, mais la propagation publique et la validation visuelle finale de Patrice restent à contrôler.

Le plan global de homepage est validé. Le prochain lot de construction n'est pas encore la Sélection de l'atelier : la divergence Git doit être réconciliée sans écraser le travail existant, puis les quatre produits réellement détenus et rentables doivent être identifiés.

Un nouveau chantier produit devient prioritaire : `L'Atelier des émotions`, inspiré de la mécanique de personnalisation de [Little Words Project](https://www.littlewordsproject.com). Patrice achète actuellement les composants nécessaires pour fabriquer ces bracelets. Ce n'est plus une idée lointaine, mais une offre MilAura à cadrer, prototyper, chiffrer et commercialiser.

## 2. Vérité live au moment du handoff

### Panier

- Drawer live et validé par Patrice.
- Paliers techniques actuels : 30 EUR cadeau, 50 EUR livraison offerte, 80 EUR remise de 15 %.
- Cadeau actuel : bracelet hématite, variante `53142713925979`.
- Codes actuels : `MILAURA-LIV50` et `MILAURA15`.
- Point restant obligatoire : calculer la contribution du pire scénario et vérifier les règles de cumul Shopify avant tout trafic payant.

### Hero H1C

- Kicker : `MilAura • Bijoux, gemmes & lithothérapie` en Dancing Script.
- Slogan : `La beauté d'un bijou + la vertu des pierres = l'émotion MilAura !`.
- Les signes `+` et `=` sont typographiques, or, centrés entre des filets visibles. Les versions en cabochons ont été rejetées.
- CTA unique : `Découvrir les créations`, capsule prune, cercle et flèche or, ancre `#MilauraSelectionAtelier`.
- Preuves simples : `Pierres naturelles certifiées`, `Préparées par Karine`, `Expédiées depuis notre atelier en France`.
- Le cartouche `L'engagement MilAura`, jugé trop artificiel et trop typé IA, est rejeté et ne doit jamais revenir.
- Le fond du hero remonte derrière la navbar pour supprimer le blanc supérieur. Le contenu garde une position naturelle afin de ne pas déplacer le vide sous le hero.
- Trois cabochons ovales et asymétriques composent la grappe visuelle.
- Chaque cabochon possède deux contours indépendants, or et aigue-marine, inspirés du motif graphique de la section Aigue-marine.
- Les photographies remplissent les formes bord à bord, sans bandes de compensation.
- Une seule photographie change à la fois, toutes les quatre secondes.
- La rotation est désactivée avec `prefers-reduced-motion`.
- Le survol ne met pas la rotation en pause.

### Neuf produits du hero

Panneau 1 :

1. collier obsidienne noire bohème doré ;
2. bracelet oeil de tigre cuir brun ;
3. collier agate arbre.

Panneau 2 :

1. pendentif argent 925 améthyste facettée ;
2. pendentif amazonite ;
3. bougie Réconfort néroli et calcédoine.

Panneau 3 :

1. savon argan ;
2. bol chantant 120 mm ;
3. distributeur de savon lapis-lazuli.

Règle absolue : le produit doit rester exact. Aucun bijou ou objet ne doit être régénéré par IA, déformé, recoloré ou remplacé. Les essais homme qui ne reproduisaient pas exactement le bracelet ont été rejetés. Chloé et Elena restent les mannequins documentés. Un mannequin homme devra être conçu et documenté avant usage.

### Cartes produit

- L'image secondaire au survol et au focus clavier est activée lorsqu'elle existe.
- La première image reste affichée sur tactile.
- Cible éditoriale future : première image produit claire, seconde image portée ou en situation.

## 3. Décisions visuelles fermées

- Direction : premium épuré, humain, généreux en espace, sans accumulation d'effets.
- Un seul système de CTA commercial avec deux niveaux : CTA principal prune et or, CTA éditorial texte prune avec accent or.
- Le CTA principal prune et or devient la référence à uniformiser sur le site.
- Les preuves sont factuelles et simples, pas des cartes marketing génériques.
- Les grandes photographies officielles priment sur les miniatures, bandes, mosaïques ou compositions qui affaiblissent le produit.
- La certification des pierres est confirmée par Patrice : le fournisseur transmet les certificats émis par le cabinet LFG Paris et un certificat est déjà visible sur les pages produit concernées.
- Ne pas utiliser publiquement la référence à Cartier sans preuve, droit d'usage et validation juridique.
- Ne pas écrire `Expédiées depuis les Vosges`. Les commandes sont préparées et expédiées depuis l'atelier MilAura à Metz. Dans le hero, la formulation générique validée reste `notre atelier en France`.

## 4. Architecture homepage validée

Ordre fermé :

1. Hero de marque.
2. Sélection de l'atelier, quatre produits réels.
3. Trois portes comme aide pour les personnes encore indécises.
4. Pierre du moment avec landing et produits associés.
5. Karine et les preuves d'atelier.
6. `Votre bijou, imaginé avec Karine`, Sur mesure et Atelier des émotions.
7. Cadeaux et mariage.
8. Journal.
9. Cercle MilAura.

Logique : le hero présente la marque, la sélection montre immédiatement ce que MilAura vend, les trois portes récupèrent les indécis, la Pierre du moment transforme une pierre en campagne, Karine apporte la preuve humaine, le Sur mesure exprime la singularité, puis les cadeaux, contenus et le Cercle prolongent la relation.

## 5. Recyclage de l'existant

Rien de bon n'est jeté sans destination :

- `Les incontournables` devient la Sélection de l'atelier et perd les badges de bestseller non prouvés.
- `Une pierre pour une émotion, comment choisir ?` devient une landing interactive et un composant réutilisable pour les campagnes.
- Le diagnostic émotionnel reste une page dédiée et la troisième porte.
- La section Aigue-marine devient la première `Pierre du moment`.
- `Ça vient d'arriver` est absorbé par la sélection ou une collection.
- La vidéo atelier rejoint la section Karine et les preuves.
- Le rituel de purification rejoint le Journal, un guide ou une PDP.
- Les cartes à gratter et la capture email rejoignent le Cercle MilAura.

Une section ne quitte la homepage que lorsque sa destination est opérationnelle.

## 6. L'Atelier des émotions, chantier produit actif

### Origine et intention

Source d'inspiration déclarée par Patrice : [Little Words Project](https://www.littlewordsproject.com).

Patrice aime la mécanique de bracelets personnalisables avec lettres, messages et petits charms ludiques, dont des éléments de type smiley. Il achète actuellement les composants nécessaires pour permettre à Karine de fabriquer ce type de bracelet. Cette information n'existait pas dans le plan initial et doit être conservée comme une évolution stratégique majeure.

MilAura ne copie ni le nom, ni l'identité, ni les visuels de Little Words Project. Elle adapte le principe à son propre univers : pierres naturelles, émotions, intentions, mots, prénoms, couleurs, petits charms, conseil et création humaine par Karine.

Nom de travail : `L'Atelier des émotions`.

Position dans le site : section 6 de la homepage, dans `Votre bijou, imaginé avec Karine`, puis landing ou configurateur dédié.

### Offre V1 recommandée

1. Choisir un modèle de bracelet parmi trois à cinq constructions maîtrisées.
2. Choisir la taille.
3. Choisir une palette ou une pierre disponible.
4. Choisir un mot, un prénom ou un court message.
5. Choisir éventuellement un charm compatible.
6. Afficher un prix compréhensible et les suppléments éventuels.
7. Transmettre une demande structurée.
8. Faire valider la faisabilité, le prix et le délai par Karine.
9. Produire, contrôler et préparer le bracelet à l'atelier.

### Travail produit à ouvrir dès la prochaine reprise

- Inventorier les composants achetés : fournisseur, référence, coût unitaire, quantité, couleur, taille, matière et compatibilité.
- Définir trois à cinq bracelets pilotes réellement fabricables.
- Calculer coût matière, temps d'assemblage, emballage, frais de paiement, marge et contribution.
- Définir tailles, limites de caractères, alphabets, palettes, pierres et charms autorisés.
- Définir délai, retours, erreurs de saisie et traitement des personnalisations.
- Produire un set photo et vidéo exact : packshot, détail, porté, choix des lettres, geste de Karine et emballage.
- Construire une landing V1 avec brief guidé et validation humaine.
- Éviter des centaines de variantes Shopify. Préférer des composants contrôlés et des `line item properties` si cette architecture est confirmée par le prototype.
- Tester sur un petit nombre de commandes avant d'automatiser davantage.

### KPI

- clic sur `Imaginer mon bracelet` ;
- début et complétion du parcours ;
- demande qualifiée ;
- conversion ;
- panier moyen ;
- contribution ;
- temps d'assemblage ;
- taux d'erreur ou de reprise ;
- respect du délai annoncé.

## 7. Pierre du moment et acquisition

La première campagne est l'Aigue-marine, pierre de la rentrée de septembre 2026.

Cible : une section homepage qui ouvre une landing Aigue-marine recensant les produits réellement disponibles, avec contenu utile, preuve, choix et CTA produit.

Autres landings prévues :

- `/pages/choisir-sa-pierre`, issue de `Une pierre pour une émotion` ;
- landing de comparaison entre pierres authentiques, imitations et qualité insuffisante ;
- landings cadeaux et anniversaire de mariage ;
- landing Sur mesure et Atelier des émotions.

Meta et Pinterest doivent préserver le choix fait dans la publicité en ouvrant la landing sur l'émotion ou la pierre correspondante. Google dirige vers la page la plus précise selon l'intention.

Ne pas utiliser `semi-précieuse`. Utiliser `Aigue-marine`, `Aigue-marine naturelle` si la preuve produit le permet, ou `pierre gemme`.

## 8. Priorités globales

### P0, vérité commerciale et sécurité

1. Réconcilier Git sans reset, clean, pull global ou écrasement.
2. Calculer l'économie des paliers panier 30/50/80 dans le pire scénario et vérifier les cumuls Shopify.
3. Compter le stock physique et rapprocher SKU, EAN et variantes Shopify.
4. Produire le P&L de 20 à 30 produits héros.
5. Tenir le registre de preuve par SKU : origine, fabrication, assemblage, certification et délai.
6. Aligner livraison, retours, consentement et tracking.

### P1, conversion et marque

1. Faire valider visuellement le hero H1C réel sur desktop et mobile après propagation.
2. Construire la Sélection de l'atelier avec quatre produits physiques, rentables et présentables.
3. Repositionner les trois portes.
4. Transformer l'Aigue-marine en Pierre du moment et construire sa landing.
5. Construire Karine et les preuves.
6. Construire le Sur mesure V1 et lancer le pilote Atelier des émotions.
7. Reprendre les PDP en mobile-first et préparer les deux images par carte.
8. Construire Cadeaux et mariage, Journal et Cercle.

### P2, acquisition structurée

- SEO, AEO et GEO ;
- hub mariage et six à huit années fortes ;
- blog relié aux offres ;
- Pinterest, catalogue et tracking ;
- organique avant Ads ;
- Ads seulement après validation de la contribution, du stock, des claims et du tracking.

### P3, automatisation et fidélité

- Camilla autonome jusqu'au brouillon Shopify, jamais jusqu'à la publication ;
- Conseillère MilAura avec sources réelles, stock et escalade vers Karine ;
- Cercle Membre puis Privilège ;
- ambassadeurs après preuve commerciale.

## 9. État Git et technique

État observé le 2026-08-06 à 18:26 CEST :

- branche `main` ;
- `ahead 24`, `behind 312` par rapport à `origin/main` ;
- worktree extrêmement sale, avec de nombreux fichiers modifiés et non suivis de plusieurs chantiers ;
- dernier commit local : `a23ed573 feat: publish homepage H1A H1B` ;
- le lot H1C final n'a pas encore de commit Git dédié ;
- aucun serveur de preview n'écoute sur le port 9293 au moment du contrôle ;
- le thème live Shopify reste `190430282075` ;
- aucun pull, reset, clean, rebase ou push Git global n'a été exécuté pendant la clôture.

La divergence est désormais de priorité haute. Elle ne prouve pas que le live est cassé, mais augmente fortement le risque d'écraser une version, de pousser un fichier contaminé ou de ne plus savoir quelle source fait autorité.

## 10. Vérifications effectuées

- `shopify theme list` : thème `190430282075` confirmé live.
- Pullback ciblé de `sections/milaura-hero-portal.liquid` : identique au fichier local final.
- Contrôles HTTP publics à 18:28 et 18:33 CEST : page accessible, mais variante finale encore absente de la réponse mise en cache.
- Dernier Theme Check du lot : 0 erreur, 31 avertissements historiques.
- Dernier `git diff --check` du hero : sans erreur.
- État Git et divergence relevés sans mutation.

## 11. Risques et dépendances

1. La dernière variante ovale n'est pas encore validée visuellement par Patrice sur le site public après propagation.
2. La source live Shopify, le checkout local et `origin/main` divergent. Ne pas commencer une grosse section avant cartographie et stratégie de réconciliation.
3. La rentabilité du panier reste inconnue dans le scénario cadeau, livraison et remise cumulés.
4. La Sélection de l'atelier dépend de quatre produits réellement présents, reliés et rentables.
5. L'Atelier des émotions dépend d'un inventaire composants, d'un coût réel, de règles de personnalisation et d'un pilote atelier.
6. Les photos et mannequins doivent rester gouvernés. Une image esthétique ne compense jamais un produit inexact.

## 12. Reprise recommandée

Ordre immédiat :

1. Vérifier que le cache public sert enfin les cabochons ovales, puis recueillir le verdict visuel desktop et mobile de Patrice.
2. Réconcilier Git par lots fonctionnels et sources de vérité, sans toucher aux modifications étrangères au lot.
3. Calculer la contribution panier et tester les cumuls Shopify.
4. Identifier quatre produits physiques pour la Sélection de l'atelier.
5. Construire et valider la Sélection de l'atelier.
6. Repositionner les trois portes.
7. Lancer la landing Aigue-marine.
8. En parallèle produit, inventorier les composants de l'Atelier des émotions et définir les trois à cinq prototypes.

## 13. Message de reprise prêt à copier

> Reprends MilAura depuis `docs/codex-handoff.md`, puis lis le checkpoint `docs/checkpoints/2026-08-06-1828-milaura-hero-renouveau-little-words-handoff.md`, `docs/project-state.md`, le plan d'exécution et la spécification commerce. Commence en lecture seule. Vérifie le hero public desktop et mobile, la propagation de la variante ovale et l'état Git exact. Ne confonds pas présence technique et validation visuelle de Patrice. La priorité avant une nouvelle grande section est la réconciliation Git, puis l'économie du panier et les quatre produits réels de la Sélection de l'atelier. N'oublie pas le nouveau chantier actif `L'Atelier des émotions`, inspiré de la mécanique de Little Words Project : Patrice achète actuellement les composants pour que Karine fabrique des bracelets personnalisables avec pierres, lettres, messages et charms. Ce chantier doit être chiffré et prototypé, pas traité comme une simple inspiration visuelle.
