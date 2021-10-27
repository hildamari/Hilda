import { ApplyOptions } from '@sapphire/decorators';
import type { CommandOptions } from '@sapphire/framework';
import type { Message } from 'discord.js';
import HildaCommand from '#lib/HildaCommand';
import { format } from '#utils/durationFormat';

@ApplyOptions<CommandOptions>({
	fullCategory: ['Info'],
	description: "Shows you the bot's uptime"
})
export default class UptimeCommand extends HildaCommand {
	public async messageRun(message: Message) {
		return message.channel.send(`I've been online for ${format(this.container.client.uptime ?? 0)}.`);
	}
}
