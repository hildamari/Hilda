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
    return msg.say(`${imbaby} Everyone has uno, dipshit.`);
    // <:Hilda:610937234337693716>
  }
};