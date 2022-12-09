import { DomainEvent } from '../../../Shared/domain/DomainEvent';
type CreateCourtDomainEventAttributes = {
  readonly name: string;
  readonly schedule: string;
};

export class CourtCreatedDomainEvent extends DomainEvent {
  static readonly EVENT_NAME = 'court.created';

  readonly name: string;
  readonly schedule: string;

  constructor({
    aggregateId,
    name,
    schedule,
    eventId,
    occurredOn
  }: {
    aggregateId: string;
    eventId?: string;
    name: string;
    schedule: string;
    occurredOn?: Date;
  }) {
    super({ eventName: CourtCreatedDomainEvent.EVENT_NAME, aggregateId, eventId, occurredOn });
    this.name = name;
    this.schedule = schedule;
  }

  toPrimitives(): CreateCourtDomainEventAttributes {
    const { name, schedule } = this;
    return {
      name,
      schedule
    };
  }

  static fromPrimitives(params: {
    aggregateId: string;
    attributes: CreateCourtDomainEventAttributes;
    eventId: string;
    occurredOn: Date;
  }): DomainEvent {
    const { aggregateId, attributes, occurredOn, eventId } = params;
    return new CourtCreatedDomainEvent({
      aggregateId,
      name: attributes.name,
      schedule: attributes.schedule,
      eventId,
      occurredOn
    });
  }
}
