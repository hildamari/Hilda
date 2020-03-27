const { Client } = require('klasa');
const path = require('path');
require('dotenv').config({path: path.join(__dirname, 'data/.env')});
const config = require("./config.json");
const { PlayerManager } = require("discord.js-lavalink");
const { Structures } = require('discord.js');
const DBL = require("dblapi.js");

const queue = new Map();

Structures.extend('Guild', Guild => {
    class MusicGuild extends Guild {
      constructor(client, data) {
        super(client, data);
        this.musicData = {
          queue,
          isPlaying: false,
          nowPlaying: null,
          songDispatcher: null
        };
      }
    }
    return MusicGuild;
});

Client.use(require('klasa-dashboard-hooks'));

Client.defaultUserSchema.add('experience', 'Integer', {
    default: 1,
    configurable: false
});
    
Client.defaultUserSchema.add('level', 'Integer', {
    default: 0,
    configurable: false
});

Client.defaultUserSchema.add('orbs', 'Integer', {
    default: 0,
    configurable: false
});

Client.defaultUserSchema.add('dailyTime', 'String', {
    default: '0',
    configurable: false
});

Client.defaultUserSchema.add('fc', 'String', {
    default: '',
    configurable: false
});

Client.defaultUserSchema.add('islandname', 'String', {
    default: '',
    configurable: false
});

Client.defaultUserSchema.add('charactername', 'String', {
    default: '',
    configurable: false
});

Client.defaultUserSchema.add('fruit', 'String', {
    default: '',
    configurable: false
});

Client.defaultUserSchema.add('profilename', 'String', {
    default: '',
    configurable: false
});

Client.defaultUserSchema.add('hemisphere', 'String', {
    default: '',
    configurable: false
});

class HildaClient extends Client {

    constructor(...args) {
        super(...args);

        this.player = null;

        this.on("ready", () => {
            this.player = new PlayerManager(client, config.nodes, {
                user: client.user.id,
                shards: 0
            });

            console.log("Bot is online!");
        }).on("error", console.error).on("warn", console.warn);
    }
}

const client = new HildaClient ({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    fetchAllMembers: false,
    createPiecesFolders: false,
    prefix: process.env.PREFIX,
    commandEditing: true,
    disableEveryone: true,
    ignoreBots: false,
    presence: { activity: { name: 'Uno', type: 'PLAYING' } },
    typing: false,
    prefixCaseInsensitive: true,
    owner: '147800635046232064',
    dashboardHooks: {
        apiPrefix: '',
		port: 2030
    },
    readyMessage: (client) => `Successfully initialized. Ready to serve ${client.guilds.size} guilds.`});

const dbl = new DBL(process.env.DBL_API, client);

client.on('ready', () => {
    setInterval(() => {
        dbl.postStats(client.guilds.size);
    }, 1800000);
});

dbl.on('posted', () => {
    console.log('Server count posted!');
})

client.login(process.env.TOKEN);