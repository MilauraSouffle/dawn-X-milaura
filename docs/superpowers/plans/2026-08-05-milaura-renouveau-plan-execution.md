# MilAura - Plan d'execution du renouveau

Date : 2026-08-05

Derniere mise a jour : 2026-08-06 07:21 CEST

Statut : plan valide par Patrice, lots H1A et H1B publies sur le live, execution a poursuivre par lots avec validation creative entre chaque lot

Perimetres : theme Shopify, reconciliation Git, verite commerciale, acquisition et automatisation

## 1. Regles de conduite

- Aucun changement du theme ou du live avant validation du lot concerne et GO explicite de Patrice.
- La validation technique ne vaut jamais validation creative.
- Les chantiers theme, reconciliation Git, Camilla et acquisition restent separes.
- Aucun reset, clean, pull global, merge global ou push complet du theme.
- Toute mutation live utilise une source Shopify ciblee, une validation locale et un `shopify theme push --only` limite aux fichiers approuves.
- Les mannequins et visuels utilisent un identifiant documente, des references conservees et une tracabilite de generation.
- Patrice reste l'unique personne qui publie un produit Shopify.

## 2. Diagnostic confirme du hero live

### 2.1 Actions

Probleme : le hero comporte un CTA principal et un CTA secondaire alors que la homepage doit d'abord montrer des produits reels avant de demander au visiteur de choisir un parcours.

Cible validee : un seul CTA principal, `Voir la selection de l'atelier`, qui descend vers la section de quatre produits sans faire quitter la homepage.

Le hero remplit ainsi une seule fonction : presenter MilAura et conduire vers une premiere preuve produit. Le choix par besoin et le diagnostic restent disponibles plus bas, apres la selection de l'atelier. Aucun lien concurrent ne doit detourner l'action principale.

### 2.2 Systeme image

Probleme : le triptyque actuel utilise une femme non documentee et se lit comme une seule parure declinee. Il ne demontre pas clairement la diversite de MilAura.

Sources de verite existantes :

- Chloe : contenus dynamiques, UGC, Reels et quotidien ;
- Elena : univers premium, Instagram, Pinterest et elegance ;
- modele homme : absent, a concevoir et documenter avant usage.

Direction recommandee pour le nouveau hero :

1. un seul visage documente, Elena, pour le panneau editorial premium ;
2. un panneau produit ou main sans nouveau visage, montrant une autre categorie de bijou ;
3. un panneau geste, matiere ou preparation MilAura, sans inventer un nouveau mannequin.

Cette composition evite d'introduire plusieurs visages dans le hero tout en montrant produit porte, diversite et intervention MilAura.

Chaque visuel doit partir d'une reference produit exacte. Le bijou, la pierre, le sertissage, la chaine, les proportions et la couleur ne doivent pas etre modifies par l'IA.

### 2.3 Lisibilite

Constat code :

- texte mobile du hero : `0.78rem` ;
- preuves mobiles : `0.52rem` ;
- CTA principal desktop : `0.72rem` ;
- liens des portes : `0.76rem` ;
- descriptions mobiles des portes : `0.76rem`.

Planchers proposes :

| Element | Mobile | Desktop |
| --- | --- | --- |
| Texte courant | 16 px | 17 a 18 px |
| CTA principal | 16 px | 16 px |
| Preuves | 13 a 14 px | 14 px |
| Liens et descriptions | 16 px | 16 a 17 px |
| Cible tactile | 48 px | 48 px minimum pour le bouton |

Le H1 actuel peut rester la reference d'echelle. Les textes en capitales et fort espacement doivent etre limites lorsqu'ils reduisent la lisibilite.

### 2.4 Preuves

Faits confirmes par Patrice :

- pierres certifiees ;
- certificats transmis par le fournisseur et emis par LFG Paris ;
- preparation par Karine ;
- toutes les commandes preparees et expediees depuis l'atelier MilAura a Metz.

Preuves hero recommandees :

1. `Pierres naturelles certifiees` ;
2. `Preparees par Karine` ;
3. `Expediees depuis notre atelier en France`.

La mention de Metz appartient plutot a la section Karine, aux coulisses et aux informations de marque. Le hero ne doit pas laisser croire que l'atelier accueille du public.

La relation declaree entre LFG Paris et Cartier reste hors communication publique sans preuve et droit d'usage documentes.

## 3. Lot H1 - Correction du hero et des trois portes

### Objectif

Rendre le debut de homepage immediatement comprehensible, lisible et coherent avec le systeme de marque MilAura, sans attendre la production du futur systeme image.

### H1A - Premier lot de developpement : lisibilite, CTA et verite factuelle

Etat au 2026-08-06 07:21 CEST : implemente, verifie puis publie sur le theme live `190430282075` apres le GO explicite de Patrice. Theme Check sans erreur. HTML public et pullback distant verifies.

