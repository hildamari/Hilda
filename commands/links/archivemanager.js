const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class ArchiveManagerCommand extends Command {
    constructor (client) {
        super(client, {
          name: 'archivemanager',
          group: 'links',
          memberName: 'archivemanager',
          description: 'Replies with a link to the FETH Archive Manager GitHub page',
          examples: ['archivemanager'],
          guildOnly: true
        });
      }
    
    run (msg) {
        const archiveManagerEmbed = new MessageEmbed()
            .setColor(msg.member.displayHexColor)
            .setTitle("FETH Archive Manager by Raytwo")
            .addField("URL", "https://github.com/Raytwo/feth-archive-manager/releases/latest")
            .setDescription("Make patching Fire Emblem Three Houses great again");

        msg.channel.send(archiveManagerEmbed);
    }
};