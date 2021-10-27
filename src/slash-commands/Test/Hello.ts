import type { PieceContext } from "@sapphire/framework";
import type { CommandInteraction, Message } from "discord.js";
import { HildaSlashCommand } from "#lib/structures/HildaSlashCommand";

export class Hello extends HildaSlashCommand {
	constructor(context: PieceContext) {
		super(context, {
			enabledGuilds: ['561046006888792103'],
			commandData: {
				name: 'hello',
				description: 'says hello'
			}
		})
	}

	async messageRun(message: Message) {
		await message.reply('Hello from normal command')
	}

	async slashRun(interaction: CommandInteraction) {
		// let commands = this.container.stores.get('slash-commands');
		// let text = "";
		// for (const x of commands.keys()) {
		// 	text += x + ' ';
		// }

		await interaction.reply("text");
	}
}