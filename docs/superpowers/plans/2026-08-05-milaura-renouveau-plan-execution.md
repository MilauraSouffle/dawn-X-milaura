# MilAura - Plan d'execution du renouveau

Date : 2026-08-05

Derniere mise a jour : 2026-08-07 09:55 CEST

Statut : hero termine et valide par Patrice. Dock mobile V2 et CTA prune publies et valides techniquement le 2026-08-07. G1 est en cours dans un worktree propre separe. L'Atelier des emotions est un chantier produit actif. Le Cercle MilAura et la reutilisation de ScratchToReveal sont integres comme lots distincts et ordonnes.

Perimetres : theme Shopify, navigation, systeme CTA, reconciliation Git, verite commerciale, Cercle, ScratchToReveal, acquisition et automatisation

## Mise a jour validee le 2026-08-06 a 17:17 CEST

Patrice valide les decisions suivantes :

1. Le fond du hero remonte derriere la navbar pour supprimer le blanc superieur, mais le contenu conserve sa hauteur naturelle. La section est rallongee de la hauteur de recouvrement afin de ne pas deplacer le blanc sous le hero.
2. Le slogan de travail devient `La beaute d'un bijou + la vertu des pierres = l'emotion MilAura !`.
3. Les signes `+` et `=` sont typographiques, en or, centres entre deux filets fins. La version en cabochons graphiques est rejetee par Patrice.
4. Le CTA principal officiel reprend la capsule prune avec cercle et fleche or de la section Aigue-marine.
5. MilAura utilise un seul systeme CTA avec deux niveaux : principal prune et or, editorial texte prune et accent or. Reference : `docs/reference/MILAURA-CTA-SYSTEM-2026.md`.
6. Le CTA du hero descend vers la Selection de l'atelier. Trois modes restent possibles dans le personnalisateur a terme : principal, editorial ou aucun CTA. Le mode principal est la version de travail.
7. Les trois preuves du hero restent trois lignes simples avec coches. Le cartouche `L'engagement MilAura`, teste puis rejete par Patrice, ne doit pas revenir.
8. Le triptyque final utilise neuf photographies exactes, trois par panneau. Les neuf produits ont ete fournis par Patrice et sont relies directement a leurs images Shopify. Aucun produit n'est regenere par IA.
9. L'image secondaire au survol est activee des maintenant sur les cartes MilAura lorsqu'une seconde photographie produit existe. Le tactile conserve l'image principale.
10. `Creation du moment` devient `Pierre du moment`. L'Aigue-marine est la premiere campagne pilote et la pierre de la rentree pour septembre 2026.
11. L'appellation `semi-precieuse` est exclue des pages et publicites. Utiliser `Aigue-marine`, `Aigue-marine naturelle` lorsque la preuve produit le permet, ou `pierre gemme`.
12. Une offre de personnalisation s'inspire du principe mot, perles et charms de [Little Words Project](https://www.littlewordsproject.com), avec une proposition propre a MilAura : pierres, emotions, messages, charms ludiques et validation humaine de Karine. Nom de travail : `L'Atelier des emotions`.
13. Ce chantier n'est plus prospectif : Patrice achete actuellement les composants necessaires pour que Karine fabrique les premiers bracelets. Il doit etre traite comme un flux produit a inventorier, prototyper, chiffrer et piloter.

Etat H1C au 2026-08-06 18:33 CEST : lot publie sur le live `190430282075` apres GO explicite de Patrice. La rotation demarre apres quatre secondes puis change un panneau toutes les quatre secondes, sans pause au survol. Le cartouche de preuve est retire et les trois preuves simples sont restaurees. La variante 3:4 en `contain` de 18:00 CEST est rejetee a cause de ses bandes et de son manque d'impact. Les images sont ensuite composees en grappe, puis finalisees comme trois cabochons ovales et asymetriques. Chaque photo est prolongee par deux contours fins independants, or et aigue-marine, selon le motif de la section Aigue-marine. Les cabochons `+` et `=` sont remplaces par une composition typographique sobre et plus visible. Le pullback Shopify est identique au local. Les reponses publiques controlees a 18:28 et 18:33 CEST ne servaient pas encore la variante finale, probablement a cause du cache. La publication ne vaut pas validation creative.

## Mise a jour validee le 2026-08-07 a 08:56 CEST

1. Le hero est termine, valide visuellement par Patrice et sort du chemin critique.
2. Le dock mobile devient la navigation principale : Menu, Rechercher, Contact, Cercle et Panier. Le logo reste en haut a gauche et `Trouver ma pierre` reste en haut a droite.
3. La V1 du dock a ete publiee sur le live `190430282075` avec le commit `45a4b47d`. La branche Git sure est `codex/milaura-mobile-dock-2026-08-07` car `main` reste fortement divergent.
4. Le polish V2 place les gemmes sous les pictogrammes, les recadre au bord inferieur et reduit le dock de 128 a 88 px hors zone de securite.
5. Le prune profond du dock reste `#2F222D`. Les petits CTA utilisent un prune d'action `#493246`, releve par `#52394D`, afin de se lire prune plutot que noir.
6. Le lien `Cercle` conduit deja vers `/account`, mais la page compte n'est pas encore refondue.
7. ScratchToReveal quitte definitivement le panier et les fiches produit. Son moteur est conserve puis extrait pour devenir le rituel d'entree dans le Cercle.
8. Le futur popup ne vend pas une remise de 10 %. Il revele une invitation ou une attention du Cercle, puis demande le prenom et un canal choisi, email ou telephone.
9. Le compte Cercle, le consentement par canal, les attentions et les regles economiques doivent exister avant de remplacer le popup actuel sur le live.

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

