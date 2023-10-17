---
title: Gestion des voyageurs
---

<Documentation link="https://appwrite.io/docs/references/cloud/server-nodejs/users"></Documentation>

<Hero
title="Gestion des voyageurs 🧭"
image="/assets/workshop/authentication/house-end.jpeg"
description="Bienvenue en haut de l'île, à l'auberge des voyageurs ! Où vous aurez un aperçu complet de tous les
voyageurs étant passés sur l'île. Avec le pouvoir du SDK côté serveur d'Appwrite, vous pouvez interagir avec tous
les utilisateurs, afficher leurs informations et gérer leurs comptes en un seul endroit. Explorez cette île
d'administration pour découvrir les fonctionnalités de gestion des voyageurs ! 🧭"
/>

::: info ⚠️ Configuration initiale
Assurez-vous que votre application est correctement configurée pour interagir avec le SDK côté serveur d'Appwrite avant
de commencer la gestion des voyageurs. Si vous avez suivi les étapes de configuration dans la
partie [Configuration](/workshop/configuration/appwrite-configuration), vous êtes prêt à continuer 📝.
:::

:::tip Account vs Users
L'API **Account** est l'API que vous devez utiliser dans vos applications client avec les SDK Client comme le web,
Flutter, les applications mobiles et natives. L'API Account crée des sessions, qui représentent un utilisateur
authentifié et sont attachées à son compte. Les sessions respectent les autorisations, ce qui signifie que
les utilisateurs ne peuvent accéder aux ressources que s'ils ont reçu les autorisations appropriées.

L'API **Users** est une API dédiée à la gestion des utilisateurs du point de vue de l'administrateur. Elle doit être
utilisée avec des applications backend ou côté serveur dotées de SDK serveur. L'API Users utilise des clés d'API
au lieu de sessions. Cela signifie qu'ils ne sont pas limités par des autorisations, mais par les champs d'application
accordés à la clé API utilisée.
:::

## Vue d'ensemble des voyageurs 📊

Dans cette section, nous allons explorer comment utiliser le SDK côté serveur d'Appwrite pour récupérer des informations
sur les voyageurs. Vous pourrez voir la liste complète des voyageurs, afficher leurs profils, et en apprendre davantage
sur eux ! 🤜🏼 🤛🏼

Pour commencer, nous devons initialiser notre SDK pour le service **Users**. Pour cela, même démarche que pour le
service **Account**, nous allons importer le service **Users** et créer une nouvelle instance en lui passant en
paramètres votre client Appwrite, mais aussi une clé API valide !

## Étape 1️⃣ : Création d'une clé API

Les clés API sont des secrets utilisés par les SDK du serveur Appwrite et le CLI Appwrite pour prouver leur identité.

:::tip ⚠️ Bonne pratique
Il est préférable de n'accorder à une clé API que les champs d'application dont vous avez besoin pour une action donnée.
Les clés API doivent être traitées comme un secret. Ne les partagez jamais et gardez-les en dehors des applications
clientes.
:::

Rendez-vous dans la console Appwrite, dans la partie **Overview**. Dans la partie **Integrations**, cliquez sur l'onglet
**API Keys**. Cliquez ensuite sur le bouton **Create Key**. Donnez un nom à votre clé API, indiquez une date
d'expiration si vous le souhaitez, et sélectionnez les champs d'application que vous souhaitez accorder à cette clé API.
Vous n'aurez plus qu’a la renseigner dans la variable `APPWRITE_API_KEY_USERS` de votre fichier `.env.local`

:::warning
Ne donnez pas accès à tous les champs d'application à votre clé API. Cela pourrait compromettre la sécurité de votre
application.
:::

<br/>

<Image src="/assets/workshop/authentication/api-keys.png" imageAlt="Screenshot de la console pour la section API Keys"></Image>

<br/>

## Étape 2️⃣ : Initialisation du SDK côté serveur d'Appwrite

