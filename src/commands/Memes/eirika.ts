import { ApplyOptions } from '@sapphire/decorators';
import { Command, CommandOptions } from '@sapphire/framework';
import type { Message } from 'discord.js';

@ApplyOptions<CommandOptions>({
    fullCategory: ['Memes'],
	aliases: ['hdnotlikeeirika', 'hd'],
    description: 'Sends the HDNotLikeEirika image' 
})
export default class NotLikeEirikaCommand extends Command {
    public async messageRun(message: Message) {
        message.channel.send({ files: ['./src/lib/data/assets/images/hdnotlikeeirika.png'] });
    }

    public async chatInputRun(interaction: Command.ChatInputInteraction) {
        return interaction.reply({ files: ['./src/lib/data/assets/images/hdnotlikeeirika.png'] })
    }
}