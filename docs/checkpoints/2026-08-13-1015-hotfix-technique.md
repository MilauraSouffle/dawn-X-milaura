# Checkpoint, hotfix technique MilAura

Date : 2026-08-13 10:15 CEST
Session : Claude, frontend et design, GO explicite de Patrice
Branche : `claude/milaura-hotfix-technique-20260813`, poussee sur origin
Themes : developpement `199421952347` uniquement. Aucun push live.
Statut : defaut de code corrige et verifie. Trois defauts de donnee identifies,
en attente d'autorisation de Patrice.

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

## Valeurs proposees, en attente d'autorisation

| Champ | Actuel | Propose |
| --- | --- | --- |
| Titre SEO `bijoux-par-pierre` | `Bijoux par pierreBijoux par pierre naturelle \| MilAura`, 54 | `Bijoux par pierre naturelle \| MilAura`, 37 |
| Titre SEO `pierres-de-naissance` | `Pierres de naissancePierres de naissance par mois \| MilAura`, 59 | `Pierres de naissance par mois \| MilAura`, 39 |
| Meta `diagnostic-emotionnel` | 116 caracteres fautifs | `Quelques questions pour trouver la pierre qui vous correspond. Le diagnostic MilAura vous oriente vers les bijoux et mineraux adaptes a votre intention.`, 152 |
| Meta description globale | 178 caracteres | `Bijoux, mineraux et bougies en pierres naturelles. Chaque fiche precise la pierre, la matiere et les dimensions. Expedie depuis notre atelier a Metz.`, 149 |

Pour les deux titres, la correction est purement soustractive : retrait du
prefixe duplique, le titre SEO voulu est conserve tel quel.

La meta description globale proposee n'avance que des faits deja publics :
l'atelier de Metz figure deja dans le bandeau d'engagement, et la formule sur le
contenu des fiches est une tournure sanctionnee par le guide.

## Verifications

| Controle | Resultat |
| --- | --- |
| Theme Check | 29 offenses avant, 29 apres |
| `git diff --check` | aucun probleme |
| `title`, `H1`, `canonical` | inchanges par ce lot |
| JSON-LD | inchange par ce lot |
| Push live | aucun |

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
3. GO distinct pour deployer le correctif de code sur le live.
