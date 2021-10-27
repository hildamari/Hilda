import { ApplyOptions } from '@sapphire/decorators';
import type { CommandOptions } from '@sapphire/framework';
import type { Message } from 'discord.js';
import HildaCommand from '#lib/HildaCommand';

@ApplyOptions<CommandOptions>({
    fullCategory: ['Memes'],
	aliases: ['chant'],
    description: 'Chants HIL-DA HIL-DA' 
})
export default class HildaChantCommand extends HildaCommand {
    public async messageRun(message: Message) {
        const hilda = this.container.client.emojis.cache.find(emoji => emoji.name === "HildaCheer");
        message.channel.send(`${hilda} HIL-DA HIL-DA ${hilda}`);
        
    }
}