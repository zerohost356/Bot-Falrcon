import { config } from '#config';
import { Command } from '#command';
import {
        MessageFlags,
        ButtonStyle,
        ButtonBuilder,
        ActionRowBuilder,
        ContainerBuilder,
        TextDisplayBuilder,
        SeparatorBuilder,
        SeparatorSpacingSize,
} from 'discord.js';

class PremiumCommand extends Command {
        constructor() {
                super({
                        name: 'premium',
                        description: `Shows information about ${config.botName} Premium`,
                        usage: 'premium',
                        cooldown: 10,
                        enabledSlash: true,
                        slashData: {
                                name: 'premium',
                                description: `Shows information about ${config.botName} Premium`,
                        },
                });
        }

        async execute({ ctx }) {
                const container = new ContainerBuilder();
                container.setAccentColor(config.colors.success);

                container.addTextDisplayComponents(
                        new TextDisplayBuilder().setContent(`**${config.botName} Premium**`),
                );

                container.addSeparatorComponents(
                        new SeparatorBuilder().setSpacing(SeparatorSpacingSize.Small).setDivider(true),
                );

                container.addTextDisplayComponents(
                        new TextDisplayBuilder().setContent(
                                `${config.botName} Premium is now available to purchase, you can purchase ${config.botName} Premium by joining the official support server`,
                        ),
                );

                container.addSeparatorComponents(
                        new SeparatorBuilder().setSpacing(SeparatorSpacingSize.Small).setDivider(true),
                );

                container.addActionRowComponents(
                        new ActionRowBuilder().addComponents(
                                new ButtonBuilder()
                                        .setLabel('Get Premium')
                                        .setURL(config.links.supportServer)
                                        .setStyle(ButtonStyle.Link),
                        ),
                );

                await ctx.reply({
                        components: [container],
                        flags: MessageFlags.IsComponentsV2,
                });
        }
}

export default new PremiumCommand();