Pour initialiser un SDK côté serveur, nous allons créer un fichier `src/workshop/api/config/server.config.ts` et cette
fois-ci, vous devez importer le `Client` Appwrite non pas depuis le SDK côté client, mais depuis le SDK côté serveur.
Dans notre cas, nous allons utiliser le SDK côté serveur pour Node.js.

<Solution>

```ts
import { Client } from 'node-appwrite';
import { EnvConfig } from './env.config';

export const AppwriteClient = new Client()
  .setEndpoint(EnvConfig.endpoint ?? '')
  .setProject(EnvConfig.projectId ?? '')
  .setKey(EnvConfig.apiKeyUsers ?? '');
```

</Solution>

:::warning
Attention, on remarque que de la même manière que le SDK côté client, on initialise notre instance avec `new Client()`
mais cela ne signifie pas que c'est un SDK côté client. C'est donc la provenance du SDK qui détermine si c'est un SDK
côté client ou côté serveur. Ici, par exemple, nous allons l'importer d'un runtime Node.js côté serveur, en important
notre `Client` depuis `node-appwrite` et non `appwrite` !
:::

<InfoBonus title="8 autres SDKs côté serveur !">

Si plus tard vous souhaitez utiliser un autre langage côté serveur, vous pourrez le faire sans problème. Appwrite
propose 9 SDKs côté serveur différents, pour les langages suivants :

![Server SDKs](/assets/workshop/authentication/server-sdks.png)

</InfoBonus>

## Étape 3️⃣ : Récupération des voyageurs

Utilisez le SDK pour récupérer la liste complète des utilisateurs enregistrés dans votre application. Pour afficher la
liste des utilisateurs, nous avons déjà une page qui est prête à l'emploi, il s'agit de la page `/users` de notre
application. Il semble manquer un bout de code pour afficher la liste des utilisateurs, non ? 🤔

Pour commencer, vous devez comme à chaque fois que l'on utilise un nouveau service, initialiser le service **Users**
dans le fichier `src/workshop/api/config/server.config.ts` !

<Solution>

```ts
import { Client, Users } from 'node-appwrite';
import { EnvConfig } from './env.config';

export const AppwriteClient = new Client()
  .setEndpoint(EnvConfig.endpoint ?? '')
  .setProject(EnvConfig.projectId ?? '')
  .setKey(EnvConfig.apiKeyUsers ?? '');

export const users = new Users(AppwriteClient); // [!code ++]
```

</Solution>

Dans le fichier `src/workshop/api/modules/users/travelers.ts`, nous allons donc pouvoir compléter la
fonction `getTravelersList` pour récupérer la liste des utilisateurs 👥

<Solution>

```ts
import { users } from '@/api/config/server.config'; // [!code ++]
import { Users } from '@/models/users';

export const getTravelersList = async (): Promise<Users> => {
  try {
    const { users: usersList } = await users.list<Users>(); // [!code ++]

    return usersList; // [!code ++]
  } catch (error: any) {
    throw new AppwriteException(error);
  }
};
```

</Solution>

:::tip
Ici, nous utilisons une seule méthode pour intéragir avec l'API Users, mais vous vous doutez bien qu'il en existe plein
d'autres ! Vous pouvez retrouver la liste complète des méthodes disponibles dans la documentation de l'API, cela vous
permettra de rechercher, bloquer et afficher les informations relatives à vos utilisateurs, les sessions en cours et les
derniers journaux d'activité. Vous pouvez également utiliser le service Users pour modifier les préférences et
les informations personnelles de vos utilisateurs.
:::

Si vous avez bien suivi les étapes précédentes, vous devriez maintenant voir la liste des utilisateurs s'afficher sur
la page `/users` de votre application, avec plein d'informations sur les superbes personnes qui participent de près ou
de loin à cette aventure ! 🎉

**En parlant d'aventure, il est temps de se tourner vers la suite, il nous reste encore plein de choses à découvrir donc
dirige-toi vers ta prochaine destination ! 🏝**
