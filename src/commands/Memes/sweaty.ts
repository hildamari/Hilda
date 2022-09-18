import { ApplyOptions } from '@sapphire/decorators';
import { Command, CommandOptions } from '@sapphire/framework';
import type { Message } from 'discord.js';

@ApplyOptions<CommandOptions>({
    fullCategory: ['Memes'],
	description: 'Replies with "Ugh, I\'m all sweaty!"'
})
export default class SweatyCommand extends Command {
    public async messageRun(message: Message) {
        const imAllSweaty = this.container.client.emojis.cache.find(emoji => emoji.name === "ImAllSweaty");
        return message.channel.send(`${imAllSweaty} "Ugh, I'm all sweaty!"`);
    }

    public async chatInputRun(interaction: Command.ChatInputInteraction) {
        const imAllSweaty = this.container.client.emojis.cache.find(emoji => emoji.name === "ImAllSweaty");
        return interaction.reply(`${imAllSweaty} "Ugh, I'm all sweaty!"`);
    }
}