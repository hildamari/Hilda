import { Precondition } from '@sapphire/framework';
import { Message, Permissions } from 'discord.js';

export default class AdminOnly extends Precondition {
	public run(message: Message) {
		if (message.guild && message.member!.permissions.has(Permissions.FLAGS.MANAGE_GUILD)) return this.ok();
		return this.error({ message: 'This command can only be used by server admins.' });
	}
}

declare module '@sapphire/framework' {
	interface Preconditions {
		AdminOnly: never;
	}
}