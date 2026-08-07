# MilAura - Renouveau commerce, marque et catalogue

Date initiale : 2026-07-31
Derniere mise a jour : 2026-08-06 18:28 CEST
Statut : direction commerciale et architecture homepage validees par Patrice. Panier deploye et valide. Lots homepage H1A, H1B et H1C publies sur le live. Variante H1C en cabochons ovales publiee le 2026-08-06 a 18:22 CEST. Propagation publique et validation visuelle Patrice requises. L'Atelier des emotions est maintenant un chantier produit actif.
Projet : MilAura Shopify
Repo theme : `/Users/paesano/Documents/MilAura website/dawn-X-milaura`

## 1. Objet du document

Ce document fige la feuille de route issue de trois sources :

1. l'audit complet MilAura du 2026-07-23 ;
2. le retour Loom Pin Ads / Luc Bermond analyse le 2026-07-29 ;
3. les arbitrages de Patrice des 2026-07-31 sur le panier, le Cercle MilAura, Karine, la direction artistique, le stock, les images, Camilla et les produits personnalises.

Il devient la reference courte pour les futures sessions de conception et d'implementation. Il ne remplace pas les contrats techniques specialises listes en fin de document.

## 2. Vision validee

MilAura doit devenir une marque e-commerce :

- epuree et premium ;
- claire, identifiable et prete a scaler ;
- humaine, avec Karine comme preuve et visage central ;
- centree sur les produits reellement disponibles et rentables ;
- forte sur les cadeaux, les intentions et les anniversaires de mariage ;
- sans fausse preuve sociale, fausse rarete, origine floue ou promesse medicale ;
- capable de transformer Pinterest, le blog, l'email et l'IA en un meme systeme commercial.

La refonte est une mise a niveau commerciale, visuelle et operationnelle. Ce n'est pas une reconstruction gratuite du theme.

## 2.1 Avancement confirme au 2026-08-06

### Panier

- Le panier drawer est live sur le theme `190430282075`.
- Il s'ouvre apres ajout, ajout rapide, clic navbar desktop et clic dock mobile.
- Les paliers techniques live sont maintenant 30 EUR cadeau, 50 EUR livraison offerte et 80 EUR remise de 15 %.
- Le cadeau actuel est le bracelet hematite, variante `53142713925979`.
- Les codes actuels sont `MILAURA-LIV50` et `MILAURA15`.
- La sticky bar produit apparait seulement apres la disparition du CTA principal.
- Patrice a valide le comportement et le rendu du panier sur le site reel.
- La rentabilite des paliers reste a confirmer avant Ads.

### Homepage

- Un hero de marque generaliste, fixe et sans slider a remplace le hero produit Aigue-marine en premiere position.
- Accroche live : `La beaute d'un bijou. Les vertus d'une pierre.`
- Une section independante propose trois portes : bijou, besoin et diagnostic.
- L'Aigue-marine reste plus bas comme `Creation du moment`.
- Le lot a ete deploye le 2026-08-05 sur le theme `190430282075`.
- La reception technique est verifiee.
- Les lots correctifs H1A et H1B ont ensuite ete publies le 2026-08-05 apres le GO de Patrice.
- Le jugement visuel final sur le site reel reste celui de Patrice.

### Retour visuel Patrice du 2026-08-05 et traitement

La premiere version live n'etait pas validee. Quatre corrections majeures ont ete demandees puis traitees :

1. un seul CTA dans le hero ;
2. remplacement du triptyque actuel par un systeme coherent avec les mannequins documentes Chloe et Elena, sans nouveau visage non gouverne ;
3. augmentation nette des textes, CTA, preuves, descriptions et liens sur mobile et desktop ;
4. remplacement de `Expediees depuis les Vosges`, car toutes les commandes sont preparees et expediees depuis l'atelier MilAura a Metz.

Formulation hero validee : `Expediees depuis notre atelier en France`.

Le futur modele homme doit etre concu et documente avant toute utilisation. Il ne doit pas etre improvise dans un visuel de production.

Reference de verite : `docs/checkpoints/2026-08-05-1135-milaura-panier-homepage-handoff.md`.

Le lot H1A a ete implemente le 2026-08-05 : tailles augmentees, CTA unique, preuve France, ancre interne, produits places avant les trois portes et introduction des portes reformulee. Theme Check ne remonte aucune erreur. Apres verification sur le theme de developpement `199421952347` et GO explicite de Patrice, H1A a ete publie sur le live `190430282075`.

Le lot H1B a ete arbitre et implemente le 2026-08-05. Les essais IA qui modifiaient les bijoux ont ete rejetes. Le hero utilise maintenant trois photographies produit officielles et independantes : bracelet aventurine verte Halo dore, collier quartz rose boheme dore et distributeur de savon amethyste. Elles sont seulement recadrees et redimensionnees. Le modele homme est retire de ce lot. H1B a ete publie avec H1A sur le live `190430282075`. Le 2026-08-06, un pullback cible a confirme que les sept fichiers Shopify correspondent exactement au lot publie.

