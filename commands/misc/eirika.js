const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class EirikaCommand extends Command {
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
    // const eirikaEmbed = new MessageEmbed()
	  // .setImage('https://i.imgur.com/cH0bIOB.png');
    msg.channel.send({ files: ["./images/hdnotlikeeirika.png"] });
    // msg.channel.send(eirikaEmbed);
    // <:Hilda:610937234337693716>
  }
};