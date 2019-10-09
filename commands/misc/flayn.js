const { Command } = require('discord.js-commando');

module.exports = class FlaynCommand extends Command {
  constructor (client) {
    super(client, {
      name: 'flayn',
      aliases: ['fishy'],
      group: 'misc',
      memberName: 'flayn',
      description: 'Chants FI-SHY FI-SHY',
      examples: ['flayn', 'fishy'],
      guildOnly: true
    });
  }

  run (msg) {
    const flayn = this.client.emojis.find(emoji => emoji.name === "Fish");
    return msg.say(`${flayn} FI-SHY FI-SHY ${flayn}`);
    // <:Hilda:610937234337693716>
  }
};