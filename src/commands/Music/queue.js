const { Command } = require('klasa');
const { MessageEmbed } = require('discord.js');
const { stripIndents } = require('common-tags')

module.exports = class extends Command {

    constructor(...args) {
        super(...args, { 
            aliases: ['song-list', 'next-songs'],
            description: 'Display the song queue'
        });
    }

    run(msg) {
        if (msg.guild.musicData.queue.length == 0)
            return msg.send(`There are no songs in queue! Add some with ${msg.guild.settings.get('prefix')}play or ${msg.guild.settings.get('prefix')}add`);
        const titleArray = [];
        msg.guild.musicData.queue.map(obj => {
            titleArray.push(obj.title);
        });
        var queueEmbed = new MessageEmbed()
            .setColor('#ff7373')
            .setTitle('Music Queue')
            for (let i = 0; i < titleArray.length; i++) {
                queueEmbed.addField(`Song ${i + 1}:`, `${titleArray[i]}`);
            }
        return msg.send(queueEmbed);
    }
    
};