---
title: Deleting a Document
---

<Documentation link="https://appwrite.io/docs/references/cloud/client-web/databases#deleteDocument"></Documentation>

<Hero
title="Let's remove the unwanted documents 🗑️"
image="/assets/workshop/database/forest.jpg"
description="Finally, we can see what our collection contains, and now there are likely some data that we're not
interested in, which would mislead us in our quest for our goal, the treasure! Once we've removed the unwanted
coordinates, all that's left is to find all the right coordinates in the different modules, and the treasure will be
ours! 🗺️"
/>

## Deleting a document 🚯

Fortunately, a delete button is here to help you get rid of the documents we don't want. All you need to do is complete
the `deleteCoordinates` function in the `src/workshop/api/modules/database/coordinates.ts` file to make this button
functional, and you're good to go!

:::tip
Once you have deleted a document, don't forget to refresh the page to see your document disappear.
:::

<Solution>

```ts
import {database} from '../../config/client.config'; // [!code ++]
import {EnvConfig} from '../../config/env.config'; // [!code ++]

export const deleteCoordinates = async (id: string): Promise<void> => {
  try {
    await database.deleteDocument(EnvConfig.databaseId, EnvConfig.coordinatesCollectionId, id); // [!code ++]
  } catch (error: any) {
    throw new AppwriteException(error);
  }
};
```
</Solution>

::: info
You can also modify data with the Appwrite SDK in the same way you've performed all the previous actions.
:::

Our collection is ready to hold all the information needed to find the treasure. However, it seems that the module is
not validated in AppVenture... perhaps there are some coordinates missing from our map. 🗺️
You can move on to another module or explore the bonus part of this one to discover Realtime!
