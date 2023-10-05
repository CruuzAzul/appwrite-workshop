<Hero
    title="La tête dans les functions ! ☁️"
    image="/assets/workshop/functions/clouds.jpeg"
    description="Nous voici arrivé dans les nuages ! Ici, c’est le domaine des Cloud Function, de petit bout de code qui vous permettrons d’utiliser le serveur !"
/>

## **Guide d’arrivée** ☁️

Vous vous êtes peut être déjà posé la question, Appwrite me permet de ne pas faire de backend, mais qu'en ai-t-il si j'ai vraiment besoin d'avoir du code exécuté coté serveur ?

C'est le besoin que remplisse les **Clouds Functions** !

## **Liens utiles** 🛩️

- [Documentation Appwrite sur les clouds functions](https://appwrite.io/docs/products/functions)

## **Créer votre première fonction**

_Rendez vous sur le module de fonction dans le workshop_

Dans notre cas, nous avons une liste de destinations, malheureusement, elles sont toutes crypté, impossible de savoir où aller !
Comme vous pouvez le constater, lorsque vous cliquez sur le bouton permettant d'ajouter une destination, la nouvelle destination qui apparaît est elles aussi toujours crypté, nous allons donc devoir développer une cloud function pour pouvoir décrypter la destination au moment où elle est insérée dans la base de données, pour qu’on puisse enfin savoir où aller !

Pour se faire, vous devez créer une nouvelle cloud function, et plusieurs solutions s'offre à vous !

:::tabs
== CLI
_Méthode recommandé pour ce workshop_

Vous pouvez utiliser la CLI d’Appwrite pour créer votre fonction avec la commande suivante :

```bash
appwrite init function
```

Vous n'aurez qu'à suivre les étapes, et voila ! Votre fonction est créée et vous attendra directement sur la console Appwrite

Et quand vous voulez la redéployer, après un développement pas exemple, il vous suffira d’utiliser la commande suivante :

```bash
appwrite deploy function
```

Et une nouvelle fois de suivre les différentes étapes !
== Quick start
Vous pouvez créer votre fonction directement depuis la console Appwrite en vous rendant sur la page **Functions** puis en cliquant sur le bouton **+ Create function**.

Cliquez ensuite sur le bouton **Quick start**, et remplissez le formulaire permettant de créer la fonction. Vous n'aurez pas besoin de renseigner une variable pour l'API key, nous nous en occuperont plus tard.

Ensuite, vous allez devoir créer un repository github pour y lier votre fonction, cela permettra de plus facilement suivre les différentes versions de votre fonction et de pouvoir la déployer automatiquement à chaque changement sur votre branch de production !

== Templates
**Dans notre cas, choisir le template `Starter function`**

Vous pouvez créer votre fonction directement depuis un template fourni par la team Appwrite.

Pour se faire, il vous suffit de vous rendre sur la page **Function**, puis sur l’onglet **Templates**, et vous pourrez choisir parmi 15 templates, la majorité étant développer avec le runtime **node js** mais certain sont aussi disponible dans d'autre langage.

Après avoir sélectionné le template que vous souhaitez, vous aurez accès à un formulaire vous permettant de renseigner les différentes informations de votre fonction. Vous pouvez ajouter l'API Key que vous avez précédemment créé dans ce Workshop, pour que la fonction puisse avoir accès à votre instance Appwrite à travers un SDK serveur.

Ensuite, vous allez devoir créer un repository github pour y lier votre fonction, cela permettra de plus facilement suivre les différentes versions de votre fonction et de pouvoir la déployer automatiquement à chaque changement sur votre branch de production !
:::

Lors de la création de la fonction, vous pouvez choisir parmi un large choix de langage et runtime

<Image src="/assets/workshop/functions/runtime.png" imageAlt="Liste des runtimes Appwrite" />

_Les solutions sont écrite en JS avec NodeJS, mais vous pouvez choisir un autre langage_

Une fois votre fonction créée, vous pouvez aller dans la console d'Appwrite pour la tester.

Pour se faire, allez dans l'onglet **Functions**, cliquez sur votre fonction fraîchement déployée.

Vous arrivez sur une vue où vous pouvez voir le status de votre fonction, son historique de déploiement et lequel de ses derniers est actif.

Pour tester rapidement votre fonction, vous pouvez cliquer sur le bouton **Execute now**, et une nouvelle execution apparaîtra dans l’onglet **Execution**

Une fois l’execution terminée (en général après quelque millisecondes), on peut accéder aux différents log de notre fonction, dans lesquels on devra trouver le "Hello, logs" et le "Hello, errors!"

## **Votre mission** 🕵️

Votre mission va donc être de développer une fonction qui nous permettra de décoder ces fichus destinations ...

Pour se faire, votre fonction devra écouter toutes les nouvelles créations de documents dans la table des destinations (qui a déjà été créée pour vous en base de données), récupérer ce-dis document depuis le corps de la requête et le modifier en utilisant la fonction `decrypt` qui vous est fourni !

:::tip
Pour que votre fonction ai accès à l'instance Appwrite, elle aura besoin des variables d'environnement que l'on a précédemment renseignées dans notre application, il faudra les ajouter à notre fonction dans l’onglet **Settings** de la console Appwrite
:::

<Solution>

```js
import { Client, Databases } from 'node-appwrite';

const decryptMap = {
  IITK2E: 'Nantes',
  OEJ0DJ: 'Toulouse',
  MEO312: 'Strasbourg',
  BA342H: 'Lille',
  MP0909: 'Paris',
  JI93JZ: 'Lyon',
  QAPZE3: 'Grenoble',
  O0121S: 'Rennes',
  POA123: 'Nice',
  MLMLM2: 'Marseille',
};

export const decrypt = (textToDecrypt) => {
  return decryptMap[textToDecrypt];
};

export default async ({ req, res, log, error }) => {
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

<InfoBonus title="Déclencher ses fonctions à interval régulier">
<br />
Nous avons vu que vous pouvez déclenchez vos fonction depuis la console et en écoutant un évènement provenant de l’un des services d’Appwrite

Mais il est aussi possible de faire en sorte que notre fonction se déclenche automatiquement à certain moment de la journée ou de la semaine !

Appwrite donne la possibilité de renseigner une chaîne de caractère **CRON** dans les réglage d’une fonction, et qui vous permettra de remplir ce besoin !
</InfoBonus>
