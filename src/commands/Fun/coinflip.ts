import { ApplyOptions } from '@sapphire/decorators';
import type { CommandOptions } from '@sapphire/framework';
import type { Message } from 'discord.js';
import HildaCommand from '#lib/HildaCommand';

@ApplyOptions<CommandOptions>({
	aliases: ['coin', 'flip', 'cf'],
	fullCategory: ['Fun'],
	description: 'Flip a coin'
})
export default class CoinflipCommand extends HildaCommand {
	public messageRun(message: Message) {
		const sides = ['heads', 'tails'];
		return message.channel.send(`The coin landed on ${sides[Math.floor(Math.random() * sides.length)]}.`);
	}
}
