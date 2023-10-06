---
title: Linking AppVenture to your Appwrite instance
---

<Hero
title="Linking AppVenture to your Appwrite instance 🌐"
image="/assets/workshop/configuration/app/bay_link.jpg"
description="Congratulations, you've prepared your AppVenture, and now it's time to link it to your Appwrite Cloud
instance! 🔗"
/>

:::info
This process could have also been done in previous steps during the creation of your
Appwrite instance and your project in the Appwrite Cloud console 🏞️
:::

## Prepare Your AppVenture: Linking to Appwrite 🧵

For now, when you access your AppVenture, you'll see a page telling you that your application is not yet linked to your
Appwrite instance. This is normal, and we'll fix that now! To do this, the application needs a few environment
variables:

**1.** Open the `.env.local` file in your AppVenture project.

**2.** Normally, you've already copied the (empty) environment variables from the `.env.example` file. Here are the
first environment variables you need to configure:

- `NEXT_PUBLIC_APPWRITE_ENDPOINT`: Replace the value with the URL of your Appwrite Cloud instance. By default, it will
  be: `https://cloud.appwrite.io/v1`.

- `NEXT_PUBLIC_APPWRITE_PROJECT_ID`: This ID is unique for each Appwrite project. You can find it in the Appwrite Cloud
  console by accessing the `Settings` page in the left navigation bar or at the route `/settings`:

<Image src="/assets/workshop/configuration/app/console_settings.png" imageAlt="Project settings screen" withSpacing></Image>

:::tip
In the `Settings` section of the Appwrite Cloud console, you'll find the project ID, along with other configuration
information for your project, such as:

- Enabling Appwrite services (Auth, Database, Storage, Functions)
- Configuring custom domains, webhooks, SMTP server, etc.
- Interfaces for migrating data from a self-hosted Appwrite instance to an Appwrite Cloud instance or importing data
  from Firebase, Supabase, or Nhost into your Appwrite instance 🤩

For more information, you can check out
the [Appwrite documentation on data migration](https://appwrite.io/docs/advanced/migrations) 📘
:::

**3.** Save the `.env.local` file after making these modifications.

**4.** That's it! Your AppVenture is now ready to interact with your Appwrite instance. You should see a change in your
application, indicating that your application is now linked to your instance! 🎊

<InfoBonus title="Warning: We Have IDs in Plain Sight in Client-Side Code!! 😱">

Note that some of our variables are prefixed with `NEXT_PUBLIC_` to make them accessible on the client side 😱

In the case of applications built with tools like Firebase and Appwrite, it's common to store IDs in plain sight in
client-side code. This may seem counterintuitive from a security perspective, but there's a reason for it. These keys
are used by client-side SDKs to interact with services (Appwrite, Firebase, etc.) and authorize certain operations.

However, services like Firebase and Appwrite offer robust security mechanisms to ensure that only authenticated and
authorized applications can perform certain actions. This means that even if the keys are exposed, they are not
sufficient to access data or perform operations without the proper permissions, as authentication and authorization
mechanisms and rights can be configured 📝

This includes declaring authorized platforms to access your instance by specifying allowed domains:

<Image src="/assets/workshop/configuration/app/domains.png" imageAlt="Console domain screen" withSpacing></Image>

(Yes, we put
localhost [at that moment](./appwrite-configuration.md#etape-3%EF%B8%8F%E2%83%A3-ajouter-une-plateforme-web-a-votre-projet-%F0%9F%8C%90),
not the best security practice... You'll remember to change that later 😅)

</InfoBonus>

## In Search of Traces from Ancient Explorers 🕵️‍♂️

Before we embark on this exciting journey, it's time to take a look at the hidden treasures that ancient explorers left
behind. They left behind clues and elements that will facilitate our progress. We'll retrieve this information and
integrate it into our own journey.

### Running the Script of Ancient Explorers 📜

To begin, we'll run a special script that will accomplish two things:

**1.** It will check that your AppVenture is correctly linked to your Appwrite instance 💪🏼

**2.** It will initialize your project with initial elements left by ancient explorers. These elements will give us a
good starting point for exploring the world of Appwrite. (And they are essential for the workshop to function correctly
😅)

:::warning
Before running the script, make sure you've followed the previous configuration steps to link your AppVenture to
Appwrite. Once that's done, launch the script and let it do its work.
:::

<br/>

[//]: # (TODO : à compléter une fois le clean code effectué)
**🧑🏼‍💻 To use this script, you can run the following command from a terminal:**

_**Load data into your instance:**_

```bash
node script.js
```

_**Reset data in your instance:**_

```bash
node /script/reset.js
```

<br/>

**Now, it's as if we're consulting the old treasure map of the explorers to find hidden locations!** Once the script is finished, we'll be ready to explore the next destinations of our adventure!

In the distance, behind our boat, we can see a mysterious island... **it seems to be the second destination of our
journey!** 🏝️

<Image src="/assets/workshop/configuration/app/bay_app_ile.jpeg" imageAlt="Console domain screen" withSpacing></Image>