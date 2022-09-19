import { Precondition } from '@sapphire/framework';
import { CommandInteraction, GuildMember, Message, Permissions } from 'discord.js';

export default class AdminOnly extends Precondition {
	public override chatInputRun(interaction: CommandInteraction) {
		const member = interaction.member as GuildMember;
		if (interaction.guild && member.permissions.has(Permissions.FLAGS.MANAGE_GUILD)) return this.ok()
		return this.error({ message: 'This command can only be used by server admins.' });
	}

	public override messageRun(message: Message) {
		if (message.guild && message.member!.permissions.has(Permissions.FLAGS.MANAGE_GUILD)) return this.ok();
		return this.error({ message: 'This command can only be used by server admins.' });
	}
}

declare module '@sapphire/framework' {
	interface Preconditions {
		AdminOnly: never;
	}
}