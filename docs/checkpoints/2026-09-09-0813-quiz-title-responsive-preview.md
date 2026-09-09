# Correctif responsive du titre du resultat du quiz

Date : 2026-09-09 08:13 CEST
Statut : PASS TECHNIQUE SUR THEME PRIVE, GO VISUEL ET LIVE EN ATTENTE

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

## Gates

Le correctif peut etre commit et pousse sur sa branche source. Il ne doit pas etre integre ni deploye sur le theme live `190430282075` sans nouveau GO explicite de Patrice apres lecture de la preview.
