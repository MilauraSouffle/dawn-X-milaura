# E3 - Lifecycle actif - Gate avant Admin

Date : 2026-08-20 13:26 CEST

Statut : paquet prive versionne et controles Admin en lecture seule termines. Aucune mutation Shopify E3. Gate Klaviyo resolue ; confirmation Admin requise.

## Base et proprietaire

- theme canonique a l ouverture E3 : `codex/milaura-integration` au commit `c111aea7fec67c2fddfce3d472b0e13a3ca2bb1d` ; HEAD courant `44723088554bacecbc87e515dbfb733d85ffd8c7` apres un commit documentaire distinct ;
- depot prive : `Onora-studio/onora-ops` ;
- branche E3 : `codex/milaura-e3-lifecycle-actif-20260820` ;
- base E1 : `0478c2820e7a11aebb51e8535245566a4cfe20a7` ;
- HEAD E3 pousse : `9c5735965e36d907e7ba85476363d21476a669e1` ;
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
- Klaviyo a ete audite directement dans une session authentifiee sans accepter l extension d acces aux cartes-cadeaux et au credit boutique ;
- l organisation affichee est `ONORA`, avec une integration Shopify active vers MilAura, ancienne URL `milaura-2.myshopify.com`, nouvelle URL `dvsi0r-1q.myshopify.com` ;
- la liste reelle Klaviyo contient exactement un flow manuel `MilAura Retraction Submitted` (`Sq5fbd`) et aucun flow d abandon consultation, panier ou checkout cree ou actif ;
- les parcours d abandon visibles dans l onboarding Klaviyo sont des recommandations non creees ;
- l integration Klaviyo dans le theme et les formulaires sur site sont desactives, aucun formulaire Klaviyo n est cree, la synchronisation des abonnes email Shopify vers `Liste d adresses e-mail` est active et la synchronisation SMS n est pas configuree ;
- `Parametres > Paiement` ne montre aucun ancien reglage d email checkout abandonne ;
- aucun evenement de test Flow, aucune sauvegarde, aucune activation, aucune desactivation et aucun email E3.

## Gate Klaviyo resolue

La preuve d absence de doublon Klaviyo est acquise sans extension de scopes : un seul flow manuel existe et aucun flow d abandon n est cree ou actif. La demande d acces supplementaire reste en attente et ne doit pas etre acceptee dans E3.

Le nom d organisation `ONORA` et la synchronisation des abonnes MilAura vers cette organisation sont un sujet de gouvernance distinct. Aucun profil client n a ete ouvert ou versionne. Ce sujet ne bloque pas la certification E3 de non-recouvrement, mais interdit de construire des campagnes MilAura dans cet espace sans decision explicite.

Le seul chevauchement restant avant activation finale est `Remarketing Shop`, qui reste actif jusqu au `GO LIVE E3` distinct.

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
