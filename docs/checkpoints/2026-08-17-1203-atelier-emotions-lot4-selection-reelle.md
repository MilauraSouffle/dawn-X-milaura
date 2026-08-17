# Checkpoint Atelier des emotions, lot 4 selection reelle

Date : 2026-08-17 12:03 CEST

## 1. Decision obtenue

Le lot 4 est implemente et testable sur le theme Shopify prive `200007713115`.

Le configurateur exploite maintenant la selection reelle transmise par Patrice depuis les paniers Dreambeads et Perles & Co. Cette selection ne prouve pas encore une commande fournisseur. Le statut conserve dans le moteur est donc `selection_pending_order_confirmation`.

Le live `190430282075`, le theme de developpement partage `199421952347`, le catalogue Shopify et les stocks Shopify n'ont pas ete modifies.

Preview :

`https://milaura.fr/pages/contact-milaura?view=atelier-emotions&preview_theme_id=200007713115`

## 2. Selection enregistree

Total des paniers hors livraison : `98,33 EUR`.

- Dreambeads : `35,93 EUR` ;
- Perles & Co : `62,40 EUR` ;
- 46 references dans le manifeste ;
- 45 references identifiees ;
- `TW-1707` reste a identifier sur la confirmation de commande ;
- 8 familles de lettres explorables ;
- 12 charms explorables ;
- 2 cordons visibles comme options techniques de montage ;
- 14 intercalaires, 7 composants de montage et 2 outils conserves dans le manifeste mais non presentes comme choix client ;
- aucune pierre ronde 04, 06 ou 08 mm dans la selection transmise.

Le stock fournisseur n'est jamais considere comme stock MilAura. Les quantites du manifeste sont les quantites selectionnees dans les paniers, pas un inventaire recu.

## 3. Implementation

Fichiers de theme :

- `assets/milaura-atelier-catalog.json` : manifeste versionne de la selection, references fournisseur, dimensions connues, quantites selectionnees, couts et statut ;
- `assets/milaura-atelier.js` : chargement du manifeste, choix des lettres et charms, calcul de capacite, alerte caracteres, persistance `sessionStorage`, restauration et remise a zero ;
- `assets/milaura-atelier.css` : plateau de composants, orbite responsive, fiche Karine et comportement mobile ;
- `sections/milaura-atelier-configurator.liquid` : parcours Message, Lettres, Pierres, Charms, recapitulatif et verrou commercial.

Regles actives :

- tailles Enfant 14 a 16 cm, Femme 16 a 18 cm, Homme 18 a 20 cm ;
- gabarits 04, 06 et 08 mm ;
- capacite theorique calculee avec le milieu de la plage de taille ;
- orbite visuelle plafonnee a 32 elements pour rester lisible, sans modifier le nombre theorique affiche ;
- encombrement du mot calcule avec la largeur connue de la famille de lettres ;
- encombrement du charm retire du reste theorique ;
- les caracteres hors `A-Z` sont signales car la distribution exacte des sachets alphabet n'est pas connue ;
- la composition est conservee dans la session du navigateur ;
- aucun formulaire, aucun bouton panier et aucun prix public dans le prototype prive.

## 4. Validation executee

Code :

- `jq -e` sur le manifeste : succes ;
- 46 composants, 20 choix clients, somme des couts `98,33 EUR` ;
- `node --check assets/milaura-atelier.js` : succes ;
- `git diff --check` : succes ;
- Theme Check : aucune erreur ou alerte sur les fichiers Atelier. Les 17 avertissements affiches appartiennent a 9 fichiers historiques hors lot.

Navigateur reel :

- 8 familles de lettres et 12 charms rendus depuis le manifeste ;
- onglet Pierres : `0 option` et absence de pierre explicite ;
- choix `LIBRE`, Homme, 04 mm, lettres `TIQ-667`, charm `LEG-212` : recapitulatif coherent ;
- restauration apres rechargement : mot, taille, diametre, lettres et charm conserves ;
- aucune erreur console ;
- aucun formulaire et aucun bouton de soumission dans le prototype ;
- 9 combinaisons de taille et diametre testees a 360 px ;
- 360, 390, 430 et 1440 px sans debordement horizontal ;
- toutes les perles visuelles restent dans le cercle du gabarit.

