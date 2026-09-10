# Handoff SEO commercial MilAura

Date : 2026-09-10 10:52 CEST
Statut : `LIVE VERIFIE, LOT SEO FERME, ACTIFS PROPRIETAIRES SEPARES`

## Résultat

Le `GO SEO LIVE` de Patrice a été exécuté sur le périmètre SEO réservé. Le catalogue produit, les stocks, les prix, les médias, le bandeau de preuve sociale et les Ads sont restés hors lot.

### Corrections publiées

- 15 collections existantes relues après écriture, sans écart avec `docs/audits/2026-09-09-seo-corrections-manifest.json` ;
- 3 pages SEO : Contact, Notre Histoire et Rétractation ;
- 4 articles enregistrés, dont Bougie, Améthyste et Quelle pierre avec nouveaux title et meta ;
- 17 occurrences de liens mal encodées réparées dans 3 articles du Journal ;
- `/products/sauge-blanche-et-romarin` redirige en une seule `301` vers `/products/sauge-blanche-au-romarin-10-cm-1-baton`, qui répond `200` ;
- 9 liens contextuels publics ajoutés au guide Quelle pierre, un vers chaque nouvelle collection.

### Collections commerciales publiées

| URL | Produits publics vérifiés |
|---|---:|
| `/collections/bracelets-amethyste` | 9 |
| `/collections/bracelets-quartz-rose` | 6 |
| `/collections/bracelets-aigue-marine` | 6 |
| `/collections/bracelets-cornaline` | 6 |
| `/collections/bracelets-onyx` | 6 |
| `/collections/bracelets-sodalite` | 5 |
| `/collections/bracelets-aventurine-verte` | 5 |
| `/collections/bracelets-lapis-lazuli` | 5 |
| `/collections/colliers-amethyste` | 2 |

Chaque URL répond `200`, sans redirection, avec canonical exact, H1 unique, title, meta description, description utile, template `milaura-type` et assortiment public attendus. Les neuf URL figurent dans le sitemap collections.

### Consolidation Bracelet Améthyste

- page Shopify `164048863579` passée de Visible à Masqué ;
- `/pages/bracelet-amethyste` absente du sitemap pages ;
- redirection publique `301` en un saut vers `/collections/bracelets-amethyste` ;
- destination finale `200`.

L'ancienne fiche `/products/collier-amethyste` n'a pas été redirigée. Le propriétaire catalogue doit d'abord confirmer un retrait définitif sans réassort.

## Vérifications et preuves

- snapshot GraphQL final : `/private/tmp/milaura-shopify-graphql-seo-final-20260910.json` ;
- sauvegarde avant création des collections : `/private/tmp/milaura-shopify-seo-collections-apply-before-20260910.json` ;
- reçu de création : `/private/tmp/milaura-shopify-seo-collections-apply-receipt-20260910.json` ;
- sauvegarde avant maillage catégories : `/private/tmp/milaura-shopify-seo-maillage-apply-before-20260910.json` ;
- reçu de maillage : `/private/tmp/milaura-shopify-seo-maillage-apply-receipt-20260910.json` ;
- comparaison finale : 15/15 collections existantes exactes et 9/9 nouvelles collections exactes ;
- vérification publique dans Chrome des titles, metas, canonicals, H1, comptes produits, liens du guide et absence de liens contenant des guillemets échappés ;
- validation JSON et compilation Python des scripts ;
- `git diff --check` sans erreur.

Les fichiers sous `/private/tmp` sont des preuves locales éphémères et ne sont pas versionnés.

## Limites et risques restants

1. Les décisions URL des anciennes fiches produit restent propriété du lot catalogue. Ne jamais rediriger une ancienne fiche vers une collection vague sans décision documentée.
2. Les catégories mères ont reçu des descriptions factuelles et des liens, mais plusieurs templates spéciaux ne rendent pas `collection.description`. Ces liens invisibles ne comptent pas comme maillage public. Le guide de choix assure actuellement un lien public vers chacune des neuf cellules.
3. Le crawl sitewide du 2026-09-10 signalait encore `bols-chantants`, des pages obsolètes et des incohérences de navigation. Leur état doit être relu après les mouvements catalogue avant toute suppression ou redirection.
4. Ce lot n'est pas un nouveau benchmark de performance. Le dernier checkpoint de performance reste `docs/checkpoints/2026-09-08-1916-seo-performance-authority-live.md`, avec mobile 70, bureau 89 et LCP froid encore perfectible.
5. Aucun Ads n'a été lancé. SEO live ne vaut pas validation du stock, de la marge, du Purchase Pixel/CAPI ou du budget.

## Prompt de reprise pour la session dédiée aux actifs propriétaires

```text
Reprends MilAura depuis docs/checkpoints/2026-09-10-1052-seo-commercial-live-handoff.md. Le lot SEO commercial est terminé et live : 15 collections existantes conformes, 3 pages SEO, 4 articles, 17 occurrences de liens réparées, 2 redirections en un saut, 9 collections commerciales vérifiées et 9 liens contextuels publics depuis le guide de choix. Ne rejoue aucune mutation Shopify par déduction.

Ta mission est exclusivement de concevoir puis implémenter les actifs propriétaires MilAura suivants :
1. un sélecteur interactif de pierre ;
2. une matrice eau, soleil, sel par pierre ;
3. un calendrier illustré des pierres de naissance ;
4. un atlas photographique des pierres et imitations ;
5. le protocole et la page de restitution d'une étude annuelle sur les bijoux symboliques et les intentions des Français.

Crée une branche et un worktree dédiés, déclare le workstream et utilise les skills frontend-design, impeccable et onora-copywriting. Commence par l'architecture de données, les sources et les parcours du sélecteur et de la matrice. Mobile-first, photographie réelle, accessibilité, données sourcées, HTML indexable, liens vers les collections commerciales et performance sont obligatoires. Karine reste dans un rôle de conseil et d'expertise, jamais mannequin produit. Ne touche pas aux produits, stocks, handles, prix, preuve sociale, catalogue en cours de revue ou Ads. Prépare une preview Shopify privée. Sépare strictement PASS technique, validation visuelle Patrice, intégration et live. Aucun déploiement public sans nouveau GO explicite.
```

## État Git au moment du handoff

- worktree SEO : `/Users/paesano/Documents/MilAura website/_worktrees/seo-commercial-architecture-20260909` ;
- branche : `codex/milaura-seo-commercial-architecture-20260909` ;
- checkout principal non modifié par ce lot et laissé sale avec les changements concurrents existants ;
- aucune intégration dans le checkout principal tant que son état concurrent n'est pas rapproché proprement.
