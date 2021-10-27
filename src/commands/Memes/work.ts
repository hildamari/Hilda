import { ApplyOptions } from '@sapphire/decorators';
import type { CommandOptions } from '@sapphire/framework';
import type { Message } from 'discord.js';
import HildaCommand from '#lib/HildaCommand';

@ApplyOptions<CommandOptions>({
    fullCategory: ['Memes'],
	description: 'Replies with "You\'re making me work!"'
})
export default class WorkCommand extends HildaCommand {
    public async messageRun(message: Message) {
        const imbaby = this.container.client.emojis.cache.find(emoji => emoji.name === "ImBaby");
        return message.channel.send(`${imbaby} You're making me work!`);
    }
}