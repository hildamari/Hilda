import { ApplyOptions } from '@sapphire/decorators';
import { ChatInputCommand, Command, CommandOptions } from '@sapphire/framework';
import type { Message } from 'discord.js';

@ApplyOptions<CommandOptions>({
    name: 'uno',
    fullCategory: ['Memes'],
	description: "Everyone has uno, dipshit"
})
export default class UnoCommand extends Command {
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
			idHints: ['1011088862933688380'],
		  }
		);
	}
    public async messageRun(message: Message) {
        const imbaby = this.container.client.emojis.cache.find(emoji => emoji.name === "ImBaby");
        return message.channel.send(`${imbaby} Everyone has uno, dipshit.`);
    }

    public async chatInputRun(interaction: Command.ChatInputInteraction) {
        const imbaby = this.container.client.emojis.cache.find(emoji => emoji.name === "ImBaby");
        return interaction.reply(`${imbaby} Everyone has uno, dipshit.`);
    }
}