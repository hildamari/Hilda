// import { CommandInteraction, Constants } from 'discord.js';
// import type { PieceContext } from '@sapphire/pieces';
// import { Listener } from '@sapphire/framework';

// export class InteractionCreateEvent extends Listener {

//     constructor(context: PieceContext) {
//         super(context, {
//             event: Constants.Events.INTERACTION_CREATE,
//         });
//     }

//     public async run(interaction: CommandInteraction) {
//         console.log('interactionCreate event fired')
//         if (!interaction.isCommand()) {
//             return;
//         } else {
//             console.log(interaction)
//             console.log(interaction.isCommand())
            
//             // const client = this.container.stores.get('slash-commands');
//             // const client = this.container.client.
//             // this.commandInteractionHandler(interaction);
//         }
// 	    // console.log(interaction);
//     }

//     private async commandInteractionHandler(interction: CommandInteraction): Promise<void> {
//     //     const { commandName } = interaction;
//     //     const command = this.container.stores.get('slash-commands').get(commandName);

//     //     if (!command) {
//     //         interaction.client.emit(
//     //             'Unknown Slash Command',
//     //             { interaction, commandName }
//     //         );

//     //         return;
//     //     }
//     // }

// }

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
