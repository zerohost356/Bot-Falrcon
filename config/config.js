export const config = {
        botName: 'bdfd',
        token: 'You bot Token Here',
        clientId: '1419789743482343587',
        prefix: '!',
        ownerIds: ['1318639481003184128'],
        ownerOnly: false,
        links: {
                supportServer: 'https://discord.gg/Zg2XkS5hq9',
                invite: 'https://discord.com/oauth2/authorize?client_id=1419789743482343587&permissions=268823806&scope=bot%20applications.commands',
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
                uri: 'mongodb+srv://codex-us2:codex-us2@codex-us2.62zm1.mongodb.net/?retryWrites=true&w=majority&appName=codex-us2',
        },

        presence: {
                status: 'idle',
                activity: {
                        name: '!help || Bucu Development',
                        type: 'Custom',
                },
        },
        watermark: '',
        version: '1.0.0',
};
