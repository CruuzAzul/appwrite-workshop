---
title: 'Listening to the Forest'
---

<Documentation link="https://appwrite.io/docs/apis/realtime"></Documentation>

<Hero
title="Let's Listen to what the forest has to offer 👂🏼"
image="/assets/workshop/database/realtime.jpg"
description="Before heading to new horizons, perhaps we can take some time and listen to the various sounds and events
hidden in this forest."
/>

## The problem without Realtime... ⏰

Our AppVenture is working well; we can now insert coordinates that will lead us to the treasure. However, you need to
reload the page to see them displayed after creation, and that's not ideal...

We could wait for a document to be created, and then add it to the local data, but if we want multiple users to be able
to add information in parallel and have their displays stay up to date with the database, that won't be enough.

## Appwrite's Realtime ⌚

To solve this problem, Appwrite provides a **Realtime** solution that allows you to listen to changes on the client side
and update your interface accordingly. It's a system that allows us to subscribe to different channels representing
various available resources, such as a collection, for example, to receive all the changes related to it via a
WebSocket.

Once subscribed to a channel, each return will involve a certain number of events, such as the creation or modification
of a document. You will need to sort through them to react only to the events that interest us.

<br/>

---
<br/>

In AppVenture, you can add this functionality by going to the `CoordinatesCardsList` component
in `src/workshop/components/database`, and adding the `unsubscribe` function in the `useEffect`. This function is called
when the component is created and will open a connection with your database to keep the list of coordinates up to date!
and completing

## Step 1️⃣ : Subscribe to the Right Channel

The first step is to subscribe to the Appwrite client using the `subscribe` function of the Appwrite client. This
function takes two parameters:

- The **channel** to which we want to subscribe, representing precisely the resource from which we want to receive
  real-time changes (see the [documentation](https://appwrite.io/docs/apis/realtime#channels)).
- The callback function, which will be called every time an event is triggered on the chosen channel.

Here, we want to subscribe to the channel of a collection, the `Coordinates` collection that we created earlier in this
workshop. It's up to you to succeed in listening to changes on this collection!

<Solution>

```ts
import {RealtimeResponseEvent} from 'appwrite'; // [!code ++]
import {AppwriteClient} from '@/workshop/api/config/client.config'; // [!code ++]
import {EnvConfig} from '@/workshop/api/config/env.config'; // [!code ++]

useEffect(() => {
  const coordinatesCollection = `databases.${EnvConfig.databaseId}.collections.${EnvConfig.coordinatesCollectionId}.documents`; // [!code ++]

  return AppwriteClient.subscribe(coordinatesCollection, (response: RealtimeResponseEvent<Coordinates>) => { // [!code ++]
    // TODO: Update the AppVenture display
  }); // [!code ++]
}, []);
```
</Solution>

## Step 2️⃣ : Listen to the right rvents

Once our function is subscribed to the right channel, we need to filter the events we want to react to.

In our case, we need to listen to two different events: the creation and the deletion of a document. In both cases, we
need to update the list of coordinates in the interface. Since the application is coded in React, we use a hook to
manage our state. The important thing to know is that `updatedCoordinatesList` is our list of coordinates,
and `setUpdatedCoordinatesList` is the function that modifies this state by the value given as a parameter.

::: tip
In the realtime response, the different triggered events are all stored in an events array.
To simplify your life, we provide a utility function that retrieves the event type from this array, `getEventType`,
which you can import from `/utils/realtime.utils.ts`.
In the same file, you'll also find an `Enum` that corresponds to the return type of the function, which you can also
use:

```ts
export const enum EventType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
}
```
:::

::: tip
To modify the list of coordinates displayed by our component, you should use the following pieces of code:

<br/>

**➕ For addition:**

```ts
setUpdatedCoordinatesList((currentCoordinatesList) => [
	<COORDINATE_YOU_WANT_TO_ADD>,
	...currentCoordinatesList,
]);
```

<br/>

**🗑️ For deletion:**

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
          response.payload, // [!code ++]
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
    } // [!code ++]
  }); // [!code ++]
}, []);
```
</Solution>

## Step 3️⃣ : Unsubscribe from Realtime

Finally, we need to remember to unsubscribe from realtime when the component is destroyed, to avoid leaving unnecessary
open connections. The `.subscribe` function returns an unsubscribe function, which you just need to call to unsubscribe.

Since the use of this method is a React skill, you just need to copy and paste the following code directly at the end of
your `useEffect` function:

```ts
useEffect(() => {
  // ...

  return () => { // [!code ++]
    unsubscribe(); // [!code ++]
  }; // [!code ++]
}, []);
```

<br/>

**After developing your function, try adding a coordinate in AppVenture; it should appear directly without the need to
reload the page! 📍**
