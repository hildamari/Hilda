const { Event } = require('klasa');

module.exports = class extends Event {

	constructor(...args) {
		super(...args, { 
			event: 'message'
		});
	}

	run(msg) {
        if(msg.content.startsWith('\\o')) {
			msg.send('o/')
        } 
	}

};