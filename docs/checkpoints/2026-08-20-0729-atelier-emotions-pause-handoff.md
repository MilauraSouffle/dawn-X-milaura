# Handoff Atelier des emotions, mise en pause

Date : 2026-08-20 07:29 CEST

## Decision de Patrice

Le chantier `L'Atelier des emotions` est mis en pause volontairement le 2026-08-20.

La commande fournisseur doit arriver dans environ trois semaines. La date exacte de reception n'est pas connue. D'ici la, les priorites MilAura sont notamment la communication, le SEO, la configuration du compte Pinterest et les autres travaux de fermeture du site.

La branche, le worktree et le theme prive sont conserves comme preuve et point de reprise. Aucun developpement supplementaire, aucune integration master, aucune mutation catalogue et aucun deploiement live ne sont autorises par ce handoff.

## Etat Git confirme avant cloture

- depot d'integration : `/Users/paesano/Documents/MilAura website/dawn-X-milaura` ;
- branche d'integration : `codex/milaura-integration` ;
- HEAD d'integration observe : `b50ac414891eb9b6a2fa5bd2c0d35c87c09fdcad` ;
- integration propre et alignee avec `origin/codex/milaura-integration` au controle du 2026-08-20 ;
- worktree Atelier : `/Users/paesano/Documents/MilAura website/_worktrees/atelier-emotions-20260816` ;
- branche Atelier : `codex/milaura-atelier-emotions-20260816` ;
- HEAD fonctionnel avant ce handoff : `d2c04563a3f2fafee082751b601633d06d36cc27` ;
- base commune avec l'integration : `0a3872ea6611b5e9fd73faff8375c8770c1042b8` ;
- le lot Atelier n'est pas integre a `codex/milaura-integration` au 2026-08-20.

Commits fonctionnels du lot :

1. `a0abc5d6` : construction du pilote Atelier ;
2. `a36025d7` : composition visuelle progressive ;
3. `81022e54` : workflow tailles et diametres ;
4. `d2c04563` : branchement de la selection fournisseur reelle.

## Ce qui a ete construit

Le prototype prive permet de composer visuellement un bracelet pilote avec :

- tailles Enfant 14 a 16 cm, Femme 16 a 18 cm et Homme 18 a 20 cm ;
- gabarits 04, 06 et 08 mm ;
- message personnalise ;
- choix parmi 8 familles de lettres ;
- choix parmi 12 charms ;
- calcul theorique de capacite et d'encombrement ;
- persistance de la composition dans la session du navigateur ;
- recapitulatif de production destine a Karine ;
- verrou commercial explicite : aucun prix public, aucun formulaire, aucun ajout panier.

Le manifeste contient 46 references issues des paniers reels transmis par Patrice :

- Dreambeads : `35,93 EUR` hors livraison ;
- Perles & Co : `62,40 EUR` hors livraison ;
- total : `98,33 EUR` hors livraison ;
- 45 references identifiees ;
- `TW-1707` reste a identifier sur la facture ou la confirmation de commande ;
- aucune pierre ronde 04, 06 ou 08 mm n'est presente dans cette selection.

Les quantites du manifeste representent les paniers prepares. Elles ne prouvent ni commande, ni reception, ni stock MilAura vendable.

## Fichiers fonctionnels du lot

- `assets/milaura-atelier-catalog.json` ;
- `assets/milaura-atelier.css` ;
- `assets/milaura-atelier.js` ;
- `sections/milaura-atelier-configurator.liquid` ;
- `templates/page.atelier-emotions.json` ;
- `docs/reference/2026-08-16-atelier-emotions-spec.md` ;
- `docs/reference/2026-08-16-atelier-inventory-template.csv` ;
- `docs/reference/2026-08-16-atelier-inventory-template.md` ;
- checkpoints Atelier dates du 2026-08-16 et du 2026-08-17.

La difference Atelier contre l'integration comptait 13 fichiers et 5 215 insertions avant les documents de cloture.

## Etat Shopify confirme le 2026-08-20

- theme live : `190430282075` ;
- theme Atelier : `200007713115`, `MilAura Atelier emotions DEV 2026-08-16`, toujours non publie ;
- preview : `https://milaura.fr/pages/contact-milaura?view=atelier-emotions&preview_theme_id=200007713115` ;
- aucun push live execute par ce chantier ;
- aucun produit, stock, prix, collection, navigation ou reglage Shopify modifie.

Un pullback frais du theme prive a compare cinq fichiers sur cinq, identiques octet par octet a la branche :

