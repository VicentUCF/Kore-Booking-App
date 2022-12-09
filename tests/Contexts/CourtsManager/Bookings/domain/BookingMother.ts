import { BookingId } from '../../../../../src/Contexts/CourtsManager/Bookings/domain/BookingId';
import { CourtId } from '../../../../../src/Contexts/CourtsManager/Courts/domain/CourtId';
import { BookingDate } from '../../../../../src/Contexts/CourtsManager/Bookings/domain/BookingDate';
import { Booking } from '../../../../../src/Contexts/CourtsManager/Bookings/domain/Booking';
import { BookingIdMother } from './BookingIdMother';
import { CourtIdMother } from './BookingCourtIdMother';
import { BookingDateMother } from './BookingDateMother';
import { CreateBookingCommand } from '../../../../../src/Contexts/CourtsManager/Bookings/domain/CreateBookingCommand';
export class BookingMother {
  static create(
    id: BookingId,
    courtId: CourtId,
    date: BookingDate,
  ): Booking {
    return new Booking(id, courtId, date);
  }

  static withCourtIdAndDate(
    courtId: CourtId,
    date: BookingDate,
  ): Booking {
    return this.create(BookingIdMother.random(), courtId, date);
  }

  static random(): Booking {
    return this.create(
      BookingIdMother.random(),
      CourtIdMother.random(),
      BookingDateMother.random(),
    );
  }


  static from(command: CreateBookingCommand): Booking {
    return this.create(
      BookingIdMother.create(command.id),
      CourtIdMother.create(command.courtId),
      BookingDateMother.create(command.date),
    );
  }


}
