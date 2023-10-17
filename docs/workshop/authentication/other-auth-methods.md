---
title: Autres options d'authentification
---

<Hero
title="Autres options d'authentification 🔒"
image="/assets/workshop/authentication/other-auth.jpeg"
description="Nous semblons en avoir terminé avec l'île de la méthode d'authentification par Email et Mot de Passe, mais au
loin, on semble voir d'autres îles, qui abritent d'autres options pour gérer l'authentification dans votre application.
Bien que nous ne couvrions pas ces méthodes en détail dans le cadre de ce workshop, elles sont disponibles pour répondre
à divers besoins d'authentification. Si vous avez de l'avance dans le workshop ou si vous souhaitez en savoir plus,
voici un aperçu de ces options bonus 🎁"
/>

## 1️⃣ Authentification par Téléphone (SMS)

- **Explication** : Les utilisateurs peuvent s'authentifier en entrant un code de vérification envoyé à leur numéro de
  téléphone via SMS.
- **Documentation** : [Phone (SMS) Login](https://appwrite.io/docs/products/auth/phone-sms)

## 2️⃣ Authentification par lien magique (Magic URL)

- **Explication** : Cette méthode permet aux utilisateurs de se connecter en cliquant sur un lien magique généré et
  envoyé à leur adresse e-mail. Elle est utile pour une authentification sans mot de passe.
- **Documentation** : [Magic URL Login](https://appwrite.io/docs/products/auth/magic-url)

## 3️⃣ Authentification OAuth 2

- **Explication** : OAuth 2 permet aux utilisateurs de s'authentifier via des fournisseurs tiers comme Google, Facebook,
  ou GitHub. Cela facilite l'authentification à l'aide de comptes existants.
- **Documentation** : [OAuth 2 Login](https://appwrite.io/docs/products/auth/oauth2)

:::tip
Pour utiliser OAuth 2, vous devez d'abord configurer les fournisseurs tiers dans la console Appwrite. Voilà les
**Providers** que vous pouvez configurer depuis l'onglet **Authentification > Settings** de la console Appwrite :

<br/>

![OAuth 2 Providers](/assets/workshop/authentication/providers.png)
:::

:::info
OAuth 2 n'est pas disponible via l'API GraphQL. Vous pouvez utiliser l'API REST ou n'importe quel SDK client à la place
😢
:::

## 4️⃣ Authentification Anonyme

- **Explication** : Les utilisateurs peuvent accéder à votre application de manière anonyme sans nécessiter
  d'inscription. Cela peut être utile pour les utilisateurs qui veulent tester votre application avant de s'inscrire.
- **Documentation** : [Anonymous Login](https://appwrite.io/docs/products/auth/anonymous)

## 5️⃣ Authentification JWT

- **Explication** : Les utilisateurs peuvent s'authentifier en utilisant un JSON Web Token (JWT) généré par votre
  application ou un service tiers. Cela peut être utile pour une authentification basée sur des tokens.
- **Documentation** : [JWT Login](https://appwrite.io/docs/products/auth/jwt)
