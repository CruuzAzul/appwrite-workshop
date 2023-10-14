---
title: Lancement de l'AppVenture
---

<Hero
title="Lancement de l'AppVenture 🚀"
image="/assets/workshop/configuration/app/bay_app.jpeg"
description="Avant de partir à la découverte des trésors cachés dans le monde d'Appwrite, il est temps de préparer notre
fidèle compagnon de voyage : l'AppVenture. Elle est bien plus qu'une simple application. Elle est votre carte au trésor,
votre boussole et votre compagnon fidèle dans votre quête, vous aidant à déverrouiller les secrets de chaque destination
que nous explorerons ! 🧳 Vous n'avez pas besoin de la maîtriser entièrement pour avancer, mais comprenez qu'elle sera là
quand vous aurez besoin d'elle !"
/>

## Lancer l'AppVenture 🚀

Maintenant que vous avez une idée de l'importance de l'AppVenture, voici comment la lancer :

**1.** Clonez la branche `workshop` [repository de l'AppVenture](https://app-appwrite-workshop-cruzazul.vercel.app/en)
depuis GitHub grâce à la commande 🥳

```bash
# SSH
git clone -b workshop git@github.com:CruuzAzul/app-appwrite-workshop.git

# HTTPS
git clone -b workshop https://github.com/CruuzAzul/app-appwrite-workshop.git
```

**2.** Installez les dépendances en exécutant `pnpm install` 📦

:::tip
Si vous n'avez pas pnpm installé, vous pouvez le faire en exécutant `npm install -g pnpm` ou en suivant les
[instructions d'installation](https://pnpm.io/fr/installation) sur le site officiel de pnpm.
:::

**3.** Lancez l'application en utilisant `pnpm dev` et ouvrez votre navigateur sur `localhost:3000`.

## Les endroits clés de l'AppVenture 🔑

Avant de mettre les voiles, comprenons rapidement l'architecture de l'AppVenture. Cette application est construite avec
Next.js, un framework React. Elle nous permettra de communiquer avec notre instance Appwrite Cloud et d'intéragir avec
les différents services comme l'authentification, stocker des données et exécuter des fonctions 📂

Voici quelques endroits clés dans le code de l'AppVenture qui seront utiles tout au long de notre aventure ! Mis à part
ça, vous n'aurez pas besoin de vous soucier du reste du code de l'application 🧑🏼‍💻

### Dans le code 📝
---

1️⃣ **Variables d'Environnement** : Vous trouverez un fichier `.env.local` pour configurer les variables d'environnement.
   Assurez-vous de les ajuster en fonction des informations de configuration que vous aurez obtenues lors de la création
   de votre instance Appwrite Cloud et de l'initialisation de vos différents services.

:::warning
**Les seuls autres fichiers que vous devrez modifier sont ceux présents dans le dossier `src/workshop`**. Tout le reste
est présent uniquement pour le bon fonctionnement de l'application, mais ne vous sera pas utile pour l'atelier, merci de
ne pas y toucher ! 🙏🏼
:::

2️⃣ **Les différents services et composants** : vous trouverez dans le dossier `src/workshop` tous les services
   et composants que vous aurez à compléter. Vous pouvez les identifier grâce aux commentaires `HERE` présents dans le
   code. Les différents fichiers à modifier seront indiqué tout au long de l'atelier.

### Dans l'interface 🖥️
---

1️⃣ **Le dashboard** : vous trouverez un dashboard pour vous aider à naviguer dans l'application et à accéder aux
   différentes fonctionnalités. Vous pouvez y accéder en cliquant sur le bouton `Dashboard` en haut à droite de
   l'application ou en vous randant sur `localhost:3000/dashboard`.

2️⃣ **Votre carte au trésor à compléter** : vous trouverez une carte au trésor à compléter au fur et à mesure de votre
   progression dans l'atelier avec les coordonnées que vous aurez obtenues ! Pour y accéder, vous pourrez cliquer sur
   les boutons qui apparaîtront au fur et à mesure de votre progression dans l'atelier ou en vous rendant
   sur `localhost:3000/databases`.

<br/>

---
<br/>

**Vous voilà prêt à embarquer dans cette AppVenture, avec votre fidèle compagnon, prêt à explorer l'inconnu 😎.
Cependant, il y a un léger hic : AppVenture ne peut pas fonctionner en solitaire. Il semblerait que de nombreux
fragments de l'application manquent à l'appel ! En y regardant de plus près, comme c'est souvent le cas, il semble
qu'elle ait besoin d'un solide backend pour fonctionner. Et devinez quel backend elle préfère ? Eh bien, c'est Appwrite,
bien sûr ! 🤔**
