---
title: Préparer notre collection
---

<Documentation link="https://appwrite.io/docs/products/databases/quick-start"></Documentation>

<Hero
title="Préparons notre collection 💾"
image="/assets/workshop/database/database.jpg"
description="Après un peu de marche, on atteint vite un coin de la forêt un peu plus vierge, c'est exactement ce qu'il
nous fallait pour commencer à travailler et créer notre propre collection ! 🌳"
/>

Qui dit chasse au trésor dit carte ! Eh bien heureusement, nous avons la nôtre avec nous. Cependant, elle est bien vide
actuellement, mais j’ai comme l’impression que finir ces différents modules nous donne des coordonnées que l’on pourra
ensuite afficher sur notre carte ! Il ne nous manque plus qu’un moyen de les ranger quelque part pour ne pas les
perdre ... 📍

## Création d’une collection 🗃️

La première étape est de créer une collection pour les stocker.
Dans Appwrite, on peut créer plusieurs bases de données, qui peuvent contenir plusieurs collections, qui contiennent
plusieurs documents.

Dans le cadre de ce Workshop, nous avons créé pour vous la base de donnée **Workshop**, dans laquelle vous allez pouvoir
travailler !

Pour commencer, créez une collection **Coords** dans cette base de donnée. Vous pouvez le faire en cliquant sur le
bouton **+ Create collection**, ou en cliquant sur **la carte +**, vous pouvez générer un ID aléatoire.

<Image src="/assets/workshop/database/collectionModal.png" imageAlt="Modal de création de collection" withSpacing></Image>

## Définition du schéma 📄

Une fois créée, pour pouvoir y insérer des documents, vous devez lui ajouter un **schéma** en créant des attributs avec
chacun leur type prédéfini. Cette étape est obligatoire et provient du fait que le moteur de base de donnée utilisé est
Maria DB, un moteur SQL.

Vous n’avez qu’à vous rendre dans l’onglet **Attributes**, puis cliquer sur le bouton **+ Create attribute**, ensuite
sélectionner le bon type de donnée dans le menu déroulant.

Vous arriverez ensuite sur un modal vous permettant de rentrer les différentes informations de votre attribut, comme sa
valeur minimale et maximale pour un nombre, ou si l'attribut est requis par exemple.

<Image src="/assets/workshop/database/attributeModal.png" imageAlt="Modal de création d'attribut" withSpacing></Image>

_Exemple de création de l'attribut latitude_

#### Le document de coordonnée est le schéma suivant :

```ts
type Coordinate = {
  name: string; // Required
  latitude: float; // Required
  longitude: float; // Required
  picture?: url; // Optional
};
```

## Gestion des permissions 🔑

Notre collection est prête ! En revanche, il reste deux petits détails à gérer.

Premièrement, Appwrite ne donne aucune permission d’accès sur la collection par défaut, il vous faudra donc modifier
ces dernières dans l’onglet **Settings**, pour que tous les utilisateurs connectés puissent récupérer, créer, modifier et
supprimer des documents.

<Image src="/assets/workshop/database/permission.png" imageAlt="Permission d'une collection" withSpacing></Image>

_Exemple de permission d’une collection_

## Récupération de l’ID de la collection 🆔

Ensuite, pour que l’AppVenture puisse accéder à cette collection, il faut qu'elle connaisse son ID !

Pour cela, il vous suffit de récupérer l’ID sur la console Appwrite, juste à côté de son nom, et de remplir la variable
d’environnement `NEXT_PUBLIC_APPWRITE_COORDINATES_COLLECTION_ID` avec !

<Image src="/assets/workshop/database/idCollection.png" imageAlt="Identifiant d’un collection" withSpacing></Image>

**Et voilà ! À présent, vous avez votre collection prête à l'emploi et les utilisateurs de l’AppVenture peuvent y
accéder ! 🎉**
