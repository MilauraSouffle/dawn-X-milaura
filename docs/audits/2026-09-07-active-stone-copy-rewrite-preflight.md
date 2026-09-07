# Reprise des contenus `La pierre`

Date : 2026-09-07 15:24 CEST
Statut : preflight en lecture seule, aucune écriture Shopify

## État relu dans Shopify

- `765` produits relus directement dans Shopify.
- `248` produits sont ACTIVE et possèdent tous une URL Online Store.
- La file historique contient `228` produits ACTIVE associés à un contenu pierre.
- Les `228` identites sont toujours ACTIVE au moment du preflight.
- `172` fiches ont un `stone_description` trop court.
- `42` fiches avec pierre canonique n'ont aucun `stone_description`.
- `5` textes dépassent 240 caractères mais restent à réécrire sémantiquement.
- `2` produits multiminéraux exigent un texte spécial : l'orgonite 7 chakras et le coffret découverte 7 chakras.
- `7` fiches exigent une correction de classement avant toute rédaction : cinq savons, un bracelet en palo santo et une plaque en bois de tilleul. Leur valeur `stone_name` actuelle ne nomme pas une pierre exploitable.

La file de travail exacte est `docs/audits/2026-09-07-active-stone-copy-rewrite-queue.csv`. Elle contient l'identité Shopify, le stock courant, la pierre, la symbolique, la qualité, la provenance lorsqu'elle est renseignée et le texte actuel. Les colonnes de proposition et de validation Patrice restent vides.

## Contrat éditorial retenu

Pour chaque vraie fiche pierre :

1. trois à cinq phrases et 240 à 900 caractères ;
2. le nom de la pierre et son aspect visible ;
3. les variations naturelles pertinentes ;
4. la symbolique en lithothérapie déjà renseignée pour la fiche ;
5. au maximum une phrase reliant la pierre au produit ;
6. aucune provenance, certification ou promesse médicale inventée ;
7. aucun texte sur le fermoir, les maillons, la tenue ou la manière de porter le bijou dans cet onglet.

## Lot pilote proposé, cinq produits en stock

Ces textes sont des propositions de style. Ils ne sont pas écrits dans Shopify.

### Bracelet Horus doré en sodalite 6 mm

Produit `10669625966939`, EAN `3667407008090`, stock Shopify `3`.

> La sodalite se reconnaît à son bleu profond traversé de zones blanches ou plus claires. Chaque fragment présente des contours, des nuances et un veinage différents, ce qui rend le dessin de la pierre naturellement irrégulier. En lithothérapie, la sodalite est associée à l'expression, à la clarté et à la confiance. Sur Horus, ses éclats bleus créent un contraste net avec le métal doré.

### Pierre roulée en rhodonite, galet de 45 mm

Produit `10696094056795`, EAN `3701459076604`, stock Shopify `2`, provenance renseignée `Madagascar`.

> La rhodonite de Madagascar mêle une base rose à des inclusions noires plus ou moins marquées. Les veinures, la proportion de noir et la forme du galet varient naturellement d'une pierre à l'autre. En lithothérapie, la rhodonite est associée à l'amour et à l'équilibre émotionnel. Elle accompagne une intention de bienveillance envers soi et dans les relations.

### Bracelet en zoïsite, perles de 10 mm

Produit `10696093172059`, EAN `3701459023837`, stock Shopify `1`.

> La zoïsite présente une base verte ponctuée de zones noires et de nuances violacées. La répartition de ces couleurs varie selon les perles, tandis que leur poli souligne les contrastes naturels de la matière. En lithothérapie, la zoïsite est associée à l'énergie et au renouveau. Elle accompagne les périodes de changement et l'envie de retrouver un nouvel élan.

### Collier doré en quartz rose

Produit `10521073385819`, EAN `3701459098088`, stock Shopify `2`.

> Le quartz rose se distingue par une teinte rose pâle, parfois laiteuse ou légèrement translucide. Ses voiles, inclusions et différences de nuance rendent chaque pierre naturellement unique. En lithothérapie, le quartz rose est associé à l'amour, à la douceur et à l'attention portée à soi. Sur ce collier, sa couleur claire forme un contraste doux avec le métal doré.

### Bracelet doré en améthyste, cornaline et cristal de roche

Produit `10696086454619`, EAN `3667407021518`, stock Shopify `1`.

> Cette association réunit le violet de l'améthyste, les nuances orange à rouges de la cornaline et la transparence parfois laiteuse du cristal de roche. Les facettes et les inclusions font varier leurs reflets d'une pierre à l'autre. En lithothérapie, l'améthyste est liée au calme, la cornaline à l'énergie et le cristal de roche à la clarté. Leur réunion accompagne une recherche d'équilibre entre élan et recul.

## Risque de conversion constaté en parallèle

- `56` des `248` produits ACTIVE sont actuellement à stock Shopify nul, soit `22,6 %` du catalogue public.
- Les `56` possedent une URL Online Store.
- `55` ont une politique `DENY` et ne peuvent donc pas être achetés.
- `1` a une politique `CONTINUE` et reste commandable malgré le stock nul.
- Les `56` appartiennent a l'ancien workflow ou n'ont pas de date d'enrichissement recente.

Ces pages ne constituent pas automatiquement une pénalité SEO. En revanche, elles créent un risque commercial direct lorsqu'un visiteur arrive sur une fiche ou une collection et rencontre un produit non achetable sans alternative claire. Le lot rupture doit donc être arbitré rapidement, sans confondre stock physique, disponibilité fournisseur et publication publique.

## Ordre recommandé

1. Valider le ton des cinq textes pilotes.
2. Reprendre hors ligne les `219` fiches avec pierre canonique, traiter à part les `2` compositions minérales et corriger les `7` classements atypiques.
3. Écrire Shopify par petits lots avec snapshot avant, contrôle des seuls metafields autorisés et pullback après.
4. Auditer ensuite les `56` produits publics à stock nul par EAN, disponibilité fournisseur et valeur SEO avant de choisir entre vente sur commande, maintien temporaire, retrait des collections ou retraite réversible.
