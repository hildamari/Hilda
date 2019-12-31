const { Monitor } = require('klasa');

module.exports = class extends Monitor {

    // Constructor
    constructor(...args) {
        super(...args, { ignoreOthers: false });
    }

    async run(message) {
        // If the message was not sent in a TextChannel, ignore it.
        if (!message.guild) return;

        // Calculate the next value for experience.
        const nextValue = message.author.settings.get('experience') + 1;

        // Cache the current level.
        const currentLevel = message.author.settings.get('level');

        // Calculate the next level.
        const nextLevel = Math.floor(0.1 * Math.sqrt(nextValue + 1));

        // Update the user's configuration entry by adding 1 to it, and update the level also.
        await message.author.settings.update([['experience', nextValue], ['level', nextLevel]]);

        // If the current level and the next level are not the same, then it has increased, and you can send the message.
        if (currentLevel !== nextLevel) {
            // Send the message to the channel congratulating the user.
            // await message.send(`Congratulations! You leveled up to level **${currentLevel}**!`);
        }
    }

    // Init

};