import { BookingRepository } from '../../domain/BookingRepository';
import { BookingsResponse } from './BookingsResponse';
export class BookingsFinder {
  constructor(private readonly repository: BookingRepository) {}

  async run() {
    const bookings = await this.repository.searchAll();
    return new BookingsResponse(bookings);
  }
}
