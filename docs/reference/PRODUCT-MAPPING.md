# MAPPING PRODUIT MILAURA — Guide d'import CSV Shopify

> Document de reference pour l'automatisation scraping fournisseur → CSV → Shopify
> Genere le 12 fevrier 2026 — **Mis a jour le 12 fevrier 2026 (audit corrections)**

---

## 1. CHAMPS SHOPIFY NATIFS (CSV Standard)

| Colonne CSV | Obligatoire | Description | Exemple |
|-------------|-------------|-------------|---------|
| `Handle` | OUI | Slug unique du produit (lowercase, tirets) | `bracelet-amethyste-bresil-8mm` |
| `Title` | OUI | Titre produit pour le client | `Bracelet Amethyste du Bresil` |
| `Body (HTML)` | OUI | Description produit (HTML autorise) | `<p>Bracelet en pierres naturelles...</p>` |
| `Vendor` | OUI | Fournisseur (affichage optionnel sur PDP) | `MilAura` |
| `Product Category` | NON | Categorie Google (SEO) | `Apparel & Accessories > Jewelry > Bracelets` |
| `Type` | **CRITIQUE** | Type de produit Shopify natif — **determine les sections PDP** | `bracelet` |
| `Tags` | NON | Tags separes par virgule (non utilises par le theme actuellement) | `amethyste, bresil, AA` |
| `Published` | OUI | Publier sur le storefront | `true` |
| `Template Suffix` | **CRITIQUE** | Template PDP a utiliser — **doit etre `milaura-produit`** | `milaura-produit` |
| `Variant SKU` | OUI | Reference fournisseur | `3701459010592` |
| `Variant Price` | OUI | Prix de vente TTC | `28.90` |
| `Variant Compare At Price` | NON | Prix barre (ancien prix) | `34.90` |
| `Variant Grams` | NON | Poids en grammes (utile pour frais de port) | `45` |
| `Variant Inventory Qty` | OUI | Stock initial | `15` |
| `Variant Inventory Policy` | OUI | Comportement rupture | `deny` |
| `Variant Requires Shipping` | OUI | Livraison physique | `true` |
| `Variant Taxable` | OUI | Soumis a TVA | `true` |
| `Image Src` | OUI | URL image principale | `https://cdn.milaura.fr/...` |
| `Image Alt Text` | OUI | Alt text SEO | `Bracelet Amethyste 8mm qualite AA` |
| `Option1 Name` | Si variantes | Nom option (taille, couleur...) | `Taille` |
| `Option1 Value` | Si variantes | Valeur option | `16-18 cm` |
| `Status` | OUI | Statut produit | `active` |

> **ATTENTION `Template Suffix`** : Sans cette colonne, les produits importes utiliseront le template Dawn par defaut (`product.json`) au lieu du template MilAura (`product.milaura-produit.json`). Le resultat sera un PDP generique sans les 13 sections custom (hero, pierre, senteur, rituel, etc.).

> **Note sur `Variant Price`** : Le fournisseur affiche un "Prix public conseille" sur sa page listing (pas sur la fiche produit). C'est un prix indicatif — ajuste selon ta marge.

---

## 2. VALEURS CRITIQUES DE `Type` (product.type)

**CE CHAMP DETERMINE LE COMPORTEMENT DE 5 SECTIONS PDP.**

### 2.1 Types avec comportement PDP specifique

