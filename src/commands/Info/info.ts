// Info command is modified from godfather (https://github.com/Stitch07/godfather) Copyright 2020 Stitch07, used under the AGPL-3.0 License
import { ApplyOptions } from '@sapphire/decorators';
import type { CommandOptions } from '@sapphire/framework';
import type { Message } from 'discord.js';
import HildaCommand from '#lib/HildaCommand';

@ApplyOptions<CommandOptions>({
    fullCategory: ['Info'],
	description: 'Shows you useful information about the bot.'
})
export default class InfoCommand extends HildaCommand {
	public async messageRun(message: Message) {
		const messageText = [
			`Hilda v${this.container.client.version} is a Discord bot that is brought to you by memes for memes`,
			'Hilda is brought to you by memes for memes.',
            'Her source code can be found here: <https://github.com/hildamari/Hilda>'
		];

		return message.channel.send(messageText.join('\n'));
	}
}
