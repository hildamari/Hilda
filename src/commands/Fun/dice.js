const { Command } = require('klasa');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, { 
            aliases: ['roll', 'die'],
            description: 'Roll a 6-sided die' });
    }

    run(msg) {
        function randomNumber() {
            var sides = 6;
            var randomNumber = Math.floor(Math.random() * sides) + 1;
            return randomNumber;
        }

        return msg.send("The dice roll was " + randomNumber() + ".");
    }

}