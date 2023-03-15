import { BookingCreatedDomainEvent } from '../../../../../src/Contexts/CourtsManager/Bookings/domain/BookingCreatedDomainEvent';
import { Booking } from '../../../../../src/Contexts/CourtsManager/Bookings/domain/Booking';
import { Court } from '../../../../../src/Contexts/CourtsManager/Courts/domain/Court';
import { User } from '../../../../../src/Contexts/CourtsManager/Users/domain/User';

export class BookingCreatedDomainEventMother {
  static create({
    aggregateId,
    eventId,
    court,
    user,
    date,
    occurredOn
  }: {
    aggregateId: string;
    eventId?: string;
    court: Court;
    user: User;
    date: Date;
    occurredOn?: Date;
  }): BookingCreatedDomainEvent {
    return new BookingCreatedDomainEvent({
      aggregateId,
      eventId,
      court,
      user,
      date,
      occurredOn
    });
  }

  static fromBooking(booking: Booking): BookingCreatedDomainEvent {
    return new BookingCreatedDomainEvent({
      aggregateId: booking.id.value,
      court: booking.court,
      user: booking.user,
      date: booking.date.value
    });
  }
}
