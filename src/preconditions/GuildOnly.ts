import { Awaitable, Precondition, Result, UserError } from '@sapphire/framework';
import type { Message } from 'discord.js';

export class GuildOnlyPrecondition extends Precondition {
	public run(message: Message): Awaitable<Result<unknown, UserError>> {
		return message.guild === null ? this.ok() : this.error({ message: 'This command can only be used in a guild.' });
	}
}

declare module '@sapphire/framework' {
	interface Preconditions {
		GuildOnly: never;
	}
}