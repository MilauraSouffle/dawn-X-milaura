# Checkpoint PDP Hero desktop live

Date : 2026-08-16 10:42 CEST

## Decision et integration

- GO visuel explicite de Patrice recu le 2026-08-16 apres validation de la preview `200007352667`.
- GO live explicite de Patrice recu le 2026-08-16.
- Lot fonctionnel : `9411bd00` sur `codex/milaura-pdp-hero-desktop-20260816`.
- Integration maitre : `84d72279` sur `codex/milaura-integration`.
- Branche maitre poussee sur GitHub avant le deploiement Shopify.

## Deploiement cible

- Boutique : `milaura-2.myshopify.com`.
- Theme live : `190430282075`, `dawn-X-milaura/main`.
- Fichiers deployes uniquement :
  - `sections/milaura-product-hero.liquid`
  - `sections/milaura-sticky-bar.liquid`
- Commande ciblee avec `--allow-live`, `--only`, `--nodelete` et `--strict`.
- Aucun fichier Ruban, recommandations, template, navigation, dock, panier ou experience PDP deploye par ce lot.

## Preuve technique

- Preflight live avant envoi : les deux blobs correspondaient exactement a l'ancien HEAD maitre `469212c0`.
- `shopify theme check` sur le HEAD integre : 0 erreur, 17 avertissements historiques dans 9 fichiers hors lot.
- Push live Shopify : succes.
- Pullback live apres envoi : 2 fichiers sur 2 byte-identiques au HEAD `84d72279`.
- Hash Hero local et live : `c54f1bbfac02b43dbd34f90dfaa93756a8e449d8`.
- Hash sticky local et live : `a2a359864c237d215abbf96933f89c9bb0d36b95`.

## QA publique apres deploiement

- 2048 x 800 : Hero conforme a la preview, colonne droite intacte, cinq miniatures, aucune sticky au chargement, aucun overflow horizontal.
- 1440 x 900 : contenu utile du Hero visible, sticky inactive au chargement, aucun overflow horizontal.
- Interaction miniatures : la seconde miniature change le `src` principal et `aria-pressed` passe correctement de la premiere a la seconde.
- Sticky desktop : masquee avec CTA depasse mais Hero encore visible, visible apres depassement complet du Hero, masquee au retour en haut.
- 360, 390 et 430 px : rail desktop masque, galerie mobile conservee, Hero et sticky inactifs au chargement.
- Sticky mobile 390 px : visible des que le CTA est depasse alors que le Hero reste visible, masquee au retour au-dessus du CTA.

## Etat final

- Live deploye et valide le 2026-08-16.
- Checkout d'integration propre apres le commit documentaire final.
- Preview `200007352667` conservee pour comparaison visuelle.
