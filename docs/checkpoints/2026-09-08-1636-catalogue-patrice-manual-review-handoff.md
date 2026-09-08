# Handoff catalogue : Patrice reprend la revue manuelle

Date : 2026-09-08 16:36 CEST

Statut : `SESSION FERMEE, WORKFLOW V4.2 DEPLOYE, REVUE SHOPIFY REPRISE PAR PATRICE`

## Decision finale de Patrice

Patrice reprend personnellement dans Shopify Admin la revue des produits crees ou enrichis pendant le chantier. Le perimetre qu'il annonce est le bracelet baroque en labradorite deja ouvert, puis les vingt produits restants.

Pour chaque fiche, Patrice controle puis enregistre lui-meme :

1. un titre public clair, sans grade fournisseur brut tel que `A`, `AA`, `AAA` ou `AB` ;
2. un SEO title naturel, coherent avec la recherche client, sans ajouter une promesse de volume de recherche non prouvee ;
3. pour un bijou, une photo portee lisible en deuxieme position de galerie afin qu'elle apparaisse au survol des cartes produit ;
4. la description, les caracteristiques et l'onglet `La pierre` ;
5. le prix, le stock et le marqueur interne de produit a commander lorsque celui-ci s'applique ;
6. le statut `ACTIVE` et tous les canaux alors disponibles, uniquement apres validation de la fiche.

Pendant cette revue, aucun agent ne doit modifier, activer, publier ou reordonner ces produits sans une nouvelle liste fermee et un nouveau GO explicite de Patrice.

## Bracelet baroque en labradorite

Produit Shopify `10357440446811`, handle `bracelet-labradorite`.

Patrice a annonce vouloir :

- retirer `AA` du titre public ;
- placer une photo portee en position 2 ;
- activer les canaux disponibles puis le produit apres son controle.

La derniere lecture API effectuee par Codex au 2026-09-08 16:30 CEST voyait encore l'ancien titre `Bracelet baroque en labradorite AA`, le SEO title avec `AA`, la macro en position 2 et le statut `DRAFT`. Cette lecture precede la fin de la saisie manuelle de Patrice. Ne pas considerer ses changements comme enregistres ou absents sans une nouvelle lecture Shopify.

## Ce qui est livre

Le workflow produit V4.2 est deploye sur Camilla et impose :

- texte exclusivement avec `openai-codex/gpt-5.6-sol` ;
- nouveaux produits uniquement en `DRAFT` ;
- aucune activation de canal par Camilla ;
- grades fournisseur exclus du titre public et du SEO title ;
- vue portee en position 2 pour tout nouveau bijou ;
- `stone_description` reellement centree sur la pierre ;
- une seule fiche existante par execution par defaut ;
- manifeste ferme et autorisation datee pour tout lot ;
- snapshot avant mutation, refus de derive distante, pullback et diff apres mutation.

Les tests locaux sont PASS, les fichiers Mac et VPS ont ete compares par SHA-256 et `hermes-milaura-control` a ete redemarre correctement. Le handoff technique complet est dans `docs/checkpoints/2026-09-08-1626-product-workflow-v4-2-camilla-handoff.md`.

Les cinq anciennes fiches selectionnees le 2026-09-08 ont ete enrichies et restent sous revue Patrice : Bracelet baroque en seraphinite, Collier en jaspe rouge, Collier en pyrite, Pendule en labradorite et Pendule en oeil de tigre. La baguette Pyrite reste retiree du storefront et ne doit pas revenir. Details : `docs/checkpoints/2026-09-08-0950-selected-five-draft-production.md`.

Les seize nouvelles fiches du catalogue physique ont ete creees en DRAFT le 2026-09-05 ; les deux fils de perles personnels restent exclus. Details et liste canonique : `docs/checkpoints/2026-09-05-1735-catalogue-handoff-patrice-triage.md`.

## Travaux non fermes

- Les modifications effectuees par Camilla le 2026-09-07 n'ont pas ete auditees produit par produit ni corrigees pendant cette cloture.
- Les anciennes fiches encore `ACTIVE` et en rupture n'ont pas ete recomptees. Elles devront etre arbitrees une par une entre enrichissement V4.2, remise en stock ou retrait.
- La reprise editoriale globale des descriptions de pierre n'est pas certifiee terminee. Le correctif du theme est live, mais ne vaut pas validation de tous les contenus produit.
- Les bougies doivent faire l'objet d'un lot dedie : elles sont une creation artisanale de Patrice avec Maison Candella, pas des produits Camille Ambiance Nature. Leur statut, contenu, galerie, disponibilite et anciennes redirections doivent etre audites avant remise en ligne.

## Etat Git a la cloture

- Repo theme : branche `codex/milaura-integration`, commit technique et documentaire V4.2 `0a0d603d` deja pousse sur `origin/codex/milaura-integration`.
- Le checkout theme reste sale avec des changements concurrents preexistants, notamment workflows GitHub, `AGENTS.md`, `docs/workstreams.md`, autres modifications documentaires et fichiers non suivis. Aucun reset, nettoyage ou staging global n'a ete execute.
- Repo `Agentic-Ops` : branche `main` en retard de 49 commits lors de la lecture de cloture et tres sale avec de nombreux travaux concurrents. Aucun commit global, pull, reset ou nettoyage n'a ete tente.

## Prompt de reprise

```text
Reprends MilAura depuis docs/checkpoints/2026-09-08-1636-catalogue-patrice-manual-review-handoff.md. Patrice a repris lui-meme la revue et l'activation des vingt et un produits annonces, un par un. Commence exclusivement en lecture seule et demande-lui s'il a termine avant de toucher au catalogue. Ne modifie aucun produit qu'il est encore en train de controler. Ensuite, audite d'abord les modifications effectuees par Camilla le 2026-09-07 et fournis la liste exacte des produits et champs touches sans correction. Le workflow V4.2 est deploye : Sol exclusivement, aucun grade fournisseur dans titre ou SEO title, image portee en position 2 pour les bijoux, onglet pierre pertinent, nouveaux produits DRAFT et aucun canal active par un agent. Traite les anciennes fiches en rupture et les bougies dans des lots separes. Les bougies sont une collaboration Patrice et Maison Candella, jamais un produit Camille Ambiance Nature. Aucun batch, changement de statut, prix, stock, handle, galerie, collection, redirection ou canal sans nouvelle liste fermee et GO explicite.
```
