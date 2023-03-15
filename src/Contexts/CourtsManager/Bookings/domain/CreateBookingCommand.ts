import { Command } from '../../../Shared/domain/Command';
import { CourtPrimitive } from '../../Courts/domain/Court';
import { UserPrimitive } from '../../Users/domain/User';

type Params = {
  id: string;
  user: UserPrimitive;
  court: CourtPrimitive;
  date: Date;
};

export class CreateBookingCommand extends Command {
  id: string;
  user: UserPrimitive;
  court: CourtPrimitive;
  date: Date;

  constructor({ id, user, court, date }: Params) {
    super();
    this.id = id;
    this.user = user;
    this.court = court;
    this.date = date;
  }
}
