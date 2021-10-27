import { Piece, SapphirePrefix } from '@sapphire/framework';
import { EmojiResolvable } from 'discord.js';

declare module 'discord.js' {
	interface Client {
		readonly version: string;
		readonly invite: string;
		fetchGuildPrefix(guild: Guild): Promise<SapphirePrefix>;
		ownerID: string | undefined;
	}

	interface ClientReady {
		applications: User;
	}
}

declare module '@sapphire/framework' {
	interface ArgType {
		duration: number;
		piece: Piece;
		emoji: EmojiResolvable;
	}

	interface CommandOptions {
		fullCategory?: string[] | undefined;
	}
}
