import { LogLevel } from '@sapphire/framework';
import type { ClientOptions } from 'discord.js';
import { Pool } from 'pg';

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

export const PGSQL_ENABLED = false;
export const PGSQL_DATABASE_NAME = 'hilda';
export const PGSQL_DATABASE_PASSWORD = '';
export const PGSQL_DATABASE_USER = '';
export const PGSQL_DATABASE_PORT = 5432;
export const PGSQL_DATABASE_HOST = 'localhost';

export const PGSQL_DATABASE_URL = `postgresql://${PGSQL_DATABASE_USER}:${PGSQL_DATABASE_PASSWORD}@${PGSQL_DATABASE_HOST}:${PGSQL_DATABASE_PORT}/${PGSQL_DATABASE_NAME}`;

export const POOL = new Pool({
	connectionString: PGSQL_DATABASE_URL,
	port: PGSQL_DATABASE_PORT,
	host: PGSQL_DATABASE_HOST,
	database: PGSQL_DATABASE_NAME,
	user: PGSQL_DATABASE_USER,
	password: PGSQL_DATABASE_PASSWORD
});

export const connectionString = PGSQL_DATABASE_URL
export const port = PGSQL_DATABASE_PORT
export const host = PGSQL_DATABASE_HOST
export const database = PGSQL_DATABASE_NAME
export const user = PGSQL_DATABASE_USER
export const password = PGSQL_DATABASE_PASSWORD