# Chapelets V3 et modal produit global

Date : 2026-08-27 18:05 CEST

## Autorisations

Patrice a donne les GO exacts :

- `GO SHOPIFY CHAPELETS`
- `GO MODAL PRODUIT`
- deploiement complet du modal sur le theme live
- produits ecrits dans le vrai catalogue Shopify mais conserves en brouillon

## Produits Shopify

### Chapelet en obsidienne noire

- produit : `10669418283355`
- EAN controle : `3667407018587`
- statut final : `DRAFT`
- galerie finale : 5 images V3
- texte existant conserve
- prix, variante, quantite, cout et politique d inventaire inchanges

### Chapelet en sodalite

- produit : `10522152436059`
- EAN controle : `3667407018617`
- statut initial : `ACTIVE`
- statut final demande : `DRAFT`
- galerie finale : 5 images V3
- titre, description, SEO et histoire remplaces par la version V3 approuvee
- prix, variante, quantite, cout et politique d inventaire inchanges

Les snapshots complets avant mutation, les anciennes images, les galeries V3 et le resultat apres ecriture sont archives dans le workspace prive :

`/Users/paesano/Documents/Agentic-Ops/milaura-automation/private-workspace/product-generation/data/catalogue-batches/2026-08-25-physical-stock-175/corrections-2026-08-27-chapelets-v3/`

## Modal global

Le lien `Photos et variations naturelles` est ajoute dans le premier onglet de la section produit, apres la description et les caracteristiques. Il reste hors du hero et loin du bouton d achat.

Le modal utilise le composant accessible deja present dans Dawn :

- ouverture au clavier et a la souris ;
- role dialog, titre et description relies par ARIA ;
- fermeture native, restauration du focus et touche Echap ;
- appel a l action discret vers la page de contact ;
- aucun JavaScript supplementaire ;
- affichage automatique sur les deux templates produit du catalogue.

L integration visuelle utilise uniquement les tokens MilAura : Nacre, Encre prune, Aigue-marine, Or mat, Gloock et Instrument Sans. Le lien est souligne, la surface reste claire et le filet or ne sert que d accent.

## Fichiers du theme

- `sections/milaura-product-experience.liquid`
- `assets/milaura-product-experience.css`

## Verification avant deploiement

- pull cible du theme live `190430282075` avant edition : les deux fichiers etaient identiques au canonique Git ;
- `git diff --check` : PASS ;
- `shopify theme check --path .` : PASS, 0 erreur ;
- 16 avertissements historiques dans 8 fichiers non modifies ;
- aucun controle navigateur automatise, Patrice effectuera le controle visuel sur le live.

## Deploiement live

- commit source : `68a4fa72` ;
- branche : `codex/milaura-integration` ;
- push GitHub : reussi ;
- theme live : `dawn-X-milaura/main`, ID `190430282075` ;
- push Shopify limite aux deux fichiers du theme avec `--only`, `--nodelete`, `--strict` et `--allow-live` ;
- aucun autre fichier du theme supprime ou envoye.

Pullback cible : `/private/tmp/milaura-modal-live-pullback.segiUV/`.

Les fichiers live et canoniques sont identiques bit a bit :

- `sections/milaura-product-experience.liquid` : `4e7b79d49248a25ee539998fc25255a089d9b85567797e5ab366153841f0189a` ;
- `assets/milaura-product-experience.css` : `5bbeaeec9744109521e423d54f580cdfefffef1b7df4d97abe7c7254f964818f`.

## Etat final

Lot ferme le 2026-08-27 a 18:07 CEST. Les deux produits sont en brouillon avec cinq images chacun. Le modal global est deploye sur le theme live. Le controle visuel public reste a effectuer par Patrice.
