const { Monitor } = require('klasa');
const Fuse = require('fuse.js');
var fs = require("fs");
const { resolve, join } = require("path");
let messages = JSON.parse(fs.readFileSync(resolve(join(__dirname, "../../src/data/messages.json"))))

var messageOptions = {
    keys: ['id']
}

module.exports = class extends Monitor {

    // Constructor
    constructor(...args) {
        super(...args, { ignoreOthers: false });
    }

    async run(msg) {
        // If the message was not sent in a TextChannel, ignore it.
        if (!msg.guild) return;
        let member = msg.member;
        var random = Math.floor(Math.random() * 3) + 1;
        var randomTxt = random.toString();
        var messagesFuse = new Fuse(messages.messages, messageOptions); 
        var result = messagesFuse.search(randomTxt);

        if(msg.guild.id == 354835055623012352) {
            let memberRole = msg.guild.roles.find(roles => roles.name === "members");
            if(!member.roles.has(memberRole.id)) {
                msg.member.roles.add(memberRole).catch(console.error);
                
                msg.reply(result[0].msg)
            }
        }

    }
};