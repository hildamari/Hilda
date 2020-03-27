const { Command } = require('klasa');
const { MessageEmbed } = require('discord.js');
const { stripIndents } = require('common-tags');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, { 
            subcommands: true,
            description: 'Set up your Animal Crossing: New Horizons Island info',
            usage: '<profilename|charactername|islandname|hemisphere|fruit|show:default> [value:string]',
            usageDelim: " ",
            extendedHelp: "Each option <profilename|charactername|islandname|hemisphere|fruit> must be set individually.\n**island profilename <name>** to set your Switch's profile name\n**island charactername <name>** to set your in-game character name\n**island islandname <name>** to set your island name\n**island hemisphere <hemisphere>** to set your island's hemisphere\n**island fruit <fruit>** to set your island's native fruit\n**island show** to show your island info"
        });
    }

    profilename(msg, [value]) {
        msg.author.settings.update('profilename', value);
        msg.channel.send(`:white_check_mark: Successfully set your Switch profile name!\nProfile Name: **${value}**`)
    }

    charactername(msg, [value]) {
        msg.author.settings.update('charactername', value);
        msg.channel.send(`:white_check_mark: Successfully set your character's name!\nCharacter Name: **${value}**`)
    }

    islandname(msg, [value]) {
        msg.author.settings.update('islandname', value);
        msg.channel.send(`:white_check_mark: Successfully set the name of your island!\nIsland Name: **${value}**`)
    }

    hemisphere(msg, [value]) {
        let hemispheres = ["north", "south", "northern", "southern", "Northern", "Southern", "North", "South"]
        var n = hemispheres.includes(value);
        if(n == true) {
            if(value == "north" || value == "south" || value == "North" || value == "South") {
                let newValue = value + "ern"
                const uppercaseValue = newValue.charAt(0).toUpperCase() + newValue.substring(1);
                msg.author.settings.update('hemisphere', uppercaseValue);
                msg.channel.send(`:white_check_mark: Successfully set the hemisphere for your island!\nHemisphere: **${uppercaseValue}**`)
            } else {
                const uppercaseValue = value.charAt(0).toUpperCase() + value.substring(1);
                msg.author.settings.update('hemisphere', uppercaseValue);
                msg.channel.send(`:white_check_mark: Successfully set the hemisphere for your island!\nHemisphere: **${uppercaseValue}**`)
            }
                
        } else {
            msg.send("That is not a valid hemisphere!");
        }
    }

    fruit(msg, [value]) {
        let fruits = ["Apples", "apples", "Apple", "apple", "Oranges", "oranges", "Orange", "orange", "Pears", "pears", "Pear", "pear", "Peaches", "peaches", "Peaches", "peach", "Cherries", "cherries", "Cherry", "cherry"]
        var n = fruits.includes(value);
        if(n == true) {
            if(value == "apple" || value == "Apple" || value == "orange" || value == "Orange" || value == "pear" || value == "Pear") {
                let newValue = value + "s"
                const uppercaseValue = newValue.charAt(0).toUpperCase() + newValue.substring(1);
                msg.author.settings.update('fruit', uppercaseValue);
                msg.channel.send(`:white_check_mark: Successfully set your island's native fruit!\nFruit: **${uppercaseValue}**`)
            } else if(value == "peach" || value == "Peach") {
                let newValue = value + "es"
                const uppercaseValue = newValue.charAt(0).toUpperCase() + newValue.substring(1);
                msg.author.settings.update('fruit', uppercaseValue);
                msg.channel.send(`:white_check_mark: Successfully set your island's native fruit!\nFruit: **${uppercaseValue}**`)
            } else if(value == "cherry" || value == "Cherry") {
                let fruitName = value.slice(0, 5);
                let newValue = fruitName + "ies"
                const uppercaseValue = newValue.charAt(0).toUpperCase() + newValue.substring(1);
                msg.author.settings.update('fruit', uppercaseValue);
                msg.channel.send(`:white_check_mark: Successfully set your island's native fruit!\nFruit: **${uppercaseValue}**`)
            } else {
                const uppercaseValue = value.charAt(0).toUpperCase() + value.substring(1);
                msg.author.settings.update('fruit', uppercaseValue);
                msg.channel.send(`:white_check_mark: Successfully set your island's native fruit!\nFruit: **${uppercaseValue}**`)
            }
            
        }

    }

    show(msg) {
        let friendCode = msg.author.settings.get('fc');
        let profileName = msg.author.settings.get('profilename');
        let characterName = msg.author.settings.get('charactername');
        let fruit = msg.author.settings.get('fruit');
        let islandName = msg.author.settings.get('islandname');
        let hemisphere = msg.author.settings.get('hemisphere');

        const islandEmbed = new MessageEmbed()
            .setAuthor(`${msg.author.username}'s Island`, msg.author.displayAvatarURL({ format: 'png' }))
            .setColor(msg.member.displayHexColor)
            .setDescription(stripIndents`Friend Code: **${friendCode}**
            Switch Profile Name: **${profileName}**
            Character Name: **${characterName}**
            Island Name: **${islandName}**
            Fruit: **${fruit}**
            Hemisphere: **${hemisphere}**`)
        msg.send(islandEmbed)
    }
    
};