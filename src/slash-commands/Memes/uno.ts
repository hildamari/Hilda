import type { PieceContext } from "@sapphire/framework";
import type { CommandInteraction, Message } from "discord.js";
import { HildaSlashCommand } from "#lib/structures/HildaSlashCommand";

export class Uno extends HildaSlashCommand {
	constructor(context: PieceContext) {
		
		super(context, {
			enabledGuilds: ['561046006888792103'],
			commandData: {
				name: 'uno',
				description: 'Everyone has uno, dipshit'
			}
		})
	}

	async messageRun(message: Message) {
		const imbaby = this.container.client.emojis.cache.find(emoji => emoji.name === "ImBaby");
        
        await message.channel.send(`${imbaby} Everyone has uno, dipshit.`);
	}

	async slashRun(interaction: CommandInteraction) {
		const imbaby = this.container.client.emojis.cache.find(emoji => emoji.name === "ImBaby");
        
        await interaction.reply(`${imbaby} Everyone has uno, dipshit.`);
	}
}