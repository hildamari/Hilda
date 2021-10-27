// // // Command file from godfather (https://github.com/Stitch07/godfather) Copyright 2020 Stitch07, used under the AGPL-3.0 License
// // import { Command, CommandOptions, PieceContext } from '@sapphire/framework';
// // import { sep } from 'path';

// // export default abstract class HildaSlashCommand extends Command {
// // 	declare public fullCategory: string[];

// // 	public constructor(context: PieceContext, { name, ...options }: CommandOptions) {
// // 		super(context, { name, ...options });

// // 		const paths = context.path.split(sep);

// // 		this.fullCategory = paths.slice(paths.indexOf('slash-commands') + 1, -1);
// // 	}

// // 	public get category() {
// // 		return this.fullCategory[0] ?? 'General';
// // 	}

// // 	/**
// // 	 * The sub category for the command
// // 	 * @since 0.0.1
// // 	 * @type {string}
// // 	 * @readonly
// // 	 */
// // 	public get subCategory() {
// // 		return this.fullCategory[1] ?? 'General';
// // 	}
// // }

// import { AliasPiece, PieceContext, PieceOptions } from '@sapphire/pieces';
// import type { Awaited } from '@sapphire/utilities';
// import type {
//     CommandInteraction,
//     PermissionResolvable,
//     CommandInteractionOptionResolver,
//     ApplicationCommandOptionData,
//     ApplicationCommandPermissionData
// } from 'discord.js';
// import type {
//     CommandOptionsRunType,
//     BucketScope
// } from '@sapphire/framework';

// export abstract class HildaSlashCommand<T = CommandInteractionOptionResolver> extends AliasPiece {
//     declare public aliases: string[];
//     public description: string;
//     public arguments: ApplicationCommandOptionData[];
//     public guildCommand: boolean;
//     public defaultPermission: boolean;
//     public permissions: ApplicationCommandPermissionData[];

//     protected constructor(context: PieceContext, options: SlashCommandOptions) {
//         super(context, { ...options, name: (options.name ?? context.name).toLowerCase() });
//         this.aliases = options.aliases ?? [];
//         this.description = options.description ?? '';
//         this.arguments = options.arguments ?? [];
//         this.guildCommand = options.permissions?.length as number > 0 ? true : options.guildCommand as boolean;
//         this.defaultPermission = options.defaultPermission ?? true;
//         this.permissions = options.permissions ?? [];
//     }

//     public abstract run(interaction: CommandInteraction, args: T, context: SlashCommandContext): Awaited<unknown>;

//     public toJSON(): Record<string, any> {
//         return {
//             ...super.toJSON(),
//             name: this.name,
//             description: this.description,
//             arguments: this.arguments,
//             defaultPermission: this.defaultPermission,
//             permissions: this.permissions,
//             guildCommand: this.guildCommand,
//         };
//     }
// }

// export interface SlashCommandOptions extends PieceOptions {
//     aliases: string[];
//     arguments?: ApplicationCommandOptionData[];
//     description?: string;
//     guildCommand?: boolean;
//     defaultPermission?: boolean;
//     permissions?: ApplicationCommandPermissionData[];
//     nsfw?: boolean;
//     cooldownLimit?: number;
//     cooldownDelay?: number;
//     cooldownScope?: BucketScope;
//     requiredClientPermissions?: PermissionResolvable;
//     runIn?: CommandOptionsRunType | readonly CommandOptionsRunType[] | null;
// }

// export interface SlashCommandContext extends Record<PropertyKey, unknown> {
//     commandName: string;
// }

// import { Command, CommandOptions, PieceContext } from "@sapphire/framework";
// import type { ApplicationCommandData, Awaited, CommandInteraction } from "discord.js";

// export abstract class HildaSlashCommand extends Command {
// 	public readonly enabledGuilds: string[];
// 	public readonly commandData: ApplicationCommandData

// 	constructor(context: PieceContext, options: CustomCommand.Options) {
// 		super(context)
// 		this.enabledGuilds = options.enabledGuilds;
// 		this.commandData = options.commandData;
// 	}

// 	public abstract slashRun(interaction: CommandInteraction): Awaited<unknown>;
// }

// export namespace CustomCommand {
// 	export type Options = CommandOptions & {
// 		enabledGuilds: string[],
// 		commandData: ApplicationCommandData
// 	}
// }

// export interface SlashCommandContext extends Record<PropertyKey, unknown> {
//     commandName: string;
// }

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