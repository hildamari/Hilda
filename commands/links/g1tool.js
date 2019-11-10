const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class G1ToolCommand extends Command {
    constructor (client) {
        super(client, {
          name: 'g1tool',
          group: 'links',
          memberName: 'g1tool',
          description: 'Replies with a link to the G1Tool GitHub page',
          examples: ['g1tool'],
          guildOnly: true
        });
      }
    
    run (msg) {
        const g1toolEmbed = new MessageEmbed()
            .setColor(msg.member.displayHexColor)
            .setTitle("G1Tool by Raytwo")
            .addField("URL", "https://github.com/Raytwo/G1Tool/releases/latest")
            .setDescription("Create and edit Koei Tecmo G1T files using a GUI");

        msg.channel.send(g1toolEmbed);
    }
};