import { BookingDate } from '../../../../../src/Contexts/CourtsManager/Bookings/domain/BookingDate';
import { DateMother } from '../../../Shared/domain/DateMother';
export class BookingDateMother {
  static create(value: Date): BookingDate {
    return new BookingDate(value);
  }

  static random(): BookingDate {
    return this.create(DateMother.random());
  }
}
