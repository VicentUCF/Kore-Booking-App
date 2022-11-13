import { DomainEvent } from '../../../Shared/domain/DomainEvent';

type CreateBookingDomainEventAttributes = {
  readonly date: Date;
  readonly courtId: string;
};

export class BookingCreatedDomainEvent extends DomainEvent {
  static readonly EVENT_NAME = 'booking.created';

  readonly courtId: string;
  readonly date: Date;

  constructor({
    aggregateId,
    courtId,
    date,
    eventId,
    occurredOn
  }: {
    aggregateId: string;
    eventId?: string;
    courtId: string;
    date: Date;
    occurredOn?: Date;
  }) {
    super({ eventName: BookingCreatedDomainEvent.EVENT_NAME, aggregateId, eventId, occurredOn });
    this.courtId = courtId;
    this.date = date;
  }

  toPrimitives(): CreateBookingDomainEventAttributes {
    const { courtId, date } = this;
    return {
      courtId,
      date
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
      courtId: attributes.courtId,
      eventId,
      occurredOn
    });
  }
}
