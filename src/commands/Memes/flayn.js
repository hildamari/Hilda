const { Command } = require('klasa');
const { stripIndents } = require('common-tags');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, { 
            aliases: ['fishy'],
            description: 'Chants FI-SHY FI-SHY' 
        });
    }

    run(msg) {
        const flayn = this.client.emojis.find(emoji => emoji.name === "Fish");
        return msg.send(stripIndents`Reach for my hand,
        I'll eat more fish ${flayn}`);
    }

};