---
title: Créer un document
---

<Documentation link="https://appwrite.io/docs/products/databases/quick-start#create-documents"></Documentation>

<Hero
title="Plantons notre premier document 🌱"
image="/assets/workshop/database/create.jpg"
description="Maintenant que notre collection est créée et accessible depuis l'AppVenture, le terrain est prêt, nous
pouvons planter nos premiers documents ⛏️"
/>

Dans le module Database de l’AppVenture, vous pouvez voir un formulaire de création de destination, qui va vous
permettre d'entrer les précieuses coordonnées qui nous mèneront au fabuleux trésor ! 💰 Actuellement, le formulaire ne
fonctionne pas, **c'est à vous de le compléter pour pouvoir ajouter votre première destination.**

Pour ce faire, rendez-vous dans le fichier `coordinates.ts`, où vous pourrez trouver la fonction `createCoordinates` qui
est appelé à la soumission du formulaire. À vous de la compléter en faisant appel au **SDK Appwrite** pour vous
connecter à la base de donnée, et créer un document avec les informations contenu dans le formulaire !

:::tip 🆔 Génération d'un identifiant unique
Lorsque vous interagissez avec Appwrite lors d'une création de données quelconque, il est nécessaire que votre donnée
possède un identifiant unique. Pour cela, Appwrite vous fournit une fonction `ID.unique()` qui vous permet de générer
un identifiant unique à chaque appel. Vous pouvez ensuite utiliser cet identifiant pour créer votre donnée !
:::

:::info
Vous pouvez utiliser `EnvConfig` pour accéder aux variables qui sont dans le fichier `.env.local`
:::

<Solution>

```ts
export const createCoordinates = async (coordinatesData: Coordinate): Promise<Coordinate> => {
  const {document: coordinates} = await database.createDocument<Coordinates>( // [!code ++]
    EnvConfig.databaseId, // [!code ++]
    EnvConfig.coordinatesCollectionId, // [!code ++]
    ID.unique(), // [!code ++]
    coordinatesData, // [!code ++]
  ); // [!code ++]

  return coordinates; // [!code ++]
};
```

</Solution>

::: info
Pour l'utilisateur de Typescript, Appwrite met à disposition du type permettant de plus facilement typer nos data
dans notre application ! Vous pouvez aller voir le type `Coordinates` pour voir la manière dont il est fait.
:::

Une fois le développement de votre fonction terminé, vous devriez pouvoir créer une nouvelle coordonnée en base avec le
formulaire ! Cependant, elle n'apparaît pas sur l'interface ... **Continuons notre avancée dans cette énorme forêt pour trouver une
solution à ce problème.**
