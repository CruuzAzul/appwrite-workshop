---
title: Créer un document
---

<Hero
    title="Plantons notre premier document"
    image="/assets/workshop/database/create.jpg"
    description="Maintenant que notre collection est créée et accessible depuis l’AppVenture, il ne nous reste plus qu’a lui ajouter des documents !"
/>

Le terrain est prêt, nous pouvons planter nos premier documents ⛏️.

Dans le module Database de l’AppVenture, vous pouvez voir un formulaire de création de destination, qui va vous permettre d'entrer les précieuses coordonnées qui nous mènerons au fabuleux trésor ! 💰

Actuellement, le formulaire ne fonctionne pas, c'est à vous de le compléter pour pouvoir ajouter votre première destination.

Pour ce faire, rendez vous dans le fichier `coordinates.ts`, où vous pourrez trouver la fonction `createCoordinates` qui est appelé à la soumission du formulaire. À vous de la compléter en faisant appel au **SDK Appwrite** pour vous connecter à la base de donnée, et créer un document avec les informations contenu dans le formulaire !

:::tip
Appwrite nous met à disposition un petit utilitaire pour générer un ID unique, n’hesitez pas à l'utiliser !

```ts
import { ID } from 'appwrite';

const uniqueId = ID.unique();
```

:::

:::tip
Vous pouvez accéder au variables d’environnements à partir de l’objet `EnvConfig` créé pour vous !

```ts
import { EnvConfig } from '../config/env.config';

const coordinateCollectionId = EnvConfig.coordinatesCollectionId;
```

:::

<Solution>

```ts
export const createCoordinates = async (coordinatesData: Coordinate): Promise<Coordinate> => {
  const { document: coordinates } = await database.createDocument<Coordinates>( // [!code ++]
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
Pour les utilisateur de Typescript, Appwrite met à disposition des type permettant de plus facilement typer nos data dans notre application ! Vous pouvez aller voir le type `Coordinates` pour voir la manière dont il est fait.
:::

Une fois le développement de votre fonction terminé, vous devriez pouvoir créer une nouvelle coordonnée en base avec le formulaire !

Cependant, elle n'apparaît pas sur l'interface ... Continuons notre avancé dans cette énorme forêt pour trouver une solution à ce problème.
