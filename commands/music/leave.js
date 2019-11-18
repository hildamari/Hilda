const { Command } = require('discord.js-commando');

module.exports = class LeaveCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'leave',
      aliases: ['end'],
      group: 'music',
      memberName: 'leave',
      guildOnly: true,
      description: 'Leaves voice channel if in one'
    });
  }

  run(msg) {
    var voiceChannel = msg.member.voice.channel;
    if (!voiceChannel) return msg.reply('Join a channel and try again');

    if (
      typeof msg.guild.musicData.songDispatcher == 'undefined' ||
      msg.guild.musicData.songDispatcher == null
    ) {
      return msg.reply('There is no song playing right now!');
    }
    if (!msg.guild.musicData.queue)
      return msg.say('There are no songs in queue');
    msg.guild.musicData.songDispatcher.end();
    msg.guild.musicData.queue.length = 0;
    return;
  }
};