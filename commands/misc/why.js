const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

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
    const exampleEmbed = new MessageEmbed()
    .setTitle("IS WHY!?")
	  .setImage('https://i.imgur.com/dTWvQGO.gif');

    msg.channel.send(exampleEmbed);
  }
};