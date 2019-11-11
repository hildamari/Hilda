const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class ArchiveManagerCommand extends Command {
    constructor (client) {
        super(client, {
          name: '010editor',
          group: 'links',
          memberName: '010editor',
          description: 'Replies with a link to the 010 Editor',
          examples: ['010editor'],
          guildOnly: true
        });
      }
    
    run (msg) {
        const zeroOneZeroEmbed = new MessageEmbed()
            .setColor(msg.member.displayHexColor)
            .setTitle("010 Binary Editor")
            .addField("URL", "https://www.sweetscape.com/010editor/")
            .addField("Extra Info", "If the trial runs out, just uninstall and use the installer again.")
            .setDescription("Professional hex editor with Binary Templates. A fast, flexible, easy-to-use hex editor.");

        msg.channel.send(zeroOneZeroEmbed);
    }
};