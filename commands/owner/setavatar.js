const {Command} = require('discord.js-commando');

module.exports = class SetAvatarCommand extends Command {
  constructor (client) {
    super(client, {
      name: 'setavatar',
      aliases: ['setava'],
      group: 'owner',
      memberName: 'setavatar',
      description: 'Sets the avatar of the bot.',
      examples: ['setavatar'],
      guildOnly: true,
      ownerOnly: true
    });
  }

  async run (msg) {

    try {
      await this.client.user.setAvatar('https://cdn.discordapp.com/attachments/614902147565486111/643891293839163434/Hilda_Maid.png');
      
      return msg.embed({description: 'Avatar changed!'});
    } catch (err) {
      return console.error(err);
    }
  }
};