Perimetre ferme :

1. augmenter les textes courants, CTA, preuves, descriptions et liens du hero et des trois portes selon les planchers de la section 2.3 ;
2. conserver les grands titres dont l'echelle est deja satisfaisante ;
3. supprimer le CTA secondaire du hero ;
4. remplacer le CTA principal par `Voir la selection de l'atelier` avec un scroll interne vers la future selection ;
5. remplacer `Expediees depuis les Vosges` par `Expediees depuis notre atelier en France` ;
6. placer la section produit actuelle avant les trois portes et lui donner l'ancre stable `MilauraSelectionAtelier` sans la considerer comme la selection finale ;
7. reformuler l'introduction des trois portes comme une aide apres la premiere presentation produit ;
8. conserver provisoirement le triptyque actuel afin d'isoler la validation de lisibilite ;
9. verifier 360, 390, 430, 768, 1280 et 1440 px ;
10. verifier clavier, focus, contraste, absence de debordement, cible tactile et mouvement reduit ;
11. presenter mobile et desktop a Patrice ;
12. ne deployer qu'apres validation creative et autorisation explicite.

Definition de termine H1A :

- aucun texte utile ne demande de zoom sur mobile ou desktop ;
- un seul CTA est visible dans le hero ;
- le CTA conduit vers la selection de l'atelier sans sortie prematuree de la homepage ;
- la preuve logistique est exacte ;
- les trois portes restent utilisables mais viennent apres les produits dans l'architecture cible ;
- aucun changement de visuel n'est melange a ce lot ;
- Patrice valide le rendu mobile et desktop.

### H1B - Systeme image du hero

Patrice a autorise explicitement ce lot apres le choix du triptyque, puis a donne son GO pour publier H1A et H1B ensemble.

Etat au 2026-08-06 07:21 CEST : direction choisie par Patrice, integree puis publiee sur le theme live `190430282075`. Les sept fichiers relus depuis Shopify correspondent exactement au lot publie. Le jugement creatif final sur le site reel reste celui de Patrice.

Arbitrage de production :

- les essais IA avec Chloe et un nouveau modele homme ont ete rejetes, car les bijoux generes ne correspondaient pas exactement aux produits ;
- le modele homme est retire du lot H1B et le distributeur de savon amethyste prend sa place ;
- le triptyque approuve utilise uniquement les photographies officielles du bracelet aventurine verte Halo dore, du collier quartz rose boheme dore et du distributeur de savon amethyste ;
- les photographies ont seulement ete recadrees et redimensionnees ; aucune IA ne recree le produit ;
- toute future mise en scene IA doit verrouiller la photographie produit comme couche distincte et non regenerable.

1. choisir les produits exacts representes dans les trois panneaux ;
2. privilegier des photographies produit officielles lorsqu'une mise en scene IA ne garantit pas la fidelite ;
3. produire au maximum deux directions avant choix ;
4. verifier la fidelite exacte des bijoux et des pierres ;
5. faire choisir la direction par Patrice avant integration ;
6. integrer uniquement la direction approuvee ;
7. refaire la validation mobile et desktop avant tout push live.

Definition de termine H1B :

- aucun visage non documente ;
- trois panneaux visuellement differencies ;
- produits reels et diversite MilAura immediatement perceptibles ;
- aucune alteration IA du bijou, de la pierre, du sertissage, de la chaine, des proportions ou de la couleur ;
- un seul H1 ;
- validation creative explicite de Patrice.

## 4. Lot G1 - Reconciliation du depot

### Priorite

Priorite haute, immediatement apres le lot hero et avant toute nouvelle grande section homepage.

Le live n'est pas en panne. Le risque est cumulatif : chaque nouveau lot augmente la probabilite d'ecraser une version live, perdre un changement local ou pousser un fichier prive.

### Sources a reconcilier

1. Theme Shopify live `190430282075`, verite de production.
2. `origin/main` sur GitHub, verite distante versionnee.
3. Branche locale `main`, 23 commits devant et 312 derriere la reference distante locale.
4. Worktree local, contenant des changements de theme, documents, assets, sauvegardes, outils produit et materiaux prives.

### Methode

1. Figer un inventaire date : status, commits, branches, remotes et fichiers live.
2. Actualiser la reference distante en lecture seule avant toute conclusion finale.
3. Classer chaque changement local : live confirme, travail utile non deploye, experience, documentation, asset prive, sauvegarde ou obsolete a examiner.
4. Sauvegarder les changements sans provenance claire.
5. Creer un worktree ou clone de reconciliation propre sur une branche `codex/` dediee.
6. Comparer le theme live, GitHub et les lots locaux par groupes fonctionnels.
7. Reconstituer des commits coherents sans melanger theme, automation, UGC et archives.
8. Deplacer les materiaux prives vers un workspace separe uniquement apres inventaire, copie et verification. Aucune suppression implicite.
9. Valider Theme Check, JSON, preview et diff avant proposition de merge.
10. Demander une autorisation distincte avant commit, push, merge ou archivage du vieux checkout.

