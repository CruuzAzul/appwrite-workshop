---
title: Creer votre première fonction
---

<Hero
    title="Créons notre propre fonction"
    image="/assets/workshop/functions/create.jpg"
    description="Une fois arrivé dans les nuages, il ne nous reste plus qu’a choisir dans la multitude de possibilité pour créer notre fonction ... Quel langage choisir ? Avec quelle méthode de création ? Nous allons explorer tout ça"
/>

## Créer votre première fonction

_Rendez vous sur le module de fonction dans l’AppVenture_

Dans notre cas, nous avons une liste de destinations, malheureusement, elles sont toutes crypté, impossible de savoir où aller !
Comme vous pouvez le constater, lorsque vous cliquez sur le bouton permettant d'ajouter une destination, la nouvelle destination qui apparaît est elle aussi toujours crypté, nous allons donc devoir développer une fonction pour pouvoir décrypter la destination au moment où elle est insérée dans la base de données, pour qu’on puisse enfin savoir où aller !

Pour se faire, vous devez créer une nouvelle fonction, et plusieurs solutions s'offre à vous !

:::tabs
== CLI
**_Méthode recommandé pour ce workshop_**

Vous pouvez utiliser la CLI d’Appwrite pour créer votre fonction avec la commande suivante :

```bash
appwrite init function
```

La CLI va vous demander plusieurs paramètres, comme le nom, l’ID et le runtime de votre fonction. En laissant l’ID vide, vous aurez un ID unique.

Et voila ! Votre fonction est créée et vous attendra directement sur la console Appwrite.

Et quand vous voulez la redéployer, après un développement pas exemple, il vous suffira d’utiliser la commande suivante :

```bash
appwrite deploy function
```

Cette fois, vous aurez juste à sélectionner les fonction que vous souhaitez déployer, et le tour est joué !

Attention cependant, il ne faudra pas oublier d’ajouter votre clé API dans les variables d’environnement de votre fonction, que vous pourrez trouver dans l’onglet **Settings**

<Image src="/assets/workshop/functions/envVariable.png" imageAlt="Réglage des variable d’environnement dans la console Appwrite" withoutShadow />

== Quick start
Vous pouvez créer votre fonction directement depuis la console Appwrite en vous rendant sur la page **Functions** puis en cliquant sur le bouton **+ Create function**.

Cliquez ensuite sur le bouton **Quick start**.

<Image src="/assets/workshop/functions/quickStart.png" imageAlt="Formulaire de création de fonction" withoutShadow />

Vous vous trouverez devant un formulaire permettant de créer la fonction.
Vous pouvez ajouter la clé API que vous avez créé lors de l’étape précédente, pour que votre fonction ai accès à votre instance Appwrite à travers un SDK serveur.

Ensuite, vous allez devoir créer un repository github pour y lier votre fonction, cela permettra de plus facilement suivre les différentes versions de votre fonction et de pouvoir la déployer automatiquement à chaque changement sur votre branch de production !

== Utiliser un Template
**Dans notre cas, choisir le template `Starter function`**

Vous pouvez créer votre fonction directement depuis un template fourni par la team Appwrite.

Pour se faire, il vous suffit de vous rendre sur la page **Function**, puis sur l’onglet **Templates**, et vous pourrez choisir parmi 15 templates, la majorité étant développer avec le runtime **node js** mais certain sont aussi disponible dans d'autre langage.

<Image src="/assets/workshop/functions/quickStart.png" imageAlt="Formulaire de création de fonction" withoutShadow />

Après avoir sélectionné le template que vous souhaitez, vous aurez accès à un formulaire vous permettant de renseigner les différentes informations de votre fonction.
Vous pouvez ajouter l'API Key que vous avez créé dans l’étape précédente, pour que la fonction puisse avoir accès à votre instance Appwrite à travers un SDK serveur.

Ensuite, vous allez devoir créer un repository github pour y lier votre fonction, cela permettra de plus facilement suivre les différentes versions de votre fonction et de pouvoir la déployer automatiquement à chaque changement sur votre branch de production !
:::

Comme vue en introduction, Appwrite met a disposition plusieurs méthode de création de fonction, mais aussi beaucoup de possibilités de langages et de runtimes !

Les solutions de ce workshop sont écrite en JS avec NodeJS, mais vous pouvez choisir un autre langage si vous vous sentez aventureux 🥷

Une fois votre fonction créée, vous pouvez aller dans la console d'Appwrite pour la tester.

Pour se faire, allez dans l'onglet **Functions**, cliquez sur votre fonction fraîchement déployée.

Vous arrivez sur une vue où vous pouvez voir le status de votre fonction, son historique de déploiement et lequel de ses derniers est actif.

Pour tester rapidement votre fonction, vous pouvez cliquer sur le bouton **Execute now**, et une nouvelle execution apparaîtra dans l’onglet **Execution**

<Image src="/assets/workshop/functions/execution.png" imageAlt="Onglet execution du module de fonction sur la console Appwrite" />

Une fois l’execution terminée (en général après quelque millisecondes), on peut accéder aux différents log de notre fonction, dans lesquels on devra trouver les différents affichage de notre fonction, "Hello, logs" et le "Hello, errors!"

C'est bon ! Notre fonction réagi bien, il est maintenant temps de lui faire faire autre chose que d’uniquement afficher des messages en console 🤩
