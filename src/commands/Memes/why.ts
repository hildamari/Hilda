import { ApplyOptions } from '@sapphire/decorators';
import { ChatInputCommand, Command, CommandOptions } from '@sapphire/framework';
import type { Message } from 'discord.js';

@ApplyOptions<CommandOptions>({
    name: 'why',
    fullCategory: ['Memes'],
    aliases: ['iswhy'],
	description: 'IS Why'
})
export default class WhyCommand extends Command {
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
			idHints: ['1021183492509401170'],
		  }
		);
	}
    public async messageRun(message: Message) {
        message.channel.send({ files: ['./src/lib/data/assets/images/iswhy.gif'] });
    }

    public async chatInputRun(interaction: Command.ChatInputInteraction) {
        interaction.reply({ files: ['./src/lib/data/assets/images/iswhy.gif'] });
    }
}