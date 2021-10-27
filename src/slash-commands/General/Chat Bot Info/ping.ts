import type { CommandInteraction, Message } from 'discord.js';
import type { PieceContext } from '@sapphire/pieces';
import { HildaSlashCommand } from '#lib/structures/HildaSlashCommand';
import type { APIMessage } from 'discord-api-types';

export default class PingSlashCommand extends HildaSlashCommand {
    constructor(context: PieceContext) {

        super(context, {
            enabledGuilds: ['561046006888792103'],
			commandData: {
				name: 'ping',
				description: 'Tests the latency'
			}
        });
    }

    async messageRun(message: Message) {
		const sent = await message.channel.send('Pinging...');
		const ping = sent.createdTimestamp - message.createdTimestamp;
		return sent.edit(`Pong! That took ${ping}ms. Latency: ${this.container.client.ws.ping}ms`);
	}

    public async slashRun(interaction: CommandInteraction): Promise<void> {
        const response = await interaction.reply({ content: 'Ping...', fetchReply: true });
        let responseTimestamp;

        if ((response as Message).createdTimestamp) {
            responseTimestamp = (response as Message).createdTimestamp;
        } else {
            responseTimestamp = Date.parse((response as unknown as APIMessage).timestamp);
        }

        const latency = responseTimestamp - interaction.createdTimestamp;

        await interaction.editReply(`Pong! Took me ${latency}ms.`);
    }
}

