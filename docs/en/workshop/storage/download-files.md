---
title: The Mystery of Appwrite Storage Images
---

<Documentation link="https://appwrite.io/docs/products/storage/quick-start#download-file"></Documentation>

<Hero
title="The Mystery of Storage Images 🖼️"
image="/assets/workshop/storage/mountain-top.jpeg"
description="You've found the scattered images during your ascent, but now it's time to use Appwrite Storage to retrieve
all the images and try to solve the puzzle! Hoping all the images are in good condition..."
/>

## Retrieving Images from Storage 🖼️

Congratulations, adventurer! You've successfully retrieved all the scattered images during your mountain ascent.
Now, it's time to display them in your application to solve the puzzle! 🧩

After initializing the Appwrite SDK to allow you to communicate with the **Storage** part of Appwrite,
you'll go to the `src/workshop/api/modules/storage/puzzle.ts` file and modify the `getPuzzlePieces` function that will
retrieve and return the storage images.

:::tip
You can use logs to display the retrieved images in your browser's console if you want to validate this first step.
:::

<Solution>

```ts
import {storage} from '@/api/config/client.config'; // [!code ++]
import {EnvConfig} from '@/api/config/env.config'; // [!code ++]

export const getPuzzlePieces = async (): Promise<FilesList> => {
  try {
    return await storage.listFiles(EnvConfig.storageBucketId); // [!code ++]
  } catch (error: any) {
    throw new AppwriteException(error);
  }
};
```

</Solution>

## Displaying found images 🧐

Now that you've retrieved the storage images, it's time to display them in your application.
It seems like you already have the code for iterating over the retrieved images, but something is still missing in the
`getPuzzlePiecesForPreviews` function to display them. For this, we'll use one of Appwrite's methods to retrieve an
image preview, which is its URL based on its ID.

<Solution>

```ts
import {storage} from '@/api/config/client.config';
import {EnvConfig} from '@/api/config/env.config';

export const getPuzzlePiecesForPreviews = ({fileId}: FilePreview): URL => {
  try {
    return storage.getFilePreview( // [!code ++]
      EnvConfig.storageBucketId, // [!code ++]
      fileId, // [!code ++]
    ); // [!code ++]
  } catch (error: any) {
    throw new AppwriteException(error);
  }
};
```

</Solution>

## The Powers of Image Transformations 🌟

Unfortunately, a new riddle presents itself. The images you've collected seem to be damaged; you can't see them on the
screen, even though they're there. They're not usable in their current state, but don't worry because Appwrite is here
to help you with its image transformations! 🪄

You're going to modify the preview image retrieval function to apply server-side transformations to restore the damaged
images.

Change the background of the images to black to make them display properly on the screen! Once the transformations are
applied, the images should be ready for puzzle-solving and discovering the secrets of the mountain!

### Step 1️⃣: Modify the Preview Retrieval Function

In the `src/workshop/api/modules/storage/puzzle.ts` file, modify the `getPuzzlePiecesForPreviews` function to
accept additional parameters that will allow you to apply transformations to the retrieved images.

<Solution>

```ts
import {storage} from '@/api/config/client.config';
import {EnvConfig} from '@/api/config/env.config';

export const getPuzzlePiecesForPreviews = ({
  fileId,
  width, // [!code ++]
  height, // [!code ++]
  gravity, // [!code ++]
  quality, // [!code ++]
  borderWidth, // [!code ++]
  borderColor, // [!code ++]
  borderRadius, // [!code ++]
  opacity, // [!code ++]
  rotation, // [!code ++]
  background, // [!code ++]
  output, // [!code ++]
}: FilePreview): URL => {
  try {
    return storage.getFilePreview(
      EnvConfig.storageBucketId,
      fileId,
      width, // [!code ++]
      height, // [!code ++]
      gravity, // [!code ++]
      quality, // [!code ++]
      borderWidth, // [!code ++]
      borderColor, // [!code ++]
      borderRadius, // [!code ++]
      opacity, // [!code ++]
      rotation, // [!code ++]
      background, // [!code ++]
      output // [!code ++]
    );
  } catch (error: any) {
    throw new AppwriteException(error);
  }
};
```

</Solution>

### Step 2️⃣: Modify the Function Call to Change the Background Color

In the `src/workshop/components/storage/puzzle.tsx` page responsible for displaying images, you'll modify the function call
to `getPuzzlePiecesForPreviews`to pass a `background` parameter to change the background color of the images to black.

<Solution>

```ts
const imgSrc = getPuzzlePiecesForPreviews({
  fileId: file.$id,
  background: '000000', // [!code ++]
});
```

</Solution>

:::tip
As you can see with all the available parameters, Appwrite's image transformations are very powerful and allow you to do
a lot. They save you from having to perform client-side transformations, such as resizing an image for mobile view. You
can learn more about Appwrite's image transformations in
the [documentation](https://appwrite.io/docs/products/storage/images).
:::

**You seem to have everything you need to solve the puzzle mystery and move on to the next step to check your discovery
🧩**
