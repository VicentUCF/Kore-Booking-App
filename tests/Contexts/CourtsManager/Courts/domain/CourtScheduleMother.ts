import { CourtSchedule } from '../../../../../src/Contexts/CourtsManager/Courts/domain/CourtSchedule';
import { WordMother } from '../../../Shared/domain/WordMother';

export class CourtScheduleMother {
  static create(value: string): CourtSchedule {
    return new CourtSchedule(value);
  }

  static random(): CourtSchedule {
    return this.create(WordMother.random({ maxLength: 10 }));
  }
}
