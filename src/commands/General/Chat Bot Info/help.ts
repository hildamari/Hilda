import { ApplyOptions } from '@sapphire/decorators';
import { Args, ChatInputCommand, Command, CommandStore } from '@sapphire/framework';
import { Message, MessageEmbed } from 'discord.js';
import { inlineCodeBlock } from '@sapphire/utilities';
import { PaginatedMessage } from '@sapphire/discord.js-utilities';
import { BrandingColors } from '#lib/utils/Branding';

@ApplyOptions<Command.Options>({
    aliases: ['commands', 'cmd', 'cmds', 'h'],
	fullCategory: ['General', 'Chat Bot Info'],
	description: 'Shows you this command!',
	detailedDescription: 'You may also provide a command, which will return info about that command',
})
export class HelpCommand extends Command {
    private commands!: CommandStore;

	// Register slash and context menu command
	public override registerApplicationCommands(
		registry: ChatInputCommand.Registry
	  ) {
		registry.registerChatInputCommand(
		  (builder) =>
			builder
			  .setName(this.name)
			  .setDescription(this.description)
			  .setDMPermission(false)
              .addStringOption((option) =>
              option //
                .setName('command')
                .setDescription('Command name to get info for')
                .setRequired(false)
            ),
		//   {
		// 	idHints: ['1013302072571068476'],
		//   }
		);
	}

    public async messageRun(message: Message, args: Args) {

        const commandName = await args.pick('string').catch(() => null);

		if (!commandName) {
			this.commands = this.container.client.stores.get('commands');
			
			return this.menuMessage(message)
		} else {
			this.commands = this.container.client.stores.get('commands');

			const command =
				this.commands.get(commandName?.toLowerCase() as string) || this.commands.find((command) => command.aliases.includes(commandName?.toLowerCase() as string));

			if (!command) throw 'Command not found. To view all commands run `help`';

			const embed = new MessageEmbed().setColor(BrandingColors.Secondary);

			if (command.aliases.length) embed.addFields({ name: '❯ Aliases', value: `${command.aliases.map((alias) => `\`${alias}\``).join(' ')}`, inline: false });

			embed.addFields({ name: '❯ Detailed Description', value: `${command.detailedDescription}` || 'No detailed description was provided.', inline: false }).setTimestamp();

			if (command.description) embed.setDescription(command.description);

			return message.channel.send({ embeds: [ embed ] });

		}
    }

	public async chatInputRun(interaction: Command.ChatInputInteraction) {
        const commandName = interaction.options.getString('command', false)?.toLowerCase();

        if (!commandName) {
			this.commands = this.container.client.stores.get('commands');
			
			return this.menuInteraction(interaction)
		} else {
			this.commands = this.container.client.stores.get('commands');

			const command =
				this.commands.get(commandName?.toLowerCase() as string) || this.commands.find((command) => command.aliases.includes(commandName?.toLowerCase() as string));

			if (!command) throw 'Command not found. To view all commands run `help`';

			const embed = new MessageEmbed().setColor('#aad0fa');

			if (command.aliases.length) embed.addFields({ name: '❯ Aliases', value: `${command.aliases.map((alias) => `\`${alias}\``).join(' ')}`, inline: false });

			embed.addFields({ name: '❯ Detailed Description', value: `${command.detailedDescription}` || 'No detailed description was provided.', inline: false }).setTimestamp();

			if (command.description) embed.setDescription(command.description);

			return interaction.reply({ embeds: [ embed ] });

		}
    }

    private async menuInteraction(interaction: Command.ChatInputInteraction) {
        this.commands = this.container.client.stores.get('commands');

		const paginatedMessage = new PaginatedMessage({
			template: new MessageEmbed()
                .setDescription('All of these commands are slash commands. You must use `/` to use them.\nFor example, `/ping`.')
				.setColor('#aad0fa')
				// .setFooter('')
		});

		const commandsByCategory = new Map<string, Command[]>();

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

        return paginatedMessage.run(interaction)
    }

    private async menuMessage(message: Message) {
		this.commands = this.container.client.stores.get('commands');

		const paginatedMessage = new PaginatedMessage({
			template: new MessageEmbed()
				.setColor(BrandingColors.Primary)
				.setFooter('')
		});

		const commandsByCategory = new Map<string, Command[]>();

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
