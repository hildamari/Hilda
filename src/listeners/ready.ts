import { DEV } from '#root/config';
import { Listener, ListenerOptions, PieceContext, Store } from '@sapphire/framework';
import { green, magentaBright, white, magenta, blue, gray, yellow } from 'colorette';
import type { HildaSlashCommand } from '#lib/structures/HildaSlashCommand';

export class Ready extends Listener {
	private readonly style = DEV ? yellow : blue;
	
	constructor(context: PieceContext, options?: ListenerOptions) {
		super(context, {
			...options,
			once: true
		})
	}

	public async run() {
		const commands = this.container.stores.get('slash-commands');
		commands.forEach((cmd: any) => {
			const command = cmd as HildaSlashCommand;
			if (!command.slashRun) return;
			if (command.enabledGuilds.length === 0) throw new Error('You have to specify guilds!')
			command.enabledGuilds.forEach((guild) => {
				this.container.client.guilds.cache.get(guild)?.commands.create(command.commandData)
			})
		})
		const discrim = this.container.client.user?.discriminator;
		const username = this.container.client.user?.username;
		this.container.logger.info(`Bot is up and running as ${username}#${discrim}!`);
		// this.container.logger.info(this.container.client.options.defaultPrefix)
		this.printBanner();
		this.printStoreDebugInformation();
	}

	private printBanner() {
		const success = green('+');

		const llc = DEV ? magentaBright : white;
		const blc = DEV ? magenta : blue;

		const line01 = llc('');
		const line02 = llc('');
		const line03 = llc('');

		// Offset Pad
		const pad = ' '.repeat(7);

		console.log(
			String.raw`
${line01} ${pad}${blc('1.0.0')}
${line02} ${pad}[${success}] Gateway
${line03}${DEV ? ` ${pad}${blc('<')}${llc('/')}${blc('>')} ${llc('DEVELOPMENT MODE')}` : ''}
		`.trim()
		);
	}

	private printStoreDebugInformation() {
		const { client, logger } = this.container;
		const stores = [...client.stores.values()];
		const last = stores.pop()!;

		for (const store of stores) {
			logger.info(this.styleStore(store, false));
			// logger.info(store.name);
		}
		logger.info(this.styleStore(last, true));
	}

	private styleStore(store: Store<any>, last: boolean) {
		return gray(`${last ? '└─' : '├─'} Loaded ${this.style(store.size.toString().padEnd(3, ' '))} ${store.name}.`);
	}
}