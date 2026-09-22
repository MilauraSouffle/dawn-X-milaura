# Preview Home Automne grenat et cornaline

Date : 2026-09-22 16:57 CEST
Statut : `PREVIEW PRIVEE PRETE, GO VISUEL PATRICE EN ATTENTE`

## Resultat

La section 2 du theme prive Shopify `200259043675` presente maintenant une selection Automne `Grenat & cornaline`. Le theme public `190430282075` est reste intact.

La composition n utilise aucun mannequin. La video de feuilles animees reste le decor et les bijoux sont le sujet.

- desktop : collier grenat 6 mm, boucles pendantes grenat 12 mm, bracelet grenat 8 mm et bracelet cornaline 10 mm ;
- mobile : collier grenat 6 mm, boucles pendantes grenat 12 mm et bracelet cornaline 10 mm ;
- le bracelet grenat 8 mm est masque sur mobile pour eviter une composition surchargee ;
- le CTA global reste `/collections/selection-automne` et aucun lien individuel vers un produit DRAFT n est rendu.

## References controlees

- `10746009944411`, collier grenat rouge 6 mm, DRAFT au 2026-09-22 ;
- `10745961644379`, boucles pendantes grenat rouge 12 mm, DRAFT au 2026-09-22 ;
- `10745886835035`, bracelet grenat rouge 8 mm, DRAFT au 2026-09-22 ;
- `10693962498395`, bracelet cornaline 10 mm, ACTIVE au 2026-09-22 ;
- `10357430649179`, puces cornaline 8 mm, ACTIVE au 2026-09-22 ;
- `10669947781467`, bracelet Iris aigue-marine, cornaline et grenat, ACTIVE au 2026-09-22.

## Verification

- push cible sur le theme prive uniquement ;
- QA mobile a `390 x 844` : document 390 px, aucun overflow horizontal, titre et CTA visibles ;
- video mobile : duree 8 secondes, `readyState=4`, aucune erreur ;
- trois visuels mobiles visibles charges aux dimensions naturelles attendues ; le quatrieme est volontairement `display:none` ;
- aucune erreur ni alerte dans la console navigateur ;
- pullback : section et quatre nouveaux visuels identiques en SHA-256 ; bloc `bestsellers` de `templates/index.json` identique apres normalisation Shopify ;
- Shopify a retire du pullback six reglages Hero inconnus du schema plus ancien de ce theme prive, sans modifier la section Automne ni le live ;
- Theme Check : 0 erreur, 16 avertissements historiques hors lot ;
- aucun changement live, Admin, produit, stock, prix, collection, canal, Ads ou Pinterest.

## Recommandations PDP

Le moteur existant utilisant Shopify Product Recommendations reste en place. Apres activation des produits et confirmation du perimetre de landing, configurer dans Shopify Search and Discovery des complements reciproques entre les deux pierres de campagne. Priorite cible par PDP : meme pierre, complement de l autre pierre, type de bijou compatible. Verifier ensuite l endpoint public `intent=complementary` et le rendu de chaque PDP.

## Gate restante

Le brief definit la campagne comme grenat et cornaline, mais sa derniere phrase demande que la landing regroupe grenat et aigue-marine. La home privee suit la direction grenat et cornaline. Ne creer ni collection, ni landing, ni mapping de recommandations Admin avant la confirmation exacte de Patrice.

## Reprise

```text
Reprends depuis docs/checkpoints/2026-09-22-1657-autumn-garnet-carnelian-preview.md. Verifie d abord le statut courant des trois produits grenat DRAFT. Demande a Patrice de confirmer le couple de pierres de la landing : grenat plus cornaline ou grenat plus aigue-marine. La home privee 200259043675 est deja composee en grenat plus cornaline, sans mannequin. Aucun live, Admin, Ads ou Pinterest avant les GO distincts.
```
