const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

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
    // const noLewdsEmbed = new MessageEmbed()
    // .setImage('https://i.imgur.com/sNKwZ8m.png');
    if(msg.guild.id == 649054519556308992) {
      
      msg.say("You cannot use this command.")
    } else {
      msg.channel.send({ files: ["./images/nolewds.png"] });
    }
    
    // msg.channel.send(noLewdsEmbed);
  }
};