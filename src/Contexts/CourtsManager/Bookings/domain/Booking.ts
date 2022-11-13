import { AggregateRoot } from '../../../Shared/domain/AggregateRoot';
import { BookingDate } from './BookingDate';
import { CourtId } from './CourtId';
import { BookingId } from './BookingId';
import { BookingCreatedDomainEvent } from './BookingCreatedDomainEvent';
export class Booking extends AggregateRoot {
  readonly id: BookingId;
  readonly courtId: CourtId;
  readonly date: BookingDate;

  constructor(id: BookingId, courtId: CourtId, date: BookingDate) {
    super();
    this.id = id;
    this.courtId = courtId;
    this.date = date;
  }

  static create(id: BookingId, courtId: CourtId, date: BookingDate) {
    const booking = new Booking(id, courtId, date);
    booking.record(
      new BookingCreatedDomainEvent({
        aggregateId: booking.id.value,
        courtId: booking.courtId.value,
        date: booking.date.value
      })
    );

    return booking;
  }

  static fromPrimitives(plainData: { id: string; courtId: string; date: Date }): Booking {
    return new Booking(new BookingId(plainData.id), new CourtId(plainData.courtId), new BookingDate(plainData.date));
  }

  toPrimitives() {
    return {
      id: this.id.value,
      courtId: this.courtId.value,
      date: this.date.value
    };
  }
}
