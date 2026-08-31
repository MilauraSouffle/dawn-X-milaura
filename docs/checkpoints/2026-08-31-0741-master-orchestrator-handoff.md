# Handoff master MilAura, pilotage allege et reprise globale

Date : 2026-08-31 07:41 CEST

Statut global selon Patrice : `ENVIRON 70 % - GROS DU DEVELOPPEMENT FAIT - POLISH ET AMELIORATIONS CIBLEES OUVERTS`

## Prompt de reprise court

```text
Salut Codex, reprends le travail du master MilAura. Lis AGENTS.md puis uniquement docs/checkpoints/2026-08-31-0741-master-orchestrator-handoff.md. Tu es le chef d orchestre : verifie l etat courant, suis le plan, protege les proprietaires, rappelle-moi ce qui est oublie et recadre seulement si necessaire. Ne refais pas le travail des sessions specialistes et ne lance aucune mutation. Mon Ecrin et Rentree Sodalite repartent chacun dans une session fraiche depuis leurs handoffs du 31/08.
```

Ne charge pas les anciens checkpoints ni le gros plan global a l ouverture. Utilise ensuite `rg` et les documents specialises uniquement lorsqu une decision concrete l exige.

## Pourquoi cette reprise

Patrice ferme la session master actuelle parce que son contexte est devenu trop important et que son fonctionnement a complexifie les executions. Trop d allers-retours ont ete faits entre session specialiste, master, preview, integration et live. Ces doubles parcours ont consomme du temps et augmente le risque d erreur.

La prochaine session master doit rester legere. Elle ne devient pas une seconde session de developpement et ne rejoue pas systematiquement les controles deja prouves par la session qui travaille directement avec Patrice.

## Nouveau role du master au 2026-08-31

Le master est le chef d orchestre du plan global. Il doit :

1. maintenir une vue courte des priorites, dependances et gates ;
2. enregistrer les proprietaires exacts des fichiers, branches, worktrees, themes et surfaces Admin ;
3. verifier les handoffs et les preuves aux moments de decision, sans reproduire tout le parcours de QA ;
4. detecter les chevauchements, les incoherences et les risques de live ;
5. rappeler a Patrice les sujets oublies, les gates encore ouvertes et le prochain choix utile ;
6. recadrer un lot seulement s il derive du plan ou met en danger une autre session ;
7. suivre l avancement du plan au fil des retours, avec trois priorites maximum.

Le master ne doit plus :

- executer l inventaire produit ;
- reprendre par defaut les commits, pushes, previews et deploiements d une session specialiste ;
- multiplier les allers-retours uniquement pour reproduire une preuve deja claire ;
- demander a une session fraiche de lire une longue chaine de checkpoints historiques ;
- transformer chaque correction visuelle en protocole lourd.

## Mode operatoire simplifie pour les sessions specialistes

La session qui travaille directement avec Patrice sur un lot en devient l operateur de bout en bout dans son perimetre exact : audit, discussion, code, QA, commit, push, preview, documentation et deploiement cible lorsque le GO correspondant est explicite.

Pour eviter deux proprietaires du live en meme temps :

- le master reserve d abord les fichiers, la branche, le worktree, le theme et les surfaces Admin ;
- si une integration canonique ou un live est demande, le master attribue temporairement cette execution a la session specialiste pour son seul lot ;
- la session specialiste integre uniquement son propre commit, pousse uniquement les fichiers reserves, fait le pullback et rend ses preuves ;
- le master controle ensuite le handoff et actualise le plan, sans rejouer toute l execution ;
- aucune session ne peut integrer ou deployer le travail d une autre session.

Un PASS technique, le GO visuel de Patrice, le GO integration, le GO Admin, la release applicative et le GO live restent des gates distinctes. Le nouveau fonctionnement simplifie les responsabilites, pas les autorisations.

## Verite Git au passage de relais

- Depot : `/Users/paesano/Documents/MilAura website/dawn-X-milaura`.
- Branche canonique : `codex/milaura-integration`.
- `origin/main` reste un miroir Shopify incomplet et ne doit jamais etre fusionne aveuglement.
- Handoff Mon Ecrin canonique : `0a325aee`, checkpoint `docs/checkpoints/2026-08-31-0734-mon-ecrin-70-percent-handoff.md`.
- Checkpoint Sodalite integre selectivement : `3c7fc828`, fichier `docs/checkpoints/2026-08-31-0735-sodalite-ui-polish-handoff.md`.
- Base fonctionnelle Sodalite fermee precedemment : `db5091bf` ; correctif replay : `bef6bdda`.
- Le fichier utilisateur non suivi `docs/codex-handoff 2.md` doit rester intact.
- Sauvegarde avant changement de doctrine : `/private/tmp/milaura-master-handoff-backup-20260831-0741`.

La nouvelle session doit refaire au debut seulement `git status --short --branch`, `git rev-parse HEAD`, `git rev-parse origin/codex/milaura-integration` et une lecture ciblee de `docs/workstreams.md` si elle doit attribuer un lot.

## Etat global du plan au 2026-08-31

Patrice estime l ensemble de la refonte a environ `70 %`. Cette estimation produit est la reference de pilotage. Le socle et le gros du developpement sont la. Le travail restant est principalement du polish visuel, des corrections reproduites et quelques ameliorations de developpement.

