# Homepage MilAura, libelles livraison 30 EUR live

Date : 2026-08-12 18:29 CEST
Statut : live et valide

## Demande

Publier sur la homepage les deux libelles logistiques deja versionnes dans `templates/index.json`, apres le nettoyage complet du depot.

## Perimetre exact

Un seul fichier deploye :

- `templates/index.json`

Deux changements uniquement :

- `Livraison Offerte dès 39 EUR` devient `Point relais offert dès 30 EUR`
- `Dès 39 EUR d achat` devient `En point relais dès 30 EUR`

Le texte utilise le symbole euro dans le rendu reel. Les formulations ci-dessus sont transcrites sans symbole dans ce checkpoint pour rester compatibles avec la convention documentaire du depot.

## Cible

- boutique : `milaura-2.myshopify.com`
- theme live : `dawn-X-milaura/main`
- theme ID : `190430282075`
- commande cible : push avec `--only templates/index.json --nodelete --strict --allow-live`

## Controle avant push

- fichier live retire dans `/private/tmp/milaura-index-live-before-20260812`
- SHA-256 source : `962975c817436279ad85246f98177bc0e0cc1aece7bd6ba7007af539bb25de5b`
- SHA-256 live avant : `c8cd7e8cd8af7d64d22d0cad00e8204ee2ebd04e5cccfb630fa2419b2f8ee7fd`
- diff limite aux deux libelles ci-dessus
- Theme Check strict : 0 erreur, 29 avertissements historiques

## Validation apres push

- push Shopify reussi sur le theme live
- pullback retire dans `/private/tmp/milaura-index-live-after-20260812`
- SHA-256 pullback : `962975c817436279ad85246f98177bc0e0cc1aece7bd6ba7007af539bb25de5b`
- comparaison source et pullback : identiques bit a bit
- homepage publique : HTTP 200
- rendu public detecte : `Point relais offert dès 30 EUR`
- rendu public detecte : `En point relais dès 30 EUR`
- anciens libelles 39 EUR absents du controle cible

## Frontiere

- aucun autre fichier theme deploye
- aucun produit, stock, prix, collection ou menu modifie
- aucun fichier PDP-P0 deploye live
- le lot PDP-P0 reste sur le theme de developpement et attend le GO visuel de Patrice
