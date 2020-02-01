const { Command } = require('klasa');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, { 
            description: 'Plays the "I am Ferdinand von Aegir" voice clip'
        });
    }
    
    async run (msg) {
        if (!msg.guild) return;

        // Only try to join the sender's voice channel if they are in one themselves
        if (msg.member.voice.channel) {
            const connection = await msg.member.voice.channel.join();
            const dispatcher = connection.play('./assets/sounds/ferdinand.wav');
            
            dispatcher.on('finish', () => {
                console.log('Finished playing!');
                msg.guild.me.voice.channel.leave();
            });
        } else {
            msg.reply('You need to join a voice channel first!');
        }
    }
}