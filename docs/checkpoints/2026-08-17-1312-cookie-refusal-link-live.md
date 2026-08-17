# Lien de refus cookies live

Date : 2026-08-17 13:12 CEST

Statut : integre, pousse Git, deploye sur le theme Shopify live et verifie.

## Decision

Patrice a valide le compromis suivant : remplacer le bouton visuel `Je refuse` par l action texte sobre `Continuer sans accepter`, sans cacher le refus, sans ajouter d etape et sans reduire sa cible tactile.

Le controle reste techniquement un element `button` afin de declencher le choix de consentement sans navigation. Son apparence est celle d un lien : fond transparent, aucune bordure, graisse 500 et soulignement Or mat. La cible tactile reste a 44 px sur mobile. `J accepte` reste l action principale et `Je choisis mes cookies` reste l action secondaire.

## Perimetre

Deux fichiers seulement ont ete modifies :

1. `assets/milaura-cookie-consent.css`
2. `snippets/milaura-cookie-consent.liquid`

Le JavaScript, Shopify Customer Privacy, les categories, la persistance, le dialogue detaille, la gemme, le footer et le reste du theme sont inchanges.

## Git

- Branche source : `codex/milaura-cookie-refusal-link-20260817`.
- Base : `f63749665e2b900056b43810fa757ce84f981afd`.
- Commit source et integration fast-forward : `32b37e4e`.
- Branche canonique : `codex/milaura-integration`.
- Branche source poussee sur `origin`.
- Worktree source retire proprement apres integration et validation live.

## Shopify

- Theme de developpement : `199421952347`.
- Theme live : `190430282075`.
- Push live limite aux deux fichiers avec `--only`, `--nodelete`, `--strict` et `--allow-live`.
- Aucun autre fichier, reglage Shopify, produit, stock, prix, metafield, email ou automatisation modifie.

## Verifications

- `git diff --check` : reussi.
- `shopify theme check` : 293 fichiers inspectes, 0 erreur et 17 avertissements preexistants dans 9 fichiers hors perimetre.
- Theme de developpement : libelle `Continuer sans accepter`, element `button`, fond transparent, bordure a 0, graisse 500, soulignement et hauteur tactile minimale 44 px confirmes dans le DOM et les styles calcules.
- Pullback du theme de developpement : 2/2 identiques au canonique.
- Pullback live : 2/2 identiques au canonique.
- HTML public `https://milaura.fr/` : nouveau libelle et nouvelle feuille CSS servis.
- CSS public : regles transparentes, sans bordure, soulignees et en graisse 500 servies.

SHA-256 canoniques et live :

- `assets/milaura-cookie-consent.css` : `07383877bb93a58453cdb467c424416574771facb37de84fa3d009e0b35935d9`
- `snippets/milaura-cookie-consent.liquid` : `891cdccc402cc71993cb128d8df1ff443893c2454efc7f511feedc7ddf837106`

Le comportement de refus n a pas ete recode : l attribut `data-cookie-reject` et le JavaScript precedemment valide avec la vraie API Shopify sont inchanges.

## Miroir Shopify

Le commit automatique Shopify `7193ed80` ajoute maintenant `assets/milaura-cookie-consent.css` au miroir et met a jour le snippet. Le miroir `origin/main` reste toutefois incomplet pour reconstruire le composant, car `assets/milaura-cookie-consent.js` et `assets/milaura-cookie-gem.webp` y sont toujours absents. La regle reste donc inchangee : ne pas fusionner `origin/main` aveuglement.

## Suite

Le lot cookies est ferme. La prochaine priorite transversale est l audit des emails, notifications transactionnelles, comportement apres inscription et automatisations lifecycle. Les popups newsletter et ScratchToReveal restent hors de ce lot.
