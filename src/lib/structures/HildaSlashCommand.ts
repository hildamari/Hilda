import { Command, CommandOptions, PieceContext } from "@sapphire/framework";
import type { ApplicationCommandData, Awaitable, CommandInteraction } from "discord.js";
import { sep } from "path";

export abstract class HildaSlashCommand extends Command {
	public readonly enabledGuilds: string[];
	public readonly commandData: ApplicationCommandData;
	public fullCategory: string[];

	constructor(context: PieceContext, options: CustomCommand.Options) {
		super(context)
		this.enabledGuilds = options.enabledGuilds;
		this.commandData = options.commandData;
		const paths = context.path.split(sep);

		this.fullCategory = paths.slice(paths.indexOf('slash-commands') + 1, -1);
	}

	public get category() {
		return this.fullCategory[0] ?? 'General';
	}

	/**
	 * The sub category for the command
	 * @since 0.0.1
	 * @type {string}
	 * @readonly
	 */
	 public get subCategory() {
		return this.fullCategory[1] ?? 'General';
	}

	public abstract slashRun(interaction: CommandInteraction): Awaitable<unknown>;
}

export namespace CustomCommand {
	export type Options = CommandOptions & {
		enabledGuilds: string[],
		commandData: ApplicationCommandData
	}
}