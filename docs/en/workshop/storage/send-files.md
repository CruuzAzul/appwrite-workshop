---
title: The Puzzle Solved - Appwrite Storage Module
---

<Documentation link="https://appwrite.io/docs/products/storage/quick-start#create-file"></Documentation>

<Hero
title="Puzzle Solved 🧩"
image="/assets/workshop/storage/mountains-end.jpeg"
description="Congratulations, adventurer! You've undoubtedly solved the puzzle and found the image that will serve as
your key! Now all you need to do is send it to the Appwrite bucket to complete this module. You're about to conclude
your adventure in the world of Appwrite Storage. Keep going and move on to the next destination! 🚀"
/>

## Send the Key to the Bucket 📤

You're now very close to completing this module, adventurer! You've solved the puzzle and found the key image, the last
piece of the mystery. To finish this quest, all you have to do is send this image to the Appwrite bucket you've been
using throughout this adventure.

Go to your code, more precisely to the `src/workshop/api/modules/storage/puzzle.ts` file, and complete the function
that retrieves an array of one or more files to send to the Appwrite bucket. **All you have to do is send the right
file 📤**

<Solution>

```ts
import {AppwriteException, ID, Models} from 'appwrite'; // [!code ++]

export const uploadFiles = async (
  files: File[]
): Promise<Awaited<Models.File>[]> => {
  try {
    return await Promise.all(
      files.map(async (file) => {
        return await storage.createFile( // [!code ++]
          EnvConfig.storageBucketId, // [!code ++]
          ID.unique(), // [!code ++]
          file // [!code ++]
        ); // [!code ++]
      })
    );
  } catch (error: any) {
    throw new AppwriteException(error); // [!code ++]
    console.error(error); // [!code ++]
  }
};
```

</Solution>

## File Extension or Size Issue? 😈

If you successfully sent the key to the Appwrite bucket and received your clue, congratulations, you didn't fall into
the trap! 🎉

For others, you may have failed to solve the puzzle and didn't find the right key image! Indeed, you probably fell into
the trap by only looking at the file name; unfortunately for you, it seems that the bucket initialized by the previous
adventurers is configured not to accept just any file!

You can find the constraints of your bucket by going to the **Storage > Puzzle > Settings** section to see the
indications regarding file size and extensions.

<Image src="/assets/workshop/storage/ext-size.png" imageAlt="Bucket Constraints"></Image>

<br/>

---
<br/>

<InfoBonus title="Referencing a file from your storage in your database documents?">
<br/>

You can use the Appwrite storage service to store files and reference them in your database documents. To do this, all
you need to do is retrieve the URL of your file, as we have just done for the display and reference it in your document
when you create it in a `string` field.

</InfoBonus>

<br/>

**Now you know what to do!** 😊

Congratulations on completing this Appwrite Storage module! You've mastered the art of storing, retrieving, and
transforming files. Now all that's left is to begin your descent from the mountain and head to the next destination of
your incredible adventure. Safe travels, adventurer! 🏔️
