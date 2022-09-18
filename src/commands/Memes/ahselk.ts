import { ApplyOptions } from '@sapphire/decorators';
import { Command, CommandOptions } from '@sapphire/framework';
import type { Message } from 'discord.js';

@ApplyOptions<CommandOptions>({
    fullCategory: ['Memes'],
	description: 'Sends the AhSelk image'
})
export default class AhSelkCommand extends Command {
    public async messageRun(message: Message) {
        message.channel.send({ files: ['./src/lib/data/assets/images/ahselk.png'] });
    }

    public async chatInputRun(interaction: Command.ChatInputInteraction) {
        return interaction.reply({ files: ['./src/lib/data/assets/images/ahselk.png'] })
    }
}