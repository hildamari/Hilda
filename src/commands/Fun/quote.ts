import { ApplyOptions } from '@sapphire/decorators';
import type { Args, CommandOptions } from '@sapphire/framework';
import { Message, MessageEmbed, TextChannel, } from 'discord.js';
import HildaCommand from '#lib/HildaCommand';
import { stripIndents } from 'common-tags';
// import { DurationFormatter } from '@sapphire/time-utilities';

@ApplyOptions<CommandOptions>({
    fullCategory: ['Fun'],
    detailedDescription: 'This command needs a message ID and this command must be ran in the same channel that the message ID came from',
	description: 'Post a message to your server\'s quote channel'
})
export default class QuoteCommand extends HildaCommand {
    public async messageRun(message: Message, args: Args) {
        const id = message.guild?.id as string;
        if(args.finished) {
            message.channel.send('You need to provide a message ID!');
        } else {
            const messageID = await args.pick('string');
            const selectQuery = `SELECT id, prefix, quotechannel FROM guild WHERE id=${id}`;
		this.container.database.query(selectQuery, (err, res) => {
			if (err) {
				return this.container.logger.error(err.stack);
			} else {
				let quoteChannel = res.rows[0].quotechannel;
                let prefix = res.rows[0].prefix;
                let quoteChannelID = message.guild?.channels.cache.find(channel => channel.name === `${quoteChannel}`)?.id as string;
                if(quoteChannel === '') {
                    message.channel.send("No quote channel has been configured!" + ` Use \`${prefix}conf set quoteChannel\` to set the quote channel.`)
                } else {
                    message.channel.messages.fetch(messageID)
                    .then(message => {
                        const fetchdMsg = message;
                        if(fetchdMsg.attachments.size == 0) {
                            const channelID = fetchdMsg.channel.id;
                            const user = this.container.client.users.cache.get(fetchdMsg.author.id);
                            const member = message.guild?.members.cache.get(fetchdMsg.author.id);
                            const timestamp = fetchdMsg.createdTimestamp;
                            const formatted = Intl.DateTimeFormat('en-US').format(timestamp)
        
                            const quoteEmbed = new MessageEmbed()
                                .setAuthor(fetchdMsg.author.username + "#" + fetchdMsg.author.discriminator, user?.displayAvatarURL())
                                .setColor(member?.displayHexColor as `#${string}`)
                                .setDescription(stripIndents`Posted in <#${channelID}> on ${formatted}:
                                \n${fetchdMsg.content}`)
                                .setFooter("on " + formatted)
                            const channel = message.guild?.channels.cache.get(quoteChannelID) as TextChannel;
                            // return message.channel.send('see console');
                            return channel?.send({ embeds: [ quoteEmbed ] });  
                        } else {
                            let url: string;
                            message.attachments.forEach(attachment => {
                                url = attachment.url;
                                const channelID = fetchdMsg.channel.id;
                                const user = this.container.client.users.cache.get(fetchdMsg.author.id);
                                const member = message.guild?.members.cache.get(fetchdMsg.author.id);
                                const timestamp = fetchdMsg.createdTimestamp;
                                const formatted = Intl.DateTimeFormat('en-US').format(timestamp)
            
                                const quoteEmbed = new MessageEmbed()
                                    .setAuthor(fetchdMsg.author.username + "#" + fetchdMsg.author.discriminator, user?.displayAvatarURL())
                                    .setColor(member?.displayHexColor as `#${string}`)
                                    .setDescription(`Posted in <#${channelID}>:`)
                                    .setImage(url)
                                    .setFooter("on " + formatted);
                                    const channel = message.guild?.channels.cache.get(quoteChannelID) as TextChannel;
                                return channel?.send({ embeds: [ quoteEmbed ] });  
                            });
                            return;
                        }
                    });
                }
            }
        })
        }
        // const messageID = await args.pick('string');
        
        
        // this.container.logger.info(messageID)
		
    }
}