| Valeur `Type` | Section Senteur | Rituel par defaut | Badges artisanat | FAQ par defaut | CTA Quiz |
|---------------|-----------------|-------------------|-------------------|----------------|----------|
| `bougie` | **VISIBLE** | Allumer, intention, meditation, eteindre | France, Cire vegetale, Maison Candella, Pierre incluse | Duree, cire, pierre, intensite | "ta bougie emotionnelle" |
| `bracelet` | cache | Purifier, intention, porter, gratitude | France, Pierre certifiee, Fait main, Or/Argent 925 | Authenticite, entretien, quotidien, taille | "ton bijou ideal" |
| `collier` | cache | Purifier, intention, porter, gratitude | France, Pierre certifiee, Fait main, Or/Argent 925 | Authenticite, entretien, quotidien, taille | "ton bijou ideal" |
| `bague` | cache | Purifier, intention, porter, gratitude | France, Pierre certifiee, Fait main, Or/Argent 925 | Authenticite, entretien, quotidien, taille | "ton bijou ideal" |
| `boucles` | cache | Purifier, intention, porter, gratitude | France, Pierre certifiee, Fait main, Or/Argent 925 | Authenticite, entretien, quotidien, taille | "ton bijou ideal" |
| `sauge` | cache | Ouvrir fenetres, allumer, cercle fumee, eteindre | Origine controlee, Sechage naturel, Rituel ancestral, Eco-responsable | Usage, duree, securite, intensite | "ton rituel de purification" |
| `encens` | cache | (idem sauge) | (idem sauge) | (idem sauge) | "ton rituel de purification" |
| `coffret` | cache | Ouvrir, disposer, rituel, partager | Coffret complet, Personnalisable, Qualite cadeau, Multi-tailles | Contenu, personnalisation, cadeau, tailles | "ton coffret sur-mesure" |
| `bundle` | cache | (idem coffret) | (idem coffret) | (idem coffret) | "ton coffret sur-mesure" |
| `pierre-roulee` | cache | (via metafield) | Pierre naturelle certifiee, Selection ethique, Qualite controlee, Energie authentique | Authenticite, purification, lithotherapie, choix | (defaut bijou) |
| `cabochon` | cache | (via metafield) | (idem pierre-roulee) | (idem pierre-roulee) | (defaut bijou) |
| `mineral` | cache | (via metafield) | (idem pierre-roulee) | (idem pierre-roulee) | (defaut bijou) |

### 2.2 Types fournisseur supplementaires (comportement herite)

Ces types existent chez le fournisseur et heritent d'un comportement PDP existant.

| Valeur `Type` | Description fournisseur | Comportement PDP | Note |
|---------------|-------------------------|-------------------|------|
| `pendentif` | Pendentifs en pierre | **Bijou** (explicite) | Meme FAQ/badges que bracelet/collier |
| `fil-de-perles` | Fils de perles en vrac | Defaut bijou | Produit semi-fini, pour creatifs — personnaliser via `ritual_steps` |
| `coussin` | Coussins de purification | Defaut bijou | Accessoire, pas un bijou |
| `bol-chantant` | Bols chantants tibetains | Defaut bijou | Accessoire rituel — personnaliser via `ritual_steps` et `faq` |
| `maillet` | Maillets pour bols | Defaut bijou | Accessoire complementaire |
| `cymbales` | Cymbales tibetaines (tingsha) | Defaut bijou | Accessoire rituel sonore |

> **REGLE** : Si `Type` est vide ou inconnu, le comportement par defaut est `bijou` (bracelet).
>
> **NOUVEAU (12 fev 2026)** : Les types `pierre-roulee`, `cabochon`, `mineral`, `pierre` ont maintenant leur propre jeu de badges Craft et FAQ par defaut, distincts de `bijou`.

> **CONSEIL** : Pour les types "accessoire" (coussin, bol-chantant, maillet, cymbales), personnalise les metafields `ritual_steps` et `faq` manuellement car les defauts "bijou" ne seront pas pertinents.

---

## 3. METAFIELDS PRODUIT (namespace: `milaura`)

**Le theme lit EXCLUSIVEMENT le namespace `milaura.*`.** Aucune reference a `custom.*` dans le code Liquid.

### 3.1 Metafields OBLIGATOIRES

| Colonne CSV metafield | Cle | Type Shopify | Obligatoire pour | Valeurs possibles | Exemple |
|----------------------|-----|------|------------------|-------------------|---------|
| `milaura.stone_handle` | `stone_handle` | `single_line_text_field` | bijoux + bougies | Voir table pierres ci-dessous | `amethyste` |
| `milaura.product_type_handle` | `product_type_handle` | `single_line_text_field` | **TOUS les produits** | `bougie`, `bracelet`, `collier`, `bague`, `boucles`, `sauge`, `encens`, `coffret`, `bundle`, `pendentif`, `pierre-roulee`, `cabochon`, `fil-de-perles`, `coussin`, `bol-chantant`, `maillet`, `cymbales` | `bracelet` |

### 3.2 Metafields RECOMMANDES

