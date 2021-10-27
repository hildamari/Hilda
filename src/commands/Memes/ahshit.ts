import { ApplyOptions } from '@sapphire/decorators';
import type { CommandOptions } from '@sapphire/framework';
import type { Message } from 'discord.js';
import HildaCommand from '#lib/HildaCommand';

@ApplyOptions<CommandOptions>({
    fullCategory: ['Memes'],
	description: 'Sends the AhShit image'
})
export default class AhShitCommand extends HildaCommand {
    public async messageRun(message: Message) {
        message.channel.send({ files: ['./src/lib/data/assets/images/ahshit.png'] });
        
    }
}