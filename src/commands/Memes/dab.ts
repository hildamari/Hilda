import { ApplyOptions } from '@sapphire/decorators';
import type { CommandOptions } from '@sapphire/framework';
import type { Message } from 'discord.js';
import HildaCommand from '#lib/HildaCommand';

@ApplyOptions<CommandOptions>({
    fullCategory: ['Memes'],
	description: 'Dab on them haters'
})
export default class DabCommand extends HildaCommand {
    public async messageRun(message: Message) {
        const hildab = this.container.client.emojis.cache.find(emoji => emoji.id === "737171025350885506");
        return message.channel.send(`${hildab}`);
        
    }
}