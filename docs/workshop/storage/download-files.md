---
title: Le Mystère des Images du Stockage Appwrite
---

<Documentation link="https://appwrite.io/docs/products/storage/quick-start#download-file"></Documentation>

<Hero
title="Le Mystère des Images du Stockage 🖼️"
image="/assets/workshop/storage/mountain-top.jpeg"
description="Vous avez trouvé les images éparpillées pendant votre ascension, mais mainenant, il est temps pour vous
d'utiliser le Storage d'Appwrite pour récupérer toutes les images et d'essayer de résoudre le puzzle ! En espérant que
toutes les images soient en bon état..."
/>

## Récupérer les images du Storage 🖼️

Félicitations, aventurier ! Vous avez réussi à récupérer toutes les images éparpillées lors de votre ascension de la
montagne. Maintenant, il est temps de les afficher dans votre application pour résoudre le mystère du puzzle ! 🧩

Après avoir initialisé le SDK Appwrite pour vous permettre de communiquer avec la partie **Storage** d'Appwrite, vous
vous rendez dans le fichier `src/workshop/api/modules/storage/puzzle.ts` et modifier la fonction `getPuzzlePieces` qui
va récupérer et retourner les images du stockage.

:::tip
Vous pouvez utiliser des logs pour afficher les images récupérées dans la console de votre navigateur, si vous souhaitez
valider cette première étape.
:::

<Solution>

```ts
import {storage} from '@/api/config/client.config'; // [!code ++]
import {EnvConfig} from '@/api/config/env.config'; // [!code ++]

export const getPuzzlePieces = async (): Promise<FilesList> => {
  return await storage.listFiles(EnvConfig.storageBucketId); // [!code ++]
};
```

</Solution>

## Afficher les images trouvées 🧐

Maintenant que vous avez récupéré les images du stockage, il est temps de les afficher dans votre application. On semble
déjà avoir le code permettant d'itérer sur les images récupérées, mais il manque encore un petit quelque chose dans la
fonction `getPuzzlePiecesForPreviews` pour les afficher. Pour cela, nous allons utiliser une des méthodes d'Appwrite qui
va nous permettre de récupérer une preview de l'image, c'est-à-dire son URL à partir de son ID

<Solution>

```ts
import {storage} from '@/api/config/client.config';
import {EnvConfig} from '@/api/config/env.config';

export const getPuzzlePiecesForPreviews = ({fileId}: FilePreview): URL => {
  return storage.getFilePreview( // [!code ++]
    EnvConfig.storageBucketId, // [!code ++]
    fileId, // [!code ++]
  ); // [!code ++]
};
```

</Solution>

## Les pouvoirs des Transformations d'Images 🌟

Malheureusement, une nouvelle énigme se présente à vous. Les images que vous avez collectées semblent endommagées, on ne
parvient pas à les voir à l'écran malgré qu'elles soient bien présentes. Elles ne sont pas encore utilisables en l'état,
mais ne vous inquiétez pas, car Appwrite est là pour vous aider grâce à ses transformations d'images ! 🪄

Vous allez donc, modifiez la fonction de récupération des previews des images pour appliquer une transformation sur
celle-ci côté serveur et restaurer les images endommagées.

Changer le fond des images en noir pour leur permettre de s'afficher corectement à l'écran ! Une fois les
transformations appliquées, les images devraient être prêtes pour la résolution du puzzle et la découverte des
secrets de la montagne !

### Étape 1️⃣ : Modifier la fonction de récupération des previews

Dans le fichier `src/workshop/api/modules/storage/puzzle.ts`, modifiez la
fonction `getPuzzlePiecesForPreviews` pour qu'elle accepte des paramètres supplémentaires qui vont permettre
d'appliquer des transformations sur les images récupérées.

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
};
```

</Solution>

### Étape 2️⃣ : Modifier l'appel à la fonction pour changer la couleur de fond

Dans la page `src/workshop/components/storage/puzzle.tsx` responsable de l'affichage des images, nous allons modifier
l'appel à la fonction `getPuzzlePiecesForPreviews` pour passer un paramètre `background` qui va permettre de changer la couleur
de fond des images avec du noir.

<Solution>

```ts
const imgSrc = getPuzzlePiecesForPreviews({
  fileId: file.$id,
  background: '000000', // [!code ++]
});
```

</Solution>

:::tip
Comme vous pouvez le voir avec tous les paramètres disponibles, les transformations d'images d'Appwrite sont très
puissantes et permettent de faire beaucoup de choses et évitent d'avoir à faire des transformations côté client comme
pour redimensionner une image pour une vue mobile. Vous pouvez en apprendre plus sur les transformations
d'images d'Appwrite dans la [documentation](https://appwrite.io/docs/products/storage/images).
:::

**Vous semblez avoir tout ce qu'il faut pour résoudre le mystère du puzzle et passez à l'étape suivante pour vérifier
votre découverte 🧩**