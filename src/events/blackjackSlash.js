import { MessageFlags } from 'discord.js';
import original from './blackjack.js';

export default {
    name: 'interactionCreate',
    async execute(interaction) {
        if (!interaction.isChatInputCommand() || interaction.commandName !== 'blackjack') return;

        const fakeMessage = {
            author: interaction.user,
            content: '!blackjack',
            channel: interaction.channel,
            reply: async (options) => {
                await interaction.reply(options);
                return interaction.fetchReply();
            },
        };

        try {
            await original.execute(fakeMessage);
        } catch (err) {
            console.error(err);
            const msg = { content: 'Something went wrong.', flags: MessageFlags.Ephemeral };
            if (interaction.replied || interaction.deferred) await interaction.followUp(msg).catch(() => {});
            else await interaction.reply(msg).catch(() => {});
        }
    },
};