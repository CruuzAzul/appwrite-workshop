---
title: Preparing Our Collection
---

<Documentation link="https://appwrite.io/docs/products/databases/quick-start"></Documentation>

<Hero
title="Let's Prepare Our Collection 💾"
image="/assets/workshop/database/database.jpg"
description="After a bit of walking, we quickly reach a corner of the forest that's a bit more pristine; it's exactly
what we needed to start working and create our own collection! 🌳"
/>

When it comes to a treasure hunt, a map is essential! Fortunately, we have ours with us. However, it's currently quite
empty. I have a feeling that completing these different modules will give us coordinates that we can later display on
our map! The only thing missing now is a way to store them, so we don't lose them... 📍

## Creating a Collection 🗃️

The first step is to create a collection to store them.
In Appwrite, you can create multiple databases, each of which can contain several collections, which, in turn, can hold
multiple documents.

For this workshop, we've already created a database called **Workshop** for you to work with!

To begin, create a collection called **Coords** in this database. You can do this by clicking the **+ Create Collection
** button or by clicking on the **map +** to generate a random ID.

<Image src="/assets/workshop/database/collectionModal.png" imageAlt="Collection Creation Modal" withSpacing ></Image>

## Defining the schema 📄

Once created, to insert documents into it, you need to add a **schema** by creating attributes, each with their
predefined data type. This step is mandatory because the database engine used is Maria DB, an SQL engine.

Simply go to the **Attributes** tab, click the **+ Create Attribute** button, and then select the appropriate data type
from the dropdown menu.

You will then arrive at a modal where you can enter various information about your attribute, such as its minimum and
maximum values for a number or whether the attribute is required, for example.

<Image src="/assets/workshop/database/attributeModal.png" imageAlt="Attribute Creation Modal" withSpacing ></Image>

_Example of creating the latitude attribute_

#### The coordinate document follows this schema:

```ts
type Coordinate = {
  name: string; // Required
  latitude: float; // Required
  longitude: float; // Required
  picture?: url; // Optional
};
```

## Managing permissions 🔑

Our collection is ready! However, there are two small details to manage.

Firstly, Appwrite does not grant any default access permissions to collections, so you will need to modify them in the *
*Settings** tab to allow all logged-in users to retrieve, create, modify, and delete documents.

<Image src="/assets/workshop/database/permission.png" imageAlt="Collection Permission" withSpacing ></Image>

_Example of collection permission_

## Retrieving the Collection ID 🆔

Next, for the AppVenture to access this collection, it needs to know its ID!

To do this, simply retrieve the ID from the Appwrite console, right next to its name, and fill
the `NEXT_PUBLIC_APPWRITE_COORDINATES_COLLECTION_ID` environment variable with it!

<Image src="/assets/workshop/database/idCollection.png" imageAlt="Collection Identifier" withSpacing ></Image>

**And there you have it! Your collection is now ready for use, and AppVenture users can access it! 🎉**
