import { ApplyOptions } from '@sapphire/decorators';
import { ChatInputCommand, Command, CommandOptions } from '@sapphire/framework';
import type { Message } from 'discord.js';

@ApplyOptions<CommandOptions>({
	name: 'uptime',
	fullCategory: ['Info'],
	description: "Shows you the bot's uptime"
})
export default class UptimeCommand extends Command {
	// Register slash and context menu command
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
			idHints: ['1021174722173612133'],
		  }
		);
	}
	public async messageRun(message: Message) {

		let totalSeconds = (this.container.client.uptime as number / 1000);
		let days = Math.floor(totalSeconds / 86400);
		totalSeconds %= 86400;
		let hours = Math.floor(totalSeconds / 3600);
		totalSeconds %= 3600;
		let minutes = Math.floor(totalSeconds / 60);
		let seconds = Math.floor(totalSeconds % 60);
		let uptime = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;
		return message.channel.send(`I've been online for ${uptime}}.`);
	}

	public async chatInputRun(interaction: Command.ChatInputInteraction) { 
		let totalSeconds = (this.container.client.uptime as number / 1000);
		let days = Math.floor(totalSeconds / 86400);
		totalSeconds %= 86400;
		let hours = Math.floor(totalSeconds / 3600);
		totalSeconds %= 3600;
		let minutes = Math.floor(totalSeconds / 60);
		let seconds = Math.floor(totalSeconds % 60);
		let uptime = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;
		return interaction.reply({ content: `I've been online for ${uptime}}.`});
	}
}
