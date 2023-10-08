---
title: Développer votre fonction
---

<Hero
    title="Développons notre fonction"
    image="/assets/workshop/functions/develop.jpg"
    description="Notre fonction existe, elle est la, mais pour l'instant on ne peux pas dire qu'elle est très utile. Je suis sur que l’on peut faire en sorte qu'elle nous aide à régler notre problème de destination, pour aller chercher un indice qui nous mènera au trésor !"
/>

## Votre mission 🕵️

Votre mission va donc être de développer une fonction qui nous permettra de décoder ces fichus destinations ...

**1.** Écouter l’événement de création de destination

Pour commencer, il faut faire en sorte que votre fonction écoute toutes les nouvelles créations de documents dans la table des destinations (qui a déjà été créée pour vous en base de données).

Pour faire cela, Appwrite met à disposition un système d'événement, que vous pouvez retrouver dans la [documentation](https://appwrite.io/docs/advanced/platform/events#authentication-events), et qui vous permet de réagir à tout ce qui pourrai se passer dans votre instance Appwrite, de la modification d’un fichier en storage à la création d’un utilisateur.

::: warning
Attention à ne pas écouter un événement déclenché par la fonction elle même, cela pourrai créer une fonction qui s’exécute en boucle.
:::

**2.** Lier votre instance Appwrite

Pour que la fonction ai accès à votre instance Appwrite, il faut la lier !

De la même façon que l’on le fait depuis le début de ce workshop, on doit initialiser notre client Appwrite en utilisant un **SDK serveur** et les différentes variables d’environnement dont elle a besoin.

::: tip
Pour que votre fonction ai accès aux différentes variables d'environnement que l'on a précédemment renseignées dans notre application, il faudra les ajouter à notre fonction dans l’onglet **Settings** de la console Appwrite

<Image src="/assets/workshop/functions/envVariable.png" imageAlt="Réglage des variable d’environnement dans la console Appwrite" withoutShadow />

Elle seront ensuite disponible dans vos fonction à travers la bibliothèque système de votre langage (`process.env` dans le cas de Node Js) !
:::

<Solution>

```js
import { Client } from 'node-appwrite';

export default async ({ req, res }) => {
  const client = new Client()
    .setEndpoint(process.env.APPWRITE_ENDPOINT)
    .setProject(process.env.APPWRITE_PROJECT_ID)
    .setKey(process.env.APPWRITE_API_KEY);

  return res.send();
};
```

</Solution>

**3.** Initialiser le service de base de donnée

Une fois votre fonction lier à votre instance Appwrite, il nous faut initialiser les services dont on aura besoin.

Dans notre cas, nous n'auront besoin que du service de base de donnée pour faire des modification sur des document.

<Solution>

```js
import { Client, Databases } from 'node-appwrite';

export default async ({ req, res }) => {
  const client = new Client()
    .setEndpoint(process.env.APPWRITE_ENDPOINT)
    .setProject(process.env.APPWRITE_PROJECT_ID)
    .setKey(process.env.APPWRITE_API_KEY);

  const database = new Databases(client);

  return res.send();
};
```

</Solution>

**4.** Modifier le nouvel objet créé

Une fois que notre fonction écoute le bon événement, le document créé sera disponible dans le body de la requête mit à disposition par Appwrite. Il ne vous restera plus qu’à le modifier avec la fonction `decrypt` qui vous est fourni dans le fichier `/utils/decrypt.js` !

::: info
Pour que la fonction `decrypt` fonctionne, il vous faudra déplacer le fichier dans les sources de votre fonction pour qu'elle puisse l'importer.

Vous pouvez le faire à la main ou avec la commande suivante à la racine du projet :

```bash
mv ./utils/decrypt.js ./functions/<NomDeVotreFonction>/src
```

:::

<Solution>

```js
import { Client, Databases } from 'node-appwrite';

import { decrypt } from './decrypt.js';

export default async ({ req, res }) => {
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

Une fois que votre fonction est développée, il ne vous reste plus qu'à la tester en appuyant sur le bouton **Ajouter une destination** sur l'AppVenture, si la destination est bien décrypté, c'est gagné !

Continuez d’appuyer jusqu’à trouver l’indice 😉

<InfoBonus title="Déclencher ses fonctions à interval régulier">
<br />
Nous avons vu que vous pouvez déclenchez vos fonction depuis la console et en écoutant un évènement provenant de l’un des services d’Appwrite

Mais il est aussi possible de faire en sorte que notre fonction se déclenche automatiquement à certain moment de la journée ou de la semaine !

Appwrite donne la possibilité de renseigner une chaîne de caractère **CRON** dans les réglage d’une fonction, et qui vous permettra de remplir ce besoin !

<Image src="/assets/workshop/functions/cron.png" imageAlt="Réglage de l’execution des fonction par CRON" />
</InfoBonus>
