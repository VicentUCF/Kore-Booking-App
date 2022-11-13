import { BookingCreatedDomainEvent } from '../../../../../src/Contexts/CourtsManager/Bookings/domain/BookingCreatedDomainEvent';
import { Booking } from '../../../../../src/Contexts/CourtsManager/Bookings/domain/Booking';

export class BookingCreatedDomainEventMother {
  static create({
    aggregateId,
    eventId,
    courtId,
    date,
    occurredOn
  }: {
    aggregateId: string;
    eventId?: string;
    courtId: string;
    date: Date;
    occurredOn?: Date;
  }): BookingCreatedDomainEvent {
    return new BookingCreatedDomainEvent({
      aggregateId,
      eventId,
      courtId,
      date,
      occurredOn
    });
  }

  static fromBooking(booking: Booking): BookingCreatedDomainEvent {
    return new BookingCreatedDomainEvent({
      aggregateId: booking.id.value,
      courtId: booking.courtId.value,
      date: booking.date.value
    });
  }
}
