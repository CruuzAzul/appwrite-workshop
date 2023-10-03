<Hero
title="La Baie de la Configuration"
image="/assets/workshop/configuration/bay.jpeg"
description="Bienvenue à la Baie de la Configuration, la première étape de notre aventure Appwrite ! 🔧 Dans cette
section, nous allons plonger dans les configurations initiales nécessaires pour préparer notre voyage ! Assurez-vous de
suivre attentivement ces étapes pour que votre expérience avec Appwrite soit fluide et inoubliable 🌊"
/>

## Configuration Initiale ⚙️

Pour commencer, laissez-nous vous guider à travers les configurations essentielles pour votre instance Appwrite Cloud.
En effet, dans cette section, nous allons vous montrer comment créer votre propre instance Appwrite, en utilisant la
version Cloud, cela nous permettra de récupérer les informations de configuration nécessaires pour la suite de notre
voyage 🏝️

:::tip
**Note :** Si vous rencontrez des problèmes, avez besoin d'aide supplémentaire ou besoin de plus d'informations,
consultez la [documentation d'Appwrite](https://appwrite.io/docs/quick-starts) pour des ressources utiles 📘
:::

## Étape 1️⃣ : Création de votre compte Appwrite 👤

Premièrement, vous devez créer un compte Appwrite. Pour ce faire, vous pouvez vous rendre sur
la [console d'Appwrite Cloud](https://cloud.appwrite.io/login) pour vous créer un compte. Vous pouvez également vous
connecter avec votre compte GitHub, si vous le souhaiter ou alors utiliser un compte existant.

<Image src="/assets/workshop/configuration/console_signup.png" imageAlt="Onboarding screen Appwrite Cloud" withSpacing></Image>

::: info
Cette instance Appwrite Cloud est gratuite et restera votre propriété même après la fin de ce workshop 💪🏼
:::

## Étape 2️⃣ : Créer de votre premier projet 🏗️

Une fois votre compte créé, vous pouvez créer votre premier projet.

<Image src="/assets/workshop/configuration/console_project.png" imageAlt="Create project screen" withSpacing></Image>

## Étape 3️⃣ : Ajouter une plateforme web à votre projet 🌐

Une fois votre projet créée, vous pouvez voir votre instance vide car elle n'est encore liée à aucune plateforme !

<Image src="/assets/workshop/configuration/console_select_platform.png" imageAlt="Console select platform" withSpacing></Image>

Sous **Add a platform**, ajoutez une **Web app**. Cela vous nous permettres par la suite de
lié notre application web à cette instance Appwrite. Vous pouvez donner le nom que vous souhaitez pour désigner votre
application web et pour le nom d'hôte, vous devez renseigner `localhost` car c'est le nom de domaine qui sera utilisé
par votre application web pour communiquer avec les APIs Appwrite 📡

<Image src="/assets/workshop/configuration/console_add_platform.png" imageAlt="Console form add platform" withSpacing></Image>

Pour les étapes suivantes, vous pouvez passer ces étapes, car nous allons les couvrir dans la section suivante pour nous
permettre cette fois de lié notre application web à notre instance Appwrite 🤯

<Image src="/assets/workshop/configuration/console_end.png" imageAlt="Console screen" withSpacing></Image>

Vous êtes prêt à embarquer pour les prochaines étapes de notre voyage !
Profitez de cette expérience d'apprentissage passionnante au cœur du backend open-source avec Appwrite. 🌍

<br />

---
<br />

<InfoBonus title="Les autres moyens de configurer une instance Appwrite 📦">
<br />

Appwrite offre également d'autres moyens d'obtenir votre propre instance, en fonction de vos préférences, **nous
n'allons
pas les couvrir dans ce workshop**, mais vous pouvez les consulter plus tard sur vos prochaines aventures avec Appwrite

## Auto-Hébergement 🏠

Appwrite a été conçu dès le départ dans une optique d'auto-hébergement. Vous pouvez installer et exécuter Appwrite sur
n'importe quel système d'exploitation capable d'exécuter une CLI Docker. Les instances Appwrite auto-hébergées peuvent
être configurées de manière flexible avec un accès aux mêmes fonctionnalités que celles trouvées sur Appwrite Cloud.

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

## Solutions en un clic 🖱️

En plus d'exécuter Appwrite localement, vous pouvez également lancer Appwrite à l'aide d'une installation préconfigurée.
Cela vous permet de démarrer rapidement avec Appwrite sans installer Docker sur votre machine locale.

📖 [Documentation - Configurations en un clic](https://appwrite.io/docs/advanced/self-hosting#one-click-setups)

</InfoBonus>
