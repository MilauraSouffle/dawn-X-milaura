# MilAura Project State - 2026-08-06 07:21 CEST

## Etat live actuel

- Store : `milaura-2.myshopify.com`
- Domaine : `https://milaura.fr`
- Theme live : `dawn-X-milaura/main`
- Theme ID : `190430282075`
- Dernier déploiement : 2026-08-05, publication ciblée des lots homepage H1A et H1B.
- Dernier checkpoint : `docs/checkpoints/2026-08-05-1135-milaura-panier-homepage-handoff.md`

## Statut des deux lots récents

### Panier

Statut : `live et validé par Patrice`.

- Drawer unique après ajout, ajout rapide, navbar desktop et dock mobile.
- Header compact avec `Retour à la boutique`.
- Total et bouton checkout maintenus visibles.
- Cartes produit compactes, arrondies et alignées sur MilAura.
- Sticky bar produit visible seulement après disparition du CTA principal.
- Paliers automatiques actuels :
  - 30 EUR : bracelet hématite offert, variante `53142713925979` ;
  - 50 EUR : livraison offerte avec `MILAURA-LIV50` ;
  - 80 EUR : 15 % avec `MILAURA15`.
- La rentabilité des paliers reste à confirmer par le P&L avant Ads.
- Les cartes à gratter quittent le funnel panier principal et seront repensées comme entrée du Cercle MilAura.

Commits :

- `109b04e0 feat: add automatic cart reward tiers`
- `37c4548e fix: unify cart drawer interactions`
- `a3e3ff76 style: refine cart product cards`

### Homepage

Statut : `lots H1A et H1B live et techniquement vérifiés, jugement visuel final du site réel réservé à Patrice`.

Hero :

- `MilAura • Bijoux, gemmes & lithothérapie`
- `La beauté d'un bijou. Les vertus d'une pierre.`
- Hero de marque généraliste, sans slider.
- Triptyque officiel : bracelet aventurine verte Halo doré, collier quartz rose bohème doré et distributeur de savon améthyste.
- CTA unique `Voir la sélection de l'atelier`, avec scroll interne vers les produits.
- Preuve logistique exacte : `Expédiées depuis notre atelier en France`.
- Karine est une preuve, pas la vedette du hero.

Trois portes :

1. Choisir mon bijou.
2. Choisir selon mon besoin.
3. Me laisser guider par le diagnostic.

Fichiers finaux :

- `sections/milaura-hero-portal.liquid`
- `sections/milaura-choice-doors.liquid`
- `sections/milaura-featured-products.liquid`
- `templates/index.json`
- `assets/milaura-hero-aventurine-halo-worn-v1.webp`
- `assets/milaura-hero-quartz-rose-boho-worn-v1.webp`
- `assets/milaura-hero-soap-amethyst-v1.webp`

Commit intermédiaire :

- `c9d9cc28 feat: add MilAura homepage portal hero`

Le commit Git ciblé du lot live est créé dans la session du 2026-08-06 sans inclure les autres changements du worktree.

Validation live :

- push Shopify réussi sur `190430282075` ;
- homepage HTTP 200 ;
- trois nouveaux assets présents dans le HTML public ;
- un seul H1 ;
- CTA, ancre produit, preuve France et ordre hero puis produits puis portes présents dans le HTML public ;
- pullback ciblé effectué le 2026-08-06 à 07:21 CEST ;
- empreintes SHA-256 des sept fichiers live identiques au lot de publication.

### Retour visuel Patrice du 2026-08-05

Statut : `corrections majeures requises avant validation`.

- Le hero doit conserver un seul CTA.
- Le triptyque actuel utilise une femme non documentée dans le système créatif MilAura et donne l'impression d'une seule parure répétée.
- Les futurs visuels doivent utiliser les mannequins documentés Chloé et Elena, ou une composition sans nouveau visage. Le modèle homme reste à concevoir et documenter.
- Les textes, CTA, preuves, descriptions et liens sont trop petits sur mobile et desktop. Seuls les grands titres ont une échelle satisfaisante.
- La preuve `Expédiées depuis les Vosges` est factuellement incorrecte : toutes les commandes sont préparées et expédiées depuis l'atelier MilAura à Metz.
- Formulation hero validée : `Expédiées depuis notre atelier en France`.
- La certification des pierres est confirmée par Patrice. Le fournisseur transmet les certificats émis par LFG Paris et un certificat est déjà présenté sur les pages produit concernées.
- La référence à Cartier reste exclue de la communication publique sans preuve et droit d'usage documentés.

