import { Subcommand } from '@sapphire/plugin-subcommands';
import { ApplyOptions } from '@sapphire/decorators';
import type { Args, ChatInputCommand, Command } from '@sapphire/framework';
import { Message, MessageEmbed } from 'discord.js';
import { BrandingColors } from '#lib/utils/Branding';
import { isNullishOrEmpty } from '@sapphire/utilities';

@ApplyOptions<Subcommand.Options>({
	name: 'Conf',
    description: 'View settings, change guild prefix, and change guild quote channel',
    preconditions: ['AdminOnly', 'ModeratorOnly'],
    subcommands: [
		{
			name: 'prefix',
            messageRun: 'setMsgPrefix',
			chatInputRun: 'setIntPrefix'
		},
		{
			name: 'quote',
            messageRun: 'setQuoteMsgChannel',
			chatInputRun: 'setQuoteIntChannel'
		},
		{
			name: 'show',
            messageRun: 'showMsgSettings',
            chatInputRun: 'showIntSettings',
            default: true
		}
	]
})

// Extend `Subcommand` instead of `Command`
export class ConfCommand extends Subcommand {
    public override registerApplicationCommands(registry: ChatInputCommand.Registry) {
		registry.registerChatInputCommand(
		  (builder) =>
			builder
			  .setName(this.name)
			  .setDescription(this.description)
              .addSubcommand(subcommand =>
                subcommand
                    .setName('show')
                    .setDescription('Show your guild\'s current settiings'))
              .addSubcommand(subcommand => 
                subcommand
                    .setName('prefix')
                    .setDescription('Set the bot\'s prefix')
                    .addStringOption((option => 
                        option
                            .setName('prefix')
                            .setDescription('What do you want to set the bot\'s prefix to?')
                            .setRequired(true))))
              .addSubcommand(subcommand => 
                subcommand
                    .setName('quote')
                    .setDescription('Set the server\'s quote channel')
                    .addStringOption((option => 
                        option
                            .setName('quote')
                            .setDescription('Which channel do you want to set the quote channel to? Use the channel\'s ID')
                            .setRequired(true)))),
              {
		    	    idHints: ['1021173829357293729'],
		      }
            );
    }

    public async setMsgPrefix(message: Message, args: Args) {
        console.log(this.container.client.fetchPrefix.toString())
        const guild = await this.container.prisma.guild.findUnique({ where: { id: message.guild?.id } });

        if(!guild) {
            message.channel.send('Your server was not found in the database. Adding your server to the database now. Please run this command again.')
            await this.container.prisma.guild.create({
                data: {
                  id: message.guild?.id as string,
                  prefix: 'h!',
                  quoteChannel: 'N/A'
                },
            })
        } else {
            const newPrefix = await args.rest('string');
            if(newPrefix == '/') {
                message.channel.send(`You cannot use "/" as a prefix. That is only for slash commands.`)
            } else {
                await this.container.prisma.guild.update({
                    where: { id: message.guild?.id },
                    data: { prefix: newPrefix },
                  })
                message.channel.send(`This server\'s prefix has been changed to \'${newPrefix.trimStart()}\'`)
            }
            
        }
    }

    public async setIntPrefix(interaction: Command.ChatInputInteraction) {
        const guild = await this.container.prisma.guild.findUnique({ where: { id: interaction.guild?.id } });

        if(!guild) {
            interaction.reply('Your server was not found in the database. Adding your server to the database now. Please run this command again.')
            await this.container.prisma.guild.create({
                data: {
                  id: interaction.guild?.id as string,
                  prefix: 'h!',
                  quoteChannel: 'N/A'
                },
            })
        } else {
            const newPrefix = interaction.options.getString('prefix', true);
            if(newPrefix == '/') {
                interaction.reply(`You cannot use "/" as a prefix. That is only for slash commands.`)
            } else {
                await this.container.prisma.guild.update({
                    where: { id: interaction.guild?.id },
                    data: { prefix: newPrefix },
                  })
                interaction.reply(`This server\'s prefix has been changed to \'${newPrefix.trimStart()}\'`)
            }
            
        }
    }

