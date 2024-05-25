import { type Context } from 'telegraf';
import { type Update } from 'telegraf/typings/core/types/typegram';

import { type ICommand } from './types';

export class CreateCommand implements ICommand {
  public execute = async (ctx: Context<Update>): Promise<void> => {
    ctx.session ??= {
      currentMethod: 'create',
      currentStep: 1,
      createData: { title: null, when: null, untilWhen: null, location: null },
    };

    ctx.session.currentMethod = 'create';
    ctx.session.currentStep = 1;
    ctx.session.createData = { title: null, when: null, untilWhen: null, location: null };

    await ctx.reply(`Glad you want to add an experience 🤗

What do you want to call it? 🌱
      `);
  };
}
