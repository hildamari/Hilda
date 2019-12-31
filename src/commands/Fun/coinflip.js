const { Command } = require('klasa');
const sides = ['heads','tails'];

module.exports = class extends Command {

    constructor(...args) {
        super(...args, { 
            aliases: [ 'coin' ],
            description: 'Flip a coin' });
    }

    run(msg) {
        return msg.send(`The coin landed on ${sides[Math.floor(Math.random() * sides.length)]}.`);
    }

}