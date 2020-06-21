const { Command } = require('klasa');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, { 
            aliases: ['chant'],
            description: 'Chants HIL-DA HIL-DA and plays the voice clip' 
        });
    }

    async run(msg) {
        if (!msg.guild) return;
        const serverQueue = msg.guild.musicData.queue.get(msg.guild.id);

        // Only try to join the sender's voice channel if they are in one themselves
        if (msg.member.voice.channel) {
            if(!serverQueue){
                const connection = await msg.member.voice.channel.join();
                const dispatcher = connection.play('./assets/sounds/hilda.wav');
    
                dispatcher.on('finish', () => {
                    console.log('Finished playing!');
                    msg.guild.me.voice.channel.leave();
                });
                const hilda = this.client.emojis.find(emoji => emoji.name === "HildaCheer");
                msg.send(`${hilda} HIL-DA HIL-DA ${hilda}`);
            } else {
                msg.send("You can't use this command while a song is playing!")
            }
            
        } else {
            const hilda = this.client.emojis.find(emoji => emoji.name === "HildaCheer");
            msg.send(`${hilda} HIL-DA HIL-DA ${hilda}`);
        }
    }

};