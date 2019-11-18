const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class LeaveCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'nowplaying',
      aliases: ['np'],
      group: 'music',
      memberName: 'nowplaying',
      guildOnly: true,
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
  
    return msg.embed(songStatusEmbed);
  }
};