| Colonne CSV metafield | Cle | Type Shopify | Impact si absent | Exemple |
|----------------------|-----|------|------------------|---------|
| `milaura.baseline` | `baseline` | `single_line_text_field` | Pas de phrase emotionnelle dans les cartes recos | `Reconnecte-toi a ta serenite interieure` |
| `milaura.is_bestseller` | `is_bestseller` | `boolean` | Pas de fallback dans les recommandations | `true` |
| `milaura.scent_handle` | `scent_handle` | `single_line_text_field` | Bougies: pas de lien vers la senteur (quiz/dashboard) | `neroli` |
| `milaura.energy_handle` | `energy_handle` | `single_line_text_field` | Produits sans pierre: pas de badge energie | `sauge` |

### 3.3 Metafields OPTIONNELS — Badges Hero PDP

| Colonne CSV metafield | Cle | Type Shopify | Section PDP | Exemple |
|----------------------|-----|------|-------------|---------|
| `milaura.vertus` | `vertus` | `single_line_text_field` | Hero — badge vertus | `Apaisement, Serenite` |
| `milaura.qualite` | `qualite` | `single_line_text_field` | Hero — badge qualite | `AA (Tres elevee)` |

> **Note** : `energy_handle` (section 3.2) est aussi affiche comme badge Hero. `stone_handle` est egalement lu pour le badge pierre si renseigne.
>
> **IMPORTANT** : `milaura.vertus` et `milaura.qualite` n'existent pas encore comme definitions dans l'admin Shopify. Elles doivent etre creees dans **Settings > Custom data > Products** avant le premier import. Le theme les cherche sous `milaura.vertus` et `milaura.qualite`, PAS sous `custom.benefits` ni `custom.quality`.

### 3.4 Metafields OPTIONNELS — Contenu PDP enrichi

> **STATUT** : Ces metafields sont lus par le code Liquid mais n'existent **pas encore** comme definitions dans l'admin Shopify. Ils doivent etre crees manuellement dans **Settings > Custom data > Products** avant le premier import, OU ils seront auto-crees par Shopify lors de l'import CSV si le format de colonne est correct (ex: `Metafield: milaura.stone_name [single_line_text_field]`).

| Colonne CSV metafield | Cle | Type Shopify | Section PDP | Fallback si absent |
|----------------------|-----|------|-------------|-------------------|
| `milaura.stone_name` | `stone_name` | `single_line_text_field` | Section Pierre + Spotlight | Setting customizer |
| `milaura.stone_image` | `stone_image` | `single_line_text_field` (URL) | Section Pierre + Spotlight | `product.featured_image` |
| `milaura.stone_description` | `stone_description` | `multi_line_text_field` | Section Pierre | Aucun (section vide) |
| `milaura.stone_benefits` | `stone_benefits` | `single_line_text_field` | Section Pierre (3 benefits, virgule) | Aucun |
| `milaura.story_text` | `story_text` | `multi_line_text_field` | Section Histoire emotionnelle | Setting customizer |
| `milaura.ritual_steps` | `ritual_steps` | `json` | Section Rituel (4 etapes max) | Defauts selon product.type |
| `milaura.faq_json` | `faq` | `json` | Section FAQ (8 max) | Defauts selon product.type |
| `milaura.specifications` | `specifications` | `json` | Tabs > Caracteristiques | Valeurs template (bougie) |
| `milaura.benefits_json` | `benefits_json` | `json` | Spotlight (3 benefices) | Blocs template (bougie) |
| `milaura.scent_notes` | `scent_notes` | `json` | Galerie media (pyramide olfactive) | Aucun |
| `milaura.crosssell_products` | `crosssell_products` | `list.product_reference` | Section Cross-sell | Collection fallback |

### 3.5 METAFIELDS LEGACY `custom.*` — NE PAS UTILISER

> **IMPORTANT** : Certains metafields `custom.*` existent dans l'admin Shopify (restes de tests anterieurs). Le code du theme ne les lit **plus du tout**. Ils peuvent etre supprimes ou ignores.

| Metafield legacy | Statut | Equivalent `milaura.*` |
|-----------------|--------|----------------------|
| `custom.stone` | Existe dans admin (type LIST) | `milaura.stone_handle` (type texte simple) |
| `custom.benefits` | Existe dans admin | `milaura.vertus` |
| `custom.origin` | Existe dans admin | Non utilise — integrer dans `Body (HTML)` |
| `custom.quality` | Existe dans admin | `milaura.qualite` |
| `custom.subtitle` | Existe dans admin | `milaura.baseline` |

