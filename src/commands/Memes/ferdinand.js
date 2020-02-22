const { Command } = require('klasa');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, { 
            description: 'Plays the "I am Ferdinand von Aegir" voice clip'
        });
    }
    
    async run (msg) {
        if (!msg.guild) return;
        const serverQueue = msg.guild.musicData.queue.get(msg.guild.id);

        // Only try to join the sender's voice channel if they are in one themselves
        if (msg.member.voice.channel) {
            if(!serverQueue){
                const connection = await msg.member.voice.channel.join();
                const dispatcher = connection.play('./assets/sounds/ferdinand.wav');
                
                dispatcher.on('finish', () => {
                    console.log('Finished playing!');
                    msg.guild.me.voice.channel.leave();
                });
            } else {
                msg.send("You can't use this command while a song is playing!")
            }
            
        } else {
            msg.reply('You need to join a voice channel first!');
        }
    }
}