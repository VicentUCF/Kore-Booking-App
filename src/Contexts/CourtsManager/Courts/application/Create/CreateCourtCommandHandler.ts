import { Command } from '../../../../Shared/domain/Command';
import { CommandHandler } from '../../../../Shared/domain/CommandHandler';
import { CreateCourtCommand } from '../../domain/CreateCourtCommand';
import { CourtId } from '../../domain/CourtId';
import { CourtName } from '../../domain/CourtName';
import { CourtSchedule } from '../../domain/CourtSchedule';
import { CourtCreator } from './CourtCreator';

export class CreateCourtCommandHandler implements CommandHandler<CreateCourtCommand> {
  constructor(private courtCreator: CourtCreator) {}

  subscribedTo(): Command {
    return CreateCourtCommand;
  }

  async handle(command: CreateCourtCommand): Promise<void> {
    const id = new CourtId(command.id);
    const name = new CourtName(command.name);
    const schedule = new CourtSchedule(command.schedule);
    await this.courtCreator.run({ id, name, schedule });
  }
}
