import { ApplyOptions } from '@sapphire/decorators';
import { ChatInputCommand, Command, CommandOptions } from '@sapphire/framework';
import type { Message } from 'discord.js';

@ApplyOptions<CommandOptions>({
    name: 'nolewds',
    fullCategory: ['Memes'],
	aliases: ['lewds', 'lewd'],
    description: 'No lewds please!' 
})
export default class NoLewdsCommand extends Command {
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
			idHints: ['1021183402998775958'],
		  }
		);
	}
    public async messageRun(message: Message) {
        return message.channel.send({ files: ["./src/lib/data/assets/images/nolewds.png"] });
    }

    public async chatInputRun(interaction: Command.ChatInputInteraction) {
        return interaction.reply({ files: ["./src/lib/data/assets/images/nolewds.png"] });
    }
}