import { WordMother } from '../../../Shared/domain/WordMother';
import { CourtName } from '../../../../../src/Contexts/CourtsManager/Courts/domain/CourtName';
export class CourtNameMother  {
  static create(value: string): CourtName {
    return new CourtName(value);
  }

  static random(): CourtName {
    return this.create(WordMother.random({ maxLength: 7, minLength: 3}));
  }
}
