import { ApplyOptions } from '@sapphire/decorators';
import { Args, ChatInputCommand, Command } from '@sapphire/framework';
import { Message, MessageEmbed } from 'discord.js';
import { predictions } from '#data/predictions';
import { BrandingColors } from '#lib/utils/Branding';

@ApplyOptions<Command.Options>({
    name: '8ball',
	fullCategory: ['Fun'],
	description: 'Ask the eightball a question, get a random response.'
})
export class EightBallCommand extends Command {
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
                .setName('question')
                .setDescription('Ask the eightball a question, get a random response.')
                .setRequired(true)
            ),
		  {
			idHints: ['1013302072571068476'],
		  }
		);
	}

    public async messageRun(message: Message, args: Args) {
        const question = await args.rest('string');
		const eightballEmbed = new MessageEmbed()
			.setColor(BrandingColors.Primary)
			.addFields({ name: `${message.author.tag} asked`, value: `${question}` })
			.addFields({ name: ":8ball:'s response", value: this.getResult() });
		return message.channel.send({ embeds: [ eightballEmbed ] });
    }

	public async chatInputRun(interaction: Command.ChatInputInteraction) {
        const eightballEmbed = new MessageEmbed()

        const question = interaction.options.getString('question', true);

		eightballEmbed
            .setColor(BrandingColors.Primary)
			.addFields({ name: `${interaction.user.tag} asked`, value: `${question}`, inline: false })
			.addFields({ name: ":8ball:'s response", value: `${this.getResult()}`, inline: false });
        return interaction.reply({ embeds: [ eightballEmbed ] });
    }

	private randomInt(low: number, high: number) {
		return Math.floor(Math.random() * (high - low) + low);
	}

	private getResult() {
		return predictions[this.randomInt(0, predictions.length)];
	}
}
