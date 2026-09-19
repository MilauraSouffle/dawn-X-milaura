# MilAura PDP V2, iteration apres retour visuel du 2026-09-19

## Retour de Patrice

Patrice valide l ossature et la qualite generale de la premiere preview, puis demande les corrections suivantes :

- densifier le bloc d achat place sous ou a cote de la galerie ;
- remettre les bulles de caracteristiques produit visibles sur la PDP actuelle ;
- enrichir le bandeau de reassurance avec les certificats et les moyens de paiement ;
- retirer `Tout voir avant de choisir`, son introduction et `Ce que vous recevrez` ;
- retirer le conseil generique sur l eau, le parfum et les produits menagers ;
- mettre davantage en avant la selection `Qualite AA - Tres elevee` ;
- reprendre le design de `Tout savoir sur cette piece`, juge plus reussi, sans les questions et reponses dans cette zone ;
- conserver les nouvelles images editoriales pour une section complementaire.

## Reponse implementee

### Hero d achat

- Titre limite a `24 px` sur mobile et `26,4 px` a `1024 px`, avant le grand format desktop.
- Grille desktop intermediaire elargie a `420 px` pour le panneau d achat.
- Ajout de quatre faits produit dynamiques issus des metafields : pierres, matieres et deux specifications.
- Espacements resserres entre titre, prix, disponibilite et formulaire.
- Preuve sociale reformulee : `Plus de 129 clientes et clients ont deja choisi cette piece.` pour Iris, avec nombre toujours calcule selon la politique commerciale approuvee.

### Separateur de reassurance

Le separateur comporte maintenant deux niveaux :

1. rail clair de caracteristiques produit : qualite, intention, pierres, provenance et vertus disponibles ;
2. rail prune de services : preparation a Metz, expedition, retours, conseil, certificat disponible ou conditionnel, puis moyens de paiement reellement actives dans Shopify.

Les logos de paiement proviennent de `shop.enabled_payment_types`. Le texte certificat reste conditionnel et n affirme jamais une certification absente du produit.

### Guide produit

Le nouveau fichier `sections/milaura-product-guide-v2.liquid` reprend le langage visuel de `milaura-product-experience` sans modifier la section historique :

- deux onglets seulement, `Le bijou` et `Les pierres` ;
- E01 pour la description complete, les matieres et les specifications ;
- E03 pour les pierres, la lithotherapie, la provenance et la qualite ;
- aucune question frequente et aucun onglet services dans cette zone ;
- selection qualite presentee dans un bandeau aigue-marine avec filets or.

### Section complementaire

La section `milaura-product-narrative-v2` devient une seule section technique :

- image E02 ;
- titre `Fermoir, matieres et finitions` ;
- matieres, dimensions, fermeture, traitements et provenance lorsqu ils existent ;
- certificat lie au produit lorsqu il existe ;
- aucun conseil d entretien generique.

## Verification

- `node --test tests/pdp-v2-contract.test.mjs` : `7/7 PASS`.
- `node --check assets/milaura-product-pdp-v2.js` : PASS.
- `git diff --check` : PASS.
- `shopify theme check` : zero erreur, seize warnings historiques hors lot.
- Push cible sur le theme prive `201381216603` : six fichiers.
- Pullback Shopify dans `/private/tmp/milaura-pdp-v2-feedback-pullback-20260919` : `6/6` fichiers identiques octet par octet.
- Journal navigateur : aucune erreur et aucun warning.

QA `1024 x 900` :

- document et viewport a `1024 px`, aucun debordement ;
- colonnes hero `484 / 420 px` ;
- titre `26,4 px`, hauteur `86,32 px` ;
- quatre faits produit visibles ;
- CTA visible dans le premier ecran ;
- deux onglets seulement ;
- textes refuses absents.

QA `390 x 844` :

- aucun debordement horizontal ;
- titre `24 px`, hauteur `78,47 px` ;
- quatre faits produit ;
- huit bulles rendues avec duplication du rail pour l animation ;
- rail de reassurance, guide a deux onglets et selection qualite conformes ;
- onglet `Les pierres` fonctionnel ;
- questions frequentes absentes.

## Etat des gates

- PASS technique : acquis.
- Preview Shopify : mise a jour.
- GO visuel Patrice : en attente.
- Produit Admin, medias V3, affectation de template, integration, release et live : non executes.
- Theme public `190430282075` : intact.
