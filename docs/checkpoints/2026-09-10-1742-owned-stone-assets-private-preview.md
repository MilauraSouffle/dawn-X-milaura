# Actifs propriétaires pierre MilAura, preview privée

Date : 2026-09-10 17:42 CEST

Statut : `PASS_TECHNIQUE_PREVIEW_PRIVEE`, GO visuel Patrice en attente

## Reprise et isolement

- Handoff repris : `docs/checkpoints/2026-09-10-1052-seo-commercial-live-handoff.md`.
- Branche : `codex/milaura-owned-assets-20260910`.
- Worktree : `/Users/paesano/Documents/MilAura website/_worktrees/owned-assets-20260910`.
- Base SEO : `58f3c14f`, puis alignement propre sur `origin/codex/milaura-integration` par le merge `ca3173f0`.
- Checkout principal sale et concurrent préservé sans modification.

## Livrables

Le lot comprend cinq surfaces distinctes :

1. sélecteur interactif de pierre ;
2. matrice eau, soleil et sel ;
3. calendrier des pierres de naissance ;
4. atlas photographique avec repères sur les imitations ;
5. page de protocole et de restitution de l'étude annuelle.

Source reproductible :

- `data/milaura-owned-stones.json` pour les pierres, mois, soins, photographies, routes commerciales et sources ;
- `scripts/build_owned_stone_assets.py` pour valider et générer quatre snippets Liquid ;
- `assets/milaura-owned-stone-guides.css` et `assets/milaura-owned-stone-guides.js` pour l'interface progressive ;
- cinq sections, quatre snippets et cinq templates `page.milaura-*.json` ;
- `PRODUCT.md`, architecture, protocole et tests du lot.

Les exceptions `.gitignore` sont limitées aux deux sources nommées. Aucun export de travail ni autre script ignoré n'est réintégré.

## Preview Shopify privée

- Thème : `MilAura Toutes les pierres 2026-09-05`, ID `200974958939`, non publié.
- Thème live `190430282075` : non touché.
- Les 16 chemins étaient absents du thème privé avant le premier envoi.
- Envoi ciblé avec `--nodelete --strict`.
- Pullback final : 11 fichiers identiques octet pour octet et 5 templates identiques après retrait du commentaire standard ajouté par Shopify, soit `16/16` conformes.

Vues de recette :

- sélecteur : `view=milaura-stone-finder` ;
- matrice : `view=milaura-stone-care` ;
- calendrier : `view=milaura-birthstones` ;
- atlas : `view=milaura-stone-atlas` ;
- étude : `view=milaura-study`.

Ces vues utilisent temporairement `/pages/bijoux-par-pierre` avec le paramètre `view`. Aucune page Shopify Admin, URL publique, meta SEO ou entrée de navigation n'a été créée.

## Vérifications

- `python3 scripts/build_owned_stone_assets.py --check` : PASS, 8 pierres, 12 mois, 4 snippets.
- `node --test tests/owned-stone-guides.test.mjs` : 6 tests sur 6.
- `node --check assets/milaura-owned-stone-guides.js` : PASS.
- `python3 tools/check_copywriting.py` : PASS, 352 fichiers contrôlés.
- `shopify theme check --fail-level error` : 0 erreur, 16 avertissements historiques hors des nouveaux fichiers.
- `git diff --check` : PASS.
- Navigateur réel à 390 px et 1440 px : cinq H1 attendus, aucun débordement horizontal, aucun journal d'erreur JavaScript.
- Sélecteur : combinaison Protection et Noir, 4 résultats annoncés et visibles ; Recommencer rétablit 8 résultats au tap et au clavier.
- Matrice : 8 pierres, recherche `lapis`, 1 résultat annoncé et visible.
- Calendrier : 12 mois, 6 photographies catalogue exactes et 6 liens correspondant aux collections réellement disponibles.
- Atlas : 8 fiches et 8 photographies, recherche `onyx`, 1 résultat annoncé et visible.
- Étude : édition 2027 en préparation, 0 métrique et message explicite d'absence de résultats.
- Captures finales : `.impeccable/review/desktop.png` en 1440 x 4057 et `.impeccable/review/mobile.png` en 390 x 6029, ignorées par Git.

