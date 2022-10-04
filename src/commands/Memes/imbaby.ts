import { ApplyOptions } from '@sapphire/decorators';
import { ChatInputCommand, Command, CommandOptions } from '@sapphire/framework';
import type { Message } from 'discord.js';

@ApplyOptions<CommandOptions>({
    name: 'imbaby', 
    fullCategory: ['Memes'],
	aliases: ['baby'],
    description: 'im baby' 
})
export default class ImBabyCommand extends Command {
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
			idHints: ['1021183496095551531'],
		  }
		);
	}
    public async messageRun(message: Message) {
        message.channel.send({ files: ['./src/lib/data/assets/images/imbaby.png'] });   
    }

    public async chatInputRun(interaction: Command.ChatInputInteraction) {
        interaction.reply({ files: ['./src/lib/data/assets/images/imbaby.png'] });   
    }
}