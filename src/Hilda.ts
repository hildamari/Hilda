import 'reflect-metadata';
import '@sapphire/plugin-editable-commands/register';
import '@sapphire/plugin-logger/register';
import { HildaClient } from '#lib/HildaClient';
import { DEV, TOKENS } from '#root/config';
import SlashCommandStore from '#lib/structures/SlashCommandStore';

export default class Hilda extends HildaClient {
	constructor() {
	  super();
  
	  if(DEV) {
		this.stores.register(new SlashCommandStore());
	  }
	}
}

const client = new Hilda();

if(DEV) {
	client.login(TOKENS.DEV_BOT_TOKEN);
} else {
	client.login(TOKENS.BOT_TOKEN);
}
