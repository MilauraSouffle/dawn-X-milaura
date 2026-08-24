# C1 OTP M5, pre-reservation du test unique

Date : 2026-08-24 14:18 CEST

## Statut

`PRE-RESERVE - AUCUN OTP DEMANDE`

M4 est ferme avec `ADDRESS_ROUTE_CORRECTED - OTP NOT REQUESTED`. Le compte synthetique RNO1 du dev store affiche `contact@milaura.fr`, zero commande et zero depense. M5 est le seul prochain lot autorisable : une demande OTP unique, declenchee manuellement par Patrice, puis une qualification de livraison et, si le code arrive, son entree par Patrice dans la meme session.

## Reservation Git

- proprietaire d execution : tache C1 `01a03261-3f60-7e43-bf6e-bce01a7eeeb1` ;
- master : seul proprietaire de l integration et de tout live ;
- depot prive : `Onora-studio/onora-ops` ;
- branche a creer apres GO : `codex/milaura-c1-otp-single-test-20260824` ;
- base exacte : `ff6cc0616b9bedee2323a9c5d3a197659170f260` ;
- worktree a creer apres GO : `/Users/paesano/Documents/_worktrees/agentic-ops-milaura-c1-otp-single-test-20260824` ;
- tracking : `origin/codex/milaura-c1-otp-single-test-20260824` ;
- zone d ecriture exclusive : `docs/milaura/shopify-admin-canonical/c1-otp-single-test/**` ;
- application RC, backend, theme, anciens lots C1, Mail et tout autre fichier restent en lecture seule.

La branche est absente localement et sur origin au preflight. Le worktree est absent. La base `ff6cc061` et son origin sont propres et alignes.

## Environnement autorise

- dev store uniquement : `milaura-c1-preview`, ID `107347837273` ;
- un seul compte synthetique : RNO1 `C1-1 Complet`, deja corrige vers `contact@milaura.fr` ;
- page native Customer Accounts du dev store seulement ;
- aucun theme requis ou autorise ; le theme prive RC `205027279193` reste inactif ;
- aucun `shopify app dev`, backend, tunnel, flag RC, Admin ou Mail dans M5.

## Operateur et sequence

1. C1 cree la branche et le worktree reserves, puis confirme M5-0 sans ecriture hors zone.
2. C1 ouvre ou indique la page native Customer Accounts du dev store et s arrete avant toute demande.
3. Patrice saisit ou confirme lui-meme `contact@milaura.fr`, puis declenche exactement une fois l envoi du code.
4. Aucun bouton de renvoi, aucun second essai et aucune autre adresse.
5. Si le code arrive, Patrice le saisit lui-meme dans la meme session. Le code ne doit jamais etre copie dans Codex, un fichier, une preuve ou un message.
6. C1 constate seulement l authentification ou l absence de livraison. Aucun scenario Mon Ecrin, bridge ou purge n est execute dans M5.
7. C1 redige une preuve expurgee, commit, push et rend un worktree propre. La session authentifiee peut rester ouverte pour un futur lot RNO3 et RNO4, sans lancer ce lot.

## Verdicts bornes

- `OTP_DELIVERED_AUTH_SESSION_READY` : un code recu, saisi par Patrice et authentification native constatee ;
- `OTP_NOT_DELIVERED` : aucune reception apres dix minutes, sans renvoi ;
- `OTP_REQUEST_BLOCKED` : Shopify refuse la demande ou affiche un rate limit ;
- `AUTH_SESSION_BLOCKED` : code recu mais authentification native non confirmee.

## Interdictions

- aucune modification Admin, compte, email, commande ou autre cliente ;
- aucune lecture, copie ou conservation de l OTP par Codex ;
- aucun renvoi, second OTP, autre adresse ou autre compte ;
- aucun app dev, backend, tunnel, bridge, purge, theme, push Shopify ou flag ;
- aucun email, template, reglage Mail ou observation d une autre boite ;
- aucun `write_orders`, deploy, release, C1-2, bascule de comptes, integration ou live.

## Gate de sortie

M5 ferme uniquement la livraison et la session native. Meme en cas de PASS, RC4 et RC8 ne ferment pas. Le master doit auditer le retour puis reserver separement la reprise RNO3 et RNO4 avant tout app dev, backend, bridge, purge ou QA Mon Ecrin.

## GO exact requis

`GO C1 OTP M5 - DEMANDE UNIQUE D UN CODE SUR CONTACT@MILAURA.FR, DECLENCHEE MANUELLEMENT PAR PATRICE, SANS AUTRE ADMIN NI REPRISE RUNTIME`
