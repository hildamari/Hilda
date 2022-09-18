import { BrandingColors } from '#lib/utils/Branding';
import { ApplyOptions } from '@sapphire/decorators';
import { ChatInputCommand, Command } from '@sapphire/framework';
import { Message, MessageEmbed } from 'discord.js';

@ApplyOptions<Command.Options>({
    name: 'about',
	description: 'Replies with information about the bot',
	fullCategory: ['Info']
})
export class AboutCommand extends Command {
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
	
		//   {
		// 	idHints: ['1014618954943176854'],
		//   }
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

        const aboutEmbed = new MessageEmbed()
             .setColor(BrandingColors.Primary)
             .setDescription("Hilda is brought to you by memes for memes.")
             .setAuthor({ name: `${this.container.client.user?.username} Stats`, iconURL: this.container.client.user?.displayAvatarURL({ format: 'png' })})
            .addFields({ name: 'Uptime', value: `${uptime}`, inline: true})
            .addFields({ name: 'License', value: 'Apache 2.0', inline: true})
            .addFields({ name: 'Source Code', value: 'https://github.com/hildamari/Hilda', inline: true})
			.addFields({ name: 'Support Server', value: 'https://discord.gg/WAVdN4E', inline: false});
//         aboutEmbed.addField('Documentation', 'https://hilda.pw', true);

		return message.channel.send({ embeds: [ aboutEmbed ] });
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

        const aboutEmbed = new MessageEmbed()
             .setColor(BrandingColors.Primary)
             .setDescription("Hilda is brought to you by memes for memes.")
             .setAuthor({ name: `${this.container.client.user?.username} Stats`, iconURL: this.container.client.user?.displayAvatarURL({ format: 'png' })})
            .addFields({ name: 'Uptime', value: `${uptime}`, inline: true})
            .addFields({ name: 'License', value: 'Apache 2.0', inline: true})
            .addFields({ name: 'Source Code', value: 'https://github.com/hildamari/Hilda', inline: true})
			.addFields({ name: 'Support Server', value: 'https://discord.gg/WAVdN4E', inline: false});
//         aboutEmbed.addField('Documentation', 'https://hilda.pw', true);

		return interaction.reply({ embeds: [ aboutEmbed ] });
	}
}
