---
title: Retrieving Our Data
---

<Documentation link="https://appwrite.io/docs/products/databases/quick-start#list-documents"></Documentation>

<Hero
title="Let's Retrieve Our Data! 📑"
image="/assets/workshop/database/get.jpg"
description="We've managed to insert new data into this vast database forest, and now all that's left is to harvest it
to display it! Because well... data in a database is good, data in a database displayed on our interface is even better!"
/>

## Retrieving Documents 🗂️

To do this, you can complete the `getCoordinatesList` function to retrieve all the coordinates from our collection so
that they can be displayed directly on AppVenture.

<Solution>

```ts
import {database} from '../../config/client.config'; // [!code ++]
import {EnvConfig} from '../../config/env.config'; // [!code ++]

export const getCoordinatesList = async (): Promise<Coordinates[]> => {
  try {
    const {documents} = await database.listDocuments<Coordinates>( // [!code ++]
      EnvConfig.databaseId, // [!code ++]
      EnvConfig.coordinatesCollectionId, // [!code ++]
    ); // [!code ++]

    return documents; // [!code ++]
  } catch (error: any) {
    throw new AppwriteException(error);
  }
};
```

</Solution>

Once the retrieval function is implemented, you should be able to see the different coordinates directly on AppVenture
🎉

However, with all our testing, it's possible that some incorrect documents have been inserted into the database. Let's
continue our journey; maybe we'll find a solution...

<InfoBonus title="Different Data Retrieval Solutions">

In this workshop, everything goes through Appwrite's various SDKs.
However, you also have the option to access your data through two other methods:

- With REST API calls
- With GraphQL

And the best part is that interaction with Appwrite through GraphQL or REST is available for all modules, except the
authentication module for GraphQL, all without any configuration! 🤩

</InfoBonus>
