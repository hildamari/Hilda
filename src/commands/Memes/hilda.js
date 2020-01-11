const { Command } = require('klasa');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, { 
            aliases: ['chant'],
            description: 'Chants HIL-DA HIL-DA' 
        });
    }

    run(msg) {
        const hilda = this.client.emojis.find(emoji => emoji.name === "Hilda");
        return msg.send(`${hilda} HIL-DA HIL-DA ${hilda}`);
    }

};