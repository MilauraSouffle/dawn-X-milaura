# CTA visiteur du resultat quiz, live verifie

Date : 2026-09-14 16:31 CEST

## Demande et perimetre

Patrice a constate que le CTA `Continuer sans compte` du resultat du quiz ne modifiait que le message local. Son comportement attendu est une navigation vers Mon Ecrin pour un visiteur, sans enregistrer le diagnostic.

Un seul fichier Shopify est modifie : `snippets/milaura-quiz-account-save.liquid`.

## Changement publie

Le bouton visiteur est devenu un lien natif vers `settings.milaura_c1_mon_ecrin_url`, avec `routes.account_url` comme repli. L attribut `data-milaura-c1-skip-save` a ete retire de ce CTA. Le bridge C1 n intercepte donc plus le clic et aucune ecriture de diagnostic n est lancee.

Le libelle `Continuer sans compte`, le style, la cible tactile et les etats focus existants sont conserves.

## Verification

- Source live relue avant ecriture : SHA-256 `8af53689441efc18f9e113a6754d73ded91c822c44357d91338591c5c9f78876`, identique au snapshot d integrite du 2026-09-14.
- `git diff --check` conforme.
- Controle copywriting MilAura : PASS, 349 fichiers controles.
- Theme Check : zero erreur, 16 avertissements historiques hors fichier cible.
- Push cible sans suppression vers le theme public `190430282075` : succes.
- Pullback cible bit a bit identique : SHA-256 `aba4a76b4ec12ce1087c0ebaa64529ce78847dab6cf7b725267159ae016588a4`.
- HTML public de `/pages/diagnostic-emotionnel` relu : `Continuer sans compte` est un lien natif vers la page Mon Ecrin configuree et ne contient aucun attribut `data-milaura-c1-skip-save`.

## Retour arriere borne

Le fichier juste avant livraison est conserve dans `/private/tmp/milaura-quiz-guest-cta-live-before-20260914-1428/snippets/milaura-quiz-account-save.liquid`. Un retour arriere doit relire le live puis repousser ce seul fichier, sans pousser un checkout entier.

## Etat Git

- Branche : `codex/milaura-quiz-guest-mon-ecrin-20260914`
- Commit fonctionnel initial : `fda69910`
- Checkout integration `codex/milaura-integration` non touche.
