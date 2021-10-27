import { Command, CommandOptions, PieceContext } from '@sapphire/framework';

export default abstract class HildaCommand extends Command {

	public constructor(context: PieceContext, { name, ...options }: CommandOptions) {
		super(context, { name, ...options });
	}
}
