const { Command } = require('discord.js-commando');

module.exports = class ChantCommand extends Command {
  constructor (client) {
    super(client, {
      name: 'chant',
      aliases: ['hilda'],
      group: 'misc',
      memberName: 'chant',
      description: 'Chants HIL-DA HIL-DA',
      examples: ['chant', 'hilda'],
      guildOnly: true
    });
  }

  run (msg) {
    const hilda = this.client.emojis.find(emoji => emoji.name === "Hilda");
    return msg.say(`${hilda} HIL-DA HIL-DA ${hilda}`);
    // <:Hilda:610937234337693716>
  }
};