Conséquence : H1A a corrigé la taille des textes, le CTA unique, la preuve logistique, l'ordre produits puis portes et l'introduction des portes. Patrice a ensuite autorisé la publication du lot H1A avec H1B.

### État H1A au 2026-08-05 17:42 CEST

- Textes courants et actions portés à 16 px sur mobile.
- Corps desktop porté à 17 ou 18 px selon la largeur.
- Preuves portées à 13 px sur mobile et 14 px sur desktop.
- Un seul CTA hero : `Voir la sélection de l'atelier`.
- Ancre stable `MilauraSelectionAtelier` sur la section produit actuelle.
- Section produit placée avant les trois portes.
- Introduction des portes reformulée comme aide après découverte des produits.
- Preuve exacte : `Expédiées depuis notre atelier en France`.
- Triptyque inchangé.
- JSON du template valide.
- Theme Check : 0 erreur, 31 warnings préexistants.
- Thème de développement : push ciblé réussi sur `199421952347` pour quatre fichiers.
- Preview distante : marqueurs H1A confirmés avec le cookie de preview Shopify.
- Thème live `190430282075` : H1A publié le 2026-08-05 par push ciblé.
- Réception technique : validée par HTML public et pullback distant.

### État H1B au 2026-08-05 19:06 CEST

- Patrice a choisi trois produits exacts pour le hero : bracelet aventurine verte Halo doré, collier quartz rose bohème doré et distributeur de savon améthyste.
- Les essais IA avec Chloé et un nouveau mannequin homme ont été rejetés, car les bijoux générés ne reproduisaient pas exactement les produits.
- Règle durable : un produit MilAura ne doit jamais être recréé librement par une IA. Une mise en scène future conserve la photographie produit comme couche verrouillée.
- Le triptyque H1B utilise uniquement les photographies produit officielles, recadrées et redimensionnées sans modification de la forme, de la pierre, des apprêts ou des proportions.
- Trois assets indépendants de 768 x 1152 px ont remplacé le prototype unique répété dans les trois panneaux.
- Theme Check : 0 erreur, 31 warnings préexistants.
- Push ciblé initial réussi sur le thème de développement `199421952347` pour la section hero et les trois assets.
- Patrice a donné son GO pour la publication du lot complet.
- Thème live `190430282075` : H1B publié le 2026-08-05 avec H1A.
- HTML public : trois nouveaux assets présents, ancienne preuve Vosges absente et CTA unique correct.
- Pullback du 2026-08-06 : les sept fichiers distants correspondent exactement au lot publié.
- Le jugement créatif final sur le site réel reste celui de Patrice.

## Décisions de marque à préserver

- Persona principal : femme CSP+ 25 à 65 ans, attirée par la beauté, le style, les pierres et leur dimension bien-être.
- Principe : `La beauté déclenche l'envie. La qualité rassure. La pierre et sa symbolique donnent du sens à l'achat.`
- La lithothérapie reste une spécialité visible, sans claim médical.
- Direction : premium épuré, mobile-first, anti-AI-slop.
- Karine intervient dans une section humaine dédiée et dans le sur mesure.
- Logo inchangé pendant ce lot.
- Brand system canonique : `/Users/paesano/Documents/Agentic-Ops/MILAURA-BRAND-SYSTEM-2026`.

## Contexte Pin Ecom

- L'accompagnement de Luc Bermond / Pin Ecom est payé et officiellement commencé.
- Ne pas rouvrir la décision de signature.
- Les recommandations Pin Ecom ne remplacent ni les données, ni les marges, ni le jugement de Patrice.
- L'accès développeur Pinterest reste à confirmer avant toute architecture API.

## Prochain objectif immédiat

H1A et H1B sont live. La prochaine action prioritaire est la réconciliation Git avant toute nouvelle grande section :

