# Handoff section Home Pieces rares refusee

Date : 2026-09-25 18:32 CEST

Statut : `SESSION FERMEE, VERSION MOBILE REFUSEE PAR PATRICE, LIVE ACTUEL A REMPLACER`

## Decision de fermeture

Patrice refuse la version finale produite par cette session et confie la reprise a une autre session. Aucun nouveau changement visuel, rollback ou deploiement ne doit etre execute depuis cette session.

Le PASS technique obtenu ne vaut pas validation visuelle. Le rendu mobile actuellement en ligne ne doit pas etre cite comme approuve, conserve comme reference ou reutilise par deduction. Le bureau avait auparavant ete juge reussi pendant les iterations, mais la formulation finale de Patrice, `ta version est refusee`, annule toute presomption de GO global. La prochaine session doit donc reprendre en lecture seule et faire confirmer le perimetre qu elle conserve.

## Etat live verifie a la fermeture

- Theme public : `190430282075`.
- Route : `https://milaura.fr/`.
- Destination du CTA : `https://milaura.fr/collections/pieces-rares`.
- Copy actuellement en ligne : `PIECES RARES & DE COLLECTION`, `Certaines pierres meritent une place a part.`, description sur les geodes, mineraux et bijoux, CTA `Decouvrir les pieces rares`.
- Bureau : composition horizontale avec buste en tenue noire et collier lapis sur fond turquoise.
- Mobile sous `820px` : panneau turquoise de texte en premier, puis portrait vertical du mannequin et collier lapis. Cette composition mobile est celle explicitement refusee.
- Le fichier live a ete relu apres le dernier push et etait strictement identique au fichier local. QA technique a `390 x 844` : ordre texte puis image, asset mobile servi, aucun debordement horizontal, CTA vers la bonne collection. Cette preuve technique ne constitue pas un GO visuel.

## Fichiers et actifs concernes

- `sections/milaura-hero-portal.liquid`
- `templates/index.json`
- `assets/milaura-tokens.css`
- `assets/milaura-hero-pieces-rares-lapis.webp`
- `assets/milaura-hero-pieces-rares-lapis-mobile.webp`

L asset mobile `milaura-hero-pieces-rares-lapis-mobile.webp` a ete genere par edition native a partir de la composition bureau. Il est refuse comme solution finale. Ne pas le presenter a nouveau comme une creation validee.

## Historique Git du lot refuse

- Base avant le lot : `5956faf4`.
- `adbb6a2a` : hero Pieces rares bureau et copy live.
- `313d2f0b` : maintien du panneau texte mobile.
- `791f6aa5` : correction du voile mobile.
- `584a9652` : ajout du portrait vertical mobile refuse.
- `8c060c4e` : ordre mobile texte puis image.

Le checkout d integration est aligne avec `origin/codex/milaura-integration` au moment de la fermeture. Le HEAD courant peut continuer a avancer a cause des sessions paralleles. Toujours relire `git status`, `git log` et le live avant toute reprise.

## Validations executees

- `git diff --check` : PASS.
- Theme Check : 0 erreur, 16 avertissements historiques hors lot.
- Push Shopify cible avec `--allow-live --nodelete --strict` : succes.
- Pullback du dernier fichier publie : identique.
- QA publique mobile `390 x 844` : techniquement PASS, visuellement REFUSEE par Patrice.
- QA publique bureau `1440 x 900` realisee avant la derniere inversion mobile : aucun debordement, asset bureau servi, destination CTA correcte.

## Etat du checkout a ne pas nettoyer

Le checkout contient des changements concurrents qui ne proviennent pas de cette fermeture : `AGENTS.md` modifie, exports CSV du concours non suivis, checkpoints Pinterest non suivis, `docs/project-state-ledger.md` non suivi et dossier `docs/visuals/2026-09-25-rare-pieces-mannequin-reset/` non suivi. Ne pas les ajouter, supprimer, restaurer ou nettoyer globalement.

## Reprise exacte pour la prochaine session

```text
Reprends la section Home Pieces rares depuis docs/checkpoints/2026-09-25-1832-home-rare-pieces-rejected-handoff.md. Commence par lire AGENTS.md, docs/project-state.md et docs/workstreams.md, puis inspecte la Home publique en lecture seule sur mobile reel et bureau. La version mobile live issue des commits 584a9652 et 8c060c4e est explicitement refusee par Patrice et ne constitue pas une reference. Ne deduis aucun GO visuel des PASS techniques. Fais confirmer avec Patrice ce qui reste conserve, notamment le bureau et la copy, puis propose ou implemente uniquement la nouvelle composition demandee. Compare le live, le HEAD courant et templates/index.json avant toute edition car plusieurs sessions travaillent sur la Home. Stage uniquement les fichiers nommes. Aucun push live avant le GO exact de Patrice pour la nouvelle version.
```

## Risque restant

La version refusee reste visible sur le theme public tant que la session suivante ne la remplace pas. Aucun rollback automatique n a ete tente afin de ne pas contredire la decision de Patrice de faire refaire la section par une autre session.
