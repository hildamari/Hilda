const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class StarfallCommand extends Command {
    constructor (client) {
        super(client, {
          name: 'starfall',
          aliases: ['forge'],
          group: 'links',
          memberName: 'starfall',
          description: 'Replies with a link to the Starfall Forge GitHub page',
          examples: ['starfall', 'forge'],
          guildOnly: true
        });
      }
    
    run (msg) {
        const starfallEmbed = new MessageEmbed()
            .setColor(msg.member.displayHexColor)
            .setTitle("Starfall (Forge) by the Three Houses Research Team")
            .addField("URL", "https://github.com/three-houses-research-team/Starfall/tree/master/forge")
            .setDescription("Forge is a file redirection layer for Fire Emblem Three Houses. When looking for any file, the game will look in Forge's files first. If it is missing, then the original game file will be used.");

        msg.channel.send(starfallEmbed);
    }
};