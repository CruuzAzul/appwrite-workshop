---
title: Récupérer nos données
---

<Documentation link="https://appwrite.io/docs/products/databases/quick-start#list-documents"></Documentation>

<Hero
title="Récupérons nos données ! 📑"
image="/assets/workshop/database/get.jpg"
description="Nous avons réussi à insérer de nouvelles données dans cette grande forêt qu’est la base de données.
Maintenant, il ne nous reste plus qu’à les récolter pour pouvoir les afficher ! Car bon... des données en base, c'est
bien, des données en base affichées sur notre interface, c'est encore mieux !"
/>

## Récupération de documents 🗂️

Pour ce faire, vous pouvez remplir la fonction `getCoordinatesList` pour qu'elle récupère toutes les coordonnées depuis
notre collection, pour qu'elles puissent s'afficher directement sur l’AppVenture.

<Solution>

```ts
import {database} from '../../config/client.config'; // [!code ++]
import {EnvConfig} from '../../config/env.config'; // [!code ++]

export const getCoordinatesList = async (): Promise<Coordinates[]> => {
  try {
    const {documents} = await database.listDocuments<Coordinates>( // [!code ++]
      EnvConfig.databaseId, // [!code ++]
      EnvConfig.coordinatesCollectionId, // [!code ++]
    ); // [!code ++]

    return documents; // [!code ++]
  } catch (error: any) {
    throw new AppwriteException(error);
  }
};
```

</Solution>

Une fois la fonction de récupération réalisée, vous devriez pouvoir voir les différentes coordonnées directement sur
l'AppVenture 🎉

Cependant, avec tous nos tests, il est possible que des mauvais documents aient été insérés en base, continuons notre
chemin, nous trouverons peut-être une solution...

<InfoBonus title="Différentes solutions de récupération">

Dans ce workshop, tout passe par les différents SDK d’Appwrite.
Cependant, vous avez aussi la possibilité d'accéder à vos données avec deux autres méthodes :

- Avec des appels REST
- Avec GraphQL

Et cerise sur le gâteau, l’interaction avec Appwrite par GraphQL ou REST est disponible pour tous les modules, hormis
celui d’authentification pour GraphQL, le tout sans aucune configuration ! 🤩

</InfoBonus>