1. figer les vérités du live, de la branche locale et de `origin/main` ;
2. classer le worktree sans reset, clean ou pull global ;
3. reconstruire une branche propre par lots fonctionnels ;
4. préserver séparément les archives, outils produit et matériaux privés.

Avant les Ads, le calcul de contribution des paliers 30/50/80 EUR et les règles de cumul Shopify restent obligatoires. Le lot fonctionnel suivant est `Sélection de l'atelier`, avec quatre produits réellement en stock et économiquement viables.

## Architecture homepage cible

1. Hero de marque.
2. Sélection de l'atelier, quatre produits réels.
3. Trois portes comme aide pour les personnes encore indécises.
4. `Votre bijou, imaginé avec Karine`, offre Sur mesure prioritaire.
5. Création du moment.
6. Karine et les preuves d'atelier.
7. Cadeaux et mariage.
8. Journal.
9. Cercle MilAura.

## Recyclage et acquisition validés

- `Une pierre pour une émotion, comment choisir ?` devient une landing interactive et un composant partagé, pas un déchet.
- Le diagnostic reste un parcours plus approfondi et la troisième porte.
- La vidéo atelier rejoint Karine et les preuves.
- Le rituel de purification rejoint le Journal, un guide ou les fiches produit.
- `Ça vient d'arriver` est absorbé par une collection ou la rotation de la Sélection de l'atelier.
- Les campagnes Meta et Pinterest préselectionnent l'émotion cliquée sur la landing.
- Google envoie vers une landing de besoin, une landing pierre ou une PDP selon la requête.
- Aucun trafic payant avant stock, marge, contribution, cumul Shopify, claims et tracking vérifiés.

## Plan global

### P0

- Inventaire physique et rapprochement Shopify.
- P&L des 20 à 30 produits héros.
- Registre origine, assemblage, certification et délai.
- Suppression ou preuve de chaque claim commercial.
- Harmonisation livraison et retours.
- Tracking Shopify, GA4 et Pinterest.
- Recalcul économique des paliers panier.

### P1

- H1A : lisibilité, CTA unique et preuve exacte.
- H1B : système image documenté.
- Construction de la homepage selon l'ordre validé.
- PDP mobile-first.
- Photos et vidéos humaines des produits héros.
- Modèle homme.
- Offre Sur mesure V1 avec brief guidé et validation humaine de Karine.
- Cercle Membre et popup cartes après chiffrage.
- Amélioration du diagnostic existant.

### P2

- Audit SEO, AEO et GEO actualisé.
- Hub anniversaire de mariage et six à huit années fortes.
- Blog relié aux offres.
- Catalogue et tracking Pinterest.
- Production organique puis Ads avec portes de marge.

### P3

- Camilla autonome jusqu'au brouillon Shopify, jamais à la publication.
- Conseillère MilAura assistée par IA.
- Cercle Privilège puis Ambassadeurs après preuve.

## Etat Git

Photographie vérifiée de nouveau le 2026-08-06 07:21 CEST avant le commit ciblé :

- Branche : `main`.
- HEAD avant le commit de publication : `c9d9cc28`.
- Divergence : `ahead 23, behind 312`.
- Worktree : très sale, avec de nombreux changements préexistants et fichiers non suivis.
- Un `shopify theme dev` était actif sur le port `9293` au moment du handoff.

Règles :

- Ne pas reset, clean, checkout, pull global ou merge.
- Ne pas supposer que le diff local appartient à une seule session.
- Ne jamais pousser le thème complet.
- Pour un fichier sale, partir d'un pull live ciblé vers `/private/tmp`.
- Utiliser seulement `shopify theme push --only` après validation et autorisation.

## Sources de reprise

- `docs/codex-handoff.md`
- `docs/checkpoints/2026-08-05-1135-milaura-panier-homepage-handoff.md`
- `docs/superpowers/specs/2026-07-31-milaura-renouveau-commerce-design.md`
- `docs/superpowers/specs/2026-07-31-milaura-cart-drawer-design.md`
- `docs/checkpoints/2026-07-31-reprise-flux-produit-catalogue.md`
- `/Users/paesano/Documents/MilAura website/REPRISE-MILAURA-2026-07-21.md`
