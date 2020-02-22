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
        const serverQueue = msg.guild.musicData.queue.get(msg.guild.id);
        console.log(msg.guild.musicData.nowPlaying)

        let songLength = msg.guild.musicData.nowPlaying.info.length;
        msg.channel.send(new MessageEmbed()
            .setTitle("⏯ | Now Playing")
            .setTimestamp()
            .setColor("#5cb85c")
            .addField("Author", msg.guild.musicData.nowPlaying ? msg.guild.musicData.nowPlaying.info.author : "No Name", true)
            .addField("Time", msg.guild.musicData.nowPlaying ? this.millisToMinutesAndSeconds(songLength) : "N/A", true)
            .addField("Songs Left", serverQueue.songs.length ? serverQueue.songs.length - 1 : 0, true)
            .setDescription(`[**${msg.guild.musicData.nowPlaying ? msg.guild.musicData.nowPlaying.info.title : "No Name"}**](${msg.guild.musicData.nowPlaying.info.uri})`));
    }

    millisToMinutesAndSeconds(millis) {
        var minutes = Math.floor(millis / 60000);
        var seconds = ((millis % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }
    
};