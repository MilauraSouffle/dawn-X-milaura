# MilAura - contrat UX du panier drawer

Date initiale : 2026-07-31
Derniere mise a jour : 2026-08-05 11:35 CEST
Statut : deploye sur le theme live `190430282075` et valide par Patrice. Rentabilite des paliers a confirmer avant Ads.

## Objectif unique

Après un ajout produit, ouvrir immédiatement un panier latéral qui permet de comprendre en moins de cinq secondes :

1. ce qui vient d'être ajouté ;
2. le total actuel ;
3. le prochain avantage de commande ;
4. comment continuer les achats ou passer au paiement.

## Direction visuelle

- Mobile-first, premium épuré, fond ivoire très clair, encre noire et accent or mat.
- Aucun dégradé dans le nouveau drawer.
- Une seule signature visuelle : les trois jalons circulaires MilAura placés sur la ligne de progression.
- Typographies déjà chargées par le thème. Aucun nouvel appel réseau.
- Ombre réservée au panneau latéral. Les cartes internes utilisent des bordures fines.

## Architecture

```text
Panier + fermer
Continuer mes achats
-----------------------------
Produit(s), quantite, prix
-----------------------------
Vos avantages de commande
Message : encore X EUR pour Y
Progression + 3 jalons
Palier 1 | Palier 2 | Palier 3
-----------------------------
Total estimé
Paiement sécurisé
```

## Etats fonctionnels

- Panier vide : état Dawn conservé, accès direct aux produits.
- Avant le premier palier : montant restant et premier jalon actif.
- Entre deux paliers : jalons atteints cochés, montant restant vers le suivant.
- Tous les paliers atteints : message de complétion, les trois jalons cochés.
- Les produits cadeaux identifiés par tag, titre ou propriété privée sont exclus du sous-total de progression.
- Les montants et libellés sont des réglages de thème. Les valeurs 20, 50 et 80 EUR restent des valeurs de travail jusqu'à validation des marges.

## Mecanique live au 2026-08-05

- 30 EUR : bracelet hematite offert, variante `53142713925979`.
- 50 EUR : livraison offerte, code `MILAURA-LIV50`.
- 80 EUR : remise de 15 %, code `MILAURA15`.
- Les avantages sont synchronises automatiquement.
- Le cadeau est exclu du sous-total de progression et retire si l'eligibilite disparait.
- La ligne cadeau est visuellement differenciee.
- Les acces panier navbar et dock ouvrent le drawer.
- L'ajout rapide ouvre le meme drawer.
- La sticky bar produit n'apparait qu'apres la disparition du CTA principal.

Fichiers :

- `assets/milaura-cart-drawer-v3.css`
- `assets/milaura-cart-rewards-auto.js`
- `assets/cart-drawer.js`
- `sections/milaura-sticky-bar.liquid`
- `snippets/cart-drawer.liquid`
- `snippets/milaura-cart-rewards-drawer.liquid`
- `config/settings_schema.json`

Commits : `109b04e0`, `37c4548e`, `a3e3ff76`.

## Verite commerciale

Le lot live applique maintenant automatiquement les avantages demandes par Patrice. Il ne faut cependant pas confondre fonctionnement technique et validation economique. Avant toute montee en charge publicitaire, verifier dans Shopify que les codes existent, se cumulent comme attendu, respectent les exclusions, et que la marge reste positive apres cadeau, livraison et remise.

La reference operationnelle complete est `docs/checkpoints/2026-08-05-1135-milaura-panier-homepage-handoff.md`.

## Accessibilite et mouvement

- Drawer annoncé comme dialogue modal, focus géré par Dawn.
- Progression exposée avec `role="progressbar"`, valeurs min, max et courante.
- Message de progression en `aria-live="polite"`.
- Cibles tactiles de 44 px minimum.
- Transitions courtes et désactivées avec `prefers-reduced-motion`.

## Critique anti-generique

Le drawer ne doit ressembler ni à une carte SaaS empilée, ni à un casino promotionnel. La hiérarchie repose sur l'espace, la typographie et la ligne de progression. Les trois cercles MilAura portent l'identité sans multiplier les effets, les badges ou les couleurs.
