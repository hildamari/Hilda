import { ApplyOptions } from '@sapphire/decorators';
import { Command, CommandOptions } from '@sapphire/framework';
import type { Message } from 'discord.js';

@ApplyOptions<CommandOptions>({
    fullCategory: ['Memes'],
    aliases: ['iswhy'],
	description: 'Replies with the IS Why gif'
})
export default class WhyCommand extends Command {
    public async messageRun(message: Message) {
        message.channel.send({ files: ['./src/lib/data/assets/images/iswhy.gif'] });
    }

    public async chatInputRun(interaction: Command.ChatInputInteraction) {
        interaction.reply({ files: ['./src/lib/data/assets/images/iswhy.gif'] });
    }
}