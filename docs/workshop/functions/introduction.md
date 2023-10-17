---
title: La tête dans les functions
---

<Documentation link="https://appwrite.io/docs/products/functions"></Documentation>

<Hero
    title="La tête dans les functions ! ☁️"
    image="/assets/workshop/functions/clouds.jpeg"
description="Après un long voyage, nous voici enfin arrivés dans les nuages ! Ici, c’est le domaine des Fonctions. Quand
tous les services d’Appwrite ne suffisent plus, que nous avons besoin de réagir à ce qui se passe dans notre instance,
ces petits bouts de code vont nous permettre d’utiliser le serveur !"
/>

## **Guide d’arrivée** ☁️

Vous vous êtes peut-être déjà posé la question : Appwrite me permet de ne pas faire de backend, mais qu'en est-il si j'ai
vraiment besoin d'avoir du code exécuté coté serveur ?

C'est le besoin que remplissent les **Fonctions** !

Dans Appwrite, les fonctions sont exécutées sur le serveur où est hébergée votre instance, et cela marche évidemment
directement sur Appwrite Cloud ! Pour les développeurs, vous aurez accès à de nombreux langages et runtimes différents :

<Image src="/assets/workshop/functions/runtime.png" imageAlt="Liste des runtimes Appwrite" ></Image>

Une fois dans votre fonction, vous pouvez aussi avoir accès à votre instance Appwrite par l'intermédiaire d’un SDK
serveur, et si vous vous souvenez de la partie de récupération dans les voyageurs, qui dit SDK serveur dit clé API !

Cependant, votre clé API n'a accès qu'au service de gestion d'utilisateurs, il va donc falloir en créer une deuxième qui
vous permettra de modifier un document en base !

**Une fois créée, nous allons pouvoir nous atteler à créer notre premiere fonction ! 🔨**
