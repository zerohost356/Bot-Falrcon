export default {
        name: 'inviteDelete',
        async execute({ eventArgs, client }) {
                const [invite] = eventArgs;
                if (!invite.guild) return;

                const guildCache = client.inviteCache?.get(invite.guild.id);
                if (guildCache) guildCache.delete(invite.code);
        },
};
