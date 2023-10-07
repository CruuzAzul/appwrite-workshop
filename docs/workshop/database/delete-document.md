---
title: Supprimer un document
---

<Hero
    title="Enlevons les mauvais document"
    image="/assets/workshop/database/forest.jpg"
    description="Ça y est, on peut enfin voir ce que contient notre collection, et maintenant il y a sûrement des données qui ne nous intéresse pas et qui fausserai notre chasse vers notre objectif, le trésor"
/>

Nous touchons au but, une fois les coordonnées parasites supprimées, il ne nous restera qu’à trouver toutes les bonnes coordonnées dans les différents module, et le trésor sera à nous !

Heureusement, un bouton de suppression est la pour vous permettre de supprimer les document que nous ne voulons pas, il ne vous reste plus qu'à compléter la fonction `deleteCoordinates` dans le fichier `coordinates.ts` pour que ce bouton soit fonctionnel, et le tour est joué !

<Solution>

```ts
export const deleteCoordinates = async (id: string): Promise<void> => {
  await database.deleteDocument(EnvConfig.databaseId, EnvConfig.coordinatesCollectionId, id);
};
```

</Solution>

::: info
Il y a aussi la possibilité de modifier des données avec le sdk Appwrite, de la même manière dont vous avez réalisé toutes les actions précédentes
:::

Notre collection est prête à accueillir toutes les informations nécessaire pour trouver le trésor, vous pouvez passer à un autre module, ou vous rendre sur la partie bonus de celui la pour découvrir le Realtime !
