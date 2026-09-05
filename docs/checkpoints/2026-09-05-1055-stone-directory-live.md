# Annuaire et landings par pierre : live

Date : 2026-09-05 10:55 CEST.
Statut : GO visuel et GO live explicites de Patrice executes ; verification publique conforme.

## Resultat

- URL : https://milaura.fr/pages/bijoux-par-pierre
- 39 cartes de pierre, 40 landings en incluant la route historique Jaspe rouge.
- Mobile : treize rangees de trois cartes maximum, fleches et defilement tactile. Recherche et compteur global retires sur demande de Patrice.
- Sodalite conserve sa composition validee et le bracelet Horus. Aigue-marine conserve la bague argent modele 01 et ses trois photos.
- Theme live : `190430282075`, role `live`, nom `dawn-X-milaura/main`.
- 49 fichiers publics deployes avec `--only`, `--nodelete`, `--strict`, `--allow-live`. Le template reserve a la preview est exclu. Le layout live est preserve.
- Dix affectations de template existantes modifiees par ID, trente nouvelles collections publiees sur Boutique en ligne uniquement, publication `320846594395` observee dans Admin.

## Verifications

- Theme Check : zero erreur, 16 avertissements historiques hors lot. JavaScript et `git diff --check` conformes.
- Pullback live : 49/49 fichiers identiques au checkout canonique.
- 40/40 collections presentes sur l'endpoint public sans cookie ; affectations et inclusions relues par ID dans Admin API.
- 40/40 pages publiques HTTP 200 sans `view` ni `preview_theme_id`, un H1, trois onglets, canonical propre, produit star attendu, aucun message Liquid.
- Produits des 40 pages compares aux references configurees encore publiques : aucun manquant ni inattendu. Tous les compteurs du hub correspondent au rendu public.
- Hub desktop 1440 et mobile 390 : 39 cartes, aucune recherche, aucun lien de preview, aucun debordement, espacement 40/24 px sous l'introduction.
- Fleche mobile : 1/3 vers 2/3. Aigue-marine, Sodalite et Ambre : onglets Entretien et Choisir & porter actifs a 390/1440, un seul onglet selectionne, aucun debordement.
- Parcours navigateur : accueil > Choisir par pierre > hub ; Ambre > produit ; retour Explorer toutes les pierres > hub complet.

## Catalogue concurrent

Les colliers `collier-quartz-rose-boho-dore`, `collier-aventurine-verte-boho-dore` et `collier-obsidienne-noire-boho-dore` sont passes en DRAFT dans la tache catalogue pendant la release. Les templates les masquent automatiquement. Les trois compteurs ont ete corriges a 10, 6 et 4. Le lot configure 125 produits distincts, dont 122 actuellement publics. Aucune mutation produit, variante, stock, prix, galerie, canal produit ou Ads dans cette release.

Lors de leur reactivation par la tache catalogue, leurs references sont deja configurees dans les landings. Remettre les trois compteurs a jour apres verification publique. Ne pas activer les produits par deduction.

## Git et reprise

- Source validee : `d3eca97b`, branche `codex/milaura-stone-directory-20260905`.
- Integration : `3d29f3a8` dans `codex/milaura-integration`.
- Compteurs adaptes : `3492023f`, pousse et deploye.
- Le checkout principal conserve les modifications concurrentes independantes. Aucun reset, stash global, ajout global ou integration du miroir Shopify.
- Les fichiers live preexistants du lot ont ete compares a HEAD avant publication : quatre identiques. La tache catalogue a avance ses propres documents et son commit `5ed1ca71` pendant la release ; ils sont preserves.
- Worktree source propre, integre et retire apres la release ; branche distante conservee comme preuve. Theme prive `200974958939` conserve.
- Matrice durable : `docs/audits/2026-09-05-stone-directory-mapping.json` ; ses `current_template` sont les valeurs du releve initial. Apres release, les 40 suffixes effectifs correspondent a `planned_template`.

Preuves hors Git : `/private/tmp/milaura-stone-release-20260905/`. Ce dossier contient la sauvegarde avant live, les logs CLI, les 49 pullbacks, les mutations d'affectation, les captures de selection des 30 IDs et du canal unique, les reponses publiques, les 40 comparaisons produit et les controles navigateur.

La mise en ligne est terminee. Les anciens paragraphes de preparation mentionnant des collections non publiees sont historiques. Pour une retouche future, repartir de la branche canonique et de l'etat public frais, pas du theme prive.
