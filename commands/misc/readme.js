const { Command } = require('discord.js-commando');
const { MessageEmbed, MessageAttachment } = require('discord.js');

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
    const exampleEmbed = new MessageEmbed()
	// .attachFiles(['https://i.imgur.com/dTWvQGO.gif'])
	.setImage('https://i.imgur.com/sgHpp4E.png');

    msg.channel.send(exampleEmbed);
    // msg.channel.send(attachment);
    // <:Hilda:610937234337693716>
  }
};