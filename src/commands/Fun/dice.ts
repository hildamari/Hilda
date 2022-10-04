import { ApplyOptions } from '@sapphire/decorators';
import { ChatInputCommand, Command } from '@sapphire/framework';
import type { Message } from 'discord.js';

@ApplyOptions<Command.Options>({
    name: 'dice',
    aliases: ['roll', 'die'],
	fullCategory: ['Fun'],
	description: 'Roll a 6-sided die'
})
export class DiceCommand extends Command {
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
			idHints: ['1021172432083636376'],
		  }
		);
	}

    public messageRun(message: Message) {

		return message.channel.send(`The dice roll was ${this.randomNumber()}.`);
	}

	public async chatInputRun(interaction: Command.ChatInputInteraction) {
		return interaction.reply({ content: `The dice roll was ${this.randomNumber()}.`});
    }

    private randomNumber() {
        const sides = 6;
        const randomNumber = Math.floor(Math.random() * sides) + 1;
        return randomNumber;
    }
}
