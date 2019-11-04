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
    return msg.say(`${marianne} I don't have uno so go fuck off.`);
    // <:Hilda:610937234337693716>
  }
};