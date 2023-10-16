---
title: Traveler's Login
---

<Documentation link="https://appwrite.io/docs/products/auth/email-password#login"></Documentation>

<Hero
title="Traveler's Login 🔐"
image="/assets/workshop/authentication/house-island.jpeg"
description="We've arrived in front of the building, the next step in our journey: traveler's login.
Before we can unlock the clue that awaits us, we need to access our application while being
logged in. In this section, we'll explore in detail the login and logout process and how it
can be managed with Appwrite 🔐."
/>

::: info ⚠️ Initial Configuration
Before starting the traveler's login procedure, ensure that your application is properly
configured to interact with Appwrite and that you have followed the configuration steps in the
[Configuration](/workshop/configuration/appwrite-configuration) section 📝, as well as the
previous part for [creating your traveler's account](/workshop/authentication/register) 👩🏼‍✈️.
:::

## Traveler's Login 🚪

In our case, we will use the Appwrite SDK to allow a traveler to log in. From the AppVenture
application, you can go to the login page `/login`. The form to collect the traveler's
credentials is already ready to use, but, as with the registration form, it appears that some
**pieces of code for communicating with Appwrite are missing**... So you'll need to complete them
again! 🧑‍🔧

## Step 1️⃣: Writing the Login Function

Knowing that the Account service has already been initialized in the previous part, all that's
left is to complete the `login` function, which you can find in the
`src/workshop/api/modules/account/account.ts` file. Nothing could be simpler; this function
takes the traveler's email and password as parameters and uses the Appwrite API to log in.

<Solution>

```ts
import {account} from '@/api/config/client.config'; // [!code ++]

export async function login(email: string, password: string) {
  try {
    await account.createEmailSession(email, password); // [!code ++]
  } catch (error: any) {
    throw new AppwriteException(error);
  }
};
```

</Solution>

## Step 2️⃣: Completing the Registration Function

Once we have retrieved the traveler's session, it's necessary to authenticate, as
the login isn't automatic after registration. For this, we needed the `login` function, which is
used to authenticate the traveler. You can now complete the `register` function by calling the
`login` function you just created...

<Solution>

```ts
import {UserType} from '@/types/UserHook.type';
import {AppwriteException, ID} from 'appwrite';
import {account} from '@/api/config/client.config';

export async function register(
  email: string,
  password: string,
  name: string,
  login: (email: string, password: string) => Promise<void>
): Promise<UserType> {
  try {
    const session = await account.create(ID.unique(), email, password, name); // [!code ++]
    await login(email, password); // 👈 // [!code ++]

    return session; // [!code ++]
  } catch (error: any) {
    throw new AppwriteException(error);
	}
}
```

</Solution>

## Step 3️⃣: Log In!

Now that the `login` function is complete, travelers should be able to log in to their account!
🥳 The rest of the code is already written; you just need to go to the login page `/login` and use
the form to log in!

## Step 4️⃣: With Login Comes Logout

Now that you can log in successfully, it would be good to be able to log out as well, wouldn't it? 🤔

For this, we will once again use the Account service to log out the traveler's session. You can
find the `logout` function in the `src/workshop/api/modules/account/account.ts` file. This function
takes no parameters and uses the Appwrite API to log out the traveler's session. You can use it at the end of the
workshop to mark the end of your adventure! 🏁

<Solution>

```ts
import {account} from '@/api/config/client.config'; // [!code ++]

export async function logout() {
  try {
    await account.deleteSession('current'); // [!code ++]
  } catch (error: any) {
    throw new AppwriteException(error);
  }
};
```

</Solution>

<br />

**After successfully logging in, you are ready to explore further treasures awaiting you in our island
adventure, including exploring the Appwrite Users service to learn more about past travelers! 🗺️**

Without the code sections.
