const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class FileManagerCommand extends Command {
    constructor (client) {
        super(client, {
          name: 'filemanager',
          group: 'links',
          memberName: 'filemanager',
          description: 'Replies with a link to the FETH File Manager GitHub page',
          examples: ['filemanager'],
          guildOnly: true
        });
      }
    
    run (msg) {
        const fileManagerEmbed = new MessageEmbed()
            .setColor(msg.member.displayHexColor)
            .setTitle("FETH File Manager by bqio")
            .addField("URL", "https://github.com/bqio/fe3hfilemanager")
            .setDescription("Creates a named database file structure.");

        msg.channel.send(fileManagerEmbed);
    }
};