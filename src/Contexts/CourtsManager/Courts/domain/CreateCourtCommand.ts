import { Command } from '../../../Shared/domain/Command';

type Params = {
  id: string;
  name: string;
  schedule: string;
};

export class CreateCourtCommand extends Command {
  id: string;
  name: string;
  schedule: string;

  constructor({ id, name, schedule }: Params) {
    super();
    this.id = id;
    this.name = name;
    this.schedule = schedule;
  }
}
