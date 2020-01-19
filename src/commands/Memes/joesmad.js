const { Command } = require('klasa');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, { 
            description: 'Sends the JoesMad image' 
        });
    }

    run(msg) {
        msg.channel.send({ files: ["./assets/images/JoesMad.jpg"] });
    }

};