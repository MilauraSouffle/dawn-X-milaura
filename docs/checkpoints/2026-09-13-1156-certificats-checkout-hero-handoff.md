# Cloture certificats, bandeau, checkout et Hero

Date : 2026-09-13 11:56 CEST

Statut : `SESSION ARRETEE SUR DEMANDE DE PATRICE`

Patrice demande l arret de cette session et l ouverture d une session dediee pour le checkout. Aucun nouveau changement storefront, checkout ou Shopify Admin ne doit etre deduit de ce document.

## Etat public conserve

- Theme live Shopify : `190430282075`.
- La page publique `https://milaura.fr/pages/certificats-des-pierres-naturelles` est en ligne et reliee depuis le footer uniquement. Elle annonce `340` rapports conserves et montre quatre exemples proteges. Le nom commercial du fournisseur n est pas affiche.
- Le bandeau rose de l accueil affiche les trois avantages MilAura avec le label `AVANTAGE MILAURA` : expedition offerte en point relais des 30 EUR, cadeau des 50 EUR et remise automatique de 15 % des 80 EUR.
- La phrase PDP validee est `Ce modèle en photo est unique. Chaque pierre est différente.`
- Le Hero mobile final est live. Son H1 reste superpose a la photographie sans couvrir le visage, le CTA est sobre et se compose sur deux lignes en mobile : `VOIR TOUS` puis `LES BIJOUX`.

## Hero final

- Fichier fonctionnel : `sections/milaura-hero-portal.liquid`.
- Commit source : `cd7e83aa` sur `codex/milaura-urgent-ux-20260912`.
- Commit d integration pousse : `19fbc918` sur `origin/codex/milaura-integration`.
- SHA-256 live et source : `48c06c29c2a360d07355d6d8b1473680186e10dc5efe281ae7fe400334eef4c0`.
- Sauvegarde avant publication : `/private/tmp/milaura-hero-live-before-20260913/sections/milaura-hero-portal.liquid`.
- Pullback apres publication : `/private/tmp/milaura-hero-live-after-20260913/sections/milaura-hero-portal.liquid`, identique octet pour octet.
- QA publique : mobile 430 x 932 et bureau 1440 x 900, aucune barre horizontale, image chargee, visage degage, composition bureau preservee.
- Theme Check : zero erreur, seize avertissements historiques dans huit fichiers hors lot. Controle copywriting : PASS sur 348 fichiers. `git diff --check` : PASS.

## Checkout a reprendre dans une session dediee

- Profil actif : `MilAura Checkout UX 2026-09-13`, ID `9395241307`.
- L ancien profil `Ma boutique` reste en brouillon comme repli.
- Le profil actif conserve Shop Pay, Apple Pay, Klarna et les cartes deja activees dans Shopify Admin. L absence d Apple Pay dans une simulation non compatible ne signifie pas que le moyen de paiement est desactive.
- Les libelles actuellement publies incluent `Paiement express avec vos informations enregistrées`, `Ou continuer sans compte`, `Vos coordonnées`, `J’ai déjà un compte MilAura`, `Comment souhaitez-vous être livré ?`, `À domicile` et `En point relais`.
- Couleurs publiees : resume de commande `#DCEBE8`, accents `#2F222D`, zone principale blanche.
- Le logo retourne a l accueil et l icone panier native retourne au panier. Sur le forfait Basic actuel, les extensions Checkout UI dans les etapes information, livraison et paiement ne sont pas disponibles. Un lien texte personnalise `Retour au panier` ou un bandeau dynamique 30, 50 et 80 EUR ne doit pas etre promis sans revalidation du plan et des capacites natives.
- Aucun nouveau changement ni aucune sauvegarde checkout n ont ete effectues pendant la cloture.

## Etat Git et limites

- Checkout principal `/Users/paesano/Documents/MilAura website/dawn-X-milaura` : branche `codex/milaura-integration`, tres sale avec des travaux concurrents, et 66 commits derriere la branche distante au moment du controle. Ne jamais le nettoyer, le reinitialiser, le synchroniser globalement ou y faire un staging large.
- Worktree source urgent `/Users/paesano/Documents/MilAura website/_worktrees/urgent-ux-20260912` : propre au commit `cd7e83aa`.
- Worktree de release propre `/private/tmp/milaura-hero-live-G6PDxq` : base `19fbc918`, alignee avec `origin/codex/milaura-integration` avant cette cloture documentaire.
- Le lot certificats est pousse sur sa branche source, mais son commit documentaire `c4526a47` n est pas ancetre de l integration distante actuelle. Le storefront est live, mais cette divergence Git doit etre reconciliee dans un lot dedie sans ecraser les travaux concurrents.
- Quatre scans lisibles existent encore dans l historique Git public au commit ancien `d77c0e46`. Leur purge exigerait une reecriture destructive de l historique et un force push, non autorises dans cette session.
- Les rapports disponibles portent sur des echantillons de lots. Ils ne prouvent pas une certification individuelle de chaque produit ou EAN.
- La refonte de la page `/collections` et tout autre chantier non cite restent hors perimetre de cette cloture.

## Prompt de reprise checkout

```text
Reprends uniquement le checkout MilAura depuis docs/checkpoints/2026-09-13-1156-certificats-checkout-hero-handoff.md. Commence en lecture seule dans Shopify Admin et sur un checkout reel. Confirme le profil actif 9395241307, le forfait Shopify actuel, les moyens de paiement visibles sur un appareil compatible et les contraintes natives avant toute proposition. Ne modifie et ne sauvegarde rien avant que Patrice ait formule le changement exact et donne son GO. Preserve Apple Pay, Shop Pay, Klarna, les cartes, le consentement marketing volontaire, le profil de repli et tous les travaux concurrents. Traite en priorite la clarte du retour panier ou boutique, la hierarchie des etapes et le contraste du resume de commande, sans promettre une extension reservee a Shopify Plus.
```

