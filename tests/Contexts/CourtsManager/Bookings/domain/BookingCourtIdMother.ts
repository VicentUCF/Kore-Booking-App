import { UuidMother } from '../../../Shared/domain/UuidMother';
import { CourtId } from '../../../../../src/Contexts/CourtsManager/Courts/domain/CourtId';
export class CourtIdMother {
  static create(value: string): CourtId {
    return new CourtId(value);
  }

  static random(): CourtId {
    return this.create(UuidMother.random());
  }
}