> **Action recommandee** : Ignorer les `custom.*` dans le bot Python. Ne remplir QUE les `milaura.*`. Les `custom.*` peuvent etre supprimes manuellement dans l'admin Shopify (Settings > Custom data > Products) si tu veux faire le menage.

---

## 4. TABLE DES PIERRES (stone_handle)

**Ces valeurs connectent les produits au quiz, au dashboard et aux recommandations.**

| `stone_handle` (slug) | Nom affiche | Profil quiz associe | Couleur accent | Icone |
|-----------------------|-------------|---------------------|----------------|-------|
| `calcedoine-bleue` | Calcedoine bleue | **apaisement** | #6BA3C7 | bleu |
| `obsidienne-noire` | Obsidienne noire | **protection** | #4A4A4A | noir |
| `amethyste` | Amethyste | **serenite** | #9B7EC8 | violet |
| `quartz-rose` | Quartz rose | **amour** | #D4839E | rose |
| `aventurine-verte` | Aventurine verte | **chance** | #6BAF7B | vert |

**ATTENTION — stoneHandleMap du quiz (JS):**
```
apaisement  → 'calcedoine-bleue'
protection  → 'obsidienne-noire'
serenite    → 'amethyste'
amour       → 'quartz-rose'
chance      → 'aventurine-verte'
```

> **IMPORTANT** : Utiliser les slugs COMPLETS (`calcedoine-bleue`, `obsidienne-noire`, `aventurine-verte`) dans les metafields — pas les formes courtes (`calcedoine`, `obsidienne`, `aventurine`). Le quiz JS matche sur les formes longues.

> Si tu ajoutes des pierres en plus des 5 ci-dessus (ex: lapis-lazuli, citrine, tourmaline...), elles n'auront PAS de profil quiz associe mais fonctionneront quand meme pour le cross-sell stone-first et l'affichage PDP.

---

## 5. TABLE DES SENTEURS (scent_handle) — Bougies uniquement

| `scent_handle` (slug) | Nom affiche | Profil quiz | Notes pyramide |
|-----------------------|-------------|-------------|----------------|
| `neroli` | Neroli | apaisement | Fleur d'oranger / Neroli pur / Notes poudrees |
| `bois-oud` | Bois d'oud | protection | Bois de santal / Oud fume / Resines profondes |
| `the-blanc` | The blanc | serenite | The blanc leger / Notes vertes / Musc blanc |
| `ambre-gris` | Ambre gris | amour | Bergamote / Ambre gris / Vanille douce |
| `fleur-oranger` | Fleur d'oranger | chance | Fleur d'oranger / Hesperidees / Notes vertes |

### Format du metafield `milaura.scent_notes` (JSON)

```json
{
  "top": "Fleur d'oranger",
  "heart": "Neroli pur",
  "base": "Notes poudrees"
}
```

> Ce metafield alimente la pyramide olfactive dans la galerie media du PDP (pour les bougies).

---

## 6. PROFILS EMOTIONNELS (quiz → produit)

| Profil quiz | Handle profil | Pierre associee | Senteur associee | Bougie attendue (handle) |
|-------------|--------------|-----------------|------------------|--------------------------|
| Apaisement | `apaisement` | calcedoine-bleue | neroli | `bougie-reconfort-neroli-calcedoine` |
| Protection | `protection` | obsidienne-noire | bois-oud | `bougie-protection-oud-obsidienne` |
| Serenite | `serenite` | amethyste | the-blanc | `bougie-serenite-the-amethyste` |
| Amour | `amour` | quartz-rose | ambre-gris | `bougie-elegance-ambre-quartz` |
| Chance | `chance` | aventurine-verte | fleur-oranger | `bougie-joie-fleur-oranger-aventurine` |

> **Les 5 bougies sont les "produits stars"** — chacune est le produit recommande principal d'un profil quiz. Elles doivent exister dans Shopify avec les bons metafields.

---

## 7. SYSTEME DE RECOMMANDATIONS — Ce qui doit etre en place

### 7.1 Collection obligatoire : `recos-pool`

**TOUT produit qui doit apparaitre dans les recommandations (PDP, panier, quiz) DOIT etre dans cette collection.**

