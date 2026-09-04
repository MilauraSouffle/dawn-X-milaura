# Correctif SEO : 59 anciennes URLs restaurees

Date : 2026-09-04 22:10 CEST

Statut : `PASS SHOPIFY ET PUBLIC`

## Autorisation

Patrice a donne le GO exact le 2026-09-04 pour activer les 58 fiches restantes : 57 avec stock zero et politique `DENY`, et le collier Boho obsidienne avec stock quatre et politique `DENY`. Il accepte que leurs anciens contenus reapparaissent temporairement dans le sitemap, les collections et la recherche Shopify.

Le pilote `pendule-cristal-de-roche` avait deja ete restaure avec stock zero et politique `DENY`. Le correctif couvre donc 59 anciennes URLs ayant recu des clics dans Search Console.

## Mutation Shopify executee

- 58 produits etaient encore `DRAFT` au preflight exact.
- Une ecriture d'inventaire atomique a applique 57 quantites a zero et le collier Boho a quatre.
- Cle d'idempotence : `02c32675-47af-4570-bd0e-705e3b52b723`.
- Les 58 produits ont ensuite ete passes a `ACTIVE`.
- Le pullback Admin est `PASS 58/58` : tous `ACTIVE`, tous suivis, tous en politique `DENY`, 57 stocks a zero et Boho a quatre.
- Le collier Boho est le produit `10557516644699`, handle `collier-obsidienne-noire-boho-dore`.
- Titres, handles, prix, contenus, medias, EAN, SKU, metachamps, taxes et collections sont inchanges.

Avec le pilote, le resultat cumule est de 59 produits restaures : 58 a stock zero et un collier Boho a stock quatre.

## Verification publique

- Le sitemap racine repond HTTP 200.
- Le sitemap produits repond HTTP 200 et contient 234 entrees `loc`.
- Les 59 handles restaures sont tous presents : 59 attendus, 59 trouves, zero manquant.
- Pilote `pendule-cristal-de-roche` : HTTP 200, canonique auto-referente, indexable, schema `OutOfStock`, achat desactive.
- Echantillon du lot `pendentif-tourmaline-noire` : HTTP 200, canonique auto-referente, indexable, mention `Epuise`, schema `OutOfStock`, bouton principal desactive.
- Collier Boho : HTTP 200, canonique auto-referente, indexable, schema `InStock`, ajout au panier actif.

Une verification immediate des 59 pages par requetes individuelles a ete arretee apres des reponses Shopify HTTP 429. Aucun martelage supplementaire n'a ete effectue. Le perimetre complet reste couvert par le pullback Admin 59/59 et par la presence des 59 handles dans le sitemap, avec trois controles publics representatifs.

## Search Console

Le sitemap `https://milaura.fr/sitemap.xml` a ete soumis dans Search Console avec confirmation avant le lot collectif. Le traitement et le nouveau crawl Google restent asynchrones : aucune recuperation de positions ou de clics n'est encore mesurable le 2026-09-04.

## Limites preservees

- Aucune redirection 301 creee par simple similarite.
- Aucun contenu, prix, media, handle, collection ou theme modifie.
- Aucune Ads ou depense.
- La reapparition temporaire des anciens contenus dans les collections et la recherche Shopify est acceptee par Patrice.
- Le rapprochement hematite reste separe : la fiche canonique active est toujours a neuf unites, tandis que la fiche cadeau DRAFT a ete ramenee a douze. Ne pas additionner ou fusionner sans clarification.

## Preuves

Preuves privees hors Git :

`/Users/paesano/Documents/Agentic-Ops/milaura-automation/private-workspace/product-generation/data/catalogue-batches/2026-09-04-seo-corrective/`

Fichiers principaux :

- `bulk-stock-request.json`
- `bulk-stock-response.json`
- `status-responses/`
- `after/`
- `bulk-verification.json`
- `public-verification-final.json`

## Reprise

Ne pas rejouer les stocks ou les activations. Le correctif des 59 URLs a clics est termine. Surveiller leur recrawl et leurs impressions dans Search Console. Traiter separement les enrichissements de contenu, les redirections reellement justifiees et la reconciliation hematite.
