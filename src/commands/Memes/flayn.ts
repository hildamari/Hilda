import { ApplyOptions } from '@sapphire/decorators';
import { Command, CommandOptions } from '@sapphire/framework';
import type { Message } from 'discord.js';
import { stripIndents } from 'common-tags';

@ApplyOptions<CommandOptions>({
    fullCategory: ['Memes'],
	aliases: ['fishy'],
    description: 'Sends a parody of Edge of Dawn, Flayn style' 
})
export default class FlaynCommand extends Command {
    public async messageRun(message: Message) {
        const flayn = this.container.client.emojis.cache.find(emoji => emoji.name === "Fish");
        return message.channel.send(stripIndents`Reach for my hand,
        I'll eat more fish ${flayn}`);
    }

    public async chatInputRun(interaction: Command.ChatInputInteraction) {
        const flayn = this.container.client.emojis.cache.find(emoji => emoji.name === "Fish");
        return interaction.reply(stripIndents`Reach for my hand,
        I'll eat more fish ${flayn}`);
    }
}