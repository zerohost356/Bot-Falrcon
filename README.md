<div align="center">

# 🦅 Bot-Falrcon

<img src="https://cdn.discordapp.com/attachments/1509149017999933535/1509596334196261085/32712e59-a9d4-412a-a209-75e17644695e.png?ex=6a19c0a5&is=6a186f25&hm=fd41ddd4486e461c411abe56cd235513455ae55e968635424391605588e6574f&" width="120" alt="Bot-Falrcon Logo"/>

**A feature-rich, modular Discord bot built with Discord.js**

*Bot Clone By Zerohost356*

---

[![Node.js](https://img.shields.io/badge/Node.js-%3E%3D18.0.0-brightgreen?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org)
[![Discord.js](https://img.shields.io/badge/Discord.js-v14-5865F2?style=for-the-badge&logo=discord&logoColor=white)](https://discord.js.org)
[![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://mongoosejs.com)
[![License](https://img.shields.io/badge/License-Custom-blueviolet?style=for-the-badge)](./LICENSE)

</div>

---

## ✨ Features

| Feature | Description |
|---|---|
| 📨 **Invite Tracker** | Track who invited who, with full leaderboard support |
| 🎉 **Giveaway System** | Create and manage giveaways with ease |
| 👋 **Greeting System** | Custom welcome & leave messages with variables |
| 📊 **Message Counter** | Track message counts and display leaderboards |
| 📋 **Poll System** | Create interactive polls in your server |
| 🔨 **Moderation** | Essential moderation tools for server management |
| ⏱️ **Timer Utilities** | Set timers and reminders directly in Discord |
| 🚫 **Blacklist** | Block users from using the bot globally |

---

## 📁 Project Structure

```
Bot-Falrcon/
├── index.js                  # Entry point
├── package.json              # Dependencies & path aliases
├── config/
│   ├── config.js             # Main config (token, prefix, DB...)
│   └── emoji.js              # Emoji config
├── commands/                 # Bot commands
│   ├── dev/                  # Developer commands
│   ├── giveaway/             # Giveaway commands
│   ├── greet/                # Greeting commands
│   ├── invites/              # Invite tracker commands
│   ├── polls/                # Poll commands
│   ├── timer/                # Timer commands
│   └── utility/              # General utility commands
├── events/discord/           # Discord event handlers
├── structures/
│   ├── classes/              # Bot client, command, context, cache
│   └── handlers/             # Command & event loaders
├── database/
│   ├── mongodb.js            # MongoDB connection
│   ├── manager.js            # Database manager singleton
│   ├── repositories/         # Data access layer
│   └── services/             # Business logic layer
└── utils/                    # Logger, helpers, builders
```

---

## 🚀 Setup

### Prerequisites

- **Node.js** `>= 18.0.0`
- **MongoDB** — [Atlas](https://www.mongodb.com/atlas) (free) or local instance
- **Discord Bot Token** — [Discord Developer Portal](https://discord.com/developers/applications)

---

### Step 1 — Clone & Install

```bash
git clone https://github.com/zerohost356/Bot-Falrcon.git
cd Bot-Falrcon
npm install
```

---

### Step 2 — Configure

Edit `config/config.js` and fill in your values:

```js
export const config = {
    botName: 'Bot-Falrcon',
    token: 'YOUR_BOT_TOKEN_HERE',       // Discord bot token
    clientId: 'YOUR_CLIENT_ID_HERE',    // Application ID
    prefix: '!',
    ownerIds: ['YOUR_OWNER_ID_HERE'],   // Your Discord User ID
    database: {
        uri: 'YOUR_MONGODB_URI_HERE',   // MongoDB connection string
    },
    ...
};
```

| Field | Where to get it |
|---|---|
| `token` | [Discord Developer Portal](https://discord.com/developers/applications) → Bot → Token |
| `clientId` | Discord Developer Portal → General Information → Application ID |
| `ownerIds` | Discord → Settings → Advanced → Developer Mode → Right-click your profile → Copy ID |
| `database.uri` | [MongoDB Atlas](https://www.mongodb.com/atlas) → Connect → Drivers |

---

### Step 3 — Run

```bash
node index.js
# or
npm start
```

---

## ⚙️ Configuration Reference

```js
export const config = {
    botName: 'Bot-Falrcon',
    token: 'YOUR_BOT_TOKEN_HERE',
    clientId: 'YOUR_CLIENT_ID_HERE',
    prefix: '!',
    ownerIds: ['YOUR_OWNER_ID_HERE'],
    ownerOnly: false,
    links: {
        supportServer: 'https://discord.gg/YOUR_INVITE_HERE',
        invite: 'https://discord.com/oauth2/authorize?client_id=YOUR_CLIENT_ID_HERE&permissions=268823806&scope=bot%20applications.commands',
    },
    colors: {
        success: 0x2dc2b6,
        error: 0xed4245,
        warn: 0xfee75c,
    },
    cache: {
        maxSize: 100000,
        flushOnStart: false,
        flushOnShutdown: false,
    },
    database: {
        uri: 'YOUR_MONGODB_URI_HERE',
    },
    presence: {
        status: 'idle',
        activity: {
            name: '!help || Bot-Falrcon',
            type: 'Custom',
        },
    },
    watermark: '',
    version: '1.0.0',
};
```

---

## 👨‍💻 Author

<div align="center">

**Developed by [Zerohost356](https://github.com/zerohost356)**

[![Support Server](https://img.shields.io/badge/Discord-Support%20Server-5865F2?style=for-the-badge&logo=discord&logoColor=white)](https://discord.gg/Zg2XkS5hq9)
[![GitHub](https://img.shields.io/badge/GitHub-Zerohost356-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/zerohost356)

</div>
