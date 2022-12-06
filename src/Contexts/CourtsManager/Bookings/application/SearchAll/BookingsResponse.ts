import { Booking } from '../../domain/Booking';
interface BookingResponse {
  id: string;
  courtId: string;
  date: Date;
}

export class BookingsResponse {
  public readonly bookings: Array<BookingResponse>;

  constructor(bookings: Array<Booking>) {
    this.bookings = bookings.map(booking => booking.toPrimitives());
  }
}
