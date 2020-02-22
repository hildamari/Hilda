const { Command } = require('klasa');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, { 
            aliases: 'delete',
            description: 'Delete a song from the queue',
            usage: '<number:integer>'
        });
    }

    async run(msg, [number]) {
        if (!msg.guild) return;
        
        const serverQueue = msg.guild.musicData.queue.get(msg.guild.id);
        let numberToRemove = number - 1;

        if (msg.member.voice.channel) {
            if(!serverQueue){
                msg.send("No server queue has been set up! There is nothing to remove!")
            } else {
                let queueLength = serverQueue.songs.length;
                // console.log(queueLength)
                if(number > queueLength) {
                    msg.send("You cannot remove a song from the queue that doesn't exist!")
                } else {
                    // console.log(serverQueue.songs)
                    msg.send(`Removed ${serverQueue.songs[numberToRemove].info.title} by ${serverQueue.songs[numberToRemove].info.author}`)
                    serverQueue.songs.splice(numberToRemove, 1);
                }
            }
        }
    }
    
};