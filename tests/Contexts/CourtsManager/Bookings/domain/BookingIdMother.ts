import { BookingId } from '../../../../../src/Contexts/CourtsManager/Bookings/domain/BookingId';
import { UuidMother } from '../../../Shared/domain/UuidMother';
export class BookingIdMother {
  static create(value: string): BookingId {
    return new BookingId(value);
  }

  static random(): BookingId {
    return this.create(UuidMother.random());
  }
}