## 2.2 Architecture homepage actualisee le 2026-08-06

Ordre ferme :

1. Hero de marque.
2. Selection de l'atelier, quatre produits reels.
3. Trois portes, reformulees comme aide pour les personnes encore indecises.
4. Pierre du moment, avec landing et produits associes.
5. Karine et les preuves d'atelier.
6. `Votre bijou, imagine avec Karine`, Sur mesure et Atelier des emotions.
7. Cadeaux et mariage.
8. Journal.
9. Cercle MilAura.

Le hero ne doit pas envoyer prematurement le visiteur hors de la homepage. Son CTA unique est `Decouvrir les creations` et descend vers les quatre produits reels.

Les trois portes viennent ensuite comme mecanisme de rattrapage : choisir par type de bijou, choisir selon un besoin, ou se laisser guider par le diagnostic.

### Recyclage des sections existantes

- `Les incontournables` devient la Selection de l'atelier et perd les badges de bestseller non prouves.
- La Creation Aigue-marine devient la premiere Pierre du moment et conduit vers une landing Aigue-marine.
- `Une pierre pour une emotion, comment choisir ?` devient une landing interactive et un composant partage.
- Le diagnostic reste une page dediee et la troisieme porte.
- `Ca vient d'arriver` est absorbe par la selection ou une collection.
- La video atelier rejoint la section Karine et les preuves.
- Le rituel de purification rejoint le Journal, un guide ou les PDP.
- Le Journal reste sur la homepage et alimente Pinterest, SEO, AEO et GEO.
- Les cartes et la capture email rejoignent le Cercle MilAura.

Aucun fichier n'est supprime pendant cette migration. Une section quitte seulement l'ordre de la homepage quand sa destination de remplacement est operationnelle.

### Hero H1C

- Le fond du hero recouvre l'espace derriere la navbar, tandis que son contenu reste a sa position naturelle.
- Le slogan devient `La beaute d'un bijou + la vertu des pierres = l'emotion MilAura !`.
- Les signes `+` et `=` sont traites comme deux cabochons mineraux, amethyste et aqua.
- Le CTA principal utilise le systeme prune et or documente dans `docs/reference/MILAURA-CTA-SYSTEM-2026.md`.
- Les preuves restent trois lignes simples avec coches. Le cartouche editorial teste le 2026-08-06 est rejete et ne doit pas revenir.
- Le triptyque final comporte neuf photographies exactes, reparties sur trois panneaux et fournies par Patrice.
- Les neuf images tournent dans trois grands cabochons ovales et asymetriques superposes. Les photos officielles remplissent les formes bord a bord, sans bandes de compensation.
- Deux contours fins independants, or et aigue-marine, prolongent chaque ovale. Ce motif vient de la section Aigue-marine et remplace les simples bagues circulaires.
- Panneau 1 : collier obsidienne noire, bracelet oeil de tigre cuir brun et collier agate arbre.
- Panneau 2 : pendentif amethyste, pendentif amazonite et bougie Reconfort calcedoine.
- Panneau 3 : savon argan, bol chantant et distributeur de savon lapis-lazuli.
- Une seule image change a la fois, sans controles de slider visibles.
- La cadence par defaut est de quatre secondes entre deux changements, premier changement compris.
- Le mouvement est desactive avec `prefers-reduced-motion`.

### Cartes a deux images

- La premiere photographie montre le produit clairement.
- La seconde montre le produit porte ou en situation lorsque cette image existe.
- Le passage s'effectue uniquement avec un pointeur fin ou le focus clavier.
- Le tactile conserve la premiere photographie dans le premier lot.
- Les cartes MilAura partagees et la grille collection custom sont toutes les deux couvertes.

### Atelier des emotions

