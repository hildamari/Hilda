import { ApplyOptions } from '@sapphire/decorators';
import { Command, CommandOptions } from '@sapphire/framework';
import type { Message } from 'discord.js';

@ApplyOptions<CommandOptions>({
    fullCategory: ['Memes'],
	description: 'Replies with "Everyone has uno"'
})
export default class UnoCommand extends Command {
    public async messageRun(message: Message) {
        const imbaby = this.container.client.emojis.cache.find(emoji => emoji.name === "ImBaby");
        return message.channel.send(`${imbaby} Everyone has uno, dipshit.`);
    }

    public async chatInputRun(interaction: Command.ChatInputInteraction) {
        const imbaby = this.container.client.emojis.cache.find(emoji => emoji.name === "ImBaby");
        return interaction.reply(`${imbaby} Everyone has uno, dipshit.`);
    }
}