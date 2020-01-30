const { Command } = require('klasa');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, { 
            aliases: ['hold', 'stop'],
            description: 'Pause the current playing song'
        });
    }

    run(msg) {
        var voiceChannel = msg.member.voice.channel;
        if (!voiceChannel) return msg.reply('Join a channel and try again');
    
        if (typeof msg.guild.musicData.songDispatcher == 'undefined' || msg.guild.musicData.songDispatcher == null) {
          return msg.send('There is no song playing right now!');
        }
    
        msg.send('Song paused :pause_button:');
    
        msg.guild.musicData.songDispatcher.pause();
    }
    
};