---
title: 'Écouter la forêt'
---

<Hero
  title="Écoutons ce que la forêt peut nous offrir"
  image="/assets/workshop/database/realtime.jpg"
  description="Avant de partir vers de nouvelle contrées, peut être que nous pouvons prendre le temps, et écouter les différents bruits et évènements qui se cache dans cette forêt"
/>

Notre AppVenture fonctionne bien, nous pouvons à présent y insérer les coordonnées qui nous amènerons au trésor.

Cependant, vous avez besoin de recharger la page pour les voir s'afficher après une création, et ça n'est pas l'idéal ...

On pourrai attendre le retour d’une création de document, pour ensuite l’ajouter au donnée en local, mais si on veux que plusieurs utilisateurs puisse ajouter des informations en parallèle et que leurs affichages reste à jour avec la base de donnée, cela ne suffira pas.

Pour résoudre ce problème, Appwrite met à disposition une solution de **Realtime**, qui vous permet coté client d’écouter les changements de la base de donnée, pour mettre à jour votre interface en conséquence.

Sur l’AppVenture, vous pouvez ajouter ce fonctionnement en allant dans le fichier `realtime.ts`, et compléter la fonction `realtimeCoordinateList`. Cette fonction est appelé à la création du composant, et permettra d'ouvrir une connexion avec votre base de donnée pour que la liste de coordonnées reste à jour !

Dans notre cas, il faudra écouter deux évènements différents, la création d’un document et la suppression d’un document, tout les deux dans la collection **Clues** que vous avez créé au début de ce module.

N'hésitez pas à vous servir de la [documentation d’Appwrite](https://appwrite.io/docs/apis/realtime).

<Solution>

```ts
export const realtimeCoordinateList = () => {
  const coordinatesCollection = `databases.${EnvConfig.databaseId}.collections.${EnvConfig.coordinatesCollectionId}.documents`;

  return AppwriteClient.subscribe(coordinatesCollection, (response: RealtimeResponseEvent<Coordinates>) => {
    const eventType = getEventType({
      events: response.events,
    });

    switch (eventType) {
      case EventType.CREATE:
        setUpdatedCoordinatesList([response.payload as Coordinates, ...updatedCoordinatesList]);
        break;
      case EventType.DELETE:
        const deletedItemId = response.payload.$id;
        const filtered = updatedCoordinatesList.filter((item) => item.id !== deletedItemId);
        setUpdatedCoordinatesList([...filtered]);
        break;
      default:
        break;
    }
  });
};
```

</Solution>

Après avoir développer votre fonction, essayer d'ajouter une coordonnée sur l’AppVenture, elle devrait apparaître directement sans rechargement de page !
