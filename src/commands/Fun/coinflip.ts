import { ApplyOptions } from '@sapphire/decorators';
import { ChatInputCommand, Command } from '@sapphire/framework';
import type { Message } from 'discord.js';

@ApplyOptions<Command.Options>({
    name: 'coinflip',
	fullCategory: ['Fun'],
	description: 'Flip a coin'
})
export class CoinFlipCommand extends Command {
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
		//   {
		// 	idHints: ['1013303438148374628'],
		//   }
		);
	}

    public messageRun(message: Message) {
		const sides = ['heads', 'tails'];
		return message.channel.send(`The coin landed on ${sides[Math.floor(Math.random() * sides.length)]}.`);
	}

	public async chatInputRun(interaction: Command.ChatInputInteraction) {
        const sides = ['heads', 'tails'];
		return interaction.reply({ content: `The coin landed on ${sides[Math.floor(Math.random() * sides.length)]}.`});
    }
}
