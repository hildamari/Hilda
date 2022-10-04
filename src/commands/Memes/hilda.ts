import { ApplyOptions } from '@sapphire/decorators';
import { ChatInputCommand, Command, CommandOptions } from '@sapphire/framework';
import type { Message } from 'discord.js';

@ApplyOptions<CommandOptions>({
    name: 'hilda',
    fullCategory: ['Memes'],
	aliases: ['chant'],
    description: 'HIL-DA! HIL-DA!' 
})
export default class HildaChantCommand extends Command {
    public override registerApplicationCommands(
		registry: ChatInputCommand.Registry
	  ) {
		registry.registerChatInputCommand(
		  (builder) =>
			builder
			  .setName(this.name)
			  .setDescription(this.description)
			  .setDMPermission(false),
		  {
			idHints: ['1021183405674745918'],
		  }
		);
	}
    public async messageRun(message: Message) {
        const hilda = this.container.client.emojis.cache.find(emoji => emoji.name === "HildaCheer");
        message.channel.send(`${hilda} HIL-DA HIL-DA ${hilda}`);
    }

    public async chatInputRun(interaction: Command.ChatInputInteraction) {
        const hilda = this.container.client.emojis.cache.find(emoji => emoji.name === "HildaCheer");
        interaction.reply(`${hilda} HIL-DA HIL-DA ${hilda}`);
    }
}