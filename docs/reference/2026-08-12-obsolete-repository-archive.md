# Archive du depot obsolete et des fichiers locaux

Date : 2026-08-12
Operation : deplacement recuperable, aucune suppression

## Clone obsolete

Ancien chemin actif :

`/Users/paesano/Documents/MilAura website/dawn-X-milaura 2`

Chemin d'archive :

`/Users/paesano/Documents/MilAura website/_archives/2026-08-12-repo-cleanup/obsolete-clones/dawn-X-milaura-2-obsolete`

Etat avant archivage :

- taille : 3,4 Go
- branche : `main`
- HEAD : `252f31b51fd714cbbe93c33293f32895635c8c82`
- reference locale `origin/main` : `b55b7494ac94919da70b7e65c4d153f6848d0f25`
- divergence annoncee par Git : 29 commits devant, 338 commits derriere cette reference locale
- 75 entrees suivies modifiees
- 87 entrees non suivies
- depot complet independant, pas un worktree Git gere

Conclusion : ce dossier est obsolete comme espace de travail. Il ne doit plus recevoir aucune modification, aucun commit et aucun deploiement.

Le dossier contient des fichiers prives tels que `.env`, `generation-nouveau-produit/.env`, `credentials/.env` et un repertoire `credentials/`. Leur presence a ete verifiee sans lire leur contenu. L'archive ne doit jamais etre poussee sur GitHub ni partagee.

Le pipeline produit actif reste :

`/Users/paesano/Documents/Agentic-Ops/milaura-automation/private-workspace/product-generation`

## Fichiers sortis du depot principal

Chemin d'archive :

`/Users/paesano/Documents/MilAura website/_archives/2026-08-12-repo-cleanup/primary-untracked`

Contenu deplace :

- `.codex-tmp-milaura-freeze/`
- `.codex-tmp-milaura-master-gate/`
- `backups/`
- trois images de bandeau rejetees
- deux copies numerotees de `milaura-announcement.liquid`

Empreintes des cinq fichiers creatifs :

| Fichier | SHA-256 |
| --- | --- |
| `milaura-announcement-amethyste-cluster-v1.webp` | `a469a054d52743ebc4fa34cd72ccf4029eecaac17ca93487ce0e56c5aa76285b` |
| `milaura-announcement-bracelet-serpent-v4.webp` | `dfda01b9685c1446360a83de687bb9475297a9c00edef268857fb8f89071f83b` |
| `milaura-announcement-jaspe-rouge-v1.webp` | `bc85849dc26c55b7bed58ce7bbb27c5cd80835d58352d015b48183bfc2758257` |
| `milaura-announcement 2.liquid` | `c303136ce038c2d4dea817a24283b5b6e7d9583025789ba34312476c33d514f5` |
| `milaura-announcement 3.liquid` | `fb3d028169140d0346506bd5e4cc6fc24173c22d5d279859a1aec9d8e08b58be` |

Ces fichiers restent recuperables, mais ne sont ni une source de verite ni une base creative approuvee.

## Regle de conservation

- Ne pas reutiliser ce clone comme depot actif.
- Ne pas copier ses fichiers dans le depot principal sans audit fichier par fichier.
- Ne jamais exposer ou versionner ses secrets.
- Une suppression definitive de l'archive exige une nouvelle decision explicite de Patrice.
