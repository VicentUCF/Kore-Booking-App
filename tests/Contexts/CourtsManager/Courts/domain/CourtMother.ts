import { CourtName } from '../../../../../src/Contexts/CourtsManager/Courts/domain/CourtName';
import { CourtSchedule } from '../../../../../src/Contexts/CourtsManager/Courts/domain/CourtSchedule';
import { CourtId } from '../../../../../src/Contexts/CourtsManager/Courts/domain/CourtId';
import { Court } from '../../../../../src/Contexts/CourtsManager/Courts/domain/Court';
import { CourtIdMother } from './CourtIdMother';
import { CourtNameMother } from './CourtNameMother';
import { CourtScheduleMother } from './CourtScheduleMother';

export class CourtMother {
  static create(id: CourtId, name: CourtName, schedule: CourtSchedule): Court {
    return new Court(id, name, schedule);
  }

  static random(): Court {
    return this.create(CourtIdMother.random(), CourtNameMother.random(), CourtScheduleMother.random());
  }

  static from(command: any): Court {
    return this.create(
      CourtIdMother.create(command.id),
      CourtNameMother.create(command.name),
      CourtScheduleMother.create(command.schedule),
    );
  }
}
