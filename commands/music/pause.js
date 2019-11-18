const { Command } = require('discord.js-commando');

module.exports = class PauseCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'pause',
      aliases: ['hold', 'stop'],
      memberName: 'pause',
      group: 'music',
      description: 'Pause the current playing song',
      guildOnly: true
    });
  }

  run(msg) {
    var voiceChannel = msg.member.voice.channel;
    if (!voiceChannel) return msg.reply('Join a channel and try again');

    if (
      typeof msg.guild.musicData.songDispatcher == 'undefined' ||
      msg.guild.musicData.songDispatcher == null
    ) {
      return msg.say('There is no song playing right now!');
    }

    msg.say('Song paused :pause_button:');

    msg.guild.musicData.songDispatcher.pause();
  }
};