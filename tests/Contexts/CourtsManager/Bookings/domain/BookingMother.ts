import { BookingId } from '../../../../../src/Contexts/CourtsManager/Bookings/domain/BookingId';
import { BookingDate } from '../../../../../src/Contexts/CourtsManager/Bookings/domain/BookingDate';
import { Booking } from '../../../../../src/Contexts/CourtsManager/Bookings/domain/Booking';
import { BookingIdMother } from './BookingIdMother';
import { BookingDateMother } from './BookingDateMother';
import { CreateBookingCommand } from '../../../../../src/Contexts/CourtsManager/Bookings/domain/CreateBookingCommand';
import { Court } from '../../../../../src/Contexts/CourtsManager/Courts/domain/Court';
import { User } from '../../../../../src/Contexts/CourtsManager/Users/domain/User';
import { CourtMother } from '../../Courts/domain/CourtMother';
import { UserMother } from '../../Users/domain/UserMother';
export class BookingMother {
  static create({ id, court, user, date }: { id: BookingId; court: Court; user: User; date: BookingDate }): Booking {
    return new Booking({ id, court, user, date });
  }

  static random(): Booking {
    return this.create({
      id: BookingIdMother.random(),
      court: CourtMother.random(),
      user: UserMother.random(),
      date: BookingDateMother.random()
    });
  }

  static from(command: CreateBookingCommand): Booking {
    return this.create({
      id: BookingIdMother.create(command.id),
      court: CourtMother.from(command.court),
      user: UserMother.from(command.user),
      date: BookingDateMother.create(command.date)
    });
  }
}
