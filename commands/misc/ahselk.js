const { Command, MessageAttachment } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class AhSelkCommand extends Command {
  constructor (client) {
    super(client, {
      name: 'ahselk',
      group: 'misc',
      memberName: 'ahselk',
      description: 'Replies with AhSelk image',
      examples: ['ahselk'],
      guildOnly: true
    });
  }

  run (msg) {
    // const ahShitEmbed = new MessageEmbed()
    // // .setImage('https://i.imgur.com/Vu5IdfS.png')
    // .attachFiles(['./images/ahselk.png']);
    // const attachment = new MessageAttachment('./images/ahselk.png');
    msg.channel.send({ files: ["./images/ahselk.png"] });
    if(msg.guild.id == 649054519556308992) {
      if(msg.channel.id != 649489304514461706) {
        msg.say("You cannot use this command in a non-nsfw channel! Please go to <#650489311095029780>")
      } else {
        msg.channel.send({ files: ["./images/ahselk.png"] });
      }
    } else {
      msg.channel.send({ files: ["./images/ahselk.png"] });
    }
    // <:Hilda:610937234337693716>
  }
};