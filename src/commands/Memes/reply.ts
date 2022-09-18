import { ApplyOptions } from '@sapphire/decorators';
import { Command, CommandOptions } from '@sapphire/framework';
import type { Message } from 'discord.js';

@ApplyOptions<CommandOptions>({
    fullCategory: ['Memes'],
	description: 'Replies with a message'
})
export default class ReplyCommand extends Command {
    public async messageRun(message: Message) {
        const hilda = this.container.client.emojis.cache.find(emoji => emoji.name === "HildaCheer");
        return message.channel.send(`Yeah! Who's the best? I'm the best! ${hilda}`);  
    }

    public async chatInputRun(interaction: Command.ChatInputInteraction) {
        const hilda = this.container.client.emojis.cache.find(emoji => emoji.name === "HildaCheer");
        return interaction.reply(`Yeah! Who's the best? I'm the best! ${hilda}`);  
    }
}