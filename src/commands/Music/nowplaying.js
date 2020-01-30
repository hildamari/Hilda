const { Command } = require('klasa');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, { 
            aliases: ['np'],
            description: 'Shows the current status of the music.'
        });
    }

    run(msg) {
        var voiceChannel = msg.member.voice.channel;
        if (!voiceChannel) return msg.reply('Join a channel and try again');
    
        const songStatusEmbed = new MessageEmbed()
            .setThumbnail(msg.guild.musicData.nowPlaying.thumbnail)
            .addField('Now Playing:', msg.guild.musicData.nowPlaying.title)
            .addField('URL', msg.guild.musicData.nowPlaying.url)
      
        return msg.send(songStatusEmbed);
    }
    
};