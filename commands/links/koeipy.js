const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class KoeipyCommand extends Command {
    constructor (client) {
        super(client, {
          name: 'koeipy',
          group: 'links',
          memberName: 'koeipy',
          description: 'Replies with a link to the koeipy scripts',
          examples: ['koeipy'],
          guildOnly: true
        });
      }
    
    run (msg) {
        const koeipyEmbed = new MessageEmbed()
            .setColor(msg.member.displayHexColor)
            .setTitle("Koeipy Scripts by 3096 (Raysixty-nine)")
            .addField("GitHub", "https://github.com/3096/koeipy")
            .addField("Compress and Decompress", "https://cdn.discordapp.com/attachments/604337130650730498/631936302488485888/3096_koeipy_compress_decompress.7z")
            .setDescription("Koei Tecmo Engine file utils, tested on Fire Emblem: Three Houses");

        msg.channel.send(koeipyEmbed);
    }
};