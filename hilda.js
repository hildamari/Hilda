const path = require('path');
const { Client, SyncSQLiteProvider } = require('discord.js-commando');
const Database = require('better-sqlite3');
const sqlite = require('sqlite');

require('dotenv').config({path: path.join(__dirname, 'data/.env')});

const client = new Client({
  owner: '147800635046232064',
  commandPrefix: process.env.PREFIX,
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

// client.setProvider(
//     sqlite.open(path.join(__dirname, 'settings.sqlite3')).then(db => new Commando.SQLiteProvider(db))
// ).catch(console.error);

client.registry
    .registerDefaultTypes()
    .registerGroups([
        ['info', 'info commands'],
        ['links', 'link commands'],
        ['misc', 'misc commands'],
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