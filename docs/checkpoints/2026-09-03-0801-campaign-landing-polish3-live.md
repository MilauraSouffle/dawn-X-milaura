# Polish 3 landing campagne live

Date: 2026-09-03 08:01 CEST

## Autorisation et perimetre

- Validation visuelle Patrice: `ok visuellement c'est valide`
- GO integration, commit, push Git et deploiement live donne dans le meme message.
- Perimetre Shopify limite a quatre fichiers de theme.
- Aucune affectation de template en Admin Shopify, aucune modification produit, stock, prix, Home ou Ads.

## Integration Git

- Branche d'integration: `codex/milaura-integration`
- Commit integre: `b44af444 feat: integrate reusable campaign landing`
- Push Git confirme sur `origin/codex/milaura-integration`.
- Les modifications paralleles deja presentes dans le checkout principal sont restees hors commit.

## Fichiers Shopify deployes

- `assets/milaura-campaign-landing.css`
- `sections/milaura-campaign-landing.liquid`
- `templates/collection.milaura-campaign-aigue.json`
- `sections/milaura-sodalite-landing.liquid`

## Deploiement live et pullback

- Boutique: `milaura-2.myshopify.com`
- Theme live: `190430282075`
- Commande ciblee avec `--allow-live --nodelete --strict` et quatre chemins `--only`.
- Push Shopify reussi le 2026-09-03.
- Pullback du theme live identique 4 sur 4 aux fichiers locaux.

SHA-256 verifies:

- CSS campagne: `2f9326a13f37d407fbbc1d81233deb57ff837fb36223e7b6a9d57fc7a14336d8`
- Section campagne: `f0776d1f3d53552ebede4efe5eddb00cff290d263e49dd3b28d37e467190fc0a`
- Template Aigue-marine: `812952a3f19146f1a072a0f0b03ef7ac8799ba849209474bb0c7f0d1895dace6`
- Section Sodalite: `32ed6548d7fa3eba0bda73897b7c2a1311bea7d353869fd6c6bf35ccc67ef972`

## Verification publique

Pages controlees sans barre de preview:

- `https://milaura.fr/collections/par-pierre-aigue-marine?view=milaura-campaign-aigue`
- `https://milaura.fr/collections/selection-de-karine`

Resultats a 390 x 844 et 1440 x 1000:

- surtitre puis titre au-dessus du bento: PASS
- trois images chargees: PASS
- descriptif, prix et CTA sous le bento: PASS
- absence de debordement horizontal: PASS
- hauteur CTA 44 px: PASS
- colonnes media et contenu alignees en desktop: PASS

Theme Check: 0 erreur, 16 avertissements historiques dans 8 fichiers hors perimetre.

## Architecture et gate restant

- Section reutilisable: `milaura-campaign-landing`
- Suffixe du template Aigue-marine: `milaura-campaign-aigue`
- Une future landing dediee doit utiliser un nouveau fichier `collection.milaura-campaign-<slug>.json` qui configure la section partagee.
- La Sodalite reste sur son template historique `selection-de-karine` et sa section dediee `milaura-sodalite-landing`. Son correctif est live, mais les evolutions futures de la section partagee ne s'y appliqueront pas automatiquement.
- Gate restant: affecter le template `milaura-campaign-aigue` a la collection Aigue-marine dans Shopify Admin pour que l'URL canonique sans `?view=` l'utilise.
