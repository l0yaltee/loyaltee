---
title: Connect RingCentral to IlvolAI
description: Let IlvolAI notice when you pick up and hang up a RingCentral call, so it records the call for you. Takes about 10 minutes, step by step.
order: 1
updated: 2026-11-05
for: Dispatchers and your RingCentral admin
hero: ./assets/ringcentral/hero.png
heroAlt: The RingCentral and IlvolAI names over a sound wave
---

## What this does

Once connected, IlvolAI sees when you **pick up** and **hang up** a RingCentral call, and starts and stops the recording for you. You no longer have to press the microphone button.

IlvolAI only learns two things about a call: **when it starts and stops**, and **who is calling**: the caller's number, plus the caller ID name when RingCentral has one. It never receives the call audio from RingCentral. The audio is still captured on your own PC, like before.

Each company connects through its own small **private RingCentral app**. Only your company's account can use it, so no one else gets access to your calls.

The setup has three parts:

1. **Part 1** is done once per company, by the RingCentral admin.
2. **Part 2** is done by each dispatcher.
3. **Part 3** is done in IlvolAI, by each dispatcher.

> [!NOTE] Are you the admin and a dispatcher?
> Then do all three parts yourself, in order.

## Part 1: The RingCentral admin (once per company)

Only one person in the company does this. At the end they give the **Client ID** and **Client Secret** to the dispatchers.

1. Go to [developers.ringcentral.com](https://developers.ringcentral.com) and sign in with your normal RingCentral login.

2. Open **Console**, then **Apps**, then click **Register App**. Choose **REST API App**.

   ![The Register App button in the RingCentral Developer Console](./assets/ringcentral/01-register-app.png)

   > [!TIP] Register App is greyed out?
   > Your user needs a role that includes **Developer Portal Access**. In the RingCentral **Admin Portal**, go to **Users**, then **Roles**, and add that permission to your role (or ask the account owner to do it). Then sign in again.

3. Give the app a name and a short description. Then, under **Auth**, choose **JWT auth flow**.

   ![Auth set to JWT auth flow](./assets/ringcentral/02-auth-and-access.png)

4. Under **Security**, in **Application Scopes**, add **Call Control** and **WebSocket Subscriptions**. Add nothing else. Below that, choose **This app is private** (only callable with credentials from your own RingCentral account). Then click **Create**.

   > [!WARNING] Not "Webhook Subscriptions"
   > Choose **WebSocket** Subscriptions, not Webhook Subscriptions. The two names look almost the same, and mixing them up is the most common mistake. With the wrong one, IlvolAI won't connect. It says the app is missing WebSocket Subscriptions.

   ![Application Scopes with only Call Control and WebSocket Subscriptions, and the app set to private](./assets/ringcentral/03-permissions.png)

5. The app opens on its **Dashboard**. Under **Credentials**, copy the **Client ID**, then click **Click to see** next to **Client Secret** and copy that too. Send both to your dispatchers privately (see [Keep your keys safe](#keep-your-keys-safe)).

   ![The Credentials panel on the app's Dashboard, with the Client ID and Client Secret](./assets/ringcentral/04-credentials-tab.png)

## Part 2: Each dispatcher

Every dispatcher makes their own personal key, called a **JWT**. It lets IlvolAI act on your calls only.

1. Go to [developers.ringcentral.com](https://developers.ringcentral.com) and sign in. Click your **profile** (top right), then **Credentials**, then **Create JWT**.

   ![The Create JWT form, limited to one app by its Client ID](./assets/ringcentral/05-create-jwt.png)

2. Give it a **Label** (any name, like "IlvolAI"). Tick **Only specific apps of my choice**, paste the app's **Client ID** from the admin, and click **Add App**.

3. Leave **Expiration Date** empty so the JWT does not expire, or pick a date far ahead, so you do not have to redo this every few weeks.

4. Click **Create** and **copy the JWT**.

> [!WARNING] The JWT is shown only once
> If you close the page before copying it, you cannot see it again. Just create a new one.

## Part 3: In IlvolAI

1. Open IlvolAI and go to **Settings**, then **RingCentral**.

2. Paste the **Client ID**, the **Client Secret** and your **JWT** into the three boxes.

3. Click **Connect**. After a moment it says **Connected to RingCentral**, with your extension, and the badge turns **Live**.

   ![IlvolAI Settings showing RingCentral connected, with the Live badge](./assets/ringcentral/06-ilvolai-connected.png)

4. Choose what IlvolAI does when you answer a call:

   - **Ask** shows a small popup, "Record this call?", every time.
   - **Always** records every call you answer, without asking.
   - **Off** does nothing. You stay connected but record by hand.

## Turning it off

- In IlvolAI, open **Settings**, then **RingCentral**, and click **Disconnect**.
- To be completely sure, also delete your JWT: on developers.ringcentral.com open your **profile**, then **Credentials**, and delete it. This switches IlvolAI off **immediately**, even if IlvolAI is closed.

## What can go wrong

Find the message IlvolAI shows, and follow the fix next to it.

| What IlvolAI says | What to do |
| --- | --- |
| "RingCentral doesn't recognise this Client ID and Client Secret" | Copy both again from the app's Dashboard, under Credentials. Make sure there are no spaces before or after. |
| "RingCentral didn't accept this JWT" | Create a new JWT and paste **all** of it. It is very long, so make sure nothing is cut off. |
| The JWT has expired | Create a new JWT (Part 2) and paste it in. Next time leave the expiration date empty, or pick one far ahead. |
| The JWT was made for a different app | Create a new JWT and set it to **Only specific apps of my choice**, using this app's Client ID. |
| The app is not set up for JWT | Ask the admin to open the app and set **Auth** to **JWT auth flow**. |
| The app is missing **Call Control** | Ask the admin to add the **Call Control** permission. |
| The app is missing **WebSocket Subscriptions** | Ask the admin to add **WebSocket Subscriptions**. Not Webhook Subscriptions. |
| "Couldn't reach RingCentral" | Check your internet connection. If it works for other sites, ask the admin to check the server address in the RingCentral settings. |

After the admin changes anything in the app, press **Connect** again in IlvolAI.

## Keep your keys safe

The **Client Secret** and the **JWT** are like passwords.

- Never post them in a group chat, an email to many people, or a screenshot. Blur them out first.
- Send them to one person at a time, privately.
- IlvolAI keeps them in the Windows secure store (**Credential Manager**), not in a plain file.
- If a box ever pops up asking for a RingCentral **username and password**, press **Cancel**. IlvolAI never needs it.
