import { Store } from '@sapphire/pieces';
import { HildaSlashCommand } from '#lib/structures/HildaSlashCommand';

export default class SlashCommandStore extends Store<HildaSlashCommand> {

    constructor() {
        super(HildaSlashCommand as any, { name: 'slash-commands' });
    }

}