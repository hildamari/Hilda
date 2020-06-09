const { Command } = require('klasa');
const { MessageEmbed } = require('discord.js');
const Fuse = require('fuse.js');
let fs = require("fs");
const { resolve, join } = require("path");
let fortunes = JSON.parse(fs.readFileSync(resolve(join(__dirname, "../../../src/data/fortunes.json"))))

let fortuneOptions = {
    keys: ['id']
}

module.exports = class extends Command {

    constructor(...args) {
        super(...args, { 
            aliases: ['cookie'],
            description: 'Replies with a random fortune' 
        });
    }

    run(msg) {
        const fortune = this.client.emojis.find(emoji => emoji.name === "fortune");
        let random = Math.floor(Math.random() * 54) + 1;
        let randomTxt = random.toString();
        let fortunesFuse = new Fuse(fortunes.fortunes, fortuneOptions); 
        let result = fortunesFuse.search(randomTxt);
        const fortuneEmbed = new MessageEmbed();

        fortuneEmbed
            .setColor('#ffff00')
            .addField(`${fortune} Fortune`, result[0].msg)
    
        return msg.channel.send(fortuneEmbed);
    }

};