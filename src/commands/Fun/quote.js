const { Command } = require('klasa');
const { MessageEmbed } = require('discord.js');
const moment = require('moment');
const { stripIndents } = require('common-tags');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, { 
            aliases: ['add'],
            description: 'Quote a message using a message ID',
            usage: "<quote:string>"
        });
    }

    run(msg, [quote]) {
        let quoteChannel = msg.guild.settings.get('quoteChannel');
        if(!quoteChannel) {
            msg.send("No quote channel has been configured!" + ` Use \`${msg.guild.settings.get('prefix')}conf set quoteChannel\` to set the quote channel.`)
        } else {
            msg.channel.messages.fetch(quote)
            .then(message => {
                const fetchdMsg = message;
                if(fetchdMsg.attachments.size == 0) {
                    const channelID = fetchdMsg.channel.id;
                    const user = this.client.users.get(fetchdMsg.author.id);
                    const member = msg.guild.members.get(fetchdMsg.author.id);
                    const timestamp = fetchdMsg.createdTimestamp;
                    const formatted = moment(timestamp).format('L');

                    const quoteEmbed = new MessageEmbed()
                        .setAuthor(fetchdMsg.author.username + "#" + fetchdMsg.author.discriminator, user.displayAvatarURL())
                        .setColor(member.displayHexColor)
                        .setDescription(stripIndents`Posted in <#${channelID}>:
                        \n${fetchdMsg.content}`)
                        .setFooter("on " + formatted);
                    const channel = this.client.channels.get(msg.guild.settings.get('quoteChannel'));
                    return channel.send(quoteEmbed);  
                } else {
                    let url;
                    message.attachments.forEach(attachment => {
                        url = attachment.url;
                    });
                    const channelID = fetchdMsg.channel.id;
                    const user = this.client.users.get(fetchdMsg.author.id);
                    const member = msg.guild.members.get(fetchdMsg.author.id);
                    const timestamp = fetchdMsg.createdTimestamp;
                    const formatted = moment(timestamp).format('L');

                    const quoteEmbed = new MessageEmbed()
                        .setAuthor(fetchdMsg.author.username + "#" + fetchdMsg.author.discriminator, user.displayAvatarURL())
                        .setColor(member.displayHexColor)
                        .setDescription(`Posted in <#${channelID}>:`)
                        .setImage(url)
                        .setFooter("on " + formatted);
                    const channel = this.client.channels.get(msg.guild.settings.get('quoteChannel'));
                    return channel.send(quoteEmbed);  
                }
            });
        }
    }
};