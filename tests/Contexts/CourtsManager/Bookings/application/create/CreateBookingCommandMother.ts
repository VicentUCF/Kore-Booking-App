import { BookingId } from '../../../../../../src/Contexts/CourtsManager/Bookings/domain/BookingId';
import { CourtId } from '../../../../../../src/Contexts/CourtsManager/Courts/domain/CourtId';
import { BookingDate } from '../../../../../../src/Contexts/CourtsManager/Bookings/domain/BookingDate';
import { CreateBookingCommand } from '../../../../../../src/Contexts/CourtsManager/Bookings/domain/CreateBookingCommand';
import { BookingIdMother } from '../../domain/BookingIdMother';
import { CourtIdMother } from '../../domain/BookingCourtIdMother';
import { BookingDateMother } from '../../domain/BookingDateMother';


export class CreateBookingCommandMother {
  static create(id: BookingId, courtId: CourtId, date: BookingDate): CreateBookingCommand {
    return { id: id.value, courtId: courtId.value, date: date.value };
  }

  static random(): CreateBookingCommand {
    return this.create(BookingIdMother.random(), CourtIdMother.random(), BookingDateMother.random());
  }

}
