# Preview checkout MilAura V2, 2026-09-13 10:30 CEST

## Statut

PREVIEW PRIVEE ENREGISTREE. Aucune publication du checkout ni du theme public.

- configuration active preservee : `Ma boutique` ;
- brouillon checkout : `MilAura Checkout UX 2026-09-13` ;
- identifiant du profil brouillon : `9395241307` ;
- theme prive utilise pour les libelles : `201115566427` ;
- forfait verifie dans Shopify Admin : Basic ;
- theme public `190430282075` non modifie par ce lot.

Cette V2 remplace la direction visuelle de la premiere preview du 2026-09-13 a 09:40 CEST.

## Corrections V2

- suppression de l en-tete desktop pleine largeur, juge trop vide ;
- en-tete replace dans la colonne du formulaire, avec logo vers `https://milaura.fr/` et icone panier vers `https://milaura.fr/cart` ;
- fond du recapitulatif remplace par l Aigue-marine ecume `#DCEBE8` ;
- accents et actions maintenus en Encre prune `#2F222D` ;
- fond principal blanc conserve pour la lisibilite du formulaire ;
- aucun grand panneau Or ou Nacre ajoute.

## Libelles du theme prive

- `Paiement express avec vos informations enregistrees` ;
- `Ou continuer sans compte` ;
- `Vos coordonnees` ;
- `J ai deja un compte MilAura` ;
- `Comment souhaitez-vous etre livre ?` ;
- `A domicile` ;
- `En point relais`.

Les apostrophes et accents typographiques sont presents dans Shopify. Ils sont simplifies ici uniquement pour respecter la convention ASCII des documents du depot.

Le lien de connexion ne promet pas la creation automatique d un compte. Le consentement marketing reste volontaire et n a pas ete supprime : l adresse fournie pour executer une commande ne vaut pas automatiquement consentement aux courriels commerciaux.

## Limite du forfait Basic

Shopify Plus est requis pour ajouter un bloc libre dans les etapes information, livraison ou paiement. Le brouillon Basic ne peut donc pas recevoir proprement :

- un lien texte visible `Retour au panier` en plus de l icone panier native ;
- un rappel dynamique des avantages 30, 50 et 80 euros dans l en-tete checkout ;
- une phrase editoriale supplementaire placee librement sous Shop Pay ou sous le titre Livraison.

Les sorties natives restent accessibles et fonctionnelles : logo vers la boutique et icone panier vers le panier. Aucun contournement fragile ni application supplementaire n a ete ajoute.

## Verification visuelle et technique

- vraie URL de checkout prive ouverte avec le theme `201115566427` et le profil brouillon `9395241307` combines ;
- desktop controle a 1440 x 1000 px ;
- mobile controle a 390 x 844 px ;
- largeur du document egale a la largeur de la fenetre a 390 px, sans debordement horizontal ;
- fond Aigue-marine ecume calcule present en `rgb(220, 235, 232)` ;
- accents Encre prune calcules presents en `rgb(47, 34, 45)` ;
- nouveaux libelles visibles dans le checkout prive ;
- `locales/fr.json` relu depuis le theme prive et identique octet pour octet a la source du worktree ;
- logo vers la boutique et icone vers le panier confirmes dans le DOM ;
- aucun message d erreur navigateur ; seul le message informatif de hot reload du theme prive est present.
- Shopify Theme Check : 0 erreur et 16 avertissements historiques hors du fichier de traduction modifie.

Captures locales :

- `/private/tmp/milaura-checkout-preview-v2-textes-desktop-2026-09-13.png` ;
- `/private/tmp/milaura-checkout-preview-v2-textes-mobile-2026-09-13.png`.

## Gate restante

La publication du profil `MilAura Checkout UX 2026-09-13` et la mise en ligne des libelles du theme prive exigent le GO checkout live explicite de Patrice. La mission Hero reste en attente jusqu a la fermeture de ce gate Checkout.
