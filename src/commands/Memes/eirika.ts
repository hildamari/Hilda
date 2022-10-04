import { ApplyOptions } from '@sapphire/decorators';
import { ChatInputCommand, Command, CommandOptions } from '@sapphire/framework';
import type { Message } from 'discord.js';

@ApplyOptions<CommandOptions>({
    name: 'eirika',
    fullCategory: ['Memes'],
	aliases: ['hdnotlikeeirika', 'hd'],
    description: 'Not like this!' 
})
export default class NotLikeEirikaCommand extends Command {
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
			idHints: ['1021226115496427550'],
		  }
		);
	}
    public async messageRun(message: Message) {
        message.channel.send({ files: ['./src/lib/data/assets/images/hdnotlikeeirika.png'] });
    }

    public async chatInputRun(interaction: Command.ChatInputInteraction) {
        return interaction.reply({ files: ['./src/lib/data/assets/images/hdnotlikeeirika.png'] })
    }
}