const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class AhShitCommand extends Command {
  constructor (client) {
    super(client, {
      name: 'ahshit',
      group: 'misc',
      memberName: 'ahshit',
      description: 'Replies with AhShit image',
      examples: ['ahshit'],
      guildOnly: true
    });
  }

  run (msg) {
    // const ahShitEmbed = new MessageEmbed()
	  // .setImage('https://i.imgur.com/SgNoXXY.png');
    msg.channel.send({ files: ["./images/ahshit.png"] });
    // msg.channel.send(ahShitEmbed);
    // <:Hilda:610937234337693716>
  }
};