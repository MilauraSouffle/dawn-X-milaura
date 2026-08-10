# Index des livrables architecture catalogue MilAura

Date : 2026-08-09
Phase : audit terminé et phase 2 privée exécutée
Mutation Shopify publique : correctif SEO technique ciblé sur `layout/theme.liquid` le 2026-08-09 ; aucune nouvelle collection publiée

## Livrables obligatoires

1. Audit SEO/AEO/GEO : [`../audits/2026-08-09-audit-seo-aeo-geo-catalogue.md`](../audits/2026-08-09-audit-seo-aeo-geo-catalogue.md)
2. Recherche sémantique et SERP : [`../audits/2026-08-09-recherche-semantique-serp-fr.md`](../audits/2026-08-09-recherche-semantique-serp-fr.md)
3. Carte maîtresse de la taxonomie : [`2026-08-09-taxonomie-catalogue-maitresse.md`](2026-08-09-taxonomie-catalogue-maitresse.md)
4. Matrice anti-cannibalisation : [`2026-08-09-matrice-anti-cannibalisation.md`](2026-08-09-matrice-anti-cannibalisation.md)
5. Matrice collections/pages/articles : [`2026-08-09-matrice-collections-pages-articles.md`](2026-08-09-matrice-collections-pages-articles.md)
6. Briefs de chaque landing prioritaire : [`2026-08-09-briefs-landings-prioritaires.md`](2026-08-09-briefs-landings-prioritaires.md)
7. Plan de maillage interne : [`2026-08-09-plan-maillage-interne.md`](2026-08-09-plan-maillage-interne.md)
8. Architecture Pinterest et groupes catalogue : [`2026-08-09-architecture-pinterest-catalogue.md`](2026-08-09-architecture-pinterest-catalogue.md)
9. Carte des destinations Ads : [`2026-08-09-carte-destinations-ads.md`](2026-08-09-carte-destinations-ads.md)
10. Plan de mesure : [`2026-08-09-plan-mesure-acquisition.md`](2026-08-09-plan-mesure-acquisition.md)
11. Dossier inventaire : [`2026-08-09-dossier-inventaire-categories.md`](2026-08-09-dossier-inventaire-categories.md)
12. Plan d'activation progressif : [`../superpowers/plans/2026-08-09-plan-activation-taxonomie-catalogue.md`](../superpowers/plans/2026-08-09-plan-activation-taxonomie-catalogue.md)
13. Rapport d'exécution phase 2 : [`2026-08-09-execution-phase2-catalogue.md`](2026-08-09-execution-phase2-catalogue.md)
14. Contrat canonique de données : [`2026-08-10-contrat-donnees-catalogue.md`](2026-08-10-contrat-donnees-catalogue.md)
15. Hubs préparés en brouillon local : [`2026-08-10-hubs-catalogue-brouillons.md`](2026-08-10-hubs-catalogue-brouillons.md)
16. Matrice d'activation des treize collections publiques : [`2026-08-10-matrice-activation-collections-publiques.md`](2026-08-10-matrice-activation-collections-publiques.md)
17. Liste des dix-huit baguettes à retirer du catalogue public : [`2026-08-10-baguettes-retrait-catalogue-public.md`](2026-08-10-baguettes-retrait-catalogue-public.md)

## Décision exécutée

Les définitions, le lot test, cinq collections hors Boutique en ligne, leurs contenus en brouillon et les templates de preview ont été exécutés le 2026-08-09. Les cinq routes restent absentes du sitemap et répondent en 404 publiquement.

## Contrat UI/UX

La table à consommer pour les trois cartes de homepage se trouve dans la section `Contrat des cartes de la future homepage` de la carte maîtresse. Aucune surface UI protégée n'a été modifiée dans ce chantier.

La future route Bagues est `/collections/bagues-pierres`. Elle reste privée. Tant que son stock n'est pas suffisant, le fallback de navigation est `/collections/bijoux-pierres-naturelles`. La référence historique à `/collections/bagues` encore présente sur la homepage est transmise au lot UI/UX et n'est pas modifiée par ce chantier catalogue.
