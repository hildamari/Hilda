const { Monitor } = require('klasa');
// const Fuse = require('fuse.js');
// let fs = require("fs");
// const { resolve, join } = require("path");
// let messages = JSON.parse(fs.readFileSync(resolve(join(__dirname, "../../src/data/messages.json"))))

// let messageOptions = {
//     keys: ['id']
// }

module.exports = class extends Monitor {

    // Constructor
    constructor(...args) {
        super(...args, { ignoreOthers: false });
    }

    async run(msg) {
        // If the message was not sent in a TextChannel, ignore it.
        if (!msg.guild) return;
        let member = msg.member;
        // let random = Math.floor(Math.random() * 3) + 1;
        // let randomTxt = random.toString();
        // let messagesFuse = new Fuse(messages.messages, messageOptions); 
        // let result = messagesFuse.search(randomTxt);

        if(msg.guild.id == 354835055623012352) {
            let memberRole = msg.guild.roles.find(roles => roles.name === "members");
            if(!member.roles.has(memberRole.id)) {
                msg.member.roles.add(memberRole).catch(console.error);
                
                // msg.send("<@" + msg.author.id + ">" + result[0].msg)
            }
        }

    }
};