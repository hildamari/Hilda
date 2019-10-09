const { Command } = require('discord.js-commando');
const { MessageEmbed, MessageAttachment } = require('discord.js');

module.exports = class ReadmeCommand extends Command {
  constructor (client) {
    super(client, {
      name: 'eirika',
      aliases: ['hdnotlikeeirika', 'hd'],
      group: 'misc',
      memberName: 'eirika',
      description: 'Replies with HDNotLikeEirika image',
      examples: ['hdnotlikeeirika', 'eirika', 'hd'],
      guildOnly: true
    });
  }

  run (msg) {
    const exampleEmbed = new MessageEmbed()
	// .attachFiles(['https://i.imgur.com/dTWvQGO.gif'])
	.setImage('https://i.imgur.com/cH0bIOB.png');
    
    msg.channel.send(exampleEmbed);
    // msg.channel.send(attachment);
    // <:Hilda:610937234337693716>
  }
};