Priorite haute, immediatement apres la validation et la publication du polish dock et avant toute nouvelle grande section homepage.

Le live n'est pas en panne. Le risque est cumulatif : chaque nouveau lot augmente la probabilite d'ecraser une version live, perdre un changement local ou pousser un fichier prive.

### Sources a reconcilier

1. Theme Shopify live `190430282075`, verite de production.
2. `origin/main` sur GitHub, verite distante versionnee.
3. Branche locale `main`, 29 commits devant et 338 derriere `origin/main` apres actualisation du 2026-08-07.
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

### Etat G1 au 2026-08-07 a 09:55 CEST

- `origin/main` est un miroir automatique Shopify et non une branche humaine de developpement ;
- dernier commit miroir : `b55b7494`, contenant exactement les quatre fichiers du dock V2 ;
- snapshot integral live : 484 fichiers ;
- vieux checkout : tous les fichiers live presents, 402 identiques, 61 differences de serialisation Shopify et 21 ecarts a reprendre par lots ;
- nouveau worktree : `/Users/paesano/Documents/MilAura website/dawn-X-milaura-reconcile-2026-08-07` ;
- nouvelle branche : `codex/milaura-reconcile-2026-08-07`, basee sur `origin/main` ;
- 20 assets publics referencies ont ete restaures depuis le live ;
- 9 anciens prototypes live non references ne sont pas recopies ;
- aucun commit, push, merge, reset, clean ou archivage G1 encore effectue.

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
4. Pierre du moment, avec landing pierre et produits reels associes.
5. Karine et les preuves d'atelier.
6. `Votre bijou, imagine avec Karine`, incluant Sur mesure et `L'Atelier des emotions`.
7. Cadeaux et mariage.
8. Journal.
9. Cercle MilAura.

Logique de conversion :

- le hero donne envie et descend vers les produits ;
- la selection prouve immediatement ce que MilAura vend ;
- les trois portes recuperent les personnes qui n'ont pas encore choisi ;
- la Pierre du moment transforme une pierre en campagne, landing et selection de produits ;
- Karine apporte la preuve humaine ;
- le Sur mesure et l'Atelier des emotions revelent la singularite commerciale de MilAura ;
- cadeaux, contenus et Cercle prolongent l'achat et la relation.

## 8. Matrice de recyclage de la homepage actuelle

| Brique actuelle | Destination validee | Regle |
| --- | --- | --- |
| Hero de marque | Homepage | Corriger en H1A puis H1B |
| Les incontournables | Selection de l'atelier | Remplacer les badges de bestseller forces par quatre produits reels |
| Creation Aigue-marine | Pierre du moment | Transformer la section en entree vers une landing Aigue-marine et tous les produits reels associes |
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

### 10.1 L'Atelier des emotions, chantier produit actif

Source d'inspiration declaree par Patrice : [Little Words Project](https://www.littlewordsproject.com).

