const { Command } = require('klasa');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, { 
            aliases: ['iswhy'],
            description: 'Replies with the IS Why gif' 
        });
    }

    run(msg) {
        const whyEmbed = new MessageEmbed()
            .setTitle("IS WHY!?")
            .setImage('https://i.imgur.com/dTWvQGO.gif');
    
        msg.channel.send(whyEmbed);
    }

};