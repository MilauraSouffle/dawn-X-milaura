# Selection d automne : landing privee

Date : 2026-09-22 19:40 CEST

Statut : `PREVIEW PRIVEE QA PASS, GO VISUEL LANDING A RECEVOIR`

## Resultat

La landing `Selection d automne, grenat & cornaline` est construite sur le theme prive Shopify `200259043675`. Elle reutilise le moteur de la landing Sodalite sans creer une nouvelle section par occasion.

Le moteur `sections/milaura-sodalite-landing.liquid` est generalise : la composition produit responsive, les deux reperes de campagne, les titres du catalogue et le message vide sont configurables. Le nom visible dans l editeur devient `Landing de selection`. La landing Sodalite conserve ses valeurs par defaut.

Le template `templates/collection.selection-automne.json` contient :

1. Hero video feuilles avec composition V3 validee.
2. Bracelet Iris en produit star.
3. Neuf autres cartes produit avec achat direct.
4. Guide Grenat.
5. Guide Cornaline.

Le contenu long arrive apres les produits. La page conserve ainsi une ouverture commerciale courte, puis le contenu utile au referencement.

## Produits

Dix produits publics HTTP 200 sont rendus, dont le bracelet Iris en produit star. Les routes suivantes renvoient encore HTTP 404 et restent exclues :

- `bracelet-en-grenat-rouge-8-mm`
- `boucles-d-oreilles-puces-en-grenat-rouge-8-mm`

## Preview

- Theme : `MilAura Sodalite Rentree Preview 2026-08-21`
- ID : `200259043675`
- URL : `https://milaura-2.myshopify.com/collections/selection-de-karine?view=selection-automne&preview_theme_id=200259043675`
- Porteur temporaire : `/collections/selection-de-karine?view=selection-automne`
- Route permanente cible : `/collections/selection-automne`, encore HTTP 404

Le porteur temporaire sert uniquement a afficher le template avant la creation de la collection permanente dans Shopify Admin.

## Verification

- JSON du template : valide avec `jq`.
- `git diff --check` : PASS.
- Shopify Theme Check : 0 erreur, 16 avertissements historiques hors lot.
- Mobile `390 x 844` : un H1, dix produits dont un produit star, deux guides, largeur document 390, aucun overflow.
- Bureau `1440 x 900` : largeur document 1440, aucun overflow.
- Hero desktop et mobile : video, composition V3 et texte lisibles.
- Produit star : bento responsive, prix et CTA presents.
- Onglets guide : activation et panneau correspondant verifies.
- Erreurs navigateur : aucune.
- Pullback : identique pour `sections/milaura-sodalite-landing.liquid`, `sections/milaura-stone-guide.liquid` et `templates/collection.selection-automne.json`.

## Fichiers du lot landing

- `sections/milaura-sodalite-landing.liquid`
- `templates/collection.selection-automne.json`
- `docs/campaigns/automne/manifest.md`
- `docs/reference/HOME-SECTION-2-OCCASIONS.md`
- `docs/reference/milaura-home-occasion-registry.json`
- `docs/workstreams.md`
- `docs/codex-handoff.md`
- `docs/checkpoints/2026-09-22-1940-autumn-landing-private.md`

`sections/milaura-stone-guide.liquid` n est pas modifie dans ce commit. Sa version deja canonique dans Git a ete synchronisee sur le theme prive parce que ce theme conservait une version plus ancienne qui supprimait le reglage `prefer_section_content` du template.

## Gates restantes

1. GO visuel Patrice sur la landing.
2. GO Admin pour creer la collection permanente et affecter le template.
3. Title SEO, meta description, canonical, sitemap, stock, panier et tracking.
4. Produits complementaires reciproques Grenat et Cornaline dans Search and Discovery.
5. GO live distinct.
6. Handoff Pinterest et Ads seulement apres verification publique.

Le theme live `190430282075`, Shopify Admin, les collections, les produits, les prix, les stocks, Ads et Pinterest n ont pas ete modifies.

## Prompt de reprise

```text
Reprends la landing Automne depuis docs/checkpoints/2026-09-22-1940-autumn-landing-private.md. Le theme prive 200259043675 contient le template collection.selection-automne, avec le bracelet Iris en produit star, neuf cartes publiques et deux guides SEO. Commence par obtenir ou verifier le GO visuel de Patrice. Ne cree /collections/selection-automne dans Shopify Admin qu apres sa gate Admin explicite. Les deux produits grenat 8 mm en HTTP 404 restent exclus. Verifie ensuite title SEO, meta description, canonical, sitemap, panier et tracking avant tout GO live. Aucun Ads ou Pinterest avant la release publique verifiee.
```
