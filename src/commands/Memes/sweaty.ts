import { ApplyOptions } from '@sapphire/decorators';
import { ChatInputCommand, Command, CommandOptions } from '@sapphire/framework';
import type { Message } from 'discord.js';

@ApplyOptions<CommandOptions>({
    name: 'sweaty',
    fullCategory: ['Memes'],
	description: 'Ugh, I\'m all sweaty!'
})
export default class SweatyCommand extends Command {
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
			idHints: ['1021183495332171828'],
		  }
		);
	}
    public async messageRun(message: Message) {
        const imAllSweaty = this.container.client.emojis.cache.find(emoji => emoji.name === "ImAllSweaty");
        return message.channel.send(`${imAllSweaty} "Ugh, I'm all sweaty!"`);
    }

    public async chatInputRun(interaction: Command.ChatInputInteraction) {
        const imAllSweaty = this.container.client.emojis.cache.find(emoji => emoji.name === "ImAllSweaty");
        return interaction.reply(`${imAllSweaty} "Ugh, I'm all sweaty!"`);
    }
}