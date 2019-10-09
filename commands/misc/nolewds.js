const { Command } = require('discord.js-commando');
const { MessageEmbed, MessageAttachment } = require('discord.js');

module.exports = class WhyCommand extends Command {
  constructor (client) {
    super(client, {
      name: 'nolewds',
      aliases: ['lewds', 'lewd'],
      group: 'misc',
      memberName: 'nolewds',
      description: 'Replies with the no lewds image',
      examples: ['nolewds', 'lewds', 'lewd'],
      guildOnly: true
    });
  }

  run (msg) {
    const exampleEmbed = new MessageEmbed()

	.setImage('https://i.imgur.com/sNKwZ8m.png');

    msg.channel.send(exampleEmbed);
  }
};