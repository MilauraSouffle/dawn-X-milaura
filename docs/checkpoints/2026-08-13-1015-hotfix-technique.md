# Checkpoint, hotfix technique MilAura

Date : 2026-08-13 10:15 CEST
Session : Claude, frontend et design, GO explicite de Patrice
Branche : `claude/milaura-hotfix-technique-20260813`, poussee sur origin
Themes : developpement `199421952347` puis live `190430282075`, sur GO explicite.
Statut : defaut de code corrige, verifie et LIVRE LIVE le 2026-08-13 sur GO
explicite de Patrice. Trois defauts de donnee identifies : Patrice a donne son
accord, mais l'ecriture est bloquee par les scopes du jeton Admin. Valeurs
finales fournies pour saisie manuelle.

## Methode

Investigation en lecture seule d'abord, cause racine avant toute correction.
Aucun symptome corrige sans avoir remonte a sa source.

## Defauts 1 et 2 : une seule et meme cause

Les erreurs JavaScript `SearchForm` et `PredictiveSearch` **sont** le double
chargement. Ce ne sont pas deux defauts distincts.

### Cause exacte

`layout/theme.liquid` sert deja les deux scripts :

- ligne 76, `search-form.js`, sans condition ;
- ligne 577, `predictive-search.js`, si `settings.predictive_search_enabled`,
  qui vaut `true` dans `config/settings_data.json`.

`sections/milaura-navbar.liquid` lignes 4 et 5 les rechargeait. Or
`assets/search-form.js` ligne 1 declare `class SearchForm extends HTMLElement`
et `assets/predictive-search.js` ligne 1 declare
`class PredictiveSearch extends SearchForm`, toutes deux au niveau global. Une
seconde execution du meme fichier leve une `SyntaxError` de redeclaration.

La navbar etant rendue sur toutes les pages, les deux erreurs apparaissaient sur
l'integralite du site public.

### Fichier responsable

`sections/milaura-navbar.liquid`, deux balises `script`.

### Correction minimale

Retrait des deux balises. `cart-notification.js` est conserve : la navbar est le
seul endroit qui le charge.

Un commentaire explique la dependance a `layout/theme.liquid` pour eviter que la
duplication ne soit reintroduite.

### Tests avant et apres

| Mesure | Avant, live | Apres, developpement |
| --- | --- | --- |
| Balises `search-form.js` | 2 | 1 |
| Balises `predictive-search.js` | 2 | 1 |
| Erreurs `pageerror` | 2 sur 5 routes | 0 sur 5 routes |
| `customElements.get('search-form')` | defini | defini |
| `customElements.get('predictive-search')` | defini | defini |
| Composant `predictive-search` upgrade | oui | oui |

Routes testees : accueil, `/collections/par-pierre-aigue-marine`,
`/search?q=bague`, `/pages/bijoux-par-pierre`, `/pages/pierres-de-naissance`.

Test fonctionnel : ouverture de la recherche, saisie du mot `bague`, **10
resultats predictifs** rendus, aucune erreur pendant l'interaction.

### Verification console

Les seules entrees restantes sont l'iframe Shop Pay de Shopify, violation
`frame-ancestors` et 403. Elles sont presentes sur toute boutique Shopify et ne
proviennent pas du theme.

## Defauts 3, 4 et 5 : la donnee, pas le code

Ces trois defauts viennent de Shopify Admin. Le theme est innocent. Aucune
correction de code n'a ete faite, conformement a la consigne.

### Preuve pour le defaut 3, titres concatenes

`layout/theme.liquid` rend `{{ page_title }}` une seule fois. Le snippet
`meta-tags.liquid` ligne 2 assigne `og_title = page_title`, egalement une seule
fois. Les deux surfaces affichent la meme chaine doublee, donc `page_title`
lui-meme est doublee.

Contre-epreuve : sur le meme template, `/pages/choisir-sa-pierre` et
`/pages/cadeaux-anniversaire-de-mariage` ne presentent aucun doublon. Deux pages
sur quatre sont touchees, ce qui exclut le template.

Conclusion : le champ Titre SEO de ces deux pages contient le titre de page
concatene au titre SEO voulu, probablement une erreur de saisie ou de pipeline.

### Defaut 5, propagation de la description globale

Une seule chaine, trois surfaces publiques :

| Surface | Source |
| --- | --- |
| `meta name="description"` de l'accueil | `page_description` |
| `og:description` | `snippets/meta-tags.liquid` ligne 5, `page_description \| default: shop.description` |
| JSON-LD `WebSite.description` | `layout/theme.liquid` ligne 63, `shop.description` |

Corriger le champ dans Online Store, Preferences, Meta description corrige les
trois d'un coup.

Griefs, au regard de `docs/reference/2026-08-12-copywriting-milaura.md` :

- 178 caracteres, tronque par Google au-dela d'environ 158 ;
- emoji `💎`, qui se retrouve aussi dans les donnees structurees ;
- `La reference` est un superlatif non documente ;
- `pierres certifiees par gemmologue` est une promesse globale de certification.
  Le guide exige qu'un certificat soit rattache au produit concerne ;
- `bougies rituels` est une faute d'accord ;
- `L'alliance du sacre et de la qualite` est une phrase decorative sans
  information commerciale ;
