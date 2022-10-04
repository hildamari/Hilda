import { ApplyOptions } from '@sapphire/decorators';
import { ChatInputCommand, Command } from '@sapphire/framework';
import type { Message } from 'discord.js';

@ApplyOptions<Command.Options>({
    name: 'emoji',
	aliases: ['listemoji'],
	description: "Displays the server's emoji"
})
export class EmojiCommand extends Command {
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
			idHints: ['1021183666686263326'],
		  }
		);
	}

	public async messageRun(message: Message) {
		const emojiList = message.guild?.emojis.cache.map((e) => e.toString()).join(' ');
		message.channel.send(emojiList as string);
	}

	public async chatInputRun(interaction: Command.ChatInputInteraction) {
        const emojiList = interaction.guild?.emojis.cache.map((e) => e.toString()).join(' ');
    
		return interaction.reply({ content: emojiList });
	}
}
