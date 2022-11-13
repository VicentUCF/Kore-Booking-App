import { Criteria } from "../../../../../src/Contexts/Shared/domain/criteria/Criteria";
import { BookingRepository } from '../../../../../src/Contexts/CourtsManager/Bookings/domain/BookingRepository';
import { Booking } from '../../../../../src/Contexts/CourtsManager/Bookings/domain/Booking';

export class BookingRepositoryMock implements BookingRepository {
  private mockSearchAll = jest.fn();
  private mockSave = jest.fn();
  private mockMatching = jest.fn();
  private bookings: Array<Booking> = [];

  returnOnSearchAll(bookings: Array<Booking>) {
    this.bookings = bookings;
  }

  returnMatching(bookings: Array<Booking>) {
    this.bookings = bookings;
  }

  async searchAll(): Promise<Booking[]> {
    this.mockSearchAll();
    return this.bookings;
  }

  assertSearchAll() {
    expect(this.mockSearchAll).toHaveBeenCalled();
  }

  async save(booking: Booking): Promise<void> {
    this.mockSave(booking);
  }

  assertSaveHasBeenCalledWith(booking: Booking) {
    expect(this.mockSave).toHaveBeenCalledWith(booking);
  }

  async matching(criteria: Criteria): Promise<Booking[]> {
    this.mockMatching(criteria);
    return this.bookings;
  }

  assertMatchingHasBeenCalledWith() {
    expect(this.mockMatching).toHaveBeenCalled();
  }
}
