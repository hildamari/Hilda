/* eslint-disable no-else-return */
/* eslint-disable no-case-declarations */
import { BrandingColors } from '#utils/Branding';
import { ConfigurableGuildKeys } from '#utils/constants';
import { ApplyOptions } from '@sapphire/decorators';
import type { Args } from '@sapphire/framework';
import { ChannelMentionRegex, RoleMentionRegex} from '@sapphire/discord.js-utilities';
import { SubCommandPluginCommand, SubCommandPluginCommandOptions } from '@sapphire/plugin-subcommands';
import { Guild, Message, MessageEmbed } from 'discord.js';

@ApplyOptions<SubCommandPluginCommandOptions>({
	aliases: ['cws'],
	fullCategory: ['System'],
	description: 'A basic command with some subcommands',
	detailedDescription: 'Use `set` to set a key\nUse `help` to show the configuration help\nUse `keys` to show what keys you can configure\nUse `show` to show the configuration settings',
	subCommands: ['set', 'help', 'keys', { input: 'show', default: true }],
    preconditions: ['AdminOnly', 'ModeratorOnly'],
})
export class ConfCommand extends SubCommandPluginCommand {
	// Anyone should be able to view the result, but not modify
	public async show(message: Message) {
        const id = message.guild?.id as string;
		const selectQuery = `SELECT id, prefix, quotechannel, adminrole, modrole, disabledcommands FROM guild WHERE id=${id}`;
		this.container.database.query(selectQuery, (err, res) => {
			if (err) {
				return console.log(err.stack);
			} else {
				const { prefix } = res.rows[0];
				let quoteChannel = res.rows[0].quotechannel;
				let quoteChannelID = message.guild?.channels.cache.find(channel => channel.name === `${quoteChannel}`)?.toString();
				// console.log(res.rows[0])
				let adminRole = res.rows[0].adminrole;
				let adminRoleID = message.guild?.roles.cache.find(role => role.name === `${adminRole}`)?.toString();
                let modRole = res.rows[0].modrole;
				let modRoleID = message.guild?.roles.cache.find(role => role.name === `${modRole}`)?.toString();
				let disabledCommands = res.rows[0].disabledcommands;

				if (quoteChannel === null || quoteChannel === '' || quoteChannel === undefined) {
					quoteChannel = 'Not set';
				}
				if (adminRole === null || adminRole === '' || adminRole === undefined) {
					adminRole = 'Not set';
				}
				if (modRole === null || modRole === '' || modRole === undefined) {
					modRole = 'Not set';
				}
				if (disabledCommands === null) {
					disabledCommands = 'Not set';
				}

                const showEmbed = new MessageEmbed()
                .setTitle('❯ Guild Configuration')
                .setColor(BrandingColors.Secondary)
                .setDescription(
                    `Prefix → ${prefix}
                    Quotes Channel → ${quoteChannelID}
					Admin Role → ${adminRoleID}
					Mod Role → ${modRoleID}
					Disabled Commands → ${disabledCommands}`
                )
                .setTimestamp()

				return message.channel.send({ embeds: [showEmbed] });
			}
		});
		// return send(message, 'Showing!');
	}