- Handle: `recos-pool`
- Type: Collection manuelle ou automatique
- Scan limite: 50 premiers produits
- Si la collection n'existe pas → aucune recommandation ne s'affiche

### 7.2 Algorithme de recommandation (PDP + Panier)

```
PASS 1 — Meme pierre, type different (priorite haute)
  Pour chaque produit dans collections['recos-pool'] (max 50):
    SI stone_handle == pierre_du_produit_actuel
    ET product_type_handle != type_du_produit_actuel
    ET id != id_du_produit_actuel
    → Ajouter aux recommandations (max 2)

PASS 2 — Bestsellers (fallback)
  SI PASS 1 a trouve < 2 produits:
    Pour chaque produit dans recos-pool:
      SI is_bestseller == true
      ET pas deja selectionne
      → Ajouter aux recommandations (jusqu'a 2 total)
```

### 7.3 Exemple concret

Utilisateur regarde : **Bracelet Amethyste** (`stone_handle: amethyste`, `product_type_handle: bracelet`)

Resultat recommandation :
1. **Bougie Serenite** (amethyste + bougie) — Pass 1 match
2. **Collier Amethyste** (amethyste + collier) — Pass 1 match

Si pas de collier amethyste → fallback vers un produit `is_bestseller: true`.

### 7.4 Cross-sell section (PDP)

Priorite :
1. Metafield `milaura.crosssell_products` (liste manuelle de refs produits) — si renseigne
2. Collection fallback du customizer (configurable) — sinon

> **Namespace confirme** : `milaura.crosssell_products` (type `list.product_reference`). Ce n'est PAS un metafield Shopify natif.

### 7.5 Quiz cross-sell

Apres le quiz, filtre par `stone_handle` correspondant au profil gagnant. Les produits sont pre-rendus cote serveur et filtres cote client via JS.

---

## 8. MAPPING FOURNISSEUR → SHOPIFY

### Depuis les donnees fournisseur (screen bracelet amethyste)

| Donnee fournisseur | Champ Shopify | Transformation |
|-------------------|---------------|----------------|
| Titre: "BRACELET BOULE 08MM AMETHYSTE BRESIL AA" | `Title` | Reformuler: "Bracelet Amethyste du Bresil" |
| Reference: 3701459010592 | `Variant SKU` | Copier tel quel |
| Prix public conseille: 28.90 EUR | `Variant Price` | Prix indicatif — ajuster selon ta marge |
| Prix HT: 5.78 EUR | (interne) | Prix d'achat, ne pas importer dans Shopify |
| Type: Bracelets | `Type` | Normaliser en lowercase: `bracelet` |
| Pierre(s): Amethyste | `milaura.stone_handle` | Normaliser en slug: `amethyste` |
| Qualite: AA | `milaura.qualite` | Copier: `AA (Tres elevee)` — affiche en badge Hero PDP |
| Couleur: Violet | (description) | Integrer dans Body HTML |
| Apparence: Boule/Polies | (description) | Integrer dans Body HTML |
| Tour de poignet: 16-18 cm | `Option1 Name` / `Option1 Value` | Option: `Taille` = `16-18 cm` |
| Poids: 30g | `Variant Grams` | En grammes |
| Photos produit | `Image Src` | URL apres traitement Nano Banana |
| Declinaisons | Variantes Shopify | Chaque declinaison = 1 variante |
| *(pas de template suffix chez fournisseur)* | `Template Suffix` | **Toujours `milaura-produit`** |

> **Note** : Le "Prix public conseille" apparait sur la page listing du fournisseur, pas sur la fiche produit detaillee. Le scraper doit le recuperer depuis la page de listing ou la page categorie.

### Metafields a generer automatiquement

