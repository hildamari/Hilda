const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const moment = require('moment');

module.exports = class QuoteCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'quote',
            group: 'fun',
            memberName: 'quote',
            description: 'Quote a message',
            examples: ['quote 659852353335328808'],
            guildOnly: true,
            args: [
                {
                    key: 'quote',
                    prompt: 'What message ID do you want to quote?',
                    type: 'string'
                }
            ]
        });
    }

    run(msg, { quote }) { 
        
        msg.channel.messages.fetch({around: quote, limit: 1})
            .then(messages => {
                const fetchdMsg = messages.first()
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
                    return msg.channel.send(quoteEmbed)   
                }
            });
    }
};