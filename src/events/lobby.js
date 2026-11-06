import {EmbedBuilder} from "discord.js";
const event = {
    name:"interactionCreate",
async execute(interaction) {
    if(!interaction.isChatInputCommand()) return;
    if(interaction.commandName !== "badger-den") return;
    const embed = new EmbedBuilder()
    .setColor("#a858f2")
            .setTitle(" Badger Den")
            .setDescription(
                "Welcome to the **Badger Den!**\n" +
                "Your home for games, competition, and fun.\n\n" +

                "━━━━━━━━━━━━━━━━━━━━\n" +
                "🎮 **AVAILABLE GAMES**\n\n" +

                "🂱 **Blackjack**\n" +
                "Test your luck and beat the dealer!\n" +
                "Use `/blackjack` to play.\n\n" +

                "♠️ **Poker**\n" +
                "Challenge your friends in poker.\n" +
                "🔒 Coming soon!\n\n" +

                "━━━━━━━━━━━━━━━━━━━━\n" +
                "✨ **More games coming soon!**"
            )
            .setFooter({
                text: " Badger Den • Game Lobby"
            })
            .setTimestamp();

        await interaction.reply({
            embeds: [embed]
        });
    }
};
export default event;
