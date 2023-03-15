import { CourtPrimitive } from '../../../Courts/domain/Court';
import { UserPrimitive } from '../../../Users/domain/User';
import { Booking } from '../../domain/Booking';
interface BookingResponse {
  id: string;
  court: CourtPrimitive;
  user: UserPrimitive;
  date: Date;
}

export class BookingsResponse {
  public readonly bookings: Array<BookingResponse>;

  constructor(bookings: Array<Booking>) {
    this.bookings = bookings.map(booking => booking.toPrimitives());
  }
}
