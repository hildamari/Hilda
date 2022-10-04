import '#lib/setup';
import { container, LogLevel } from '@sapphire/framework';
import { HildaClient } from '#lib/HildaClient';
import { PrismaClient } from '@prisma/client';

const client = new HildaClient({
	defaultPrefix: 'h!',
	regexPrefix: /^(hey +)?hilda[,! ]/i,
	caseInsensitiveCommands: true,
	logger: {
		level: LogLevel.Debug
	},
	shards: 'auto',
	intents: [
		'GUILDS',
		'GUILD_MEMBERS',
		'GUILD_EMOJIS_AND_STICKERS',
		'GUILD_MESSAGES',
		'GUILD_MESSAGE_REACTIONS',
	],
	partials: ['CHANNEL'],
	loadMessageCommandListeners: true
});

const main = async () => {
	container.prisma = new PrismaClient();

	try {
		client.logger.info('Logging in');
		container.prisma.$connect()
		await client.login();
		client.logger.info('logged in');
	} catch (error) {
		client.logger.fatal(error);
		await container.prisma.$disconnect();
		client.destroy();
		process.exit(1);
	}
};

main();