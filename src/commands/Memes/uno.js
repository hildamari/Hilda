const { Command } = require('klasa');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, { description: 'Replies with "Everyone has uno"' });
    }

    run(msg) {
        const imbaby = this.client.emojis.find(emoji => emoji.name === "ImBaby");
        if(msg.guild.id == 649054519556308992) {
            if(msg.channel.id == 669560106614259722) {
                return msg.send(`${imbaby} Everyone has uno, dipshit.`);
            } else {
                msg.send("You cannot use this command in this channel! Please go to <#669560106614259722>")
            }
        } else {
            return msg.send(`${imbaby} Everyone has uno, dipshit.`);
        }
    }

};