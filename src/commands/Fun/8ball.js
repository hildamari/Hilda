const { Command } = require('klasa');
const { MessageEmbed } = require('discord.js');
const eightball = require('eightball');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, { 
            description: 'Ask the eightball a question, get a random response.',
            usage: '<question:str>'
        });
    }

    run(msg, [question]) {

        const eightballEmbed = new MessageEmbed()
            .setColor(msg.member.displayHexColor)
            .addField(msg.author.tag + " asked", question)
            .addField(":8ball:'s response", eightball())
        return msg.channel.send(eightballEmbed);

    }

};