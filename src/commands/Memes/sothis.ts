import { ApplyOptions } from '@sapphire/decorators';
import { ChatInputCommand, Command, CommandOptions } from '@sapphire/framework';
import type { Message } from 'discord.js';

@ApplyOptions<CommandOptions>({
    name: 'sothis',
    fullCategory: ['Memes'],
	description: 'So This'
})
export default class SothisCommand extends Command {
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
			idHints: ['1021183579595751424'],
		  }
		);
	}
    public async messageRun(message: Message) {
        message.channel.send({ files: ['./src/lib/data/assets/images/sothis.jpeg'] });
    }

    public async chatInputRun(interaction: Command.ChatInputInteraction) {
        interaction.reply({ files: ['./src/lib/data/assets/images/sothis.jpeg'] });
    }
}