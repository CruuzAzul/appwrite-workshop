---
title: 'Écouter la forêt'
---

<Documentation link="https://appwrite.io/docs/apis/realtime"></Documentation>

<Hero
title="Écoutons ce que la forêt peut nous offrir 👂🏼"
image="/assets/workshop/database/realtime.jpg"
description="Avant de partir vers de nouvelles contrées, peut-être que nous pouvons prendre le temps, et écouter les
différents bruits et évènements qui se cachent dans cette forêt"
/>

## Le problème sans Realtime ... ⏰

Notre AppVenture fonctionne bien, nous pouvons à présent y insérer les coordonnées qui nous amèneront au trésor.
Cependant, vous avez besoin de recharger la page pour les voir s'afficher après une création, et ça n'est pas l'idéal...

On pourrait attendre le retour d’une création de document, pour ensuite l’ajouter aux données en local, mais si on veut
que plusieurs utilisateurs puissent ajouter des informations en parallèle et que leur affichage reste à jour avec la
base de données, cela ne suffira pas.

## Le Realtime d’Appwrite ⌚

Pour résoudre ce problème, Appwrite met à disposition une solution de **Realtime**, qui vous permet coté client
d’écouter les changements de l’instance, pour mettre à jour votre interface en conséquence. C'est un système qui va nous
permettre de nous abonner à différents channels représentant les différentes ressources disponibles, comme une collection
par exemple, pour ensuite recevoir tous les changements qui la concernent, par l’intermédiaire d’une WebSocket.

Une fois abonné à un channel, chaque retour concernera un certain nombre d’évènements, comme la création ou la
modification d’un document, et il faudra trier en fonction de ça pour réagir uniquement aux évènements qui nous
intéressent.

<br/>

---
<br/>

Sur l’AppVenture, vous pouvez ajouter ce fonctionnement en allant dans le composant `CoordinatesCardList`
dans `src/workshop/components/database`, et ajouter la fonction `unsubscribe` dans le `useEffect`. Cette fonction est
appelée à la création du composant, et permettra d'ouvrir une connexion avec votre base de données pour que la liste de
coordonnées reste à jour !

## Étape 1️⃣ : S'abonner au bon channel

La première étape est de s'abonner au client Appwrite avec la fonction `subscribe` du client Appwrite, cette fonction
prend deux paramètres :

