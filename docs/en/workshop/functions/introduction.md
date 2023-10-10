---
title: Head in the functions
---

<Documentation link="https://appwrite.io/docs/products/functions"></Documentation>

<Hero
title="Head in the functions! ☁️"
image="/assets/workshop/functions/clouds.jpeg"
description="After a long journey, we've finally arrived in the clouds! This is the domain of Functions. When all
Appwrite's services aren’t enough, and we need to react to what’s happening in our instance, these little snippets of
code will let us use the server!"
/>

## **Incoming guide** ☁️

You may have already asked yourself the question: Appwrite allows me to do no backend, but what if I really need to have
code executed on the server side?

That's what **Functions** are for!

In Appwrite, functions are executed on the server where your instance is hosted, and this of course works directly on
Appwrite Cloud! To develop them, you'll have access to many different languages and runtimes

<Image src="/assets/workshop/functions/runtime.png" imageAlt="List of Appwrite runtimes" ></Image>

Once in your function, you can also access your Appwrite instance via a server SDK, and if you remember the retrieval
part in voyageurs, who says server SDK says API key!

However, your API key only has access to the user management service, so you'll need to create a second one that will
allow you to modify a document in the database!

**Once created, we can get down to work and create our first function! 🔨**
