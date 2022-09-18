import { LogLevel } from '@sapphire/framework';
import type { ClientOptions } from 'discord.js';

export const NAME = '';
export const PREFIX = '';
export const OWNER = '';
export const CLIENT_ID = '';
export const CLIENT_SECRET = '';

export const DEV = true;
export const DEV_NAME = '';
export const DEV_PREFIX = '';
export const DEV_CLIENT_ID = '';
export const DEV_CLIENT_SECRET = '';

export const CLIENT_OPTIONS: ClientOptions = {
	partials: ["CHANNEL"],
	defaultPrefix: '!',
	regexPrefix: /^(hey +)?hilda[, ]/i,
	caseInsensitiveCommands: true,
	logger: {
		level: LogLevel.Debug
	},
	shards: 'auto',
	intents: [
		'GUILDS',
		'GUILD_MEMBERS',
		'GUILD_BANS',
		'GUILD_EMOJIS_AND_STICKERS',
		'GUILD_VOICE_STATES',
		'GUILD_MESSAGES',
		'GUILD_MESSAGE_REACTIONS',
		'DIRECT_MESSAGES',
		'DIRECT_MESSAGE_REACTIONS'
	],
	presence: {
		activities: [{ name: 'Uno', type: 'PLAYING' }] 
	},
	loadDefaultErrorListeners: true,
	messageCacheLifetime: 120
};

export const TOKENS = {
	BOT_TOKEN: '',
	DEV_BOT_TOKEN: ''
};