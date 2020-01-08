const { Client } = require('klasa');
const path = require('path');
require('dotenv').config({path: path.join(__dirname, 'data/.env')});

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

const HildaClient = new Client ({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    fetchAllMembers: false,
    createPiecesFolders: false,
    prefix: process.env.PREFIX,
    commandEditing: true,
    disableEveryone: true,
    ignoreBots: true,
    presence: { activity: { name: 'Uno', type: 'PLAYING' } },
    typing: false,
    prefixCaseInsensitive: true,
    owner: '147800635046232064',
    readyMessage: (client) => `Successfully initialized. Ready to serve ${client.guilds.size} guilds.`});

HildaClient.login(process.env.TOKEN);