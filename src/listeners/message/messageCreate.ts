/* eslint-disable no-useless-return */
import { Listener } from '@sapphire/framework';
import type { Message } from 'discord.js';

export class MessageCreate extends Listener {
	public run(message: Message) {
		if (message.webhookId !== null) return;
		if (message.system) return;

        const imbaby = this.container.client.emojis.cache.find(emoji => emoji.name === "ImBaby");
        if(message.author?.id == '650566385881317376') {
            if(message.content.startsWith('<:Marianne2:658006511578251266> I don\'t have uno so go fuck off.')) {
                message.channel.send(`${imbaby} Everyone has uno, dipshit.`)
            }
        }
        if(message.content.startsWith('\\o')) {
            message.channel.send('o/')
        }
	}
}