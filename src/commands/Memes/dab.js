const { Command } = require('klasa');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, { 
            description: 'Dab on them haters' 
        });
    }

    run(msg) {
        const hildab = this.client.emojis.find(emoji => emoji.id === "737171025350885506");
        return msg.send(`${hildab}`);
    }

};