---
title: The Configuration Bay
---

<Hero
title="The Configuration Bay 🏖️"
image="/assets/workshop/configuration/console/bay.jpeg"
description="Welcome to the Configuration Bay, the first step of our Appwrite adventure! 🔧 In this section, we will dive
into the initial configurations necessary to prepare for our journey. Make sure to follow these steps carefully to
ensure a smooth and unforgettable experience with Appwrite 🌊"
/>

## Initial Configuration ⚙️

To begin, let us guide you through the essential configurations for your Appwrite Cloud instance. In this section, we
will show you how to create your own Appwrite instance, using the Cloud version. This will allow us to obtain the
necessary configuration information for the rest of our journey 🏝️

:::tip
**Note:** If you encounter issues, need additional assistance, or require more information, check out
the [Appwrite documentation](https://appwrite.io/docs/quick-starts) for helpful resources 📘
:::

## Step 1️⃣: Create Your Appwrite Account 👤

Firstly, you need to create an Appwrite account. To do this, you can go to
the [Appwrite Cloud Console](https://cloud.appwrite.io/login) to create your account. You can also sign in with your
GitHub account if you prefer or use an existing account.

<Image src="/assets/workshop/configuration/console/console_signup.png" imageAlt="Onboarding screen Appwrite Cloud" withSpacing></Image>

::: info
This Appwrite Cloud instance is free and will remain your property even after the end of this workshop 💪🏼
:::

## Step 2️⃣: Create Your First Project 🏗️

Once your account is created, you can create your first project.

<Image src="/assets/workshop/configuration/console/console_project.png" imageAlt="Create project screen" withSpacing></Image>

## Step 3️⃣: Add a Web Platform to Your Project 🌐

After creating your project, you can see your empty instance because it is not yet linked to any platform!

<Image src="/assets/workshop/configuration/console/console_select_platform.png" imageAlt="Console select platform" withSpacing></Image>

Under **Add a platform**, add a **Web app**. This will allow us to link our web application to this Appwrite instance
later. You can give your web application any name you like, and for the hostname, you should enter `localhost` because
it is the domain name that your web application will use to communicate with the Appwrite APIs 📡

<Image src="/assets/workshop/configuration/console/console_add_platform.png" imageAlt="Console form add platform" withSpacing></Image>

For the following steps, you can skip them as we will cover them in the next section to allow us to link our web
application to our Appwrite instance 🤯

<Image src="/assets/workshop/configuration/console/console_end.png" imageAlt="Console screen" withSpacing></Image>

You are ready to embark on the next steps of our journey! Enjoy this exciting learning experience in the heart of the
open-source backend with Appwrite. 🌍

<br />

---
<br />

<InfoBonus title="Other Ways to Set Up an Appwrite Instance 📦">

## Self-Hosting and One-Click Setups 📝

Appwrite also offers other methods to obtain your own instance, depending on your preferences. **We won't cover these in
this workshop**, but you can explore them later in your future adventures with Appwrite.

### Self-Hosting 🏠

Appwrite was designed from the ground up with self-hosting in mind. You can install and run Appwrite on any operating
system capable of running a Docker CLI. Self-hosted Appwrite instances can be configured flexibly with access to the
same features found on Appwrite Cloud.

The easiest way to start running your Appwrite server is by running our **Docker installer tool** from your terminal. Before
running the installation command, make sure you have Docker CLI installed on your host machine :

```shell
docker run -it --rm \
    --volume /var/run/docker.sock:/var/run/docker.sock \
    --volume "$(pwd)"/appwrite:/usr/src/code/appwrite:rw \
    --entrypoint="install" \
    appwrite/appwrite:1.4.3
```

📖 [Documentation - Self-Hosting](https://appwrite.io/docs/advanced/self-hosting)

### One-Click Setups 🖱️

In addition to running Appwrite locally, you can also launch Appwrite using a preconfigured setup. This allows you to
quickly get started with Appwrite without installing Docker on your local machine.

📖 [Documentation - One-Click Setups](https://appwrite.io/docs/advanced/self-hosting#one-click-setups)

</InfoBonus>