| Fichier | SHA-256 confirme |
| --- | --- |
| `assets/milaura-atelier.css` | `8364053db4422436fedb4108950e0504bb898080279ea0a74aacdb164ef7dbd9` |
| `assets/milaura-atelier.js` | `3c0126ef52dfcb7ac58be260b06ab764beb0002d48c3cc8e2e500216ccbeaeb2` |
| `assets/milaura-atelier-catalog.json` | `65c675460ad8951051c343aa5e2e97e8e53fedb277b7ed38e6ae409c82c27d1b` |
| `sections/milaura-atelier-configurator.liquid` | `4a39c79b407b062a4570fda124f41c3e5812fcfd014f9cf76f3e0c2c1dc737c7` |
| `templates/page.atelier-emotions.json` | `e051bf1a75e60dbeb67dd1d12a0d81a740ef129681bb81a64c6791b33c8f6ec6` |

La verification HTTP directe de la preview a ete bloquee par la resolution DNS du bac a sable. Ce signal d'environnement ne contredit pas le pullback Shopify reussi.

## Validations deja obtenues

- manifeste JSON valide : 46 composants, 20 choix clients, total `98,33 EUR` ;
- syntaxe JavaScript valide ;
- `git diff --check` valide ;
- aucune alerte Theme Check propre aux fichiers Atelier ;
- 9 combinaisons taille par diametre testees a 360 px ;
- 360, 390, 430 et 1440 px sans debordement horizontal ;
- persistance de session validee ;
- zero erreur console lors de la QA documentee ;
- absence de formulaire, bouton de soumission et prix public confirmee ;
- onglet Pierres volontairement vide et explicitement signale.

La validation visuelle et fonctionnelle du prototype prive ne prouve pas la faisabilite physique, le cout complet, le prix final ou la conformite juridique du parcours commercial.

## Donnees physiques a relever a la reception

Le gabarit canonique est :

- `docs/reference/2026-08-16-atelier-inventory-template.csv` ;
- `docs/reference/2026-08-16-atelier-inventory-template.md`.

Pour chaque reference et chaque lot recu, renseigner exactement :

- fournisseur, reference, lot, date de commande et date de reception ;
- quantite recue, quantite rejetee et motif du rejet ;
- largeur, hauteur, epaisseur, nombre de trous et diametre reel des trous ;
- poids unitaire des grosses pieces et charms ;
- photos face, dos et passage du fil avec une regle ;
- libelle matiere exact du fournisseur ;
- compatibilite elastique 0,8 mm et cuir 1,0 mm ;
- resultat du test de traction et observation de contact peau ;
- validation ou refus de Karine, avec note ;
- identifiant composant Shopify et stock MilAura seulement apres validation physique.

Pour chacune des 8 familles alphabet, compter chaque lettre de A a Z. La capacite commerciale doit etre fondee sur la lettre la plus limitante.

Pour chaque montage commercial retenu, relever longueur de fil, nombre reel de pierres, lettres, charm, fermeture, temps de montage, marge de reglage, pertes, tenue apres traction et photo fermee.

## Gate de reprise obligatoire

Ne reprendre le developpement commercial qu'apres reception de la commande et nouvelle decision explicite de Patrice.

Definition de termine du Gate physique :

1. commandes et factures confirmees ;
2. `TW-1707` identifie ;
3. reception, comptage et rejets enregistres ;
4. distribution A a Z comptee pour les 8 familles ;
5. dimensions, trous, poids et compatibilites mesures ;
6. prototypes physiques valides par Karine pour les tailles et diametres reellement retenus ;
7. temps de montage, pertes, cout complet, marge et prix public valides ;
8. architecture Shopify pilote decidee puis composant et stock crees ;
9. restitution de commande testee dans Shopify Admin ;
10. revue juridique finale, puis seulement activation du panier.

## Risques restants

- le contenu des paniers n'est pas encore une preuve de reception ;
- les 8 alphabets sont des melanges, donc la disponibilite commerciale d'un mot reste inconnue avant comptage A a Z ;
- les trous et dimensions annonces fournisseur peuvent etre incompatibles avec les fils retenus ;
- aucune pierre ronde 04, 06 ou 08 mm n'est achetee dans la selection documentee ;
- le prix final, la marge, le temps de montage et les pertes ne sont pas fixes ;
- l'architecture Shopify et la restitution de commande ne sont pas implementees ;
- les textes juridiques definitifs n'ont pas ete rediges ni valides ;
- la branche n'est pas integree au master et le registre canonique du master doit conserver cette pause sans ecraser ses travaux paralleles.

## Reprise copiable

```text
Reprendre L'Atelier des emotions depuis docs/checkpoints/2026-08-20-0729-atelier-emotions-pause-handoff.md sur la branche codex/milaura-atelier-emotions-20260816. Patrice a mis le chantier en pause le 2026-08-20 jusqu'a reception des fournisseurs, attendue dans environ trois semaines sans date certaine. Ne toucher ni au live 190430282075, ni au catalogue, ni aux stocks, ni au panier. Commencer par confirmer les factures, identifier TW-1707, compter la reception et chaque lettre A a Z, mesurer les trous et dimensions, puis fabriquer les prototypes avec Karine. Reprendre le code commercial seulement apres Gate physique termine et nouveau GO explicite de Patrice. Le theme prive reserve est 200007713115 et le lot n'est pas integre au master.
```
