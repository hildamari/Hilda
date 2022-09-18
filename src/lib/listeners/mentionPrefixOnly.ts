import type { Events } from '@sapphire/framework';
import { Listener } from '@sapphire/framework';
import type { Message } from 'discord.js';

export class UserEvent extends Listener<typeof Events.MentionPrefixOnly> {
	public async run(message: Message) {
		const guild = await this.container.prisma.guild.findUnique({ where: { id: message.guild?.id } });
		return message.channel.send(guild?.prefix ? `My prefix in this guild is: \`${guild?.prefix}\` or you can use "/" for my slash commands!` : 'Cannot find any Prefix for Message Commands.');
	}
}