### Definition de termine

- une branche de reference propre et comprehensible ;
- aucun changement live connu uniquement present dans le worktree sale ;
- aucun secret, UGC prive ou artefact volumineux destine au theme public ;
- historique local et distant explique ;
- procedure de travail propre pour les lots suivants ;
- ancien checkout conserve tant que sa suppression n'est pas autorisee.

## 5. Lot P0A - Economie du panier

### Objectif

Verifier que les avantages 30, 50 et 80 EUR restent rentables lorsqu'ils se cumulent.

### Calcul par commande test

`Prix HT - cout produit - transport entrant - emballage - paiement - cadeau - livraison financee - remise - provision retours/casse = contribution avant Ads`

### Verifications Shopify

- existence et statut des codes `MILAURA-LIV50` et `MILAURA15` ;
- classes de remise et regles de cumul ;
- exclusions produit et minimums d'achat ;
- comportement quand le panier repasse sous un seuil ;
- cadeau ajoute et retire correctement ;
- remboursement, annulation et retour ;
- journal des commandes tests.

Le seuil de 50 % de contribution reste une hypothese de travail, pas une regle arbitraire de publication. La decision doit partir des couts reels et du CAC maximal acceptable.

### Definition de termine

- contribution connue aux paniers 30, 50, 80, 89 et 100 EUR ;
- cumul Shopify confirme par test ;
- seuils conserves, modifies ou suspendus par decision documentee ;
- aucun budget Ads tant que le scenario maximal n'est pas soutenable.

## 6. Lot P0B - Quatre produits reels

### Objectif

Alimenter la future `Selection de l'atelier` avec quatre produits detenus, rentables et presentables.

Pour chaque produit : variante Shopify, SKU, EAN si valide, quantite physique, cout, prix, marge, delai, origine, assemblage, certificat, photo, statut et remplacement possible.

La verification physique prime sur les quantites Shopify susceptibles de provenir d'anciens defaults.

### Definition de termine

- quatre produits comptes physiquement ;
- quatre variantes Shopify identifiees sans ambiguite ;
- marge et delai connus ;
- images utilisables ou brief de production approuve ;
- ajout panier testable.

## 7. Architecture homepage validee

L'ordre suivant est valide par Patrice :

1. Hero de marque.
2. Selection de l'atelier, quatre produits reels.
3. Trois portes, reformulees comme aide pour les personnes encore indecises.
4. `Votre bijou, imagine avec Karine`, offre Sur mesure prioritaire.
5. Creation du moment.
6. Karine et les preuves d'atelier.
7. Cadeaux et mariage.
8. Journal.
9. Cercle MilAura.

Logique de conversion :

- le hero donne envie et descend vers les produits ;
- la selection prouve immediatement ce que MilAura vend ;
- les trois portes recuperent les personnes qui n'ont pas encore choisi ;
- le Sur mesure revele la singularite commerciale de MilAura ;
- la Creation du moment montre une realisation concrete ;
- Karine apporte ensuite la preuve humaine ;
- cadeaux, contenus et Cercle prolongent l'achat et la relation.

## 8. Matrice de recyclage de la homepage actuelle

| Brique actuelle | Destination validee | Regle |
| --- | --- | --- |
| Hero de marque | Homepage | Corriger en H1A puis H1B |
| Les incontournables | Selection de l'atelier | Remplacer les badges de bestseller forces par quatre produits reels |
| Creation Aigue-marine | Creation du moment | Conserver comme section editoriale distincte |
| `Une pierre pour une emotion, comment choisir ?` | Landing interactive et composant partage | Retirer a terme de la homepage longue, ne pas supprimer le code |
| Diagnostic emotionnel | Troisieme porte et page dediee | Conserver comme accompagnement approfondi |
| `Ca vient d'arriver` | Collection ou rotation de la selection | Eviter un second carrousel produit concurrent |
| `Au Coeur de l'Atelier MilAura` | Karine et les preuves | Reutiliser la video et les gestes reels |
| `Le Rituel de Purification` | Journal, guide ou PDP | Sortir de la homepage generale |
| Journal MilAura | Journal | Relier chaque contenu a une offre, une collection ou une etape du funnel |
| Avis et badges abstraits | Preuves reparties | N'utiliser que des avis et affirmations demontrables |
| Newsletter et cartes | Cercle MilAura | Ne pas les presenter comme une newsletter generique |

