import { ApplyOptions } from '@sapphire/decorators';
import { Command, CommandOptions } from '@sapphire/framework';
import type { Message } from 'discord.js';

@ApplyOptions<CommandOptions>({
    fullCategory: ['Memes'],
	aliases: ['baby'],
    description: 'Sends the im baby image' 
})
export default class ImBabyCommand extends Command {
    public async messageRun(message: Message) {
        message.channel.send({ files: ['./src/lib/data/assets/images/imbaby.png'] });   
    }

    public async chatInputRun(interaction: Command.ChatInputInteraction) {
        interaction.reply({ files: ['./src/lib/data/assets/images/imbaby.png'] });   
    }
}