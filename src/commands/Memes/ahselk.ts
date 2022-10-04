import { ApplyOptions } from '@sapphire/decorators';
import { ChatInputCommand, Command, CommandOptions } from '@sapphire/framework';
import type { Message } from 'discord.js';

@ApplyOptions<CommandOptions>({
    name: 'ahselk',
    fullCategory: ['Memes'],
	description: 'Ah selk, here we go again'
})
export default class AhSelkCommand extends Command {
    // Register slash and context menu command
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
			idHints: ['1021174720034504834'],
		  }
		);
	}
    public async messageRun(message: Message) {
        message.channel.send({ files: ['./src/lib/data/assets/images/ahselk.png'] });
    }

    public async chatInputRun(interaction: Command.ChatInputInteraction) {
        return interaction.reply({ files: ['./src/lib/data/assets/images/ahselk.png'] })
    }
}