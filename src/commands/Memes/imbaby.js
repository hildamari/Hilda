const { Command } = require('klasa');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, { 
            aliases: ['baby'],
            description: 'Sends with the im baby image' 
        });
    }

    run(msg) {
        msg.channel.send({ files: ["./assets/images/imbaby.png"] });
    }

};