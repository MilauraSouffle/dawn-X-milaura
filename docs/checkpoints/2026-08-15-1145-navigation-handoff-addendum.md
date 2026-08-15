# Addendum au handoff Navigation V2

Date initiale : 2026-08-15 11:45 CEST
Mise a jour finale : 2026-08-15 11:56 CEST
Branche d'integration : `codex/milaura-integration`
Nature : mise a jour factuelle post-handoff, sans mutation theme ni Shopify

## Etat Recommandations actualise

Le worktree Recommandations a evolue pendant la cloture Navigation V2. Son etat final verifie remplace le releve intermediaire du checkpoint `2026-08-15-1138-navigation-home-v2-handoff.md` :

- branche `codex/milaura-recommendation-system-20260814` ;
- commit de lot `413596f7` pousse sur origin ;
- merge d'integration `f89f57b5` ;
- documentation live `ab28ee99`, puis QA panier et diagnostic `137bb321` ;
- GO visuel a 100 % et GO live explicite de Patrice ;
- theme live `190430282075` ;
- huit references uniques, seize cartes rendues, boucle, pause, reprise, clavier et mobile 390 px valides ;
- pullback live 46/46 identique ;
- worktree retire proprement apres validation.

Aucun fichier Recommandations n'a ete modifie, stage, merge ou deploye par la session Navigation V2.

## Risque JSON-LD observe

Le controle HTTP public final du 2026-08-15 a montre dans la description JSON-LD `WebSite` la formulation globale suivante : les pierres seraient `toutes certifiées par le Laboratoire Français de Gemmologie`.

Cette affirmation n'est pas prouvee au bon perimetre et contredit la regle canonique MilAura : une certification ne se publie que lorsqu'elle est rattachee au produit ou a la reference concernee.

La source technique est identifiee : `layout/theme.liquid` rend `shop.description` dans les noeuds JSON-LD `Organization` et `WebSite`. La formulation fautive vient donc de la description de boutique Shopify Admin, pas d'un texte ecrit en dur dans le theme. Elle doit etre corrigee dans un lot SEO distinct. Aucun fichier theme ni reglage Shopify n'a ete modifie dans cet addendum.

## Etat de publication

- Navigation V2 et section 3 : live, inchanges ;
- Hero, bandeau et navbar : live, inchanges ;
- Recommandations : live, pullback 46/46 identique ;
- JSON-LD : observation documentee, correction non executee ;
- Shopify Admin : aucune mutation dans cet addendum.
