const { Command } = require('klasa');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, { description: 'Replies with a message.' });
    }

    run(msg) {
        const hilda = this.client.emojis.find(emoji => emoji.name === "Hilda");
        return msg.send(`Yeah! Who's the best? I'm the best! ${hilda}`);
    }

};