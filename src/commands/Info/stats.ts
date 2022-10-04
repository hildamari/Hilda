import { ApplyOptions } from '@sapphire/decorators';
import { ChatInputCommand, Command, CommandOptions } from '@sapphire/framework';
import { roundNumber } from '@sapphire/utilities';
import { Message, MessageEmbed } from 'discord.js';
import { cpus } from 'os';
import { format } from '#lib/utils/durationFormat';
import { BrandingColors } from '#lib/utils/Branding';

@ApplyOptions<CommandOptions>({
	name: 'stats',
    fullCategory: ['Info'],
	description: 'View bot statistics'
})
export default class StatsCommand extends Command {
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
			idHints: ['1021174723335430214'],
		  }
		);
	}

	public async messageRun(message: Message) {
		return message.channel.send({ embeds: [await this.buildEmbed()] });
	}

	public async chatInputRun(interaction: Command.ChatInputInteraction) {
		return interaction.reply({ embeds: [await this.buildEmbed()]})
	}

	private async buildEmbed() {
		const { generalStatistics, serverStatistics } = this;
		return new MessageEmbed()
			.setColor(BrandingColors.Primary)
			.setAuthor({ name: this.container.client.user!.username, iconURL: this.container.client.user!.displayAvatarURL({ format: 'png' })})
			.addFields({
				name: 'Connected To',
				value: [
					`**Servers**: ${generalStatistics.guilds}`,
					`**Users**: ${generalStatistics.members}`,
					`**Channels**: ${generalStatistics.channels}`
				].join('\n'),
				inline: true
			})
			.addFields({
				name: 'Server Stats',
				value: [
					`**CPU Load**: ${serverStatistics.cpuLoad.map((load) => `${load}%`).join(' | ')}`,
					`**RAM Used**: ${serverStatistics.ramUsed} (Total: ${serverStatistics.ramTotal})`,
					`**Uptime**: ${format(this.container.client.uptime ?? 0)}`
				].join('\n'),
				inline: true
			});
	}

	private get generalStatistics() {
		return {
			guilds: this.container.client.guilds.cache.size.toLocaleString('en-US'),
			// eslint-disable-next-line @typescript-eslint/restrict-plus-operands
			members: this.container.client.guilds.cache.reduce((a, b) => b.memberCount + a, 0).toLocaleString('en-US'),
			channels: this.container.client.channels.cache.size.toLocaleString('en-US')
		};
	}

	private get serverStatistics() {
		const usage = process.memoryUsage();
		return {
			cpuLoad: cpus().map(({ times }) => roundNumber(((times.user + times.nice + times.sys + times.irq) / times.idle) * 10000) / 100),
			ramTotal: `${Math.round(100 * (usage.heapTotal / 1048576)) / 100}MB`,
			ramUsed: `${Math.round(100 * (usage.heapUsed / 1048576)) / 100}MB`
		};
	}
}
