const { Command } = require('klasa');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, { description: 'Sends with AhShit image' });
    }

    run(msg) {
        // msg.channel.send({ files: ["./images/ahselk.png"] });
        if(msg.guild.id == 649054519556308992) {
            if(msg.channel.id != 649489304514461706) {
              msg.send("You cannot use this command in a non-nsfw channel! Please go to <#650489311095029780>")
            } else {
              msg.channel.send({ files: ["./assets/images/ahshit.png"] });
            }
          } else {
            msg.channel.send({ files: ["./assets/images/ahshit.png"] });
          }
    }

};