	public async set(message: Message, args: Args) {
		const key = await args.pick('string');
		let value = await args.pick('string');
		// console.log(key, value);
		value = await this.resolveValue(message.guild as Guild, key, value);
		console.log(value);
		// console.log(key, value)
		const id = message.guild?.id as string;
		switch (key) {
			case 'prefix':
				const updatePrefixIntoQuery = `UPDATE guild SET prefix = '${value}' WHERE id=${id}`;
				this.container.database.query(updatePrefixIntoQuery, (err) => {
					if (err) {
						return console.log(err.stack);
					} else {
						return message.channel.send(`Successfully set ${key} to \`${value}\`. To view current configurations run \`conf show\``);
					}
				});
				break;
			case 'modRole':
				const updateModRoleIntoQuery = `UPDATE guild SET modrole = '${value}' WHERE id = ${id}`;
				this.container.database.query(updateModRoleIntoQuery, (err) => {
					if (err) {
						return console.log(err.stack);
					} else {
						return message.channel.send(`Successfully set ${key} to \`${value}\`. To view current configurations run \`conf show\``);
					}
				});
				break;
			case 'adminRole':
				const updateAdminRoleIntoQuery = `UPDATE guild SET adminrole = '${value}' WHERE id=${id}`;
				this.container.database.query(updateAdminRoleIntoQuery, (err) => {
					if (err) {
						return console.log(err.stack);
					} else {
						return message.channel.send(`Successfully set ${key} to \`${value}\`. To view current configurations run \`conf show\``);
					}
				});
				break;
			case 'quoteChannel':
				// const updateQuoteIntoQuery = `UPDATE guilds SET quotechannel = ${key.toString()} WHERE id=${id}`
				this.container.database.query(`UPDATE guild SET quotechannel = '${value}' WHERE id = ${id}`, (err) => {
					if (err) {
						return console.log(err.stack);
					} else {
						return message.channel.send(`Successfully set ${key} to \`${value}\`. To view current configurations run \`conf show\``);
					}
				});
				break;
            case 'announcementChannel':
                const updateAnnouncementIntoQuery = `UPDATE guild SET announcementchannel = '${value}' WHERE id = ${id}`;
                this.container.database.query(updateAnnouncementIntoQuery, (err) => {
                    if (err) {
                        return console.log(err.stack);
                    } else {
                        return message.channel.send(`Successfully set ${key} to \`${value}\`. To view current configurations run \`conf show\``);
                    }
                });
                break;
		}
    }

	public async help(message: Message) {
        const id = message.guild?.id as string;
		const selectQuery = `SELECT id, prefix FROM guild WHERE id=${id}`;
        this.container.database.query(selectQuery, (err, res) => {
			if (err) {
				return console.log(err.stack);
			} else {
				const { prefix } = res.rows[0];
                const helpEmbed = new MessageEmbed()
                .setColor(BrandingColors.Primary)
                .setTitle('Configuration Help')
                .addField('❯ Show', "This action will display the current guild's configuration.")
                .addField('❯ Keys', 'This action will display all configurable keys which are used to manage guild configurations.')
                .addField('❯ Set', `This action will set a key that is given to the given value.\nYou must provide a configurable key. To view all the keys run command \`${prefix}conf keys\`.\nYou must also provide a configurable value for each key.\n- Channels, you can provide a mention, id or name`);
                return message.channel.send({ embeds: [helpEmbed] });
            }
        });
		// return send(message, 'Help!');
	}

	public async keys(message: Message) {
        const keysEmbed = new MessageEmbed()
        .setColor(BrandingColors.Secondary)
        .setTitle('❯ Configurable Keys')
        .setDescription(Object.entries(ConfigurableGuildKeys).map(([name, key]) => `**${name}** → \`${key}\``).join('\n'))
        .setTimestamp();
        return message.channel.send({ embeds: [keysEmbed] });
	}

    private async resolveValue(guild: Guild, key: string, value: string) {
		// console.log(key)
		switch (key) {
			case 'prefix': {
                if (value.length > 5) throw 'Prefix invalid. Prefixes cannot be longer than 5 characters.';
				value = value.toLowerCase().replace(/@here/, '');
				if (!value.length) throw 'Prefix invalid. Prefixes cannot be a mention.';

				return value;
            }
			case ConfigurableGuildKeys.QuoteChannel: {
				const id = ChannelMentionRegex.exec(value);
				const channel = id
					? guild.channels.cache.get(id![1])
					: guild.channels.cache.get(value) ??
					  guild.channels.cache.find((c) => c.name.toLowerCase() === value.toLowerCase() && c.type === 'GUILD_TEXT');

				if (!channel) throw 'Channel not found. Please make sure the channel exists.';

				return channel.name;
			}
			case ConfigurableGuildKeys.AdminRole:
			case ConfigurableGuildKeys.ModRole: {
				const id = RoleMentionRegex.exec(value);
				const role = id
					? guild.roles.cache.get(id![1])
					: guild.roles.cache.get(value) ??
					  guild.roles.cache.find((c) => c.name.toLowerCase() === value.toLowerCase());

				if (!role) throw 'Role not found. Please make sure the channel exists.';

				return role.name;
			}
            default:
				throw 'Value non-configurable.';
		}
            
    }

}
