const { Command } = require('discord.js-commando');

module.exports = class UnoCommand extends Command {
  constructor (client) {
    super(client, {
      name: 'uno',
      group: 'misc',
      memberName: 'uno',
      description: 'Replies with Everyone has uno',
      examples: ['uno'],
      guildOnly: true
    });
  }

  run (msg) {

    const imbaby = this.client.emojis.find(emoji => emoji.name === "ImBaby");
    if(msg.guild.id == 649054519556308992) {
      if(msg.channel.id != 649063924607614978) {
        msg.say("You cannot use this command in a non-nsfw channel! Please go to <#649063924607614978>")
      } else {
        return msg.say(`${imbaby} Everyone has uno, dipshit.`);
      }
    } else {
      return msg.say(`${imbaby} Everyone has uno, dipshit.`);
    }
    
    // <:Hilda:610937234337693716>
  }
};