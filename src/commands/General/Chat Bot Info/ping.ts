import HildaCommand from '#lib/HildaCommand';
import { ApplyOptions } from '@sapphire/decorators';
import type { CommandOptions } from '@sapphire/framework';
import { send } from '@sapphire/plugin-editable-commands';
import type { Message } from 'discord.js';

@ApplyOptions<CommandOptions>({
	fullCategory: ['General', 'Chat Bot Info'],
	description: 'ping pong'
})
export class PingCommand extends HildaCommand {
	public async messageRun(message: Message) {
		const msg = await send(message, 'Ping?');

		const content = `Pong! Bot Latency ${Math.round(this.container.client.ws.ping)}ms. API Latency ${
			(msg.editedTimestamp || msg.createdTimestamp) - (message.editedTimestamp || message.createdTimestamp)
		}ms.`;

		return send(message, content);
	}
}