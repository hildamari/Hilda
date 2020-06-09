const { Command } = require('klasa');
const { MessageEmbed } = require('discord.js');
const fetch = require("node-fetch");
const { URLSearchParams } = require("url");

module.exports = class extends Command {

    constructor(...args) {
        super(...args, { 
            aliases: ['add'],
            description: 'Play any song from YouTube',
            extendedHelp: 'Does not support playlists',
            usage: '<track:string>'
        });
    }

    async run(msg, [track]) {
      if (!msg.member || !msg.member.voice.channel) return msg.reply("You must be in a voice channel for this command.");

      const [song] = await this.getSongs(`${track}`);
      if (!song) return msg.reply("No songs found. try again!");

      const serverQueue = msg.guild.musicData.queue.get(msg.guild.id);
      if (!serverQueue) {
          const queueContruct = {
              textChannel: msg.channel,
              voiceChannel: msg.member.voice.channel,
              connection: null,
              songs: [],
              volume: 0.5,
              playing: true,
          };
  
          msg.guild.musicData.queue.set(msg.guild.id, queueContruct);
  
          queueContruct.songs.push(song);
  
          try {
              const player = await this.client.player.join({
                  guild: msg.guild.id,
                  channel: msg.member.voice.channel.id,
                  host: this.client.player.nodes.first().host
              }, { selfdeaf: false });
      
              if (!player) return msg.reply("Could not join");
              queueContruct.connection = player;
              this.play(msg, queueContruct.songs[0], player);
              
          } catch (err) {
              console.log(err);
              msg.guild.musicData.queue.delete(msg.guild.id);
              return msg.channel.send(err);
          }
      } else {
          serverQueue.songs.push(song);
          msg.channel.send(`${song.info.title} has been added to the queue!`);
      }
  }

  async getSongs(search) {
      const node = this.client.player.nodes.first();
  
      const params = new URLSearchParams();
      params.append("identifier", search);
  
      return fetch(`http://${node.host}:${node.port}/loadtracks?${params.toString()}`, { headers: { Authorization: node.password } })
          .then(res => res.json())
          .then(data => data.tracks)
          .catch(err => {
              console.error(err);
              return null;
          });
  }

  async play(msg, song, player) {

      const serverQueue = msg.guild.musicData.queue.get(msg.guild.id);

      if (!player) return msg.reply("Could not join");
      
      player.play(song.track);
      
      this.sendEmbed(song, msg);
      msg.guild.musicData.nowPlaying = serverQueue.songs[0];
      player.once("error", error => console.error(error));
      player.once("end", async data => {
          if (data.reason === "REPLACED") return; // Ignore REPLACED reason to prevent skip loops
          console.log('Music ended!');
          serverQueue.songs.shift();
          if(serverQueue.songs.length == 0) {
              msg.send('There aren\'t anymore songs in queue!');
              msg.guild.musicData.nowPlaying = null;
              await this.client.player.leave(msg.guild.id);
              msg.guild.musicData.queue.delete(msg.guild.id);
              
          } else {
              this.play(msg, serverQueue.songs[0], player);
              msg.guild.musicData.nowPlaying = serverQueue.songs[0];
              
          }
      });
  }

  sendEmbed(song, msg) {
      const serverQueue = msg.guild.musicData.queue.get(msg.guild.id);

      let songLength = song.info.length;
      msg.channel.send(new MessageEmbed()
          .setTitle("⏯ | Now Playing")
          .setTimestamp()
          .setColor("#5cb85c")
          .addField("Author", song ? song.info.author : "No Name", true)
          .addField("Time", song ? this.millisToMinutesAndSeconds(songLength) : "N/A", true)
          .addField("Songs Left", serverQueue.songs.length ? serverQueue.songs.length - 1 : 0, true)
          .setDescription(`[**${song ? song.info.title : "No Name"}**](${song.info.uri})`));
  }

  millisToMinutesAndSeconds(millis) {
      let minutes = Math.floor(millis / 60000);
      let seconds = ((millis % 60000) / 1000).toFixed(0);
      return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }
  
};