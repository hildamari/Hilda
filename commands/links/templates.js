const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class TemplateCommand extends Command {
    constructor (client) {
        super(client, {
          name: 'templates',
          group: 'links',
          memberName: 'templates',
          description: 'Replies with a link to the 010 binary templates GitHub Page',
          examples: ['templates'],
          guildOnly: true
        });
      }
    
    run (msg) {
        const templateEmbed = new MessageEmbed()
            .setColor(msg.member.displayHexColor)
            .setTitle("010 Binary Templates by the Three Houses Research Team")
            .addField("URL", "https://github.com/three-houses-research-team/010-binary-templates")
            .setDescription("File format binary templates");

        msg.channel.send(templateEmbed);
    }
};