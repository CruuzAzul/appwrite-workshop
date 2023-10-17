---
title: Lier l'AppVenture à votre Instance Appwrite
---

<Documentation link="https://appwrite.io/docs/quick-starts/nextjs"></Documentation>

<Hero
title="Lier l'AppVenture à votre Instance Appwrite 🌐"
image="/assets/workshop/configuration/app/bay_link.jpg"
description="Félicitations, vous avez préparé votre AppVenture et maintenant, il est temps de la lier à votre instance
Appwrite Cloud ! Sans ça l'AppVenture ne pourra pas interagir avec votre instance Appwrite et vous ne pourrez pas
continuer votre voyage 🚢"
/>

:::info
Ce processus aurait également pu être effectué dans des étapes précédentes lors de la création de
l'instance Appwrite et de votre projet dans la console Appwrite Cloud 🏞️️
:::

## Apprêtez votre AppVenture : Le raccordement à Appwrite 🧵

Pour le moment lorsque vous accédez à votre AppVenture, vous verrez une page vous indiquant que votre application n'est
pas encore liée à votre instance Appwrite. C'est normal, nous allons régler cela maintenant ! Pour cela l'application a
besoin de quelques variables d'environnement :

**1.** Créez un fichier `.env.local` à la racine du projet et configurez les variables d'environnement nécessaires en
utilisant les informations que vous avez obtenues lors de la création de votre instance Appwrite Cloud. Copiez le
contenu de`.env.example` dans `.env.local`.

**2.** Voici les premières variables d'environnement que vous devez configurer :

- `NEXT_PUBLIC_APPWRITE_ENDPOINT` : Remplacez la valeur par l'URL de votre instance Appwrite Cloud, par default ce
  sera : `https://cloud.appwrite.io/v1`.

- `NEXT_PUBLIC_APPWRITE_PROJECT_ID` : Cet ID est unique pour chaque projet Appwrite. Vous pouvez le trouver dans la
  console Appwrite Cloud, en accédans à la page `Settings` dans la bar de navigation de gauche ou sur la route `/settings` :

<Image src="/assets/workshop/configuration/app/console_settings.png" imageAlt="Project settings screen" withSpacing></Image>

:::tip
Dans la partie `Settings` de la console Appwrite Cloud, vous trouverez l'ID du projet, mais aussi d'autres informations
pour configurer votre projet :

- L'activations des services Appwrite (Auth, Database, Storage, Functions)
- La configuration de votre domaine personnalisé, de webhook, de votre serveur SMTP, etc.
- L'interface pour migrer vos données d'une instance Appwrite self hosted vers une instance Appwrite Cloud ou encore
  pour importer vos données depuis une instance Firebase, Supabase ou encore Nhost dans votre instance Appwrite 🤩

