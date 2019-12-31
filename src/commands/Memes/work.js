const { Command } = require('klasa');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, { description: 'Replies with "You\'re making me work!"' });
    }

    run(msg) {
        const imbaby = this.client.emojis.find(emoji => emoji.name === "ImBaby");
        return msg.send(`${imbaby} You're making me work!`);
    }

};