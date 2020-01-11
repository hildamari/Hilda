const { Command } = require('klasa');
const { stripIndents } = require('common-tags');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, { 
            aliases: ['fishy'],
            description: 'Sends a parody of Edge of Dawn, Flayn style' 
        });
    }

    run(msg) {
        const flayn = this.client.emojis.find(emoji => emoji.name === "Fish");
        return msg.send(stripIndents`Reach for my hand,
        I'll eat more fish ${flayn}`);
    }

};