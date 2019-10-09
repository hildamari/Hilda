const {Command} = require('discord.js-commando');

module.exports = class ReplyCommand extends Command {
  constructor (client) {
    super(client, {
      name: 'reply',
      group: 'misc',
      memberName: 'reply',
      description: 'Replies with a message.',
      examples: ['reply'],
      guildOnly: true
    });
  }

  run (msg) {
    const hilda = this.client.emojis.find(emoji => emoji.name === "Hilda");
    return msg.say(`Yeah! Who's the best? I'm the best! ${hilda}`);
  }
};