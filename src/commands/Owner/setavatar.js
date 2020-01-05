const { Command } = require('klasa');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, { 
          description: 'Sets the avatar of the bot.',
          permissionLevel: 10,
        });
    }

    async run(msg) {
        try {
            await this.client.user.setAvatar('https://cdn.discordapp.com/attachments/614902147565486111/643891293839163434/Hilda_Maid.png');
            
            return msg.send('Avatar changed!');
          } catch (err) {
            return console.error(err);
          }
    }

};