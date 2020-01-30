const { Command } = require('klasa');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, { 
            aliases: ['skip-song', 'advance-song'],
            description: 'Skip the current playing song'
        });
    }

    run(msg) {
        const voiceChannel = msg.member.voice.channel;
        if (!voiceChannel) return msg.reply('Join a channel and try again');
    
        if (typeof msg.guild.musicData.songDispatcher == 'undefined' || msg.guild.musicData.songDispatcher == null) {
          return msg.reply('There is no song playing right now!');
        }
        msg.guild.musicData.songDispatcher.end();
    }
    
};