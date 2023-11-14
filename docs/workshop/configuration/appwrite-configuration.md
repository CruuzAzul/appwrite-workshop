---
title: Configuration de la Console
---

<Documentation link="https://appwrite.io/docs/quick-starts/nextjs"></Documentation>

<Hero
title="Configuration de la Console 🛠️"
image="/assets/workshop/configuration/console/console_config.jpeg"
description="Bienvenue dans la partie Configuration de la Console Appwrite, une étape essentielle de notre voyage
Appwrite ! 🧭 Ici, nous allons préparer notre outil de gestion Appwrite pour explorer le vaste univers qui s'offre à
nous. Ces configurations initiales garantiront une expérience agréable et sans accroc tout au long de notre aventure 🚀"
/>

## Configuration Initiale ⚙️

Pour commencer, laissez-nous vous guider à travers les configurations essentielles pour votre instance Appwrite.
En effet, dans cette section, nous allons vous montrer comment configurer votre instance, cela nous permettra de récupérer les informations de configuration nécessaires pour la suite de notre
voyage 🏝️

:::tip
**Note :** Si vous rencontrez des problèmes, avez besoin d'aide supplémentaire ou besoin de plus d'informations,
consultez la [documentation d'Appwrite](https://appwrite.io/docs/quick-starts) pour des ressources utiles 📘
:::

## Étape 1️⃣ : Création de votre compte Appwrite 👤

Premièrement, vous devez créer un compte Appwrite. Pour ce faire, vous pouvez vous rendre sur
la console d'Appwrite pour vous créer un compte. Vous pouvez également vous
connecter avec votre compte GitHub, si vous le souhaitez ou alors utiliser un compte existant.

<Image src="/assets/workshop/configuration/console/console_signup.png" imageAlt="Onboarding screen Appwrite Cloud" withSpacing></Image>

<!-- ::: info
Cette instance Appwrite Cloud est gratuite et restera votre propriété même après la fin de ce workshop 💪🏼
::: -->

## Étape 2️⃣ : Créer votre premier projet 🏗️

Une fois votre compte créé, vous pouvez créer votre premier projet. Nommez-le par exemple `AppVenture` 📝

<Image src="/assets/workshop/configuration/console/console_project.png" imageAlt="Create project screen" withSpacing></Image>

## Étape 3️⃣ : Ajouter une plateforme web à votre projet 🌐

Une fois votre projet créée, vous pouvez voir votre instance vide, car elle n'est encore liée à aucune plateforme !

<Image src="/assets/workshop/configuration/console/console_select_platform.png" imageAlt="Console select platform" withSpacing></Image>

Sous **Add a platform**, ajoutez une **Web app**. Cela va nous permettre par la suite de
lier notre application web à cette instance Appwrite.

Vous pouvez donner le nom `AppVenture Web` pour désigner votre application web et pour le nom d'hôte, vous devez
renseigner `localhost` car c'est le nom de domaine qui sera utilisé par votre application web pour communiquer avec les
APIs Appwrite 📡

<Image src="/assets/workshop/configuration/console/console_add_platform.png" imageAlt="Console form add platform" withSpacing></Image>

Pour les étapes suivantes, vous pouvez passer ces étapes, car nous allons les couvrir dans la section suivante pour nous
permettre cette fois de lier notre application web à notre instance Appwrite 🤯

<Image src="/assets/workshop/configuration/console/console_end.png" imageAlt="Console screen" withSpacing></Image>

<InfoBonus title="Les autres moyens de configurer une instance Appwrite 📦">

## Auto-Hébergement et Solutions en un clic 📝

Appwrite offre également d'autres moyens d'obtenir votre propre instance, en fonction de vos préférences, **nous
n'allons pas les couvrir dans ce workshop**, mais vous pouvez les consulter plus tard sur vos prochaines aventures avec
Appwrite

### Auto-Hébergement 🏠

Appwrite a été conçu dès le départ dans une optique d'auto-hébergement. Vous pouvez installer et exécuter Appwrite sur
n'importe quel système d'exploitation capable d'exécuter une CLI Docker. Les instances Appwrite auto-hébergées peuvent
être configurées de manière flexible avec un accès aux mêmes fonctionnalités que celles trouvées sur l’instance Gitpod ou la version Cloud.

La façon la plus simple de commencer à faire fonctionner votre serveur Appwrite est d'exécuter notre outil 
d'**installation Docker** à partir de votre terminal. Avant d'exécuter la commande d'installation, assurez-vous que Docker CLI
est installé sur votre machine hôte :

```shell
docker run -it --rm \
    --volume /var/run/docker.sock:/var/run/docker.sock \
    --volume "$(pwd)"/appwrite:/usr/src/code/appwrite:rw \
    --entrypoint="install" \
    appwrite/appwrite:1.4.3
```

📖 [Documentation - Auto-Hébergement](https://appwrite.io/docs/advanced/self-hosting)

### Solutions en un clic 🖱️

En plus d'exécuter Appwrite localement, vous pouvez également lancer Appwrite à l'aide d'une installation préconfigurée.
Cela vous permet de démarrer rapidement avec Appwrite sans installer Docker sur votre machine locale.

📖 [Documentation - Configurations en un clic](https://appwrite.io/docs/advanced/self-hosting#one-click-setups)

</InfoBonus>

<br/>

---
<br/>

**C'est parti pour une aventure passionnante au cœur du monde d'Appwrite avec l'AppVenture à vos côtés ! Votre bateau
reste encore à quai, le temps de lier votre application et votre instance Appwrite pour le grand départ 🌍**

<Image src="/assets/workshop/configuration/app/bay_app_boat.jpeg" imageAlt="Lexica image with a boat in a bay" withSpacing></Image>