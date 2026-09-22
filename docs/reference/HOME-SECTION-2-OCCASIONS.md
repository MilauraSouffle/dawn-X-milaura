# Home MilAura : section 2, occasions recurrentes et pierre du moment

Date de decision : 2026-09-22
Statut : architecture validee par Patrice, implementation Automne non commencee
Proprietaire de la validation visuelle et commerciale : Patrice Allie

## Objet de ce document

Ce fichier est le contrat canonique pour reprendre la section 2 de la home MilAura, sa landing d occasion recurrente et la section Pierre du moment.

Toute IA ou session qui recoit une demande comme `reprends la section 2`, `change le theme commercial du moment`, `prepare la prochaine occasion` ou `change la pierre du moment` doit lire ce document puis `docs/reference/milaura-home-occasion-registry.json` avant toute modification.

## Decision centrale

La home contient deux mecanismes differents.

1. `Home Occasion` est la section 2. Elle met en avant l opportunite commerciale active : Automne, Noel, Saint-Valentin, Fete des Meres, soldes ou autre temps fort valide.
2. `Pierre du moment` est une section editoriale plus basse. Elle zoome sur une pierre et pointe vers la page SEO permanente de cette pierre.

Ces deux mecanismes ne doivent jamais etre fusionnes.

## Ce que Google indexe

`milaura-selection-atelier` est le nom technique actuel d un fichier Liquid. Ce nom n est ni une URL, ni un title SEO, ni un H1 public. Il n est pas indexe comme page.

Pour la section 2, Google peut lire le contenu rendu dans la home : H2, texte visible, texte alternatif et liens HTML.

Pour la landing, Google indexe notamment :

- l URL publique ;
- le title SEO ;
- la meta description ;
- le H1 et les sous-titres ;
- le contenu visible ;
- les produits et liens internes ;
- le canonical, le statut HTTP et le maillage.

Le fichier technique `sections/milaura-selection-atelier.liquid` est deja generique et parametrable. Il reste l ancre canonique de la section 2. Le renommer n apporterait aucun gain SEO et ajouterait un risque inutile sur le template Shopify. Son role public `Home Occasion` est defini par ce contrat, son commentaire de tete et son nom visible dans l editeur de theme.

## Architecture publique

```text
HOME
|- Section 2 : Home Occasion
|  |- campagne active
|  |- un CTA principal
|  `- landing permanente de cette occasion
|
`- Pierre du moment
   |- une pierre active
   |- un contenu editorial court
   `- page permanente /collections/par-pierre-...
