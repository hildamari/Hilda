import type { Guild, GuildMember, Message, NewsChannel, TextChannel } from 'discord.js';
import {
    ArgumentStore,
    CommandStore,
    ListenerStore,
    PreconditionStore
} from '@sapphire/framework';
import SlashCommandStore from '#lib/structures/SlashCommandStore';

export interface GuildMessage extends Message {
	channel: TextChannel | NewsChannel;
	readonly guild: Guild;
	readonly member: GuildMember;
}

declare module '@sapphire/pieces' {
    interface StoreRegistryEntries {
		'slash-commands': SlashCommandStore;
        arguments: ArgumentStore;
        commands: CommandStore;
        listeners: ListenerStore;
        preconditions: PreconditionStore;
    }
}