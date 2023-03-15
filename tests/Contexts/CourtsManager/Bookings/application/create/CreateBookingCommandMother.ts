import { BookingId } from '../../../../../../src/Contexts/CourtsManager/Bookings/domain/BookingId';
import { BookingDate } from '../../../../../../src/Contexts/CourtsManager/Bookings/domain/BookingDate';
import { CreateBookingCommand } from '../../../../../../src/Contexts/CourtsManager/Bookings/domain/CreateBookingCommand';
import { BookingIdMother } from '../../domain/BookingIdMother';
import { BookingDateMother } from '../../domain/BookingDateMother';
import { Court } from '../../../../../../src/Contexts/CourtsManager/Courts/domain/Court';
import { User } from '../../../../../../src/Contexts/CourtsManager/Users/domain/User';
import { CourtMother } from '../../../Courts/domain/CourtMother';
import { UserMother } from '../../../Users/domain/UserMother';

export class CreateBookingCommandMother {
  static create(id: BookingId, court: Court, user: User, date: BookingDate): CreateBookingCommand {
    return {
      id: id.value,
      user: {
        id: user.id.value,
        name: user.name.value,
        email: user.email.value,
        level: user.level.value,
        phone: user.phone?.value
      },
      court: {
        id: court.id.value,
        name: court.name.value,
        schedule: court.schedule.value
      },
      date: date.value
    };
  }

  static random(): CreateBookingCommand {
    return this.create(BookingIdMother.random(), CourtMother.random(), UserMother.random(), BookingDateMother.random());
  }
}
