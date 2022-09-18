import { ApplyOptions } from '@sapphire/decorators';
import { Command, CommandOptions } from '@sapphire/framework';
import type { Message } from 'discord.js';

@ApplyOptions<CommandOptions>({
    fullCategory: ['Memes'],
	description: 'References the uno meme'
})
export default class MarianneCommand extends Command {
    public async messageRun(message: Message) {
        const marianne = this.container.client.emojis.cache.find(emoji => emoji.name === "Marianne2");
        return message.channel.send(`${marianne} I don't have uno so go fuck off.`);
    }

    public async chatInputRun(interaction: Command.ChatInputInteraction) {
        const marianne = this.container.client.emojis.cache.find(emoji => emoji.name === "Marianne2");
        return interaction.reply(`${marianne} I don't have uno so go fuck off.`);
    }
}