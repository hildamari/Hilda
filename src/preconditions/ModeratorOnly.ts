import { Precondition } from '@sapphire/framework';
import { CommandInteraction, GuildMember, Message, Permissions } from 'discord.js';

export default class ModeratorOnlyPrecondition extends Precondition {
	public override messageRun(message: Message) {
		if (message.guild && message.member!.permissions.has(Permissions.FLAGS.BAN_MEMBERS)) return this.ok();
		return this.error({ message: 'This command can only be used by server moderators.' });
	}

	public override chatInputRun(interaction: CommandInteraction) {
		const member = interaction.member as GuildMember;
		if (interaction.guild && member.permissions.has(Permissions.FLAGS.BAN_MEMBERS)) return this.ok()
		return this.error({ message: 'This command can only be used by server moderators.' });
	}
}

declare module '@sapphire/framework' {
	interface Preconditions {
		ModeratorOnly: never;
	}
}