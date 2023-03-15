import { AggregateRoot } from '../../../Shared/domain/AggregateRoot';
import { CourtId } from './CourtId';
import { CourtName } from './CourtName';
import { CourtSchedule } from './CourtSchedule';
import { CourtCreatedDomainEvent } from './CourtCreatedDomainEvent';

export interface CourtPrimitive {
  id: string;
  name: string;
  schedule: string;
}
export class Court extends AggregateRoot {
  readonly id: CourtId;
  readonly name: CourtName;
  readonly schedule: CourtSchedule;

  constructor(id: CourtId, name: CourtName, schedule: CourtSchedule) {
    super();
    this.id = id;
    this.name = name;
    this.schedule = schedule;
  }

  static create(id: CourtId, name: CourtName, schedule: CourtSchedule) {
    const court = new Court(id, name, schedule);
    court.record(
      new CourtCreatedDomainEvent({
        aggregateId: court.id.value,
        name: court.name.value,
        schedule: court.schedule.value
      })
    );

    return court;
  }

  static fromPrimitives(plainData: CourtPrimitive): Court {
    return new Court(new CourtId(plainData.id), new CourtName(plainData.name), new CourtSchedule(plainData.schedule));
  }

  toPrimitives() {
    return {
      id: this.id.value,
      name: this.name.value,
      schedule: this.schedule.value
    };
  }
}
