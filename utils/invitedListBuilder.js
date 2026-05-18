import { config } from '#config';
import { emoji } from '#emoji';
import {
        ContainerBuilder,
        TextDisplayBuilder,
        SeparatorBuilder,
        SeparatorSpacingSize,
        ActionRowBuilder,
        ButtonBuilder,
        ButtonStyle,
} from 'discord.js';

const PER_PAGE_INVITED = 10;

const LB_EMOJIS = {
        back:    emoji.parse('lb_back'),
        prev:    emoji.parse('lb_prev'),
        stop:    emoji.parse('lb_stop'),
        next:    emoji.parse('lb_next'),
        forward: emoji.parse('lb_forward'),
};

/**
 * Builds the invited-list container and navigation buttons.
 * @param {Object[]} invited      - All member records invited by the target user.
 * @param {number}   page         - Current page (1-indexed).
 * @param {number}   totalPages
 * @param {string}   guildId
 * @param {string}   targetUserId - The user whose invited list is shown.
 * @param {string}   displayName  - Display name of the target user.
 * @param {string}   requesterId  - ID of the user who ran the command.
 * @returns {{ components: import('discord.js').BaseComponent[] }}
 */
export function buildInvitedList(invited, page, totalPages, guildId, targetUserId, displayName, requesterId) {
        const start = (page - 1) * PER_PAGE_INVITED;
        const pageItems = invited.slice(start, start + PER_PAGE_INVITED);

        const lines = pageItems.map((item, i) =>
                `\`#${start + i + 1}\` • <@${item.userId}>`,
        );

        const container = new ContainerBuilder();
        container.setAccentColor(config.colors.success);

        container.addTextDisplayComponents(
                new TextDisplayBuilder().setContent(
                        `### Invited list of ${displayName}`,
                ),
        );

        container.addSeparatorComponents(
                new SeparatorBuilder().setDivider(true).setSpacing(SeparatorSpacingSize.Small),
        );

        container.addTextDisplayComponents(
                new TextDisplayBuilder().setContent(lines.join('\n')),
        );

        container.addTextDisplayComponents(
                new TextDisplayBuilder().setContent(`-# Page ${page}/${totalPages}`),
        );

        container.addSeparatorComponents(
                new SeparatorBuilder().setDivider(true).setSpacing(SeparatorSpacingSize.Small),
        );

        const isFirst = page <= 1;
        const isLast  = page >= totalPages;

        container.addActionRowComponents(
                new ActionRowBuilder().addComponents(
                        new ButtonBuilder()
                                .setCustomId(`invited:first:${guildId}:${targetUserId}:${page}:${requesterId}`)
                                .setEmoji(LB_EMOJIS.back)
                                .setStyle(ButtonStyle.Secondary)
                                .setDisabled(isFirst),
                        new ButtonBuilder()
                                .setCustomId(`invited:prev:${guildId}:${targetUserId}:${page}:${requesterId}`)
                                .setEmoji(LB_EMOJIS.prev)
                                .setStyle(ButtonStyle.Secondary)
                                .setDisabled(isFirst),
                        new ButtonBuilder()
                                .setCustomId(`invited:stop:${guildId}:${targetUserId}:${page}:${requesterId}`)
                                .setEmoji(LB_EMOJIS.stop)
                                .setStyle(ButtonStyle.Secondary),
                        new ButtonBuilder()
                                .setCustomId(`invited:next:${guildId}:${targetUserId}:${page}:${requesterId}`)
                                .setEmoji(LB_EMOJIS.forward)
                                .setStyle(ButtonStyle.Secondary)
                                .setDisabled(isLast),
                        new ButtonBuilder()
                                .setCustomId(`invited:last:${guildId}:${targetUserId}:${page}:${requesterId}`)
                                .setEmoji(LB_EMOJIS.next)
                                .setStyle(ButtonStyle.Secondary)
                                .setDisabled(isLast),
                ),
        );

        return { components: [container] };
}

export { PER_PAGE_INVITED };
