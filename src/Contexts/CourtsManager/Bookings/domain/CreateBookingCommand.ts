import { Command } from '../../../Shared/domain/Command';

type Params = {
    id: string;
    courtId: string;
    date: Date;
};

export class CreateBookingCommand extends Command {
  id: string;
  courtId: string;
  date: Date;

  constructor({id, courtId, date}: Params) {
    super();
    this.id = id;
    this.courtId = courtId;
    this.date = date;
  }
}
