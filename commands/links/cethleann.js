const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class CethleannCommand extends Command {
    constructor (client) {
        super(client, {
          name: 'cethleann',
          group: 'links',
          memberName: 'cethleann',
          description: 'Replies with a link to the Cethleann GitHub page',
          examples: ['cethleann'],
          guildOnly: true
        });
      }
    
    run (msg) {
        const cethleannEmbed = new MessageEmbed()
            .setColor(msg.member.displayHexColor)
            .setTitle("Cethleann by healingbrew")
            .addField("URL", "https://github.com/healingbrew/Cethleann")
            .setDescription("Gust Engine data exploration and research, specifically centered around FE: Three Houses");

        msg.channel.send(cethleannEmbed);
    }
};