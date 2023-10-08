---
title: Creating your first function
---

<Hero
title="Let's create our own function"
image="/assets/workshop/functions/create.jpg"
description="Once we've arrived in the clouds, all we have to do is choose from the multitude of possibilities to create our function ... Which language to choose? Which creation method to use? Let's explore all that"
/>

## Create your first function

_Go to the function module in AppVenture_.

In our case, we have a list of destinations. Unfortunately, they're all encrypted, so it's impossible to know where to go!
As you can see, when you click on the button to add a destination, the new destination that appears is also always encrypted, so we're going to have to develop a function to be able to decrypt the destination when it's inserted into the database, so that we can finally know where to go!

To do this, you'll need to create a new function, and there are several ways of doing this!

:::tabs
== CLI
**_Recommended method for this workshop_**

You can use Appwrite's CLI to create your function with the following command:

```bash
appwrite init function
```

The CLI will ask you for several parameters, such as the name, ID and runtime of your function. If you leave the ID blank, you'll have a unique ID.

And that's it! Your function is created and will be waiting for you directly on the Appwrite console.

And when you want to redeploy it, after development for example, all you have to do is use the following command:

```bash
appwrite deploy function
```

This time, all you have to do is select the functions you want to deploy, and you're done!

Don't forget to add your API key to your function's environment variables, which you can find in the **Settings** tab.

<Image src="/assets/workshop/functions/envVariable.png" imageAlt="Setting environment variables in the Appwrite console" withoutShadow />

== Quick start
You can create your function directly from the Appwrite console by going to the **Functions** page and clicking on the **+ Create function** button.

Then click on the **Quick start** button.

<Image src="/assets/workshop/functions/quickStart.png" imageAlt="Create function form" withoutShadow />

You'll be presented with a form for creating the function.
You can add the API key you created in the previous step, so that your function can access your Appwrite instance via a server SDK.

Next, you'll need to create a github repository to link your function to. This will make it easier to keep track of the different versions of your function, so you can deploy it automatically each time you make a change to your production branch!

== Using a template
**For this workshop, choose the `Starter function` template**.

You can create your function directly from a template provided by the Appwrite team.

To do so, simply go to the **Function** page, then to the **Templates** tab, and you'll be able to choose from 15 templates, the majority developed with the **node js** runtime, but some are also available in other languages.

<Image src="/assets/workshop/functions/quickStart.png" imageAlt="Function creation form" withoutShadow />

Once you've selected the template you want, you'll be taken to a form where you can fill in the various information for your function.
You can add the API Key you created in the previous step, so that the function can access your Appwrite instance through a server SDK.

Next, you'll need to create a github repository to link your function to. This will make it easier to keep track of the different versions of your function, so you can deploy it automatically each time you make a change to your production branch!
:::

As seen in the introduction, Appwrite provides several methods for creating functions, as well as a wide range of languages and runtimes!

The solutions in this workshop are written in JS with NodeJS, but you can choose another language if you're feeling adventurous 🥷

Once you've created your function, you can go to the Appwrite console to test it.

To do so, go to the **Functions** tab, click on your freshly deployed function.

You'll come to a view where you can see the status of your function, its deployment history and which of its functions is active.

To quickly test your function, you can click on the **Execute now** button, and a new execution will appear in the **Execution** tab.

<Image src="/assets/workshop/functions/execution.png" imageAlt="Execution tab in Appwrite Functions module" />

Once execution is complete (usually after a few milliseconds), you can access the various function logs, in which you should find the various function displays, "Hello, logs" and the "Hello, errors!".

That's it! Our function reacts well, and now it's time to make it do more than just display console messages 🤩
