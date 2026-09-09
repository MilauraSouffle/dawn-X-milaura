# Correctif responsive du titre du resultat du quiz

Date : 2026-09-09 08:45 CEST
Statut : FERME, INTEGRE, POUSSE ET LIVE VERIFIE

## Defaut reproduit

Sur la capture iPhone transmise par Patrice, `Apaisement` etait coupe avant son dernier `t`. Le titre partageait une colonne trop etroite avec le visuel de la pierre. La regle Dawn globale `word-break: break-word` autorisait alors une coupure au milieu du mot.

## Correctif

Le composant commun des cinq resultats est corrige dans `sections/milaura-quiz.liquid` :

- le nom du profil utilise toute la largeur de son en-tete ;
- la pierre et son visuel restent composes en deux colonnes juste dessous ;
- les coupures intramot, l hyphenation et le retour force sont desactives sur le nom du profil ;
- la meme grille s applique du mobile au bureau.

Aucun texte, profil, pierre, recommandation, JavaScript, Mon Ecrin, produit, catalogue, panier ou autre composant n a ete modifie.

## Theme prive

- Theme : `201115566427`, `Copie de dawn-X-milaura/main`, non publie.
- Push cible : `sections/milaura-quiz.liquid` uniquement, sans suppression.
- Pullback : identique au fichier local.
- SHA-256 : `949f108d73423a90d346c04ebb070e40fbe73a05ae862adbc89cbb33f637b718`.
- Preview : `https://milaura-2.myshopify.com/pages/diagnostic-emotionnel?preview_theme_id=201115566427`.

## Validation

- Theme Check : zero erreur, seize avertissements historiques dans huit fichiers hors lot.
- Test dynamique des recommandations : PASS.
- Navigateur reel sur le theme prive : `320`, `360`, `390`, `430`, `749`, `768`, `989` et `1440` px.
- Profils controles a chaque largeur : `Apaisement`, `Protection`, `Serenite`, `Amour` et `Chance`.
- Resultat commun : une seule ligne par nom, texte contenu dans l en-tete, aucune intersection avec le visuel et aucun debordement horizontal de page.
- Captures temporaires : `/private/tmp/milaura-quiz-title-responsive-390.png` et `/private/tmp/milaura-quiz-title-responsive-1440.png`.
- Journal d erreurs navigateur : vide avant la recette de contenu forcee.

## Integration et live

- GO integration + live donne explicitement par Patrice le 2026-09-09.
- Commit source et integration : `e3832334`.
- Branche d integration distante avancee sans force-push de `4db95097` a `e3832334`.
- Theme live : `190430282075`, `dawn-X-milaura/main`.
- Push live cible : `sections/milaura-quiz.liquid` uniquement, sans suppression.
- Pullback live : identique au fichier local, SHA-256 `949f108d73423a90d346c04ebb070e40fbe73a05ae862adbc89cbb33f637b718`.
- Page publique : `https://milaura.fr/pages/diagnostic-emotionnel`.
- Theme public confirme dans le navigateur : `190430282075`.
- Recette publique repetee a `320`, `360`, `390`, `430`, `749`, `768`, `989` et `1440` px sur les cinq profils. Tous restent sur une ligne, dans l en-tete, sans intersection avec le visuel et sans debordement horizontal.
- Capture publique temporaire : `/private/tmp/milaura-quiz-title-responsive-live-apaisement-390.png`.
- Journal d erreurs navigateur public : vide.

Le checkout principal sale n a pas ete modifie, remis a zero ni utilise pour le deploiement. La reservation de ce lot est liberee.
