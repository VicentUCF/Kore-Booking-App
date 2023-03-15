import { AggregateRoot } from '../../../Shared/domain/AggregateRoot';
import { BookingDate } from './BookingDate';
import { BookingId } from './BookingId';
import { BookingCreatedDomainEvent } from './BookingCreatedDomainEvent';
import { Court, CourtPrimitive } from '../../Courts/domain/Court';
import { User, UserPrimitive } from '../../Users/domain/User';
export class Booking extends AggregateRoot {
  readonly id: BookingId;
  readonly user: User;
  readonly court: Court;
  readonly date: BookingDate;

  constructor({ id, user, court, date }: { id: BookingId; user: User; court: Court; date: BookingDate }) {
    super();
    this.id = id;
    this.user = user;
    this.court = court;
    this.date = date;
  }

  static create({ id, user, court, date }: { id: BookingId; user: User; court: Court; date: BookingDate }) {
    const booking = new Booking({ id, user, court, date });

    booking.record(
      new BookingCreatedDomainEvent({
        aggregateId: booking.id.value,
        user,
        court,
        date: booking.date.value
      })
    );

    return booking;
  }

  static fromPrimitives(plainData: { id: string; court: CourtPrimitive; user: UserPrimitive; date: Date }): Booking {
    return new Booking({
      id: new BookingId(plainData.id),
      court: Court.fromPrimitives(plainData.court),
      user: User.fromPrimitives(plainData.user),
      date: new BookingDate(plainData.date)
    });
  }

  toPrimitives() {
    return {
      id: this.id.value,
      court: this.court.toPrimitives(),
      user: this.user.toPrimitives(),
      date: this.date.value
    };
  }
}
