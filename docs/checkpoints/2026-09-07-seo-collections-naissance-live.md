# SEO collections et parcours naissance

Date : 2026-09-07. GO explicite de Patrice sur les corrections et parcours. Certification LFG confirmée par Patrice, point clos et formulation préservée.

## Shopify Admin exécuté

- Collection Bagues `677666718043` : suppression de « six » dans la description et la meta-description. Nouvelle description : « Découvrez nos bagues en pierres naturelles. Chaque fiche précise la pierre, la matière, les dimensions, la taille et le caractère réglable ou non du modèle. » Nouvelle meta : « Découvrez les bagues en pierres naturelles MilAura. Comparez les pierres, matières, dimensions et tailles précisées sur chaque fiche. »
- Bracelets `669431791963` : title « Bracelets en pierres naturelles | MilAura ».
- Colliers `669431988571` : title « Colliers en pierres naturelles | MilAura ».
- Sodalite `679358234971` : title « Bijoux en sodalite : bracelets, colliers et bagues | MilAura ».
- Aigue-marine `677833834843` : description actualisée selon les types de bijoux présents, ajout d'un lien vers `/pages/pierres-de-naissance`. Le titre SEO, les handles, produits et stocks ne sont pas modifiés.

## Thème

`templates/page.milaura-pierres-naissance.json` : texte du mois de mars et lien HTML vers `/collections/par-pierre-aigue-marine`. Lecture du fichier live avant édition identique à la base locale. Push ciblé sur `190430282075`, `--nodelete --allow-live --strict`, puis pullback identique.

`templates/collection.milaura-pierre-aigue-marine.json` : la description Shopify n'était pas rendue dans cette landing. Ajout du composant existant `milaura-collection-intro` sur fond transparent après le guide, pour rendre le lien retour visible sans repousser les produits. Le remplacement de bague déjà live est conservé dans la source. Comparaison structurée à la lecture live : seul ce composant et sa position sont ajoutés.

Theme Check : zéro erreur, 16 avertissements existants. JSON valide. Recette Chrome publique : onglet Mars sélectionné, nouveau lien visible, nouvelle bague à 69,90 EUR présente avec bouton Ajouter actif. Panier utilisateur inchangé ; aucun achat.

## Mesures et suite

Première réponse native ChatGPT sans mention textuelle ou lien vers MilAura sur la demande bague argent/aigue-marine moins de 80 EUR. Un test seulement, autres moteurs et panel complet non mesurés. GA4 relu : 89 sessions Organic Search sur 28 jours, 26 sur sept jours ; aucune source IA explicitement identifiée parmi les 14 combinaisons source/canal. Voir `docs/audits/2026-09-07-seo-aeo-geo-lot1/plan-10-visites-jour.md` pour méthode, limites et plan de six semaines.

Aucun Ads, Merchant Center, paramétrage tracking, contact ou achat de lien. Branche `codex/milaura-seo-aeo-geo-lot1-20260907`, worktree `/Users/paesano/Documents/MilAura website/_worktrees/seo-aeo-geo-lot1-20260907`. Pas de merge au checkout principal ; ses changements concurrents sont préservés. Le propriétaire d'intégration doit rapprocher les deux templates modifiés avant un futur déploiement global.

Verification finale du 2026-09-07 : pullbacks des deux templates identiques ; clic reel Mars vers Aigue-marine et lien retour au guide verifies dans Chrome. Six pages HTTP 200 ; titres et suppression du nombre figé confirmes, empreintes dans `verification-live-lot2.json`. Premier controle HTTP a observe la propagation de cache puis l’absence de rendu de la description Aigue-marine ; ajout du composant existant et nouvelle verification conformes.
