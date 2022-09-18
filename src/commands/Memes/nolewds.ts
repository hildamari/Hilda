import { ApplyOptions } from '@sapphire/decorators';
import { Command, CommandOptions } from '@sapphire/framework';
import type { Message } from 'discord.js';

@ApplyOptions<CommandOptions>({
    fullCategory: ['Memes'],
	aliases: ['lewds', 'lewd'],
    description: 'Replies with the no lewds image' 
})
export default class NoLewdsCommand extends Command {
    public async messageRun(message: Message) {
        return message.channel.send({ files: ["./src/lib/data/assets/images/nolewds.png"] });
    }

    public async chatInputRun(interaction: Command.ChatInputInteraction) {
        return interaction.reply({ files: ["./src/lib/data/assets/images/nolewds.png"] });
    }
}