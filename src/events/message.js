const { Event } = require('klasa');

module.exports = class extends Event {

	constructor(...args) {
		super(...args, { 
			event: 'message'
		});
	}

	run(msg) {
        const imbaby = this.client.emojis.find(emoji => emoji.name === "ImBaby");
        if(msg.author.id == 650566385881317376) {
            if(msg.content.startsWith('<:Marianne:610937234618843175> I don\'t have uno so go fuck off.')) {
                msg.send(`${imbaby} Everyone has uno, dipshit.`)
            }
        }
}

};