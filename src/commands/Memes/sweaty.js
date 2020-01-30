const { Command } = require('klasa');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, { 
            description: 'Replies with "Ugh, I\'m all sweaty!"' 
        });
    }

    run(msg) {
        const imAllSweaty = this.client.emojis.find(emoji => emoji.name === "ImAllSweaty");
        return msg.send(`${imAllSweaty} "Ugh, I'm all sweaty!"`);
    }

};