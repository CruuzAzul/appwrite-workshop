---
title: Launch of the Appventure
---

<Hero
title="Launch of the Appventure 🚀"
image="/assets/workshop/configuration/app/bay_app.jpeg"
description="Before setting off to discover the hidden treasures in the world of Appwrite, it's time to prepare our
faithful travel companion: the AppVenture. It's much more than just an application; it's your treasure map, your
compass, and your loyal companion in your quest to unlock the secrets of every destination we explore! 🧳 You don't need
to master it entirely to move forward, but understand that it will be there when you need it!"
/>

## Launching the AppVenture 🚀

Now that you have an idea of the importance of AppVenture, here's how to launch it:

1. Clone the `workshop` branch of the [AppVenture repository](https://github.com/CruuzAzul/app-appwrite-workshop) from
   GitHub using the following command 🥳[start-application.md](start-application.md)

```bash
# SSH
git clone -b workshop git@github.com:CruuzAzul/app-appwrite-workshop.git

# HTTPS
git clone -b workshop https://github.com/CruuzAzul/app-appwrite-workshop.git
```

2. Install the dependencies by running `pnpm install` 📦

:::tip
If you don't have pnpm installed, you can do so by running `npm install -g pnpm` or following
the [installation instructions](https://pnpm.io/en/installation) on the official pnpm website.
:::

3. Launch the application using `pnpm dev` and open your browser to `localhost:3000`.

You are now ready to embark on this AppVenture, with your loyal companion, ready to explore the unknown 😎. However,
there's a slight hitch: AppVenture can't operate alone. It seems that many fragments of the application are missing!
Upon closer inspection, as is often the case, it appears to require a robust backend to function. And guess which
backend it prefers? Well, it's Appwrite, of course! 🤔

## Key Locations in the AppVenture 🔑

Before you set sail, let's quickly understand the architecture of the AppVenture. This application is built with
Next.js, a React framework. It will allow us to communicate with our Appwrite Cloud instance and interact with various
services such as authentication, data storage, and function execution 📂

Here are some key places in the AppVenture code that will be useful throughout our adventure. Apart from these, you
won't need to worry about the rest of the application's code 🧑🏼‍💻

### In the Code 📝
---

1️⃣ **Environment Variables**: You will find a `.env.local` file to configure environment variables. Make sure to adjust
them according to the configuration information you obtained when setting up your Appwrite Cloud instance and
initializing various services.

:::warning
**The only other files you need to modify are located in the `src/workshop` folder**. Everything else is there solely
for the proper functioning of the application but won't be necessary for the workshop. Please refrain from making
changes outside of this directory! 🙏🏼
:::

2️⃣ **Various Services and Components**: You'll find all the services and components that you need to complete in
the `src/workshop` directory. You can identify them by the `HERE` comments in the code. The specific files to modify
will be indicated throughout the workshop.

### In the Interface 🖥️
---

1️⃣ **The Dashboard**: You'll find a dashboard to help you navigate the application and access various features. You can
access it by clicking the `Dashboard` button in the top right corner of the application or by
visiting `localhost:3000/dashboard`.

2️⃣ **Your Treasure Map to Complete**: You'll find a treasure map to complete as you progress through the workshop, with
the coordinates you obtain! To access it, you can click on the buttons that will appear as you advance in the workshop,
or by going to `localhost:3000/databases`.

Now you're ready to embark on this AppVenture, with your faithful companion, ready to explore the unknown 😎. However,
there's a slight hitch: AppVenture can't function on its own. It seems that many fragments of the application are
missing! Upon closer inspection, as is often the case, it appears that it requires a robust backend to operate. And
guess which backend it prefers? Well, it's Appwrite, of course! 🤔
