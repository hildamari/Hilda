const { Command } = require('klasa');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, { 
            description: 'Sets your friend code',
            usage: '<code:string>' 
        });
    }

    run(msg, [ code ]) {
        msg.author.settings.update('fc', code);
        msg.channel.send(`Your friend code has been set to ${code}`)
    }

};