---
title: Créer votre première fonction
---

<Documentation link="https://appwrite.io/docs/products/functions/quick-start"></Documentation>

<Hero
title="Créons notre propre fonction ➕"
image="/assets/workshop/functions/create.jpg"
description="Une fois arrivé dans les nuages, il ne nous reste plus qu’à choisir dans la multitude de possibilités pour
créer notre fonction ... Quel langage choisir ? Avec quelle méthode de création ? Nous allons explorer tout ça"
/>

## Créer votre première fonction ☁️

_Rendez-vous sur le module de fonction dans l’AppVenture_

Dans notre cas, nous avons une liste de destinations, malheureusement, elles sont toutes cryptées, impossible de savoir où
aller ! Comme vous pouvez le constater, lorsque vous cliquez sur le bouton permettant d'ajouter une destination, la
nouvelle destination qui apparaît est, elle aussi, toujours cryptée. Nous allons donc devoir développer une fonction pour
pouvoir décrypter la destination au moment où elle est insérée dans la base de données, pour qu’on puisse enfin savoir
où aller !

**Pour ce faire, vous devez créer une fonction, et plusieurs solutions s'offrent à vous !**

:::tabs
== CLI
**_Méthode recommandée pour ce workshop_**

Vous pouvez utiliser la CLI d’Appwrite pour créer votre fonction avec la commande suivante :

```bash
appwrite init function
```

La CLI va vous demander plusieurs paramètres, comme le nom, l’ID et le runtime de votre fonction. En laissant l’ID vide,
vous aurez un ID unique.

Et voilà ! Votre fonction est créée et vous attendra directement sur la console Appwrite.

Et quand vous voulez la redéployer, après un développement par exemple, il vous suffira d’utiliser la commande
suivante :

```bash
appwrite deploy function
```

Cette fois, vous aurez juste à sélectionner la fonction que vous souhaitez déployer, et le tour est joué !

Attention cependant, il ne faudra pas oublier d’ajouter votre clé API dans les variables d’environnement de votre
fonction, que vous pourrez trouver dans l’onglet **Settings**

<Image src="/assets/workshop/functions/envVariable.png" imageAlt="Réglage des variables d’environnement dans la console Appwrite" withoutShadow ></Image>

== Quick start

Vous pouvez créer votre fonction directement depuis la console Appwrite en vous rendant sur la page **Functions** puis
en cliquant sur le bouton **+ Create function**.

Cliquez ensuite sur le bouton **Quick start**.

<Image src="/assets/workshop/functions/quickStart.png" imageAlt="Formulaire de création de fonction" withoutShadow ></Image>

Vous vous trouverez devant un formulaire permettant de créer la fonction.
Vous pouvez ajouter la clé API que vous avez créée lors de l’étape précédente, pour que votre fonction ait accès à votre
instance Appwrite à travers un SDK serveur.

Ensuite, vous allez devoir créer un repository GitHub pour y lier votre fonction, cela permettra de plus facilement
suivre les différentes versions de votre fonction et de pouvoir la déployer automatiquement à chaque changement sur
votre branch de production !

== Utiliser un Template

**Dans notre cas, choisir le template `Starter function`**

Vous pouvez créer votre fonction directement depuis un template fourni par la team Appwrite.

Pour ce faire, il vous suffit de vous rendre sur la page **Function**, puis sur l’onglet **Templates**, et vous pourrez
choisir parmi 15 templates, la majorité étant développée avec le runtime **Node.js** mais certains sont aussi disponibles
dans d'autres langages.

<Image src="/assets/workshop/functions/quickStart.png" imageAlt="Formulaire de création de fonction" withoutShadow ></Image>

Après avoir sélectionné le template que vous souhaitez, vous aurez accès à un formulaire vous permettant de renseigner
les différentes informations de votre fonction.
Vous pouvez ajouter l'API Key que vous avez créée dans l’étape précédente, pour que la fonction puisse avoir accès à
votre instance Appwrite à travers un SDK serveur.

Ensuite, vous allez devoir créer un repository Github pour y lier votre fonction, cela permettra de plus facilement
suivre les différentes versions de votre fonction et de pouvoir la déployer automatiquement à chaque changement sur
votre branch de production !
:::

Comme vu en introduction, Appwrite met à disposition plusieurs méthodes de création de fonction, mais aussi beaucoup de
possibilités de langages et de runtimes ! Les solutions de ce workshop sont écrites en **JS avec Node.js**, mais vous
pouvez choisir un autre langage si vous vous sentez aventureux 🥷

## Tester votre fonction 🧪

Une fois votre fonction créée, vous pouvez aller dans la console d'Appwrite pour la tester. Pour ce faire, allez dans
l'onglet **Functions**, cliquez sur votre fonction fraîchement déployée.

Vous arrivez sur une vue où vous pouvez voir le statut de votre fonction, son historique de déploiement et lequel de ses
derniers est actif.

:::tip
Pour tester rapidement votre fonction, vous pouvez cliquer sur le bouton **Execute now**, et une nouvelle exécution
apparaîtra dans l’onglet **Execution** 🚀
:::

<Image src="/assets/workshop/functions/exécution.png" imageAlt="Onglet exécution du module de fonction sur la console Appwrite" ></Image>

Une fois l’exécution terminée (en général après quelques millisecondes), on peut accéder aux différents logs de notre
fonction, dans lesquels on devra trouver les différents affichages de notre fonction, _"Hello, logs!"_ et le _"Hello,
errors!"_

**C'est bon ! Notre fonction réagit bien, il est maintenant temps de lui faire faire autre chose que d’uniquement afficher
des messages en console 🤩**
