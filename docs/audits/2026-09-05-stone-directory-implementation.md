# MilAura : annuaire et landings par pierre

Date : 2026-09-05 10:25 CEST.
Statut : implementation et corrections de collections realisees ; preview privee en recette visuelle Patrice. Aucun deploiement sur le theme live.
Branche : `codex/milaura-stone-directory-20260905`, base `5a51f592`.
Worktree : `/Users/paesano/Documents/MilAura website/_worktrees/stone-directory-20260905`.

## Resultat consultable

- [Annuaire complet en preview](https://milaura.fr/pages/bijoux-par-pierre?view=milaura-stones-preview&preview_theme_id=200974958939).
- Theme prive : `200974958939`, `MilAura Toutes les pierres 2026-09-05`.
- 39 cartes de pierre, 13 rangees de trois cartes maximum sur mobile, grille de quatre colonnes sur desktop et premiere carte editoriale conservee.
- 40 configurations de landing : les 39 destinations et l'ancienne route Jaspe rouge, maintenue avec ses seuls bijoux rouges.
- 125 bijoux distincts references : les 124 disponibles du releve et la bague Aigue-marine modele 01, conservee comme produit star selon le choix de Patrice. Ce nombre n'est pas un inventaire physique.

Le premier audit de 39 appellations principales aboutissait a 36 familles apres regroupement des jaspes et obsidiennes. La verification des associations ajoute trois entrees : Grenat, Quartz fraise et Pierre de lave. Elles existent dans des bijoux mixtes ; leur texte le precise. Les nouvelles pierres des arrivages de la session catalogue ne sont pas presentees comme deja disponibles.

## Modele reutilise

Les nouvelles pages reutilisent `milaura-campaign-landing` pour le bento et le catalogue, puis `milaura-stone-guide` pour les trois onglets. Les configurations JSON portent les contenus et les choix produit propres a chaque pierre. Le nouveau hero utilise les vraies photos produit ; les scenes editoriales existantes sont conservees pour les pierres qui en disposent.

Sodalite conserve la composition de la landing validee, Horus et son guide. Aigue-marine conserve son hero, la bague argent modele 01, ses trois photos et son guide. Leurs anciennes configurations validees ne sont pas modifiees ; de nouvelles configurations ajoutent la selection complete et le retour au hub.

Les reglages nouveaux des composants partages sont retrocompatibles. Le guide accepte des textes propres a la configuration sans reprendre par erreur les metachamps d'une autre collection pendant la preview. Une landing avec un seul bijou conserve son bento et son guide, sans section catalogue vide.

Le titre du hub, sa grande photographie et l'acces depuis l'accueil sont conserves. L'annuaire ajoute une recherche sans accents, des fleches et un compteur de position par rangee. Les photos utilisent les tailles CDN adaptees et le chargement differe. Les textes des cartes ont un contraste calcule de 5,00:1 minimum sur les quatre fonds utilises.

## Corrections Shopify executees

Autorisation : GO implementation et corrections du 2026-09-05, apres l'audit presente a Patrice.

Sept collections existantes ont recu 36 inclusions manquantes, dans des sources additives identifiables. Aucune ancienne source ni aucun ancien produit n'a ete retire.

| Collection | Bijoux ajoutes |
| --- | ---: |
| Aigue-marine | 2 |
| Quartz rose | 10 |
| Lapis-lazuli | 6 |
| Amazonite | 1 |
| Agate | 3 |
| Aventurine | 6 |
| Oeil de tigre | 8 |

Amethyste, Sodalite et Jaspe rouge ne necessitaient pas d'ajout. Leurs inclusions et affectations sont conservees.

Trente nouvelles collections ont ete creees avec leurs bijoux, une image existante, une description, les champs SEO et le suffixe de template prepare. Elles ne sont pas publiees sur la boutique. Les dix affectations de template existantes sont inchangees.

Les 40 collections ont ete relues par ID apres ecriture : aucun bijou attendu ne manque. Les 30 nouvelles sont absentes de la liste publique des collections. La lecture du compteur de tous les canaux necessite `read_publications`, indisponible pour le helper courant ; aucun appel de publication n'a ete execute. La verification de non-publication porte donc directement sur le storefront et sur les mutations executees.

Les produits, variantes, stocks, prix, galeries et canaux produit n'ont fait l'objet d'aucune mutation. Les travaux de la session catalogue restent independants.

## Matrice et maintenance

[Matrice de release](2026-09-05-stone-directory-mapping.json) : IDs des 40 collections, produits attendus, sources ajoutees, suffixes actuels et prevus, URLs de preview. C'est le document a utiliser pour la publication du lot ; ne pas retrouver les collections par titre approximatif.

Les choix editoriaux sont dans `scripts/stone_landing_profiles.py`. Le generateur `scripts/build_stone_landings.py` travaille hors ligne a partir d'un releve Admin et d'un releve public frais. Il refuse les bijoux disponibles non couverts et les produits star sans trois images. Il n'effectue aucune mutation Shopify.

Les selections et compteurs des landings sont explicites. Un arrivage n'ajoute pas automatiquement des cartes ou des produits a ces configurations. Pour abonder le lot : refaire le rapprochement, enrichir le profil si une famille manque, relire ses medias, regenerer puis valider. Les informations commerciales des produits references restent celles de Shopify. Les anciens objets mineraux presents dans certaines collections ne gonflent pas le compteur de bijoux du hub.

## Recette

- Theme Check : 0 erreur, 16 avertissements historiques dans huit fichiers hors du lot.
- Pullback prive : 50/50 fichiers identiques a la version attendue, dont le hub adapte explicitement pour la preview. Le layout prive est identique a celui relu sur le live. Le generateur reproduit les commentaires et l'ordre de reglages normalises par Shopify.
- Syntaxe JavaScript et `git diff --check` conformes.
- 39 destinations controlees dans le navigateur a 1440 px : un H1, un produit star, trois onglets, aucun message Liquid ni debordement horizontal.
- 39 destinations controlees a 390 px : Choisir & porter puis Entretien fonctionnels, un seul panneau actif, aucun debordement. Jaspe rouge controle separement a 390 px et inclus dans la comparaison des produits.
- 40 pages comparees aux produits de la matrice : aucun manquant ni produit inattendu.
- Recherche `oeil` : Oeil de tigre et Oeil de taureau trouves ; recherche sans resultat et remise a zero au clavier conformes.
- Navigation mobile : treize rangees, trois cartes par rangee, passage de 1/3 a 2/3 verifie ; acces clavier aux cartes controle.
- Parcours annuaire > Amazonite > retour au hub : 39 cartes et liens de recette conformes au retour.
- Captures et preuves detaillees hors Git : `/private/tmp/milaura-stone-implementation-20260905/`.

Les checks navigateur sont techniques. Le choix final du rendu reste a valider visuellement par Patrice.

## Particularites de la preview et suite

La duplication Shopify CLI a laisse un layout minimal de 48 octets dans la copie. Le vrai `layout/theme.liquid` du live a ete relu et recopie uniquement dans la preview. Les autres fichiers de base echantillonnes etaient identiques. Cette correction de copie n'est pas une modification a deployer sur le live.

Le hub normal de la preview utilise `preview_mode: true` pour que les retours et le lien de la home rejoignent les pages de recette. Le fichier source destine au live garde `preview_mode: false` et les URLs finales. Les nouvelles collections non publiees sont previsualisees via `/collections/all?view=<suffixe>` avec une selection explicite, sans publier de page vide.

Avant mise en ligne : obtenir le verdict visuel sur la preview, integrer les seuls fichiers du lot dans la branche canonique en preservant le checkout concurrent, deployer de facon ciblee sur `190430282075`, affecter les dix templates existants et publier les trente nouvelles collections sur la boutique. Verifier ensuite les 40 URLs sans parametre `view`, le parcours home > hub > pierre > produit et le pullback live. Le detail des canaux de collection devra etre relu dans Admin pour cette action.

Le theme live n'a recu aucun fichier de ce lot. Les corrections d'inclusion de collections sont deja effectives sur les collections existantes.