```

### Exemples d URL Occasion

- Automne : `/collections/selection-automne`
- Noel : `/collections/cadeaux-noel`
- Saint-Valentin : `/collections/cadeaux-saint-valentin`
- Fete des Meres : `/collections/cadeaux-fete-des-meres`
- Soldes : `/collections/soldes`, uniquement pour une operation reelle et conforme

Les handles publies deviennent immuables. Une nouvelle edition annuelle reutilise la meme URL.

### Exemples d URL Pierre du moment

- Aigue-marine : `/collections/par-pierre-aigue-marine`
- Sodalite : `/collections/par-pierre-sodalite`
- Amethyste : `/collections/par-pierre-amethyste`

Une section Pierre du moment peut changer de pierre sans changer, fusionner ou detourner les pages permanentes des autres pierres.

## Cycle de vie obligatoire d une landing Occasion

### `DRAFT`

- collection non publiee ou theme prive uniquement ;
- aucun lien depuis la home ou la navigation publique ;
- copy, produits, stocks, medias, prix et tracking en validation ;
- aucun Ads, Pinterest ou publication sociale.

### `ACTIVE`

- HTTP `200`, indexable et canonical auto-referent ;
- lien principal depuis la section 2 ;
- lien temporaire `En ce moment` dans la navigation si valide ;
- lien permanent depuis le hub `Selections saisonnieres et idees cadeaux` ;
- offre, prix, disponibilite et dates visibles conformes ;
- Ads autorisees seulement apres les gates stock, marge, tracking et GO budget.

### `OFF_SEASON`

- la page reste en HTTP `200`, indexable et sur le meme handle ;
- elle n est plus promue par la section 2 ni par `En ce moment` ;
- elle reste accessible depuis le hub permanent ;
- les urgences, remises, dates et disponibilites perimees sont retirees ;
- le contenu reste utile toute l annee ;
- les produits indisponibles sont remplaces ou presentes comme tels sans fausse disponibilite ;
- la page est rafraichie avant sa prochaine periode forte.

### `RETIRED`

Ce statut est exceptionnel. Une occasion recurrente ne doit normalement pas etre retiree.

- audit Search Console, Analytics, backlinks et liens internes obligatoire ;
- redirection `301` seulement vers une page strictement equivalente ;
- sinon vraie `404` ou `410` ;
- aucune redirection vague vers la home.

## Maillage et conservation SEO

Il ne faut pas creer un footer public nomme `Archives`. Ce mot presente les pages comme perimees et n aide pas le client a choisir.

La solution canonique est un hub public et utile :

- URL proposee : `/pages/selections-saisonnieres`
- H1 propose : `Selections saisonnieres et idees cadeaux`
- lien permanent depuis le footer, sous `Choisir` ou `Explorer` ;
- cartes vers Automne, Noel, Saint-Valentin, Fete des Meres et les autres occasions réellement maintenues ;
- aucune carte vers une page vide, trompeuse ou sans assortiment utile.

La page active recoit en plus les liens forts de la home et de `En ce moment`. Les pages hors saison restent trouvables par le hub, sans occuper la navigation principale.

## Code et medias : aucune archive dans le theme

Ne pas creer de dossier `archive` dans le theme Shopify.

- Git conserve l historique du code et des fichiers supprimes.
- Les masters creatifs, exports rejetes et sources lourdes restent hors du depot theme.
- Un media encore utilise par une page publique reste dans `assets/`.
- Un media non reference est retire du theme seulement apres recherche de dependances, validation Git, verification du theme distant et pullback.
- Chaque occasion possede un manifeste durable sous `docs/campaigns/<occasion>/manifest.md` avec URL, dates, produits, medias, copy validee, destinations Ads et reseaux, et statut de publication.

La landing publique est l archive utile pour le client. Git et le manifeste sont l archive technique.

## Contrat technique cible

Les noms ci-dessous sont la cible. Ils ne prouvent pas que l implementation existe deja.

- section home conservee : `sections/milaura-selection-atelier.liquid`, role public `Home Occasion` ;
- section landing : `sections/milaura-occasion-landing.liquid` ;
- template partage : `templates/collection.milaura-occasion.json` ;
- section pierre : adaptation explicite de `sections/milaura-hero-editorial.liquid`, role public `Pierre du moment` ;
- registre machine : `docs/reference/milaura-home-occasion-registry.json`.

Le contrat doit eviter de dupliquer une nouvelle section Liquid pour chaque fete. Les donnees propres a une occasion vivent dans la collection Shopify, ses metafields ou son manifeste, pas dans un fork complet du composant.

L ancre historique `MilauraSelectionAtelier` est conservee pour compatibilite. Elle n est pas un nom public.

## Workflow de remplacement de la section 2

1. Lire ce document et le registre JSON.
2. Verifier le live, l Admin Shopify, la landing active, les liens Ads et les liens sociaux.
3. Choisir une occasion existante ou creer une nouvelle URL seulement si elle est recurrente et possede un assortiment utile.
4. Passer la nouvelle occasion en `DRAFT`.
5. Verifier les produits, stocks, prix, marges, medias et textes.
6. Construire la landing et la section home sur un theme prive.
7. Obtenir le GO visuel de Patrice.
8. Passer l ancienne occasion en `OFF_SEASON` : retirer la promotion et les mentions perimees, conserver la page utile et son lien depuis le hub.
9. Activer la nouvelle occasion sur la home et, si valide, dans `En ce moment`.
10. Executer Theme Check, QA mobile et bureau, canonical, sitemap, schema, liens, panier, tracking, push cible et pullback.
11. Apres le live, envoyer un handoff date a la session Pinterest ou au canal concerne avec les anciennes et nouvelles destinations. Aucun lien social n est modifie par deduction.

## Application approuvee au lot Automne 2026

- la section 2 actuelle Sodalite sera remplacee par `Selection d automne` ;
- la landing cible sera `/collections/selection-automne` ;
- cette landing reunira plusieurs produits et plusieurs pierres ;
- la page `/collections/par-pierre-sodalite` deviendra la reference permanente Sodalite avec un H1 intemporel ;
- l ancienne destination `/collections/selection-de-karine` fera l objet d un audit de ses liens Pinterest et SEO avant redirection vers la Sodalite permanente ;
- la section Aigue-marine plus basse deviendra le premier etat de `Pierre du moment` ;
- aucune mutation live, Admin, Ads ou Pinterest n est incluse dans la seule validation de cette architecture.

## Prompt de reprise canonique

```text
Reprends le systeme Home Occasion de MilAura. Lis AGENTS.md, docs/reference/HOME-SECTION-2-OCCASIONS.md, docs/reference/milaura-home-occasion-registry.json et docs/workstreams.md. La section 2 est le slot commercial recurrent et ne doit jamais etre confondue avec Pierre du moment. Chaque grande occasion conserve une URL permanente et passe de DRAFT a ACTIVE puis OFF_SEASON sans perdre son indexation. Verifie le live, les reservations et les liens externes avant toute edition. Commence sur un worktree dedie et un theme prive. Aucun Admin, live, Ads ou reseau social sans gate explicite.
```