- `energetiques` glisse vers la promesse therapeutique.

### Defaut 4, meta description du diagnostic

Page `/pages/diagnostic-emotionnel`. Six fautes de langue : `emotionnel` sans
accent, `creee`, `mineraux` sans accent, `emitions`, `ameliore` sans accord,
pas de majuscule initiale. Plus deux manquements de charte : tutoiement alors
que le vouvoiement est obligatoire, et `ameliore vos emotions`, qui est une
promesse de resultat interdite sur les pierres.

## Valeurs a saisir

Les valeurs finales figurent plus bas, section `Valeurs finales a saisir`, apres
la confirmation de Patrice sur la certification LFG. Pour les deux titres, la
correction est purement soustractive : retrait du prefixe duplique, le titre SEO
voulu est conserve tel quel.

## Verifications

| Controle | Resultat |
| --- | --- |
| Theme Check | 29 offenses avant, 29 apres |
| `git diff --check` | aucun probleme |
| `title`, `H1`, `canonical` | inchanges par le correctif de code |
| JSON-LD | inchange par le correctif de code |
| Push live | `sections/milaura-navbar.liquid` uniquement, pullback identique bit a bit |

## Point releve, non retenu comme defaut

Le H1 de l'accueil semble duplique a la lecture du `textContent`. Verification
faite, il s'agit du motif d'accessibilite correct : un `span.visually-hidden`
porte la phrase complete pour les lecteurs d'ecran, un `span[aria-hidden]` porte
la composition visuelle. Ce n'est pas un defaut.

## Observation hors perimetre

`layout/theme.liquid` ligne 49 a 56 place la `description` de l'Organization
dans une branche `else` du logo : la fiche Organization porte soit un logo, soit
une description, jamais les deux. Le logo etant present, l'Organization n'a
aucune description. C'est une faiblesse de balisage, pas un defaut public. Non
traitee, hors perimetre.

## Ce qui necessite Patrice

1. Autorisation explicite pour les quatre ecritures dans Shopify Admin.
2. Confirmation factuelle sur `pierres certifiees par gemmologue` : toutes les
   pierres sont-elles certifiees, ou seulement une partie du catalogue ? La
   reponse conditionne la formulation.
3. GO distinct pour deployer le correctif de code sur le live. DONNE et livre.

## Acces Admin API : ce qui bloque

Patrice a autorise l'ecriture directe dans Shopify Admin le 2026-08-13. Le jeton
du pipeline `milaura-automation/private-workspace/product-generation` a ete
reutilise selon sa convention existante, `SHOPIFY_ACCESS_TOKEN`, sans jamais
exposer sa valeur. Il authentifie correctement et a permis de confirmer la
description globale a la source, 178 caracteres, emoji inclus.

Ses scopes sont : `read_files`, `read_inventory`, `read_locations`,
`read_metaobjects`, `read_products`, `write_files`, `write_inventory`,
`write_metaobjects`, `write_products`.

Manquent `read_content` et `write_content`. La requete `pages` renvoie
`ACCESS_DENIED`. Les titres et descriptions SEO des pages ne sont donc pas
modifiables avec ce jeton.

La description globale, elle, vit dans Online Store puis Preferences. Aucun
chemin d'ecriture par l'Admin API n'a ete trouve pour ce champ, quel que soit le
scope.

Deux voies pour Patrice :

1. saisie manuelle des quatre valeurs dans l'interface, quelques minutes ;
2. ajout de `write_content` a l'application privee, ce qui debloque les trois
   champs de page mais laisse la description globale en saisie manuelle.

## Preuve de certification, confirmee le 2026-08-13

Patrice confirme que la totalite des pierres MilAura passe par le Laboratoire
Francais de Gemmologie, a Paris, a leur arrivee en France. Le LFG est fonde en
1929, accredite COFRAC ISO 17025 depuis 2021, et est le seul organisme accredite
sur le territoire francais a delivrer des rapports d'analyse sur la totalite des
gemmes.

L'argument est donc documente et rattache a un perimetre complet. Il redevient
utilisable, et gagne a nommer le laboratoire plutot qu'a ecrire
`certifiees par gemmologue`, qui ne prouve rien.

## Valeurs finales a saisir

| Ou | Champ | Avant | Apres |
| --- | --- | --- | --- |
| Page `bijoux-par-pierre` | Titre SEO | 54 car., prefixe duplique | `Bijoux par pierre naturelle \| MilAura`, 37 |
| Page `pierres-de-naissance` | Titre SEO | 59 car., prefixe duplique | `Pierres de naissance par mois \| MilAura`, 39 |
| Page `diagnostic-emotionnel` | Meta description | 116 car., six fautes, tutoiement, promesse interdite | `Quelques questions pour trouver la pierre qui vous correspond. Le diagnostic MilAura vous oriente vers les bijoux et mineraux adaptes a votre intention.`, 152 |
| Preferences | Meta description globale | 178 car., emoji, superlatif, faute d'accord | `Bijoux, mineraux et bougies en pierres naturelles, toutes certifiees par le Laboratoire Francais de Gemmologie. Expedie depuis notre atelier a Metz.`, 148 |

La description globale alimente trois surfaces d'un coup : meta description de
l'accueil, `og:description` et JSON-LD `WebSite.description`.
