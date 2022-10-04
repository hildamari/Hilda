import { ApplyOptions } from '@sapphire/decorators';
import { ChatInputCommand, Command } from '@sapphire/framework';
import type { Guild, Message, Role } from 'discord.js';

@ApplyOptions<Command.Options>({
    name: 'Subscribe',
	description: 'Gives the "Hilda Subscriber" role to those who want to be notified of new updates'
})
export class SubscribeCommand extends Command {
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
			idHints: ['1011088865995530250'],
		  }
		);
	}

	public async messageRun(message: Message) {
		if(message.guild?.id == '650595160849121300') {
			const hildaSubscriberRole = message.guild?.roles.cache.find((roles => roles.name === "Hilda Subscriber"));

            let guild = this.container.client.guilds.cache.get('907259574342537236') as Guild
            const member = await guild.members.fetch(message.author.id)
            const role = await guild.roles.fetch(hildaSubscriberRole?.id as string)
            if(member.roles.cache.has(hildaSubscriberRole?.id as string)) {
                await message.channel.send({ content: "The `Marianne Subscriber` role has been removed."})
            } else {
                member.roles.add(role as Role)
                await message.channel.send({ content: "The `Marianne Subscriber` role has been added."})
            }
            
        } else {
            await message.channel.send({ content: `You cannot use this command in this server. Please join the support server to obtain this role. https://discord.gg/WAVdN4E`})
        }
	}

	public async chatInputRun(interaction: Command.ChatInputInteraction) {
        if(interaction.guild?.id == '650595160849121300') {
			const hildaSubscriberRole = interaction.guild?.roles.cache.find((roles => roles.name === "Hilda Subscriber"));

            let guild = this.container.client.guilds.cache.get('907259574342537236') as Guild
            const member = await guild.members.fetch(interaction.user.id)
            const role = await guild.roles.fetch(hildaSubscriberRole?.id as string)
            if(member.roles.cache.has(hildaSubscriberRole?.id as string)) {
                await interaction.reply({ content: "The `Marianne Subscriber` role has been removed."})
            } else {
                member.roles.add(role as Role)
                await interaction.reply({ content: "The `Marianne Subscriber` role has been added."})
            }
            
        } else {
            await interaction.reply({ content: `You cannot use this command in this server. Please join the support server to obtain this role. https://discord.gg/WAVdN4E`})
        }
	}
}
