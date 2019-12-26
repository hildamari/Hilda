const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const moment = require('moment');
require('moment-duration-format');

module.exports = class AboutCommand extends Command {
  constructor (client) {
    super(client, {
      name: 'about',
      aliases: ['info'],
      group: 'info',
      memberName: 'about',
      description: 'Replies with information about the bot',
      examples: ['about', 'info'],
      guildOnly: true
    });
  }

  run (msg) {
    const nickname = msg.guild.members.get("147800635046232064").nickname;
    let displayName = '';

    const aboutEmbed = new MessageEmbed()
        .setColor(msg.member.displayHexColor)
        .setDescription("Hilda is brought to you by memes for memes.")
        .setAuthor(`${this.client.user.username} Stats`, this.client.user.displayAvatarURL({ format: 'png' }));

    if(typeof nickname == 'undefined') {
      displayName = "No nickname";
      aboutEmbed.addField('Owner', this.client.owners[0].tag + ' (' + displayName + ')', true)
    } else {
      aboutEmbed.addField('Owner', this.client.owners[0].tag + ' (' + nickname + ')', true)
    }
        
      aboutEmbed.addField('Uptime', moment.duration(process.uptime() * 1000).format('D [days], H [hours] [and] m [minutes]'))
      aboutEmbed.addField('License', 'MIT')
      aboutEmbed.addField('Source Code', 'https://github.com/KunoichiZ/Hilda');

    return msg.channel.send(aboutEmbed);
  }
};
