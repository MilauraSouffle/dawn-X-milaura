# Production complète des contenus `La pierre`

Date : 2026-09-07 16:36 CEST
Statut : production hors ligne terminée, aucune écriture Shopify

## Résultat

- `228` produits ACTIVE contrôlés dans la file.
- `221` descriptions prêtes pour une écriture Shopify contrôlée.
- `221` lignes portent l'action explicite `set_stone_description` dans le manifeste.
- `5` textes pilotes validés par Patrice conservés à l'identique.
- `7` fiches sans vraie pierre exploitable : aucune description inventée, une correction de taxonomie ou un masquage de l'onglet est requis.
- `7` lignes portent l'action explicite `taxonomy_review_required` et listent leurs clés pierre actuelles avant toute décision.
- `2` compositions 7 chakras traitées sans inventer le nom des minéraux absents des sources.
- aucune mutation Shopify, aucun changement de statut, stock, prix, média, collection ou SEO.

## Contrôles PASS

- total exact : `228` ;
- longueur de chaque texte prêt : `240 à 900` caractères ;
- structure de chaque texte prêt : `3 à 5` phrases ;
- duplication exacte : `0` ;
- cinq pilotes : contenu identique à la version validée ;
- aucune promesse médicale, certification, provenance ou garantie ajoutée sans preuve ;
- contenu pierre séparé de la construction du bijou, du fermoir et de la manière de le porter ;
- symbolique reprise depuis `stone_benefits` ou, pour les anciennes fiches sans ce champ, depuis leur contenu Shopify existant et les fiches de même pierre déjà structurées.

## Sept corrections avant publication

| Produit | Action sûre |
|---|---|
| `10693911839067` Savon à la framboise | Masquer l'onglet La pierre et retirer la valeur stone_name actuelle. La fiche prouve seulement une inclusion sombre veinée de clair ; aucun minéral exact n'est identifié. |
| `10693910004059` Savon à l'argan | Masquer l'onglet La pierre et retirer la valeur stone_name actuelle. La fiche prouve seulement une inclusion rose pâle ; aucun minéral exact n'est identifié. |
| `10693916918107` Savon à la verveine | Masquer l'onglet La pierre et retirer la valeur stone_name actuelle. La fiche prouve seulement une inclusion brun doré ; aucun minéral exact n'est identifié. |
| `10693915738459` Savon à la rose | Masquer l'onglet La pierre et retirer la valeur stone_name actuelle. La fiche prouve seulement une inclusion claire et translucide ; aucun minéral exact n'est identifié. |
| `10693913772379` Savon au miel | Masquer l'onglet La pierre et retirer la valeur stone_name actuelle. La fiche prouve seulement une inclusion ocre marbrée ; aucun minéral exact n'est identifié. |
| `10669859209563` Bracelet en bois de palo santo 10 mm | Masquer l'onglet La pierre et reclasser le contenu en matière bois. Le palo santo est ici du bois de Bursera graveolens, pas une pierre. |
| `10678649454939` Plaque Arbre de Vie en bois de tilleul - 10 cm | Masquer l'onglet La pierre et reclasser le contenu en matière bois. La plaque est en bois de tilleul, pas en pierre. |


## Fichiers de preuve

- file complète : `docs/audits/2026-09-07-active-stone-copy-rewrite-queue.csv` ;
- manifeste par identifiant Shopify : `docs/audits/2026-09-07-active-stone-copy-rewrite-manifest.json` ;
- source relue : `/private/tmp/milaura-shopify-audit-20260907-stone-rewrite.json`.

## Prochaine porte

La production locale ne vaut pas encore écriture Shopify. Le lot peut être écrit uniquement avec un snapshot avant, le ciblage exclusif du metafield `milaura.stone_description`, le traitement séparé des sept corrections de taxonomie et un pullback par identifiant après écriture.