La reference porte sur la mecanique de produit et de personnalisation. MilAura ne doit copier ni le nom, ni l'identite, ni les visuels. Sa proposition propre associe pierres naturelles, lettres, mot ou prenom, emotions, palettes, petits charms ludiques et validation humaine par Karine.

Patrice achete les composants au 2026-08-06. Le chantier est donc actif et doit avancer avec le Sur mesure, pas apres tout le reste du plan.

V1 recommandee :

1. inventorier chaque composant avec fournisseur, reference, cout, quantite, taille, matiere, couleur et compatibilite ;
2. definir trois a cinq constructions de bracelets reellement fabricables ;
3. fixer tailles, limite de caracteres, alphabets, palettes, pierres et charms autorises ;
4. calculer matiere, temps d'assemblage, emballage, frais, marge, contribution et delai ;
5. definir erreurs de saisie, retours et conditions des produits personnalises ;
6. produire packshot, detail, porte, choix des lettres, geste de Karine et emballage ;
7. construire une landing avec brief guide et validation humaine ;
8. privilegier des composants controles et des `line item properties` plutot qu'une explosion de variantes, sous reserve de validation technique ;
9. lancer un pilote limite avant toute automatisation.

KPI complementaires : conversion, panier moyen, contribution, temps d'assemblage, taux d'erreur ou de reprise et respect du delai.

## 11. Lot P1 - Conversion et marque

Ordre recommande :

1. H1A, lisibilite, CTA unique et preuve exacte ;
2. H1B, systeme image documente ;
3. H1C, hauteur structurelle du hero, slogan, CTA prune et or, preuves simples et image secondaire des cartes ;
4. triptyque 3 x 3 publie avec les neuf produits dans trois cabochons ovales a doubles contours, validation visuelle encore requise ;
5. Selection de l'atelier ;
6. trois portes repositionnees apres les produits ;
7. Pierre du moment et landing Aigue-marine ;
8. Karine et les preuves ;
9. offre et landing Sur mesure V1, avec pilote Atelier des emotions et inventaire composants ;
10. premiere PDP mobile prioritaire ;
11. Cadeaux et mariage ;
12. Journal ;
13. entree Membre du Cercle.

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

## 14. Lot N1 - Dock mobile et systeme CTA prune

### Objectif

Donner au mobile une navigation de marque permanente, visuelle et moins encombrante, puis faire lire les actions commerciales comme du prune MilAura plutot que du noir ou de l'or generique.

### Etat au 2026-08-07

- V1 publiee sur le live `190430282075` apres GO explicite de Patrice ;
- commit `45a4b47d` pousse sur `codex/milaura-mobile-dock-2026-08-07` ;
- dock live valide techniquement en 390 px : Menu, Rechercher et Panier fonctionnels ;
- V2 publiee : gemmes sous les pictogrammes, base coupee par le bord de l'ecran, hauteur hors safe area reduite de 128 a 88 px ;
- CTA hero, Selection de l'atelier et `Trouver ma pierre` harmonises avec le prune d'action `#493246` et le prune clair `#52394D` ;
- validation technique V2 effectuee en 320, 390 et 430 px, avec Menu, Rechercher et Panier fonctionnels ; dock masque en 1440 px ;
- GO live donne par Patrice, commit `252f31b5`, push branche sure et deploiement cible termines ;
- desktop conserve sa navigation complete et ne sert jamais le dock.

### Definition de termine

- validation creative de Patrice sur 320, 390 et 430 px ;
- Menu, Rechercher, Contact, Cercle et Panier testables ;
- aucun contenu, bouton flottant ou barre produit masque par le dock ;
- CTA principaux lisibles comme prune sur mobile et desktop ;
- Theme Check sans erreur et `git diff --check` propre ;
- commit cible, push sur branche sure et push Shopify `--only` apres GO distinct.

## 15. Lot C1 - Le Cercle MilAura et la page compte

### Positionnement ferme

Le Cercle MilAura est l'ecrin personnel des clientes MilAura. Il donne une memoire aux bijoux, pierres, bougies et creations, puis relie histoire, entretien, attentions et transmission.

Promesse : `Vos pierres. Vos emotions. Votre histoire.`

Le pilote est gratuit, sans abonnement, sans points et sans niveaux VIP publics pendant les six premiers mois. L'inscription marketing reste separee de la creation du compte.

### Architecture membre