- Le **channel** auquel on veut s'inscrire, qui représente précisément la ressource dont on veut recevoir les
  changements en temps réel, voir la [documentation](https://appwrite.io/docs/apis/realtime#channels).
- La fonction de callback, qui sera appelée à chaque fois qu'un évènement est déclenché sur le channel choisi.

Ici, on veut s’abonner au channel d’une collection, la collection `Coordinates` que l’on a créé plus tôt dans ce
workshop. À vous de réussir à écouter les changements sur cette collection !

<Solution>

```ts
import {RealtimeResponseEvent} from 'appwrite'; // [!code ++]
import {AppwriteClient} from '@/workshop/api/config/client.config'; // [!code ++]
import {EnvConfig} from '@/workshop/api/config/env.config'; // [!code ++]

useEffect(() => {
  const coordinatesCollection = `databases.${EnvConfig.databaseId}.collections.${EnvConfig.coordinatesCollectionId}.documents`; // [!code ++]

  return AppwriteClient.subscribe(coordinatesCollection, (response: RealtimeResponseEvent<Coordinates>) => { // [!code ++]
    // TODO: Mettre à jour l’affichage de l’AppVenture
  }); // [!code ++]
}, []);
```
</Solution>

## Étape 2️⃣ : Écouter les bons évènements

Une fois notre fonction abonnée au bon channel, il faut filtrer les évènements pour lesquels on veut réagir.

Dans notre cas, il faudra écouter deux évènements différents, la création et la suppression d’un document, et dans les
deux cas, il faudra mettre à jour la liste des coordonnées dans l'interface. L’application étant codée en React, on
utilise un hook pour gérer notre état, la seule chose importante est de savoir que `updatedCoordinatesList` est notre
liste de coordonnées, et `setUpdatedCoordinatesList` est la fonction qui modifie cet état, par la valeur qui lui est
donnée en paramètre.

::: tip
Dans la réponse realtime, les différents évènements déclenchés sont tous stockés dans un tableau d’évènement.
Pour vous simplifier la vie, nous vous mettons à disposition une fonction utilitaire qui récupère le type d’évènement à
partir de ce tableau, `getEventType` que vous pouvez importer depuis `/utils/realtime.utils.ts`.
On trouve aussi dans le fichier une `Enum` qui correspond au type de retour de la fonction, que vous pouvez elle aussi
utiliser :

```ts
export const enum EventType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
}
```
:::

::: tip
Pour modifier la liste des coordonnées affichée par notre composant, vous devez utiliser les bouts de code suivants :

<br/>

**➕ Pour l’ajout :**

```ts
setUpdatedCoordinatesList((currentCoordinatesList) => [
	<COORDINATE_YOU_WANT_TO_ADD>,
	...currentCoordinatesList,
]);
```

<br/>

**🗑️ Pour la suppression :** 

```ts
setUpdatedCoordinatesList((currentCoordinatesList) =>
	currentCoordinatesList.filter(
		(item) => item.$id !== <ID_YOU_WANT_TO_DELETE>
	)
);
```
:::

<Solution>

```ts
import {RealtimeResponseEvent} from 'appwrite'; // [!code ++]
import {EventType, getEventType} from '@/utils/realtime.utils'; // [!code ++]
import {AppwriteClient} from '@/workshop/api/config/client.config'; // [!code ++]
import {EnvConfig} from '@/workshop/api/config/env.config'; // [!code ++]

useEffect(() => {
  const coordinatesCollection = `databases.${EnvConfig.databaseId}.collections.${EnvConfig.coordinatesCollectionId}.documents`;  // [!code ++]

  const unsubscribe = AppwriteClient.subscribe(coordinatesCollection, (response: RealtimeResponseEvent<Coordinates>) => { // [!code ++]
    const eventType = getEventType({ // [!code ++]
      events: response.events, // [!code ++]
    }); // [!code ++]

    switch (eventType) { // [!code ++]
      case EventType.CREATE: // [!code ++]
        setUpdatedCoordinatesList((currentCoordinatesList) => [ // [!code ++]
          response.payload as Coordinates, // [!code ++]
          ...currentCoordinatesList, // [!code ++]
        ]); // [!code ++]
        break; // [!code ++]
      case EventType.DELETE: // [!code ++]
        const deletedItemId = response.payload.$id; // [!code ++]
        setUpdatedCoordinatesList((currentCoordinatesList) => // [!code ++]
          currentCoordinatesList.filter( // [!code ++]
            (item) => item.$id !== deletedItemId // [!code ++]
          ) // [!code ++]
        ); // [!code ++]
        break; // [!code ++]
      default: // [!code ++]
        break; // [!code ++]
    }
  });
}, []);
```
</Solution>

## Étape 3️⃣ : Se désabonner du realtime

Pour finir, il faut penser à se désabonner du realtime lorsque le composant est détruit, pour éviter de laisser des
connexions ouvertes inutilement. La fonction `.subscribe` retourne une fonction de désabonnement, qu’il suffit d’appeler
pour se désabonner.

Étant donné que l'utilisation de cette méthode relève de compétences en React, vous avez juste à copier-coller le code
suivant directement à la fin de votre fonction `useEffect` :

```ts
useEffect(() => {
  // ...
  
  return () => { // [!code ++]
    unsubscribe(); // [!code ++]
  }; // [!code ++]
}, []);
```

<br/>

**Après avoir développé votre fonction, essayez d'ajouter une coordonnée sur l’AppVenture, elle devrait apparaître
directement sans rechargement de page ! 📍**