| Metafield | Logique de generation |
|-----------|----------------------|
| `milaura.product_type_handle` | Depuis le type fournisseur: "Bracelets" → `bracelet`, "Colliers" → `collier`, etc. |
| `milaura.stone_handle` | Depuis la pierre fournisseur: "Amethyste" → `amethyste`, "Quartz Rose" → `quartz-rose`, etc. |
| `milaura.baseline` | A generer/ecrire manuellement (phrase emotionnelle) |
| `milaura.is_bestseller` | `false` par defaut, mettre `true` sur 5-10 produits phares |
| `milaura.scent_handle` | Bougies uniquement, selon le mapping profil (section 5) |
| `milaura.scent_notes` | Bougies uniquement, JSON pyramide olfactive (section 5) |
| `milaura.energy_handle` | Sauge/encens uniquement |
| `milaura.vertus` | Depuis les proprietes fournisseur ou table de mapping pierre → vertus. Ex: `Apaisement, Serenite` |
| `milaura.qualite` | Depuis la qualite fournisseur: "AA" → `AA (Tres elevee)`, "A" → `A (Elevee)`, etc. |
| `milaura.specifications` | JSON array depuis les donnees fournisseur. Ex: `[{"label":"Pierre","value":"Améthyste"},{"label":"Qualité","value":"AA"},{"label":"Taille perles","value":"8mm"},{"label":"Provenance","value":"Brésil"}]` |

---

## 9. TABLE DE NORMALISATION DES SLUGS

### Types produit

| Valeur fournisseur (possible) | → `Type` Shopify | → `milaura.product_type_handle` | Comportement PDP |
|-------------------------------|------------------|--------------------------------|------------------|
| Bracelets, Bracelet, bracelets | `bracelet` | `bracelet` | Bijou (sections pierre, rituel, artisanat) |
| Colliers, Collier, colliers | `collier` | `collier` | Bijou |
| Bagues, Bague, bagues | `bague` | `bague` | Bijou |
| Boucles d'oreilles | `boucles` | `boucles` | Bijou |
| Pendentifs, Pendentif | `pendentif` | `pendentif` | Defaut bijou |
| Bougies, Bougie | `bougie` | `bougie` | Bougie (section senteur VISIBLE) |
| Sauge, Sauges | `sauge` | `sauge` | Sauge/encens |
| Encens | `encens` | `encens` | Sauge/encens |
| Coffrets, Coffret | `coffret` | `coffret` | Coffret |
| Fils de perles, Fil de perles | `fil-de-perles` | `fil-de-perles` | Defaut bijou |
| Pierres roulees, Pierre roulee | `pierre-roulee` | `pierre-roulee` | Defaut bijou |
| Cabochons, Cabochon | `cabochon` | `cabochon` | Defaut bijou |
| Coussins, Coussin | `coussin` | `coussin` | Defaut coffret |
| Bols chantants, Bol chantant | `bol-chantant` | `bol-chantant` | Defaut coffret |
| Maillets, Maillet | `maillet` | `maillet` | Defaut coffret |
| Cymbales, Cymbale, Tingsha | `cymbales` | `cymbales` | Defaut coffret |

### Pierres

| Valeur fournisseur (possible) | → `milaura.stone_handle` |
|-------------------------------|--------------------------|
| Amethyste, Amethyste, amethyste | `amethyste` |
| Quartz Rose, Quartz rose, quartz-rose | `quartz-rose` |
| Obsidienne, Obsidienne noire | `obsidienne-noire` |
| Calcedoine, Calcedoine bleue, Calcedoine | `calcedoine-bleue` |
| Aventurine, Aventurine verte | `aventurine-verte` |
| Lapis Lazuli, Lapis-Lazuli | `lapis-lazuli` |
| Oeil de Tigre, Oeil de tigre | `oeil-de-tigre` |
| Tourmaline noire | `tourmaline-noire` |
| Citrine | `citrine` |
| Labradorite | `labradorite` |
| Pierre de Lune | `pierre-de-lune` |
| Agate | `agate` |
| Jaspe | `jaspe` |
| Cornaline | `cornaline` |
| Howlite | `howlite` |
| Onyx | `onyx` |
| Hematite, Hematite | `hematite` |
| Malachite | `malachite` |
| Sodalite | `sodalite` |

> Ajoute ici toutes les pierres de ton fournisseur. Seules les 5 premieres (calcedoine-bleue, obsidienne-noire, amethyste, quartz-rose, aventurine-verte) sont liees a un profil quiz.

---

## 10. COLLECTIONS A CREER/MAINTENIR