## Revue Impeccable dégradée

Le rôle séparé demandé par Impeccable n'était pas disponible dans ce harness. La revue a donc été exécutée en ligne selon le protocole dégradé, avec prise de recul et captures finales.

`disposition: ship`

### persistence

PASS. `PRODUCT.md` et le contrat de direction sont présents. Le lot est une extension locale du monde MilAura existant : aucun concept roll, comp ou état de reproduction n'est requis. Les captures desktop et mobile sont complètes, valides et commencent au haut du document.

### fidelity

| Élément | Verdict | Preuve |
| --- | --- | --- |
| Topologie plateau partagé | match | filtres à gauche et résultats à droite sur bureau, pile puis grille à deux colonnes sur mobile |
| TYPE | match | Gloock pour les titres, Instrument Sans pour lecture et contrôles, tailles issues des tokens MilAura |
| MATERIAL | match | photographies Shopify réelles, aucun faux matériau, aucune illustration générique |
| GROUND | match | fond Nacre, texte Encre prune, filets Or mat et Aigue-marine issus des tokens |
| Action principale | match | choix explicites, reclassement immédiat, statut `aria-live`, liens commerciaux soulignés |
| Adaptation mobile | acceptable adaptation | la grille à deux colonnes et l'ordre titre, conseil, critères, résultats suivent le contrat mobile et `PRODUCT.md` |

### ceiling

reached. La photographie porte la valeur, les surfaces restent transparentes, les filets structurent la page et le seul mouvement est le léger zoom produit avec réduction de mouvement respectée.

### material_fixes

Aucun. La famille minéralogique a été déplacée sous le nom de la pierre avant le verdict pour supprimer le traitement en sourcil interdit.

### keep

Conserver le plateau sans étapes, les photographies réelles et la présence simultanée des critères et des résultats.

## Documentation du système

No changes. Vérification de `assets/milaura-tokens.css`, `assets/milaura-owned-stone-guides.css`, `docs/reference/MILAURA-DIRECTION-ARTISTIQUE-2026.md` et des composants générés. Ce lot étend le système existant sans modifier sa palette, sa typographie, ses règles de surface ou son langage de composants. Aucun `DESIGN.md` concurrent n'est créé : la direction canonique MilAura reste la source unique du dépôt.

- Palette : Nacre, Encre prune, Or mat, Aigue-marine et Améthyste via tokens.
- Échelle typographique : Gloock pour les titres, Instrument Sans pour la lecture et les contrôles.
- Règle de surface : transparence, photographie réelle et filets fins.
- Règle de composant : actions soulignées, contrôles compacts, cible tactile et focus visibles.
- Règle responsive : décision mobile d'abord, plateau à deux colonnes seulement quand l'espace le permet.

Défaut non canonisé : aucun dans les nouveaux fichiers. Les éléments flottants Google et la navigation mobile visibles dans les captures appartiennent au storefront existant et non au lot.

## Sources et limites

- GIA : pierres de naissance et conseils d'entretien.
- CIBJO : distinction entre pierre naturelle, produit synthétique et imitation.
- Mindat : minéralogie de la sodalite.
- CNIL, Insee et ICC/ESOMAR : minimisation, anonymisation, quotas et protocole d'étude.

Les photographies montrent des pièces MilAura. Elles ne certifient ni l'identification, ni le traitement, ni l'absence d'imitation. La page d'étude ne publie aucun résultat tant que la collecte, le contrôle, la pondération et les limites ne sont pas documentés.

## Gates restants

1. GO visuel Patrice sur les cinq previews ;
2. décision séparée sur les handles, pages Admin, titles, metas et navigation ;
3. intégration Git ;
4. GO live explicite ;
5. pullback et QA publics après publication.

Aucune de ces étapes n'est déduite du PASS technique ou de la preview privée.
