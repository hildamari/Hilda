const { Command } = require('klasa');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, { 
            aliases: ['hdnotlikeeirika', 'hd'],
            description: 'Sends the HDNotLikeEirika image' 
        });
    }

    run(msg) {
        msg.channel.send({ files: ["./assets/images/hdnotlikeeirika.png"] });
    }

};