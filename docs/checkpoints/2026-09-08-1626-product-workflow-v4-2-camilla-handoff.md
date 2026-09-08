# MilAura catalogue : workflow produit V4.2 et Camilla durcie

Date : 2026-09-08 16:26 CEST

Statut : `WORKFLOW V4.2 DEPLOYE SUR CAMILLA, CATALOGUE RESTANT SOUS REVUE PATRICE`

## Decision Patrice

Patrice a valide les regles suivantes apres la revue du bracelet baroque en labradorite :

- le titre public doit etre compris immediatement et suivre une requete client naturelle ;
- les grades fournisseur `A`, `A+`, `AA`, `AA+`, `AAA`, `AB` et les formulations `Qualite AA` sortent du titre public et du SEO title ;
- la qualite prouvee reste dans les specifications, `milaura.qualite`, les tags internes et la pill publique dediee ;
- pour tout bijou, la deuxieme image Shopify montre le bijou porte et reste lisible au survol d'une carte produit ;
- un nouveau produit est cree uniquement en `DRAFT`, sans activation de canal par un agent ;
- apres controle manuel, Patrice active le produit et les canaux alors disponibles, sauf exclusion explicite ;
- les brouillons restants sont controles et actives un par un par Patrice ; aucun batch d'activation n'est autorise par deduction.

## Workflow V4.2

Le workflow canonique local vit dans :

`/Users/paesano/Documents/Agentic-Ops/milaura-automation/private-workspace/product-generation`

Le contrat galerie des nouveaux bijoux devient :

1. `01-cover.png`
2. `02-worn-hover.png`
3. `03-macro-product.png`
4. `04-editorial-contrast.png`
5. `05-calm-context-inset.png`

Les anciennes galeries V4.1 restent acceptees afin de ne pas casser les produits deja prepares. Les nouveaux bijoux dates du 2026-09-08 ou apres sont bloques si la vue portee n'est pas en position 2.

Le quality gate rejette aussi les grades fournisseur dans `shopify.title` et `shopify.seo_title`. Le contrat semantique existant de `stone_description` reste actif : texte autonome sur la pierre, aspect et variations, symbolique lithotherapie, sans substitution par `story_text`.

## Camilla

Camilla utilise exclusivement `openai-codex/gpt-5.6-sol` pour le texte et `gpt-image-2-medium` pour les images.

Sa doctrine et son skill imposent maintenant :

- une seule fiche existante par execution par defaut ;
- pour plusieurs fiches, un manifeste ferme avec IDs ou handles, champs autorises et accord explicite date ;
- snapshot avant mutation, refus de toute derive distante, pullback et diff apres mutation ;
- aucun passage automatique d'un audit ou diagnostic vers une ecriture Shopify ;
- aucune mutation deduite du titre, handle, SEO, description, `stone_description`, images, prix, stock, collections, statut ou canaux ;
- nouveaux produits uniquement en `DRAFT` et jamais de canal active par Camilla.

Synchronisation VPS terminee vers :

- `/docker/hermes-milaura-control/data/milaura-generation-nouveau-produit`
- `/docker/hermes-milaura-control/data/profiles/camilla/SOUL.md`
- `/docker/hermes-milaura-control/data/profiles/camilla/skills/productivity/milaura-product-generation/SKILL.md`

Les SHA-256 Mac, hote VPS et chemins montes dans le conteneur sont identiques pour les fichiers deployes. Le conteneur `hermes-milaura-control` a ete redemarre et les services `main-hermes` et `dashboard` ont redemarre correctement.

Sauvegardes avant changement :

- Mac : `/Users/paesano/Documents/Agentic-Ops/milaura-automation/backups/2026-09-08T161206-product-workflow-v4-2-prechange/`
- VPS : `/docker/hermes-milaura-control/data/backups/product-workflow-v4-2-pre-20260908T161206/`

## Validation

PASS locaux :

- schema JSON lisible ;
- rejet des grades dans les titres ;
- galerie legacy V4.1 ;
- galerie V4.2 avec vue portee en position 2 ;
- contrat produit V1.3 ;
- contrat semantique de l'onglet `La pierre` ;
- preflight sans appel Shopify en cas d'image manquante, illisible, invalide ou de routage distant incoherent.

## Bracelet baroque en labradorite

Produit Shopify `10357440446811`, handle historique `bracelet-labradorite`.

Deux lectures Shopify, la derniere au 2026-09-08 16:30 CEST, voyaient encore :

- titre `Bracelet baroque en labradorite AA` ;
- SEO title `Bracelet baroque labradorite AA | MilAura` ;
- statut `DRAFT` ;
- galerie V4.1 avec la macro en position 2 et les vues portees en positions 4 et 5.

Patrice etait en cours de modification manuelle. Aucun champ de ce produit n'a ete modifie par Codex pendant ce lot. Relire le produit avant toute prochaine action afin de ne pas confondre l'intention annoncee et l'etat effectivement enregistre.

## Prochaine session

1. Commencer en lecture seule par un inventaire exact des modifications effectuees par Camilla le 2026-09-07, produit par produit et champ par champ.
2. Ne corriger aucun produit sans liste explicite et validation de Patrice.
3. Patrice poursuit la revue visuelle des brouillons enrichis, puis active lui-meme chaque fiche validee et ses canaux.
4. Une fois cette revue terminee, relire les anciennes fiches encore `ACTIVE` et en rupture, puis arbitrer produit par produit entre enrichissement V4.2 et retrait.

## Prompt de reprise

```text
Reprends MilAura depuis docs/checkpoints/2026-09-08-1626-product-workflow-v4-2-camilla-handoff.md. Commence en lecture seule. Le workflow produit V4.2 et Camilla sont deployes : pas de grade fournisseur dans le titre ou le SEO title, image portee en position 2 pour tout nouveau bijou, stone_description strictement centree sur la pierre, Sol exclusivement, nouveaux produits uniquement en DRAFT, aucun canal active par un agent. Audite d'abord les modifications Shopify effectuees par Camilla le 2026-09-07 et fournis la liste exacte des produits et champs touches sans rien corriger. Patrice controle et active les brouillons un par un. Ne lance aucun batch, aucune publication, aucun changement de statut, prix, stock, handle, galerie, collection ou canal sans liste fermee et nouveau GO explicite.
```
