import { ApplyOptions } from '@sapphire/decorators';
import { ChatInputCommand, Command, CommandOptions } from '@sapphire/framework';
import type { Message } from 'discord.js';

@ApplyOptions<CommandOptions>({
    name: 'readme',
    fullCategory: ['Memes'],
	description: 'Read the room'
})
export default class ReadmeCommand extends Command {
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
			idHints: ['1021183493855772714'],
		  }
		);
	}
    public async messageRun(message: Message) {
        message.channel.send({ files: ['./src/lib/data/assets/images/readme.png'] });
    }

    public async chatInputRun(interaction: Command.ChatInputInteraction) {
        interaction.reply({ files: ['./src/lib/data/assets/images/readme.png'] });
    }
}