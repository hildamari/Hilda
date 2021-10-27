import { ApplyOptions } from '@sapphire/decorators';
import type { CommandOptions } from '@sapphire/framework';
import type { Message } from 'discord.js';
import HildaCommand from '#lib/HildaCommand';

@ApplyOptions<CommandOptions>({
	fullCategory: ['Info'],
	aliases: ['listemoji'],
	description: "Displays the server's emoji"
})
export default class EmojiCommand extends HildaCommand {
	public messageRun(message: Message) {
		const emojiList = message.guild?.emojis.cache.map((e) => e.toString()).join(' ');
		message.channel.send(emojiList as string);
	}
}
