const { Command } = require('klasa');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, { 
            aliases: ['listemoji'],
            description: 'Displays the server\'s emoji' 
        });
    }

    run(msg) {
        const emojiList = msg.guild.emojis.map(e=>e.toString()).join(" ");
        if(emojiList.length > 2000) {
            msg.send("There are too many emojis to list!");
            // console.log(emojiList.length);
        } else {
            // console.log(emojiList.length);
            return msg.channel.send(emojiList);
        }
    }

};