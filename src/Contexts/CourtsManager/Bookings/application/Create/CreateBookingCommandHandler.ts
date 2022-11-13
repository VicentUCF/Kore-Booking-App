import { CreateBookingCommand } from '../../domain/CreateBookingCommand';
import { CommandHandler } from '../../../../Shared/domain/CommandHandler';
import { Command } from '../../../../Shared/domain/Command';
import { BookingId } from '../../domain/BookingId';
import { CourtId } from '../../domain/CourtId';
import { BookingDate } from '../../domain/BookingDate';
import { BookingCreator } from './BookingCreator';

export class CreateBookingCommandHandler implements CommandHandler<CreateBookingCommand> {
  constructor(private bookingCreator: BookingCreator) {}

  subscribedTo(): Command {
    return CreateBookingCommand;
  }

  async handle(command: CreateBookingCommand): Promise<void> {
    const id = new BookingId(command.id);
    const courtId = new CourtId(command.courtId);
    const date = new BookingDate(command.date);
    await this.bookingCreator.run({ id, courtId, date });
  }
}
