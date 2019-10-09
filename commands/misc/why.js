const { Command } = require('discord.js-commando');
const { MessageEmbed, MessageAttachment } = require('discord.js');

module.exports = class WhyCommand extends Command {
  constructor (client) {
    super(client, {
      name: 'why',
      aliases: ['iswhy'],
      group: 'misc',
      memberName: 'why',
      description: 'Replies with the IS Why gif',
      examples: ['why', 'iswhy'],
      guildOnly: true
    });
  }

  run (msg) {
    const attachment = new MessageAttachment('https://i.imgur.com/dTWvQGO.gif');
    const exampleEmbed = new MessageEmbed()
    .setTitle("IS WHY!?")
	// .attachFiles(['https://i.imgur.com/dTWvQGO.gif'])
	.setImage('https://i.imgur.com/dTWvQGO.gif');

    msg.channel.send(exampleEmbed);
    // msg.channel.send(attachment);
    // <:Hilda:610937234337693716>
  }
};