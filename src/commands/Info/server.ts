import { ApplyOptions } from '@sapphire/decorators';
import type { CommandOptions } from '@sapphire/framework';
import { Timestamp } from '@sapphire/time-utilities';
import { Message, MessageEmbed } from 'discord.js';
import HildaCommand from '#lib/HildaCommand';
import { BrandingColors } from '#utils/Branding';

@ApplyOptions<CommandOptions>({
    fullCategory: ['Info'],
	description: 'Shows you information about the server'
})
export default class ServerCommand extends HildaCommand {
	public async messageRun(message: Message) {
		const createdAt = new Date(message.guild?.createdTimestamp as number);
		const timestamp = new Timestamp('MMMM DD, YYYY [at] HH:mm:ss [UTC]Z');
		const formatted = timestamp.display(createdAt);
        const memberCount = message.guild?.memberCount;
        const serverTitle = message.guild?.name as string;

		const serverEmbed = new MessageEmbed()
			.setColor(BrandingColors.Primary)
            .setTitle(`${serverTitle} Server Statistics`)
			.addField('Server Name', message.guild?.name as string, true)
			.addField('Members', `${memberCount}`, true)
			.addField('Created At', formatted);

        return message.channel.send({ embeds: [serverEmbed] });
	}
}
