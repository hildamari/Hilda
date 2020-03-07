const { Command } = require('klasa');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, { 
            description: 'Vote for Hilda on top.gg/Discord Bot List'
        });
    }

    run(msg) {
        msg.send(`Here is the link to vote for Hilda on top.gg/Discord Bot List: **https://top.gg/bot/614635423582650394/vote**. You can vote every 12 hours.`)
    }
    
};