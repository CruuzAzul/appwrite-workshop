<Hero
    title="Head in the functions! ☁️"
    image="/assets/workshop/functions/clouds.jpeg"
    description="We've arrived in the clouds! This is the domain of Cloud Function, little bits of code that will let you use the server!"
/>

## **Arrival guide** ☁️

You may have already asked yourself the question: Appwrite lets me do no backend, but what if I really need to have code executed on the server side?

That's what **Clouds Functions** are for!

## **Useful links** 🛩️

- [Appwrite documentation on cloud functions](https://appwrite.io/docs/products/functions)

## **Create your first function**

_Go to the function module in the workshop_.

In our case, we have a list of destinations, but unfortunately they're all encrypted, so it's impossible to know where to go!
As you can see, when you click on the button to add a destination, the new destination that appears is also always encrypted, so we're going to have to develop a cloud function to decrypt the destination when it's inserted into the database, so that we can finally know where to go!

To do this, you'll need to create a new cloud function, and there are several solutions available to you!

:::tabs
== CLI
Recommended method for this workshop

You can use Appwrite's CLI to create your function with the following command:

```bash
appwrite init function
```

All you have to do is follow the steps, and voila! Your function is created and will be waiting for you directly on the Appwrite console.

And when you want to redeploy it, after some development for example, simply use the following command:

```bash
appwrite deploy function
```

And once again, follow the steps!
== Quick start
You can create your function directly from the Appwrite console by going to the **Functions** page and clicking the **+ Create function** button.

After that you'll just need to click on the **Quick start** button, and fill in the form to create the function. You can add the API Key you created earlier to this Workshop, so that the function can access your Appwrite instance through a server SDK.

Next, you'll need to create a github repository to link your function to. This will make it easier to keep track of the different versions of your function, and you will be able to deploy it automatically each time you make a change to your production branch!

== Templates
**In our case, choose the `Starter function` template**.

You can create your function directly from a template provided by the Appwrite team.

To do so, simply go to the **Function** page, then to the **Templates** tab, and you'll be able to choose from 15 templates, the majority developed with the **node js** runtime, but some are also available in other languages.

Once you've selected the template you'd like, you'll be taken to a form where you can fill in the various details of your function. You can add the API Key you previously created in this Workshop, so that the function can access your Appwrite instance via a server SDK.

Next, you'll need to create a github repository to link your function to. This will make it easier to keep track of the different versions of your function, so that you can deploy it automatically each time you make a change to your production branch!
:::

When creating a function, you can choose from a wide range of languages and runtimes

<Image src="/assets/workshop/functions/runtime.png" imageAlt="List of Appwrite runtimes" />

_The solutions are written in JS with NodeJS, but you can choose another language_

Once you've created your function, you can go to the Appwrite console to test it.

To do so, go to the **Functions** tab, click on your freshly deployed function.

You'll come to a view where you can see the status of your function, its deployment history and which of its functions is active.

To quickly test your function, you can click on the **Execute now** button, and a new execution will appear in the **Execution** tab.

Once execution is complete (usually after a few milliseconds), you can access the various logs for your function, in which you should find the "Hello, logs!" and the "Hello, errors!".

## **Your mission** 🕵️

Your mission is to develop a function that will allow us to decode these hashed destinations ...

To do this, your function will have to listen to all the document creations in the destinations table (which has already been created for you in the database), retrieve this document from the query body and modify it using the `decrypt` function supplied to you!

:::tip
For your function to have access to the Appwrite instance, it will need the environment variables we previously entered in our application. We'll need to add them to our function in the **Settings** tab of the Appwrite console.
:::

<Solution>

```js
import { Client, Databases } from 'node-appwrite';

const decryptMap = {
  IITK2E: 'Nantes',
  OEJ0DJ: 'Toulouse',
  MEO312: 'Strasbourg',
  BA342H: 'Lille',
  MP0909: 'Paris',
  JI93JZ: 'Lyon',
  QAPZE3: 'Grenoble',
  O0121S: 'Rennes',
  POA123: 'Nice',
  MLMLM2: 'Marseille',
};

export const decrypt = (textToDecrypt) => {
  return decryptMap[textToDecrypt];
};

export default async ({ req, res, log, error }) => {
  const client = new Client()
    .setEndpoint(process.env.APPWRITE_ENDPOINT)
    .setProject(process.env.APPWRITE_PROJECT_ID)
    .setKey(process.env.APPWRITE_API_KEY);

  const database = new Databases(client);

  database.updateDocument(
    process.env.APPWRITE_DATABASE_ID,
    process.env.APPWRITE_DESTINATION_COLLECTION_ID,
    req.body.$id,
    {
      destination: decrypt(req.body.destination),
    },
  );

  return res.send();
};
```

</Solution>

Once your function is developed, all you have to do is test it by pressing the **Add a destination** button on the AppVenture, if the destination is well decrypted, you’re done!

<InfoBonus title="Trigger functions regularly">
<br />
We saw that you can trigger your functions from the console and by listening to an event from one of the Appwrite services

But it is also possible to make sure that our function is automatically triggered at certain times of the day or week!

Appwrite gives the possibility to fill a string **CRON** in the settings of a function, and which will allow you to fulfill this need!
</InfoBonus>
