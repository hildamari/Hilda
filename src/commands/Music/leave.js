const { Command } = require('klasa');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, { 
            aliases: ['end'],
            description: 'Leaves voice channel if in one'
        });
    }

    async run(msg) {
        var voiceChannel = msg.member.voice.channel;
        if (!voiceChannel) return msg.reply('Join a channel and try again');

        const serverQueue = msg.guild.musicData.queue.get(msg.guild.id);
        if(serverQueue == undefined) {
            msg.send('Guess that\'s it for me. I\'ll just go rest up or...something.');
            await this.client.player.leave(msg.guild.id);
        } else {
            serverQueue.songs = [];
            msg.send('Guess that\'s it for me. I\'ll just go rest up or...something.');
            await this.client.player.leave(msg.guild.id);
        }
    }
};