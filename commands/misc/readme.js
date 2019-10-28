const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class ReadmeCommand extends Command {
  constructor (client) {
    super(client, {
      name: 'readme',
      group: 'misc',
      memberName: 'readme',
      description: 'Replies with Moonling\'s readme image',
      examples: ['readme'],
      guildOnly: true
    });
  }

  run (msg) {
    // const readmeEmbed = new MessageEmbed()
	  // .setImage('https://i.imgur.com/sgHpp4E.png');
    msg.channel.send({ files: ["./images/readme.png"] });
    // msg.channel.send(readmeEmbed);
  }
};