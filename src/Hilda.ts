import 'reflect-metadata';
import '@sapphire/plugin-editable-commands/register';
import '@sapphire/plugin-logger/register';
import { HildaClient } from '#lib/HildaClient';
import { TOKENS } from '#root/config';
import SlashCommandStore from '#lib/structures/SlashCommandStore';

export default class Hilda extends HildaClient {
	constructor() {
	  super();
  
	  this.stores.register(new SlashCommandStore());
	}
}

const client = new Hilda();

client.login(TOKENS.DEV_BOT_TOKEN);