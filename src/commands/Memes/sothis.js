const { Command } = require('klasa');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, { 
            description: 'Sends the So This Wooper meme' 
        });
    }
    
    run(msg) {
        msg.channel.send({ files: ["./assets/images/sothis.jpeg"] });
    }

};