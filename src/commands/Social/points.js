const { Command } = require('klasa');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, { description: 'Check how many points you have.' });
    }

    run(msg) {
        return msg.send(`You have a total of ${msg.author.settings.get('experience')} experience points!`);
    }

};