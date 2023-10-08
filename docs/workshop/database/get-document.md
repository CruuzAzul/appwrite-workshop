---
title: Récupérer nos données
---

<Hero
    title="Récupérons nos données !"
    image="/assets/workshop/database/get.jpg"
    description="Nous avons réussi à insérer de nouvelle données dans cette grande forêt qu’est la base de donnée, maintenant, il ne nous reste plus qu’a les récolter pour pouvoir les afficher !"
/>

Des données en base, c'est bien, des données en base affichées sur notre interface, c'est encore mieux !

## Récupération de documents

Pour ce faire, vous pouvez remplir la fonction `getCoordinatesList` pour qu'elle récupère toutes les coordonnées depuis notre collection, pour qu'elles puisse s'afficher dans directement sur l’AppVenture.

<Solution>

```ts
export const getCoordinatesList = async (): Promise<Coordinates[]> => {
  const { documents: coordinatesList } = await database.listDocuments<Coordinates>( // [!code ++]
    EnvConfig.databaseId, // [!code ++]
    EnvConfig.coordinatesCollectionId, // [!code ++]
  ); // [!code ++]

  return coordinatesList; // [!code ++]
};
```

</Solution>

Un fois la fonction de récupération réalisée, vous devriez pouvoir voir les différentes coordonnées directement sur l‘AppVenture 🎉

Cependant, avec tout nos tests il est possible que des mauvais documents ai été inséré en base, continuons notre chemin, nous trouverons peut être une solution.

<InfoBonus title="Différentes solution de récupération">

Dans ce workshop, tout passe par les différents SDK d’Appwrite.
Cependant, vous avez aussi la possibilité d'accéder à vos données avec deux autres méthodes :

- Avec des appels REST
- Avec GraphQL

Et cerise sur le gâteau, l’interaction avec Appwrite par GraphQL ou REST est disponible pour tout les modules, hormis celui d’authentification pour GraphQL, le tout sans aucune configuration ! 🤩

</InfoBonus>
