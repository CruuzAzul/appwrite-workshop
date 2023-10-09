---
title: Supprimer un document
---

<Hero
title="Enlevons les mauvais documents 🗑️"
image="/assets/workshop/database/forest.jpg"
description="Ça y est, on peut enfin voir ce que contient notre collection, et maintenant, il y a sûrement des données
qui ne nous intéressent pas et qui fausserait notre chasse vers notre objectif, le trésor ! Une fois les coordonnées
parasites supprimées, il ne nous restera qu’à trouver toutes les bonnes coordonnées dans le différent module, et le
trésor sera à nous ! 🗺️"
/>

## Suppression d’un document 🚯

Heureusement, un bouton de suppression est là pour vous permettre de supprimer le document que nous ne voulons pas, il
ne vous reste plus qu'à compléter la fonction `deleteCoordinates` dans le fichier `coordinates.ts` pour que ce bouton
soit fonctionnel, et le tour est joué !

<Solution>

```ts
export const deleteCoordinates = async (id: string): Promise<void> => {
  await database.deleteDocument(EnvConfig.databaseId, EnvConfig.coordinatesCollectionId, id); // [!code ++]
};
```
</Solution>

::: info
Il y a aussi la possibilité de modifier des données avec le sdk Appwrite, de la même manière dont vous avez réalisé
toutes les actions précédentes
:::

Notre collection est prête à accueillir toutes les informations nécessaires pour trouver le trésor, cependant, le module
ne semble pas être validé sur l’AppVenture ... il manque peut-être des coordonnées à ajouter à notre carte. 🗺️
Vous pouvez passer à un autre module, ou vous rendre sur la partie bonus de celui-là pour découvrir le Realtime !
