import { Precondition } from '@sapphire/framework';
import type { Message } from 'discord.js';
import { OWNER } from '#root/config';

export class OwnerOnlyPrecondition extends Precondition {
	public async run(message: Message) {
		return OWNER == (message.author.id) ? this.ok() : this.error({ message: 'This command can only be used by the owner.' });
	}
}

declare module '@sapphire/framework' {
	interface Preconditions {
		OwnerOnly: never;
	}
}