1. `Mon Ecrin` : produits et Eclats enregistres, pierre, date, entretien, intention, histoire et passeport lorsque les donnees sont prouvees.
2. `Mes Attentions` : acces anticipe, anniversaire, attentions choisies et avantages réellement disponibles.
3. `A transmettre` : lien ou code personnel, attribution du parrainage et suivi apres commande qualifiee.
4. `Mon histoire MilAura` : date d'entree, pieces enregistrees, jalons reels et statut fondatrice eventuel.

### Pilotage des Membres fondatrices

- dedupliquer les clientes des 23 commandes historiques avant invitation ;
- reserver le statut `Membre fondatrice du Cercle MilAura, edition 2026` aux clientes confirmees ;
- ne rien envoyer automatiquement avant validation de Karine et Patrice ;
- ajouter l'Eclat fondateur a une prochaine commande, jamais dans un colis postal isole ;
- recueillir les retours des fondatrices avant l'ouverture publique.

### Decisions techniques a prendre avant developpement

1. verifier le type de comptes clients Shopify actuellement utilise et les contraintes de personnalisation ;
2. choisir la source de verite pour les passeports, attentions, anniversaires, codes et jalons ;
3. definir la liaison entre commande, variante, produit enregistre et cliente ;
4. definir la creation ou l'activation du compte depuis email et telephone ;
5. separer les consentements email et SMS du compte Cercle ;
6. choisir entre developpement theme, metaobjects/metafields, application legere ou moteur de fidelite, apres preuve de faisabilite ;
7. definir les droits d'acces, export, correction et suppression avant collecte publique.

### Economie et attentions a valider

- acces aux nouveautes 48 heures avant le public, 72 heures pour les fondatrices ;
- attention d'anniversaire ajoutee a une commande ;
- Eclat de bienvenue n°01 en amethyste naturelle, uniquement si provenance, traitement, cout et securite sont documentes ;
- parrainage pilote a chiffrer autour d'un minimum de panier coherent avec le panier moyen de 40 EUR ;
- aucune promesse de cadeau, livraison ou credit tant que le P&L et les regles Shopify ne sont pas valides.

### KPI du pilote

- invitations envoyees et comptes actives ;
- inscriptions au Cercle ;
- produits et Eclats enregistres ;
- taux de retour dans Mon Ecrin ;
- secondes commandes ;
- attentions utilisees ;
- transmissions et commandes attribuees ;
- cout reel et temps de preparation ;
- demandes de support et erreurs d'attribution.

### Definition de termine C1

- page `/account` devenue une destination de marque coherente avec le dock ;
- quatre espaces presents, meme si certaines fonctions commencent en etat pilote manuel ;
- aucune fausse donnee, recompense ou progression ;
- fondatrices importees ou invitees manuellement avec journal de suivi ;
- consentements et donnees verifies avant l'ouverture publique ;
- validation mobile, desktop, compte existant, nouveau compte et etat deconnecte.

## 16. Lot S1 - ScratchToReveal comme porte d'entree du Cercle

### Decision

ScratchToReveal n'est plus une mecanique de panier, de palier ou de remise. Le geste de gratter devient le moment de revelation d'une invitation ou d'une attention du Cercle.

### Phase S1A - Sortie propre de l'ancien parcours

1. retirer la preview cartes surprises visible des fiches produit lors du lot PDP ;
2. desactiver `show_scratch` et supprimer l'initialisation du moteur cache sans casser l'ajout panier ;
3. verifier le tiroir panier, la page `/cart` et les templates alternatifs, car `milaura-cart-rewards` reste encore declare dans les JSON de panier ;
4. retirer les textes qui promettent de gratter aux paliers 20, 30, 50 ou 80 EUR ;
5. conserver une copie documentee du moteur canvas avant toute suppression de code ;
6. tester ajout, retrait, changement de quantite, panier vide, remise et passage au paiement.

### Phase S1B - Extraction du moteur

1. isoler le canvas, le calcul de surface grattee, le tactile, la souris et l'alternative accessible ;
2. supprimer toute dependance au panier, aux cadeaux produit, aux seuils et aux codes de remise ;
3. creer un composant reutilisable, charge uniquement lorsque le popup est eligible ;
4. respecter `prefers-reduced-motion`, clavier, focus, lecteurs d'ecran et bouton `Reveler mon attention` ;
5. ne pas charger plusieurs moteurs Scratch sur la meme page.

