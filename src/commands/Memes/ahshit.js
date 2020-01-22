const { Command } = require('klasa');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, { description: 'Sends with AhShit image' });
    }
    
    run(msg) {
        // msg.channel.send({ files: ["./images/ahselk.png"] });
        if(msg.guild.id == 649054519556308992) {
            if(msg.channel.id == 669560106614259722 || msg.channel.id == 649063924607614978) {
              msg.channel.send({ files: ["./assets/images/ahshit.png"] });
            } else {
              msg.send("You cannot use this command in a non-nsfw channel! Please go to <#650489311095029780>")
              
            }
          } else {
            msg.channel.send({ files: ["./assets/images/ahshit.png"] });
          }
    }

};