# Incident navigateur, Search Console et liens

Date : 2026-09-07. Tâche : MilAura SEO AEO GEO national.

## Incident résolu

Patrice signale toutes les pages en Not Found dans Chrome profil Patrice, capture 16:54. Lecture publique sans session : accueil, nouveautés, collection aigue-marine, pierres de naissance et nouvelle bague = HTTP 200 avec thème complet.

La tâche `Reformuler le texte sous galerie` confirme avoir ouvert une preview du thème privé 201065824603 dans ce même profil. Elle confirme ne pas avoir modifié le live 190430282075. Elle stoppe ses previews dans le profil Patrice et s'engage à utiliser un contexte isolé.

Rétablissement : navigation de l'onglet affecté vers https://milaura.fr/collections/nouveautes?preview_theme_id= avec valeur vide. La variante =0 avait été bloquée par Chrome. Après valeur vide, URL nettoyée, collection avec thème et produits. Rechargement du second onglet accueil auparavant Not Found : thème complet également. Cause retenue : état de prévisualisation partagé dans le navigateur, confirmé par la tâche concernée et par le retour du thème après sortie de preview. Aucun rollback, déploiement, changement DNS ou mutation Shopify réalisé pour cet incident.

## Travail livré

- `docs/audits/2026-09-07-seo-aeo-geo-lot1/search-console-six-pages.md`
- `docs/audits/2026-09-07-seo-aeo-geo-lot1/gsc-extrait-pages.csv`
- `docs/audits/2026-09-07-seo-aeo-geo-lot1/gsc-extrait-requetes.csv`
- `docs/audits/2026-09-07-seo-aeo-geo-lot1/20-opportunites-liens.md`

GSC 28 jours, 307 lignes pages affichées ; transcription ciblée car téléchargement natif CSV bloqué par Chrome. Disponibilités produit vérifiées par endpoints publics. Deux références fournisseur exactes confirmées par la tâche catalogue, son lot reste propriétaire de leur traitement. Pas de réactivation, redirection supplémentaire ou contact externe.

## Suite

Préparer six contenus coordonnés avec catalogue et cinq premiers dossiers de liens. Garder les anciens produits épuisés hors amplification tant que les offres ne sont pas prêtes. La sélection inclut deux guides stratégiques et deux produits dépendant du lot catalogue ; ce ne sont pas six offres immédiatement disponibles.

Branche : codex/milaura-seo-aeo-geo-lot1-20260907. Ce lot ne modifie que sa documentation et sa propre entrée de registre. Les modifications live des deux templates du lot précédent restent documentées dans le checkpoint précédent et à réconcilier par le propriétaire de l'intégration. Aucun nouveau déploiement dans ce lot.
