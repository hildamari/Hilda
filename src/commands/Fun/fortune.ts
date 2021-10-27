import { ApplyOptions } from '@sapphire/decorators';
import type { CommandOptions } from '@sapphire/framework';
import { Message, MessageEmbed, Emoji } from 'discord.js';
import HildaCommand from '#lib/HildaCommand';
import { fortunes } from '#data/fortunes';

@ApplyOptions<CommandOptions>({
	fullCategory: ['Fun'],
	description: 'Get a random fortune'
})
export default class FortuneCommand extends HildaCommand {
	public async messageRun(message: Message) {
		const obj_keys = Object.keys(fortunes.fortunes);
		const ran_key = obj_keys[Math.floor(Math.random() * obj_keys.length)];
		const key = Number(ran_key);
		const selectedFortune = fortunes.fortunes[key];

		const fortune = this.container.client.emojis.cache.find((emoji: Emoji) => emoji.name === 'fortune');

		const fortuneEmbed = new MessageEmbed();

		fortuneEmbed.setColor('#ffff00').addField(`${fortune} Fortune`, selectedFortune.msg);

		return message.channel.send({ embeds: [ fortuneEmbed ] });
	}
}
