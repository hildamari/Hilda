// throne
// https://github.com/three-houses-research-team/Throne-of-Knowledge/wiki
const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class WikiCommand extends Command {
    constructor (client) {
        super(client, {
          name: 'wiki',
          aliases: ['throne'],
          group: 'links',
          memberName: 'wiki',
          description: 'Replies with a link to Throne of Knowledge Wiki',
          examples: ['throne', 'wiki'],
          guildOnly: true
        });
      }
    
    run (msg) {
        const wikiEmbed = new MessageEmbed()
            .setColor(msg.member.displayHexColor)
            .setTitle("Throne of Knowledge by the Three Houses Research Team")
            .addField("URL", "https://github.com/three-houses-research-team/Throne-of-Knowledge/wiki")
            .setDescription("A good place to start from if you're in need of explanations or documentation");

        msg.channel.send(wikiEmbed);
    }
};