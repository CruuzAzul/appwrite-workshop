---
title: Développer votre fonction
---

<Documentation link="https://appwrite.io/docs/products/functions/development"></Documentation>

<Hero
title="Développons notre fonction ✍🏼"
image="/assets/workshop/functions/develop.jpg"
description="Notre fonction existe, elle est là, mais pour l'instant, on ne peut pas dire qu'elle est très utile. Je
suis sûr que l’on peut faire en sorte qu'elle nous aide à régler notre problème de destination, pour aller chercher un
indice qui nous mènera au trésor ! Votre mission va donc être de développer une fonction qui nous permettra de décoder
ces fichues destinations ..."
/>

## Étape 1️⃣ : Écouter l’évènement de création de destination

Pour commencer, il faut faire en sorte que votre fonction écoute toutes les nouvelles créations de documents dans la
table des destinations (qui a déjà été créée pour vous en base de données).

Pour faire cela, Appwrite met à disposition un système d'évènement, que vous pouvez retrouver dans
la [documentation](https://appwrite.io/docs/advanced/platform/events#authentication-events), et qui vous permet de
réagir à tout ce qui pourrait se passer dans votre instance Appwrite, de la modification d’un fichier en storage à la
création d’un utilisateur.

::: warning
Attention à ne pas écouter un évènement déclenché par la fonction elle-même, cela pourrait créer une fonction qui
s’exécute en boucle.
:::

## Étape 2️⃣ : Lier votre instance Appwrite

Pour que la fonction ait accès à votre instance Appwrite, il faut la lier !

De la même façon que l’on le fait depuis le début de ce workshop, on doit initialiser notre client Appwrite en utilisant
un **SDK serveur** et les différentes variables d’environnement dont elle a besoin.

::: tip
Pour que votre fonction ait accès aux différentes variables d'environnement que l'on a précédemment renseigné dans notre
application, il faudra les ajouter à notre fonction dans l’onglet **Settings** de la console Appwrite

<Image src="/assets/workshop/functions/envVariable.png" imageAlt="Réglage des variable d’environnement dans la console Appwrite" withoutShadow ></Image>

Elles seront ensuite disponibles dans votre fonction à travers la bibliothèque système de votre langage (`process.env`
dans le cas de Node.js) !
:::

<Solution>

```js
import {Client} from 'node-appwrite';

export default async ({req, res}) => {
  const client = new Client() 
    .setEndpoint(process.env.APPWRITE_ENDPOINT) 
    .setProject(process.env.APPWRITE_PROJECT_ID) 
    .setKey(process.env.APPWRITE_API_KEY);  
 
  return res.send(); 
};
```

</Solution>

## Étape 3️⃣ : Initialiser le service de base de donnée

Une fois votre fonction liée à votre instance Appwrite, il nous faut initialiser les services dont on aura besoin.

Dans notre cas, nous n'aurons besoin que du service de base de données pour faire de la modification sur des documents.

<Solution>

```js
import {Client, Databases} from 'node-appwrite';

export default async ({req, res}) => {
  const client = new Client()
    .setEndpoint(process.env.APPWRITE_ENDPOINT)
    .setProject(process.env.APPWRITE_PROJECT_ID)
    .setKey(process.env.APPWRITE_API_KEY);

  const database = new Databases(client); // [!code ++]

  return res.send();
};
```

</Solution>

## Étape 4️⃣ : Modifier le nouvel objet créé

Une fois que notre fonction écoute le bon évènement, le document créé sera disponible dans le body de la requête mis à
disposition par Appwrite. Il ne vous restera plus qu’à le modifier avec la fonction `decrypt` qui vous est fourni dans
le fichier `/utils/decrypt.js` !

::: info
Pour que la fonction `decrypt` fonctionne, il vous faudra déplacer le fichier dans les sources de votre fonction pour
qu'elle puisse l'importer.

Vous pouvez le faire à la main ou avec la commande suivante à la racine du projet :

```bash
mv ./utils/decrypt.js ./functions/<NomDeVotreFonction>/src
```

:::

<Solution>

```js
import {Client, Databases} from 'node-appwrite';

import {decrypt} from './decrypt.js'; // [!code ++]

export default async ({req, res}) => {
  const client = new Client()
    .setEndpoint(process.env.APPWRITE_ENDPOINT)
    .setProject(process.env.APPWRITE_PROJECT_ID)
    .setKey(process.env.APPWRITE_API_KEY);

  const database = new Databases(client);

  database.updateDocument( // [!code ++]
    process.env.APPWRITE_DATABASE_ID, // [!code ++]
    process.env.APPWRITE_DESTINATION_COLLECTION_ID, // [!code ++]
    req.body.$id, // [!code ++]
    { // [!code ++]
      destination: decrypt(req.body.destination), // [!code ++]
    }, // [!code ++]
  ); // [!code ++]

  return res.send();
};
```

</Solution>

Une fois que votre fonction est développée, il ne vous reste plus qu'à la tester en appuyant sur le bouton **Ajouter une
destination** sur l'AppVenture, si la destination est bien décryptée, c'est gagné !

**Continuez d’appuyer jusqu’à trouver l’indice 😉**

<InfoBonus title="Déclencher ses fonctions à intervalle régulier">
<br />
Nous avons vu que vous pouvez déclencher votre fonction depuis la console et en écoutant un évènement provenant de l’un des services d’Appwrite

Mais il est aussi possible de faire en sorte que notre fonction se déclenche automatiquement à certain moment de la
journée ou de la semaine !

Appwrite donne la possibilité de renseigner une chaîne de caractère **CRON** dans les réglages d’une fonction, et qui
vous permettra de remplir ce besoin !

<Image src="/assets/workshop/functions/cron.png" imageAlt="Réglage de l’exécution des fonctions par CRON" ></Image>

<br/>
</InfoBonus>
