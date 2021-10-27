import type { Args, CommandOptions, CommandStore } from '@sapphire/framework';
import { ApplyOptions } from '@sapphire/decorators';
import { Message, MessageEmbed } from 'discord.js';
import HildaCommand from '#lib/HildaCommand';
import { BrandingColors } from '#utils/Branding';
import { PaginatedMessage } from '@sapphire/discord.js-utilities';
import { inlineCodeBlock } from '@sapphire/utilities';

@ApplyOptions<CommandOptions>({
	aliases: ['commands', 'cmd', 'cmds', 'h'],
	fullCategory: ['General', 'Chat Bot Info'],
	description: 'Shows you this command!',
	detailedDescription: 'You may also provide a command, which will return info about that command',
	preconditions: []
})
export default class HelpCommand extends HildaCommand {
	private commands!: CommandStore;

	public async messageRun(message: Message, args: Args) {
		const commandName = await args.pick('string').catch(() => null);

		if (!commandName) {
			this.commands = this.container.client.stores.get('commands');
			
			return this.menu(message)
		} else {
			this.commands = this.container.client.stores.get('commands');

			const command =
				this.commands.get(commandName?.toLowerCase() as string) || this.commands.find((command) => command.aliases.includes(commandName?.toLowerCase() as string));

			if (!command) throw 'Command not found. To view all commands run `help`';

			const embed = new MessageEmbed().setColor(BrandingColors.Secondary);

			if (command.aliases.length) embed.addField('❯ Aliases', command.aliases.map((alias) => `\`${alias}\``).join(' '));

			embed.addField('❯ Detailed Description', command.detailedDescription || 'No detailed description was provided.').setTimestamp();

			if (command.description) embed.setDescription(command.description);

			return message.channel.send({ embeds: [ embed ] });

		}
	}

	private async menu(message: Message) {
		this.commands = this.container.client.stores.get('commands');

		const paginatedMessage = new PaginatedMessage({
			template: new MessageEmbed()
				.setColor(BrandingColors.Primary)
				.setFooter('')
		});

		const commandsByCategory = new Map<string, HildaCommand[]>();

		for (const [, command] of this.commands.entries()) {
		const lowercaseCategory = command.category?.toLowerCase();

		if (!lowercaseCategory || lowercaseCategory === 'system' || lowercaseCategory === 'owner' || lowercaseCategory === 'test') {
			continue;
		}

		const entryFromMap = commandsByCategory.get(command.category as string);
		if (entryFromMap) {
			entryFromMap.push(command);
			commandsByCategory.set(command.category as string, entryFromMap);
		} else {
			commandsByCategory.set(command.category as string, [command]);
		}
		}

		for (const [category, commands] of commandsByCategory.entries()) {
		paginatedMessage //
			.addPageEmbed((embed) =>
			embed //
				.setTitle(category)
				.setDescription(commands.map(command => `• ${inlineCodeBlock(command.name)} → ${command.description}`).join('\n')))
		}

		paginatedMessage.run(message, message.author)
	}
}