const { Command } = require('klasa');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, { 
            aliases: ['continue'],
            description: 'Resume the current paused song'
        });
    }

    async run(msg) {
      const player = this.client.player.get(msg.guild.id);
      if (!player) return msg.reply("No lavalink player found");
      await player.pause(false);
      return msg.reply("Resumed the music");
    }
    
};