### Phase S1C - Nouveau popup Cercle

Parcours cible :

1. invitation `Une attention vous attend` apres un engagement reel, jamais immediatement apres la banniere cookies ;
2. grattage ou revelation accessible avant le formulaire ;
3. message `Votre place dans le Cercle MilAura est ouverte` et presentation de l'attention ;
4. champ prenom ;
5. choix `Email` ou `Mobile`, puis affichage d'un seul champ adapte ;
6. consentement separe et explicite pour le canal choisi ;
7. creation ou rattachement du profil Cercle ;
8. confirmation et CTA vers `Mon Ecrin`.

Le popup ne doit jamais se montrer a une cliente deja connectee, pendant le panier, le checkout, un autre dialogue ou une action critique. Les regles exactes de frequence sont documentees et testees.

### Valeur revelee

Le grattage met en scene l'appartenance. Tous les nouveaux membres recoivent la meme valeur de base. Une attention differente peut etre proposee uniquement si elle est juste, disponible, tracable et economiquement validee.

Priorites :

1. invitation et acces a Mon Ecrin ;
2. acces anticipe ;
3. attention anniversaire ;
4. conseil lie aux pierres enregistrees ;
5. Eclat de bienvenue ajoute a une commande admissible.

La remise de 10 % n'est plus la promesse du popup.

### Remplacement sans rupture

- inventorier le popup newsletter, la bulle flottante, le footer et toute capture dupliquee ;
- construire et valider S1 avant de desactiver le popup actuel ;
- eviter toute periode avec deux popups ou aucune capture ;
- conserver une voie d'inscription sobre dans le footer ;
- mesurer affichage, debut du grattage, revelation, choix du canal, envoi, compte active et desinscription.

### Definition de termine S1

- aucun Scratch visible ou actif dans le panier et les fiches produit ;
- popup Cercle unique, accessible et non bloquant ;
- prenom plus un seul canal correctement enregistres ;
- attention rattachee au bon profil ;
- consentement et desinscription verifies pour chaque canal ;
- ancien popup `-10 %` retire uniquement apres preuve du nouveau parcours ;
- tests 320, 390, 430, tablette et desktop, plus compte connecte et deconnecte.

## 17. Sequence canonique a suivre

Chaque etape commence seulement lorsque la definition de termine de l'etape precedente est satisfaite ou que Patrice autorise explicitement un changement d'ordre.

1. `H1` termine : hero valide par Patrice.
2. `N1` termine : dock V2 et prune d'action publies puis valides techniquement.
3. `G1` en cours : baseline propre prepare, commit et push encore soumis a accord explicite.
4. `P0A` : calculer l'economie du panier, verifier les cumuls Shopify et auditer le reliquat Scratch de la page `/cart`.
5. `P0B` : compter, identifier et chiffrer quatre produits reels.
6. Construire la `Selection de l'atelier` avec ces quatre produits.
7. Repositionner et finaliser les trois portes.
8. Construire la landing Aigue-marine et relier les produits reels.
9. Inventorier les composants de l'Atelier des emotions, fabriquer trois a cinq prototypes et calculer leur contribution.
10. Construire Karine et les preuves d'atelier.
11. Construire Sur mesure V1 et la landing pilote de l'Atelier des emotions.
12. Refaire la premiere PDP mobile prioritaire et executer `S1A`, retrait du Scratch produit.
13. Construire Cadeaux et mariage.
14. Recomposer le Journal et relier chaque contenu a une destination commerciale utile.
15. Executer `C1` : fondations de donnees, page compte Cercle et pilote fondatrices.
16. Executer `S1B` et `S1C` : moteur Scratch autonome puis popup d'entree dans le Cercle.
17. Ajouter la section Cercle a la homepage et ouvrir le pilote public limite.
18. Reprendre l'acquisition SEO, AEO, GEO, Pinterest et campagnes uniquement avec stock, marge et tracking valides.
19. Automatiser progressivement Camilla, la conseillere MilAura, les attentions, le parrainage et le suivi, sans automatisation avant preuve manuelle.

### Regle de suivi

Pour chaque lot : objectif, fichiers, dependances, donnees requises, preview, tests, validation creative, GO live, commit cible, push cible, mesure apres publication et checkpoint date. Aucune etape n'est consideree terminee par le seul fait que le code existe.
