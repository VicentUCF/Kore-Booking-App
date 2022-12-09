import { StringValueObject } from '../../../Shared/domain/value-object/StringValueObject';
import { CourtsNameLengthExceeded } from './errors/CourtName/CourtsNameLengthExceeded';
import { CourtsNameLengthUnderNeed } from './errors/CourtName/CourtsNameLengthUnderNeed';
export class CourtName extends StringValueObject {
  constructor(value: string) {
    if (value.length > 8) {
      throw new CourtsNameLengthExceeded();
    }
    if (value.length < 3) {
      throw new CourtsNameLengthUnderNeed();
    }
    super(value);
  }
}
