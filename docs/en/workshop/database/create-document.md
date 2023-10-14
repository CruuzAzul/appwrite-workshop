---
title: Creating a Document
---

<Documentation link="https://appwrite.io/docs/products/databases/quick-start#create-documents"></Documentation>

<Hero
title="Let's Plant Our First Document 🌱"
image="/assets/workshop/database/create.jpg"
description="Now that our collection is created and accessible from AppVenture, all that's left is to add some documents
to it!"
/>

In the Database module of AppVenture, you can see a destination creation form that allows you to enter the precious
coordinates that will lead us to the fabulous treasure! 💰 Currently, the form is not functional, and **it's up to you to
complete it to add your first destination.**

To do this, go to the `src/workshop/api/modules/database/coordinates.ts` file, where you will find
the `createCoordinates` function that is called when the form is submitted. It's your job to complete it by using the *
*Appwrite SDK** to connect to the database and create a document with the information provided in the form!

:::tip 🆔 Generating a Unique Identifier
When you interact with Appwrite during any data creation, it is necessary that your data has a unique identifier. For
this Appwrite provides a utility function `ID.unique()` that allows you to generate a unique identifier. After that, you
can use this identifier to create your data in Appwrite.
:::

:::info
You can use `EnvConfig` to access the variables that are in the `.env.local` file.
:::

<Solution>

```ts
import {ID} from 'appwrite'; // [!code ++]
import {database} from '../../config/client.config'; // [!code ++]
import {EnvConfig} from '../../config/env.config'; // [!code ++]

export const createCoordinates = async (coordinatesData: Coordinate): Promise<Coordinate> => {
  return await database.createDocument<Coordinates>( // [!code ++]
    EnvConfig.databaseId, // [!code ++]
    EnvConfig.coordinatesCollectionId, // [!code ++]
    ID.unique(), // [!code ++]
    coordinatesData, // [!code ++]
  ); // [!code ++]
};
```

</Solution>

::: info
For TypeScript users, Appwrite provides types that make it easier to type our data in our application! You can check out
the `Coordinates` type to see how it's done.
:::

Once you've completed the development of your function, you should be able to create a new coordinate in the database
using the form! However, it doesn't appear on the interface... **Let's continue our journey through this vast forest to
find a solution to this problem.**
