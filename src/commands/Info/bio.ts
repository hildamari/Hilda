import { ApplyOptions } from '@sapphire/decorators';
import { ChatInputCommand, Command, CommandOptions } from '@sapphire/framework';
import { Message, MessageAttachment, MessageEmbed } from 'discord.js';
import { BrandingColors, Character, Relatives } from '#lib/utils/Branding';

@ApplyOptions<CommandOptions>({
	fullCategory: ['Info'],
	description: "Shows you useful information about the bot's character."
})
export default class BioCommand extends Command {
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
			idHints: ['1021174721112457269'],
		  }
		);
	}
    
	public async messageRun(message: Message) {
        const file = new MessageAttachment('./src/lib/data/assets/images/hilda.png');
		const aboutEmbed = new MessageEmbed()
			.setColor(BrandingColors.Primary)
			.setThumbnail('attachment://hilda.png')
            .setTitle(`${Character.Name}`)
			.setDescription(
				'Hilda Valentine Goneril is a playable character appearing in Fire Emblem: Three Houses. She is a student at the Officers Academy and a member of the Golden Deer.'
			)
            .addFields({ name: 'Gender', value: Character.Gender, inline: true })
            .addFields({ name: 'Fódlan Birthday', value: Character.FodlanBirthday, inline: true })
            .addFields({ name: 'Birthday', value: Character.Birthday, inline: true })
            .addFields({ name: 'Age', value: Character.Age, inline: true })
            .addFields({ name: 'Hair Color', value: Character.HairColor, inline: true })
            .addFields({ name: 'Eye Color', value: Character.EyeColor, inline: true })
            .addFields({ name: 'Hometown', value: Character.Hometown, inline: true })
            .addFields({ name: 'Crest', value: Character.Crest, inline: true })
            .addFields({ name: 'Hometown', value: Character.Hometown, inline: true })
            .addFields({ name: 'Height', value: Character.Height, inline: true })
            .addFields({ name: 'Occupation', value: Character.Occupation, inline: true })
            .addFields({ name: 'Faction', value: Character.Faction, inline: true })
            .addFields({ name: 'Starting Class', value: Character.StartingClass, inline: true })
            .addFields({ name: 'Nationality', value: Character.Nationality, inline: true })
            .addFields({ name: 'Residence', value: Character.Residence, inline: true })
            .addFields({ name: 'Relatives', value: Relatives.join(', '), inline: true })

		return message.channel.send({ embeds: [aboutEmbed], files: [file] });
	}

    public async chatInputRun(interaction: Command.ChatInputInteraction) {
        const file = new MessageAttachment('./src/lib/data/assets/images/hilda.png');
		const aboutEmbed = new MessageEmbed()
			.setColor(BrandingColors.Primary)
			.setThumbnail('attachment://hilda.png')
            .setTitle(`${Character.Name}`)
			.setDescription(
				'Hilda Valentine Goneril is a playable character appearing in Fire Emblem: Three Houses. She is a student at the Officers Academy and a member of the Golden Deer.'
			)
            .addFields({ name: 'Gender', value: Character.Gender, inline: true })
            .addFields({ name: 'Fódlan Birthday', value: Character.FodlanBirthday, inline: true })
            .addFields({ name: 'Birthday', value: Character.Birthday, inline: true })
            .addFields({ name: 'Age', value: Character.Age, inline: true })
            .addFields({ name: 'Hair Color', value: Character.HairColor, inline: true })
            .addFields({ name: 'Eye Color', value: Character.EyeColor, inline: true })
            .addFields({ name: 'Hometown', value: Character.Hometown, inline: true })
            .addFields({ name: 'Crest', value: Character.Crest, inline: true })
            .addFields({ name: 'Hometown', value: Character.Hometown, inline: true })
            .addFields({ name: 'Height', value: Character.Height, inline: true })
            .addFields({ name: 'Occupation', value: Character.Occupation, inline: true })
            .addFields({ name: 'Faction', value: Character.Faction, inline: true })
            .addFields({ name: 'Starting Class', value: Character.StartingClass, inline: true })
            .addFields({ name: 'Nationality', value: Character.Nationality, inline: true })
            .addFields({ name: 'Residence', value: Character.Residence, inline: true })
            .addFields({ name: 'Relatives', value: Relatives.join(', '), inline: true })

		return interaction.reply({ embeds: [aboutEmbed], files: [file] });
    }
}
