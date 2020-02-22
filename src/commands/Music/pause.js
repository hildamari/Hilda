const { Command } = require('klasa');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, { 
            aliases: ['hold', 'stop'],
            description: 'Pause the current playing song'
        });
    }

    async run(msg) {
        const player = this.client.player.get(msg.guild.id);
        if (!player) return msg.reply("No lavalink player found");
        await player.pause(true);
        msg.send('Song paused :pause_button:')
    }
    
};