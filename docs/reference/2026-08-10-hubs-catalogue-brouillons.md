# Hubs catalogue préparés en brouillon local

Date : 2026-08-10
Statut : templates locaux synchronisables uniquement sur le thème de développement

## 1. Décision de sûreté

Le jeton Shopify configuré ne dispose pas du scope de lecture des pages. Il n'est donc pas possible de vérifier de façon fiable le statut de publication d'une page créée par API. L'option sûre retenue est celle autorisée par Patrice : templates et contenus locaux prêts à activer, sans création de Page dans Shopify Admin.

Aucune des quatre routes ci-dessous n'est créée, publiée, ajoutée à la navigation ou ajoutée au sitemap dans ce lot.

## 2. Routes et templates

| Route future | Template local | Objet | Produits dans le draft |
|---|---|---|---|
| `/pages/bijoux-par-pierre` | `page.milaura-bijoux-pierre.json` | hub des pierres réellement présentes | aucun |
| `/pages/choisir-sa-pierre` | `page.milaura-choisir-pierre.json` | guide de choix par couleur, type, symbolique et entretien | aucun |
| `/pages/pierres-de-naissance` | `page.milaura-pierres-naissance.json` | douze correspondances traditionnelles documentées | aucun |
| `/pages/cadeaux-anniversaire-de-mariage` | `page.milaura-cadeaux-mariage.json` | guide des anniversaires du couple | aucun |

La section `sections/milaura-catalogue-hub.liquid` n'affiche une destination commerciale que lorsqu'une collection a été explicitement sélectionnée et contient des produits. Aucun bloc de collection n'est configuré dans les quatre drafts.

## 3. Contenu naissance

Le draft présente les douze mois dans le hub unique. Il suit les correspondances reprises du Gemological Institute of America et précise que plusieurs traditions peuvent coexister.

Handles enfants réservés, non créés :

- `/pages/pierre-de-naissance-janvier` ;
- `/pages/pierre-de-naissance-fevrier` ;
- `/pages/pierre-de-naissance-mars` ;
- `/pages/pierre-de-naissance-avril` ;
- `/pages/pierre-de-naissance-mai` ;
- `/pages/pierre-de-naissance-juin` ;
- `/pages/pierre-de-naissance-juillet` ;
- `/pages/pierre-de-naissance-aout` ;
- `/pages/pierre-de-naissance-septembre` ;
- `/pages/pierre-de-naissance-octobre` ;
- `/pages/pierre-de-naissance-novembre` ;
- `/pages/pierre-de-naissance-decembre`.

Seuil avant activation d'un enfant : au moins 6 bijoux actifs et disponibles, au moins 2 types, contenu unique, images pertinentes, inventaire vérifié et absence de conflit Search Console.

## 4. Contenu anniversaire de mariage

Le draft distingue explicitement l'anniversaire d'un couple du cadeau offert le jour du mariage. Il prépare les correspondances déjà retenues par l'architecture 2026-08-09, sans créer de page enfant :

- `/pages/4-ans-mariage-noces-de-cire` ;
- `/pages/17-ans-mariage-noces-de-rose` ;
- `/pages/25-ans-mariage-noces-d-argent` ;
- `/pages/40-ans-mariage-noces-d-emeraude` ;
- `/pages/42-ans-mariage-noces-de-nacre` ;
- `/pages/48-ans-mariage-noces-d-amethyste` ;
- `/pages/50-ans-mariage-noces-d-or`.

Seuil avant activation d'un enfant : au moins 6 offres cohérentes, matière ou pierre prouvée, stock vérifié, contenu spécifique et contrôle de la requête dans Search Console. Un produit doré ne peut pas être présenté comme de l'or massif.

## 5. Activation future

1. terminer l'inventaire réel ;
2. choisir les sélections réellement disponibles ;
3. créer la Page Shopify sans publication ;
4. assigner le template sur le thème de développement ;
5. vérifier le rendu, les liens, les sources et l'absence de grille vide ;
6. rédiger les métadonnées définitives ;
7. demander un nouveau GO avant publication et navigation.

Source éditoriale naissance : https://www.gia.edu/birthstones
