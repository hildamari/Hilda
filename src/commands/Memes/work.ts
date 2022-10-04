import { ApplyOptions } from '@sapphire/decorators';
import { ChatInputCommand, Command, CommandOptions } from '@sapphire/framework';
import type { Message } from 'discord.js';

@ApplyOptions<CommandOptions>({
    name: 'work',
    fullCategory: ['Memes'],
	description: 'You\'re making me work!'
})
export default class WorkCommand extends Command {
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
			idHints: ['1021183581952954421'],
		  }
		);
	}
    public async messageRun(message: Message) {
        const imbaby = this.container.client.emojis.cache.find(emoji => emoji.name === "ImBaby");
        return message.channel.send(`${imbaby} You're making me work!`);
    }

    public async chatInputRun(interaction: Command.ChatInputInteraction) {
        const imbaby = this.container.client.emojis.cache.find(emoji => emoji.name === "ImBaby");
        return interaction.reply(`${imbaby} You're making me work!`);
    }
}