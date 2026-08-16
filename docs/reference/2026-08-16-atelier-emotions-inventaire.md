# L'Atelier des emotions - donnees physiques requises

Date : 2026-08-16

Statut : gabarit de collecte, aucune disponibilite commerciale deduite sans comptage et validation explicite

## 1. Donnees a demander a Patrice pour chaque achat

- facture ou preuve d'achat ;
- nom du fournisseur et lien ou reference du produit ;
- date de commande et date de reception ;
- quantite commandee et unite du lot ;
- prix hors taxes, TVA, port, douane et autres frais rendus atelier ;
- description de matiere exacte fournie par le vendeur ;
- document eventuel soutenant une allégation de matiere ou de conformite ;
- photo de l'emballage et de la reference recue ;
- ecart constate entre la commande et la reception.

Une description fournisseur n'est pas automatiquement une preuve publique. Toute mention de matiere doit etre classee comme `prouvee`, `declaree fournisseur` ou `non prouvee`.

## 2. Donnees a demander a Karine pour chaque composant

- identifiant atelier unique ;
- nom public factuel et nom interne de rangement ;
- type : palette de perles, finition de lettres, charm, fil, fermoir, separateur ou emballage ;
- emplacement physique dans l'atelier ;
- quantite comptee, reservee, endommagee et reellement disponible ;
- unite de comptage ;
- diametre, epaisseur, largeur, hauteur et diametre du trou selon le type ;
- poids unitaire ou poids du lot avec la methode utilisee ;
- couleur observee et variations importantes entre pieces ;
- photo nette du composant exact sur fond neutre ;
- compatibilite avec le fil, le fermoir et le montage du pilote ;
- consommation minimum, moyenne et maximum par bracelet pilote ;
- test physique effectue, date, personne et resultat ;
- seuil d'alerte avant rupture ;
- decision explicite `disponible a la vente` ;
- date et auteur du dernier comptage.

## 3. Donnees a valider pour le bracelet pilote

### Construction

- produit Shopify utilise comme base et identifiant de variante par taille ;
- schema de montage photographie ou dessine par Karine ;
- type, diametre et longueur de fil ;
- methode de fermeture et de securisation ;
- nombre de perles par taille ;
- espace pris par une lettre, un separateur et un charm ;
- compatibilites et incompatibilites entre composants ;
- tolerances acceptables de couleur, taille et ordre de montage ;
- test de traction, test de port et criteres de rejet ;
- instructions d'entretien factuelles.

### Personnalisation

- alphabet reellement present, caractere par caractere ;
- quantite disponible de chaque lettre et de chaque chiffre ;
- longueur maximale du mot pour chaque taille ;
- espace, apostrophe, tiret, accent et symbole autorises ;
- regle en cas de mot impossible a monter ;
- regle de confirmation de l'orthographe ;
- position autorisee du charm ;
- photo d'un montage temoin valide.

### Economie et capacite

- cout rendu atelier de chaque composant ;
- consommation reelle mesuree sur un montage temoin ;
- pertes et rebuts moyens ;
- temps actif de preparation, montage, controle et emballage ;
- cout de l'emballage ;
- prix TTC decide et marge calculee ;
- nombre maximum de bracelets fiables par jour et par semaine ;
- delai de preparation publiable ;
- seuil de fermeture automatique des commandes ;
- procedure en cas de rupture apres commande.

### Service et retour

- photo ou preuve conservee de la configuration commandee ;
- controle qualite avant expedition et personne responsable ;
- procedure si la cliente signale une faute de montage ;
- distinction entre defaut, erreur de MilAura, erreur d'orthographe confirmee et changement d'avis ;
- cadre de retour et de retractation relu par un conseil competent avant publication ;
- information precontractuelle a placer dans le parcours, sans la rediger a partir de ce seul document.

## 4. Regles d'activation dans Shopify

Un bloc de composant est achetable seulement si :

1. `component_id`, `public_label` et la photo exacte sont remplis ;
2. la quantite physique a ete comptee ;
3. `compatible_with_pilot` a ete valide par Karine ;
4. `available_for_sale` a ete decide explicitement ;
5. le cout et la consommation du pilote sont connus ;
6. la combinaison n'excede pas la capacite de lettres ou de montage.

Le stock brut du fournisseur, une quantite dans Shopify ou la presence d'une photo ne suffisent pas a activer l'option.

## 5. Fichiers gabarits

Le fichier `docs/reference/2026-08-16-atelier-emotions-inventaire.csv` contient les colonnes a remplir. Il ne contient aucune ligne exemple pour eviter qu'une valeur fictive soit confondue avec un inventaire reel.
