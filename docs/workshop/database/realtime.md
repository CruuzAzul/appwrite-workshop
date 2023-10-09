---
title: 'Écouter la forêt'
---

<Hero
title="Écoutons ce que la forêt peut nous offrir 👂🏼"
image="/assets/workshop/database/realtime.jpg"
description="Avant de partir vers de nouvelles contrées, peut-être que nous pouvons prendre le temps, et écouter les
différents bruits et évènements qui se cache dans cette forêt"
/>

## Le problème sans Realtime ... ⏰

Notre AppVenture fonctionne bien, nous pouvons à présent y insérer les coordonnées qui nous amèneront au trésor.
Cependant, vous avez besoin de recharger la page pour les voir s'afficher après une création, et ça n'est pas l'idéal...

On pourrait attendre le retour d’une création de document, pour ensuite l’ajouter aux données en local, mais si on veut
que plusieurs utilisateurs puisse ajouter des informations en parallèle et que leurs affichages reste à jour avec la
base de donnée, cela ne suffira pas.

## Le Realtime d’Appwrite ⌚

Pour résoudre ce problème, Appwrite met à disposition une solution de **Realtime**, qui vous permet coté client
d’écouter les changements de l’instance, pour mettre à jour votre interface en conséquence. C'est un système qui va nous
permettre de nous abonner à différente channel représentant les différentes ressources disponibles, comme une collection
par exemple, pour ensuite recevoir tous les changements qui la concernent, par l’intermédiaire d’une WebSocket.

Une fois abonné à un channel, chaque retour concernera un certain nombre d’événements, comme la création ou la
modification d’un document, et il faudra trier en fonction de ça pour réagir uniquement aux événements qui nous
intéressent.

<br/>

---
<br/>

Sur l’AppVenture, vous pouvez ajouter ce fonctionnement en allant dans le composant `CoordinatesCardList`, et compléter
la fonction `unsubscribe` dans le `useEffect`. Cette fonction est appelé à la création du composant, et permettra
d'ouvrir une connexion avec votre base de donnée pour que la liste de coordonnées reste à jour !

N'hésitez pas à vous servir de la [documentation d’Appwrite](https://appwrite.io/docs/apis/realtime).

## Étape 1️⃣ : S'abonner au bon channel

La première étape est de s'abonner au client Appwrite avec la fonction `subscribe` du client Appwrite, cette fonction
prend deux paramètres :

- Le **channel** auquel on veut s'inscrire, qui représente précisément la ressource dont on veut recevoir les
  changements en temps réel, voir la [documentation](https://appwrite.io/docs/apis/realtime#channels).
- La fonction de callback, qui sera appelé à chaque fois qu'un événement est déclenché sur le channel choisi.

Ici, on veut s’abonner au channel d’une collection, la collection `Coordinates` que l’on a créé plus tôt dans ce
workshop. À vous de réussir à écouter les changements sur cette collection !

<Solution>

```ts
useEffect(() => {
  const coordinatesCollection = `databases.${EnvConfig.databaseId}.collections.${EnvConfig.coordinatesCollectionId}.documents`; // [!code ++]

  return AppwriteClient.subscribe(coordinatesCollection, (response: RealtimeResponseEvent<Coordinates>) => { // [!code ++]
    // TODO: Mettre à jour l’affichage de l’AppVenture
  }); // [!code ++]
}, []);
```
</Solution>

## Étape 2️⃣ : Écouter les bons événements

Une fois notre fonction abonnée au bon channel, il faut filtrer les événements pour lesquels on veut réagir.

Dans notre cas, il faudra écouter deux évènements différents, la création et la suppression d’un document, et dans les
deux cas, il faudra mettre à jour la liste des coordonnées dans l'interface. L’application étant codé en React, on
utilise un hook pour gérer notre état, la seule chose importante est de savoir que `updatedCoordinatesList` est notre
liste de coordonnées, et `setUpdatedCoordinatesList` est la fonction qui modifie cet état, par la valeur qui lui est
donnée en paramètre.

::: tip
Dans la réponse realtime, les différents événements déclenchés sont tous stockés dans un tableau d’événement.
Pour vous simplifier la vie, nous vous mettons à disposition une fonction utilitaire qui récupère le type d’évènement à
partir de ce tableau, `getEventType` que vous pouvez importer depuis `/utils/realtime.utils.ts`.
On trouve aussi dans le fichier une `Enum` qui correspond au type de retour de la fonction, que vous pouvez lui aussi
utiliser :

```ts
export const enum EventType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
}
```
:::

<Solution>

```ts
useEffect(() => {
  const coordinatesCollection = `databases.${EnvConfig.databaseId}.collections.${EnvConfig.coordinatesCollectionId}.documents`;

  return AppwriteClient.subscribe(coordinatesCollection, (response: RealtimeResponseEvent<Coordinates>) => {
    const eventType = getEventType({ // [!code ++]
      events: response.events, // [!code ++]
    }); // [!code ++]

    switch (eventType) { // [!code ++]
      case EventType.CREATE: // [!code ++]
        setUpdatedCoordinatesList([response.payload as Coordinates, ...updatedCoordinatesList]); // [!code ++]
        break; // [!code ++]
      case EventType.DELETE: // [!code ++]
        const deletedItemId = response.payload.$id; // [!code ++]
        const filtered = updatedCoordinatesList.filter((item) => item.id !== deletedItemId); // [!code ++]
        setUpdatedCoordinatesList([...filtered]); // [!code ++]
        break; // [!code ++]
      default: // [!code ++]
        break; // [!code ++]
    }
  });
}, []);
```
</Solution>

**Après avoir développé votre fonction, essayer d'ajouter une coordonnée sur l’AppVenture, elle devrait apparaître
directement sans rechargement de page !**
