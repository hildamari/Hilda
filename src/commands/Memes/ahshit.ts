import { ApplyOptions } from '@sapphire/decorators';
import { ChatInputCommand, Command, CommandOptions } from '@sapphire/framework';
import type { Message } from 'discord.js';

@ApplyOptions<CommandOptions>({
    name: 'ahshit',
    fullCategory: ['Memes'],
	description: 'Ah shit, here we go again'
})
export default class AhShitCommand extends Command {
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
			idHints: ['1021183491418890362'],
		  }
		);
	}
    public async messageRun(message: Message) {
        message.channel.send({ files: ['./src/lib/data/assets/images/ahshit.png'] });   
    }

    public async chatInputRun(interaction: Command.ChatInputInteraction) {
        return interaction.reply({ files: ['./src/lib/data/assets/images/ahshit.png'] })
    }
}