| Handle collection | Type | Contenu | Utilise par |
|-------------------|------|---------|-------------|
| `recos-pool` | **OBLIGATOIRE** | Tous les produits actifs avec metafields renseignes | Recommandations PDP + panier |
| `bijoux` | Recommande | Tous les bijoux | Navigation, filtres |
| `bougies-senteurs` | Recommande | Toutes les bougies | Cross-sell fallback |
| `bracelets` | Optionnel | Tous les bracelets | Navigation |
| `colliers` | Optionnel | Tous les colliers | Navigation |
| `bagues` | Optionnel | Toutes les bagues | Navigation |
| `bestsellers` | Optionnel | Produits phares | Homepage featured |

---

## 11. CHECKLIST IMPORT PRODUIT

Pour chaque produit importe, verifier :

- [ ] `Handle` unique, format slug
- [ ] `Title` reformule (pas le titre fournisseur brut)
- [ ] `Type` normalise (lowercase, singulier) — **critique pour le PDP**
- [ ] `Template Suffix` = `milaura-produit` — **critique pour le PDP**
- [ ] `milaura.product_type_handle` = meme valeur que `Type`
- [ ] `milaura.stone_handle` renseigne (slug normalise, forme LONGUE)
- [ ] `milaura.vertus` renseigne (bienfaits principaux, badge Hero)
- [ ] `milaura.qualite` renseigne si info dispo chez fournisseur (AA, A, etc.)
- [ ] `Variant SKU` = reference fournisseur
- [ ] `Variant Price` = prix de vente TTC
- [ ] Au moins 1 image importee
- [ ] Produit ajoute a la collection `recos-pool`

### Pour les bougies, en plus :
- [ ] `milaura.scent_handle` renseigne
- [ ] `milaura.scent_notes` renseigne (JSON pyramide olfactive)
- [ ] `Type` = `bougie` (active la section senteur PDP)

### Pour les produits stars (5 bougies quiz) :
- [ ] Handle correspond au mapping profil (section 6)
- [ ] `milaura.is_bestseller` = `true` pour au moins 1 bougie

### Pour un enrichissement PDP complet :
- [ ] `milaura.baseline` — phrase emotionnelle
- [ ] `milaura.stone_name` — nom affiche de la pierre
- [ ] `milaura.stone_description` — description poetique
- [ ] `milaura.stone_benefits` — 3 bienfaits separes par virgule
- [ ] `milaura.story_text` — histoire emotionnelle
- [ ] `milaura.ritual_steps` — JSON array de 4 etapes (sinon defauts auto)
- [ ] `milaura.specifications` — JSON array de caracteristiques (sinon defauts bougie du template)

### NE PAS remplir :
- [ ] ~~`custom.*`~~ — namespace legacy, ignore par le theme

---

## 12. FORMAT CSV SHOPIFY — Exemple ligne complete

```csv
Handle,Title,Body (HTML),Vendor,Type,Tags,Published,Template Suffix,Variant SKU,Variant Price,Variant Compare At Price,Variant Grams,Variant Inventory Qty,Variant Requires Shipping,Variant Taxable,Image Src,Image Alt Text,Option1 Name,Option1 Value,Status
bracelet-amethyste-bresil-8mm,Bracelet Amethyste du Bresil,"<p>Bracelet en perles d'amethyste naturelle du Bresil, qualite AA. Perles de 8mm, finition polie. Tour de poignet 16-18 cm.</p>",MilAura,bracelet,"amethyste,bresil,qualite-AA",true,milaura-produit,3701459010592,28.90,,30,15,true,true,https://cdn.milaura.fr/bracelet-amethyste.jpg,Bracelet amethyste 8mm pierres naturelles,Taille,16-18 cm,active
```

### Metafields (format CSV Shopify matrixify ou import natif) :

```csv
Handle,Metafield: milaura.stone_handle [single_line_text_field],Metafield: milaura.product_type_handle [single_line_text_field],Metafield: milaura.baseline [single_line_text_field],Metafield: milaura.is_bestseller [boolean],Metafield: milaura.vertus [single_line_text_field],Metafield: milaura.qualite [single_line_text_field]
bracelet-amethyste-bresil-8mm,amethyste,bracelet,Reconnecte-toi a ta serenite interieure,false,"Apaisement, Serenite",AA (Tres elevee)
```

> **Note** : Pour l'import natif Shopify CSV, les metafields sont dans des colonnes nommees `Metafield: namespace.key [type]`. Pour Matrixify, le format est similaire. Les metafields de section 3.4 (stone_name, stone_description, etc.) seront auto-crees par Shopify lors du premier import si le format de colonne est correct.

