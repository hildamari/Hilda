import { ApplyOptions } from '@sapphire/decorators';
import type { CommandOptions } from '@sapphire/framework';
import type { Message } from 'discord.js';
import HildaCommand from '#lib/HildaCommand';

@ApplyOptions<CommandOptions>({
    fullCategory: ['Memes'],
    aliases: ['iswhy'],
	description: 'Replies with the IS Why gif'
})
export default class WhyCommand extends HildaCommand {
    public async messageRun(message: Message) {
        message.channel.send({ files: ['./src/lib/data/assets/images/iswhy.gif'] });
        // const whyEmbed = new MessageEmbed()
        //     .setTitle("IS WHY!?")
        //     .setImage('');
    
        // message.channel.send({ embeds: [whyEmbed] });
    }
}