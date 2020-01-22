const { Command } = require('klasa');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, { 
            description: 'Sends the Sakurai HoesMad image' 
        });
    }
    
    run(msg) {
        if(msg.guild.id == 649054519556308992) {
            if(msg.channel.id == 669560106614259722 || msg.channel.id == 649063924607614978) {
              msg.channel.send({ files: ["./assets/images/HoesMad.jpg"] });
            } else {
                msg.send("You cannot use this command in a non-nsfw channel! Please go to <#649063924607614978>")
            }
        } else {
            msg.channel.send({ files: ["./assets/images/HoesMad.jpg"] });
        }
    }

};