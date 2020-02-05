const { Monitor } = require('klasa');

module.exports = class extends Monitor {

    // Constructor
    constructor(...args) {
        super(...args, { ignoreOthers: false });
    }

    async run(msg) {
        // If the message was not sent in a TextChannel, ignore it.
        if (!msg.guild) return;
        let member = msg.member;

        if(msg.guild.id == 354835055623012352) {
            let memberRole = msg.guild.roles.find(roles => roles.name === "members");
            if(!member.roles.has(memberRole.id)) {
                msg.member.roles.add(memberRole).catch(console.error);
                msg.reply("Hey, you're a member now! Have fun. Or not, I'm not your boss.")
            }
        }

    }
};