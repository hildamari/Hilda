import { ApplyOptions } from '@sapphire/decorators';
import { Command, CommandOptions } from '@sapphire/framework';
import type { Message } from 'discord.js';

@ApplyOptions<CommandOptions>({
    fullCategory: ['Memes'],
	description: 'Sends Moonling\'s readme image'
})
export default class ReadmeCommand extends Command {
    public async messageRun(message: Message) {
        message.channel.send({ files: ['./src/lib/data/assets/images/readme.png'] });
    }

    public async chatInputRun(interaction: Command.ChatInputInteraction) {
        interaction.reply({ files: ['./src/lib/data/assets/images/readme.png'] });
    }
}