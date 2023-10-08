---
title: Develop your function
---

<Hero
title="Let's develop our function ✍🏼"
image="/assets/workshop/functions/develop.jpg"
description="Our function exists, it's there, but so far we can't say it's very useful. I'm sure we can make it work for
us to solve our destination problem, to go and find a clue that will lead us to the treasure! Your mission is to develop
a function that will allow us to decode these damn destinations..."
/>

## Step 1️⃣ : Listen to the destination creation event

To begin with, you need to ensure that your function listens for all new document creations in the destinations table (
which has already been created for you in the database).

To do this, Appwrite provides an event system, which you can find in
the [documentation](https://appwrite.io/docs/advanced/platform/events#authentication-events), and which allows you to
react to anything that might happen in your Appwrite instance, from the modification of a file in storage to the
creation of a user.

::: warning
Be careful not to listen to an event triggered by the function itself, as this could create a function that executes in
a loop.
:::

## Step 2️⃣ : Link your Appwrite instance

For the function to have access to your Appwrite instance, you need to link it!

In the same way as we've been doing since the beginning of this workshop, we need to initialize our Appwrite client
using a **SDK server** and the various environment variables it needs.

::: tip
In order for your function to have access to the various environment variables we've previously entered in our
application, we'll need to add them to our function in the **Settings** tab of the Appwrite console

<Image src="/assets/workshop/functions/envVariable.png" imageAlt="Setting environment variables in the Appwrite console" withoutShadow ></Image>

They will then be available in your functions through your language's system library (`process.env` in the case of
Node.js)!
:::

<Solution>

```js
import {Client} from 'node-appwrite';

export default async ({req, res}) => {
  const client = new Client()
    .setEndpoint(process.env.APPWRITE_ENDPOINT)
    .setProject(process.env.APPWRITE_PROJECT_ID)
    .setKey(process.env.APPWRITE_API_KEY);

  return res.send();
};
```

</Solution>

## Step 3️⃣ : Initialize the database service

Once your function has been linked to your Appwrite instance, we need to initialize the services we'll need.

In our case, we'll only need the database service to make modifications to documents.

<Solution>

```js
import {Client, Databases} from 'node-appwrite';

export default async ({req, res}) => {
  const client = new Client()
    .setEndpoint(process.env.APPWRITE_ENDPOINT)
    .setProject(process.env.APPWRITE_PROJECT_ID)
    .setKey(process.env.APPWRITE_API_KEY);

  const database = new Databases(client); // [!code ++]

  return res.send();
};
```

</Solution>

## Step 4️⃣ : Modifying the newly created object

Once our function has listened to the right event, the created document will be available in the request body provided
by Appwrite. Now all you have to do is modify it using the `decrypt` function provided in the `/utils/decrypt.js` file!

::: info
For the `decrypt` function to work, you'll need to move the file into your function's sources so that it can import it.

You can do this by hand or with the following command at the root of the project:

```bash
mv ./utils/decrypt.js ./functions/<YourFunctionName>/src
```

:::

<Solution>

```js
import {Client, Databases} from 'node-appwrite';

import {decrypt} from './decrypt.js'; // [!code ++]

export default async ({req, res}) => {
  const client = new Client()
    .setEndpoint(process.env.APPWRITE_ENDPOINT)
    .setProject(process.env.APPWRITE_PROJECT_ID)
    .setKey(process.env.APPWRITE_API_KEY);

  const database = new Databases(client);

  database.updateDocument( // [!code ++]
    process.env.APPWRITE_DATABASE_ID, // [!code ++]
    process.env.APPWRITE_DESTINATION_COLLECTION_ID, // [!code ++]
    req.body.$id, // [!code ++]
    { // [!code ++]
      destination: decrypt(req.body.destination), // [!code ++]
    }, // [!code ++]
  ); // [!code ++]

  return res.send();
};
```

</Solution>

Once your function is developed, all you have to do is test it by pressing the **Add a Destination** button on
AppVenture. If the destination is decrypted correctly, you've won!

**Keep pressing until you find the clue 😉**

<InfoBonus title="Triggering Functions at Regular Intervals">
<br />
We've seen that you can trigger your functions from the console and by listening to an event from one of Appwrite's services.
But it's also possible to make our function automatically trigger at certain times of the day or week!

Appwrite allows you to specify a **CRON** string in the function settings, which will help you fulfill this requirement!

<Image src="/assets/workshop/functions/cron.png" imageAlt="Setting function execution by CRON" ></Image>

<br/>
</InfoBonus>
