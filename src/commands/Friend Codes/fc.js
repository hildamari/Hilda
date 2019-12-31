const { Command } = require('klasa');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, { 
            subcommands: true,
            description: 'Gives your friend code or another user\'s friend code',
            usage: '<other|own:default> [user:user]',
            usageDelim: " "
        });   
    }

    // run(msg, [user]) {
    //     // msg.channel.send("friend code command")
    //     console.log(user)
    //     // console.log(user.settings.get('fc'))
    //     // {msg.author.settings.get('fc')
    //     // {msg.author.settings.update('fc')
    // }

    other(msg, [user]) {
        const member = msg.guild.members.get(user.id);
        const fcEmbed = new MessageEmbed()
            .setAuthor(user.username + "#" + user.discriminator, user.displayAvatarURL())
            .setColor(member.displayHexColor)
            .addField("Friend Code", user.settings.get('fc'))
        msg.send(fcEmbed)
        // console.log(user.settings.get('fc'))
        // console.log(user)
    }

    own(msg) {
        const member = msg.guild.members.get(msg.author.id);
        const fcEmbed = new MessageEmbed()
            .setAuthor(msg.author.username + "#" + msg.author.discriminator, msg.author.displayAvatarURL())
            .setColor(member.displayHexColor)
            .addField("Friend Code", msg.author.settings.get('fc'))
        msg.send(fcEmbed)
        // console.log(msg.author.settings.get('fc'))
        // console.log(msg.author)
    }

};