### Fondations fortes ou fermees

- identite visuelle, tokens, navigation, dock et architecture principale de la home ;
- PDP et hierarchie mobile titre/prix ;
- Ruban V3, ferme et live ;
- cookies et consentement navigateur du diagnostic, live ;
- lifecycle E1 a E3 et audit Mail E4 a E6 techniquement fermes ;
- fondation Mon Ecrin live avec release Shopify 7, backend et bridge quiz ;
- campagne Rentree Sodalite live sur la home, la navigation et la landing permanente ;
- inventaire et catalogue considerablement avances, avec workflow V3 et controles de contenu.

### Chantiers immediats

1. `Rentree / Septembre Sodalite` : feature live, environ 70 % selon Patrice. Reprise fraiche, audit visuel mobile-first avec Patrice, puis petits lots de polish. Handoff : `docs/checkpoints/2026-08-31-0735-sodalite-ui-polish-handoff.md`.
2. `Mon Ecrin` : fondation live, environ 70 % selon Patrice. Reprise fraiche pour reproduire les erreurs, classer P0/P1/P2, polir l UI et fermer quelques ameliorations de developpement. Handoff : `docs/checkpoints/2026-08-31-0734-mon-ecrin-70-percent-handoff.md`.
3. `Inventaire` : chantier permanent, isole et non bloquant pour le polish. Le Sheet `Inventaire canonique` reste la source de verite physique. La session inventaire discute avec Patrice et avance progressivement ; le master suit les totaux et les risques sans imposer un protocole produit par produit.

### Ensuite

- ouvrir la session SEO/AEO/GEO et readiness acquisition des que les principaux P1 visuels de Sodalite et Mon Ecrin sont stabilises ;
- ne pas attendre la fin theorique de l inventaire pour commencer l audit organique des routes permanentes ;
- ne pas lancer de paid large sans verification du stock reel des produits annonces, du cout complet, de la marge de contribution, du feed, du tracking, du consentement et du parcours de conversion ;
- continuer les fondations Pinterest organiques independamment des Ads ;
- reprendre Atelier des emotions et Pierres de naissance plus tard, en parallele, sans les transformer en bloqueurs de la progression actuelle.

## Etat commercial et catalogue a retenir

Photographie datee du 2026-08-30, a relire en direct avant toute decision produit :

- 182 references physiques positives ;
- 447 unites ;
- 96 produits `ACTIVE` ;
- 2 produits `DRAFT` ;
- 84 references absentes de Shopify ;
- 98 correspondances EAN et stocks exacts ;
- zero P0 dans l audit du catalogue actif ;
- 36 corrections de contenu fermees `PASS 36/36`.

Ce catalogue restera vivant. L objectif n est pas d attendre un inventaire definitivement termine, mais de garder les donnees utiles fiables et de ne promouvoir que des produits reellement disponibles et economiquement defendables.

## Routes saisonnieres et SEO

- `/collections/selection-de-karine` est la landing permanente actuellement utilisee par la home et la navigation ;
- `/collections/par-pierre-sodalite` est la route permanente Sodalite ;
- `/collections/selection-aout-2026` reste publique et ne doit pas etre supprimee ou redirigee sans audit Search Console, Analytics et backlinks ;
- le changement mensuel de la mise en avant home ne bloque pas le SEO long terme si les destinations permanentes restent stables ;
- aucune route finale ne doit revenir a `?view=selection-de-karine`.

## Themes et surfaces a ne pas confondre

- live MilAura : `190430282075` ;
- developpement general : `199421952347` ;
- ancien theme prive Sodalite : `200259043675`, non publie ;
- theme prive Atelier : `200007713115`, parque ;
- dev store Mon Ecrin : store `107347837273`, theme `205027279193` ;
- production Mon Ecrin : release `milaura-customer-accounts-7`, backend `https://mon-ecrin-api.milaura.fr`.

## Gates et rappels que le master doit surveiller

- aucun live par deduction : formule explicite de Patrice requise ;
- aucun produit, prix, stock, cout, statut, canal ou collection par un chantier UI ;
- aucun Ads large avant la gate commerciale et mesuree ;
- aucune suppression ou redirection de l ancienne selection Aout sans audit ;
- aucun credit creatif sans autorisation explicite ;
- Mail ne se rouvre que pour une anomalie reproduite ou une demande precise ;
- Ruban V3 ne se rouvre que sur un defaut reproductible ;
- Atelier attend toujours les preuves physiques, couts, compatibilites et prototypes ;
- les nouveaux lots doivent rester petits, mais pas artificiellement fractionnes si une session peut les finir proprement de bout en bout.

## Premier retour attendu du nouveau master

Le premier retour a Patrice doit tenir en un point court :

1. HEAD Git et etat des handoffs Mon Ecrin et Sodalite ;
2. sessions actives et conflits reels ;
3. trois priorites maximum ;
4. prochaines gates a ne pas oublier ;
5. aucune mutation tant que Patrice ne demande pas une reservation ou une execution.

Le master ne doit pas ouvrir lui-meme une session inventaire, developper une correction ou deployer un lot simplement parce qu il en a recu le handoff. Il organise la prochaine decision utile.
