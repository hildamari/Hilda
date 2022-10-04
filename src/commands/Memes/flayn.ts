import { ApplyOptions } from '@sapphire/decorators';
import { ChatInputCommand, Command, CommandOptions } from '@sapphire/framework';
import type { Message } from 'discord.js';
import { stripIndents } from 'common-tags';

@ApplyOptions<CommandOptions>({
    name: 'flayn',
    fullCategory: ['Memes'],
	  aliases: ['fishy'],
    description: 'Edge of Dawn, Flayn style' 
})
export default class FlaynCommand extends Command {
    public override registerApplicationCommands(
		registry: ChatInputCommand.Registry
	  ) {
		registry.registerChatInputCommand(
		  (builder) =>
			builder
			  .setName(this.name)
			  .setDescription(this.description)
			  .setDMPermission(false),
		  {
			  idHints: ['1021183665646075987'],
		  }
		);
	}
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