    public async setQuoteMsgChannel(message: Message, args: Args) {
        const guild = await this.container.prisma.guild.findUnique({ where: { id: message.guild?.id } });

        if(!guild) {
            message.channel.send('Your server was not found in the database. Adding your server to the database now. Please run this command again.')
            await this.container.prisma.guild.create({
                data: {
                  id: message.guild?.id as string,
                  prefix: 'h!',
                  quoteChannel: 'N/A'
                },
            })
        } else {
            const quoteChannel = await args.rest('string');
            console.log(quoteChannel);
            if(isNullishOrEmpty(quoteChannel)) {
                message.channel.send(`You did not enter a quote channel ID. `)
            } else {
                await this.container.prisma.guild.update({
                    where: { id: message.guild?.id },
                    data: { quoteChannel: quoteChannel },
                })
                message.channel.send(`This server\'s quote channel has been changed to <#${quoteChannel}>`)
            }
        }
    }

    public async setQuoteIntChannel(interaction: Command.ChatInputInteraction) {
        const guild = await this.container.prisma.guild.findUnique({ where: { id: interaction.guild?.id } });

        if(!guild) {
            interaction.reply('Your server was not found in the database. Adding your server to the database now. Please run this command again.')
            await this.container.prisma.guild.create({
                data: {
                  id: interaction.guild?.id as string,
                  prefix: 'h!',
                  quoteChannel: 'N/A'
                },
            })
        } else {
            const quoteChannel = interaction.options.getString('quote', true);
            console.log(quoteChannel)
            if(isNullishOrEmpty(quoteChannel)) {
                interaction.reply(`You did not enter a quote channel ID.`)
            } else {
                await this.container.prisma.guild.update({
                    where: { id: interaction.guild?.id },
                    data: { quoteChannel: quoteChannel },
                  })
                interaction.reply(`This server\'s quote channel has been changed to <#${quoteChannel.trimStart()}>`)
            }
        }
    }

    public async showMsgSettings(message: Message) {
        const guild = await this.container.prisma.guild.findUnique({ where: { id: message.guild?.id } });
        if(!guild) {
            await this.container.prisma.guild.create({
                data: {
                    id: message.guild?.id as string,
                    prefix: 'h!',
                    quoteChannel: 'N/A'
                },
            })
            return message.channel.send('Your server was not found in the database. Adding your server to the database now. Please run this command again.')
        } else {
            let prefix = guild.prefix
            let id = guild.id
            let quoteChannel = guild.quoteChannel.trimStart()
            let guildName = this.container.client.guilds.cache.get(id)
            const settingsEmbed = new MessageEmbed()
                .setColor(BrandingColors.Primary)
                .addFields({ name: `Guild Name`, value: `${guildName}`, inline: false })
                .addFields({ name: 'Prefix', value: prefix, inline: false })
                .addFields({ name: 'Quote Channel', value: `<#${quoteChannel}>`, inline: false })
            return message.channel.send({ embeds: [settingsEmbed] });
        }
    }

    public async showIntSettings(interaction: Command.ChatInputInteraction) {
        const guild = await this.container.prisma.guild.findUnique({ where: { id: interaction.guild?.id } });
        if(!guild) {
            interaction.reply('Your server was not found in the database. Adding your server to the database now. Please run this command again.')
            await this.container.prisma.guild.create({
                    data: {
                    id: interaction.guild?.id as string,
                    prefix: 'h!',
                    quoteChannel: 'N/A'
                },
            })
        } else {
            let prefix = guild.prefix
            let id = guild.id
            let quoteChannel = guild.quoteChannel.trimStart()
            console.log(quoteChannel)
            let guildName = this.container.client.guilds.cache.get(id)
            const settingsEmbed = new MessageEmbed()
                .setColor(BrandingColors.Primary)
                .addFields({ name: `Guild Name`, value: `${guildName}`, inline: false })
                .addFields({ name: 'Prefix', value: prefix, inline: false })
                .addFields({ name: 'Quote Channel', value: `<#${quoteChannel}>`, inline: false })
            return interaction.reply({ embeds: [settingsEmbed] });
        }

    }
}