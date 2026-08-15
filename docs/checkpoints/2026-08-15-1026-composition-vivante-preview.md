# Composition Vivante MilAura, preview PDP

Date : 2026-08-15 10:26 CEST

## Decision et perimetre

La galerie horizontale de recommandation a ete jugee trop commune par Patrice.
Elle est remplacee, sur la PDP prototype eligibile, par une `Composition
Vivante` pleine largeur. Les produits detoures tombent successivement, restent
entierement visibles et deviennent selectionnables. La piece active prend de
l'ampleur et revele ses informations et son action Ajouter.

Le moteur de pertinence, les adaptateurs panier, drawer, diagnostic, compte et
editorial ne sont pas remplaces. Le nouveau layout est une couche de rendu du
composant partage. Il ne s'active que pour une PDP qui contient au moins deux
recommandations et pour laquelle chaque produit possede un detourage valide.
Dans tous les autres cas, le layout galerie existant reste le repli propre.

Theme autorise : developpement `199421952347` uniquement.

Live `190430282075` : inchange.

Preview testee :
`https://milaura.fr/products/collier-obsidienne-noire-boho-dore?preview_theme_id=199421952347`

## Prototype produit

Trois assets transparents ont ete produits avec GPT Image 2 depuis les photos
officielles MilAura, puis detoures et controles visuellement :

- `assets/milaura-reco-cutout-aventurine-v1.png`, 752 x 1140 ;
- `assets/milaura-reco-cutout-quartz-rose-v1.png`, 694 x 1337 ;
- `assets/milaura-reco-cutout-obsidienne-earrings-v1.png`, 658 x 442.

Une premiere generation aventurine qui modifiait le bijou a ete rejetee et
n'est referencee par aucun fichier du theme. Les trois assets retenus sont des
prototypes visuels. La propagation catalogue exige une validation de fidelite
produit par produit avant publication live.

## Architecture ajoutee

- `snippets/milaura-recommendation-card.liquid` associe les trois handles de
  test a leurs assets transparents et dimensions intrinseques ;
- `snippets/milaura-card-product.liquid` rend l'objet dans la carte partagee,
  sans second lien et sans masquer la photographie de repli hors du layout ;
- `assets/milaura-recommendations.js` active `data-layout="living"` uniquement
  si toutes les cartes sont eligibles, gere la piece active au pointeur et au
  focus, et conserve les fleches clavier ;
- `assets/milaura-recommendations.css` realise la scene pleine largeur, la pose
  decalee, l'echelle active, le filet mineral, le rail tactile mobile et la
  suppression du mouvement selon la preference utilisateur.

Le code ajoute ne cree ni nouvelle section, ni second moteur, ni nouvelle
dependance. Le layout horizontal precedent reste uniquement comme repli pour
les produits sans asset valide, pas comme feature concurrente desactivee.

## Validation executee

- `node --check assets/milaura-recommendations.js` : OK ;
- `git diff --check` : OK ;
- `shopify theme check` : 283 fichiers, 27 avertissements historiques dans 10
  fichiers non modifies par ce lot, aucune nouvelle erreur ;
- PNG : trois fichiers RGBA avec dimensions intrinseques explicites ;
- push Shopify cible de sept fichiers sur `199421952347`, sans suppression ;
- pullback Shopify : sept fichiers sur sept identiques octet par octet ;
- desktop 1440 x 1000 : layout `living`, trois objets complets, aucune largeur
  de rail parasite, scene de 797 px de haut et zero erreur console ;
- clavier desktop : `ArrowRight` passe du premier au deuxieme, puis au
  troisieme produit, avec focus sur le lien produit correspondant ;
- mobile 390 x 844 : liste de 390 px pour 1038 px de contenu, scroll horizontal
  reel de 324 px, scroll snap et bijou entier ;
- aucun avertissement ou erreur navigateur apres les interactions.

Captures locales de controle :

- `/private/tmp/milaura-living-composition-desktop-v3.png` ;
- `/private/tmp/milaura-living-composition-mobile-v1.png`.

## Restant avant propagation

1. Patrice juge le prototype visuel sur la PDP de test.
2. En cas de GO, verrouiller le langage de mouvement, le titre public et la
   regle de composition pour deux, trois et quatre produits.
3. Construire une bibliotheque de detourages a partir des photos officielles,
   avec controle de fidelite pour chaque SKU. Aucun asset douteux ne passe.
4. Etendre progressivement la scene aux PDP eligibles, puis aux grandes
   surfaces de recommandation. Le panier drawer conserve son format compact.
5. Refaire les controles panier, diagnostic, compte et pages editoriales avant
   integration. Aucun live sans GO visuel puis GO live distinct.
