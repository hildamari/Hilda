import type { PrismaClient } from "@prisma/client";
import { container, SapphireClient } from "@sapphire/framework";
import type { Message } from "discord.js";

export class HildaClient extends SapphireClient {
	public ownerID: string | undefined = undefined;
	private _version = [1, 0, 0];

    public get invite() {
		return `https://discord.com/oauth2/authorize?client_id=${this.user!.id}&permissions=2419379264&scope=bot%20applications.commands`;
	}

	public get version() {
		const versionStr = this._version.join('.');
		return versionStr;
	}

	public fetchPrefix = async (message: Message) => {
		const guild = await container.prisma.guild.findUnique({ where: { id: message.guild?.id } });
		return guild?.prefix ?? 'h!';
	}
}

declare module '@sapphire/pieces' {
	interface Container {
		// database: MyDatabase;
		// redis: 
		prisma: PrismaClient;
	}
}

