# E3 - Lifecycle actif - Preview Admin prete

Date : 2026-08-20 14:30 CEST

Statut : copie checkout E3 inactive, corrigee, testee, exportee et versionnee. Aucun swap live. Gate `GO LIVE E3` requis.

## Base, proprietaire et Git

- theme canonique controle avant la documentation finale : `codex/milaura-integration` au commit `fbe601d6b12d07a42808bc58321096a9c53dfb5c`, identique au distant et propre ;
- depot prive : `Onora-studio/onora-ops` ;
- branche E3 : `codex/milaura-e3-lifecycle-actif-20260820` ;
- commit E3 final pousse : `c8067b98624c1770016da1c02af92f2c9ac06aef` ;
- worktree E3 : `/Users/paesano/Documents/_worktrees/agentic-ops-milaura-e3-20260820` ;
- proprietaire : Codex, tache `E3 - Lifecycle actif`.

`origin/main` n a pas ete fusionne. Aucun fichier theme, produit, compte client, consentement, cross-sell, Atelier des emotions ou ScratchToReveal n a ete modifie.

## Autorisation appliquee

Le message `CONFIRME E3 ADMIN` a autorise uniquement la copie inactive, la nouvelle condition, les tests Flow, l export et la capture des IDs.

Mutations effectuees :

1. duplication du checkout actif dans une copie inactive ;
2. nom Flow `E3 PREVIEW - Checkout abandonne - 2026-08-20` ;
3. ajout de `abandonment.daysSinceLastAbandonmentEmail > 14` ;
4. correction du graphe pour imposer le chemin `stock vrai -> exclusion 14 jours vraie -> email` ;
5. organisation et sauvegarde du graphe ;
6. tests Flow en mode preview ;
7. export natif final ;
8. controle en lecture seule des apercus Messaging desktop et mobile.

Aucun bouton `Activer`, `Desactiver`, `Modifier` l email ou `Soumettre` le test n a ete utilise. Aucun email E3 n a ete envoye.

## IDs finaux

| Objet | ID | Etat au 2026-08-20 14:30 CEST |
| --- | --- | --- |
| Ancien parent checkout | `68816896347` | actif, preserve |
| Ancienne activite checkout | `204165415259` | preservee |
| Nouveau parent Messaging | `73633464667` | inactif |
| Nouvelle activite email | `210569822555` | active sous parent inactif |
| Nouveau workflow Flow | `01a01f0e-0022-79fa-bd86-9754f5185a4c` | inactif |
| Version Flow exportee | `01M0FGW0127DAJB5VN1RSN9DYD` | finale Admin |

La liste Flow confirme la preview inactive sans execution recente et l ancien checkout actif. Messaging confirme zero envoi pour le nouveau parent.

## Preuve structurelle

Source native finale dans le depot prive :

`docs/milaura/shopify-admin-canonical/e3-lifecycle/snapshots/2026-08-20/flow/01a01f0e-0022-79fa-bd86-9754f5185a4c/workflow.flow`

- SHA-256 : `d0c941b1323a00185909b41e19b12146486401054d7c7d8217f4b841e546a7e8` ;
- delai : 10 heures ;
- conditions historiques conservees : Online Store, total positif, aucune commande, aucun checkout plus recent, stock disponible ;
- nouvelle condition : exclusion stricte superieure a 14 jours ;
- liens finaux : stock vrai vers la condition 14 jours, puis condition vraie vers `Send marketing email` ;
- audience : `Clients abonnes au marketing par e-mail` ;
- sujet clone : `Complete your order` ;
- copywriting change par E3 : non ;
- lien de desabonnement present.

Un premier export intermediaire a revele que la condition etait en branche parallele et ne protegeait pas l email. Cette structure a ete retiree, le graphe a ete relie sequentiellement et seul l export final corrige est versionne comme source canonique.

## Tests

- positif final, 2026-08-20 14:21 CEST : valeur evenement `9999`, seuil `14`, condition vraie, email sur le chemin ;
- frontiere stricte, 2026-08-20 14:20 CEST : seuil temporaire `9999`, valeur evenement `9999`, condition fausse, email hors du chemin ;
- restauration : seuil final `14` sauvegarde et reteste positif ;
- desktop : produits, prix, CTA, footer et desabonnement visibles, aucun clipping observe ;
- mobile : produits, prix, CTA, footer et desabonnement visibles, aucun clipping observe ;
- aucune identite cliente versionnee ;
- aucun envoi et aucune action Flow executee en mode test.

Validations privees :

- `scripts/verify_baseline.py` passe pour consultation, panier, ancien checkout et nouvelle preview ;
- JSON valides ;
- SHA-256 valide ;
- contrat des sept liens sequentiels valide ;
- `git diff --check` passe ;
- aucun em dash et aucun identifiant client dans le paquet E3 ;
- branche privee propre et identique au distant au SHA `c8067b98624c1770016da1c02af92f2c9ac06aef`.

## Etat des gates

- consultation et panier restent actifs et conformes aux sources E1 ;
- nouveau checkout E3 techniquement pret mais inactif ;
- Klaviyo reste sans flow consultation, panier ou checkout actif ;
- aucun ancien reglage checkout abandonne visible dans `Parametres > Paiement` ;
- Remarketing Shop reste actif ;
- ancien checkout `68816896347` reste actif ;
- test reel de desabonnement non execute car il exige un envoi controle ; le lien et l audience sont controles techniquement ;
- `GO LIVE E3` reste obligatoire avant toute deduplication ou activation.

## Procedure live autorisee seulement apres `GO LIVE E3`

1. verifier une derniere fois Klaviyo sans flow d abandon actif ;
2. desactiver Remarketing Shop ;
3. desactiver l ancien checkout `68816896347` ;
4. activer immediatement le nouveau parent `73633464667` ;
5. confirmer qu un seul checkout est actif et que consultation et panier sont inchanges ;
6. surveiller les erreurs, executions et doublons pendant 24 heures.

Rollback : desactiver `73633464667`, verifier l ancien couple `68816896347` / `204165415259`, puis reactiver l ancien parent seulement si necessaire. Ne jamais laisser les deux checkout actifs simultanement.
