---
title: Connexion des voyageurs
---

<Documentation link="https://appwrite.io/docs/products/auth/email-password#login"></Documentation>

<Hero
title="Connexion des voyageurs 🔐"
image="/assets/workshop/authentication/house-island.jpeg"
description="Nous voici arrivés devant la batisse, la prochaine étape de notre voyage : la connexion des voyageurs.
Avant de pouvoir déverrouiller l'indice qui nous attend, nous devons d'abord accéder à notre application en étant
connecté. Dans cette section, nous allons explorer en détail le processus de connexion et déconnexion et comment
il peut être géré avec Appwrite 🔐"
/>

::: info ⚠️ Configuration initiale
Avant de commencer la procédure de connexion des voyageurs, assurez-vous que votre application est correctement
configurée pour interagir avec Appwrite et que vous avez suivi les étapes de configuration dans la
partie [Configuration](/workshop/configuration/appwrite-configuration) 📝 ainsi que la
partie précédente pour la [création de votre compte voyageur](/workshop/authentication/register)👩🏼‍✈️
:::

## Connexion d'un voyageur 🚪

Dans notre cas, nous utiliserons le SDK Appwrite pour permettre à un voyageur de se connecter. Depuis l'application
AppVenture, vous pouvez vous rendre sur la page de connexion `/login`. Le formulaire pour collecter les informations
d'identification du voyageur est déjà prêt à l'emploi mais, comme pour celui d'inscription, il semble que des **morceaux
de code pour communiquer avec Appwrite soient manquants**... Vous devrez donc les compléter à nouveau ! 🧑‍🔧

## Étape 1️⃣ : Écriture de la fonction de connexion

En sachant que le service Account a déjà été initialisé dans la partie précédente, il ne nous reste plus qu'à
compléter la fonction `login`, que vous pouvez trouver dans le fichier `src/api/services/login.service.ts`. Rien de
plus simple, cette fonction prend en paramètre l'e-mail et le mot de passe du voyageur et utilise l'API Appwrite pour
effectuer la connexion.

<Solution>

```ts
import {account} from '@/api/config/client.config';

const login = async (email: string, password: string) => {
  try {
    await account.createEmailSession(email, password);
    await loadAccount();
    router.push(ROUTES.dashboard);
  } catch (error: any) {
    const appwriteException = error as AppwriteException;
    console.error(appwriteException.message);
  }
};
```

</Solution>

## Étape 2️⃣ : Compléter la fonction d'inscription

Une fois que l'on a récupéré la session du voyageur, il est nécessaire de s'authentifier, car
la connexion n'est pas automatique après l'inscription. Pour cela, nous avions besoin tout à l'heure de la
fonction `login` que vous venez de créer... Vous pouvez donc maintenant compléter la fonction `register` en appelant la
votre fonction avec les bons paramètres.

<Solution>

```ts
import {account} from '@/api/config/client.config';

const register = async (email: string, password: string, name: string) => {
  try {
    const session = await account.create(ID.unique(), email, password, name);
    setUser(session);
    await login(email, password); // 👈 // [!code ++]
    router.push(ROUTES.dashboard);
  } catch (error: any) {
    const appwriteException = error as AppwriteException; // [!code ++]
    console.error(appwriteException.message); // [!code ++]
  }
};
```

</Solution>

## Étape 3️⃣ : Connectez-vous !

Une fois que la fonction `login` est complétée, les voyageurs devraient pouvoir se connecter à leur compte ! 🥳 Tout le
reste du code est déjà écrit, vous n'avez qu'à vous rendre sur la page de connexion `/login` et à utiliser le formulaire
pour vous connecter !

## Étape 4️⃣ : Qui dit connexion, dit déconnexion

Maintenant que vous pouvez vous connecter, il serait bien de pouvoir vous déconnecter aussi, non ? 🤔

Pour cela, nous allons à nouveau utiliser le service Account pour déconnecter notre voyageur. Vous pouvez trouver
la fonction `logout` dans le fichier `src/api/services/logout.service.ts`. Cette fonction ne prend aucun paramètre et
utilise l'API Appwrite pour détruire la session du voyageur. Vous pourrez l'utiliser à la fin du workshop pour marquer
la fin de votre aventure ! 🏁

<Solution>

```ts
import {account} from '@/api/config/client.config';

const logout = async () => {
  await account.deleteSession('current');  // [!code ++]
  setUser(null);
  router.push(ROUTES.dashboard);
};
```

</Solution>

<br />

**Après vous êtres connectés avec succès, vous êtes prêt à explorer davantage les trésors qui vous attendent dans notre
aventure sur l'île, et notamment à explorer le service Users d'Appwrite pour en apprendre plus sur les voyageurs
passés ! 🗺️**