# Test technique - Contrôle des dates des titres de séjour #

Ceci est un test technique en TypeScript pour évaluer votre raisonnement lors du process de recrutement de Bruce. Il est inspiré de cas concrets rencontrés lors du développement de notre plateforme.

## Énoncé

Le but de cet exercice est d'écrire une fonction qui vérifie si les titres de séjour d'un candidat couvrent bien l'ensemble de la période d'un contrat.

La fonction appelée sera la fonction [verify](./src/index.ts), qui prend en arguments :

- Un objet [Mission](./src/frame.ts), qui a pour propriétés `since` (début du contrat) et `until` (fin du contrat),
- Un tableau de titres [Permit](./src/frame.ts), qui a également pour propriétés `since` (début de validité du titre) et `until` (fin de validité du titre).

La fonction demandée devra retourner un `boolean`: `true` si la période de contrat est bien couverte, `false` sinon.

__nota__ : Les valeurs `since` et `until` sont considérées comme incluses, c'est à dire que si `until` est au 24 Juillet, on considère que le titre ou la mission comprend cette journée.

## Instructions

1. Cloner ce repo localement,
2. Installer les dépendances (`npm ci`),
3. Compiler le projet (`npm run build`, `npm run winbuild` pour Windows),
4. Lancer les tests de vérification (`npm run verify`, `npm run winverify` pour Windows).


Pour répondre, il suffit de reprendre le projet et d'implémenter la méthode `verify`, puis de partager le code via un repository git.
Vous êtes libre d'utiliser n'importe quel librairie, architecture de fichier ou tout outil qui vous sera utile.

Il est à noter que les tests de vérification ne couvrent pas l'ensemble des cas possibles.
