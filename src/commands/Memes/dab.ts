import { ApplyOptions } from '@sapphire/decorators';
import { ChatInputCommand, Command, CommandOptions } from '@sapphire/framework';
import type { Message } from 'discord.js';

@ApplyOptions<CommandOptions>({
    name: 'dab',
    fullCategory: ['Memes'],
	description: 'Dab on them haters'
})
export default class DabCommand extends Command {
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
			idHints: ['1021183404248674432'],
		  }
		);
	}
    public async messageRun(message: Message) {
        const hildab = this.container.client.emojis.cache.find(emoji => emoji.id === "737171025350885506");
        return message.channel.send(`${hildab}`);
    }

    public async chatInputRun(interaction: Command.ChatInputInteraction) {
        const hildab = this.container.client.emojis.cache.find(emoji => emoji.id === "737171025350885506");
        return interaction.reply({ content: `${hildab}` })
    }
}