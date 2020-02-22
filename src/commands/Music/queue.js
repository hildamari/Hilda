const { Command } = require('klasa');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, { 
            aliases: ['song-list', 'next-songs', 'q'],
            description: 'Display the song queue'
        });
    }

    run(msg) {
        const serverQueue = msg.guild.musicData.queue.get(msg.guild.id);
        console.log(serverQueue)

        if (serverQueue.songs.length == 0)
            return msg.send(`There are no songs in queue! Add some with ${msg.guild.settings.get('prefix')}play or ${msg.guild.settings.get('prefix')}add`);
        const titleArray = [];
        const artistArray = [];
        for(let i = 0; i < serverQueue.songs.length; i++) {
            titleArray.push(serverQueue.songs[i].info.title)
            artistArray.push(serverQueue.songs[i].info.author)
        }

        var queueEmbed = new MessageEmbed()
            .setColor('#ff7373')
            .setTitle(':musical_note: Music Queue :musical_note: ')
            for (let i = 0; i < titleArray.length; i++) {
                queueEmbed.addField(`Song ${i + 1}:`, `${titleArray[i]} by ${artistArray[i]}`);
            }
        return msg.send(queueEmbed);
    }
    
};