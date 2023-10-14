---
title: L'Énigme Résolue - Module de Stockage Appwrite
---

<Documentation link="https://appwrite.io/docs/products/storage/quick-start#create-file"></Documentation>

<Hero
title="Énigme Résolue 🧩"
image="/assets/workshop/storage/mountains-end.jpeg"
description="Félicitations, aventurier ! Vous avez surement résolu l'énigme du puzzle et trouvé l'image qui vous servira
de clé ! Maintenant, il vous suffit de l'envoyer dans le bucket Appwrite pour terminer ce module. Vous êtes sur le point
de conclure votre aventure dans l'univers du stockage Appwrite. Continuez et rejoignez la prochaine destination ! 🚀"
/>

## Envoyer la clé dans le bucket 📤

Vous êtes maintenant tout près de terminer ce module, aventurier ! Vous avez résolu l'énigme du puzzle et trouvé l'image
clé, la dernière pièce du mystère. Pour achever cette quête, tout ce que vous avez à faire est d'envoyer cette
image dans le bucket Appwrite que vous avez utilisé tout au long de cette aventure.

Allez dans votre code, plus précisément dans le fichier `src/workshop/api/modules/storage/puzzle.ts`, et complêtez la
fonction qui récupère un tableau d'un ou plusieurs fichiers pour l'envoyer dans le bucket Appwrite. **Il ne vous reste
plus qu'à envoyer le bon fichier 📤**

<Solution>

```ts
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
  }
};
```

</Solution>

## Un problème d'extension ou de taille de fichier ? 😈

Si vous avez réussi à envoyer la clé dans le bucket Appwrite, et que vous avez reçu votre indice, félicitations, vous
n'êtes pas tombé dans le piège ! 🎉

Pour les autres, vous avez peut-être échoué à résoudre l'énigme du puzzle et vous n'avez pas trouvé la bonne image clé !
En effet, vous êtes sûrement tombé dans le piège en ne regardant que le nom du fichier, malheureusement pour vous, il
semblerait que le bucket initialisé par les anciens aventuriers soit configuré pour ne pas accepter n'importe quel
fichier !

Vous pouvez retrouver les contraintes de votre bucket en allant dans la section **Storage > Puzzle > Settings** pour
voir les indications sur la taille et les extensions de fichier.

<Image src="/assets/workshop/storage/ext-size.png" alt="Contraintes du bucket" />

<br/>

**Maintenant, vous savez ce qu'il vous reste à faire !** 😊

Félicitations pour avoir complété ce module de stockage Appwrite ! Vous avez maîtrisé l'art de stocker, récupérer et
transformer des fichiers. Maintenant, il ne vous reste plus qu'à entamer la descente de la montagne et à vous diriger
vers la prochaine destination de votre incroyable aventure. Bonne route, aventurier ! 🏔️
