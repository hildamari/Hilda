import { ApplyOptions } from '@sapphire/decorators';
import type { CommandOptions } from '@sapphire/framework';
import type { Message } from 'discord.js';
import HildaCommand from '#lib/HildaCommand';

@ApplyOptions<CommandOptions>({
    fullCategory: ['Test'],
	description: 'description',
    preconditions: ['OwnerOnly']
})
export default class TestCommand extends HildaCommand {
    public async messageRun(message: Message) {
        this.container.logger.error(message.id)
        this.container.logger.info(message.id)
        // this.container.logger.write()
        // const selectQuery = `SELECT id, prefix FROM guild WHERE id=${message.guild?.id}`;
        // this.container.database.query(selectQuery, (err, res) => {
		// 	if (err) {
		// 		return console.log(err.stack);
		// 	} else {
		// 		const { prefix } = res.rows[0];
        //         console.log(prefix);
        //     }
        // })
        
    }
}