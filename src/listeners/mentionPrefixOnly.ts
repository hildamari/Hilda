import { POOL } from '#root/config';
import { Listener } from '@sapphire/framework';
import type { Message } from 'discord.js';

export class UserEvent extends Listener<'mentionPrefixOnly'> {
	public async run(message: Message) {
		// const prefix = this.container.client.options.defaultPrefix;
		const selectQuery = `SELECT id, prefix FROM guild WHERE id=${message.guild?.id}`;
			POOL.query(selectQuery, (err, res) => {
				if (err) {
					return this.container.logger.error(err.stack);
				} else {
					const { prefix } = res.rows[0];
					return message.channel.send(prefix ? `My prefix in this guild is: \`${prefix}\`` : 'You do not need a prefix in DMs.');
				}
			});
		
	}
}