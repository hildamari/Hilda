const { Command } = require('klasa');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, { 
            aliases: ['setun'],
            description: 'Sets the username of the bot.',
            usage: '<username:string>'
        });
    }

    async run (msg, [username]) {

        try {
          const user = await this.client.user.setUsername(username);
          
          return msg.send(`My new username is ${user.username}`);
        } catch (err) {
          return console.error(err);
        }
      }

};