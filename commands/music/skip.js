const { Command } = require('discord.js-commando');

module.exports = class SkipCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'skip',
      aliases: ['skip-song', 'advance-song'],
      memberName: 'skip',
      group: 'music',
      description: 'Skip the current playing song',
      guildOnly: true
    });
  }

  run(msg) {
    const voiceChannel = msg.member.voice.channel;
    if (!voiceChannel) return msg.reply('Join a channel and try again');

    if (
      typeof msg.guild.musicData.songDispatcher == 'undefined' ||
      msg.guild.musicData.songDispatcher == null
    ) {
      return msg.reply('There is no song playing right now!');
    }
    msg.guild.musicData.songDispatcher.end();
  }
};