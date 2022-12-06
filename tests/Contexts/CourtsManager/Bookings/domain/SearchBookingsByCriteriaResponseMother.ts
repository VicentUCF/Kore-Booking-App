import { Booking } from '../../../../../src/Contexts/CourtsManager/Bookings/domain/Booking';
import { BookingsResponse } from '../../../../../src/Contexts/CourtsManager/Bookings/application/SearchAll/BookingsResponse';

export class SearchBookingsByCriteriaResponseMother {
  static create(booking: Array<Booking>) {
    return new BookingsResponse(booking);
  }
}
