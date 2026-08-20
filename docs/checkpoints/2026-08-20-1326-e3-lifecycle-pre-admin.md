# E3 - Lifecycle actif - Gate avant Admin

Date : 2026-08-20 13:26 CEST

Statut : paquet prive versionne et controles Admin en lecture seule termines. Aucune mutation Shopify E3. Confirmation Admin et decision Klaviyo requises.

## Base et proprietaire

- theme canonique : `codex/milaura-integration` au commit `c111aea7fec67c2fddfce3d472b0e13a3ca2bb1d` ;
- depot prive : `Onora-studio/onora-ops` ;
- branche E3 : `codex/milaura-e3-lifecycle-actif-20260820` ;
- base E1 : `0478c2820e7a11aebb51e8535245566a4cfe20a7` ;
- HEAD E3 pousse : `f26007f9a77093e2ecc370162ba01327e93dd8ba` ;
- worktree : `/Users/paesano/Documents/_worktrees/agentic-ops-milaura-e3-20260820` ;
- proprietaire : Codex, tache `E3 - Lifecycle actif`.

Le checkout Agentic-Ops principal etait deja tres sale et n a pas ete modifie. `origin/main` du theme n a pas ete fusionne. Aucun fichier du theme, aucun compte client, aucun consentement, aucun produit et aucun live theme ne sont dans E3.

## Paquet prive livre

Chemin : `docs/milaura/shopify-admin-canonical/e3-lifecycle/`.

- `README.md` : plan Admin ecran par ecran, gates, activation et rollback ;
- `manifest.json` : IDs, UUIDs, activites, delais, audience, conditions et ecarts ;
- `certification-matrix.json` : douze cas de consentement, conversion, stock, frontiere 14 jours, deduplication, desabonnement et rendu ;
- `scripts/verify_baseline.py` : verification automatique des exports natifs E1 ;
- `E3-EXECUTION-RECORD.md` : journal de preuve anonymise.

Validations :

- contrat baseline passe pour les trois parcours ;
- JSON valides ;
- `git diff --check` passe ;
- aucun caractere em dash ;
- branche privee propre et identique au distant apres push.

## Verite structurelle

| Parcours | Parent | Activite | Etat |
| --- | ---: | ---: | --- |
| Consultation | `72198390107` | `208689070427` | conforme : 2 h, arret apres progression ou commande, stock, exclusion 14 jours |
| Panier | `68816961883` | `204165480795` | conforme : 1 h, arret apres checkout ou commande, stock, exclusion 14 jours |
| Checkout | `68816896347` | `204165415259` | incomplet : 10 h, Online Store, total, commande, checkout plus recent et stock ; exclusion 14 jours absente |

Decision : ne pas reconstruire consultation et panier sans benefice. Construire seulement un checkout de remplacement dans une copie inactive, ajouter l exclusion 14 jours, certifier puis effectuer un swap atomique sous GO live distinct.

## Preuves Admin en lecture seule

- les trois parents ci-dessus sont toujours actifs ;
- une execution consultation a refuse l action email car le destinataire n etait pas abonne au marketing, preuve operationnelle de la frontiere consentement ; aucune identite cliente n est versionnee ;
- une execution panier recente s est terminee sans erreur ;
- checkout a atteint l action marketing sur des runs recents mais reste sans exclusion 14 jours ;
- `Shop > Parametres` affiche `Remarketing Shop` actif ;
- Klaviyo est installe et connecte, mais son ouverture demande une extension d acces aux cartes-cadeaux et au credit boutique ; rien n a ete accepte ;
- `Parametres > Paiement` ne montre aucun ancien reglage d email checkout abandonne ;
- aucun evenement de test Flow, aucune sauvegarde, aucune activation, aucune desactivation et aucun email E3.

## Blocages et decision requise

La deduplication ne peut pas etre certifiee tant que les flows Klaviyo restent invisibles. Ordre recommande, du plus sobre au plus intrusif :

1. ouvrir directement le tableau de bord Klaviyo authentifie et verifier les flows sans etendre ses scopes Shopify ;
2. seulement si indispensable, accepter l extension d acces Klaviyo apres revue des nouvelles permissions ;
3. si Klaviyo est confirme inutile, envisager sa desinstallation dans un lot destructif distinct avec export et rollback.

Aucune de ces trois decisions n est implicite dans E3.

## Autorisations suivantes

`CONFIRMÉ E3 ADMIN.` autorisera uniquement :

- creation d une copie checkout inactive ;
- ajout de l exclusion inter-parcours de 14 jours ;
- sauvegarde sans activation ;
- creation des evenements de test Flow necessaires ;
- export natif et capture des nouveaux IDs ;
- aucun swap, aucune desactivation de Shop, aucun email client.

Un `GO LIVE E3` distinct restera obligatoire avant :

- desactiver le Remarketing Shop ;
- desactiver l ancien checkout `68816896347` ;
- activer son remplacement certifie.

## Rollback prevu

1. Avant live : supprimer ou laisser inactive la copie E3 sans toucher aux parents actifs.
2. Apres live : desactiver le nouveau checkout, puis reactiver `68816896347` apres verification de son activite `204165415259`.
3. Ne jamais garder les deux checkout actifs simultanement.
4. Ne jamais reecrire le snapshot E1 ; capturer un nouveau snapshot E3 avec ses nouveaux IDs et checksums.
