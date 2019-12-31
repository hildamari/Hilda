const { Command } = require('klasa');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, { description: 'Check your current level.' });
    }

    run(msg) {
        return msg.send(`You are currently level ${msg.author.settings.get('level')}!`);
    }

};