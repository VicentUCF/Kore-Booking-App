import { CourtId } from '../../../../../src/Contexts/CourtsManager/Courts/domain/CourtId';
import { UuidMother } from '../../../Shared/domain/UuidMother';

export class CourtIdMother {
  static create(value: string): CourtId {
    return new CourtId(value);
  }

  static random(): CourtId {
    return this.create(UuidMother.random());
  }
}
