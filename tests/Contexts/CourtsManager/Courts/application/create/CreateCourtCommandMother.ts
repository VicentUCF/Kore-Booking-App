import { CourtId } from '../../../../../../src/Contexts/CourtsManager/Courts/domain/CourtId';
import { CourtName } from '../../../../../../src/Contexts/CourtsManager/Courts/domain/CourtName';
import { CourtSchedule } from '../../../../../../src/Contexts/CourtsManager/Courts/domain/CourtSchedule';
import { CourtIdMother } from '../../domain/CourtIdMother';
import { CourtNameMother } from '../../domain/CourtNameMother';
import { CourtScheduleMother } from '../../domain/CourtScheduleMother';
import { CreateCourtCommand } from '../../../../../../src/Contexts/CourtsManager/Courts/domain/CreateCourtCommand';
export class CreateCourtCommandMother{
  static create(id: CourtId, name: CourtName, schedule: CourtSchedule): CreateCourtCommand {
    return {
      id: id.value,
      name: name.value,
      schedule: schedule.value
    }
  }

  static random(): CreateCourtCommand {
    return this.create(CourtIdMother.random(), CourtNameMother.random(), CourtScheduleMother.random());
  }
}
