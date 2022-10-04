import { ApplyOptions } from '@sapphire/decorators';
import { ChatInputCommand, Command } from '@sapphire/framework';
import { Emoji, Message, MessageEmbed } from 'discord.js';
import { fortunes } from '#data/fortunes';

@ApplyOptions<Command.Options>({
    name: 'fortune',
	fullCategory: ['Fun'],
	description: 'Get a random fortune'
})
export class FortuneCommand extends Command {
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
			idHints: ['1021172433421619241'],
		  }
		);
	}

    public async messageRun(message: Message) {
        const obj_keys = Object.keys(fortunes.fortunes);
		const ran_key = obj_keys[Math.floor(Math.random() * obj_keys.length)];
		const key = Number(ran_key);
		const selectedFortune = fortunes.fortunes[key];

		const fortune = this.container.client.emojis.cache.find((emoji: Emoji) => emoji.name === 'fortune');

		const fortuneEmbed = new MessageEmbed();

		fortuneEmbed
        .setColor('#ffff00')
        .addFields({ name: `${fortune} Fortune`, value: selectedFortune.msg });

		return message.channel.send({ embeds: [ fortuneEmbed ] });
    }

	public async chatInputRun(interaction: Command.ChatInputInteraction) {
        const obj_keys = Object.keys(fortunes.fortunes);
		const ran_key = obj_keys[Math.floor(Math.random() * obj_keys.length)];
		const key = Number(ran_key);
		const selectedFortune = fortunes.fortunes[key];

		const fortune = this.container.client.emojis.cache.find((emoji: Emoji) => emoji.name === 'fortune');

		const fortuneEmbed = new MessageEmbed();

		fortuneEmbed
        .setColor('#ffff00')
        .addFields({ name: `${fortune} Fortune`, value: selectedFortune.msg });

        return interaction.reply({ embeds: [ fortuneEmbed ] });
    }
}
