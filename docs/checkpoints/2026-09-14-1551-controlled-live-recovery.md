# Recuperation controlee du theme live MilAura

Date : 2026-09-14 15:51 CEST

Statut : `LIVE RESTAURE ET VERIFIE`

## Incident

Le theme public `dawn-X-milaura/main` (`190430282075`) etait dans un etat hybride : le Hero aigue-marine recent et le snippet du consentement e-mail etaient presents, tandis que l accueil, la navigation et plusieurs surfaces correspondaient a une base ancienne. La derniere copie immediatement anterieure au retablissement comptait 656 fichiers.

Le checkout d integration local `00406d5a` est en retard de 74 revisions sur la branche distante. Il n a pas ete modifie, nettoye ni utilise comme source de restauration.

## Source restauree

- Base canonique : `origin/codex/milaura-integration` au commit `7d279bcc` (`fix: restore and polish homepage hero`).
- Correctifs quiz conserves par cherry-pick : `1112551a`, `9967239b` et `88b86d1d`.
- Branche de secours poussee avant le live : `codex/milaura-live-recovery-20260914`, commit `20cbc7fe` avant la cloture documentaire.
- Aucune modification de produit, prix, stock, collection, checkout, Flow, automatisation ou consentement Admin n a ete faite. Le Flow premier achat est hors theme Shopify.

## Sauvegardes et deploiement

- Snapshot du live hybride avant reprise : `/private/tmp/milaura-live-before-controlled-recovery-20260914`.
- Snapshot diagnostique precedent conserve : `/private/tmp/milaura-live-rollback-audit-20260914`.
- Recette privee actualisee et relue : theme `201359720795` (`MilAura - Previsualisation Dev`).
- Publication sur le live : `shopify theme push --store milaura-2.myshopify.com --theme 190430282075 --allow-live --nodelete --strict`.
- Pullback final : `/private/tmp/milaura-live-controlled-recovery-pullback-20260914`, 697 fichiers. Les fichiers absents de la source de reprise ont ete conserves par `--nodelete` et ne sont pas references par les templates actifs.

Les cinq fichiers critiques sont identiques entre la source et le pullback live :

- `config/settings_data.json`
- `templates/index.json`
- `sections/milaura-hero-portal.liquid`
- `sections/milaura-quiz.liquid`
- `snippets/milaura-quiz-email-consent.liquid`

Shopify ajoute seulement ses en-tetes auto-generes et normalise quelques templates JSON standard. Ce ne sont pas des differences fonctionnelles du lot.

## Verification

- `shopify theme check` : 0 erreur, 16 avertissements historiques dans 8 fichiers.
- Preview privee : accueil mobile 390 et desktop 1440, Hero aigue-marine, resultat complet du diagnostic, creations associees et bloc e-mail sans soumission.
- Domaine public `https://milaura.fr/` : accueil mobile 390 et desktop 1440, diagnostic emotionnel et collection `/collections/bijoux-pierres-naturelles` verifies apres pullback.
- Journal navigateur public : aucune erreur.

## Reprise

Toute future session part en lecture seule de `origin/codex/milaura-integration`, de la branche de secours `codex/milaura-live-recovery-20260914` et du storefront public. Ne jamais pousser un theme complet depuis le checkout d integration local tant qu il est en retard et sale. Chaque futur push Shopify doit etre cible, precede d un pullback et suivi d un pullback de verification.
