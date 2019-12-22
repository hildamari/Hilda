const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class IndexesCommand extends Command {
    constructor (client) {
        super(client, {
          name: 'indexes',
          group: 'links',
          memberName: 'indexes',
          description: 'Replies with a link to the Files and Indexes Google Spreadsheets',
          examples: ['indexes'],
          guildOnly: true
        });
      }
    
    run (msg) {
        const indexesEmbed = new MessageEmbed()
            .setColor(msg.member.displayHexColor)
            .setTitle("FETH Files and Indexes")
            .addField("URL 1", "https://docs.google.com/spreadsheets/d/18bCCrsHwyAU-JSlpvaulVos3j8dtPBr0mDB-vLWib54/edit#gid=1616992074")
            .addField("URL 2", "https://docs.google.com/spreadsheets/d/14HT0w3qaRPknzxeHysswVMUfry8J2G_RHY8k48Nmy5w/edit#gid=0")
            .setDescription("Files and Indexes Google Spreadsheets");

        msg.channel.send(indexesEmbed);
    }
};