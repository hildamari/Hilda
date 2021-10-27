import { ApplyOptions } from '@sapphire/decorators';
import type { CommandOptions } from '@sapphire/framework';
import type { Message } from 'discord.js';
import HildaCommand from '#lib/HildaCommand';

@ApplyOptions<CommandOptions>({
    fullCategory: ['Memes'],
	description: 'Replies with a message'
})
export default class ReplyCommand extends HildaCommand {
    public async messageRun(message: Message) {
        const hilda = this.container.client.emojis.cache.find(emoji => emoji.name === "HildaCheer");
        return message.channel.send(`Yeah! Who's the best? I'm the best! ${hilda}`);
        
    }
}