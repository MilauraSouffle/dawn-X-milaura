# Ruban V3 : audit d eligibilite et matrice commerciale

Date : 2026-08-17

## Verdict

La matrice de travail est construite pour les 268 produits publics disponibles au sens du storefront. Elle ne constitue pas une autorisation de production ni de publication.

Le catalogue permet de proposer 53 associations fortes et 77 associations plausibles a revoir, tout en preservant les 9 mappings V1 deja actifs. En revanche, 110 produits n ont aucun complement suffisamment honnete dans le catalogue actuel et 19 produits doivent etre exclus du Ruban V3.

Aucun produit n est commercialement pret selon le contrat de donnees strict. Cela ne signifie pas que les produits sont invendables. Cela signifie que la preuve documentaire disponible ne suffit pas encore pour lancer un lot V3 : quantite physique ou disponibilite fournisseur actuelle, cout complet, contribution, delai, media fidele et droits media doivent etre confirmes.

## Perimetre et garanties

- Lecture du catalogue public au 2026-08-17 : 268 produits avec au moins une variante `available=true`.
- Aucune mutation Shopify.
- Aucun code Ruban V3.
- Aucun nouveau metafield.
- Aucune video produite.
- Aucun appel Higgsfield.
- Aucun deploiement.
- Les 9 mappings V1 actifs restent inchanges.
- Decision canonique appliquee : Higgsfield uniquement, Grok exclu, aucune transformation visuelle du produit acceptable.

## Resultats

| Statut | Nombre | Interpretation |
| --- | ---: | --- |
| `ACTIF_V1` | 9 | Mapping public existant, conserve hors gate V3 |
| `CANDIDAT_FORT` | 53 | Matching visible fort, encore bloque par les preuves commerciales |
| `CANDIDAT_A_REVOIR` | 77 | Association plausible a valider par famille |
| `AUCUN_MATCH_HONNETE` | 110 | Ne pas forcer une recommandation artificielle |
| `EXCLU_CATALOGUE` | 19 | 18 baguettes minerales plus 1 cadeau interne |

Repartition des 268 produits : 143 bijoux, 78 pierres et mineraux, 26 rituels, 14 soins, 6 accessoires et 1 produit interne.

## Etat des preuves

- 258 produits disposent uniquement de la preuve publique storefront. `available=true` ne prouve pas le stock physique.
- 4 references ont une confirmation Patrice du 2026-08-08 indiquant stock et bonne marge, mais la quantite et le cout complet manquent encore.
- 6 references supplier-backed disposent d elements Camilla dates du 2026-08-11 : cout produit, disponibilite fournisseur et droits photo. La disponibilite fournisseur et la contribution complete doivent etre reconfirmees.
- La gate commerciale stricte donne donc `0 PRET` au 2026-08-17.

## Regles de matching appliquees

1. Bijou vers bijou : meme pierre, autre type de bijou. La meme finition renforce le score.
2. Pendentif vers chaine : candidat uniquement, avec controle manuel de la beliere et de la longueur.
3. Objet mineral ou bougie avec pierre : bijou de la meme pierre, presente comme complement thematique et non comme parure exacte.
4. Bol chantant vers maillet : candidat fonctionnel avec compatibilite de taille a verifier.
5. Roll-on avec pierre : bijou de meme pierre possible, sans promesse therapeutique.
6. Aucun candidat sous le seuil n est force. Le Ruban doit etre masque ou l offre completee.

Les raisons commerciales presentes dans le classeur sont des brouillons de validation. Elles ne sont pas du copywriting public approuve.

## Consequence sur les videos

La premiere matrice produit 48 ambassadeurs video uniques avant filtrage commercial. Ce nombre ne remplace pas l estimation initiale de 25 a 40 videos et ne constitue pas un quota de production.

Le volume reel ne peut etre calcule qu apres :

1. validation des associations par famille ;
2. verification de l eligibilite commerciale des produits ambassadeurs ;
3. consolidation des produits partageant exactement le meme media ;
4. controle des assets source haute fidelite ;
5. pilote Higgsfield accepte visuellement par Patrice.

## Decision demandee a Patrice

Le premier GO attendu porte uniquement sur la logique commerciale de la matrice, famille par famille. Il ne vaut pas GO Higgsfield, Shopify, developpement, integration ou mise en ligne.

Ordre recommande :

1. valider les associations fortes et les familles prioritaires dans le classeur ;
2. recontroler stock, fournisseur, cout et contribution pour les ambassadeurs retenus ;
3. reduire la matrice au sous-ensemble reellement eligible ;
4. recalculer le nombre de videos ;
5. produire un seul pilote Higgsfield avec le produit reel comme reference stricte.

## Livrable

Classeur : `/Users/paesano/.codex/visualizations/2026/08/17/01a00e7f-4a1e-7903-9e64-9394199a27d5/outputs/01a00e7f-4a1e-7903-9e64-9394199a27d5/milaura-ruban-v3-commercial-matrix-2026-08-17.xlsx`

SHA-256 : `72cf0a58f10a7eff70c9c2f7723f1257482b097dc045fd928443c38e020c880a`

Le classeur contient six onglets : `Synthese`, `Matrice V3`, `Eligibilite`, `Ambassadeurs`, `Mappings V1` et `Regles`.

## Sources

- `docs/checkpoints/2026-08-17-0910-ruban-v3-handoff.md`
- `docs/checkpoints/2026-08-16-1046-ruban-v2-live.md`
- `docs/audits/2026-08-16-ruban-matrices-commerciales-v1.md`
- `docs/superpowers/specs/2026-08-16-milaura-ruban-parure-v2.md`
- `config/catalogue-data-contract.json`
- `docs/reference/MILAURA-P0B-PRODUCT-REGISTER-2026.md`
- `docs/reference/2026-08-09-dossier-inventaire-categories.md`
- `docs/reference/2026-08-12-copywriting-milaura.md`
- catalogue public `https://milaura.fr/products.json`, lu sur les pages 1 a 3 le 2026-08-17
- six artefacts Camilla supplier-backed dates du 2026-08-11, consultes en lecture seule dans le workspace prive MilAura
