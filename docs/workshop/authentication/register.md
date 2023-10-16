---
title: Inscription des voyageurs
---

<Documentation link="https://appwrite.io/docs/products/auth/email-password#sign-up"></Documentation>

<Hero
title="Inscription des voyageurs 📝"
image="/assets/workshop/authentication/top-island.jpeg"
description="Arrivé un peu plus haut sur l'île, on semble s'approcher d'une vieille batisse, ça doit être là-bas que
l'on doit aller... Mais avant, nous allons voir comment s'inscrire dans la liste des voyageurs qui ont essayé cette
aventure ! 🌴 Dans cette section, nous allons explorer le processus d'inscription, étape par étape ! L'inscription des
voyageurs est la première étape essentielle de notre aventure. Avec Appwrite, cette tâche est simplifiée grâce au
service Account qui gère tout le processus. 🏝️"
/>

::: info ⚠️ Configuration initiale
Avant de commencer à inscrire des voyageurs, assurez-vous que votre application est correctement configurée pour
interagir avec Appwrite et que vous avez terminé les sections dans la
partie [Configuration](/workshop/configuration/appwrite-configuration) 📝
:::

## Inscription d'un voyageur 🧳

<br/>

<InfoBonus title="Inscription dans la console 📝">
<br/>
Appwrite fournit une interface directement dans la console pour gérer les utilisateurs. Vous pouvez accéder à cette partie
Authentification depuis le menu de gauche. Depuis cette page, vous pourrez voir la liste des utilisateurs inscrits, gérer
leurs informations ou encore même créer de nouveaux utilisateurs 🏝️
<br/><br/>

<Image src="/assets/workshop/authentication/auth-console.png" imageAlt="Console Appwrite - Utilisateurs"></Image>

**Mais nous sommes bien plus intéressés par l'API Appwrite pour gérer les utilisateurs. C'est pourquoi nous allons voir
directement dans le code ! 🧑🏼‍💻**

</InfoBonus>

Dans notre cas, nous allons utiliser le SDK Appwrite pour inscrire un voyageur. Depuis l'application AppVenture, vous
pouvez voir en vous rendant sur la page d'inscription `/register` que le formulaire pour récolter les informations
du voyageur est déjà créé ! 🥳 Pas de chance pour nous, il semble avoir été endommagé et certains **morceaux de code pour
communiquer avec Appwrite sont manquants**... **Vous allez devoir réparer tout ça !** 🧑‍🔧

## Étape 1️⃣ : Initaliser le service Account

Avant de pouvoir utiliser le service Account, vous devez l'initialiser avec votre client Appwrite. Pour ce faire, vous
devez importer le service Account et créer une nouvelle instance de celui-ci en lui passant votre client Appwrite en
paramètre. Vous pouvez initialiser le service Account dans le fichier `src/workshop/api/config/client.config.ts` avec le
code suivant :

```js
export const account = new Account(AppwriteClient);
```

<InfoBonus title="3 autres SDKs côté client !">

Si plus tard, vous souhaitez utiliser un autre langage côté client, vous pouvez le faire sans problème. Appwrite propose
3 SDKs côté client différent, pour les langages suivants :

![Client SDKs](/assets/workshop/authentication/client-sdks.png)

</InfoBonus>

## Étape 2️⃣ : Écrire la fonction d'inscription

- Maintenant que le service Account est initialisé, nous allons pouvoir compléter la fonction `register` que vous pouvez
  trouver dans le fichier `src/workshop/api/modules/account/account.ts`. Cette fonction prend en paramètre le nom, l'e-mail et
  le mot de passe du voyageur et utilise l'API Appwrite pour effectuer l'inscription.

<Solution>

```ts
import {UserType} from '@/types/UserHook.type';
import {AppwriteException, ID} from 'appwrite'; // [!code ++]
import {account} from '@/api/config/client.config'; // [!code ++]

export async function register(
  email: string,
  password: string,
  name: string,
  login: (email: string, password: string) => Promise<void>
): Promise<UserType | undefined> {
  try {
    return await account.create(ID.unique(), email, password, name); // [!code ++]
  } catch (error: any) {
    throw new AppwriteException(error);
  }
}
```
</Solution>

:::tip 🆔 Génération d'un identifiant unique
Lorsque vous interagissez avec Appwrite lors d'une création de données quelconque, il est nécessaire que votre donnée
possède un identifiant unique. Pour cela, Appwrite vous fournit une fonction `ID.unique()` qui vous permet de générer
un identifiant unique à chaque appel. Vous pouvez ensuite utiliser cet identifiant pour créer votre donnée !
:::

:::tip ℹ️ La gestion des erreurs Appwrite
Lorsque vous utilisez les services Appwrite, il est important de gérer les erreurs qui peuvent survenir. Pour cela,
Appwrite vous permet de récupérer les erreurs avec le type `AppwriteException`. Vous pouvez ensuite récupérer le message
ou le code de l'erreur et traiter l'erreur en conséquence dans votre application !
:::

- Une fois que l'on a récupéré la session du voyageur, il est nécessaire de s'authentifier avec ses identifiants, car
  la connexion n'est pas automatique après l'inscription. Pour cela, nous devons utiliser la fonction `login` que vous
  pouvez trouver dans le fichier `src/workshop/api/modules/account/account.ts`... Pas de chance, cette fonction n'est pas encore
  écrite ! 🤔 On reviendra donc sur cette partie plus tard !

## Étape 3️⃣ : Inscrivez-vous !

Maintenant que la fonction `register` est écrite, vous devriez pouvoir créer votre compte voyageur ! 🥳 Tout le reste du
code est déjà écrit, vous n'avez plus qu'à vous rendre sur la page d'inscription `/register` et à remplir le
formulaire !

## Étape 4️⃣ : Vérifiez votre compte

Une fois que vous avez rempli le formulaire, vous devriez être redirigé vers la page de connexion `/login`. Vous devriez
également voir apparaître votre utilisateur dans la liste des utilisateurs dans la console Appwrite ! 📝 Si vous le
voyez, c'est que tout s'est bien passé et que vous allez pouvoir compléter la page de login dans l'étape suivante ! 🥳