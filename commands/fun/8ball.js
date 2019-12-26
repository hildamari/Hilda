const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const eightball = require('eightball');

module.exports = class EightballCommand extends Command {
    constructor(client) {
        super(client, {
            name: '8ball',
            group: 'fun',
            memberName: '8ball',
            description: 'Ask the eightball a question, get a random response.',
            examples: ['8ball'],
            guildOnly: true,
            args: [
                {
                    key: 'question',
                    prompt: 'What do you want to ask the 8ball?',
                    type: 'string'
                }
            ]
        });
    }

    run(msg, { question }) {
        const eightballEmbed = new MessageEmbed()
            .setColor(msg.member.displayHexColor)
            .addField(msg.author.tag + " asked", question)
            .addField(":8ball:'s response", eightball())
        return msg.channel.send(eightballEmbed);
    }
};