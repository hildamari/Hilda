const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class ImBabyCommand extends Command {
  constructor (client) {
    super(client, {
      name: 'imbaby',
      aliases: ['baby'],
      group: 'misc',
      memberName: 'imbaby',
      description: 'Replies with the im baby image',
      examples: ['imbaby', 'baby'],
      guildOnly: true
    });
  }

  run (msg) {
    const imBabyEmbed = new MessageEmbed()
    .setImage('https://i.imgur.com/lEwWnW7.png');

    msg.channel.send(imBabyEmbed);
  }
};