MilAura developpe une offre de bracelet a message composee de pierres, lettres et charms ludiques. [Little Words Project](https://www.littlewordsproject.com) est une reference de mecanique commerciale, pas une direction a copier.

Patrice achete les composants necessaires au 2026-08-06. L'offre doit donc etre traitee comme un projet produit actif, avec inventaire, prototypes, couts, regles, photos, landing et pilote.

La difference MilAura repose sur :

1. le choix d'une emotion ou intention ;
2. le choix de pierres coherentes avec le produit reel ;
3. un mot, un prenom ou un court message ;
4. des charms ludiques compatibles ;
5. la validation et la creation par Karine ;
6. une presentation dans l'espace Personnalisation et Sur mesure.

### Landing emotionnelle

Le composant `milaura-benefits-explorer` devient le noyau d'une landing de travail `/pages/choisir-sa-pierre` : besoin, pierre, produits reels, preuve de Karine, panier ou diagnostic complet.

Les campagnes Meta et Pinterest doivent preselectionner l'emotion cliquee sur la landing. Google dirige vers la landing emotionnelle pour une requete de besoin, et vers la landing pierre ou la PDP pour une requete produit precise.

Avant trafic payant : stock, marge, delai, tracking, claims, preuves, remises et contribution restante doivent etre verifies.

## 3. Decisions fermees au 2026-07-31

### 3.1 Panier et recompenses

La mecanique actuelle de cartes a gratter est utilisee au mauvais moment.

Decision :

- retirer le grattage du parcours panier principal ;
- ouvrir un panier lateral immediatement apres l'ajout ;
- afficher une barre de progression en haut du panier lateral ;
- annoncer le montant restant avant chaque avantage ;
- appliquer automatiquement les recompenses quand le palier est atteint ;
- ajouter automatiquement le cadeau admissible ;
- proposer clairement `Continuer mes achats` et `Finaliser ma commande` ;
- utiliser actuellement les paliers live 30/50/80 EUR demandes par Patrice ;
- appliquer actuellement un cadeau, la livraison offerte et une remise de 15 % ;
- recalculer ces seuils et avantages depuis les marges avant Ads ;
- ne pas revenir a l'ancienne remise de 30 % a 80 EUR.

Le benchmark fonctionnel est Nutrimuscle : panier lateral, progression, cadeaux automatiques, retour aux achats et chemin sans ambiguite. Il ne faut pas copier son identite visuelle.

### 3.2 Nouvelle fonction des cartes a gratter

La technologie existante peut etre reutilisee dans l'inscription au Cercle MilAura.

Precision validee par Patrice le 2026-08-07 : le grattage devient un rituel d'entree dans le Cercle, pas une remise aleatoire deguisee ni une etape du panier. Il ne depend plus des paliers 30, 50 ou 80 EUR et ne doit jamais interrompre l'achat.

Parcours cible :

1. le visiteur engage ouvre un popup premium `Une attention vous attend` ;
2. il gratte une carte ou utilise l'alternative accessible `Reveler mon attention` ;
3. son invitation au Cercle et une attention reelle sont revelees avant le formulaire ;
4. il renseigne son prenom ;
5. il choisit un seul canal de contact, email ou telephone, sans obligation de fournir les deux ;
6. le consentement marketing est demande separement pour le canal choisi ;
7. son profil rejoint le Cercle et l'attention est rattachee a ce profil ;
8. la confirmation conduit vers `Mon Ecrin`, pas vers une remise generique.

Le grattage doit avoir une alternative accessible de type `Reveler ma carte`.

La valeur revelee doit appartenir au Cercle : acces anticipe, attention anniversaire, conseil lie aux pierres, Eclat de bienvenue ou piece reservee dans une prochaine commande. Une remise peut exister dans un scenario chiffre, mais elle n'est ni la promesse principale ni le resultat par defaut. Aucune attention physique ou commerciale n'est publiee avant le P&L.

Le moteur canvas existant doit etre extrait dans un composant autonome. Les anciennes dependances au panier, aux paliers, aux codes de remise et aux cartes produit ne sont pas reutilisees dans le nouveau popup.

### 3.3 Le Cercle MilAura

Le Cercle MilAura n'est pas une vulgaire newsletter.

Architecture retenue :

| Niveau | Entree | Valeur cible |
| --- | --- | --- |
| Membre du Cercle | Prenom + email | Attention de bienvenue, conseils, contenus, coulisses, avant-premieres |
| Membre Privilege | Premiere commande | Attentions post-achat, fidelite et acces anticipe |
| Ambassadeur du Cercle | Invitation apres experience reelle | Parrainage et recompenses encadrees |

La couche membre peut etre lancee avant 30 clientes. La couche ambassadeur reste bloquee tant que MilAura ne dispose pas d'environ 30 a 50 vraies clientes, d'avis authentiques et d'une economie de parrainage validee.

Promesse de travail :

`Conseils, attentions et privileges reserves aux membres.`

Le programme doit relier capture, contenu, achat, fidelite et, plus tard, recommandation.

Precision du pilote 2026 : le Cercle reste gratuit, sans abonnement, sans points et sans niveaux VIP publics pendant les six premiers mois. L'espace compte comprend quatre destinations : `Mon Ecrin`, `Mes Attentions`, `A transmettre` et `Mon histoire MilAura`. Les clientes uniques des 23 commandes historiques peuvent etre invitees comme `Membres fondatrices`, avec validation manuelle avant tout envoi.

### 3.4 Direction artistique

Direction validee par Patrice : `100 % epure premium`.

- supprimer les degradés generalises ;
- limiter fortement contours, ombres et effets ;
- utiliser des fonds blanc, ivoire et beige tres clair ;
- retenir une couleur sombre forte pour la typographie et les CTA ;
- utiliser un seul langage de boutons ;
- augmenter l'espace, la lisibilite et la place de l'image ;
- utiliser des mouvements courts et rares ;
- conserver un signe MilAura distinctif pour ne pas devenir un template premium generique.

Le cercle ou halo plat peut devenir un motif de marque recurrent, sans retomber dans la sur-decoration.

### 3.5 Karine et la preuve humaine

Karine accepte une presence publique importante.

Elle devient :

- le visage de MilAura ;
- la personne qui selectionne, assemble, prepare et conseille ;
- l'auteur ou la garante des contenus importants ;
- le visage du Cercle ;
- la signature des selections cadeaux et mariage ;
- l'escalade humaine de la future Conseillere MilAura assistee par IA.

Les preuves atelier, stock, assemblage, emballage et expedition doivent remplacer les badges abstraits ou chiffres non prouves.

### 3.6 Remises

Les remises restent autorisees, mais uniquement avec un role mesurable :

- augmenter le panier moyen ;
- declencher une premiere commande rentable ;
- provoquer une seconde commande ;
- fideliser ;
- reactiver un client ;
- recompenser une recommandation rentable.

Aucune remise ne doit exister seulement pour embellir un popup ou simuler une promotion.

### 3.7 Bougies

Les bougies ne sont plus poussees en acquisition tant que leur marge est insuffisante.

Elles doivent etre classees apres calcul :

1. rentable seule : conserver ;
2. non rentable seule mais utile en coffret : repositionner ;
3. non rentable meme en coffret : arreter progressivement.

Le fait qu'elles soient fabriquees sur place constitue une preuve de marque, mais ne remplace pas la rentabilite.

## 4. Nouvelle priorite : vendre d'abord le stock reel

### 4.1 Donnees declarees par Patrice, a verifier

Au 2026-07-31, Patrice estime :

- disposer d'environ 200 references physiques differentes ;
- ne pas detenir environ 90 % des produits actuellement en ligne ;
- devoir commander au fournisseur apres une vente pour une grande partie du catalogue public.

Ces chiffres ne sont pas encore audites. Ils ne doivent pas etre presentes comme mesures Shopify confirmees avant inventaire.

### 4.2 Decision commerciale

Le renouveau doit prioriser les produits physiquement disponibles.

Le catalogue cible doit distinguer au minimum :

| Etat commercial | Signification | Traitement cible |
| --- | --- | --- |
| `stock-atelier` | Produit compte et disponible chez MilAura | Prioritaire homepage, Pinterest, Ads et offres |
| `stock-fournisseur` | Disponible chez le fournisseur mais non detenu | Secondaire, delai reel affiche |
| `sur-commande` | Achete ou assemble apres commande | Delai et conditions explicites |
| `pause` | Marge, stock ou qualite non satisfaisante | Non pousse ou masque |

Avant toute campagne :

- compter le stock physique ;
- rapprocher SKU, EAN et produit Shopify ;
- supprimer tout stock par defaut fictif ;
- definir la source de verite inventaire ;
- calculer marge et delai par produit ;
- choisir 20 a 30 produits heros detenus et rentables.

## 5. Chantier separe : usine produit et Camilla

### 5.1 Pourquoi une session dediee est obligatoire

Ce chantier touche plusieurs perimetres :

- doctrine et permissions Camilla ;
- scraping Camille Ambiance Nature ;
- normalisation et taxonomy ;
- stock physique ;
- pricing et marge ;
- texte, SEO, AEO et metafields ;
- personnages et prompts image ;
- controle de fidelite produit ;
- creation Shopify en brouillon puis validation et publication manuelle par Patrice ;
- journalisation, reprise et retour arriere.

Il ne doit pas etre melange a la refonte du theme ou au panier.

### 5.2 Etat actuel confirme par les fichiers locaux

Le flow actuel sait deja effectuer :

1. scraping d'une URL Camille Ambiance Nature ;
2. telechargement des images source ;
3. enrichissement JSON ;
4. controle `quality_gate.py` ;
5. generation de cinq images carrees ;
6. controle image ;
7. creation d'une fiche Shopify en brouillon ;
8. pose du SEO, des metafields MilAura et des champs Google Shopping.

Etat actuel et regle durable :

- `generation-nouveau-produit/AGENTS.md` interdit la publication automatique ;
- le contrat agent exige `status=DRAFT` ;
- le runbook s'arrete au brouillon et a la validation humaine ;
- Patrice reste l'unique personne qui publie un nouveau produit sur le site ;
- la doctrine Camilla interdit de modifier automatiquement les niveaux de stock ;
- la doctrine Camilla demande confirmation pour les changements majeurs ;
- le systeme image actuel ne comprend que Chloé et Elena ;
- le prompt image actuel doit etre repris pour la nouvelle direction premium et anti-AI-slop ;
- le vieux `pipeline-v2/mode_b.py` utilise un ancien chemin Gemini et ne doit pas redevenir la source de verite.

### 5.3 Cible demandee par Patrice

Entree : une URL produit Camille Ambiance Nature envoyee a Camilla.

Sortie cible : produit MilAura complet, controle et cree en brouillon Shopify, pret pour la validation et la publication manuelle par Patrice.

Pipeline cible :

1. scraper la source fournisseur ;
2. detecter doublons, SKU, EAN, disponibilite et changements fournisseur ;
3. verifier ou demander le statut du stock physique MilAura ;
4. normaliser type, audience, pierres, intentions et collections ;
5. calculer prix, TVA, marge, cout emballage, cout expedition et CAC maximal ;
6. produire le texte produit, SEO, AEO, FAQ et metafields sans claim medical ;
7. produire le nouveau set photo et video selon le type produit ;
8. verifier visuellement et techniquement la fidelite du produit ;
9. creer le produit en brouillon ;
10. executer une preview et les quality gates ;
11. transmettre a Patrice la preview, le resume des controles et les points a verifier ;
12. laisser Patrice publier, corriger ou conserver le produit en brouillon ;
13. archiver les sources, sorties, identifiants Shopify et preuves de validation.

### 5.4 Autonomie progressive jusqu'au brouillon

L'objectif final est l'autonomie de production jusqu'au brouillon. La publication reste toujours manuelle et reservee a Patrice.

| Mode | Autorisation |
| --- | --- |
| Mode 0 | Dry-run uniquement |
| Mode 1 | Creation automatique d'un brouillon, controle et validation manuelle |
| Mode 2 | Creation de plusieurs brouillons avec plafond, file de revue et rapport consolide |
| Mode catalogue | Proposition de patch pour les produits actifs, sans mutation live avant accord explicite de Patrice |

Le seuil de promotion entre modes sera defini dans la session Camilla. Hypothese de depart : au moins dix brouillons consecutifs couvrant plusieurs types, sans correction manuelle majeure, sans erreur de stock, marge, taxonomy, image ou claim.

### 5.5 Portes bloquantes avant remise a Patrice

Un brouillon ne doit jamais etre marque `pret a publier` si un de ces points manque :

- URL source et identifiant fournisseur archives ;
- absence de doublon confirmee ;
- stock physique ou statut sur commande explicite ;
- prix et marge conformes ;
- taxonomy valide ;
- collection existante ;
- texte sans promesse medicale ;
- origine, assemblage et certification sources ;
- images fideles au produit ;
- aucune deformation, pierre inventee ou bijou modifie ;
- alt, SEO et metafields complets ;
- delai reel ;
- page preview sans blocage ;
- journal et capacite de rollback.

Le pipeline ne doit plus injecter une quantite de stock par defaut non verifiee.

### 5.6 Fichiers qui devront etre audites et probablement modifies

Avant toute modification, faire des sauvegardes datees des doctrines, contrats et prompts concernes.

Camilla et automatisations :

- `/Users/paesano/Documents/Agentic-Ops/milaura-automation/agents/soul-camilla-v2.md`
- `/Users/paesano/Documents/Agentic-Ops/milaura-automation/AGENTS.md`
- `/Users/paesano/Documents/Agentic-Ops/milaura-automation/pipeline-v2/`
- runtime live `hermes-milaura-control`, a inventorier avant mutation

Flow produit principal :

- `generation-nouveau-produit/AGENTS.md`
- `generation-nouveau-produit/README.md`
- `generation-nouveau-produit/docs/milaura-product-agent-contract.md`
- `generation-nouveau-produit/docs/2026-06-08-runbook-lancer-generation-produit.md`
- `generation-nouveau-produit/schemas/product_enrichment_v1.schema.json`
- `generation-nouveau-produit/prompts/text_enrichment_system_v1.md`
- `generation-nouveau-produit/prompts/image_generation_gpt_image_2_v1.md`
- `generation-nouveau-produit/scripts/supplier_scrape_one.py`
- `generation-nouveau-produit/scripts/enrich_text_openai.py`
- `generation-nouveau-produit/scripts/quality_gate.py`
- `generation-nouveau-produit/scripts/image_quality_check.py`
- `generation-nouveau-produit/scripts/generate_images_gpt_image_2.py`
- `generation-nouveau-produit/scripts/pricing_rules.py`
- `generation-nouveau-produit/scripts/create_shopify_draft.py`

Creative et modeles :

- `/Users/paesano/Documents/Agentic-Ops/Creative + UGC/MilAura/STUDIO-MANIFEST.json`
- `/Users/paesano/Documents/Agentic-Ops/Creative + UGC/MilAura/Chloe/`
- `/Users/paesano/Documents/Agentic-Ops/Creative + UGC/MilAura/Elena/`
- `generation-nouveau-produit/assets/models/chloe/`
- `generation-nouveau-produit/assets/models/elena/`
- nouveau modele homme a concevoir et documenter
- assets reels de Karine a creer et gouverner separement

### 5.7 Nouveau systeme image cible

Le chantier image fera l'objet d'une session dediee.

Pour les produits heros, le set cible est :

1. packshot propre sur support ;
2. macro matiere et detail ;
3. produit porte en plan serre ;
4. produit porte en situation, sans cadrage macro ;
5. geste humain ou main ;
6. emballage, echelle ou preuve atelier ;
7. video courte de 3 a 5 secondes si utile.

Roles creatifs :

- Chloé : energie, quotidien, formats sociaux ;
- Elena : serenite premium, Pinterest et produits haut de gamme ;
- modele homme : bijoux homme, unisexe, cadeau et couple ;
- Karine : preuve reelle, atelier, selection, assemblage et Cercle.

Le produit doit provenir d'une reference exacte. L'IA ne doit jamais inventer sa forme, sa pierre, sa taille, son sertissage ou sa chaine.

La migration visuelle est priorisee :

- niveau A : 20 a 30 produits heros avec set complet ;
- niveau B : 40 a 60 produits secondaires avec packshot, porte et detail ;
- niveau C : reste du catalogue, traitement progressif ou pause.

## 6. Produit personnalisable par Karine

Le Sur mesure est une offre prioritaire, une landing et un funnel. Il ne doit pas etre traite comme un simple bloc decoratif de homepage.

Nom de travail homepage : `Votre bijou, imagine avec Karine`.

Promesse de travail :

`Choisissez le style, les pierres, la taille et l'intention. Karine vous conseille et realise une creation qui vous ressemble.`

CTA de travail : `Imaginer mon bijou`.

### 6.1 V1 - Brief guide et validation humaine

Le premier parcours demande :

1. le type de bijou ;
2. le style ou les couleurs ;
3. la pierre souhaitee, l'emotion ou l'intention ;
4. la taille ;
5. le budget ;
6. un message libre ou une photo d'inspiration ;
7. les coordonnees necessaires au suivi.

Karine confirme ensuite la faisabilite, le prix et le delai avant paiement ou creation de la commande adaptee.

Le bracelet devient le premier produit structure et configurable. Les autres bijoux restent accessibles par un brief plus ouvert tant que leurs regles produit ne sont pas stabilisees.

### 6.2 V2 - Configuration semi-automatisee

Cette phase ne commence qu'apres analyse des demandes V1.

Le mot `purifie` ou toute formulation energetique devra etre cadre sans promesse medicale ni efficacite garantie.

La specification fonctionnelle devra definir :

- pierres admissibles et stock composants ;
- nombre de pierres et compatibilites ;
- taille du bracelet ;
- intention ou style ;
- prix de base et supplements ;
- delai de preparation ;
- rendu ou preview ;
- donnees transmises dans la ligne de commande ;
- procedure atelier pour Karine ;
- impossibilite de commander une combinaison sans composants ;
- politique de retour d'un produit personnalise ;
- photos et contenu expliquant la preparation.

Ce configurateur ne doit pas etre code comme des centaines de variantes Shopify si des line item properties ou une architecture composant plus simple suffisent.

KPI : clic CTA, debut du brief, completion, demande qualifiee, proposition acceptee, panier moyen, contribution, temps de preparation et respect du delai annonce.

### 6.3 Atelier des emotions, V1 produit

Source d'inspiration : [Little Words Project](https://www.littlewordsproject.com), uniquement pour le principe de bracelets personnalisables avec lettres, messages et petits charms. MilAura conserve son nom, sa direction artistique, ses pierres, son vocabulaire et le role central de Karine.

La V1 doit limiter volontairement le choix :

1. trois a cinq constructions de bracelet ;
2. tailles definies ;
3. pierres et palettes issues du stock composants ;
4. mot, prenom ou message court avec limite de caracteres ;
5. charms compatibles, y compris des elements ludiques de type sourire ;
6. prix de base et supplements lisibles ;
7. validation humaine de la faisabilite ;
8. delai annonce et procedure atelier.

Donnees a conserver par commande : taille, modele, pierres, couleurs, texte exact, casse, espacement, charm, supplements, note atelier et validation client si necessaire.

Portes de sortie obligatoires avant mise en vente : inventaire et couts composants, marge et contribution, temps d'assemblage, politique de personnalisation et de retour, photos fideles, test mobile et commande pilote.

Le parcours ne doit pas creer des centaines de variantes Shopify si des composants controles et des `line item properties` suffisent. La decision technique doit etre prise apres le prototype de commande.

KPI specifiques : clic, debut, completion, conversion, panier moyen, contribution, temps d'assemblage, erreur de personnalisation, reprise atelier et respect du delai.

## 7. Origine, assemblage et certification

### 7.1 Informations confirmees ou declarees par Patrice

- emballage MilAura : 100 % des commandes ;
- grande partie des produits : assemblage MilAura ;
- certains produits : fabrication dans les Vosges ;
- bougies : fabrication sur place ;
- toutes les commandes sont preparees et expediees depuis l'atelier MilAura a Metz ;
- le fournisseur situe dans les Vosges transmet les certificats des pierres emis par le cabinet LFG Paris ;
- un certificat est deja presente sur les pages produit concernees ;
- la relation declaree entre LFG Paris et Cartier reste interne et ne doit pas etre utilisee publiquement sans preuve et droit d'usage documentes.

### 7.2 Registre de preuve requis

Chaque SKU doit recevoir un statut exact :

- fabrique par MilAura ;
- assemble par MilAura ;
- fabrique dans les Vosges ;
- selectionne par Karine ;
- produit fini fournisseur ;
- pierre certifiee avec preuve ;
- prepare et emballe par MilAura.

La mention `fabrique en France` ne doit jamais etre globale si tous les produits ne partagent pas la meme realite.

La mention publique de Cartier ou d'une maison tierce est interdite sans preuve, droit d'usage et formulation non trompeuse. Cette precaution ne remet pas en cause la certification LFG Paris confirmee par Patrice.

## 8. Anniversaires de mariage

Le chantier mariage reste une priorite structurante.

Architecture validee :

1. un hub `Cadeaux d'anniversaire de mariage par annee` ;
2. six a huit annees fortes au lancement ;
3. selections ou coffrets reellement differents ;
4. choix femme, homme ou couple ;
5. budgets, message personnel et delai cadeau ;
6. calendrier des noces ;
7. articles, emails et pins relies ;
8. extension vers environ seize annees seulement apres preuve.

Source detaillee :

- `/Users/paesano/Documents/MilAura website/REPRISE-MILAURA-2026-07-21.md`
- `generation-nouveau-produit/docs/cadeaux-de-mariage-coverage-2026-06-14.md`

## 9. Ordre d'execution global

### P0 - Verite commerciale et fondations

- inventaire physique et rapprochement Shopify ;
- P&L des produits detenus ;
- selection des 20 a 30 produits heros ;
- registre origine, assemblage, certification et delai ;
- correction des fausses preuves et contradictions ;
- mesure, consentement et tracking ;
- choix des seuils et avantages rentables.

### P1 - Conversion et marque

- correction H1A : lisibilite, CTA unique et preuve logistique exacte ;
- correction H1B : nouveau systeme image documente ;
- homepage selon l'ordre valide de la section 2.2 ;
- Selection de l'atelier avec quatre produits reels ;
- trois portes repositionnees apres les produits ;
- nouvelle fiche produit mobile-first ;
- panier lateral et progression automatique ;
- offre Sur mesure V1 et landing associee ;
- Atelier des emotions avec inventaire composants, prototypes et pilote ;
- Karine, atelier, emballage et preuves ;
- premiere vague image des produits heros ;
- Cadeaux et mariage ;
- Journal ;
- popup cartes + Cercle MilAura.

### P2 - Acquisition structuree

- hub et premieres pages anniversaire de mariage ;
- blog relie aux offres ;
- catalogue et tracking Pinterest ;
- pins, email et lifecycle ;
- Ads uniquement apres portes marge, tracking et conversion.

### P3 - Automatisation et fidelite avancee

- nouvelle usine produit Camilla autonome jusqu'au brouillon et capable de preparer des lots de revue ;
- Conseillere MilAura assistee par IA ;
- Cercle Privilege ;
- ambassadeurs et parrainage apres preuve.

Le chantier Camilla est separe techniquement, mais il alimente P0 et P1. Il peut avancer dans une session parallele dediee sans melanger ses fichiers avec la refonte du theme.

## 10. Sources et chemins de reprise

### Matrice de provenance

| Information utilisee | Source de preuve |
| --- | --- |
| Architecture mariage, offres heros, P&L et ancienne definition du Cercle | `/Users/paesano/Documents/MilAura website/REPRISE-MILAURA-2026-07-21.md` |
| Etat du popup, doublon de capture, cartes, Pinterest, blog et IA visiteur | `docs/superpowers/plans/2026-06-23-milaura-capture-retargeting-pinterest-blog-ia-reprise.md` |
| Paliers 20/50/80 EUR, codes, cadeau et grattage live | `docs/checkpoints/2026-06-08-0831-milaura-cartes-surprises-live.md` |
| Flow URL fournisseur vers fiche Shopify draft | `generation-nouveau-produit/README.md` et `generation-nouveau-produit/docs/2026-06-08-runbook-lancer-generation-produit.md` |
| Interdiction actuelle d'auto-publier et statut `DRAFT` | `generation-nouveau-produit/AGENTS.md` et `generation-nouveau-produit/docs/milaura-product-agent-contract.md` |
| Publication toujours reservee a Patrice | correction de Patrice du 2026-07-31, coherente avec le contrat produit existant |
| Taxonomy, audiences, collections et garde-fous agent produit | `generation-nouveau-produit/docs/milaura-product-agent-contract.md` |
| Cinq slots images actuels et roles Chloé/Elena | `generation-nouveau-produit/prompts/image_generation_gpt_image_2_v1.md` |
| Doctrine, permissions, inventaire read-only et role actuel de Camilla | `/Users/paesano/Documents/Agentic-Ops/milaura-automation/agents/soul-camilla-v2.md` |
| Runtime Camilla preserve et actif separement de Stella | checkpoints Agentic-Ops des 2026-07-12 et 2026-07-19 |
| Environ 200 references detenues, environ 90 % du catalogue non detenu, Karine publique, direction epuree, nouvelle fonction des cartes | declarations de Patrice du 2026-07-31, consignees pour la premiere fois dans ce document et marquees a verifier quand necessaire |

### Plan et audit

- `/Users/paesano/Documents/MilAura website/REPRISE-MILAURA-2026-07-21.md`
- `docs/superpowers/plans/2026-06-23-milaura-capture-retargeting-pinterest-blog-ia-reprise.md`
- `docs/checkpoints/2026-06-08-0831-milaura-cartes-surprises-live.md`
- `docs/project-state.md`
- `docs/codex-handoff.md`

### Produit et Camilla

- `generation-nouveau-produit/AGENTS.md`
- `generation-nouveau-produit/README.md`
- `generation-nouveau-produit/docs/milaura-product-agent-contract.md`
- `generation-nouveau-produit/docs/2026-06-08-runbook-lancer-generation-produit.md`
- `generation-nouveau-produit/docs/one-product-test-protocol.md`
- `/Users/paesano/Documents/Agentic-Ops/milaura-automation/AGENTS.md`
- `/Users/paesano/Documents/Agentic-Ops/milaura-automation/agents/soul-camilla-v2.md`
- `/Users/paesano/Documents/Agentic-Ops/docs/checkpoints/2026-07-12-0858-stella-camilla-production-reduction.md`
- `/Users/paesano/Documents/Agentic-Ops/docs/checkpoints/2026-07-19-0801-camilla-whisper-repair.md`

### Creative

- `generation-nouveau-produit/prompts/image_generation_gpt_image_2_v1.md`
- `/Users/paesano/Documents/Agentic-Ops/Creative + UGC/MilAura/STUDIO-MANIFEST.json`
- `/Users/paesano/Documents/Agentic-Ops/Creative + UGC/MilAura/Face_Reference_Prompting_Guide.md`

## 11. Regles de reprise

Pour toute future session :

1. lire ce document et les `AGENTS.md` du perimetre touche ;
2. annoncer si la session concerne le theme, Camilla, les automations ou les creatives ;
3. ne jamais modifier plusieurs doctrines ou repos sans les nommer ;
4. sauvegarder tout contrat, SOUL, prompt ou doctrine avant modification ;
5. distinguer les faits verifies des estimations de Patrice ;
6. ne jamais publier automatiquement un produit, Patrice reste l'unique valideur de publication ;
7. ne pas pousser le theme complet ;
8. utiliser des KPI et une definition de termine pour chaque lot ;
9. revenir vers Patrice avec ce qui a change, les preuves et ce qu'il doit verifier visuellement.

## 12. Prochaine session recommandee

H1A, H1B et H1C sont publies. Verifier d'abord la propagation publique de la variante ovale et demander le verdict visuel de Patrice. Commencer ensuite par la reconciliation Git, sans reset, clean, pull global ou push complet du theme. Etat de cloture du 2026-08-06 : `ahead 24`, `behind 312`, worktree tres sale et H1C final non commite.

Le P0 stock et economie reste obligatoire avant la Selection de l'atelier et avant Ads : quatre produits physiquement disponibles, contribution panier calculee dans le pire scenario et cumul Shopify teste.

En parallele produit, ouvrir l'inventaire des composants que Patrice achete pour l'Atelier des emotions, definir trois a cinq prototypes et calculer leur economie avant de construire le configurateur.

En session separee Camilla : auditer le flow reel, sauvegarder les doctrines, definir le nouveau contrat d'autonomie jusqu'au brouillon, puis faire evoluer un seul produit pilote avant tout batch de brouillons ou toute proposition de modification du catalogue actif.
