const { Command } = require('discord.js-commando');

module.exports = class MarianneCommand extends Command {
  constructor (client) {
    super(client, {
      name: 'marianne',
      group: 'misc',
      memberName: 'marianne',
      description: 'References the uno meme',
      examples: ['marianne'],
      guildOnly: true
    });
  }

  run (msg) {
    const marianne = this.client.emojis.find(emoji => emoji.name === "Marianne");
    if(msg.guild.id == 649054519556308992) {
      if(msg.channel.id != 649063924607614978) {
        msg.say("You cannot use this command in a non-nsfw channel! Please go to <#649063924607614978>")
      } else {
        return msg.say(`${marianne} I don't have uno so go fuck off.`);
      }
    } else {
      return msg.say(`${marianne} I don't have uno so go fuck off.`);
    }
    // <:Hilda:610937234337693716>
  }
};