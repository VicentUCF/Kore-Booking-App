import { CreateBookingCommand } from '../../domain/CreateBookingCommand';
import { CommandHandler } from '../../../../Shared/domain/CommandHandler';
import { Command } from '../../../../Shared/domain/Command';
import { BookingId } from '../../domain/BookingId';
import { BookingDate } from '../../domain/BookingDate';
import { BookingCreator } from './BookingCreator';
import { Court } from '../../../Courts/domain/Court';
import { User } from '../../../Users/domain/User';

export class CreateBookingCommandHandler implements CommandHandler<CreateBookingCommand> {
  constructor(private bookingCreator: BookingCreator) {}

  subscribedTo(): Command {
    return CreateBookingCommand;
  }

  async handle(command: CreateBookingCommand): Promise<void> {
    const id = new BookingId(command.id);
    const court = Court.fromPrimitives(command.court);
    const user = User.fromPrimitives(command.user);
    const date = new BookingDate(command.date);
    await this.bookingCreator.run({ id, user, court, date });
  }
}