Pour plus d'informations, vous pouvez consulter
la [documentation d'Appwrite sur la migration des données](https://appwrite.io/docs/advanced/migrations) 📘
:::

**3.** Sauvegardez le fichier `.env.local` après avoir effectué ces modifications.

**4.** Modifiez le fichier `client.config.ts` dans le dossier `src/workshop/api/config/` et ajoutez-y le code permettant
d'initialiser le SDK Appwrite côté client.

:::info
Vous pouvez utiliser `EnvConfig` pour accéder aux variables qui sont dans le fichier `.env.local`
:::

<Solution>

```js
import { Client } from 'appwrite';

export const AppwriteClient = new Client().setEndpoint(EnvConfig.endpoint ?? '').setProject('<PROJECT_ID>');
```

</Solution>

**Ce code permettra d'initialiser le SDK Appwrite que nous utiliserons dans notre application. Il nous permettra par la
suite d'initialiser les différents services Appwrite dans notre application.**

**5.** C'est tout ! Votre AppVenture est maintenant prête à interagir avec votre instance Appwrite ! 🎊

<InfoBonus title="Alerte on a des IDs en clair dans le code côté client !! 😱">

Notez que certaines de nos variables sont préfixées par `NEXT_PUBLIC_` pour les rendre accessibles côté client 😱

Dans le cas des applications construites avec des outils tels que Firebase et Appwrite, il est courant de stocker des
IDs en clair dans le code côté client. Cela peut sembler contre-intuitif en matière de sécurité, mais il y a une
raison à cela. Ces clés sont utilisées par des SDK côté client pour intéragir auprès des services (Appwrite,
Firebase...) et autoriser certaines opérations.

Cependant, les services tels que Firebase et Appwrite offrent des mécanismes de sécurité robustes pour garantir que
seules les applications authentifiées et autorisées peuvent effectuer certaines actions. Cela signifie que même si les
clés sont exposées, elles ne sont pas suffisantes pour accéder aux données ou effectuer des opérations sans les bonnes
autorisations, pour cela des mécanismes d'authentification et d'autorisation et de droits peuvent être configuré 📝

Comme notamment lorsque l'on déclare les plateformes autorisées à accéder à notre instance en indiquant les domaines
autorisés :

<Image src="/assets/workshop/configuration/app/domains.png" imageAlt="Console domain screen" withSpacing></Image>

(Oui, on a mis
localhost [à ce moment-là](./appwrite-configuration.md#etape-3%EF%B8%8F%E2%83%A3-ajouter-une-plateforme-web-a-votre-projet-%F0%9F%8C%90),
on a vu mieux comme sécurité... Vous penserez à changer ça plus tard 😅)

</InfoBonus>

## À la recherche des traces des anciens explorateurs 🕵️‍♂️

Avant de nous lancer dans ce périple passionnant, il est temps de jeter un coup d'œil que les anciens
explorateurs ont laissés derrière eux. En effet, ils ont laissé des indices et des éléments qui
faciliteront notre progression. Nous allons récupérer ces informations et les intégrer à notre propre voyage.

### Exécuter le Script des Anciens Explorateurs 📜

Pour commencer, nous allons exécuter un script spécial qui accomplira deux choses :

**1.** Il permettra de re-vérifier que votre AppVenture est correctement liée à votre instance Appwrite 💪🏼

**2.** Il initialisera votre projet avec les éléments initiaux laissés par les anciens explorateurs. Ces éléments nous
donneront un bon point de départ pour explorer le monde d'Appwrite. (Et ils sont surtout nécessaires pour que le
workshop fonctionne correctement 😅)

:::warning
Avant d'exécuter le script, assurez-vous d'avoir suivi les étapes de configuration précédentes pour lier votre
AppVenture à Appwrite. Une fois cela fait, lancez le script et laissez-le faire son travail.
:::

**3.** Pour que le script puisse avoir accès à l’instance Appwrite, il aura besoin d’une clé API, qui est un secret utilisé par les SDK Appwrite coté serveur, et dont le script à besoin

Pour ce faire, rendez vous dans la partie **Overview** de la console Appwrite, puis
dans **Intégration** et enfin cliquer sur l’onglet **API Keys**. Il ne vous reste
plus qu’à créer une clé en cliquant sur le bouton **Create Key**, de lui donner un nom
puis sélectionnez tout les services.
Une fois la clé créée, vous pouvez la renseigner dans votre fichier `.env.local` dans
la variable `APPWRITE_API_KEY_SCRIPT`

:::warning
Pour le script d’initialisation, nous avons besoin d’un accès à tout les services,
mais il est préférable en cas réel de ne pas attribuer tout les accès à une seule clé.
Dans la suite du Workshop, vous devrez créer d’autres clés qui n’auront pas accès à
l’entièreté des services
:::

<br/>

**🧑🏼‍💻 Pour utiliser ce script, vous pouvez depuis un terminal, exécutez la commande :**

_**Charger les données dans votre instance :**_

```bash
node ./script/init-travel.js
```

_**Réinitailiser les données de votre instance :**_

```bash
node ./script/reset-travel.js
```

<br/>

**Maintenant, c'est comme si nous consultions la vieille carte au trésor des explorateurs pour trouver les endroits
cachés !** Une fois le script terminé, nous serons prêts à partir à la découverte des destinations suivantes de notre aventure !

Au loin, derrière notre bateau, nous pouvons distinguer une île mystérieuse... **il semblerait que ce soit la seconde destination de notre voyage !** 🏝️

<Image src="/assets/workshop/configuration/app/bay_app_ile.jpeg" imageAlt="Console domain screen" withSpacing></Image>
