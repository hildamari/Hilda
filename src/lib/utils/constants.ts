// import { PREFIX } from '#root/config';

// export enum ConfigurableGuildKeys {
// 	Prefix = 'prefix',
// 	QuoteChannel = 'quoteChannel',
// 	AdminRole = 'adminRole',
// 	ModRole = 'modRole',
//     AnnouncementChannel = 'announcementChannel'
// }

// export const DefaultConfigurableGuildValues = {
// 	prefix: PREFIX,
// 	quoteChannel: 'quotes',
// 	adminRole: 'Administrator',
// 	modRole: 'Moderator',
//     announcementChannel: 'discord-announcements'
// };
import { PREFIX } from '#root/config';

export enum ConfigurableGuildKeys {
	Prefix = 'prefix',
	QuoteChannel = 'quoteChannel',
	ModlogsChannel = 'modlogsChannel',
	AnnouncementChannel = 'announcementChannel',
    AdminRole = 'adminRole',
 	ModRole = 'modRole',
}

export const DefaultConfigurableGuildValues = {
	prefix: () => PREFIX,
	quoteChannel: 'quotes',
	announcementChannel: 'discord-announcements',
	modlogsChannel: 'mod-logs',
    adminRole: 'Administrator',
	modRole: 'Moderator',
};
