import { ApplyOptions } from '@sapphire/decorators';
import type { CommandOptions } from '@sapphire/framework';
import { Message, MessageAttachment, MessageEmbed } from 'discord.js';
import HildaCommand from '#lib/HildaCommand';
import { BrandingColors, Character, Relatives } from '#utils/Branding';

@ApplyOptions<CommandOptions>({
	fullCategory: ['Info'],
	description: "Shows you useful information about the bot's character."
})
export default class AboutCommand extends HildaCommand {
	public async messageRun(message: Message) {
        const file = new MessageAttachment('./src/lib/data/assets/images/hilda.png');
		const aboutEmbed = new MessageEmbed()
			.setColor(BrandingColors.Primary)
			.setThumbnail('attachment://hilda.png')
            .setTitle(`${Character.Name}`)
			.setDescription(
				'Hilda Valentine Goneril is a playable character appearing in Fire Emblem: Three Houses. She is a student at the Officers Academy and a member of the Golden Deer.'
			)
            .addField('Gender', Character.Gender, true)
            .addField('Fódlan Birthday', Character.FodlanBirthday, true)
            .addField('Birthday', Character.Birthday, true)
            .addField('Age', Character.Age, true)
            .addField('Hair Color', Character.HairColor, true)
            .addField('Eye Color', Character.EyeColor, true)
            .addField('Hometown', Character.Hometown, true)
            .addField('Crest', Character.Crest, true)
            .addField('Hometown', Character.Hometown, true)
            .addField('Height', Character.Height, true)
            .addField('Occupation', Character.Occupation, true)
            .addField('Faction', Character.Faction, true)
            .addField('Starting Class', Character.StartingClass, true)
            .addField('Nationality', Character.Nationality, true)
            .addField('Residence', Character.Residence, true)
            .addField('Relatives', Relatives.join(', '), true)

		return message.channel.send({ embeds: [aboutEmbed], files: [file] });
	}
}
