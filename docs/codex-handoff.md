# MilAura - Handoff Codex actif

Date de clôture : 2026-08-10 07:57 CEST

## Mission de reprise

Reprendre après la fondation catalogue privée. La prochaine mutation catalogue dépend de l'inventaire réel. Ne publier aucune collection ni aucun hub, et ne modifier ni homepage, ni livraison, ni panier sans le périmètre et le GO correspondants.

## Lecture obligatoire

1. `AGENTS.md`
2. `docs/project-state.md`
3. `docs/checkpoints/2026-08-10-0757-catalogue-taxonomie-drafts-handoff.md`
4. `docs/reference/2026-08-10-contrat-donnees-catalogue.md`
5. `docs/reference/2026-08-10-baguettes-retrait-catalogue-public.md`
6. `docs/reference/2026-08-10-matrice-activation-collections-publiques.md`

## Vérité Shopify

- Thème live : `dawn-X-milaura/main`, ID `190430282075`.
- Thème de développement : `Development (c105a8-mac-1)`, ID `199421952347`.
- 589 produits : 261 actifs, 312 brouillons, 15 archivés, 1 non répertorié.
- 51 définitions produit et 11 définitions collection.
- 26 collections Admin, 20 publiques dans le sitemap.
- 5 nouvelles collections privées, toutes en 404 et absentes du sitemap.
- Aucun produit brouillon modifié par la phase catalogue.
- Aucun push live et aucune publication le 2026-08-10.

## Contrat canonique

- `stone_handle` : pierre principale.
- `stone_handles` : pierres secondaires ou multiples.
- `stone_benefits` : clé technique conservée, libellé public `Symbolique traditionnelle`.
- `content_updated_at` : date canonique de vérification éditoriale.
- Source machine : `config/catalogue-data-contract.json`.

## Préviews disponibles

Le thème de développement contient :

- `collection.milaura-pierre` ;
- `collection.milaura-type` ;
- `page.milaura-bijoux-pierre` ;
- `page.milaura-choisir-pierre` ;
- `page.milaura-pierres-naissance` ;
- `page.milaura-cadeaux-mariage`.

Les quatre routes Page sont seulement documentées. Aucune Page Shopify Admin n'a été créée, car le scope de lecture des pages n'est pas disponible et le statut privé ne pouvait pas être prouvé de façon sûre.

## Blocages avant activation

1. Inventaire : confirmer nature, stock, matières, pierres et seuils.
2. Baguettes : contrôler 18 URLs actives, commandes et GSC avant brouillon ou archive.
3. Bagues : atteindre 8 bagues réelles ; la route canonique reste `/collections/bagues-pierres`.
4. Homepage : remplacer la référence historique à `/collections/bagues` par `/collections/bijoux-pierres-naturelles` dans la session UI/UX, pas ici.
5. Collections publiques : utiliser la matrice des 13 destinations avant toute meta définitive.
6. Hubs : créer les Pages non publiées, assigner les templates et ajouter uniquement des sélections réelles après inventaire.

## Limites de preuve

- Search Console : non vérifié.
- GA4 : non vérifié.
- Merchant Center : non vérifié.
- Pinterest : non vérifié.

Journal, netlinking externe, activation Pinterest, tracking et campagnes Ads restent hors de ce lot.

## Prompt de reprise

> Reprends MilAura depuis `docs/codex-handoff.md`, `docs/project-state.md` et `docs/checkpoints/2026-08-10-0757-catalogue-taxonomie-drafts-handoff.md`. Le contrat canonique, le lot témoin, les cinq collections privées et les templates de développement sont terminés. Commence en lecture seule par l'inventaire réel. Ne touche pas aux 312 produits brouillons sans décision de la session inventaire, ne publie aucune collection ni aucun hub, et préserve les changements concurrents de homepage, livraison et panier. Utilise `stone_handle` pour la pierre principale, `stone_handles` pour les pierres secondaires ou multiples, `stone_benefits` avec le libellé public Symbolique traditionnelle, et `content_updated_at` pour la date éditoriale.
