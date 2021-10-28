import { Listener } from '@sapphire/framework';
import type { Guild } from 'discord.js';

export class GuildCreate extends Listener {
	public async run(guild: Guild) {
        const id = guild?.id as string;
        const prefix = this.container.client.options.defaultPrefix;
        const selectQuery = `SELECT id FROM guild WHERE id=${id}`;
        const insertIntoQuery = {
			text: 'INSERT INTO guild(id, prefix) VALUES($1, $2)',
			values: [id, prefix]
		};
		this.container.database.query(selectQuery, (err, res) => {
			if (err) {
				return this.container.logger.error(err.stack);
			} else {
                if(res.rows[0] === undefined) {
                    this.container.database.query(insertIntoQuery, (err) => {
                        if (err) {
                            return this.container.logger.error(err.stack);
                        } else {
                            this.container.logger.info('Successfully added guild to database');
                        }
                    });
                } else {
                    this.container.logger.info('Guild already in database')
                }
            }
        })
	}
}