---

## 13. METAFIELDS NON-PRODUIT (pour reference)

### Customer metafields (namespace: `milaura`)

| Cle | Type | Ecrit par | Lu par |
|-----|------|-----------|--------|
| `quiz_history` | JSON | Quiz (JS) | Dashboard (JS) — futur |
| `last_profile_handle` | Texte | Quiz (JS) | Dashboard (JS) — futur |

> Ces metafields sont geres automatiquement par le quiz. Ne pas les importer/modifier manuellement.

---

## 14. RESUME VISUEL — Flux de donnees

```
FOURNISSEUR (scraping)
    |
    v
PYTHON (normalisation)
    |  - Slug handles (type, pierre)
    |  - Prix TTC (depuis "prix public conseille" sur page listing)
    |  - Images → Nano Banana
    |  - SKU
    |  - Template Suffix = "milaura-produit" (hardcode)
    |
    v
CSV SHOPIFY
    |  - Champs natifs (handle, title, type, price, template_suffix...)
    |  - Metafields milaura.* (stone_handle, product_type_handle...)
    |  - PAS de metafields custom.* (legacy, ignore)
    |
    v
IMPORT SHOPIFY
    |
    |──→ Collection `recos-pool` (ajouter le produit)
    |
    |──→ PDP (product.milaura-produit.json) ← Template Suffix = milaura-produit
    |      |── Hero: badges pierre/energie/vertus/qualite
    |      |── Tabs: description
    |      |── Pierre: stone_name, stone_image, stone_benefits
    |      |── Senteur: VISIBLE si Type=bougie (scent_notes JSON)
    |      |── Rituel: defauts selon Type OU ritual_steps metafield
    |      |── Artisanat: badges selon Type
    |      |── Cross-sell: milaura.crosssell_products OU collection fallback
    |      |── FAQ: defauts selon Type OU faq metafield
    |      └── CTA final: prix, stock, add-to-cart
    |
    |──→ RECOMMANDATIONS
    |      |── PDP: meme pierre + type different (recos-pool)
    |      |── Panier: meme pierre premier article (recos-pool)
    |      └── Quiz: stone_handle match profil gagnant
    |
    └──→ DASHBOARD CLIENT
           └── Profil quiz → bougie star → pierre → senteur
```

---

## 15. METAFIELDS A CREER DANS L'ADMIN SHOPIFY

Avant le premier import, creer ces definitions dans **Settings > Custom data > Products** :

### Deja existants (verifies dans l'admin) :
- `milaura.stone_handle` — single_line_text_field (Handle pierre)
- `milaura.product_type_handle` — single_line_text_field (Type produit)
- `milaura.baseline` — single_line_text_field (Baseline produit)
- `milaura.is_bestseller` — boolean (Best seller)
- `milaura.energy_handle` — single_line_text_field (Handle energie)
- `milaura.scent_handle` — single_line_text_field (Handle senteur) — 0 produits remplis

### A creer (n'existent PAS dans l'admin) :
- `milaura.vertus` — single_line_text_field (bienfaits, badge Hero)
- `milaura.qualite` — single_line_text_field (grade qualite, badge Hero)
- `milaura.specifications` — json (caracteristiques produit, array d'objets {label, value})
- `milaura.benefits_json` — json (benefices Spotlight, array d'objets {emoji, title, description})
- `milaura.scent_notes` — json (pyramide olfactive)
- `milaura.stone_name` — single_line_text_field
- `milaura.stone_image` — single_line_text_field (URL)
- `milaura.stone_description` — multi_line_text_field
- `milaura.stone_benefits` — single_line_text_field
- `milaura.story_text` — multi_line_text_field
- `milaura.ritual_steps` — json
- `milaura.faq_json` — json
- `milaura.crosssell_products` — list.product_reference

### A SUPPRIMER (legacy, non utilises) :
- `custom.stone` — remplace par `milaura.stone_handle`
- `custom.benefits` — remplace par `milaura.vertus`
- `custom.origin` — non utilise (integrer dans Body HTML)
- `custom.quality` — remplace par `milaura.qualite`
- `custom.subtitle` — remplace par `milaura.baseline`
