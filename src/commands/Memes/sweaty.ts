import { ApplyOptions } from '@sapphire/decorators';
import type { CommandOptions } from '@sapphire/framework';
import type { Message } from 'discord.js';
import HildaCommand from '#lib/HildaCommand';

@ApplyOptions<CommandOptions>({
    fullCategory: ['Memes'],
	description: 'Replies with "Ugh, I\'m all sweaty!"'
})
export default class SweatyCommand extends HildaCommand {
    public async messageRun(message: Message) {
        const imAllSweaty = this.container.client.emojis.cache.find(emoji => emoji.name === "ImAllSweaty");
        return message.channel.send(`${imAllSweaty} "Ugh, I'm all sweaty!"`);
        
    }
}