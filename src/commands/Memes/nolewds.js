const { Command } = require('klasa');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, { 
            aliases: ['lewds', 'lewd'],
            description: 'Replies with the no lewds image' 
        });
    }

    run(msg) {
        if(msg.guild.id == 649054519556308992) {
            if(msg.channel.id != 649063924607614978) {
                msg.send("You cannot use this command in a non-nsfw channel! Please go to <#649063924607614978>")
            } else {
                return msg.channel.send({ files: ["./assets/images/nolewds.png"] });
            }
        } else {
            return msg.channel.send({ files: ["./assets/images/nolewds.png"] });
        }
    }

};