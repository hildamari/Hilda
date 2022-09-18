import { ApplyOptions } from '@sapphire/decorators';
import { Command, CommandOptions } from '@sapphire/framework';
import type { Message } from 'discord.js';

@ApplyOptions<CommandOptions>({
    fullCategory: ['Memes'],
	aliases: ['chant'],
    description: 'Chants HIL-DA HIL-DA' 
})
export default class HildaChantCommand extends Command {
    public async messageRun(message: Message) {
        const hilda = this.container.client.emojis.cache.find(emoji => emoji.name === "HildaCheer");
        message.channel.send(`${hilda} HIL-DA HIL-DA ${hilda}`);
    }

    public async chatInputRun(interaction: Command.ChatInputInteraction) {
        const hilda = this.container.client.emojis.cache.find(emoji => emoji.name === "HildaCheer");
        interaction.reply(`${hilda} HIL-DA HIL-DA ${hilda}`);
    }
}