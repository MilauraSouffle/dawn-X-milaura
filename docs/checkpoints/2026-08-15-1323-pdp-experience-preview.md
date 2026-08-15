# Refonte de l'experience fiche produit, preview

Date : 2026-08-15 13:23 CEST

## Etat et perimetre

La fiche produit a ete recomposee sur le theme de developpement `199421952347`.
Le theme live `190430282075` est reste inchange.

Preview de controle :

`https://milaura.fr/products/collier-obsidienne-noire-boho-dore?preview_theme_id=199421952347`

Le Hero produit, le Ruban Vivant, la sticky bar, le panier et le tiroir panier
n'ont pas ete reecrits. Les deux templates produit partagent maintenant le meme
parcours actif :

1. Hero produit existant ;
2. sticky bar existante ;
3. nouvelle bande de services et nouveau guide produit ;
4. Ruban Vivant existant ;
5. nouveau service conseiller.

## Composants ajoutes

- `assets/milaura-product-experience.css` : composition responsive, tokens
  MilAura uniquement, cibles tactiles, focus, verrouillage du debordement global
  PDP et conservation des rails internes ;
- `assets/milaura-product-experience.js` : trois portes accessibles, fleches,
  Home, End et reinitialisation dans l'editeur Shopify ;
- `sections/milaura-product-experience.liquid` : preuves, paiements reels,
  information produit, histoire de la pierre ou de la senteur, services, FAQ et
  schema FAQPage ;
- `sections/milaura-product-advisor.liquid` : contact telephonique, e-mail et
  page contact, avec la photo reelle de Karine ;
- `config/metafields/product-metafields-definition.json` : fichier, laboratoire
  et reference de certificat rattaches au produit.

Les portes changent selon la famille : bijou, mineral, bougie ou rituel. Les
certificats ne sont annonces comme disponibles que lorsqu'un fichier est
rattache a la reference. Klarna ne s'affiche que si le moyen de paiement est
active dans Shopify.

## Nettoyage realise

- `templates/product.json` et `templates/product.milaura-produit.json` ont perdu
  640 lignes de definitions anciennes et inactives ;
- `Consultes recemment`, l'ancienne FAQ, les anciens onglets, le faux bloc de
  confiance, les sections rituel, senteur, craft, reviews et le CTA final ne
  font plus partie des templates actifs ;
- les fichiers sources historiques correspondants restent presents mais ne sont
  plus references. Leur suppression physique est une operation destructive
  separee a autoriser explicitement apres validation visuelle ; l'historique Git
  conserve de toute facon leur implementation.

## Validation executee

- JSON des deux templates et du registre de metafields : valide ;
- `node --check assets/milaura-product-experience.js` : OK ;
- `git diff --check` : OK ;
- `shopify theme check --fail-level error` : aucune erreur, 17 avertissements
  historiques hors lot ;
- desktop 1280 px : Hero, bande, trois portes, Ruban et conseiller dans le bon
  ordre ;
- mobile 390 x 844 : tabs de 82 px, FAQ et actions de 44 px, page verrouillee a
  `scrollX = 0` ;
- ruban de preuves mobile : defilement interne confirme de 0 a 245 px ;
- clavier : ArrowLeft active la porte precedente et deplace le focus ;
- FAQ produit : ouverture native et schema FAQPage JSON valide ;
- fiche bougie : labels `La bougie`, `La senteur`, `Services & reponses` ;
- lien Hero `Lire la suite` : cible `#ProductTabs` presente ;
- sticky bar : ajout panier confirme, tiroir ouvert et bonne reference presente ;
- console navigateur : aucune erreur ni avertissement ;
- push Shopify cible sans suppression puis pullback : 6 fichiers sur 6
  identiques octet par octet.

## Captures locales

- `/private/tmp/milaura-pdp-experience-desktop-final-v2.png` ;
- `/private/tmp/milaura-pdp-experience-mobile-final.png` ;
- `/private/tmp/milaura-pdp-experience-mobile-services-v1.png` ;
- `/private/tmp/milaura-pdp-advisor-desktop-v1.png`.

## Prochaine decision

Patrice controle la preview desktop et mobile. Aucun merge d'integration, aucune
suppression distante et aucun deploiement live ne sont autorises avant son GO
visuel explicite.
