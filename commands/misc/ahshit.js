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
    
    if(msg.guild.id == 649054519556308992) {
      if(msg.channel.id != 649489304514461706) {
        msg.say("You cannot use this command in a non-nsfw channel! Please go to <#650489311095029780>")
      } else {
        msg.channel.send({ files: ["./images/ahshit.png"] });
      }
    } else {
      msg.channel.send({ files: ["./images/ahshit.png"] });
    }
    // msg.channel.send(ahShitEmbed);
    // <:Hilda:610937234337693716>
  }
};