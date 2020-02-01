const { Command } = require('klasa');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, { 
            aliases: ['end'],
            description: 'Leaves voice channel if in one'
        });
    }

    run(msg) {
        var voiceChannel = msg.member.voice.channel;
        if (!voiceChannel) return msg.reply('Join a channel and try again');
    
        // if (typeof msg.guild.musicData.songDispatcher == 'undefined' || msg.guild.musicData.songDispatcher == null) {
        //   return msg.reply('There is no song playing right now!');
        // }
        // if (!msg.guild.musicData.queue) {
        //     msg.send('It\'s been fun... Sorry to go so soon...');
        // }
        if (typeof msg.guild.musicData.songDispatcher != 'undefined' || msg.guild.musicData.songDispatcher != null || !msg.guild.musicData.queue) {
            msg.guild.musicData.songDispatcher.end();
            msg.guild.musicData.queue.length = 0;
            msg.send('Guess that\'s it for me. I\'ll just go rest up or...something.');
            msg.guild.me.voice.channel.leave();
        }
        
        return;
    }
    
};