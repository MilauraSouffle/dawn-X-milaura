# Checkpoint Ruban V3 adaptatif, Lot 2 Higgsfield

Date : 2026-08-28 09:20 CEST

Session Codex : `01a00e7f-4a1e-7903-9e64-9394199a27d5`

Branche : `codex/milaura-ruban-v3-matrix-20260817`

Worktree : `/Users/paesano/Documents/MilAura website/_worktrees/ruban-v3-matrix-20260817`

## Autorisation

Patrice a autorise le Lot 2 apres le Lot 1. La decision reste : Higgsfield uniquement, Grok exclu et fidelite produit bloquante.

Le Lot 3 sur theme de developpement reste supprime. Le Lot 4 vise le live, mais aucun push live n est autorise par ce checkpoint.

## Production

- plateforme : Higgsfield ;
- modele : Seedance 2.5 dans Higgsfield ;
- Grok : non utilise ;
- videos : 8 sur 8 terminees ;
- format : H.264, 960 x 960, 24 fps, 4,041667 s, sans audio ;
- cout : 26 credits par video, 208 credits au total ;
- solde : 1 039 avant, 831 apres ;
- erreurs finales : 0.

Le set de huit ambassadeurs couvre potentiellement 75 des 123 sources associables du snapshot du 2026-08-28 si les huit videos recoivent le GO visuel.

## Gate source

Les galeries generees precedemment n ont pas ete retenues comme preuve quand elles modifiaient un fermoir, une monture, un fil ou un detail de pierre.

Les videos partent des originaux fournisseur exacts. Quatre sources portaient un watermark. Il a ete masque uniquement sur une zone de fond sans produit :

1. bracelet Clea amethyste : `x=0..185`, `y=530..714` ;
2. collier quartz rose : `x=0..220`, `y=690..929` ;
3. boucles sodalite : `x=0..205`, `y=640..839` ;
4. collier obsidienne : `x=0..165`, `y=570..720`.

Aucun pixel du produit n a ete retouche.

## QA technique

Verdict Codex : `PASS` technique sur les huit videos.

Controles effectues :

- quatre instants repartis sur chaque video, huit pour le pilote Mira ;
- pierre et couleur ;
- nombre et ordre des perles quand applicable ;
- chaine, fermoir, chainette et anneaux ;
- fils, enroulements et montures ;
- breloques et pendentifs ;
- proportions et geometrie ;
- absence d audio, de texte et de logo ;
- codec, dimensions, cadence, duree, taille et SHA-256.

Le manifeste canonique contient les huit jobs, sources, URLs, medias Higgsfield, hashes et criteres de controle :

- `config/ruban-v3-video-manifest-2026-08-28.json`.

## Gate encore ouverte

Le `PASS` technique ne vaut pas GO creatif. Le statut reste `PENDING_PATRICE` pour les huit videos.

Par consequent :

- `runtime_video_status` reste `draft` ;
- aucune video n est encore `approved` pour le moteur ;
- les Rubans prets a afficher restent a 0 ;
- aucune video n a ete chargee dans Shopify ;
- aucun metafield n a ete cree ;
- aucun fichier theme n a ete modifie ;
- aucun deploiement n a ete effectue.

## Reprise

1. Patrice regarde les huit videos et donne un GO ou un rejet par produit.
2. Toute video rejetee est regeneree avant le Lot 4.
3. Apres GO visuel complet, passer les huit statuts a `approved` dans le manifeste et reconstruire le payload.
4. Implementer le Lot 4 dans la branche, sans theme de developpement.
5. Tester localement, preparer le rollback, puis demander le dernier GO explicite avant le push cible sur le theme live `190430282075`.
