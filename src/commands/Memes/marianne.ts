import { ApplyOptions } from '@sapphire/decorators';
import type { CommandOptions } from '@sapphire/framework';
import type { Message } from 'discord.js';
import HildaCommand from '#lib/HildaCommand';

@ApplyOptions<CommandOptions>({
    fullCategory: ['Memes'],
	description: 'References the uno meme'
})
export default class MarianneCommand extends HildaCommand {
    public async messageRun(message: Message) {
        const marianne = this.container.client.emojis.cache.find(emoji => emoji.name === "Marianne2");
        return message.channel.send(`${marianne} I don't have uno so go fuck off.`);
        
    }
}