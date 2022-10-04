import { ApplyOptions } from '@sapphire/decorators';
import { Args, ChatInputCommand, Command } from '@sapphire/framework';
import { Timestamp } from '@sapphire/time-utilities';
import { GuildEmoji, GuildMember, Message, MessageEmbed } from 'discord.js';

@ApplyOptions<Command.Options>({
    name: 'emojiinfo',
	description: "Get info about a specific emoji"
})
export class EmojiInfoCommand extends Command {
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
                .setName('emoji')
                .setDescription('Get info about a specific emoji')
                .setRequired(true)),
		  {
			idHints: ['1021183667558678589'],
		  }
		);
	}

	public async messageRun(message: Message, args: Args) {
		const emojiResolvable = await args.pick('emoji');

		if (!emojiResolvable) throw 'Emoji not found.';

		const emoji = message.guild?.emojis.resolve(emojiResolvable as GuildEmoji);
		const emojiID = emoji?.id;
		const hexColor = message.member?.displayHexColor as `#${string}`;
		const timestamp = new Timestamp('dddd, MMMM DD YYYY, h:mm:ss a');
		const formatted = timestamp.display(emoji?.createdAt);

		// const emojiInfoEmbed = new MessageEmbed();
		// emojiInfoEmbed.setColor(hexColor as `#${string}`).setTitle(`${emoji} ${emoji?.name}`).addField('ID', emojiID as string).addField('Added to Server', formatted);
		const emojiInfoEmbed = new MessageEmbed()
		.setColor(hexColor)
		.setTitle(`${emoji} ${emoji?.name}`)
		.addFields({ name: 'ID', value: emojiID as string })
		.addFields({ name: 'Added to Server', value: formatted })
		.setTimestamp();

		return message.channel.send({ embeds: [emojiInfoEmbed] });
	}

	public async chatInputRun(interaction: Command.ChatInputInteraction) {
        const emojiName = interaction.options.getString('emoji', true);

		if (!emojiName) throw 'Emoji not found.';

		const emoji = interaction.guild?.emojis.resolve(emojiName);
		const emojiID = emoji?.id;
		const member = interaction?.member as GuildMember
		const hexColor = member.displayHexColor as `#${string}`;
		const timestamp = new Timestamp('dddd, MMMM DD YYYY, h:mm:ss a');
		const formatted = timestamp.display(emoji?.createdAt);

		// const emojiInfoEmbed = new MessageEmbed();
		// emojiInfoEmbed.setColor(hexColor as `#${string}`).setTitle(`${emoji} ${emoji?.name}`).addField('ID', emojiID as string).addField('Added to Server', formatted);
		const emojiInfoEmbed = new MessageEmbed()
		.setColor(hexColor)
		.setTitle(`${emoji} ${emoji?.name}`)
		.addFields({ name: 'ID', value: emojiID as string })
		.addFields({ name: 'Added to Server', value: formatted })
		.setTimestamp();

		return interaction.reply({ embeds: [emojiInfoEmbed] });
	}
}