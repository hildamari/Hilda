import { ApplyOptions } from '@sapphire/decorators';
import { ChatInputCommand, Command, CommandOptions } from '@sapphire/framework';
import type { Message } from 'discord.js';

@ApplyOptions<CommandOptions>({
    name: 'doesmad',
    fullCategory: ['Memes'],
	description: 'Does mad'
})
export default class DoesMadCommand extends Command {
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
			idHints: ['1021183583248982046'],
		  }
		);
	}
    public async messageRun(message: Message) {
        message.channel.send({ files: ['./src/lib/data/assets/images/doesmad.jpg'] }); 
    }

    public async chatInputRun(interaction: Command.ChatInputInteraction) {
        return interaction.reply({ files: ['./src/lib/data/assets/images/doesmad.jpg'] })
    }
}