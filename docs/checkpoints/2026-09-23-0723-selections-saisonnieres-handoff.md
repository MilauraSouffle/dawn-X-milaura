# Handoff : selections saisonnieres, Sodalite et Selection de Karine

Date : 2026-09-23 07:23 CEST

Statut : `DECISIONS VALIDÉES, AUCUNE NOUVELLE MUTATION STOREFRONT OU SHOPIFY ADMIN`

## Objet

Ce checkpoint ferme la session Automne et transmet a une session neuve la remise en ordre durable des pages commerciales saisonnieres, des pages pierre et de la future `Selection de Karine`.

Le theme public reste `190430282075`. La selection Automne et sa landing `/collections/selection-automne` sont deja live et ont ete verifiees dans le checkpoint `docs/checkpoints/2026-09-23-0646-autumn-live.md`. Le present lot est documentaire uniquement : aucun fichier de theme, menu, page, collection, produit, asset Shopify, canal, Ads ou Pinterest n a ete modifie.

## Decisions explicites de Patrice

1. Le nom public du futur hub du footer est exactement `Sélections saisonnières`. `Archives commerciales` est refuse car trop froid.
2. La section 2 de la home reste le slot commercial recurrent `Home Occasion`. Elle met en avant Automne, Noel, Saint-Valentin, Fete des Meres ou une autre occasion validee, puis pointe vers la landing permanente de cette occasion.
3. Une landing commerciale recurrente garde une URL stable, passe de `ACTIVE` a `OFF_SEASON`, perd ses messages perimes et reste accessible depuis le hub `Sélections saisonnières`.
4. Les pages consacrees a une pierre restent des pages SEO permanentes. Elles sont accessibles depuis `Bijoux par pierre` et ne deviennent pas des archives commerciales.
5. La landing permanente Sodalite reste `/collections/par-pierre-sodalite`. Son H1 et son contenu doivent perdre `Septembre 2026`, `rentrée` et toute autre formulation temporaire, sans supprimer sa video de landing ni son assortiment.
6. La collection `/collections/selection-de-karine` doit porter le nom public `Sélection de Karine`. Elle sera enrichie et redesignee dans un chantier dedie, puis remplacera sur la home la section editoriale Aigue-marine que Patrice ne souhaite plus conserver.
7. Le lien `Cadeaux > Rentrée en Sodalite` doit disparaitre. Il pointe actuellement, a tort, vers `/collections/selection-de-karine`.
8. Les anciens medias de la section Sodalite de la home doivent etre supprimes du theme une fois leur absence de references confirmee. Les medias encore utilises par la landing Sodalite doivent rester.

## Architecture durable approuvee

```text
HOME
|- Home Occasion
|  |- campagne commerciale active
|  `- landing stable de l occasion
|
`- Sélection de Karine
   `- collection editoriale permanente et evolutive

FOOTER
`- Sélections saisonnières
   |- Automne
   |- Noel
   |- Saint-Valentin
   `- autres occasions maintenues

BIJOUX PAR PIERRE
`- chaque pierre
   `- landing SEO permanente /collections/par-pierre-...
```

Le hub `Sélections saisonnières` est un repertoire commercial utile, pas un dossier technique d archives. Il doit contenir une carte uniquement pour une page encore utile, entretenue et assortie. Git et les manifestes de campagne restent l archive technique.

## Constats publics verifies le 2026-09-23

### Guide A a Z : Sodalite non cliquable

URL controlee :

`https://milaura.fr/pages/bijoux-par-pierre?view=milaura-guide-pierres#GuideLetter-template--30026096509275__main-s`

La page publique repond HTTP `200` sur le theme `190430282075`. Dans la lettre S, `Sodalite` est rendue comme un element statique avec le statut `Référence`, sans balise `<a>`.

Cause locale exacte : dans `templates/page.milaura-guide-pierres.json`, le bloc `sodalite` contient `"link": ""` et le texte `destination dédiée en attente`. `sections/milaura-guide-index.liquid` ne rend un lien que lorsque ce champ est renseigne.

Correction cible :

- `link` : `/collections/par-pierre-sodalite` ;
- resume : texte intemporel coherent avec la page existante ;
- controle du clic desktop et mobile, du focus clavier et du statut `Découvrir`.

### Landing Sodalite encore saisonniere

Le template `templates/collection.milaura-pierre-sodalite.json` utilise encore :

- `campaign_eyebrow` : `Septembre 2026` ;
- `campaign_title_secondary` : `la pierre de votre rentrée` ;
- `edition_label` : `Septembre 2026`.

La prochaine session doit produire une ouverture intemporelle centree sur la sodalite, ses bijoux, sa couleur et les reperes utiles pour choisir. Elle doit conserver le moteur de landing, le guide pierre, les produits et les medias de landing actifs.

### Navigation actuellement incoherente

`snippets/milaura-nav-curated-links.liquid` contient encore, dans `Cadeaux`, le lien `Rentrée en Sodalite` vers `/collections/selection-de-karine`. Ce lien est visible sur desktop et mobile. Il doit etre retire, pas simplement rebaptise dans ce menu.

La future `Sélection de Karine` sera rendue accessible depuis la home apres son chantier visuel et editorial. Aucun nouveau lien de navigation principale ne doit etre invente par deduction.

## Medias Sodalite : frontiere de suppression

Medias de landing actuellement references par `templates/collection.milaura-pierre-sodalite.json` et a conserver :