Shopify :

- push limite aux quatre fichiers Atelier sur le theme prive `200007713115` ;
- option `--nodelete` ;
- aucun push live ;
- pullback cible et comparaison octet par octet executes sur les quatre fichiers.

## 5. Donnees physiques exactes a relever

Une ligne par reference et par lot recu :

| Champ | Valeur attendue |
| --- | --- |
| `supplier` | Dreambeads ou Perles & Co |
| `supplier_reference` | reference exacte de la facture ou `a_completer` |
| `supplier_lot` | numero de lot si present |
| `purchase_confirmed_at` | date absolue de commande |
| `received_at` | date absolue de reception |
| `quantity_received` | comptage reel |
| `quantity_rejected` | casse, defaut, couleur ou percage non conforme |
| `width_mm` | largeur mesuree au pied a coulisse |
| `height_mm` | hauteur mesuree |
| `thickness_mm` | epaisseur mesuree |
| `hole_count` | nombre de trous |
| `hole_diameter_mm` | diametre reel du trou |
| `unit_weight_g` | poids unitaire pour charms et grosses pieces |
| `front_photo` | photo neutre de face avec regle |
| `back_photo` | photo neutre du dos et du passage du fil |
| `material_supplier_claim` | libelle fournisseur exact, sans extension de promesse |
| `elastic_0_8_compatible` | oui, non ou a tester |
| `leather_1_0_compatible` | oui, non ou a tester |
| `pull_test_result` | tenue du montage et protocole utilise |
| `skin_contact_result` | observation apres essai, sans promesse medicale |
| `karine_approved` | oui ou non |
| `karine_note` | raison du refus ou limite de montage |
| `shopify_component_id` | renseigne seulement apres validation physique |
| `milaura_stock` | stock vendable, jamais deduit du stock fournisseur |

Pour chaque famille alphabet, ajouter le comptage exact de `A` a `Z`. La capacite commerciale du mot doit etre determinee par la lettre la plus limitante, pas par le nombre total de pieces du sachet.

Pour les futures pierres 04, 06 et 08 mm, demander avant activation : reference, pierre ou matiere exacte, diametre reel moyen, dispersion de diametre, diametre de trou, nombre recu, nombre rejete, couleur du lot, poids, cout du rang, fournisseur et photo du lot.

Pour les neuf montages taille x diametre, Karine doit relever : longueur de fil coupee, nombre reel de pierres, nombre et taille de lettres, charm utilise, composants de fermeture, temps de montage, marge de reglage, tenue apres traction et photo du bracelet ferme.

## 6. Gate suivant

Le lot 4 logiciel est termine pour la phase panier fournisseur. Le Gate physique reste bloque.

Definition de termine du Gate physique :

1. commande fournisseur confirmee et factures conservees ;
2. `TW-1707` identifie ;
3. reception et comptage reels termines ;
4. distribution A-Z comptee pour les 8 familles ;
5. dimensions, trous, poids et compatibilites releves ;
6. au moins un montage pilote valide par taille et par diametre retenu commercialement ;
7. temps de montage, pertes, cout complet et prix public valides ;
8. composant Shopify pilote et stock MilAura crees ;
9. restitution commande testee dans Shopify Admin ;
10. seulement ensuite, activation du bouton panier et revue juridique definitive.

## 7. Point de reprise copiable

```text
Reprendre L'Atelier des emotions depuis le checkpoint 2026-08-17-1203. Le lot 4 prive charge 46 references issues des paniers reels dans le theme non publie 200007713115. Ne pas toucher au live. Commencer par verifier la confirmation des deux commandes, identifier TW-1707, puis remplir l'inventaire physique de reception. Ne pas activer le panier avant comptage A-Z, mesures de trous, compatibilite des montages, prototypes Karine, cout complet et prix public.
```
