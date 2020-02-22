const { Command } = require('klasa');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, { 
            description: 'Gives the "Hilda Subscriber" role to those who want to be notified of new updates',
            extendedHelp: 'Use the command again to remove the role'
        });
    }

    run(msg) {
        if(msg.guild.id == 650595160849121300) {
            const hildaSubscriberRole = msg.guild.roles.find(roles => roles.name === "Hilda Subscriber");
            if(msg.member.roles.has(hildaSubscriberRole.id)) {
                msg.member.roles.remove(hildaSubscriberRole).catch(console.error);
                msg.channel.send("The `Hilda Subscriber` role has been removed.");
            } else {
                msg.member.roles.add(hildaSubscriberRole).catch(console.error);
                msg.channel.send("You've been given the `Hilda Subscriber` role!");
            }
        } else {
            msg.send(`You cannot use this command in this server. Please join the support server to obtain this role. https://discord.gg/WAVdN4E`)
        }
    }
};