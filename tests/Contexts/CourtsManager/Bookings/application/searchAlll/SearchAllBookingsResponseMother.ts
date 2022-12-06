import { BookingsResponse } from '../../../../../../src/Contexts/CourtsManager/Bookings/application/SearchAll/BookingsResponse';
import { Booking } from '../../../../../../src/Contexts/CourtsManager/Bookings/domain/Booking';

export class SearchAllBookingsResponseMother {
  static create(bookings: Array<Booking>) {
    return new BookingsResponse(bookings);
  }
}