- `assets/milaura-rentree-sodalite-landing-v2-desktop.mp4` ;
- `assets/milaura-rentree-sodalite-landing-v2-mobile.mp4` ;
- `assets/milaura-rentree-sodalite-landing-v2-desktop-poster.webp` ;
- `assets/milaura-rentree-sodalite-landing-v2-mobile-poster.webp` ;
- `assets/milaura-selection-rentree-sodalite.webp` ;
- `assets/milaura-sodalite-material-study.webp`.

Premiers candidats de l ancienne section home, actuellement sans reference locale directe, a confirmer sur le theme distant avant suppression ciblee :

- `assets/milaura-rentree-sodalite-hero-v4-desktop.mp4` ;
- `assets/milaura-rentree-sodalite-hero-v4-mobile.mp4` ;
- `assets/milaura-rentree-sodalite-hero-v4-desktop-poster.webp` ;
- `assets/milaura-rentree-sodalite-hero-v4-mobile-poster.webp`.

Les versions `hero-v3`, le clip Chloe et tout autre asset Sodalite non reference doivent etre inventoriees dans le meme audit, mais aucune suppression ne doit etre elargie sans preuve d inutilisation.

## Ordre de reprise obligatoire

1. Lire `AGENTS.md`, ce checkpoint, `docs/reference/HOME-SECTION-2-OCCASIONS.md`, `docs/reference/milaura-home-occasion-registry.json` et `docs/workstreams.md`.
2. Commencer en lecture seule : `git status`, worktrees, theme live, routes publiques, menus, sitemap, canonical et references d assets.
3. Creer une branche et un worktree dedies, reserver les fichiers et un theme prive dans `docs/workstreams.md`. Ne jamais travailler depuis le checkout principal sale.
4. Mettre a jour le contrat et le registre pour remplacer l ancienne decision `Pierre du moment` par la nouvelle destination home `Sélection de Karine`, et fixer le libelle public `Sélections saisonnières`.
5. Dans un premier lot petit et testable : retirer `Rentrée en Sodalite` du menu Cadeaux, rendre Sodalite cliquable dans le guide A a Z, puis rendre la landing Sodalite intemporelle.
6. Construire le hub `/pages/selections-saisonnieres` avec son H1 `Sélections saisonnières`, son lien footer unique et ses cartes utiles. Automne doit y etre reliee sans message perime.
7. Auditer puis supprimer de facon ciblee les medias home Sodalite reellement inutilises. Ne pas supprimer les medias `landing-v2`.
8. Ouvrir ensuite un chantier visuel distinct pour `/collections/selection-de-karine` et le remplacement de la section Aigue-marine de la home. Obtenir un GO visuel avant toute integration.
9. Valider sur theme prive : Theme Check, mobile et desktop, clavier, liens, H1, canonical, sitemap, schema, produits, panier et absence de media casse.
10. Conserver les gates separees : PASS technique, GO visuel Patrice, Shopify Admin, integration, release et live. Aucun push live par deduction.

## Fichiers probables, a confirmer apres preflight

- `snippets/milaura-nav-curated-links.liquid` ;
- `templates/page.milaura-guide-pierres.json` ;
- `templates/collection.milaura-pierre-sodalite.json` ;
- `templates/index.json` ;
- `templates/collection.selection-de-karine.json` ;
- composant et template du futur hub `Sélections saisonnières` ;
- section/footer qui recevra le lien unique ;
- assets Sodalite home confirmes inutilises ;
- `AGENTS.md` ;
- `docs/reference/HOME-SECTION-2-OCCASIONS.md` ;
- `docs/reference/milaura-home-occasion-registry.json` ;
- manifestes et documentation propres aux lots.

## Risques et non-decisions

- Ne pas rediriger `/collections/selection-de-karine` vers Sodalite : cette URL garde maintenant sa propre fonction editoriale.
- Ne pas supprimer `sections/milaura-sodalite-landing.liquid` : c est le moteur commun de landing actuellement utilise.
- Ne pas supprimer une landing pierre quand elle quitte la home.
- Ne pas laisser une landing commerciale hors saison avec une fausse urgence, une annee perimee ou un assortiment vide.
- Ne pas ajouter toutes les anciennes campagnes directement dans le footer : un seul lien footer vers le hub suffit.
- Le contenu final et le design de `Sélection de Karine` ne sont pas encore approuves.
- Aucun test de commande ou de preuve Purchase Pixel/CAPI n a ete execute dans le lot Automne.
- L integration vers le checkout principal reste en attente car ce checkout contient des modifications concurrentes hors perimetre.

## Prompt de reprise

```text
Reprends MilAura depuis docs/checkpoints/2026-09-23-0723-selections-saisonnieres-handoff.md. Commence en lecture seule et travaille dans un worktree dedie, jamais dans le checkout principal sale. La decision validee est : Home Occasion reste la section 2 commerciale recurrente ; le futur hub footer s appelle exactement « Sélections saisonnières » ; les pages pierre restent permanentes ; la section Aigue-marine de la home sera remplacee, dans un chantier visuel separe, par « Sélection de Karine » pointant vers /collections/selection-de-karine. Premier lot : retirer Cadeaux > Rentrée en Sodalite, rendre la landing /collections/par-pierre-sodalite intemporelle, et rendre Sodalite cliquable dans le guide A-Z vers cette landing. Preserve tous les medias landing-v2 Sodalite. Audite les references locales et distantes avant de supprimer seulement les anciens medias home Sodalite inutilises. Construis ensuite le hub /pages/selections-saisonnieres et son lien footer unique sur theme prive. PASS technique, GO visuel, Admin, integration et live restent des gates separees ; aucun push live par deduction.
```
