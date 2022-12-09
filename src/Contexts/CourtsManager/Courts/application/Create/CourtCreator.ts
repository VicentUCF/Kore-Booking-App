import { CourtRepository } from '../../domain/CourtRepository';
import { EventBus } from '../../../../Shared/domain/EventBus';
import { CourtId } from '../../domain/CourtId';
import { CourtName } from '../../domain/CourtName';
import { CourtSchedule } from '../../domain/CourtSchedule';
import { Court } from '../../domain/Court';
export class CourtCreator {
  constructor(private repository: CourtRepository, private eventBus: EventBus) {}

  async run(params: { id: CourtId; name: CourtName; schedule: CourtSchedule }) {
    const court = Court.create(params.id, params.name, params.schedule);
    await this.repository.save(court);
    await this.eventBus.publish(court.pullDomainEvents());
  }
}
