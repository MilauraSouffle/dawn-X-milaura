# Checkpoint concours 10 jours, 10 cadeaux

Date : 2026-09-08 16:28 CEST

## Resultat

- Etude, strategie d'acquisition, mecanique du concours et brouillon de reglement produits.
- Landing Shopify interactive realisee dans le worktree dedie et chargee sur un theme de preview non publie.
- Le coffret du hero s'ouvre au toucher et au clavier, puis revele le cadeau du jour.
- Les dix lots sont presentes dans le calendrier, avec alternance equitable Instagram et Facebook.
- Le bloc newsletter du footer est conserve et peut etre remplace de facon reversible par l'appel au concours.

## Perimetre technique

- Branche : `codex/milaura-concours-20260908`.
- Worktree : `/Users/paesano/Documents/MilAura website/_worktrees/milaura-concours-20260908`.
- Base : `2833fa4e`.
- Theme Shopify de preview : `201111306587`, `MilAura Concours 10 jours Preview 2026-09-08`, non publie.
- Theme live `190430282075` : non modifie.
- Page Shopify Admin finale : non creee.

## Verification

- `shopify theme check` : 358 fichiers, 0 erreur, 16 avertissements historiques dans 8 fichiers hors lot.
- JSON du template et du footer valides avec `jq` apres retrait du commentaire auto-genere Shopify.
- QA visuelle : desktop 1440 px et mobile 360, 390 et 430 px.
- Interaction du coffret verifiee : etat developpe, image, titre, precision et valeur du lot reveles.
- Navigation clavier, libelles ARIA et reduction de mouvement prevus.
- Neuf images sources converties en WebP, poids total reduit d'environ 19 Mo a environ 681 Ko.
- Pullback du theme de preview : contenu identique pour les 13 fichiers cibles. Shopify ajoute seulement son commentaire auto-genere au template JSON.

## Decision marketing

- Paid concentre sur Instagram et Facebook, avec depart 65 pour cent Instagram et 35 pour cent Facebook.
- TikTok organique uniquement pour ce sprint. Snapchat non retenu. Pinterest explicitement exclu.
- Une publication principale epinglee par reseau sert de registre de participation. Les contenus quotidiens y renvoient.
- Aucun partage, repost ou identification d'un tiers ne doit etre exige ou recompense.
- Objectif de 1 000 nouveaux abonnes en dix jours traite comme objectif ambitieux, pas comme prevision garantie.

## Gates encore fermes

- Validation visuelle par Patrice.
- Confirmation des dates, de l'organisateur legal, du territoire, du delai de reponse et des conditions du bon d'achat.
- Confirmation des couts d'achat reels, de l'expedition et du budget media disponible dans l'enveloppe totale de 500 euros.
- Creation de la page Shopify et affectation du template.
- Integration Git par le proprietaire du checkout principal.
- Publication du theme, activation du lien footer, diffusion sociale et depense Meta.

## Risques a traiter avant lancement

- Le bandeau cookies et le badge de qualite existants occupent une grande partie du premier ecran mobile. Ils n'ont pas ete modifies dans ce lot.
- La restriction Meta `Religion` du dataset reste ouverte. Le concours peut etre diffuse en notoriété, engagement ou trafic, mais il ne faut pas promettre une mesure Purchase fiable.
- Le cout commercial affiche des cadeaux est de 299,90 euros hors expedition. La repartition des 500 euros doit se faire sur le cout de revient reel, pas sur la valeur publique.
- La cible de 1 000 abonnes impose 100 gains nets par jour a partir d'une base verifiee de 112 abonnes cumules.
