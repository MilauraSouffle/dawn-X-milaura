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

## Branches GitHub archivees

Quatre branches historiques ont ete preservees sous des tags distants avant leur retrait des branches actives :

| Ancienne branche | Tag d archive | Commit preserve |
| --- | --- | --- |
| `codex/milaura-mobile-dock-2026-08-07` | `archive/2026-08-12/legacy-mobile-dock` | `252f31b51fd714cbbe93c33293f32895635c8c82` |
| `ux-mobile-commando` | `archive/2026-08-12/legacy-ux-mobile-commando` | `a586d88765fa88bb8d4b50dd283f634d47984845` |
| `backup/avant-push-20251214-0929` | `archive/2026-08-12/backup-avant-push-20251214` | `f7c60c8b14809cb64e1cd3920e29cc87014ad140` |
| `backup/avant-restore-20251213-1846` | `archive/2026-08-12/backup-avant-restore-20251213` | `7b44cf9eadba08b222c749ce63d9af2409dd1768` |

GitHub conserve ensuite deux branches actives : `main`, miroir automatique Shopify, et `codex/milaura-integration`, branche source et integration.
