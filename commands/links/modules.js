const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class ArchiveManagerCommand extends Command {
    constructor (client) {
        super(client, {
          name: 'modules',
          alias: ['module'],
          group: 'links',
          memberName: 'modules',
          description: 'Replies with a link to Moonling\'s FEFNightmare Modules',
          examples: ['modules', 'modules'],
          guildOnly: true
        });
      }
    
    run (msg) {
        const modulesEmbed = new MessageEmbed()
            .setColor(msg.member.displayHexColor)
            .setTitle("FEFNightmare Modules by Moonling")
            .addField("URL", "https://github.com/VelouriasMoon/FEFNightmare-Modules")
            .setDescription("Modules for use in FEFNightmare.");

        msg.channel.send(modulesEmbed);
    }
};