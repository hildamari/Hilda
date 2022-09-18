import { ApplyOptions } from '@sapphire/decorators';
import { Command, CommandOptions } from '@sapphire/framework';
import type { Message } from 'discord.js';

@ApplyOptions<CommandOptions>({
    fullCategory: ['Memes'],
	description: 'Sends the DoesMad image'
})
export default class DoesMadCommand extends Command {
    public async messageRun(message: Message) {
        message.channel.send({ files: ['./src/lib/data/assets/images/doesmad.jpg'] }); 
    }

    public async chatInputRun(interaction: Command.ChatInputInteraction) {
        return interaction.reply({ files: ['./src/lib/data/assets/images/doesmad.jpg'] })
    }
}