const { Command } = require('klasa');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, { 
            aliases: ['continue'],
            description: 'Resume the current paused song'
        });
    }

    run(msg) {
        var voiceChannel = msg.member.voice.channel;
        if (!voiceChannel) return msg.reply('Join a channel and try again');
    
        if (
          typeof msg.guild.musicData.songDispatcher == 'undefined' ||
          msg.guild.musicData.songDispatcher === null
        ) {
          return msg.reply('There is no song playing right now!');
        }
    
        msg.send('Song resumed :play_pause:');
    
        msg.guild.musicData.songDispatcher.resume();
    }
    
};