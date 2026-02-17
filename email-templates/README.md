# Templates Emails MilAura

## Installation

Pour chaque template :

1. Va dans **Admin Shopify > Paramètres > Notifications**
2. Clique sur la notification correspondante (ex: "Confirmation de commande")
3. Clique **"Modifier le code"**
4. **Sélectionne tout** (Ctrl+A / Cmd+A) et **supprime** le code existant
5. **Copie-colle** le contenu du fichier HTML correspondant
6. Clique **"Enregistrer"**
7. Envoie-toi un email de test via **"Aperçu"** pour vérifier

## Correspondance fichiers → notifications Shopify

| Fichier | Notification Shopify |
|---------|---------------------|
| `01-activation-compte.html` | Invitation au compte client |
| `02-bienvenue.html` | Bienvenue du compte client |
| `03-reset-mot-de-passe.html` | Réinitialisation du mot de passe client |
| `04-confirmation-commande.html` | Confirmation de commande |
| `05-expedition.html` | Confirmation d'expédition |
| `06-maj-expedition.html` | Mise à jour de l'expédition |
| `07-commande-annulee.html` | Commande annulée |
| `08-remboursement.html` | Remboursement de la commande |
| `09-panier-abandonne.html` | Paiement abandonné |
| `10-carte-cadeau.html` | Carte-cadeau créée |

## Design

- Header : logo MilAura centré sur fond beige
- Séparateur doré (#C0A062)
- Corps : carte blanche avec kicker doré + titre Georgia serif + texte chaleureux
- Bouton CTA : doré arrondi, texte blanc
- Footer : infos MilAura + copyright
- Ton : tutoiement, chaleureux, luxe accessible

## Notes

- Les variables Liquid `{{ ... }}` sont spécifiques à Shopify — ne pas les modifier
- Le logo est hébergé sur ImageKit (URL stable)
- Pour modifier la couleur dorée : chercher/remplacer `#C0A062`
- Pour modifier le beige de fond : chercher/remplacer `#FDFBF7`
