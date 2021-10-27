import { ApplyOptions } from '@sapphire/decorators';
import type { CommandOptions } from '@sapphire/framework';
import type { Message } from 'discord.js';
import HildaCommand from '#lib/HildaCommand';

@ApplyOptions<CommandOptions>({
	aliases: ['roll', 'die'],
	fullCategory: ['Fun'],
	description: 'Roll a 6-sided die'
})
export default class DiceCommand extends HildaCommand {
	public messageRun(message: Message) {
		function randomNumber() {
			const sides = 6;
			const randomNumber = Math.floor(Math.random() * sides) + 1;
			return randomNumber;
		}

		return message.channel.send(`The dice roll was ${randomNumber()}.`);
	}
}
