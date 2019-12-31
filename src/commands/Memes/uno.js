const { Command } = require('klasa');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, { description: 'Replies with "Everyone has uno"' });
    }

    run(msg) {
        const imbaby = this.client.emojis.find(emoji => emoji.name === "ImBaby");
        if(msg.guild.id == 649054519556308992) {
            if(msg.channel.id != 649063924607614978) {
                msg.send("You cannot use this command in a non-nsfw channel! Please go to <#649063924607614978>")
            } else {
                return msg.send(`${imbaby} Everyone has uno, dipshit.`);
            }
        } else {
            return msg.send(`${imbaby} Everyone has uno, dipshit.`);
        }
    }

};