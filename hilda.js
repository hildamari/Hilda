const path = require('path');
const { Client, SyncSQLiteProvider } = require('discord.js-commando');
const Database = require('better-sqlite3');
const { Structures } = require('discord.js');
require('dotenv').config({path: path.join(__dirname, 'data/.env')});

Structures.extend('Guild', Guild => {
  class MusicGuild extends Guild {
    constructor(client, data) {
      super(client, data);
      this.musicData = {
        queue: [],
        isPlaying: false,
        nowPlaying: null,
        songDispatcher: null
      };
    }
  }
  return MusicGuild;
});

const client = new Client({
  owner: '147800635046232064',
  commandPrefix: process.env.PREFIX,
  unknownCommandResponse: false,
  disableEveryone: true,
  selfbot: false,
  presence: {
    status: 'online',
    activity: {
        name: 'Chanting'
    }
  }
});

const database = new Database(path.join(__dirname, 'data/databases/settings.sqlite3'));

client.setProvider(new SyncSQLiteProvider(database));

client.registry
    .registerDefaultTypes()
    .registerGroups([
        ['info', 'info commands'],
        ['links', 'link commands'],
        ['misc', 'misc commands'],
        ['music', 'music commands'],
        ['owner', 'owner commands']
    ])
    .registerDefaultGroups()
    .registerDefaultCommands({
        'help': true,
        'prefix': true,
        'ping': true,
        'eval_': true,
        'commandState': true
      })
    .registerCommandsIn(path.join(__dirname, 'commands'));


client.on('ready', () => {
  console.log('Logged in!');
});

client.on('error', console.error);

client.login(process.env.TOKEN);