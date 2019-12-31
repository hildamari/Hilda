const { Command } = require('klasa');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, { description: 'Sends with Moonling\'s readme image' });
    }

    run(msg) {
        msg.channel.send({ files: ["./assets/images/readme.png"] });
    }

};