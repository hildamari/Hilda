const { Command } = require('klasa');
const { MessageEmbed } = require('discord.js');
const moment = require('moment');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, { 
            aliases: ['add', 'pin'],
            description: 'Quote a message using a message ID',
            usage: "<quote:string>"
        });
    }

    run(msg, [quote]) {
        msg.channel.messages.fetch(quote)
            .then(message => {
                const fetchdMsg = message;
                const user = this.client.users.get(fetchdMsg.author.id);
                const member = msg.guild.members.get(fetchdMsg.author.id);
                const timestamp = fetchdMsg.createdTimestamp;
                const formatted = moment(timestamp).format('L');

                const quoteEmbed = new MessageEmbed()
                    .setAuthor(fetchdMsg.author.username + "#" + fetchdMsg.author.discriminator, user.displayAvatarURL())
                    .setColor(member.displayHexColor)
                    .setDescription(fetchdMsg.content)
                    .setFooter(formatted)
                    if(msg.guild.id == 354835055623012352) {
                        const channel = this.client.channels.get('659864561679204411');
                        return channel.send(quoteEmbed);
                    } else {
                        return msg.channel.send(quoteEmbed);   
                    }
            });
    }

};