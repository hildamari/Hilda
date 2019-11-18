const { Command } = require('discord.js-commando');

module.exports = class WorkCommand extends Command {
  constructor (client) {
    super(client, {
      name: 'work',
      group: 'misc',
      memberName: 'work',
      description: 'Replies with "You\'re making me work!"',
      examples: ['work'],
      guildOnly: true
    });
  }

  run (msg) {
    const imbaby = this.client.emojis.find(emoji => emoji.name === "ImBaby");
    return msg.say(`${imbaby} You're making me work!`);
    // <:Hilda:610937234337693716>
  }
};