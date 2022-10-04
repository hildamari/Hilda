import { ApplyOptions } from '@sapphire/decorators';
import { ChatInputCommand, Command, CommandOptions } from '@sapphire/framework';
import type { Message } from 'discord.js';

@ApplyOptions<CommandOptions>({
    name: 'reply',
    fullCategory: ['Memes'],
	description: 'I\'m the best!'
})
export default class ReplyCommand extends Command {
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
			idHints: ['1021183578740101241'],
		  }
		);
	}
    public async messageRun(message: Message) {
        const hilda = this.container.client.emojis.cache.find(emoji => emoji.name === "HildaCheer");
        return message.channel.send(`Yeah! Who's the best? I'm the best! ${hilda}`);  
    }

    public async chatInputRun(interaction: Command.ChatInputInteraction) {
        const hilda = this.container.client.emojis.cache.find(emoji => emoji.name === "HildaCheer");
        return interaction.reply(`Yeah! Who's the best? I'm the best! ${hilda}`);  
    }
}