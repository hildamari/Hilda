const { Command } = require('discord.js-commando');

module.exports = class ResumeCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'resume',
      aliases: ['continue'],
      memberName: 'resume',
      group: 'music',
      description: 'Resume the current paused song',
      guildOnly: true
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

    msg.say('Song resumed :play_pause:');

    msg.guild.musicData.songDispatcher.resume();
  }
};