Aucune section ni aucun fichier n'est supprime pendant la reconstruction. Une section retiree de l'ordre de la homepage reste disponible tant que sa destination n'est pas validee et operationnelle.

## 9. Funnel emotionnel et landings d'acquisition

Le composant `milaura-benefits-explorer` devient le noyau d'une landing de travail de type `/pages/choisir-sa-pierre`.

Parcours cible :

1. choisir une emotion ou un besoin ;
2. afficher la pierre associee ;
3. montrer deux ou trois produits reellement disponibles ;
4. ajouter une preuve courte de Karine ;
5. proposer l'ajout au panier ou le diagnostic complet.

Regles par canal :

- Meta et Pinterest : un visuel ou une carte par emotion, puis une landing ouverte directement sur le choix clique ;
- Google sur une requete de besoin : landing emotionnelle preselectionnee ;
- Google sur une requete produit ou pierre precise : landing pierre ou PDP correspondante ;
- SEO, AEO et GEO : URL stable, contenu utile visible sans dependre uniquement de JavaScript et liens vers produits reels.

Le visiteur ne doit pas refaire exactement le meme choix apres le clic publicitaire. Le parametre de campagne ou l'URL doit preselectionner l'emotion attendue.

Avant trafic :

- verifier stock, marge, prix et delai des produits lies ;
- retirer les promesses medicales ou garanties energetiques ;
- remplacer les preuves, notes, remises et raretes non documentees ;
- mesurer vue de landing, choix d'emotion, clic produit, ajout panier, checkout et commande ;
- tester lisibilite, performance et comprehension sur mobile.

## 10. Offre Sur mesure prioritaire

Nom de travail homepage : `Votre bijou, imagine avec Karine`.

Promesse : `Choisissez le style, les pierres, la taille et l'intention. Karine vous conseille et realise une creation qui vous ressemble.`

CTA de travail : `Imaginer mon bijou`.

Le Sur mesure est une offre et un funnel, pas un simple bloc decoratif.

### V1 - Brief guide

1. type de bijou ;
2. style ou couleurs ;
3. pierre souhaitee, emotion ou intention ;
4. taille ;
5. budget ;
6. message libre ou photo d'inspiration ;
7. validation humaine de faisabilite par Karine ;
8. proposition, delai et paiement.

Le bracelet peut etre le premier produit structure et configurable. Les autres creations restent accessibles par un brief plus ouvert tant que les regles produit ne sont pas stabilisees.

### V2 - Configuration semi-automatisee

Seulement apres analyse des demandes V1 : composants disponibles, compatibilites, prix, supplements, delais, preview utile et donnees transmises dans la commande.

KPI : clic CTA, debut du brief, completion, demande qualifiee, proposition acceptee, panier moyen, contribution, temps de preparation et respect du delai annonce.

## 11. Lot P1 - Conversion et marque

Ordre recommande :

1. H1A, lisibilite, CTA unique et preuve exacte ;
2. H1B, systeme image documente ;
3. Selection de l'atelier ;
4. trois portes repositionnees apres les produits ;
5. premiere PDP mobile prioritaire ;
6. offre et landing Sur mesure V1 ;
7. Creation du moment ;
8. Karine et les preuves ;
9. Cadeaux et mariage ;
10. Journal ;
11. entree Membre du Cercle.

Chaque section constitue un lot autonome avec une offre, une dependance stock, un KPI et une validation creative.

## 12. Lot P2 - Acquisition

Prerequis : stock, marge, tracking et parcours produit stabilises.

- audit SEO, AEO et GEO actualise ;
- hub anniversaire de mariage et six a huit annees fortes ;
- blog relie aux offres ;
- catalogue Pinterest reconcilie ;
- droits developpeur et tracking confirmes ;
- production organique avant paid ;
- budget augmente uniquement sur contribution positive.

## 13. Lot P3 - Automatisation et fidelite

Chantiers separes :

1. Camilla autonome jusqu'au brouillon Shopify, jamais jusqu'a la publication ;
2. Conseillere MilAura avec sources autorisees, stock reel et escalade vers Karine ;
3. Cercle Membre ;
4. Cercle Privilege apres achat ;
5. Ambassadeurs apres 30 a 50 vraies clientes et economie validee.

## 14. Sequence immediate validee

1. H1A formalise, implemente et publie.
2. H1B formalise, implemente et publie sans nouveau mannequin.
3. Relecture ciblee du live et empreintes SHA-256 verifiees.
4. Creer un commit Git limite aux sept fichiers publies et aux documents de verite.
5. Reconciliation Git avant toute nouvelle grande section homepage.
6. Calculer la contribution du pire scenario panier et verifier les cumuls Shopify avant Ads.
7. Compter et relier quatre produits reels avant le lot Selection de l'atelier.
