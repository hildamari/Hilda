import { Listener } from '@sapphire/framework';
import type { CommandInteraction } from 'discord.js';
import type { HildaSlashCommand } from '#lib/structures/HildaSlashCommand';

export class InteractionCreate extends Listener {
	public async run(interaction: CommandInteraction) {
		if (!interaction.isCommand()) return;
		const cmd = this.container.stores.get('slash-commands').get(interaction.commandName);

		if (!cmd) return;

		try {
			const command = cmd as HildaSlashCommand
			command.slashRun(interaction)
		}
		catch (e: any) {
			this.container.logger.fatal(e);
	  
			if (interaction.replied) {
				interaction.followUp({
					content: `There was an error:\n\`\`\`${e.message}\`\`\``,
					ephemeral: true
				}).catch(e => this.container.logger.fatal("An error occurred following up on an error", e));
			}
		}
	}
}
