import { Message, MessageEmbed } from "discord.js"
import { send } from '@sapphire/plugin-editable-commands';

export const RandomLoadingMessage = ['Computing...', 'Thinking...', 'Cooking some food', 'Give me a moment', 'Loading...'];

export async function getMessage(message: Message) {
    return message;
}

export function cast<T>(value: any): T {
	return value as T;
}

export function pickRandom<T>(array: readonly T[]): T {
	const { length } = array;
	return array[Math.floor(Math.random() * length)];
}

export function sendLoadingMessage(message: Message): Promise<typeof message> {
	return send(message, { embeds: [new MessageEmbed().setDescription(pickRandom(RandomLoadingMessage)).setColor('#FF0000')] });
}


// export async function addAdminPermissions(message: Message, interactionID: string) {
//     if (!client?.ownerID) await client.application?.fetch();

//     let role = message.member?.roles.cache.find(role => role.permissions.has('MANAGE_GUILD'));
//     let roleID = role?.id as string;
//     const command = await client.guilds.cache.get(message.guild?.id as string)?.commands.fetch(interactionID) as ApplicationCommand;

    

//     // const permissions = [
//     //     {
//     //         id: roleID,
//     //         type: 'role',
//     //         permission: true,
//     //     },
//     // ];
//     const fullPermissions = [
//         {
//             id: roleID,
//             permissions: [{
//                 id: roleID,
//                 type: 'ROLE',
//                 permission: true,
//             }],
//         },
//         {
//             id: message.guild?.roles.everyone.id as string,
//             permissions: [{
//                 id: message.guild?.roles.everyone.id as string,
//                 type: 'ROLE',
//                 permission: false,
//             }],
//         },
//     ];

//     let guildID = getGuildID;

//     await client.guilds.cache.get(getGuildID)?.commands.permissions.set({ fullPermissions });
//     // await command.permissions.add( { fullPermissions })
// }