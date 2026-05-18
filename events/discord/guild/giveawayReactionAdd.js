import { giveawayStore, GWAY_EMOJI_ID } from '#giveawayUtils';

export default {
        name: 'messageReactionAdd',
        async execute({ eventArgs }) {
                const [reaction, user] = eventArgs;

                if (reaction.emoji.id !== GWAY_EMOJI_ID) return;

                if (reaction.partial) {
                        await reaction.fetch().catch(() => null);
                }

                if (user.partial) {
                        await user.fetch().catch(() => null);
                }

                if (user.bot) return;

                const messageId = reaction.message.id;
                const giveaway = giveawayStore.get(messageId);

                if (!giveaway || giveaway.status !== 'active') return;

                giveaway.participants.add(user.id);
                giveawayStore.set(messageId, giveaway);
        },
};
