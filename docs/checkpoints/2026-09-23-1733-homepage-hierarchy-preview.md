# Homepage MilAura, nouvelle hierarchie en preview

Date : 2026-09-23 17:33 CEST

## Etat

- Branche : `codex/milaura-css-foundations-20260923`
- Worktree : `/Users/paesano/Documents/MilAura website/_worktrees/css-foundations-20260923`
- Theme prive : `Development (570851-mac-1)` `201797534043`
- Theme public `190430282075` : inchange
- Gate : preview prete, GO visuel Patrice requis avant integration et GO live distinct requis avant publication

## Hierarchie implementee

1. Campagne Automne en hero principal avec le seul H1 de la page et media sous la navigation.
2. Trois facons de choisir sur fond blanc pur.
3. Ancien hero aigue-marine transforme en interlude de marque plus compact, avec H2.
4. Selection de Karine sur fond blanc pur.
5. Best-sellers sur fond mineral bleu.
6. Nouveautes sur fond blanc pur.
7. Un bijou pour marquer une date sur fond quartz rose.
8. Choisir avec des reperes simples, puis footer.

## Section editoriale finale

- L ordre mobile commence par le titre, le hook et les liens, puis l image et l article.
- La photo de Karine est remplacee par `milaura-hero-editorial-owned-stone-atlas-desktop.webp` et sa variante mobile.
- Cette image montre des bijoux en lapis-lazuli et sodalite observes a la loupe sur des socles mineraux. Elle soutient le role de guide sans repeter le portrait de Karine deja present dans sa selection.
- Alt public : `Bracelets en lapis-lazuli et sodalite observes a la loupe sur des socles mineraux` avec les accents presents dans le template JSON.

## Verifications

- Viewports controles : `390 x 844` et `1440 x 900`.
- Un seul H1 : campagne Automne.
- Aucun debordement horizontal.
- Ecart mesure entre chaque section : `0px`.
- Fonds calcules : parcours blanc, Karine blanc, best-sellers mineral, nouveautes blanc, occasions quartz rose.
- Ordre mobile final confirme : introduction avant image, image avant article.
- Interlude aigue-marine : `641px` sur mobile et `648px` sur bureau de test, au lieu d un second plein ecran.
- Les erreurs console observees proviennent uniquement de la telemetrie, de la banniere de confidentialite et de la barre de preview Shopify en echec reseau. Aucune ne pointe vers les fichiers modifies.

## Reprise exacte

1. Ouvrir `https://milaura-2.myshopify.com?preview_theme_id=201797534043`.
2. Obtenir le GO visuel de Patrice sur la hierarchie et la photo Stone Atlas.
3. Apres GO, integrer la branche dans `codex/milaura-integration`.
4. Ne deployer le theme public qu apres un GO live distinct, par push cible sans suppression puis pullback exact.
