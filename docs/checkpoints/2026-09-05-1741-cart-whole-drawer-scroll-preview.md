# Volet panier : defilement global

Date : 2026-09-05 17:41 CEST

## Demande

Les captures iPhone fournies par Patrice montraient les articles enfermes dans une zone interne tres basse lorsque les avantages occupaient le haut du volet. Le volet complet doit defiler, des avantages jusqu'au paiement.

## Perimetre

- Branche : `codex/milaura-cart-whole-drawer-scroll-20260905`
- Worktree : `/Users/paesano/Documents/MilAura website/_worktrees/cart-whole-drawer-scroll-20260905`
- Fichier fonctionnel : `assets/milaura-cart-drawer-v3.css`
- Theme de preview privee : `200990818651`, `MilAura Panier Scroll 2026-09-05`
- Theme live inchange : `190430282075`

## Correction

- Le conteneur principal du volet porte maintenant le defilement vertical.
- La liste des articles reprend sa hauteur naturelle et ne possede plus de scroll interne.
- Le total et le bouton de paiement suivent les articles dans le meme flux.
- Les cartes d'avantages, les seuils, les textes et les pastilles avec logo MilAura sont inchanges.

## Verification

- `shopify theme check` : 0 erreur, 16 avertissements historiques hors perimetre.
- `git diff --check` : PASS.
- Preview 390 x 844, panier a 82,10 EUR : trois avantages, quatre lignes produit, total et paiement atteignables par le meme scroll.
- Mesure navigateur a 390 x 844 : volet `overflow-y: auto`, `scrollHeight: 1260`, `clientHeight: 844`; liste produits `overflow-y: visible`, `scrollHeight: 603`, `clientHeight: 603`, `scrollTop: 0`.
- Preview 390 x 844, panier a 33,80 EUR : un avantage, une ligne produit, total et paiement places directement sous l'article sans grande zone vide.
- Preview 360 x 800 : aucune surlargeur, liste produits sans scroll interne.
- Preview 1440 x 900 : largeur du volet conservee a 1080 px, aucune surlargeur, liste produits sans scroll interne.

## Etat des gates

- Implementation : PASS.
- Preview privee : PASS technique et visuel Codex.
- GO visuel Patrice : recu le 2026-09-05.
- Deploiement live : PASS le 2026-09-05 a 17:49 CEST.

## Deploiement live

- Commit source pousse : `a1c8eef0`.
- Commit d'integration pousse : `8e229f98` sur `codex/milaura-integration`.
- Theme live : `190430282075`, `dawn-X-milaura/main`.
- Push cible : `assets/milaura-cart-drawer-v3.css` uniquement, avec `--nodelete`, `--allow-live` et `--strict`.
- Pullback live identique au fichier local : SHA-256 `30cf5df34057304e4aac81862897184e205e082867143f22b86f5a9791f89f75`.
- Storefront public a 390 x 844, panier a 33,80 EUR : un avantage, un article, total et paiement dans le meme flux ; trois logos MilAura presents.
- Storefront public a 390 x 844, panier au-dessus de 80 EUR : trois avantages, cadeau automatique, six lignes rendues, remise et paiement accessibles par le scroll du volet ; liste produits sans scroll interne.
