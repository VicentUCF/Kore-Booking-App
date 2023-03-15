import { DomainEvent } from '../../../Shared/domain/DomainEvent';
import { Court, CourtPrimitive } from '../../Courts/domain/Court';
import { User, UserPrimitive } from '../../Users/domain/User';

type CreateBookingDomainEventAttributes = {
  readonly date: Date;
  readonly court: CourtPrimitive;
  readonly user: UserPrimitive;
};

export class BookingCreatedDomainEvent extends DomainEvent {
  static readonly EVENT_NAME = 'booking.created';

  readonly court: Court;
  readonly user: User;
  readonly date: Date;

  constructor({
    aggregateId,
    court,
    user,
    date,
    eventId,
    occurredOn
  }: {
    aggregateId: string;
    eventId?: string;
    court: Court;
    user: User;
    date: Date;
    occurredOn?: Date;
  }) {
    super({ eventName: BookingCreatedDomainEvent.EVENT_NAME, aggregateId, eventId, occurredOn });
    this.court = court;
    this.user = user;
    this.date = date;
  }

  toPrimitives(): CreateBookingDomainEventAttributes {
    const user = this.user.toPrimitives();
    const court = this.court.toPrimitives();

    return {
      court,
      user,
      date: this.date
    };
  }

  static fromPrimitives(params: {
    aggregateId: string;
    attributes: CreateBookingDomainEventAttributes;
    eventId: string;
    occurredOn: Date;
  }): DomainEvent {
    const { aggregateId, attributes, occurredOn, eventId } = params;
    return new BookingCreatedDomainEvent({
      aggregateId,
      date: attributes.date,
      court: Court.fromPrimitives(attributes.court),
      user: User.fromPrimitives(attributes.user),
      eventId,
      occurredOn
    });
  }
}
