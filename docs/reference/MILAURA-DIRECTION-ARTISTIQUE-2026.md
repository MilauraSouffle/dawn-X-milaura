# MilAura - Direction artistique minerale epuree 2026

Date de validation : 2026-08-13

Validation creative : Patrice Allie

Statut : direction canonique pour les nouvelles interfaces et la migration progressive du theme.

Cette direction complete le Brand System valide le 2026-08-04. Elle ne change ni la palette, ni les polices, ni le logo. Elle fixe la maniere de composer les surfaces, les cartes et les actions dans le theme.

## 1. Intention

MilAura doit paraitre simple, sobre, efficace et premium. Le produit et la photographie portent la valeur. L'interface les accompagne avec des signes fins, peu nombreux et parfaitement alignes.

Reference d'exigence : Van Cleef & Arpels pour la respiration, la priorite donnee aux images et la retenue des controles, sans copier ses compositions, ses signes ou son identite.

## 2. Principes obligatoires

1. La photographie reste la surface principale. Aucun panneau d'information ne masque un bijou.
2. Une composition utilise le minimum de surfaces opaques. Sur un decor de marque, les cartes sont transparentes par defaut.
3. Les cadres sont fins, mineraux et continus. Ils organisent, ils ne decorent pas.
4. L'or mat souligne une action ou un detail. Il ne remplit pas une grande surface.
5. L'aigue-marine structure les contours, les etats fonctionnels et les transitions de section.
6. Une section porte un seul geste visuel distinctif. Les effets concurrents sont retires.
7. La densite est controlee. Les titres, prix et actions forment un groupe compact, sans bloc blanc ajoute par reflexe.
8. Le rendu ne doit jamais rappeler les composants natifs de Dawn poses sans direction artistique.

## 3. Cartes produit

- La carte est un seul objet : photographie, nom, prix, quantite et action.
- Fond transparent par defaut sur les univers visuels MilAura.
- Cadre de 1 px maximum, aigue-marine ou nuance issue des tokens.
- Rayon contenu et coherent. Le rayon ne doit pas transformer la carte en grosse pilule.
- Ombre reservee a la photographie si elle aide sa separation. Pas d'ombre lourde sur le cadre complet.
- Informations sous l'image, jamais superposees sur le produit.
- Titre, prix et controles restent rapproches et alignes, y compris lorsque le titre passe sur deux lignes.
- Sur mobile, la photographie garde la priorite et les controles ne creent pas une longue pile verticale.

La reference implementee et validee est la Selection d'aout de la homepage dans `sections/milaura-selection-atelier.liquid` au commit `6234c625`.

## 4. Actions et controles

- Une action editoriale ou une action de carte utilise par defaut un libelle clair et un filet fin, sans gros fond rempli.
- Le selecteur de quantite peut etre dessine par une ligne aigue-marine, sans boite visible.
- L'ajout panier d'une carte peut etre dessine par une ligne or, sans rectangle opaque.
- Les actions commerciales majeures de la PDP, du panier et du paiement doivent rester immediatement identifiables. Elles peuvent conserver une surface, mais cette surface reste plate, fine et contenue, sans volume artificiel.
- Les gros boutons ronds, les pastilles prune massives, les gradients decoratifs, les ombres volumineuses et les doubles contours generiques sont interdits.
- `Trouver ma pierre` reste l'exception cabochon deja validee.
- Le style visuel fin ne reduit jamais la cible tactile : 44 px recommandes, 40 px minimum lorsque la composition l'exige.
- Focus clavier visible, contraste AA et etats disabled/loading explicites.

Le detail des usages vit dans `docs/reference/MILAURA-CTA-SYSTEM-2026.md`.

## 5. Titres, separateurs et respiration

- Les titres utilisent le composant partage `milaura-section-heading` quand il convient.
- Gloock porte le titre editorial. Dancing Script reste une signature courte et non essentielle.
- Les separateurs sont des filets de 1 px, pleine largeur ou alignes sur une grille intentionnelle.
- Aucun petit trait epais pose seul pour simuler une signature premium.
- L'espace blanc est utile seulement s'il cree une respiration perceptible. Il ne doit pas retarder artificiellement l'acces au contenu ou ajouter du scroll sans valeur.

## 6. Hero et media

- Le Hero est media-first et ne repart pas de zero lorsqu'une composition est deja validee.
- Une image forte ou une video reelle porte l'immersion. Les controles, textes et CTA restent discrets.
- Une seule animation principale par ecran.
- Pas de mannequin genere pour simuler une campagne de joaillerie premium.
- Poster reel, `prefers-reduced-motion`, economie de donnees et absence de nouvelle librairie JavaScript.

Brief operationnel : `docs/superpowers/specs/2026-08-12-milaura-bandeau-hero-immersif.md`.

## 7. Anti-patterns

- panneau blanc ajoute sous une photo uniquement pour contenir les informations ;
- gros bouton prune ou dore sur chaque carte ;
- aspect bouton natif Dawn ;
- gradient sombre decoratif sans fonction ;
- glassmorphism, flou de fond ou empilement d'ombres ;
- pictogramme generique de diamant, gemme ou etoile pour fabriquer du luxe ;
- multiplication des pilules, badges et cadres ;
- valeurs hex, polices ou rayons dupliques dans les sections ;
- migration globale aveugle de `.button` ou `.card`.

## 8. Methode de propagation

1. Inventorier les familles de cartes et d'actions avant de modifier le CSS.
2. Definir les variantes reutilisables dans les assets et snippets partages.
3. Valider une page representative par parcours : homepage, collection, PDP et panier.
4. Controler mobile 360, 390 et 430 px avant desktop.
5. Mesurer lisibilite, debordement, taille des cibles, ajout panier, CLS et contraste.
6. Obtenir le GO visuel explicite de Patrice sur le theme de developpement.
7. Propager par lots cibles, avec pullback Shopify apres chaque deploiement.

## 9. Sources techniques

- tokens : `assets/milaura-tokens.css` ;
- titres : `assets/milaura-section-heading.css` et `snippets/milaura-section-heading.liquid` ;
- CTA : `docs/reference/MILAURA-CTA-SYSTEM-2026.md` ;
- symboles : `docs/reference/MILAURA-VISUAL-SYMBOLS-2026.md` ;
- reference de carte approuvee : `sections/milaura-selection-atelier.liquid` ;
- registre des lots : `docs/workstreams.md`.
