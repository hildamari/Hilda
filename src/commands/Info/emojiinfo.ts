import { ApplyOptions } from '@sapphire/decorators';
import type { CommandOptions, Args } from '@sapphire/framework';
import { Timestamp } from '@sapphire/time-utilities';
import { Message, MessageEmbed } from 'discord.js';
import HildaCommand from '#lib/HildaCommand';

@ApplyOptions<CommandOptions>({
	fullCategory: ['Info'],
	description: 'Displays information about the selected emoji'
})
export default class EmojiInfoCommand extends HildaCommand {
	public async messageRun(message: Message, args: Args) {
		const emojiResolvable = await args.pick('emoji');

		if (!emojiResolvable) throw 'Emoji not found.';

		const emoji = message.guild?.emojis.resolve(emojiResolvable);
		const emojiID = emoji?.id;
		const hexColor = message.member?.displayHexColor as `#${string}`;
		const timestamp = new Timestamp('dddd, MMMM DD YYYY, h:mm:ss a');
		const formatted = timestamp.display(emoji?.createdAt);

		// const emojiInfoEmbed = new MessageEmbed();
		// emojiInfoEmbed.setColor(hexColor as `#${string}`).setTitle(`${emoji} ${emoji?.name}`).addField('ID', emojiID as string).addField('Added to Server', formatted);
		const emojiInfoEmbed = new MessageEmbed()
		.setColor(hexColor)
		.setTitle(`${emoji} ${emoji?.name}`)
		.addField('ID', emojiID as string)
		.addField('Added to Server', formatted)
		.setTimestamp();

		return message.channel.send({ embeds: [emojiInfoEmbed] });
	}
}
