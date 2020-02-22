const { Command } = require('klasa');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, { 
            aliases: ['skip-song', 'advance-song', 'advance'],
            description: 'Skip the current playing song'
        });
    }

    run(msg) {
        var serverQueue = msg.guild.musicData.queue.get(msg.guild.id)
        if (!serverQueue) return message.channel.send('There is no song that I could skip!');
        if (serverQueue.playing === false) serverQueue.playing = true;
        serverQueue.connection.stop();

        return msg.channel.send(`Skipping...`)
    }
    
};