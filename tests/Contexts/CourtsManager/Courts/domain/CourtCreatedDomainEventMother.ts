import { CourtCreatedDomainEvent } from '../../../../../src/Contexts/CourtsManager/Courts/domain/CourtCreatedDomainEvent';
import { Court } from '../../../../../src/Contexts/CourtsManager/Courts/domain/Court';
export class CourtCreatedDomainEventMother {
  static create({
    aggregateId,
    eventId,
    name,
    schedule,
    occurredOn
  }: {
    aggregateId: string;
    eventId?: string;
    name: string;
    schedule: string;
    occurredOn?: Date;
  }): CourtCreatedDomainEvent {
    return new CourtCreatedDomainEvent({
      aggregateId,
      eventId,
      name,
      schedule,
      occurredOn
    });
  }

  static fromCourt(court: Court): CourtCreatedDomainEvent {
    return new CourtCreatedDomainEvent({
      aggregateId: court.id.value,
      name: court.name.value,
      schedule: court.schedule.value
    });
  }
}
