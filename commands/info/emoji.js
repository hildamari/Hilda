const { Command } = require('discord.js-commando');

module.exports = class EmojiCommand extends Command {
  constructor (client) {
    super(client, {
      name: 'emoji',
      group: 'info',
      aliases: ['listemoji'],
      memberName: 'emoji',
      description: 'Displays the server\'s emoji',
      examples: ['emoji', 'listemoji'],
      guildOnly: true
    });
  }

  run (msg) {
    const emojiList = msg.guild.emojis.map(e=>e.toString()).join(" ");
    if(emojiList.length > 2000) {
      msg.say("There are too many emojis to list!");
      console.log(emojiList.length);
    } else {
      console.log(emojiList.length);
      return msg.channel.send(emojiList);
    }
  }
};