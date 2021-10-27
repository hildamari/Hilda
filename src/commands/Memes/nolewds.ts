import { ApplyOptions } from '@sapphire/decorators';
import type { CommandOptions } from '@sapphire/framework';
import type { Message } from 'discord.js';
import HildaCommand from '#lib/HildaCommand';

@ApplyOptions<CommandOptions>({
    fullCategory: ['Memes'],
	aliases: ['lewds', 'lewd'],
    description: 'Replies with the no lewds image' 
})
export default class NoLewdsCommand extends HildaCommand {
    public async messageRun(message: Message) {
        return message.channel.send({ files: ["./src/lib/data/assets/images/nolewds.png"] });
        
    }
}