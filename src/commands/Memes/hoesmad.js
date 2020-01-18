const { Command } = require('klasa');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, { 
            description: 'Sends the Sakurai HoesMad image' 
        });
    }

    run(msg) {
        if(msg.guild.id == 649054519556308992) {
            if(msg.channel.id != 649489304514461706) {
              msg.send("You cannot use this command in a non-nsfw channel! Please go to <#650489311095029780>")
            } else {
                msg.channel.send({ files: ["./assets/images/HoesMad.jpg"] });
            }
        } else {
            msg.channel.send({ files: ["./assets/images/HoesMad.jpg"] });
        }
    }

};