# Digitous

## Pré requis

Pour lancer le projet vous devez avoir `npm` et `node` d'installés.
La partie frontend tourne sur le port `3000` et le backend sur le `8443`, soyez donc sur de n'avoir aucun service deja présent sur ces ports.

### Lancement

#### Frontend

```bash
cd frontend
npm install
npm start
```

#### Backend

```bash
cd backend
npm install
npm run dev
```

### Conception

#### Frontend

Le frontend est écrit en `React` et compilé grâce à `webpack`. Il utilise la librairie `bootstrap` pour le design par défault, auquel j'ai rajouté une petite couche de css modules. La communication avec le back se fait avec `axios`.

#### Backend

Le backent est écrit en `Node.Js`, avec `typescript`. J'utilise plus particulierement la librairie `express` pour la création de l'API et la librairie `node-input-validator` pour la validation de formulaire

### TODO

Par manque de temps les champs suivants n'ont pas été traité:

* Utilisation de `passport.js` pour l'enregistrement d'utilisateur, aujourd'hui la liste est uniquement présente en mémoire.

* Gestion des autres champs utilisateur (status, password, ...) qui ne sont aujourd'hui pas sauvegardés. Plus particulièrement les photos de profil (la gestion de ces dernières étant particulierement contraignante je l'ai rendu non obligatoire contrairement à la consigne).
