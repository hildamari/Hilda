import { ApplyOptions } from '@sapphire/decorators';
import { ChatInputCommand, Command, CommandOptions } from '@sapphire/framework';
import type { Message } from 'discord.js';

@ApplyOptions<CommandOptions>({
    name: 'marianne',
    fullCategory: ['Memes'],
	description: 'Marianne doesn\'t have uno'
})
export default class MarianneCommand extends Command {
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
			idHints: ['1021183401706922054'],
		  }
		);
	}
    public async messageRun(message: Message) {
        const marianne = this.container.client.emojis.cache.find(emoji => emoji.name === "Marianne2");
        return message.channel.send(`${marianne} I don't have uno so go fuck off.`);
    }

    public async chatInputRun(interaction: Command.ChatInputInteraction) {
        const marianne = this.container.client.emojis.cache.find(emoji => emoji.name === "Marianne2");
        return interaction.reply(`${marianne} I don't have uno so go fuck off.`);
    }
}